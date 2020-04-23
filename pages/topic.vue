<template>
  <div class="sitemap" :class="{'mobile': mobileLayout}">
    <div class="banner">COVID-19如何防治</div>

    <div class="communityContent">
      <div class="title">
        <div class="text">广场</div>
        <div class="button">
          <el-dropdown>
            <span class="el-dropdown-link">
              话题分类<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item key="1">论文</el-dropdown-item>
              <el-dropdown-item key="2">作者</el-dropdown-item>
              <el-dropdown-item key="3">机构</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="content">
        <div class="item">
          <div class="category">
            <div class="text">
              <i class="el-icon-document" />大N场理论，弦论和引力
            </div>
          </div>
          <div class="topic">
            <div class="text">
              <b>话题1：</b>文中空间场的作用力，是按张量计算的，那么N维空间的内洽性是不是丧失了？
            </div>
          </div>

          <div class="comment">
            <div class="avatar">
              <img src="@/static/images/1587433534602.jpg" />
            </div>
            <div class="commentContent">
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

          <div class="comment">
            <div class="avatar">
              <img src="@/static/images/1587433534602.jpg" />
            </div>
            <div class="commentContent">
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

          <div class="comment">
            <div class="avatar">
              <img src="@/static/images/1587433534602.jpg" />
            </div>
            <div class="commentContent">
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
          
        </div>

        <div class="item">
          <div class="category">
            <div class="text">
              <i class="el-icon-document" />大N场理论，弦论和引力
            </div>
          </div>
          <div class="topic">
            <div class="text">
              <b>话题2：</b>文中空间场的作用力，是按张量计算的，那么N维空间的内洽性是不是丧失了？
            </div>
          </div>

          <div class="comment">
            <div class="avatar">
              <img src="@/static/images/1587433534602.jpg" />
            </div>
            <div class="commentContent">
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

          <div class="comment">
            <div class="avatar">
              <img src="@/static/images/1587433534602.jpg" />
            </div>
            <div class="commentContent">
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

          <div class="comment">
            <div class="avatar">
              <img src="@/static/images/1587433534602.jpg" />
            </div>
            <div class="commentContent">
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
          
        </div>

        <div class="item">
          <div class="category">
            <div class="text">
              <i class="el-icon-document" />大N场理论，弦论和引力
            </div>
          </div>
          <div class="topic">
            <div class="text">
              <b>话题4：</b>文中空间场的作用力，是按张量计算的，那么N维空间的内洽性是不是丧失了？
            </div>
          </div>

          <div class="comment">
            <div class="avatar">
              <img src="@/static/images/1587433534602.jpg" />
            </div>
            <div class="commentContent">
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

          <div class="comment">
            <div class="avatar">
              <img src="@/static/images/1587433534602.jpg" />
            </div>
            <div class="commentContent">
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

          <div class="comment">
            <div class="avatar">
              <img src="@/static/images/1587433534602.jpg" />
            </div>
            <div class="commentContent">
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
          
        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'sitemap',

  scrollToTop: true,

  transition: 'fade',

  head() {
    return {
      title: this.option.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.option.title
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

  fetch ({ store }) {
    return store.dispatch('sitemap/getSitemap', { page_size: 1000 })
  },

  computed: {
    tag () {
      return this.$store.state.tag.data
    },

    option () {
      return this.$store.state.options.option
    },

    mobileLayout () {
      return this.$store.state.options.mobileLayout
    },

    yearMap () {
      return this.$store.state.sitemap.art
    }
  },

  filters: {
    monthFilter (val) {
    //   val = parseInt(val)
    //   switch (val) {
    //     case 1: return 'January'
    //     case 2: return 'February'
    //     case 3: return 'March'
    //     case 4: return 'April'
    //     case 5: return 'May'
    //     case 6: return 'June'
    //     case 7: return 'July'
    //     case 8: return 'August'
    //     case 9: return 'September'
    //     case 10: return 'October'
    //     case 11: return 'November'
    //     case 12: return 'December'
    //   }
      return val
    }
  },
  data() {
    return {
      topicCategory: ''
    }
  },
  methods: {
    goType(item) {
      let route = '/code';
      if (item.type === 2) route = '/think';
      if (item.type === 3) route = 'fuck';
      this.$router.push(route);
    },
    forward(page) {
      let route = ""
      switch(page) {
        case 'Publications': 
          route = "publications"
          this.$router.push("/search/publications" );
          return ;
        case 'Topics': 
          route = "topics"
        break ;
        case 'Authors': 
          route = "authors"
        break ;
        case 'Conferences': 
          route = "conferences"
        break ;
        case 'Journals': 
          route = "journals"
        break ;
        case 'Institutions': 
          route = "institutions"
        break ;
        default: 
      }
      this.$router.push(route + "/1" );

    },
    handleSelect(item) {
      console.log(item);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    search() {
      this.$router.push(`/search/${this.searchValue}`)
      this.searchValue = ''
    }
  }
}
</script>

<style scoped lang="scss">
.sitemap {
  margin: 0 auto;

  .banner {
    width: 90rem;
    margin: auto;
    height: 5rem;
    background: $blue ;
    font-size: 20px ;
    text-align: center ;
    align-content: center ;
    line-height: 5rem ;
    color: #FFFFFF ;
  }

  .topContent {
    margin:auto ;
    margin-top: 10px ;
    width: 90rem;
    display: flex;
    display: -webkit-flex; /* Safari */
    justify-content: space-around;
    .left {
      width: 44rem;
      padding: 10px;
      background-color: #FFFFFF;
      
      .title {
        color: $blue;
        font-size: 16px;
        padding-bottom: 8px;
      }

      .content {
        border: 0px ;
        margin-top: 10px;
        width: auto;
        display: flex;
        display: -webkit-flex; /* Safari */
        justify-content: space-around;

        .box-card {
          width: 50% ;
          margin: 0px 10px ;
        }

        .item {
          background: #ffffff;
          width: 100%;
          height: 20%;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          display: -webkit-flex; /* Safari */
          justify-content: left;
          .icon {
            padding: 14px;
            i {
              font-size: 3em;
              color: $blue;
              vertical-align: middle;
            }
          }
          .rightText {
            padding-top: 10px;

            .number {
              font-size: 1.5rem;
            }
            .text {
              font-size: 0.8rem;
              font-style: italic;
            }
          }
        }
        .item:hover {
          background: #f9f9f9;
          cursor: pointer;
        }

      }
    }
    .right {
      width: 44rem;
      background: #ffffff;

      .label {
        background: $blue;
        font-size: 14px ;
        color: #FFFFFF ;
        padding: 10px ;
      }

      .news {
        padding: 10px ;

        .title {
          font-size: 14px ;
          color: #333333 ;
          padding: 10px ;
          border-bottom: 1px solid #f0f0f0 ;
          display: flex;
          display: -webkit-flex; /* Safari */
          justify-content: space-between;
          .more {
            a {
              color: $blue;
            }
          }
        }

        .content {
          width: auto ;
          padding: 10px ;

          li {
            padding: 2px 0px ;

            a {
              color: #333333 ;
              display: flex;
              display: -webkit-flex; /* Safari */
              justify-content: space-between;

              .time {
                color: #999 ;
                font-style: italic ;
              }
            }

            a:hover { 
              color: #ff0000 ;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .pointerContent {
    margin:auto ;
    margin-top: 10px ;
    width: 90rem;
    display: flex;
    display: -webkit-flex; /* Safari */
    justify-content: space-around;
    .item {
      width: 44rem;
      padding: 10px;
      background-color: #FFFFFF;
      display: flex;
      display: -webkit-flex; /* Safari */
      justify-content: space-between;
      .imgInfo {
        width: 10rem;
        .image {
          width: 10rem ;
          height: 8rem ;
          border: 1px solid #f0f0f0;
          border-radius: 4px;
          font-size: 8rem;
          color: #aaaaaa ;
        }
        .info {
          font-size: 14px;
          padding-top: 10px ;
          div {
            line-height: 24px ;
          }
        }
      }
      .summary {
        width: 33rem;
        padding-left: 1rem ;

        .title {
          font-size: 16px ;
          font-weight: bolder;
        }
        .content {
          padding: 5px ;
          text-indent: 28px;
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }

  .communityContent {
    margin:auto ;
    margin-top: 10px ;
    width: 90rem;

    .title {
      background: $blue ;
      text-align: center ;
      color: #FFFFFF ;
      padding: 10px 14px ;
      display: flex ;
      justify-content: space-between ;

      .text {
        font-size: 16px ;
      }

      .el-dropdown-link {
        color: #FFFFFF ;
        font-size: 14px ;
      }

    }
    .content {
      background: #FFFFFF ;
      .item {
        padding: 10px ;
        border-bottom: 1px solid #f0f0f0 ;
        
        .category {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .type {
            width: 100px ;
          }
          .text {
            font-size: 18px ;
            font-weight: bolder;
          }
        }
        .topic {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 10px;
          padding-bottom: 0px;

          .text {
            font-size: 16px ;
          }
        }

        .comment {
          display: flex;
          justify-content: flex-start;
          padding-left: 20px ;
          padding-bottom: 10px ;
          border-bottom: 1px dashed #bad6f1 ;
          margin-top: 10px ;

          .avatar {
            width: 100px ;
            padding: 10px ;
            img {
              border-radius: 50%;
              width: 100% ;
              padding: 2px ;
              border: 2px solid #f0f0f0 ;
            }
          }

          .commentContent {
            font-size: 14px ;
            padding-left: 10px;

            .communityTitle {
                text-align: left;
                color: #333333 ;
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
          }

        .comment:hover {
          background: #e0effd;
          border-radius: 5px 5px 0px 0px;
        }

      }
        

      .item:hover {
        background: #eff7ff;
      }
    }
  }

}

</style>
