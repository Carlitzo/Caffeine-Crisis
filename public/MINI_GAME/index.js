var player;
var cursors;
var jumpButton;
var leftButton;
var rightButton;
var jumpCounter;
var pole; // Lyktstolpen
var bottom;
var background;
var platforms;
var touchLeft = false;
var touchRight = false;

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1200 },
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
    this.load.image('background', 'assets/sky.png');
    this.load.image('bottom', 'assets/platform.png');
    // this.load.image('pole', 'assets/pole.png'); // En lång lyktstolpe-bild
    this.load.image('buttonJump', 'assets/buttonJump.png'); // En enkel hoppknapp-bild
    this.load.image('buttonLeft', 'assets/buttonLeft.png');
    this.load.image('buttonRight', 'assets/buttonRight.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{

    background = this.add.image(this.scale.width / 2, this.scale.height, 'background');
    background.setDisplaySize(this.scale.width * 2, this.scale.height * 6);

    platforms = this.physics.add.staticGroup();

    // Lägg till lyktstolpen och gör den väldigt hög
    // pole = this.add.tileSprite(0, 0, this.scale.width, 5000, 'pole');
    // pole.setOrigin(0, 0);

    // Skapa spelaren
    player = this.physics.add.sprite(this.scale.width/2, this.scale.height - 100, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.setScale(1.3);

    this.physics.add.collider(player, platforms);

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

    jumpCounter = 0;

    // Skapa touchknappar
    leftButton = this.add.image(80, this.scale.height - 80, 'buttonLeft').setInteractive();
    rightButton = this.add.image(this.scale.width - 80, this.scale.height - 80, 'buttonRight').setInteractive();
    jumpButton = this.add.image(this.scale.width / 2, this.scale.height - 80, 'buttonJump').setInteractive();

    leftButton.setScale(0.1);
    rightButton.setScale(0.1);
    jumpButton.setScale(0.3);

    leftButton.setPosition(80, this.scale.height - 80);
    rightButton.setPosition(this.scale.width - 80, this.scale.height - 80);
    jumpButton.setPosition(this.scale.width / 2, this.scale.height - 80);

    leftButton.on('pointerdown', () => { touchLeft = true; });
    leftButton.on('pointerup', () => { touchLeft = false; });

    rightButton.on('pointerdown', () => { touchRight = true; });
    rightButton.on('pointerup', () => { touchRight = false; });

    jumpButton.on('pointerdown', () => {
        if (jumpCounter < 2) {
            player.setVelocityY(-500);
            jumpCounter++;
        }
    });

    // Kamera följer spelaren
    this.cameras.main.startFollow(player);
    this.cameras.main.setBounds(0, 0, this.scale.width, this.scale.height * 3.5);
    this.physics.world.setBounds(0, 0, this.scale.width, this.scale.height * 3.38);
}

function update ()
{
    // Scrolla bakgrunden beroende på spelarens höjd
    // pole.tilePositionY = this.cameras.main.scrollY;

    leftButton.setPosition(80, (this.scale.height - (this.scale.height * 0.06)) + this.cameras.main.scrollY);
    rightButton.setPosition(this.scale.width - 80, (this.scale.height - (this.scale.height * 0.06)) + this.cameras.main.scrollY);
    jumpButton.setPosition(this.scale.width / 2, (this.scale.height - (this.scale.height * 0.06)) + this.cameras.main.scrollY);

    if (touchLeft)
    {
        player.setVelocityX(-200);
        player.anims.play('left', true);
    }
    else if (touchRight)
    {
        player.setVelocityX(200);
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
}
