

# vue-upload-multiple-image
A simple upload multiple images and cropping component for Vuejs
[NPM Package](https://www.npmjs.com/package/@hichem-khial/vue-upload-multiple-crop-images)

## Development (NPM / Yarn)
```
npm run dev
yarn dev
```

## Install

#### NPM / Yarn

Install the package:

```
npm install vue-upload-multiple-crop-images
yarn add vue-upload-multiple-crop-images
```

Then import it in your project

main.js
```javascript
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
```

```javascript
import VueUploadMultipleImage from 'vue-upload-multiple-crop-images'

export default {
  components: {
    VueUploadMultipleImage,
  },
}
```

#### Browser global

```html
<script src="path/to/vue.js"></script>
<script src="path/to/dist/vue-upload-multiple-image.js"></script>
```

How to use:
```html
<vue-upload-multiple-image
      @upload-success="uploadImageSuccess"
      @before-remove="beforeRemove"
      @edit-image="editImage"
      :data-images="images"
      ></vue-upload-multiple-image>
```
`images` has the structure:
```javascript
[
  {
    originalPath: 'http://example.com/image.jpg',
    path: 'http://example.com/image.jpg',
    default: 1,
    highlight: 1,
    caption: 'caption to display. receive', // Optional
  }
]
```
## Example
```html
<template>
  <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
    <vue-upload-multiple-image
      @upload-success="uploadImageSuccess"
      @before-remove="beforeRemove"
      @edit-image="editImage"
      :data-images="images"
      idUpload="myIdUpload"
      editUpload="myIdEdit"
      ></vue-upload-multiple-image>
  </div>
</template>

<script>
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      images: []
    }
  },
  components: {
    VueUploadMultipleImage
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      } else {
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    }
  }
}
</script>

<style>
#my-strictly-unique-vue-upload-multiple-image {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

```
## Options

### Props
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>idUpload</td>
      <td>String</td>
      <td>image-upload</td>
      <td>Id of input upload</td>
    </tr>
    <tr>
      <td>idEdit</td>
      <td>String</td>
      <td>image-edit</td>
      <td>Id of input edit</td>
    </tr>
    <tr>
      <td>dragText</td>
      <td>String</td>
      <td>Drag Images</td>
      <td>Drag Text</td>
    </tr>
    <tr>
      <td>browseText</td>
      <td>String</td>
      <td>Browse Files</td>
      <td>Browse Text</td>
    </tr>
    <tr>
      <td>primaryText</td>
      <td>String</td>
      <td>Primary Image</td>
      <td>Primary Text</td>
    </tr>
    <tr>
      <td>markIsPrimaryText</td>
      <td>String</td>
      <td>Mark As Primary Image</td>
      <td>Set default image</td>
    </tr>
    <tr>
      <td>popupText</td>
      <td>String</td>
      <td>This Image is Marked as Primary</td>
      <td>Description default image</td>
    </tr>
    <tr>
      <td>dropText</td>
      <td>String</td>
      <td>Drop Images</td>
      <td>Drag and drop</td>
    </tr>
    <tr>
      <td>accept</td>
      <td>String</td>
      <td>image/gif,image/jpeg,image/png,image/bmp,image/jpg</td>
      <td>Accept</td>
    </tr>
    <tr>
      <td>dataImages</td>
      <td>Array</td>
      <td>[]</td>
      <td>Array images</td>
    </tr>
    <tr>
      <td>multiple</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Set upload multiple image</td>
    </tr>
     <tr>
      <td>showPrimary</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Show text default image</td>
    </tr>
     <tr>
      <td>maxImage</td>
      <td>Number</td>
      <td>5</td>
      <td>Maximum upload image</td>
    </tr>
  </tbody>
</table>

### Events
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>arguments</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>upload-success</td>
      <td>(formData, index, fileList)</td>
      <td>Upload image succcess</td>
    </tr>
    <tr>
      <td>edit-image</td>
      <td>(formData, index, fileList)</td>
      <td>Edit image succcess</td>
    </tr>
    <tr>
      <td>before-remove</td>
      <td>(index, done, fileList)</td>
      <td>Before delete image</td>
    </tr>
    <tr>
      <td>mark-is-primary</td>
      <td>(index, fileList)</td>
      <td>Set default image</td>
    </tr>
    <tr>
      <td>limit-exceeded</td>
      <td>amount</td>
      <td>Limit exceeded images when drop</td>
    </tr>
  </tbody>
</table>

## Dependencies
- [lodash](https://github.com/lodash/lodash/)
- [vue-image-lightbox-carousel](https://github.com/lekhang2512/vue-image-lightbox-carousel)
- [vue-popperjs](https://github.com/RobinCK/vue-popper#readme)
- [vue-bootstrap](https://github.com/bootstrap-vue/bootstrap-vue)
- [vue-cropperjs](https://github.com/Agontuk/vue-cropperjs)
