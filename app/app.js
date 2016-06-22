import Scene from './scene/scene'
import Audio from './Audio'

import Sphere from './objects/Sphere'
import Torus from './objects/Torus'

class App {

  constructor() {

    this.DELTA_TIME = 0
    this.LAST_TIME = Date.now()

    this.width = window.innerWidth
    this.height = window.innerHeight

    this.scene = new Scene()
    this.audio = new Audio(435)

    let root = document.body.querySelector( '.app' )
    root.appendChild( this.scene.renderer.domElement )

    this.addSphere()
    this.addTorus()

    this.addListeners()

  }

  addListeners() {

    window.addEventListener( 'resize', this.onResize.bind(this) )
    TweenMax.ticker.addEventListener( 'tick', this.update.bind(this) )

  }

  addSphere() {
    this.sphere = new Sphere()
    this.sphere.position.set(0, 0, 0)
    this.scene.add(this.sphere.mesh)
  }

  addTorus() {
    this.torus = new Torus()
    this.torus.position.set(0, 0, 0)
    this.scene.add(this.torus.mesh)
  }

  /**
   * update
   * - Triggered on every TweenMax tick
   */
  update() {
    this.DELTA_TIME = Date.now() - this.LAST_TIME
    this.LAST_TIME  = Date.now()
    let audioData   = this.audio.getAudioData()
    this.sphere.update(audioData)
    this.torus.update(audioData)
    this.scene.render()

  }

  /**
   * onResize
   * - Triggered when window is resized
   * @param  {obj} evt
   */
  onResize( evt ) {
    this.width  = window.innerWidth
    this.height = window.innerHeight
    this.scene.resize( this.width, this.height )
  }

}

export default App
