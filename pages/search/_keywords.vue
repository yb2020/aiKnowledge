<template>
  <div class="keywords">
    <div class="title">
        <div class="icon"><i class="el-icon-document" /></div>
        <div class="text">深度残差学习用于图像识别</div>
    </div>

    <div class="content">

      <div class="left">
        <div class="authorInfo">
          <div class="time">2016年 计算机视觉和模式识别 </div>
          <div class="number"> | DOI： 10.1109 / CVPR.2016.90</div>
        </div>
        <div class="authorInfo">
          <div class="author">何开明1,</div>
          <div class="author">张象屿2,</div>
          <div class="author">邵少任1,</div>
          <div class="author">孙健1</div>
        </div>

        <div class="authorInfo">
          <div class="org">1 Microsoft ,</div>
          <div class="org">2 西安交通大学</div>
        </div>

        <div class="references">
          <div class="icon"><i class="el-icon-user-solid" /></div>
          <div class="number">50</div>
          <div class="text">参考文献</div>

          <div class="icon"><i class="el-icon-link" /></div>
          <div class="number">40,522</div>
          <div class="text">引用</div>
        </div>

        <div class="infoTitle">
          <h4>摘要</h4>
          <p style="text-indent: 28px ;">
            更深的神经网络更难训练。我们提出了一种残差的学习框架，以简化比以前使用的网络更深入的网络训练。我们显式地将层重新配置为参考层输入学习剩余函数，而不是学习未参考函数。我们提供了全面的经验证据，表明这些残差网络更易于优化，并且可以通过大大增加的深度来获得准确性。在ImageNet数据集上，我们评估深度最大为152层的残差网络-比VGG网络[40]深8倍，但复杂度仍然较低。这些残留网络的整体在ImageNet测试仪上实现了3.57％的误差。该结果在ILSVRC 2015分类任务中获得第一名。我们还介绍了具有100和1000层的CIFAR-10的分析。表示的深度对于许多视觉识别任务至关重要。仅由于我们的深度表示，我们在COCO对象检测数据集上获得了28％的相对改进。深度残差网是我们提交ILSVRC和COCO 2015竞赛1的基础，在该竞赛中，我们还获得了ImageNet检测，ImageNet本地化，COCO检测和COCO分割等任务的第一名。          
          </p>
        </div>

        <div class="infoTitle">
          <h4>链接</h4>
          <p>
            PDF:arxiv.org
          </p>
          <p>站点:dblp.uni-trier.de | doi.ieeecomputersociety.org | openaccess.thecvf.com | doi.org | ieeexplore.ieee.org | scinapse.io | ui.adsabs.harvard.edu | arxiv-vanity.com | cv-foundation.org | xplqa30.ieee.org</p>
          <p>附加链接:arxiv.org | dx.doi.org | ieeexplore.ieee.org</p>
          <p>论文资源: https://github.com/D-X-Y/ResNeXt-DenseNet/blob/master/README.md</p>
        </div>

        <div class="infoTitle">
          <h4>其他版本</h4>
          <p>深度残差学习用于图像识别
          </p>
          <p>2015 arXiv：计算机视觉和模式识别</p>
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
      </div>

      <div class="right">
        <el-card :body-style="{ padding: '0px' }">
          <img width="100%" src="@/static/images/1587431549920.jpg">
          <div style="padding: 14px;">
            <span>深度残差学习用于图像识别</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">查看原文</el-button>
            </div>
          </div>
        </el-card>
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
        <el-tab-pane label="参考文献" name="reference">
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
        <el-tab-pane label="有关" name="related">
          有关
        </el-tab-pane>
      </el-tabs>
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
      width: 50rem ;
      font-size: 14px ;
      line-height: 24px ;

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

    .right {
      width: 40rem;
      padding-left: 10px ;
      height: 100% ;
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
