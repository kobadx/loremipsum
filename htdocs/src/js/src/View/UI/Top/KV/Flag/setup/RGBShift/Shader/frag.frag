uniform sampler2D tDiffuse;


uniform float blockSize;
uniform float threshold;
uniform float time;
uniform float slideWidth;


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
  
  float v_1 = floor((gl_FragCoord.y) / blockSize) * blockSize;
  float v_2 = floor((gl_FragCoord.y) / blockSize * .5) * blockSize * .5;
  float v_3 = floor((gl_FragCoord.y) / blockSize * .2) * blockSize * .2;
  float v_4 = floor((gl_FragCoord.y) / blockSize * .7) * blockSize * .7;
  float v1 = mix(v_1,v_2,rnd(vec2(time)));
  float v2 = mix(v_3,v_4,rnd(vec2(time)));
  // vec2 c = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
  // float l = 0.1 / length(c) * ;
  float n1 = rnd(vec2(mix(v1,v2,rnd(vec2(time))), time * 0.1));
  float s = step(n1, threshold);
  float n2 = rnd(vec2(time)) * 2.0 - 1.0;
  float t = n2 * slideWidth;

  // vec4 color = texture2D(tDiffuse, vUv + vec2(s * t, 0.0));
  float c_r = texture2D(tDiffuse, vUv + vec2(s * t * 1.3, 0.0)).r;
  // float c_g = texture2D(tDiffuse, vUv + vec2(s * t * 2.0, 0.0)).g;
  // float c_b = texture2D(tDiffuse, vUv + vec2(s * t * 1.2, 0.0)).b;
  float c_g = texture2D(tDiffuse, vUv + vec2(s * t * 4.3, 0.0)).g;
  float c_b = texture2D(tDiffuse, vUv + vec2(s * t * -0.2, 0.0)).b;
  
  gl_FragColor = vec4(c_r,c_g,c_b,1.0);
}
