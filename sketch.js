const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg,bg_img;
var bg2,bg2_img;
var bg3,bg3_img;
var prince,prince_img;
var invisGround;
var coin,coin_image;
var king,king_img;
var coin_img;
var coin2,coin3,coin4,coin5,coin6;
var coinScore=0;
var gameLevel=1;
var coinScore_img;
var level1,level1_img;
var level2,level2_img;
var level3,level3_img;
var level4,level4_img;
var bg4,bg4_img;
var bgn,bgn_img;
var war,prince_Attack;
var thorn_img;
var nightball,nightball_img;
var ghost,ghost_img;
var level5,level5_img;
var coin7,coin8;
var wonGame,wonGame_img;
var arrow,arrow_img;
var gameOver,gameOver_img;
var hit,hit_img;

function preload(){
 bg_img = loadImage("background.jpg");
 prince_img = loadAnimation("p-1.png","p-2.png","p-3.png","p-5.png","p-6.png");
 coin_image = loadImage("coin.png");
 bg2_img = loadImage("backgr.jpg");
 level1_img = loadImage("level-1.png");
 coin_img = loadImage("money.png");
 level2_img = loadImage("level-2.png");
 thorn_img = loadImage("thorn.png");
 bg3_img = loadImage("bg3.jpg");
 king_img = loadAnimation("z-1.png","z-2.png","z-3.png","z-4.png");
 prince_Attack = loadAnimation("weapon.png");
 level3_img = loadImage("level-3.png");
 bg4_img = loadImage("bg4.png");
 bgn_img = loadImage("bg4night.jpg");
 level4_img = loadImage("level-4.png");
 nightball_img = loadAnimation("b-1.png","b-2.png","b-3.png","b-4.png","b-5.png");
 ghost_img = loadImage("g.png");
 level5_img = loadImage("level-5.png");
 wonGame_img = loadImage("won game.png");
 arrow_img = loadImage("arrow.png");
 gameOver_img = loadImage("game over.png");
 hit_img = loadImage("attack.png");
}

function setup(){
    var canvas = createCanvas(1500,800);
    bg = createSprite(800,350,100,50);
    bg.addImage("img",bg_img);
    bg.scale = 3.3;
    bg.velocityX=-2;

    war = createSprite(110,690,50,50);
    war.addAnimation("Attack",prince_Attack);
    war.scale = 0.5;
    

    bg2 = createSprite(800,100,100,50);
    bg2.addImage("img",bg2_img);
    bg2.scale = 3.3;
    bg2.velocityX=-2;

    bg3 = createSprite(800,300,100,50);
    bg3.addImage("img",bg3_img);
    bg3.scale = 1.0;
    bg3.velocityX=-2;
 
    bg4 = createSprite(800,300,100,50);
    bg4.addImage("img",bg4_img);
    bg4.scale = 1.0;
    bg4.velocityX=-2;

    bgn = createSprite(800,300,100,50);
    bgn.addImage("img",bgn_img);
    bgn.scale = 1.0;
    bgn.velocityX=-2;

    prince = createSprite(100,650,50,50);
    prince.addAnimation("img",prince_img);
    prince.scale = 2.5;

    

    invisGround = createSprite(100,780,1500,50);
    invisGround.visible = false;

        coin = createSprite(1600,500,50,50);
        coin.addImage("image",coin_image);
        coin.scale=0.2;
        coin.velocityX=-5;

        coin2 = createSprite(2400,500,50,50);
        coin2.addImage("image",coin_image);
        coin2.scale=0.2;
        coin2.velocityX=-5;

        coin3 = createSprite(3800,500,50,50);
        coin3.addImage("image",coin_image);
        coin3.scale=0.2;
        coin3.velocityX=-5;

        coin4 = createSprite(6000,500,50,50);
        coin4.addImage("image",coin_image);
        coin4.scale=0.2;
        coin4.velocityX=-5;

        coin5 = createSprite(8000,500,50,50);
        coin5.addImage("image",coin_image);
        coin5.scale=0.2;
        coin5.velocityX=-5;

        coin6 = createSprite(9900,500,50,50);
        coin6.addImage("image",coin_image);
        coin6.scale=0.2;
        coin6.velocityX=-5;

        coin7 = createSprite(12000,500,50,50);
        coin7.addImage("image",coin_image);
        coin7.scale=0.2;
        coin7.velocityX=-5;

        coin8 = createSprite(14000,500,50,50);
        coin8.addImage("image",coin_image);
        coin8.scale=0.2;
        coin8.velocityX=-5;

        hit = createSprite(750,250,10,10);
        hit.addImage("img",hit_img);
        hit.visible = false;


        wonGame = createSprite(750,400,10,10);
        wonGame.addImage("img",wonGame_img);
        wonGame.scale = 2.0;
        wonGame.visible = false;
    

        gameOver = createSprite(750,400,10,10);
        gameOver.addImage("img",gameOver_img);
        gameOver.scale = 2.0;
        gameOver.visible = false;

    coinScore_img = createSprite(1200,50,50,50);
    coinScore_img.addImage("image",coin_image);
    coinScore_img.scale = 0.1;

    level1 = createSprite(800,150,50,50);
    level1.addImage("img",level1_img);

    level2 = createSprite(800,150,50,50);
    level2.addImage("img",level2_img);

    level3 = createSprite(800,150,50,50);
    level3.addImage("img",level3_img);

    level4 = createSprite(800,150,50,50);
    level4.addImage("img",level4_img);

    level5 = createSprite(800,150,50,50);
    level5.addImage("img",level5_img);
    level5.scale = 1.4;
    level5.visible = false;

    ghost = createSprite(1300,400,50,50);
    ghost.addImage("img",ghost_img);
    ghost.velocityX=-5;

    ThornGroup = new Group();
    CoinGroup = new Group();
    KingGroup = new Group();
    NightGroup = new Group();
    ArrowGroup = new Group();
}

function draw(){
    background(0);

    if(bg.x<700){
        bg.x = 800;
    }
    if(bg2.x<700){
        bg2.x = 800;
    }
    if(bg3.x<700){
        bg3.x = 800;
    }
    if(bg4.x<700){
        bg4.x = 800;
    }

    if(bgn.x<700){
        bgn.x = 800;
    }

    if(keyDown("space")){
        prince.velocityY=-9;
    }
    prince.velocityY = prince.velocityY+0.5;
    prince.collide(invisGround);

    if(prince.isTouching(coin)){
        coin.destroy();
        coinScore = coinScore+1;
    }

    if(prince.isTouching(coin2)){
        coin2.destroy();
        coinScore = coinScore+1;
    }

    if(prince.isTouching(coin3)){
        coin3.destroy();
        coinScore = coinScore+1;
    }

    if(prince.isTouching(coin4)){
        coin4.destroy();
        coinScore = coinScore+1;
    }
    if(prince.isTouching(coin5)){
        coin5.destroy();
        coinScore = coinScore+1;
    }
    if(prince.isTouching(coin6)){
        coin6.destroy();
        coinScore = coinScore+1;
    }

    if(prince.isTouching(coin7)){
        coin7.destroy();
        coinScore = coinScore+1;
    }

    if(prince.isTouching(coin8)){
        coin8.destroy();
        coinScore = coinScore+1;
    }

    
    
    if(coinScore ===0){
        bg2.visible = false;
        level2.visible = false;
        bg3.visible = false;
        bgn.visible = false;
        ghost.visible = false;
        bg4.visible = false;
       // nightball.visible = false;
        level3.visible = false;
        level4.visible = false;
        war.visible = false;
        
    }
    if(coinScore ===1){
        bg2.visible = false;
        level2.visible = false;
        bg4.visible = false;
        bg3.visible = false;
        bgn.visible = false;
        level4.visible = false;
        level3.visible = false;
        ghost.visible = false;
       // nightball.visible = false;
        war.visible = false;
    }

    if(coinScore === 2){
        gameLevel = 2;
        
    }

    if(gameLevel === 2){
        bg.visible = false;
        bg2.visible = true;
        bg3.visible = false;
        bg4.visible = false;
       // nightball.visible = false;
        level3.visible = false;
        ghost.visible = false;
        level4.visible = false;
        war.visible = false;
        bgn.visible = false;
        level1.destroy();
        level2.visible = true; 
        spawnThorns();
        
    }

    if(coinScore ===3){
        bg.visible = false;
        bg2.visible = true;
        level2.visible = true;
        level3.visible = false;
        level4.visible = false;
        bg4.visible = false;
        bgn.visible = false;
        war.visible = false;
        ghost.visible = false;
        //nightball.visible = false;
        level1.destroy();
        bg3.visible = false;
    }

    if(coinScore === 4){
        ThornGroup.destroyEach();
        gameLevel = 3;
    }

    if(gameLevel === 3){
        bg3.visible = true;
        level3.visible = true;
        bg2.visible = false;
        bg4.visible = false;
        war.visible = false;
        ghost.visible = false;
        bgn.visible = false;
        hit.visible = true;
       // nightball.visible = false;
        level4.visible = false;
        level2.destroy();
        kings();
    }

    if(prince.isTouching(ThornGroup)){
        prince.destroy();
        gameOver.visible = true;
        bg2.velocityX=0; 
        ThornGroup.setVelocityXEach(0);
        coin.destroy();
        
    }

    if(keyDown("z")){
        war.visible = true;
        war.velocityX=4;
    }
    
    if(prince.isTouching(KingGroup)){
        KingGroup.setVelocityXEach(0);
        prince.destroy();
        bg3.velocityX=0;
        hit.visible = false;
        gameOver.visible = true;
    }
    if(KingGroup.isTouching(war)){
        KingGroup.destroyEach();
        bg4.visible = true;
        gameLevel = 4;
    }

    if(gameLevel === 4){
        bg4.visible = true;
        bg3.visible = false;
        level3.destroy();
        hit.visible = false;
        nightballs();
        ghost.visible = false;
        bg2.visible = false;
        bgn.visible = false;
        
        level4.visible = true;
        level2.destroy();
          
    }
    if(NightGroup.isTouching(prince)){
        NightGroup.destroyEach();
        bgn.visible = true;
        bgn.depth = bg4.depth;
        bgn.depth += 1;
        gameLevel = 5;
    } 
    if(gameLevel === 5){
       bg4.visible = false;
       level5.visible = true;
       level4.destroy();
       ghost.visible = true;
        
        bow();
        
    }
    if(prince.isTouching(ArrowGroup)){
        ArrowGroup.setVelocityXEach(0);
        prince.destroy();
        bg5.velocityX=0;
        gameOver.visible = true;
    }

    if(coinScore === 8){
        prince.destroy();
        wonGame.visible = true;
        
    }
    //console.log(bg4.depth);
    //console.log(bgn.depth);
    drawSprites();
    textSize(30);
    stroke("white");
    strokeWeight(10);
    fill("black");
    text(": "+coinScore,1250,60);
}

function spawnThorns(){

    if(frameCount % 200 === 0){
      var thorn = createSprite(1100,800,0,0);
      thorn.y = random(680,730);
      thorn.addImage(thorn_img);
      thorn.scale = random(0.4,0.7);
      thorn.velocityX = -5;
  
      thorn.lifetime = 300;
      ThornGroup.add(thorn);
    }
}

function kings(){

    if(frameCount % 200 === 0){
        king = createSprite(2500,680,50,50);
        king.addAnimation("img",king_img);
        king.scale = 0.3;
        king.scale = random(0.3,0.4);
        king.velocityX = -5;
  
        king.lifetime = 1000;
        KingGroup.add(king);
    }
}

function nightballs(){
    if(frameCount % 300 === 0){
    nightball = createSprite(1200,650,50,50);
    nightball.addAnimation("img",nightball_img);
    nightball.velocityX=-4;

    NightGroup.add(nightball);
    }
}

function bow(){

    if(frameCount % 200 === 0){
        arrow = createSprite(2500,680,50,50);
        arrow.addImage("img",arrow_img);
        //arrow.scale = 0.3;
        
        king.velocityX = -5;
  
        arrow.lifetime = 1000;
        ArrowGroup.add(arrow);
    }
}



