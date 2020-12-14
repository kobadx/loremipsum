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

    this.length = 5;
    var num = Math.floor(Math.random() * this.length);

    this.indexs = { rs: num, rot: num };

    this.rs = [
      [
        { x: -0.010489452844089288, y: -0.00011556168180350962 },
        { x: 0.02153890440739005, y: -0.018825871386566086 },
        { x: -0.009503529150921147, y: 0.005832495273852966 },
        { x: -0.00955320521303106, y: 0.003986087230209346 },
        { x: 0.0038713956548604538, y: 0.006393353523377892 },
      ],
      [
        { x: 0.002556995841385766, y: -0.01323360920370218 },
        { x: -0.0065528160704775296, y: 0.014599657482177945 },
        { x: 0.01839122349874283, y: 0.011415956509402622 },
        { x: -0.0036990995240794257, y: -0.006772296991942741 },
        { x: 0.0013265611534168803, y: -0.0037175693131984433 },
      ],
      [
        { x: 0.009208502258821707, y: 0.005096356080471931 },
        { x: -0.016285727557276322, y: -0.016413366826711864 },
        { x: 0.00788376143229623, y: -0.01643369401649223 },
        { x: -0.0038168554320219036, y: -0.009477488079248477 },
        { x: -0.008254845428130896, y: -0.0014466892684972792 },
        { x: 0.0012270783316180728, y: -0.0009990535492530352 },
      ],
      [
        { x: 0.01712948574884411, y: 0.019055525736086466 },
        { x: -0.015894106216007498, y: 0.0064974559663508735 },
        { x: -0.00038315686810484056, y: 0.014259511751858155 },
        { x: -0.0015336922245549854, y: -0.001722102643359636 },
        { x: 0.008487175587695963, y: 0.003752977050670174 },
        { x: 0.006349529157634324, y: -0.0012990211130618334 },
      ],
      [
        { x: 0.010124847830813556, y: 0.0019656769858854353 },
        { x: 0.018803765518696218, y: 0.016419887669363975 },
        { x: -0.004646537537137584, y: 0.009549564420081189 },
        { x: 0.00326713667254154, y: -0.008892752909115363 },
        { x: -0.004059448806918566, y: -0.008148005355458733 },
        { x: -0.006979483393190682, y: -0.006696166737559968 },
      ],
    ];
    this.index = 0;

    this.rots = [[0, 3], [2, 3], [4, 4], [3, 4], [0, 2]];
    this.indexRot = 0;

    this.setup();
    this.setEvents();
  }

  update() {
    this.shaderPass.uniforms["seed"].value = 0.5; //default seeding
    // this.shaderPass.uniforms["seed_x"].value = this.rs[this.indexs.rs][
    //   this.index
    // ].x;
    // this.shaderPass.uniforms["seed_y"].value = this.rs[this.indexs.rs][
    //   this.index
    // ].y;
    this.shaderPass.uniforms["seed_x"].value = THREE.Math.randFloat(
      -0.005 * this.s,
      0.005 * this.s
    );
    this.shaderPass.uniforms["seed_y"].value = THREE.Math.randFloat(
      -0.005 * this.s,
      0.005 * this.s
    );

    console.log(
      this.shaderPass.uniforms["seed_x"].value,
      this.shaderPass.uniforms["seed_y"].value
    );

    this.index++;
    this.index %= this.rs[this.indexs.rs].length;
  }

  show(v, s = 1) {
    var strength = 1;
    if (gb.r.w <= 768) strength = 0.8;

    this.s = s * strength;
    this.onU();

    this.shaderPass.uniforms.tDiffuse.value.wrapS =
      THREE.MirroredRepeatWrapping;
    this.shaderPass.uniforms.tDiffuse.value.wrapT =
      THREE.MirroredRepeatWrapping;

    // var rotateX = Math.random() * Math.PI * 2;
    // var rotateY = Math.random() * Math.PI * 2;

    var rotates = [
      { x: 4.534725472242586, y: 1.9779006645015587 },
      { x: 4.145211998776186, y: 4.500798660131272 },
      { x: 2.7464663514791408, y: 4.590382318407328 },
      { x: 0.08328790724654228, y: 0.841139124249118 },
      { x: 1.7587981681678089, y: 1.137486829022558 },
    ];

    var index = Math.floor(Math.random() * rotates.length);
    // var index = this.rots[this.indexs.rot][this.indexRot];
    console.log("index:", index);
    this.indexRot++;

    const tl = new TimelineMax();
    const uniforms = this.shaderPass.uniforms;
    tl
      //start
      .set(
        uniforms.offset,
        {
          value: v * strength,
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
      )
      .add(() => {
        this.shaderPass.uniforms["seed"].value = 0;
        this.shaderPass.uniforms["seed_x"].value = 0;
        this.shaderPass.uniforms["seed_y"].value = 0;
      }, 0.02);

    this.offU();
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
