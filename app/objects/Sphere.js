export default class Sphere extends THREE.Object3D {
  constructor() {
    super()
    this.geometry = new THREE.SphereGeometry(800, 35, 35)
    this.geometry.mergeVertices()
    this.initalVertices = [];
  	for (let i = 0; i < this.geometry.vertices.length; i++){
      this.initalVertices[i] = {};
      this.initalVertices[i].x = this.geometry.vertices[i].x;
      this.initalVertices[i].y = this.geometry.vertices[i].y;
      this.initalVertices[i].z = this.geometry.vertices[i].z;
  	}

    this.material = new THREE.MeshPhongMaterial({
      color: 0x3CDDDC,
      shading: THREE.FlatShading,
      shininess: 50
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.position.y = -300;
  }

  update (audioData) {
    this.mesh.rotation.y += .03
    for (let i = 0; i < this.geometry.vertices.length; i++) {
      this.geometry.vertices[i].x = this.initalVertices[i].x * (audioData[i] / 200);
      this.geometry.vertices[i].y = this.initalVertices[i].y * (audioData[i] / 300);
      this.geometry.vertices[i].z = this.initalVertices[i].z * (audioData[i] / 200);
    }
    this.mesh.geometry.verticesNeedUpdate = true;
  }
}
