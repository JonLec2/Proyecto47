class Controles{
    constructor(){
      
        this.button2=createButton('<')
        this.button3=createButton('^')

    }

    hide(){
        this.button2.hide();
        this.button3.hide();
      }

display(){
    

   
 this.button2.position(20 , height/2);
 this.button2.style('background', 'Teal');
 this.button2.style('font-size', '40px');
 this.button2.style('color', 'white');

  
 this.button3.position(20 , height/2-30);
 this.button3.style('background', 'Teal');
 this.button3.style('font-size', '40px');
 this.button3.style('color', 'white');







this.button2.touchStarted(()=>{
    if(spider.x>190){
    spider.x=spider.x-8
    }

else{
    spider.x=spider.x-0
    spider.maxSpeed=+15
}

return false;

})


this.button3.touchStarted(()=>{
    if(spider.y>300){
    spider.velocityY=spider.velocityY-31
    spider.maxSpeed=+15
    }

    else{
        spider.velocityY=spider.velocityY-0
        spider.maxSpeed=+15

    }
    return false;

})




}
}

