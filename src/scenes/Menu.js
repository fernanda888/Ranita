class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/select.wav');
        this.load.audio('sfx_eating', './assets/collision.wav');
        this.load.audio('sfx_frog', './assets/frog.wav');
        //load background
        this.load.image('menuBackground', './assets/menuBackground.png');
    }

    create() {
      this.background = this.add.tileSprite(0,0,640,480, 'menuBackground').setOrigin(0,0);
        let menuConfig = {
            fontFamily: 'Monaco',
            fontSize: '50px',
            backgroundColor: '#00da6e',
            color: '#000000',
            align: 'right',
            padding:{
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        //menu text
        this.add.text(game.config.width/2, game.config.height/2- borderUISize- borderPadding*5, 'RANITA', menuConfig).setOrigin(0.5);
        menuConfig.fontSize='28px';
        menuConfig.backgroundColor='#a791c2';
        this.add.text(game.config.width/2, game.config.height/2, 'Use <- -> arrows or mousepad to move', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2+ borderUISize+ borderPadding, 'Use (F) or mouse click to jump', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor='#ffc0cb';
        menuConfig.color='#000';
        this.add.text(game.config.width/2, game.config.height/2+ borderUISize+ borderPadding*5, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);
        //define keys
        keyLEFT= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            flySpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            flySpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
    } 
}