//Loumary Yonzon + Ian Rhoads 
//Completed 6 June 2022
//A twist on Rocket Patrol, but the timer and scores are affected by which asset the player collides into 
//Assets have been changed but due to complications, the SFX have not been changed 
//Playable game based off the playtests ran



let config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    scene: [Menu,Play]
  }
let game = new Phaser.Game(config);
let keyF, keyR, keyLEFT, keyRIGHT, mousePointer;
// set UI size
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
 