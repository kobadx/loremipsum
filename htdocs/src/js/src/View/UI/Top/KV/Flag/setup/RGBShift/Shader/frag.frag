uniform sampler2D tDiffuse;
uniform sampler2D tDisp;


uniform float offset;
uniform vec2 rotate;

uniform float seed;
uniform float seed_x;
uniform float seed_y;
uniform float distortion_x;
uniform float distortion_y;
uniform float col_s;



const float PI  = 3.141592653589793;

float rnd(vec2 n){
    float a = 0.129898;
    float b = 0.78233;
    float c = 437.585453;
    float dt= dot(n ,vec2(a, b));
    float sn= mod(dt, 3.14);
    return fract(sin(sn) * c);
}

varying vec2 vUv;
void main() {
  
  vec2 p = vUv;

  // distortion line
  // if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {
  //  if(seed_x>0.){
  //    p.y = 1. - (p.y + distortion_y);
  //  }
  //  else {
  //    p.y = distortion_y;
  //  }
  // }
  // if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {
  //  if(seed_y>0.){
  //    p.x=distortion_x;
  //  }
  //  else {
  //    p.x = 1. - (p.x + distortion_x);
  //  }
  // }
  // gl_FragColor = texture2D(tDiffuse, p); // distortion line onl

  // block noise
  // vec4 normal = texture2D (tDisp, p * seed * seed);
  vec4 normal = texture2D (tDiffuse, p);
  p.x += seed_x * (seed/0.2);
  p.y += seed_y * (seed/0.2);
  // gl_FragColor = texture2D(tDiffuse, p); // block noise onl

  vec2 offset2 = offset * vec2( cos(rotate.x), sin(rotate.x));
  vec4 color = texture2D(tDiffuse, p) * 1.0;
  vec4 cr = texture2D(tDiffuse, p + offset2) * 1.0;
  vec4 cg = texture2D(tDiffuse, p) * 1.0;
  vec4 cb = texture2D(tDiffuse, p - offset2) * 1.0;
  gl_FragColor = vec4(cr.r * 1.0, cg.g * 1.0, cb.b * 1.0, color.a);
}
