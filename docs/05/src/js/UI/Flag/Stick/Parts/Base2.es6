export function Base2(posi, color, r) {
  const obj = new THREE.Group();
  const v = new THREE.Vector3(
    posi[0].x - posi[1].x,
    posi[0].y - posi[1].y,
    posi[0].z - posi[1].z
  );
  const linePer = -0.76;
  const _line = curve2(
    posi[0],
    v
      .clone()
      .multiplyScalar(linePer)
      .add(new THREE.Vector3(posi[0].x, posi[0].y, posi[0].z)),
    color,
    v.clone()
  );

  _line.position.x += r + 3;
  obj.add(_line);

  const _line2 = curve(
    v
      .clone()
      .multiplyScalar(linePer + 0.04)
      .add(new THREE.Vector3(posi[0].x, posi[0].y, posi[0].z)),
    posi[1],
    color,
    v.clone()
  );

  _line2.position.x += r + 3;
  obj.add(_line2);

  const _pole = pole(posi[0], color, v.clone());
  _pole.position.x += r + 5;
  obj.add(_pole);

  const _pole2 = pole(
    v
      .clone()
      .multiplyScalar(linePer + 0.02)
      .add(new THREE.Vector3(posi[0].x, posi[0].y, posi[0].z)),
    color,
    v.clone()
  );
  _pole2.position.x += r + 5;
  obj.add(_pole2);

  return obj;
}

function pole(posi, color, v) {
  const obj = new THREE.Group();
  const _v = v
    .clone()
    .multiplyScalar(-0.05)
    .add(new THREE.Vector3(posi.x, posi.y, posi.z));
  const _v2 = v
    .clone()
    .multiplyScalar(-0.02)
    .add(new THREE.Vector3(posi.x, posi.y, posi.z));
  const points = [];
  points.push(_v.x, _v.y, _v.z);
  points.push(_v2.x, _v2.y, _v2.z);
  const geometry = new THREE.BufferGeometry();

  const material = new THREE.LineBasicMaterial({
    color: color,
    opacity: 0,
    transparent: true
  });
  geometry.addAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(points), 3)
  );
  obj.add(new THREE.Line(geometry, material));

  const _tube = tube(_v, _v2, material);
  obj.add(_tube);
  return obj;
}

function tube(_v, _v2, material) {
  const obj = new THREE.Group();
  for (var i = 0; i < 2; i++) {
    const points = [];
    const v1 = i == 0 ? _v : _v2;
    const v2 =
      i == 0
        ? v1.clone().sub(new THREE.Vector3(2.5, -4, 0))
        : v1.clone().sub(new THREE.Vector3(2.5, -2.5, 0));
    const v3 = v1.clone().sub(new THREE.Vector3(5, 0, 0));
    const _curve = new THREE.QuadraticBezierCurve3(v1, v2, v3);
    const arr = _curve.getPoints(50);
    for (var u = 0; u < arr.length; u++) {
      points.push(arr[u].x, arr[u].y, arr[u].z);
    }
    const _geometry = new THREE.BufferGeometry();
    _geometry.addAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(points), 3)
    );
    obj.add(new THREE.Line(_geometry, material));
    if (i == 0) {
      //チョビ線
      const _points = [];
      const v4 = v1.clone().sub(new THREE.Vector3(-13, 5, 0));
      const _geometry2 = new THREE.BufferGeometry();
      // _points.push(v1.x, v1.y, v1.z);
      const _v5 = v4.clone().sub(v1);

      const l = _v5.length();
      for (var u = 0; u < 5; u++) {
        const p = _v5
          .clone()
          .multiplyScalar(u / 5)
          .add(v1);
        _points.push(p.x, p.y, p.z);
      }
      _geometry2.addAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(_points), 3)
      );
      const line = new THREE.Line(_geometry2, material);
      line.name = "chobiline";
      obj.add(line);
    }
  }

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
    .multiplyScalar(-0.05)
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
  const material = new THREE.LineBasicMaterial({
    color: color,
    opacity: 0,
    transparent: true
  });
  return new THREE.Line(geometry, material);
}

function curve(posi, posi2, color, v) {
  const points = [];
  const _v = v
    .clone()
    .multiplyScalar(-0.35)
    .add(new THREE.Vector3(posi.x, posi.y, posi.z));
  const _v2 = v
    .clone()
    .multiplyScalar(-0.07)
    .add(new THREE.Vector3(posi.x, posi.y, posi.z));
  const _curve = new THREE.QuadraticBezierCurve3(
    _v2,
    posi2.add(new THREE.Vector3(2, 2, 0)),
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
  const material = new THREE.LineBasicMaterial({
    color: color,
    opacity: 0,
    transparent: true
  });
  return new THREE.Line(geometry, material);
}
