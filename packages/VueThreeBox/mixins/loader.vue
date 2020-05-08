<script>
import Loaders from '../utils/loaders.js'

export default {
  props: {
    src: { type: String, required: true },
    fileType: { type: String, required: true }
  },
  data () {
    return {
      loadingPercentage: 0,
      loading: false
    }
  },
  methods: {
    async getLoader (fileType) {
      let loader
      switch (fileType) {
        case 'fbx': {
          let FBXLoader = await Loaders.importFBXLoader()
          loader = new FBXLoader()
          break
        }
        case 'obj': {
          let ObjLoader = await Loaders.importObjLoader()
          loader = new ObjLoader()
          break
        }
      }
      return loader
    },
    async setModel () {
      let loader = await this.getLoader(this.fileType)
      this.loading = true
      loader.load(this.src, this.onLoad, this.onProgress, this.onError)
    },
    onLoad (object) {
      this.loading = false
      this.object = object
      this.scene.add(object)
    },
    onProgress (e) {
      // console.log('Load=>onProgress::', e)
      this.loadingPercentage = Math.round(e.loaded * 100 / e.total)
      this.$emit('onProgress', e)
    },
    onError (e) {
      // console.log('Load=>onError::', e)
      this.$emit('onError', e)
    }
  }
}
</script>
