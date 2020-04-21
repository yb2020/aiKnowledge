<template>
  <div class="keywords">
    <div class="title">
        <div class="icon"><i class="el-icon-user-solid" /></div>
        <div class="text">孙健</div>
    </div>
    
    <div class="content">
      <div class="left">
        <div class="avatar">
          <img src="@/static/images/1587433534602.jpg" />
        </div>
      </div>
      <div class="right">

        <div class="references">
          <div class="icon"><i class="el-icon-document" /></div>
          <div class="number">70</div>
          <div class="text">论文</div>

          <div class="icon"><i class="el-icon-link" /></div>
          <div class="number">120,618</div>
          <div class="text">引用</div>
        </div>

        <div class="infoTitle">
          <h4>相关学科</h4>
          <p>
            <el-tag type="">
              <i class="el-icon-magic-stick" />消失梯度问题
            </el-tag>
            <el-tag type="" >
              <i class="el-icon-magic-stick" />模式识别
            </el-tag>
            <el-tag type="" >
              <i class="el-icon-magic-stick" />物体检测
            </el-tag>
            <el-tag type="" >
              <i class="el-icon-magic-stick" />机器学习
            </el-tag>
            <el-tag type="" >
              <i class="el-icon-magic-stick" />MNIST数据库
            </el-tag>
            <el-tag type="" >
              <i class="el-icon-magic-stick" />深度学习
            </el-tag>
            <el-tag type="" >
              <i class="el-icon-magic-stick" />卷积神经网络
            </el-tag>
            <el-tag type="" >
              <i class="el-icon-magic-stick" />计算机视觉
            </el-tag>
            <el-tag type="" >
              <i class="el-icon-magic-stick" />计算机科学
            </el-tag>
            <el-tag type="" >
              <i class="el-icon-magic-stick" />人工神经网络
            </el-tag>
          </p>
          <p style="padding-top: 10px ;"> 
            <el-button size="mini" type="primary">关注</el-button>
            <el-button size="mini" type="primary">要求</el-button>

            <el-button-group style="padding-left: 10px ;">
              <el-button size="mini" icon="el-icon-edit" type="primary"></el-button>
              <el-button size="mini" icon="el-icon-document" type="primary"></el-button>
              <el-button size="mini" icon="el-icon-share" type="primary"></el-button>
            </el-button-group>
          </p>
        </div>

        <div class="infoTitle">
          <h4>按时间被刊出和引用</h4>
          <p>
            <img width="100%" src="@/static/images/1587433927256.jpg" />
          </p>
        </div>
      </div>
      
    </div>


    <div class="detailContent">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="热门讨论" name="review">
          <div class="comment">
            <div class="item">
              <div class="communityTitle">Resnet到底在解决一个什么问题呢？</div>
              <div class="text">薰风初入弦：上述的内容是我以自己的角度思考作者提出ResNet的心路历程，我比作者蔡很多，所以难免出现思考不全的地方。 ResNet是如此...<el-button type="text">阅读全文<i class="el-icon-caret-bottom" /></el-button></div>
              <div class="link">
                <el-button type="primary" size="mini" icon="el-icon-caret-top">赞同3.6万</el-button>
                <el-button type="text" size="mini" icon="el-icon-s-comment" style="color: #888888; font-weight: normal;">79条评论</el-button>
                <el-button type="text" size="mini" icon="el-icon-share" style="color: #888888; font-weight: normal;">分享</el-button>
                <el-button type="text" size="mini" icon="el-icon-star-on" style="color: #888888; font-weight: normal;">收藏</el-button>
                <div class="time">刚刚</div>
              </div>
            </div>
            <div class="item">
              <div class="communityTitle">Resnet到底在解决一个什么问题呢？</div>
              <div class="text">薰风初入弦：上述的内容是我以自己的角度思考作者提出ResNet的心路历程，我比作者蔡很多，所以难免出现思考不全的地方。 ResNet是如此...<el-button type="text">阅读全文<i class="el-icon-caret-bottom" /></el-button></div>
              <div class="link">
                <el-button type="primary" size="mini" icon="el-icon-caret-top">赞同3.6万</el-button>
                <el-button type="text" size="mini" icon="el-icon-s-comment" style="color: #888888; font-weight: normal;">79条评论</el-button>
                <el-button type="text" size="mini" icon="el-icon-share" style="color: #888888; font-weight: normal;">分享</el-button>
                <el-button type="text" size="mini" icon="el-icon-star-on" style="color: #888888; font-weight: normal;">收藏</el-button>
                <div class="time">刚刚</div>
              </div>
            </div>
            <div class="item">
              <div class="communityTitle">Resnet到底在解决一个什么问题呢？</div>
              <div class="text">薰风初入弦：上述的内容是我以自己的角度思考作者提出ResNet的心路历程，我比作者蔡很多，所以难免出现思考不全的地方。 ResNet是如此...<el-button type="text">阅读全文<i class="el-icon-caret-bottom" /></el-button></div>
              <div class="link">
                <el-button type="primary" size="mini" icon="el-icon-caret-top">赞同3.6万</el-button>
                <el-button type="text" size="mini" icon="el-icon-s-comment" style="color: #888888; font-weight: normal;">79条评论</el-button>
                <el-button type="text" size="mini" icon="el-icon-share" style="color: #888888; font-weight: normal;">分享</el-button>
                <el-button type="text" size="mini" icon="el-icon-star-on" style="color: #888888; font-weight: normal;">收藏</el-button>
                <div class="time">刚刚</div>
              </div>
            </div>
            <div class="item">
              <div class="communityTitle">Resnet到底在解决一个什么问题呢？</div>
              <div class="text">薰风初入弦：上述的内容是我以自己的角度思考作者提出ResNet的心路历程，我比作者蔡很多，所以难免出现思考不全的地方。 ResNet是如此...<el-button type="text">阅读全文<i class="el-icon-caret-bottom" /></el-button></div>
              <div class="link">
                <el-button type="primary" size="mini" icon="el-icon-caret-top">赞同3.6万</el-button>
                <el-button type="text" size="mini" icon="el-icon-s-comment" style="color: #888888; font-weight: normal;">79条评论</el-button>
                <el-button type="text" size="mini" icon="el-icon-share" style="color: #888888; font-weight: normal;">分享</el-button>
                <el-button type="text" size="mini" icon="el-icon-star-on" style="color: #888888; font-weight: normal;">收藏</el-button>
                <div class="time">刚刚</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="刊物" name="reference">
          <div class="tabContent">
            <div class="left">
              <filterView />
            </div>
            <div class="right">
              <listView />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="被引用" name="cited">
          被引用
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
  .title {
    display: flex;
    padding: 15px;
    background: $blue ;
    color: #FFFFFF ;
    width: 100%;
    align-items: center;
    .icon {
      font-size: 2rem ;
    }
    .text {
      font-size: 2rem ;
    }
  }

  .content {
    width: 90rem;
    margin: auto;
    font-size: 16px;
    border-top: 1px solid #f0f0f0;
    background: #FFFFFF ;
    padding: 10px ;
    line-height: 24px;
    display: flex;

    .left {
      width: 15rem ;
      text-align: center;
      .avatar {
        width: 14rem ;
        padding: 10px ;
        img {
          border-radius: 50%;
          width: 100% ;
          height: 100% ;
          padding: 2px ;
          border: 2px solid #f0f0f0 ;
        }
      }
    }

    .right {
      width: 75rem;
      padding-left: 10px ;

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
          font-size: 14px ;
        }
        .el-tag {
          margin-top: 10px ;
        }
      }

      

      .authorInfo {
        display: flex;
        justify-content: left;
        width: 100%;

      }
    }
    
    
  }
  .detailContent {
    width: 90rem;
    margin: auto;
    font-size: 16px;
    border-top: 1px solid #f0f0f0;
    background: #FFFFFF ;
    padding: 10px ;
    line-height: 24px;
    
    .comment {
      .item {
        padding: 10px ;
        border-bottom: 1px solid #f0f0f0 ;

        .communityTitle {
          text-align: left;
          color: #333333 ;
          font-size: 16px ;
          font-weight: bolder;
          padding: 0px ;
          padding-top: 10px ;
        }
        .text {
          padding: 10px 0px ;
        }
        .link {
          font-size: 12px ;
          color: #888 ;
          display: flex;
          align-items: center;
          i {
            font-size: 12px ;
          }
          .time {
            display: inline;
            padding-left: 10px ;
          }
        }
      }

      .item:hover {
        background: #f0f0f0;
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
  }
}
</style>
