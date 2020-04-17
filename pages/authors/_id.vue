<template>
  <div class="keywords">
    <div class="content">
      <div class="title">
          <div class="icon"><i class="el-icon-user-solid" /></div>
          <div class="text">Kaiming He</div>
      </div>


      <div class="references">
        <div class="icon"><i class="el-icon-document" /></div>
        <div class="number">70</div>
        <div class="text">Papers</div>

        <div class="icon"><i class="el-icon-link" /></div>
        <div class="number">120,618</div>
        <div class="text">Citations*</div>
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

      <div class="infoTitle">
        <h4>Publications & Citations Over Time</h4>
        <p>图像
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


  </div>
</template>
<script>
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
    filterView, listView
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
