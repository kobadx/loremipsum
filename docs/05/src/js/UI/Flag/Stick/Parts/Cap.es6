export function Cap(posi, color, r, baser) {
  const obj = new THREE.Group();
  const _posi = [{ x: -r * 0.5, y: 0 }, { x: -r * 0.5, y: 10 }];
  for (let i = 0; i < 2; i++) {
    const _line = line(_posi, color);
    _line.position.x = r * i;
    obj.add(_line);
  }

  const _curve = curve(r, color, posi, baser);
  const _curve2 = curve(r, color, posi, baser);
  _curve2.position.y = 10;
  obj.add(_curve);
  obj.add(_curve2);
  const v1 = new THREE.Vector3(0, 10, 0);
  const v2 = new THREE.Vector3(posi[0].x - posi[1].x, posi[0].y - posi[1].y, 0);
  // const v3 = new THREE.Vector3(0, 0, 10);
  // const v4 = new THREE.Vector3(posi[0].x - posi[1].x, 0, 10);
  obj.rotation.z = v2.angleTo(v1) * -1;
  // obj.rotation.x = v3.angleTo(v4);
  // console.log(v3.angleTo(v4), "angle");
  obj.position.y = posi[0].y;
  console.log(baser);
  obj.position.x = posi[0].x - r * 0.5 + 15;
  obj.position.z = posi[0].z;
  return obj;
}

function line(posi, color) {
  const points = [];
  for (var i = 0; i < 2; i++) {
    // const
    points.push(posi[i].x, posi[i].y, 0);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.addAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(points), 3)
  );
  // const geometry = line.geometry;
  const material = new THREE.LineBasicMaterial({ color: color });
  return new THREE.Line(geometry, material);
}

function curve(r, color, posi, baser) {
  const points = [];
  for (let j = 0; j < Math.PI * 2; j += (2 * Math.PI) / 100) {
    points.push(r * Math.cos(j) * 0.5, r * Math.sin(j) * 0.5, 0);
  }

  // const line = new MeshLine();
  // line.setGeometry(points);
  // const geometry = line.geometry;
  const geometry = new THREE.BufferGeometry();
  geometry.addAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(points), 3)
  );
  // const material = new MeshLineMaterial({
  //   transparent: true,
  //   lineWidth: 1,
  //   color: new THREE.Color(this.color)
  // });
  const material = new THREE.LineBasicMaterial({ color: color });
  const obj = new THREE.Line(geometry, material);
  obj.rotation.x = 0.5 * Math.PI;
  // obj.position.y = posi[0].y;
  // obj.position.x = posi[0].x - r * 0.5 + baser;

  return obj;
}
