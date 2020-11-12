import frag from "./Shader/frag.frag";
import vert from "./Shader/vert.vert";
export default class Controller {
  constructor() {
    this.shaderPass = new THREE.ShaderPass({
      uniforms: {
        tDiffuse: {
          value: null,
          type: "t"
        },
        time: {
          value: 0.0,
          type: "f"
        },
        blockSize: {
          value: 100.0,
          type: "f"
        },
        threshold: {
          value: 0.0,
          type: "f"
        },
        slideWidth: {
          value: 0,
          type: "f"
        }
      },
      vertexShader: vert,
      fragmentShader: frag
    });
  }

  show() {
    const tl = new TimelineMax();
    const uniforms = this.shaderPass.uniforms;
    tl
      // .to(uniforms.s)
      .to(uniforms.time, 0.1, {
        value: 10,
        ease: Expo.easeOut
      })
      .to(
        uniforms.slideWidth,
        0.1,
        {
          value: 0.06,
          ease: Expo.easeOut
        },
        0
      )
      .set(
        uniforms.threshold,
        {
          value: 0.5
        },
        0
      )

      //end
      .to(uniforms.threshold, 0.25, {
        value: 0,
        ease: Expo.easeOut
      });
    return tl;
  }
}
