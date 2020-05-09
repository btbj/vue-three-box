<script>
import { LoadingManager } from 'three'
export default {
  data () {
    return {
      manager: new LoadingManager()
    }
  },
  methods: {
    initManager () {
      this.manager.onLoad = this.onLoad
      this.manager.onProgress = this.onProgress
      this.manager.onError = this.onError
    },
    onLoad (e) {
      console.log('manager onLoad::', e)
      this.$emit('onLoad', e)
    },
    onProgress (e) {
      console.log('manager onProgress::', e)
      this.$emit('onProgress', e)
    },
    onError (error) {
      console.log('manager onError::', error)
      this.$emit('onError', error)
    }

  },
  beforeMount () {
    this.initManager()
  }
}
</script>
