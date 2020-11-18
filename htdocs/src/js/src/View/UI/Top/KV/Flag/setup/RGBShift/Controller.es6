import frag from "./Shader/frag.frag";
import vert from "./Shader/vert.vert";
export default class Controller {
  constructor() {
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
      },
      vertexShader: vert,
      fragmentShader: frag,
    });
  }

  show() {
    const tl = new TimelineMax();
    const uniforms = this.shaderPass.uniforms;
    tl
      //start
      .set(
        uniforms.offset,
        {
          value: 0.02,
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

    return tl;
  }
}
