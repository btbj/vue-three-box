import ThreeScene from './ThreeScene.vue'
import ThreeCam from './ThreeCam.vue'
import ThreeLight from './ThreeLight.vue'
import ThreeFbxModel from './ThreeFbxModel.vue'

const components = [
  ThreeScene,
  ThreeCam,
  ThreeLight,
  ThreeFbxModel
]
/*
  定义install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
*/
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}
// 判断是否引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ThreeScene,
  ThreeCam,
  ThreeLight,
  ThreeFbxModel
}
export {
  install,
  ThreeScene,
  ThreeCam,
  ThreeLight,
  ThreeFbxModel
}
