const importFBXLoader = async () => {
  return new Promise(resolve => {
    import(/* fbx */ 'three/examples/jsm/loaders/FBXLoader.js').then((res) => {
      resolve(res.FBXLoader)
    })
  })
}

const importObjLoader = async () => {
  return new Promise(resolve => {
    import(/* obj */ 'three/examples/jsm/loaders/OBJLoader.js').then((res) => {
      resolve(res.OBJLoader)
    })
  })
}

export default {
  importFBXLoader,
  importObjLoader
}
