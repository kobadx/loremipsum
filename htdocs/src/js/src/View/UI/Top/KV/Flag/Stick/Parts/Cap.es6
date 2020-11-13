export function Cap(posi, color, r, baser) {
  const obj = new THREE.Group();
  const _posi = [{ x: -r * 0.5, y: 0 }, { x: -r * 0.5, y: 10 }];
  // for (let i = 0; i < 2; i++) {
  //   const _line = line(_posi, color);
  //   _line.position.x = r * i;
  //   obj.add(_line);
  // }

  const _curve = curve(
    posi[0].clone().add(new THREE.Vector3(0, 0, 0)),
    posi[0].clone().add(new THREE.Vector3(baser, 0, 0)),
    color
  );
  obj.add(_curve);

  const _curve2 = curve2(posi, baser, color);
  obj.add(_curve2);
  // obj.position.x = 1;
  return obj;
}

function curve(posi1, posi2, color) {
  const obj = new THREE.Group();

  const points = [];
  const v = posi1
    .clone()
    .sub(posi2)
    .multiplyScalar(0.5)
    .add(posi2)
    .add(new THREE.Vector3(0, 4.5, 0));
  const v2 = posi1
    .clone()
    .sub(v)
    .multiplyScalar(0.5)
    .add(v)
    .add(new THREE.Vector3(-10, 3, 0));
  const _curve = new THREE.QuadraticBezierCurve3(posi1, v2, v);
  const arr = _curve.getPoints(30);
  for (var u = 0; u < arr.length; u++) {
    points.push(arr[u].x, arr[u].y, arr[u].z);
  }

  const v3 = posi2
    .clone()
    .sub(v)
    .multiplyScalar(0.5)
    .add(v)
    .add(new THREE.Vector3(9, -2, 0));

  const v4 = posi2.clone().add(new THREE.Vector3(0, -3, 0));
  const _curve2 = new THREE.QuadraticBezierCurve3(v, v3, v4);
  const arr2 = _curve2.getPoints(30);
  for (var u = 0; u < arr2.length; u++) {
    points.push(arr2[u].x, arr2[u].y, arr2[u].z);
  }

  const geometry = new THREE.BufferGeometry();
  const material = new THREE.LineBasicMaterial({
    color: color,
    opacity: 0,
    transparent: true,
    depthTest: false
  });
  geometry.addAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(points), 3)
  );
  obj.add(new THREE.Line(geometry, material));

  return obj;
}

function curve2(posi, r, color) {
  const obj = new THREE.Group();
  const v = posi[0]
    .clone()
    .sub(posi[1])
    .normalize()
    .multiplyScalar(8);
  const v1 = v.add(posi[0]).add(new THREE.Vector3(1, 0, 0));

  const points = [];
  //左側直線
  points.push(posi[0].x + 0.5, posi[0].y, posi[0].z);
  points.push(v1.x, v1.y, v1.z);
  //カーブ
  const v2 = posi[0].clone().add(new THREE.Vector3(16, -1, 0));
  const v3 = v1.clone().add(new THREE.Vector3(16, -4, 0));
  const p = v1
    .clone()
    .sub(v3)
    .multiplyScalar(0.5)
    .add(v3)
    .add(new THREE.Vector3(2, 6, 0));
  const c = new THREE.QuadraticBezierCurve3(v1, p, v3);
  const arr = c.getPoints(30);
  for (var u = 0; u < arr.length; u++) {
    points.push(arr[u].x, arr[u].y, arr[u].z);
  }

  //右側直線
  points.push(v3.x, v3.y, v3.z);
  points.push(v2.x + 1, v2.y - 3, v2.z);
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.LineBasicMaterial({
    color: color,
    opacity: 0,
    transparent: true,
    depthTest: false
  });
  geometry.addAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(points), 3)
  );
  const line = new THREE.Line(geometry, material);
  line.position.x = -4;
  line.position.y = 4;

  obj.add(line);
  return obj;
}
