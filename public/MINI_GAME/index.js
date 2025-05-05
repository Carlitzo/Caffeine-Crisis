var player;
var cursors;
var jumpButton;
var leftButton;
var rightButton;
var jumpCounter;
var pole;
var bottom;
var background;
var platforms;
var star;
var touchLeft = false;
var touchRight = false;

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 700 },
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
    this.load.image('bottom', 'assets/platta.png');
    this.load.image('pole', 'assets/pole.png'); // En lång lyktstolpe-bild
    this.load.image('buttonJump', 'assets/buttonJump.png'); // En enkel hoppknapp-bild
    this.load.image('buttonLeft', 'assets/buttonLeft.png');
    this.load.image('buttonRight', 'assets/buttonRight.png');
    this.load.image('star', 'assets/star.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{

    background = this.add.image(this.scale.width / 2, this.scale.height, 'background');
    background.setDisplaySize(this.scale.width * 2, this.scale.height * 6);

    platforms = this.physics.add.staticGroup();

    pole = this.add.image(this.scale.width / 2, (this.scale.height * 3.425) - 2400 / 2, 'pole');
    pole.setDisplaySize(100, 2400);
    
    const amountOfPlatforms = 12;
    let heightMultiplier = 3.05;

    for (let i = 0; i < amountOfPlatforms; i++) {
        if (i === amountOfPlatforms - 1) {
            platforms.create(this.scale.width / 2, this.scale.height * (heightMultiplier - 0.10), 'bottom').setScale(1.15);
        }
        else if (i % 2 === 0) {
            platforms.create(this.scale.width / 2 + 107, this.scale.height * heightMultiplier, 'bottom').setScale(1.15);
        }
        else if (i % 2 !== 0) {
            platforms.create(this.scale.width / 2 - 107, this.scale.height * heightMultiplier, 'bottom').setScale(1.15);
        }

        if (i === 2) {
            heightMultiplier -= 0.15;
        } else if (i === 5) {
            heightMultiplier -= 0.30;
        } else {
            heightMultiplier -= 0.20;
        }
    }

    const star = this.physics.add.sprite(this.scale.width / 2, this.scale.height * 0.6, 'star').setScale(1.8);
    star.setBounce(0.5);
    star.setCollideWorldBounds(true);
    
    player = this.physics.add.sprite(this.scale.width/2, this.scale.height - 100, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.setScale(1.3);
    
    this.physics.add.overlap(player, star, collectStar, null, this);
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(star, platforms);

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

    this.cameras.main.startFollow(player);
    this.cameras.main.setBounds(0, 0, this.scale.width, this.scale.height * 3.5);
    this.physics.world.setBounds(0, 0, this.scale.width, this.scale.height * 3.38);
}

function update ()
{
    pole.tilePositionY = this.cameras.main.scrollY;

    leftButton.setPosition(80, (this.scale.height - (this.scale.height * 0.06)) + this.cameras.main.scrollY);
    rightButton.setPosition(this.scale.width - 80, (this.scale.height - (this.scale.height * 0.06)) + this.cameras.main.scrollY);
    jumpButton.setPosition(this.scale.width / 2, (this.scale.height - (this.scale.height * 0.06)) + this.cameras.main.scrollY);

    if (touchLeft)
    {
        player.setVelocityX(-300);
        player.anims.play('left', true);
    }
    else if (touchRight)
    {
        player.setVelocityX(300);
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

function collectStar(player, star) {
    star.disableBody(true, true); // Dölj stjärnan

    const scene = player.scene;
    const centerX = scene.cameras.main.worldView.x + scene.cameras.main.width / 2;
    const centerY = scene.cameras.main.worldView.y + scene.cameras.main.height / 2;

    const winText = scene.add.text(
        centerX,
        centerY -50,
        '🎉 Grattis! Du plockade ner glaskulan!',
        {
            fontSize: `${Math.floor(scene.scale.width / 15)}px`, // Dynamisk storlek baserat på skärm
            fill: '#ffffff',
            backgroundColor: '#000000',
            padding: { x: 10, y: 6 },
            align: 'center',
            wordWrap: { width: scene.scale.width * 0.8 }
        }
    ).setOrigin(0.5).setAlpha(0).setDepth(1000);

    // Fade in effekten
    scene.tweens.add({
        targets: winText,
        alpha: 1,
        duration: 800,
        ease: 'Power2'
    });

    // Redirect efter 2 sekunder
    scene.time.delayedCall(4000, () => {
        window.location.href = "/";
    });
}
