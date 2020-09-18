(function (modules) {
  // 已加载的模块（加载过的模块会被缓存下来）
  var installedModules = {}

  // 定义加载模块的方法（模块加载器）， moduleId 一般是文件路径
  function __webpack_require__(moduleId) {
    // 先到 cache 里看看模块是否已被缓存，有就直接返回这个模块
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports
    }
    // 否则，创建一个新的 module ，并且放入 cache
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    })
    // 执行刚才创建的模块 （这里就是 ./src/index.js）
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
    
    // 将模块标记为已加载
    module.l = true

    // Return the exports of the module
    return module.exports
  }

  // 加载入口模块
  return __webpack_require__((__webpack_require__.s = './src/index.js'))
})({
  './src/index.js': function (module, exports) {
    console.log('halo')
  }
})