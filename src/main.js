import Vue from 'vue'
import App from './App.vue'
import VueUploadMultipleImage from './components/VueUploadMultipleImage'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'



if (document.querySelector('#my-strictly-unique-vue-upload-multiple-image')) {
  Vue.component('VueUploadMultipleImage', VueUploadMultipleImage)

  new Vue({
    el: '#my-strictly-unique-vue-upload-multiple-image',
    render: h => h(App)
  })
}

export default VueUploadMultipleImage
