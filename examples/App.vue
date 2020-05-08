<template>
  <div id="app">
    <vue-three-box class="container" src="/static/model/dancing.fbx" loader="fbx"></vue-three-box>
  </div>
</template>

<script>
import { VueThreeBox } from '../packages/index.js'

export default {
  name: 'app',
  components: { VueThreeBox }
}
</script>

<style>
#app .container{
  height: 500px;
  width: 500px;
}
</style>
