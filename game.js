class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", (data)=> {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

   /* collide1 = createSprite(1420,400,20,800);
    collide2 = createSprite(0,0,20,1600);


       
    if( player1.collide(collide1)){
        player1.x = player1.x+20;
    }
     if(player1.collide(collide2)){
         player1.x = player1.x-20;
     }
     if(player2.collide(collide1)){
         player2.x = player2.x+20;
     }
     if(player2.collide(collide2)){
         player2.x = player2.x-20;
     }*/
        }
    
    play(){

       
     
                form.hide();

                Player.getPlayerInfo();
                player.getScore();
                 image(back_img, 0, 0, 1430, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index - 1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                       //add code to display the player's name on the respective basket.
                       fill("black");
                       textSize(25);
                    text(allPlayers[plr].name ,x-35,y+25);
                         
                     }
                    
                     text("Player 1:" +allPlayers.player1.score,50,50);
                     text("Player 2:" +allPlayers.player2.score,50,100); 
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1300), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     fruits.lifeTime = 300;
                 }
                 
                  if (player.index !== null) {
                    for (var i = 0; i < fruitGroup.length; i++) {
                        if (fruitGroup.get(i).isTouching(players)) {
                            fruitGroup.get(i).destroy();
                        // player.point +=1;
                         Player.updatescore(player.point);
                            player.score = player.score+1;
                        }
                        
                    }
                  }
                
         if(player.score === 10){
             gameState = 2;
             text("Player 1:" +allPlayers.player1.score,300,200);
             text("Player 2:" +allPlayers.player2.score,300,250); 
            }
         
         
        
         

    }

    end(){
       console.log("Game Ended");
   
        }
    }
