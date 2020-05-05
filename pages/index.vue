<template>
  <div class="sitemap" :class="{'mobile': mobileLayout}">
    <div class="banner">知识就是力量</div>

    <div class="topContent">
      <div class="left">
        <h4 class="title">论文收录</h4>
        <div class="content">
          <el-card class="box-card">
            <div class="item" @click="forward('Publications')">
              <div class="icon"><i class="el-icon-document" /></div>
              <div class="rightText">
                <div class="number">233,467,597</div>
                <div class="text">论文</div>
              </div>
            </div> 
          </el-card>

          <el-card class="box-card">
            <div class="item" @click="forward('Authors')">
              <div class="icon"><i class="el-icon-user-solid" /></div>
              <div class="rightText">
                <div class="number">238,949,598</div>
                <div class="text">作者</div>
              </div>
            </div>
          </el-card>

        </div>

        <div class="content">
          <el-card class="box-card">
            <div class="item" @click="forward('Topics')">
              <div class="icon"><i class="el-icon-s-help" /></div>
              <div class="rightText">
                <div class="number">710,937</div>
                <div class="text">会议</div>
              </div>
            </div>
          </el-card>
        
          <el-card class="box-card">
             <div class="item" @click="forward('Journals')">
              <div class="icon"><i class="el-icon-location" /></div>
              <div class="rightText">
                <div class="number">4,456</div>
                <div class="text">期刊</div>
              </div>
            </div>
          </el-card>
        </div>

        <div class="content">
          <el-card class="box-card">
             <div class="item" @click="forward('Journals')">
                <div class="icon"><i class="el-icon-notebook-1" /></div>
                <div class="rightText">
                  <div class="number">48,858</div>
                  <div class="text">学科</div>
                </div>
              </div>
          </el-card>

          <el-card class="box-card">
            <div class="item" @click="forward('Institutions')">
              <div class="icon"><i class="el-icon-school" /></div>
              <div class="rightText">
                <div class="number">25,562</div>
                <div class="text">大学</div>  
              </div>
            </div>
          </el-card>
        </div>

      </div>
      <div class="right">
        <div class="label">学术动态</div>

        <div class="news">
          <div class="title"><span class="text"><i class="el-icon-s-help"></i>近期会议</span><span class="more"><a href="#">更多动态>></a></span></div>
          <div class="content">
            <ul>
              <li><a href="#"><span class="text">XX会议在京召开</span><span class="time">[2020-3-29]</span></a></li>
              <li><a href="#"><span class="text">XX会议在京召开</span><span class="time">[2020-3-29]</span></a></li>
              <li><a href="#"><span class="text">XX会议在京召开</span><span class="time">[2020-3-29]</span></a></li>
              <li><a href="#"><span class="text">XX会议在京召开</span><span class="time">[2020-3-29]</span></a></li>
              <li><a href="#"><span class="text">XX会议在京召开</span><span class="time">[2020-3-29]</span></a></li>
            </ul>
          </div>
        </div>

        <div class="news">
          <div class="title"><span class="text"><i class="el-icon-news"></i>新闻</span><span class="more"><a href="#">更多动态>></a></span></div>
          <div class="content">
            <ul>
              <li><a href="#"><span class="text">XX会议在京召开</span><span class="time">[2020-3-29]</span></a></li>
              <li><a href="#"><span class="text">XX会议在京召开</span><span class="time">[2020-3-29]</span></a></li>
              <li><a href="#"><span class="text">XX会议在京召开</span><span class="time">[2020-3-29]</span></a></li>
              <li><a href="#"><span class="text">XX会议在京召开</span><span class="time">[2020-3-29]</span></a></li>
              <li><a href="#"><span class="text">XX会议在京召开</span><span class="time">[2020-3-29]</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="pointerContent">
      <div class="item">
        <div class="imgInfo">
          <i class="el-icon-picture-outline image"></i>
          <div class="info">
            <div>作者：何开明</div>
            <div>期刊：XX</div>
          </div>
        </div>
        <div class="summary">
          <div class="title">深度残差学习用于图像识别</div>
          <div class="content">
            更深的神经网络更难训练。我们提出了一种残差的学习框架，以简化比以前使用的网络更深入的网络训练。我们显式地将层重新配置为参考层输入学习剩余函数，而不是学习未参考函数。我们提供了全面的经验证据，表明这些残差网络更易于优化，并且可以通过大大增加的深度来获得准确性。
          </div>
        </div>
      </div>
      <div class="item">
        <div class="imgInfo">
          <i class="el-icon-picture-outline image"></i>
          <div class="info">
            <div>作者：何开明</div>
            <div>期刊：XX</div>
          </div>
        </div>
        <div class="summary">
          <div class="title">深度残差学习用于图像识别</div>
          <div class="content">
            更深的神经网络更难训练。我们提出了一种残差的学习框架，以简化比以前使用的网络更深入的网络训练。我们显式地将层重新配置为参考层输入学习剩余函数，而不是学习未参考函数。我们提供了全面的经验证据，表明这些残差网络更易于优化，并且可以通过大大增加的深度来获得准确性。
          </div>
        </div>
      </div>
    </div>

    <div class="communityContent">
      <div class="title">社区热点追踪</div>
      <div class="content">
        <div class="item" v-for="(discuss, index) in discusses.data" :key="discuss.id">
          <div class="communityTitle">{{discuss.title}}</div>
          <div class="text">
            {{discuss.content}}
            <el-button @click="toggleShow(index)" v-if="!discuss.isFull" type="text">{{discuss.displayShort ? "阅读全文" : "收起全文"}}<i :class="discuss.displayShort ? 'el-icon-caret-bottom' : 'el-icon-caret-top'" /></el-button>
          </div>
          <div class="link">
            <el-button type="primary" size="mini" icon="el-icon-caret-top">赞同3.6万</el-button>
            <el-button type="text" size="mini" icon="el-icon-s-comment" style="color: #888888; font-weight: normal;">79条评论</el-button>
            <el-button type="text" size="mini" icon="el-icon-share" style="color: #888888; font-weight: normal;">分享</el-button>
            <el-button type="text" size="mini" icon="el-icon-star-on" style="color: #888888; font-weight: normal;">收藏</el-button>
            <div class="time">{{ discuss.createDate | dateFormat('MM-dd') }}</div>
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
    return store.dispatch('discuss/getDiscusses', { pageSize: 10 })
  },

  computed: {
    discusses () {
      const discusses = this.$store.state.discuss.data
      this.result.total = discusses.total
      this.result.currentPage = discusses.pageNum
      this.result.pageSize = discusses.pageSize
      this.result.data = JSON.parse(JSON.stringify(discusses.list)) // 断开引用
      return this.result
    },
    tag () {
      console.log(this.$store.state.tag.data)
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
      searchValue: '',
      restaurants: [{ "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }],
      result: {
        data: [],
        currentPage: 1,
        pageSize: 8,
        pageSizes: [8, 10, 12],
        total: 0
      },
    }
  },
  methods: {
    toggleShow(index) {
      this.$store.dispatch('discuss/toggleShow', index)
    },
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
      padding: 10px 0px ;
    }
    .content {
      background: #FFFFFF ;
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
  }

}

</style>
