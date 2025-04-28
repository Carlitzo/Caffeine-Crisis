var player;
var cursors;
var jumpCounter;

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create ()
{
    this.add.image(this.scale.width / 2, this.scale.height / 2, 'sky').setDisplaySize(this.scale.width, this.scale.height);


    let platforms = this.physics.add.staticGroup();

    platforms.create(this.scale.width, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.setScale(1.3);
    player.body.setGravityY(400);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(player, platforms);

    jumpCounter = 0;
}

function update ()
{
    if (cursors.left.isDown) 
    {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) 
    {
        player.setVelocityX(160);
        player.anims.play('right', true);
    } 
    else 
    {
        player.setVelocityX(0);
        player.anims.play('turn', true);
    }

    if (player.body.onFloor()) 
    {
        jumpCounter = 0;
    }

    if (Phaser.Input.Keyboard.JustDown(cursors.up) && jumpCounter < 2)
    {
        player.setVelocityY(-400);
        jumpCounter++;
    }
}
