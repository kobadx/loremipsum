import Base from "_MyLibs/Util/Base.es6";

import frag from "./Shader/frag.frag";
import vert from "./Shader/vert.vert";
export default class Controller extends Base {
  constructor() {
    super();

    this.shaderPass = new THREE.ShaderPass({
      uniforms: {
        tDiffuse: {
          value: null,
          type: "t",
        },
        offset: {
          value: 0.0,
          type: "f",
        },
        rotate: {
          value: new THREE.Vector2(0, 0),
          type: "v2",
        },

        seed: {
          value: 0.0,
          type: "f",
        },
        distortion_x: {
          value: 0.0,
          type: "f",
        },
        distortion_y: {
          value: 0.0,
          type: "f",
        },
        seed_x: {
          value: 0.0,
          type: "f",
        },
        seed_y: {
          value: 0.0,
          type: "f",
        },
        col_s: {
          value: 0.05,
          type: "f",
        },
        tDisp: {
          value: null,
        },
      },
      vertexShader: vert,
      fragmentShader: frag,
    });

    this.s = 1;

    this.shaderPass.uniforms["tDisp"].value = this.generateHeightmap(20);

    // this.isUEv = true;

    this.setup();
    this.setEvents();
  }

  update() {
    this.shaderPass.uniforms["seed"].value = 0.5; //default seeding
    // this.shaderPass.uniforms["distortion_x"].value = THREE.Math.randFloat(0, 1);
    // this.shaderPass.uniforms["distortion_y"].value = THREE.Math.randFloat(0, 1);
    this.shaderPass.uniforms["seed_x"].value = THREE.Math.randFloat(
      -0.005 * this.s,
      0.005 * this.s
    );
    this.shaderPass.uniforms["seed_y"].value = THREE.Math.randFloat(
      -0.005 * this.s,
      0.005 * this.s
    );

    // console.log(
    //   this.shaderPass.uniforms["seed_x"].value,
    //   this.shaderPass.uniforms["seed_y"].value
    // );
  }

  show(v, s = 1) {
    this.s = s;
    this.onU();

    this.shaderPass.uniforms.tDiffuse.value.wrapS =
      THREE.MirroredRepeatWrapping;
    this.shaderPass.uniforms.tDiffuse.value.wrapT =
      THREE.MirroredRepeatWrapping;

    var rotateX = Math.random() * Math.PI * 2;
    var rotateY = Math.random() * Math.PI * 2;

    console.log(rotateX, rotateY);

    var rotates = [
      { x: 4.534725472242586, y: 1.9779006645015587 },
      { x: 4.145211998776186, y: 4.500798660131272 },
      { x: 2.7464663514791408, y: 4.590382318407328 },
      { x: 0.08328790724654228, y: 0.841139124249118 },
      { x: 1.7587981681678089, y: 1.137486829022558 },
    ];

    var index = Math.floor(Math.random() * rotates.length);

    const tl = new TimelineMax();
    const uniforms = this.shaderPass.uniforms;
    tl
      //start
      .set(
        uniforms.offset,
        {
          value: v,
        },
        0.0
      )
      .set(
        uniforms.rotate.value,
        {
          x: rotates[index].x,
          y: rotates[index].y,
        },
        0.0
      );
  }
  hide() {
    const tl = new TimelineMax();
    const uniforms = this.shaderPass.uniforms;
    tl
      //start
      .set(
        uniforms.offset,
        {
          value: 0.0,
        },
        0.0
      );

    this.offU();

    this.shaderPass.uniforms["seed"].value = 0;
    this.shaderPass.uniforms["seed_x"].value = 0;
    this.shaderPass.uniforms["seed_y"].value = 0;
  }

  generateHeightmap(dt_size) {
    // block noise
    var data_arr = new Float32Array(dt_size * dt_size * 3);
    var length = dt_size * dt_size;

    for (var i = 0; i < length; i++) {
      var val = THREE.Math.randFloat(0, 1);
      data_arr[i * 3 + 0] = val;
      data_arr[i * 3 + 1] = val;
      data_arr[i * 3 + 2] = val;
    }

    var texture = new THREE.DataTexture(
      data_arr,
      dt_size,
      dt_size,
      THREE.RGBFormat,
      THREE.FloatType
    );
    texture.needsUpdate = true;
    return texture;

    // // texture
    // var textures = [];
    // var loader = new THREE.TextureLoader();
    // for ( var i = 0; i < 6; i ++ ) textures[ i ] = loader.load( './assets/resource/tex/transition' + ( i + 1 ) + '.png' );

    // // return texture;
    // return textures[3];
  }
}
