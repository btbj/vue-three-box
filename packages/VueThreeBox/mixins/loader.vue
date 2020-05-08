<script>
export default {
  props: {
    src: { type: String, required: true },
    loader: { type: String, required: true }
  },
  data () {
    return {
      ObjLoader: null,
      loadingPercentage: 0,
      loading: false
    }
  },
  methods: {
    async importFBXLoader () {
      return new Promise(resolve => {
        import('three/examples/jsm/loaders/FBXLoader.js').then((res) => {
          resolve(res.FBXLoader)
        })
      })
    },
    async initLoader () {
      switch (this.loader) {
        case 'fbx': {
          let FBXLoader = await this.importFBXLoader()
          this.ObjLoader = new FBXLoader()
        }
      }
    },
    async setModel () {
      await this.initLoader()
      this.loading = true
      this.ObjLoader.load(this.src, (object) => {
        this.loading = false
        this.object = object
        this.scene.add(object)
      }, this.onProgress, this.onError)
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
