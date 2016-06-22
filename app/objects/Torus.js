export default class Torus extends THREE.Object3D {
  constructor() {
    super()
    this.geometry = new THREE.TorusGeometry(100, 40, 10, 10)
    this.geometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2))
    this.geometry.mergeVertices()
    this.initalVertices = [];
    for (let i = 0; i < this.geometry.vertices.length; i++){
      this.initalVertices[i] = {};
      this.initalVertices[i].x = this.geometry.vertices[i].x;
      this.initalVertices[i].y = this.geometry.vertices[i].y;
      this.initalVertices[i].z = this.geometry.vertices[i].z;
    }
    this.material = new THREE.MeshPhongMaterial({
      color: 0x9B78EC,
      shading: THREE.FlatShading,
      shininess: 50
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.position.y = -260;
  }

  update (audioData) {
    for (let i = 0; i < this.geometry.vertices.length; i++) {
      this.geometry.vertices[i].y = this.initalVertices[i].y * (audioData[i] / 100);
    }
    this.mesh.geometry.verticesNeedUpdate = true;
  }
}
