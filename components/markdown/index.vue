<template>
  <mavon-editor
    ref="editor"
    v-model="editorValue"
    :toolbars="toolbars"
    :box-shadow-style="boxShadowStyle"
    :code-style="codeStyle"
    :tab-size="tabSize"
    :placeholder="placeholder"
    :subfield="subfield"
    :editable="editable"
    :navigation="navigation"
    :ishljs="ishljs"
    :min-height="height"
    :height="height"
    @change="change"
    @imgAdd="imgAdd"
    @imgDel="imgDel"
  />
</template>

<script>
import defaultOptions from './defaultOptions'
import ossUtil from './oss'
var mavonEditor = require('mavon-editor')
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'MarkdownEditor',
  components: { 'mavon-editor': mavonEditor.mavonEditor },
  model: {
    prop: 'value',
    event: 'callBack'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    toolbars: {
      type: Object,
      default() { return defaultOptions.toolbars }
    },
    appName: {
      type: String,
      default: ''
    },
    tabSize: {
      type: Number,
      default: 4
    },
    boxShadowStyle: {
      type: String,
      required: false,
      default: '0 1px 6px 0 rgba(0, 0, 0, 0.1)'
    },
    subfield: {
      type: Boolean,
      default: true
    },
    navigation: {
      type: Boolean,
      default: true
    },
    editable: {
      type: Boolean,
      default: true
    },
    ishljs: {
      type: Boolean,
      default: true
    },
    codeStyle: {
      type: String,
      default: 'vs2015'
    },
    placeholder: {
      type: String,
      default: '请输入内容...'
    },
    height: {
      type: String,
      required: false,
      default: '800px'
    }
  },
  data() {
    return {
      editorValue: '',
      editorHTMLValue: ''
    }
  },
  watch: {
    value(newVlaue, oldValue) {
      this.editorValue = newVlaue
    }
  },
  methods: {
    change(value, render) {
      this.editorHTMLValue = render
      this.$emit('callBack', value)
    },
    getHTML() {
      return this.editorHTMLValue
    },
    imgAdd(position, imgfile) {
      const formdata = new FormData()

      formdata.append('appId', this.$route.name)
      formdata.append('type', 'md')
      formdata.append('fileName', imgfile.name)
      formdata.append('file', imgfile)

      ossUtil.getApi(this.appName).upload(formdata).then(result => {
        const url = result.data.staticDomain + '/' + result.data.fileFullName
        imgfile.fileKey = result.data.fileFullName

        this.$refs.editor.$img2Url(position, url)
      }).catch(err => {
        console.log(err)
        this.$message.error('图片上传失败！')
      })
    },
    imgDel(file) {
      // console.log(file[1].fileKey)
      ossUtil.getApi(this.appName).deleteFile({ appId: this.$route.name, fileKey: file[1].fileKey })
    }
  }
}
</script>
<style lang="scss" scoped>
.markdown-body {
  width: 100%;
  height: 100%;
  z-index: 3;
}
.markdown-body .fullscreen {
  z-index: 10000;
}
</style>
