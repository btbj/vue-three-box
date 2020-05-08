<script>
export default {
  methods: {
    setLights (THREE, scene, camera) {
      let light1 = new THREE.AmbientLight(0xffffff, 0.2)
      light1.position.set(0, 0, 0)
      camera.add(light1)

      let light2 = new THREE.DirectionalLight(0xffffff, 0.8)
      light2.position.set(270, 250, 280)
      camera.add(light2)

      let light3 = new THREE.DirectionalLight(0xffffff, 0.4)
      light3.position.set(-114, 290, -62)
      camera.add(light3)

      scene.add(camera)
    }
  }
}
</script>
