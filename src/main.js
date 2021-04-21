/*
Name: Maria Fernanda Becerra
Title: RocketPatrol Mod. (Ranita)
Date: 4/21/20
Time: ~20hrs
Sources used: https://phaser.io/examples and https://photonstorm.github.io/phaser3-docs/ 

Modifications:
-Display the time remaining (in seconds) on the screen (10)
-Implement mouse control for player movement and mouse click to fire (20)
-Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }
let game = new Phaser.Game(config);
//reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize/3;