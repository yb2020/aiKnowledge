<template>
    <div tag="div" class="aside" >
      <div class="item">
        <div class="title">
          <div class="text">
            <div><i class="el-icon-document" />ImageNet classification with deep convolutional neural networks</div>
            <div>2017 COMMUNICATIONS OF THE ACM</div>
            <div>*Alex Krizhevsky1,Ilya Sutskever1,Geoffrey E. Hinton2</div>
            <div>1 Google ,2 OpenAI</div>
          </div>
          <div class="right">
            <p>82,542 citations * for all</p>
            <p>22,654 citations *</p>
          </div>
        </div>

        <div class="tag">
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Vanishing gradient problem
          </el-tag>
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Test set
          </el-tag>
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Residual
          </el-tag>
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Pattern recognition
          </el-tag>
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Object detection
          </el-tag>
        </div>
        <div class="content">
          We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest into the 1000 different classes. On the test data, we achieved top-1 and top-5 error rates of 37.5% and 17.0%, respectively, which is considerably better than the previous state-of-the-art. The neural network, which has 60 million parameters and 650,000 neurons, consists of five convolutional layers, some of which are followed by max-pooling layers, and three fully connected layers with a final 1000-way softmax. To make training faster, we used non-saturating neurons and a very efficient GPU implementation of the convolution operation. To reduce overfitting in the fully connected layers we employed a recently developed regularization method called "dropout" that proved to be very effective. We also entered a variant of this model in the ILSVRC-2012 competition and achieved a winning top-5 test error rate of 15.3%, compared to 26.2% achieved by the second-best entry.
        </div>
      </div>

      <div class="item">
        <div class="title">
          <div class="text">
            <div><i class="el-icon-document" />ImageNet classification with deep convolutional neural networks</div>
            <div>2017 COMMUNICATIONS OF THE ACM</div>
            <div>*Alex Krizhevsky1,Ilya Sutskever1,Geoffrey E. Hinton2</div>
            <div>1 Google ,2 OpenAI</div>
          </div>
          <div class="right">
            <p>82,542 citations * for all</p>
            <p>22,654 citations *</p>
          </div>
        </div>

        <div class="tag">
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Vanishing gradient problem
          </el-tag>
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Test set
          </el-tag>
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Residual
          </el-tag>
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Pattern recognition
          </el-tag>
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Object detection
          </el-tag>
        </div>
        <div class="content">
          We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest into the 1000 different classes. On the test data, we achieved top-1 and top-5 error rates of 37.5% and 17.0%, respectively, which is considerably better than the previous state-of-the-art. The neural network, which has 60 million parameters and 650,000 neurons, consists of five convolutional layers, some of which are followed by max-pooling layers, and three fully connected layers with a final 1000-way softmax. To make training faster, we used non-saturating neurons and a very efficient GPU implementation of the convolution operation. To reduce overfitting in the fully connected layers we employed a recently developed regularization method called "dropout" that proved to be very effective. We also entered a variant of this model in the ILSVRC-2012 competition and achieved a winning top-5 test error rate of 15.3%, compared to 26.2% achieved by the second-best entry.
        </div>
      </div>

    </div>
</template>

<script>

export default {
  name: 'aside',
  data () {
    return {
      activeName: "1",
      checkTopicsList: [],
      checkPublicationicsList: [],
      checkAuthorsList: [],
      checkJournalsList: [],
      checkInstitutionsList: [],
      checkConferencesList: []
    }
  },

  computed: {

    tag () {
      return this.$store.state.tag.data.list
    },

    hotArt () {
      return this.$store.state.article.hotArt.list
    },

    currentSaying () {
      return this.saying[Math.floor(Math.random() * 4)]
    },

    friends () {
      return this.$store.state.link.data.list
    }
  },

  watch: {
    open (val) {
      if (val) {
        this.$refs.search.focus()
      }
    }
  },

  methods: {
    handleChange () {
    }
  },

  directives: {
    fix: {
      inserted (el) {
        window.addEventListener('scroll', _ => {
          const scrollTop = document.documentElement.scrollTop
          if (scrollTop > 1000) el.classList.add('fixed')
          else el.classList.remove('fixed')
        })
      },
      unbind () {
        window.onscroll = null
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .item {
    border: 1px solid #f0f0f0 ;
    padding: 10px ;
    margin-bottom: 10px ;
    .title {
      display: flex;
      justify-content: space-between;
    }
    

  }
</style>
