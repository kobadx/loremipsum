<script id="processing-code" type="application/processing">


JellyFish fish;
float cameraX;
float cameraY;
ArrayList particles;
float noiseOffset0;
float noiseOffset1;
float noiseScale;
float noiseTime;
float scl = 1;

void setup(){
  size(window.innerWidth,window.innerHeight);
  window.onresize = function()
  {
    size(window.innerWidth,window.innerHeight);
  };
  reset();
}

void reset(){
  fish = new JellyFish();
  fish.x = fish.px = width * 0.5;
  fish.y = fish.py = height * 0.5;
  cameraX = width*0.5;
  cameraY = height*0.5;
  particles = new ArrayList();
  noiseOffset0 = random(0,100000);
  noiseOffset1 = random(0,100000);
  noiseScale = 0.01;
  noiseTime = random(0,1000000);
  
  background(0);
}

void draw(){
  background(0);
  noiseTime += 0.01;
  cameraX += (fish.x-cameraX) * 0.005;
  cameraY += (fish.y-cameraY) * 0.005;
  
  translate(-cameraX + width*0.5, -cameraY + height*0.5);
  
  
  fish.update();
  fish.draw();
  
  if(random(0,1)<0.5){
    Node n = new Node();
    Leg l = (Leg)fish.legs.get((int)random(0,10));
    Node lastNd = (Node)l.nodes.get(l.nodes.size()-1);
    n.x = lastNd.x;
    n.y = lastNd.y;
    n.vx = lastNd.vx;
    n.vy = lastNd.vy;
    particles.add(n);
  }
  
  for(int i=0; i<particles.size(); i++){
    Node nd = (Node)particles.get(i);
    nd.cnt ++;
    nd.vx += (noise(nd.x*noiseScale, 
                    nd.y*noiseScale,
                    noiseOffset0+noiseTime)-0.5) * 0.5;
    nd.vy += (noise(nd.x*noiseScale + 2398523, 
                    nd.y*noiseScale + 1309854,
                    noiseOffset1+noiseTime)-0.5) * 0.5;
    nd.vx += random(-0.05,0.05);
    nd.vy += random(-0.05,0.05);
    nd.vx *= 0.95;
    nd.vy *= 0.95;
    nd.x += nd.vx;
    nd.y += nd.vy;
    
    float alp = 255-nd.cnt;
    stroke(random(alp*0.3, alp)*0.9);
    point(nd.x, nd.y);
  }
  
  for(int i=particles.size()-1; i>0; i--){
    Node nd = (Node)particles.get(i);
    if(nd.cnt>255){
      particles.remove(nd);
    }
  }
}

void mousePressed(){
  reset();
}

class JellyFish{
  float x, y;
  float px, py;
  float vx, vy;
  int numLegs = 10;
  ArrayList legs;
  float time;
  float maxSpeed = 5;
  float rad;
  
  JellyFish(){
    legs = new ArrayList();
    for(int i=0; i<numLegs; i++){
      Leg l = new Leg();
      legs.add(l);
    }
    time = 0;
  }
  
  void update(){
    px = x;
    py = y;
    rad += 0.01;
    maxSpeed = 7 + cos(rad)*4;
    time += 0.1;
    vx += (noise(x*noiseScale, y*noiseScale,noiseOffset0+noiseTime)-0.5) * 0.5;
    vy += (noise(x*noiseScale + 2398523, y*noiseScale + 1309854,noiseOffset1+noiseTime)-0.5) * 0.5;
    vx *= 0.99;
    vy *= 0.99;
    x += vx + random(-0.5,0.5);
    y += vy + random(-0.5,0.5);
    for(int i=0; i<numLegs; i++){
      Leg l = (Leg)(legs.get(i));
      l.body = this;
      l.update();
    }
  }
  
  void draw(){
    for(int i=0; i<numLegs; i++){
      Leg l = (Leg)(legs.get(i));
      l.draw();
    }
    stroke(255,200);
    noFill();
    //ellipse(x,y,10,10);
    //float d = 15 + (random(0,5)+random(0,5)+random(0,5))/3.0;
    //ellipse(x,y,d*scl,d*scl);
    for(int i=0; i<10; i++){
      fill(255,200);
      float d = 15 + (random(0,5)+random(0,5)+random(0,5))/3.0;
      d = pow(random(2,4),2);
      float rad = random(0,PI*2);
      float dist = random(0,10);
      ellipse(x+cos(rad)*dist,y+sin(rad)*dist,d,d);
    }
  }
  
  void applyRandomForce(){
    for(int i=0; i<numLegs; i++){
      Leg l = (Leg)legs.get(i);
      for(int j=0; j<l.numNodes; j++){
        Node nd = (Node)l.nodes.get(i);
        nd.vx += random(-15,15);
        nd.vy += random(-15,15);
      }
    }
  }
}



class Leg{
  JellyFish body;
  int numNodes = (int)((random(10,20)+random(10,20)+random(10,20))/3.0);
  float alpha = random(20,140);
  ArrayList nodes;
  float fixDist = 5;
  Leg(){
    nodes = new ArrayList();
    for(int i=0; i<numNodes; i++){
      Node n = new Node();
      n.x = width*0.5;
      n.y = height*0.5;
      nodes.add(n);
    }
  }
  
  void update(){
    for(int i=0; i<numNodes; i++){
      if(i==0){
        Node nd = (Node)nodes.get(i);
        nd.x = body.x;
        nd.y = body.y;
      }else{
        Node nd0 = (Node)nodes.get(i-1);
        Node nd1 = (Node)nodes.get(i);
        float fx = 0;
        float fy = 0;
        float dx = nd0.x - nd1.x;
        float dy = nd0.y - nd1.y;
        float dist = sqrt(dx*dx+dy*dy);
        if(dist>1){
          float f = (fixDist*scl - dist)*0.015;
          fx = dx / dist * f;
          fy = dy / dist * f;
        }
        nd1.vx -= fx + random(-0.3,0.3) + (noise(nd1.x*noiseScale, nd1.y*noiseScale,noiseOffset0+noiseTime)-0.5) ;
        nd1.vy -= fy + random(-0.3,0.3) + (noise(nd1.x*noiseScale + 2398523, nd1.y*noiseScale + 1309854,noiseOffset1+noiseTime)-0.5) ;
        nd1.vx *= 0.9;
        nd1.vy *= 0.9;
        
        float maxSpeed = body.maxSpeed;
        float speed = sqrt(nd1.vx*nd1.vx +nd1.vy*nd1.vy);
        if(speed>maxSpeed){
          nd1.vx = nd1.vx / speed * maxSpeed;
          nd1.vy = nd1.vy / speed * maxSpeed;
        }
        
        nd1.x += nd1.vx;
        nd1.y += nd1.vy;
      }
    }
  }
  
  void draw(){
    noFill();
    for(int i=0; i<numNodes-2; i++){
      if(i==0){
        Node nd0 = (Node)nodes.get(i);
        Node nd1 = (Node)nodes.get(i);
        Node nd2 = (Node)nodes.get(i+1);
        Node nd3 = (Node)nodes.get(i+2);
        stroke(255,alpha);
        curve(nd0.x, nd0.y, nd1.x, nd1.y, nd2.x, nd2.y, nd3.x, nd3.y);
      }else{
        Node nd0 = (Node)nodes.get(i-1);
        Node nd1 = (Node)nodes.get(i);
        Node nd2 = (Node)nodes.get(i+1);
        Node nd3 = (Node)nodes.get(i+2);
        
        stroke(255,alpha);
        curve(nd0.x, nd0.y, nd1.x, nd1.y, nd2.x, nd2.y, nd3.x, nd3.y);
      }
    }
  }
}

class Node{
  float x, y, vx, vy;
  float px, py;
  int cnt;
}

</script>