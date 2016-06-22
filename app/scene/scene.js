let OrbitControls = require('three-orbit-controls')(THREE)
/*
scene.js
 */

class Scene {

  /**
   * @constructor
   */
  constructor() {

    this.width = window.innerWidth
    this.height = window.innerHeight


    this.renderer = new THREE.WebGLRenderer( this.width, this.height, { antialias: true } )
    this.renderer.setClearColor(0x171717, 1);
    this.camera = new THREE.PerspectiveCamera( 45, this.width / this.height, 1, 2000 )
    this.controls = new OrbitControls(this.camera)
    this.scene = new THREE.Scene()
    let ambientLight = new THREE.AmbientLight( 0xaaaaaa )
		this.scene.add( ambientLight )

    // this.axis = new THREE.AxisHelper(100)
    // this.scene.add(this.axis)

		let lights = []
		lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 300 )
		lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 )
		lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 )
		lights[ 3 ] = new THREE.PointLight( 0xffffff, 1, 0 )

		lights[ 0 ].position.set( 0, 350, 0 )
		lights[ 1 ].position.set( 100, 200, 100 )
		lights[ 2 ].position.set( - 100, - 200, - 100 )
		lights[ 3 ].position.set( 0, - 500, 0 )

    this.pointLightHelpers = []
    for (let i = 0; i < 4; i++) {
      this.scene.add( lights[i] )
      // this.pointLightHelpers[i] = new THREE.PointLightHelper( lights[i], 5 )
      // this.scene.add( this.pointLightHelpers[i] )
    }


    this.renderer.setSize( this.width, this.height )

    this.camera.position.z = 1000

  }

  /**
   * Add a child to the scene
   *
   * @param {Obj} child - a THREE object
   */
  add( child ) {

    this.scene.add( child )

  }

  /**
   * Remove a child from the scene
   *
   * @param {Obj} child - a THREE object
   */
  remove( child ) {

    this.scene.remove( child )

  }

  /**
   * Renders/Draw the scene
   */
  render() {

    this.renderer.render( this.scene, this.camera )

  }

  /**
   * Resize the scene according to screen size
   *
   * @param {Number} newWidth
   * @param {Number} newHeight
   */
  resize( newWidth, newHeight ) {

    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()

    this.renderer.setSize( newWidth, newHeight )

  }

}

export default Scene
