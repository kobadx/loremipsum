export function Base(posi, color, r) {
  const obj = new THREE.Group();
  for (let i = 0; i < 2; i++) {
    const _line = line(posi, color);
    _line.position.x = r * i;
    obj.add(_line);
  }
  const _curve = curve(r, color, posi);
  obj.add(_curve);

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
  const material = new THREE.LineBasicMaterial({
    color: color,
    opacity: 0,
    transparent: true,
    depthTest: false,
  });
  return new THREE.Line(geometry, material);
}

function curve(r, color, posi) {
  const points = [];
  for (let j = 0; j < Math.PI; j += (2 * Math.PI) / 10) {
    points.push(r * Math.cos(j) * 0.5, r * Math.sin(j) * 0.5, 0);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.addAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(points), 3)
  );

  const material = new THREE.LineBasicMaterial({
    color: color,
    opacity: 0,
    transparent: true,
  });
  const obj = new THREE.Line(geometry, material);
  obj.rotation.x = 0.5 * Math.PI;
  obj.position.y = posi[0].y;
  obj.position.x = posi[0].x + r * 0.5;
  obj.position.z = posi[0].z;
  return obj;
}
