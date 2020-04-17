<template>
  <div class="keywords">
    <div class="content">
      <div class="title">
          <div class="icon"><i class="el-icon-document" /></div>
          <div class="text">Deep Residual Learning for Image Recognition</div>
      </div>


      <div class="authorInfo">
        <div class="time">2016 Computer Vision and Pattern Recognition</div>
        <div class="number"> | DOI: 10.1109/CVPR.2016.90</div>
      </div>

      <div class="authorInfo">
        <div class="author">Kaiming He1,</div>
        <div class="author">Xiangyu Zhang2,</div>
        <div class="author">Shaoqing Ren1,</div>
        <div class="author">Jian Sun1</div>
      </div>

      <div class="authorInfo">
        <div class="org">1 Microsoft ,</div>
        <div class="org">2 Xi'an Jiaotong University</div>
      </div>

      <div class="references">
        <div class="icon"><i class="el-icon-user-solid" /></div>
        <div class="number">50</div>
        <div class="text">References</div>

        <div class="icon"><i class="el-icon-link" /></div>
        <div class="number">40,522</div>
        <div class="text">Citations</div>
      </div>

      <div class="infoTitle">
        <h4>Abstract</h4>
        <p>
          Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. On the ImageNet dataset we evaluate residual nets with a depth of up to 152 layers—8× deeper than VGG nets [40] but still having lower complexity. An ensemble of these residual nets achieves 3.57% error on the ImageNet test set. This result won the 1st place on the ILSVRC 2015 classification task. We also present analysis on CIFAR-10 with 100 and 1000 layers. The depth of representations is of central importance for many visual recognition tasks. Solely due to our extremely deep representations, we obtain a 28% relative improvement on the COCO object detection dataset. Deep residual nets are foundations of our submissions to ILSVRC & COCO 2015 competitions1, where we also won the 1st places on the tasks of ImageNet detection, ImageNet localization, COCO detection, and COCO segmentation.
        </p>
      </div>

      <div class="infoTitle">
        <h4>Other Links</h4>
        <p>
          View PDF:arxiv.org
        </p>
        <p>Website(s):dblp.uni-trier.de | doi.ieeecomputersociety.org | openaccess.thecvf.com | doi.org | ieeexplore.ieee.org | scinapse.io | ui.adsabs.harvard.edu | arxiv-vanity.com | cv-foundation.org | xplqa30.ieee.org</p>
        <p>Additional link(s):arxiv.org | dx.doi.org | ieeexplore.ieee.org</p>
        <p>Paper Resource(s): https://github.com/D-X-Y/ResNeXt-DenseNet/blob/master/README.md</p>
      </div>

      <div class="infoTitle">
        <h4>Other Versions</h4>
        <p>Deep Residual Learning for Image Recognition
        </p>
        <p>2015 arXiv: Computer Vision and Pattern Recognition</p>
      </div>
      
      
      <div class="infoTitle">
        <h4>Related Topics</h4>
        <p>
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
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Machine learning
          </el-tag>
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />MNIST database
          </el-tag>
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Deep learning
          </el-tag>
          <el-tag type="" effect="dark">
            <i class="el-icon-magic-stick" />Convolutional neural network
          </el-tag>
        </p>
        <p> 
          <el-button>FOLLOW</el-button>
          <el-button>CLAIM</el-button>

          <el-button-group>
            <el-button icon="el-icon-edit"></el-button>
            <el-button icon="el-icon-document"></el-button>
            <el-button icon="el-icon-share"></el-button>
          </el-button-group>
        </p>
      </div>


      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="REVIEW" name="review">
          <div class="tabContent">
            <div class="left">
              <filterView />
            </div>
            <div class="right">
              <listView />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="REFERENCES" name="reference">
        </el-tab-pane>
        <el-tab-pane label="CITED BY" name="cited">
        </el-tab-pane>
        <el-tab-pane label="RELATED" name="related">
          RELATED
        </el-tab-pane>
      </el-tabs>
      
    </div>


    <p class="title ">
      <span class="title-name"><i class="iconfont icon-search"></i>{{ keywords }}</span>
      <span class="line"></span>
    </p>

    <div class="article">
      <articleView
        :articleList="list"
        :haveMoreArt="false"></articleView>
    </div>
  </div>
</template>
<script>

import articleView from '~/components/common/article'
import filterView from '~/components/detail/filter'
import listView from '~/components/detail/list'


export default {

  name: 'keywords',

  transition: 'fade',

  scrollToTop: true,

  head() {
    return { 
      title: `关键词搜索：${this.keywords}_${this.option.title}`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `关键词搜索：${this.keywords} - ${this.option.title}`
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'app'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.option.description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.option.description
        },
        {
          hid: 'content',
          name: 'content',
          content: this.option.content
        },
        {
          name: 'Copyright',
          content: this.option.author + "版权所有"
        },
        {
          name: 'author',
          content: this.option.author
        }
      ],
      link: [
        {
          hid: 'shortcut icon',
          rel: 'shortcut icon',
          href: this.option.staticDomain + this.option.icon
        },
        {
          hid: 'icon',
          rel: 'icon',
          href: this.option.staticDomain + this.option.icon
        }
      ]
    }
  },

  fetch ({ store, params }) {
    return store.dispatch('article/getArtList', {
      ...params,
      page_size: 100
    })
  },

  data () {
    return {
      activeName: 'review'
    }
  },

  components: {
    articleView, filterView, listView
  },

  methods: {
    handleClick() {
      
    }
  },

  computed: {
    mobileLayout () {
      return this.$store.state.options.mobileLayout
    },

    keywords () {
      return this.$route.params.keywords
    },

    option () {
      return this.$store.state.options.option
    },

    list () {
      return this.$store.state.article.art.list
    }
  }
}
</script>

<style scoped lang="scss">

.keywords {
    > .title {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem 0rem;
    line-height: 1.5rem;
    font-size: 1rem;
    font-weight: normal;

    i {
      margin-right: .5rem;
    }

    > .title-name {
      position: relative;
      padding-right: $lg-pad;
      background: $white;
      z-index: 99;      
    }

    > .line {
      top: 50%;
    }
  }

  .content {
    width: 90rem;
    margin: auto;
    font-size: 16px;
    border-top: 1px solid #f0f0f0;
    padding: 10px;
    line-height: 24px;
    .title {
      display: flex;
      justify-content: left;
      width: 100%;
      .icon {
        font-size: 2rem ;
      }
      .text {
        font-size: 2rem ;
      }
    }

    .references {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end ;
      width: 100%;

      .icon {
        font-size: 2rem ;
      }
      .number {
        font-size: 1.8rem ;
        padding-left: 10px ;
      }
      .text {
        font-size: .8rem ;
        padding-left: 10px ;
      }
    }

    .infoTitle {
      padding-top: 20px ;
      > h4 {
        padding: 5px 0px ;
      }
      > p {
        padding: 10px;
        font-size: 14px ;
      }
    }

    .tabContent {
      display: flex;
      justify-content: flex-start;
      padding: 10px ;
      .left {
        width: 300px ;
        min-width: 300px;
      }
      .right {
        width: calc(100%-310px) ;
        padding-left: 10px ;
      }
    }

    .authorInfo {
      display: flex;
      justify-content: left;
      width: 100%;

    }
    
    .content a {
      font-size: 14px ;
      color: #333 ;
    }
    .content a:hover {
      color: $blue ;
    }
  }
}
</style>
