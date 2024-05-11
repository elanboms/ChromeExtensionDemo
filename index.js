new Vue({
  el: '#popup',
  data: {
    manifest: {}
  },
  created: function () {
    // 获取当前ctx的version
    this.manifest = chrome.runtime.getManifest()
    console.log('this.manifest=', this.manifest)
  },
  mounted () {}
})
