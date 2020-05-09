<script>
export default {
  props: {
    position: {
      type: Array,
      default: function () {
        return [0, 0, 0]
      }
    },
    rotation: {
      type: Array,
      default: function () {
        return [0, 0, 0]
      }
    },
    scale: {
      type: Array,
      default: function () {
        return [1, 1, 1]
      }
    },
    invisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      instance: null
    }
  },
  methods: {
    setObj3DProps () {
      this.instance.position.set(...this.position)
      this.instance.rotation.set(...this.rotation, 'XYZ')
      this.instance.scale.set(...this.scale)
      this.instance.visible = !this.invisible
    }
  }
}
</script>
