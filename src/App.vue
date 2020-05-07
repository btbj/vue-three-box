<template>
  <div id="app">
    <test-three-box class="container"
      src="/static/model/dancing.fbx" loader="fbx"/>
  </div>
</template>

<script>
import TestThreeBox from './components/TestThreeBox'

export default {
  name: 'app',
  components: {
    TestThreeBox
  }
}
</script>

<style>
html, body, #app {
  padding: 0;
  margin: 0;
}
.container{
  height: 500px;
  width: 500px;
}
</style>
