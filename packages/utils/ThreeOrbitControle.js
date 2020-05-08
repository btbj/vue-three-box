import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const setControl = (camera, domElement) => {
  let controls = new OrbitControls(camera, domElement)
  controls.target.set(0, 100, 0)

  controls.minDistance = 300
  controls.maxDistance = 1000

  // 禁止拖拽
  controls.enablePan = false

  controls.update()
  return controls
}

export default setControl
