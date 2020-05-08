<script>
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export default {
  methods: {
    setControl (camera, domElement) {
      this.controls = new OrbitControls(camera, domElement)
      this.controls.target.set(0, 100, 0)

      this.controls.minDistance = 300
      this.controls.maxDistance = 1000

      // 禁止拖拽
      this.controls.enablePan = false

      this.controls.update()
    }
  }
}
</script>
