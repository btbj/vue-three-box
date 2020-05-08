import VueThreeBox from './VueThreeBox'
/*
  定义install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
*/
const install = function (Vue) {
  Vue.component(VueThreeBox.name, VueThreeBox)
}
// 判断是否引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  VueThreeBox,
  install
}
export { VueThreeBox, install }
