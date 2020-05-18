class Customer{
    constructor(){
     
    }

    display(){
      var customer1=createSprite(random(400-displayWidth-250),displayHeight-450,50,50);
      let rand=random(1-3);
      if (rand===1)
      {
        customer1.addImage('customer1Img',customer1Img)
      }
      if(rand===2)
      {
        customer1.addImage('customer2Img',customer2Img)
      }
      
      if(rand===3)
      {
        customer1.addImage('customer4Img',customer4Img)
      }
    }
}