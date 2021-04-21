class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/select.wav');
        this.load.audio('sfx_eating', './assets/collision.wav');
        this.load.audio('sfx_frog', './assets/frog.wav');
    }

    create() {
      this.cameras.main.setBackgroundColor('#b6e2f6');
        let menuConfig = {
            fontFamily: 'Monaco',
            fontSize: '28px',
            backgroundColor: '#dcd0ff',
            color: '#000000',
            align: 'center',
            padding:{
                top: 1,
                bottom: 1,
            },
            fixedWidth: 0
        }
        //menu text
        this.add.text(game.config.width/2, game.config.height/2- borderUISize- borderPadding, 'RANITA', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use <- -> arrows to move & (F) to jump', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor='#0fe87c';
        menuConfig.color='#000';
        this.add.text(game.config.width/2, game.config.height/2+ borderUISize+ borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);
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