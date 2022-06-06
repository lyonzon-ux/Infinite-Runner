//rocket prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x,y,texture,frame){
        super(scene,x,y,texture,frame);
        this.sfxRocket = scene.sound.add('sfx_rocket');
    //add object to existing scene
    scene.add.existing(this);
    this.isFiring = true;
    this.moveSpeed = 2;
    }
    update(){
            if(keyLEFT.isDown && this.x >= borderUISize +this.width){
                this.x -= this.moveSpeed;
            }
            else if (keyRIGHT.isDown &&this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        

        if(this.isFiring && this.y >= borderUISize*3+borderPadding){
            this.y -=this.moveSpeed;
        }
        if(this.y <= borderUISize*3 +borderPadding){
            this.isFiring = true;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    
    }
    reset(){
        this.isFiring = true;
        this.y = game.config.height - borderUISize -borderPadding;
    }
}