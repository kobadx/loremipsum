export function Base2(posi, color, r) {
  const obj = new THREE.Group();
  const v = new THREE.Vector3(
    posi[0].x - posi[1].x,
    posi[0].y - posi[1].y,
    posi[0].z - posi[1].z
  );
  const _line = curve2(
    posi[0],
    v
      .clone()
      .multiplyScalar(-0.8)
      .add(new THREE.Vector3(posi[0].x, posi[0].y, posi[0].z)),
    color,
    v.clone()
  );

  _line.position.x += r + 3;

  obj.add(_line);

  // const _curve = curve(r, color, posi);
  // obj.add(_curve);

  return obj;
}

function line(posi, color) {
  const points = [];
  for (var i = 0; i < 2; i++) {
    // const
    points.push(posi[i].x, posi[i].y, posi[i].z);
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

function curve(r, color, posi) {
  const points = [];
  for (let j = 0; j < Math.PI; j += (2 * Math.PI) / 10) {
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
  obj.position.y = posi[0].y;
  obj.position.x = posi[0].x + r * 0.5;
  obj.position.z = posi[0].z;
  return obj;
}

function curve2(posi, posi2, color, v) {
  const points = [];
  const _v = v
    .clone()
    .multiplyScalar(-0.35)
    .add(new THREE.Vector3(posi.x, posi.y, posi.z));
  const _v2 = v
    .clone()
    .multiplyScalar(-0.1)
    .add(new THREE.Vector3(posi.x, posi.y, posi.z));
  const _curve = new THREE.QuadraticBezierCurve3(
    _v2,
    _v.add(new THREE.Vector3(10, 10, 0)),
    posi2
  );
  const arr = _curve.getPoints(50);
  for (var i = 0; i < arr.length; i++) {
    points.push(arr[i].x, arr[i].y, arr[i].z);
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
