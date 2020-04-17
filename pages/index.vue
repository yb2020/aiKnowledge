<template>
  <div class="sitemap" :class="{'mobile': mobileLayout}">

    <div class="searchPanel">
      <div class="left">
        <div class="title">Research more, search less</div>
        <el-row>
          <el-col :span="20">
            <el-input
            v-model="searchValue"
            style="width: 100%;"
            placeholder="Search any topic, author, journal, etc. or any combination of these"
            clearable
             />
          </el-col>
          <el-col :span="4" align="center">
            <el-button icon="el-icon-search" @click="search"></el-button>
          </el-col>
        </el-row>
      </div>

      <div class="right">
        <div class="item" @click="forward('Publications')">
          <div class="icon"><i class="el-icon-document" /></div>
          <div class="rightText">
            <div class="number">233,467,597</div>
            <div class="text">Publications</div>
          </div>
        </div>
        <div class="item" @click="forward('Authors')">
          <div class="icon"><i class="el-icon-user-solid" /></div>
          <div class="rightText">
            <div class="number">238,949,598</div>
            <div class="text">Authors</div>
          </div>
        </div>
        <div class="item" @click="forward('Topics')">
          <div class="icon"><i class="el-icon-s-help" /></div>
          <div class="rightText">
            <div class="number">710,937</div>
            <div class="text">Topics</div>
          </div>
        </div>
        <div class="item" @click="forward('Journals')">
          <div class="icon"><i class="el-icon-location" /></div>
          <div class="rightText">
            <div class="number">4,456</div>
            <div class="text">Conferences</div>
          </div>
        </div>
        <div class="item" @click="forward('Journals')">
          <div class="icon"><i class="el-icon-notebook-1" /></div>
          <div class="rightText">
            <div class="number">48,858</div>
            <div class="text">Journals</div>
          </div>
        </div>
        <div class="item" @click="forward('Institutions')">
          <div class="icon"><i class="el-icon-school" /></div>
          <div class="rightText">
            <div class="number">25,562</div>
            <div class="text">Institutions</div>  
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <el-row style="width: 100%" :gutter="24">
        <el-col :span="12">
          <el-card class="box-card">

            <div slot="header" class="clearfix">
              <i class="el-icon-user-solid" />
              <span>Top Authors in Biology</span>
              <el-button style="float: right; padding: 3px 0" type="text">Items are sorted by saliency. ?</el-button>
            </div>
            <div class="text item">
              <ul>
                <ol><a href="#">1. Douglas G. Altman</a></ol>
                <ol><a href="#">2. Walter C. Willett</a></ol>
                <ol><a href="#">3. Ahmedin Jemal</a></ol>
                <ol><a href="#">4. Hagop M. Kantarjian</a></ol>
                <ol><a href="#">5. Patrick W. Serruys</a></ol>
                <ol><a href="#">6. Gregory Y.H. Lip</a></ol>
                <ol><a href="#">7. Salim Yusuf</a></ol>
                <ol><a href="#">8. JoAnn E. Manson</a></ol>
                <ol><a href="#">9. Christopher J L Murray</a></ol>
                <ol><a href="#">10. Frank B. Hu</a></ol>
                <ol><a href="#">11. Gordon H. Guyatt</a></ol>
                <ol><a href="#">12. Stephan Windecker</a></ol>
                <ol><a href="#">13. Harlan M. Krumholz</a></ol>
                <ol><a href="#">14. Eric D. Peterson</a></ol>
                <ol><a href="#">15. Deepak L. Bhatt</a></ol>
              </ul>
            </div>
          </el-card>

        </el-col>
        <el-col :span="12">
          
          <el-card class="box-card">

            <div slot="header" class="clearfix">
              <i class="el-icon-school" />
              <span>Top Institutions in Medicine</span>
              <el-button style="float: right; padding: 3px 0" type="text">Items are sorted by saliency. ?</el-button>
            </div>
            <div class="text item">
              <ul>
                <ol><a href="#">1. Max Planck Society</a></ol>
                <ol><a href="#">2. University of São Paulo</a></ol>
                <ol><a href="#">3. University of Liège</a></ol>
                <ol><a href="#">4. Harvard University</a></ol>
                <ol><a href="#">5. PNational Autonomous University of Mexico</a></ol>
                <ol><a href="#">6. University of Paris</a></ol>
                <ol><a href="#">7. Centre national de la recherche scientifique</a></ol>
                <ol><a href="#">8. University of Oxford</a></ol>
                <ol><a href="#">9. Complutense University of Madrid</a></ol>
                <ol><a href="#">10. University of Cambridge</a></ol>
                <ol><a href="#">11. Spanish National Research Council</a></ol>
                <ol><a href="#">12. École Normale Supérieure</a></ol>
                <ol><a href="#">13. State University of Campinas</a></ol>
                <ol><a href="#">14. Federal University of Rio de Janeiro</a></ol>
                <ol><a href="#">15. Autonomous University of Barcelona</a></ol>
              </ul>
            </div>
          </el-card>

        </el-col>
      </el-row>
 
    </div>
    
    <div class="content">
      <el-row style="width: 100%" :gutter="24">
        <el-col :span="12">
          <el-card class="box-card">

            <div slot="header" class="clearfix">
              <i class="el-icon-notebook-1" />
              <span>Top Journals in Art</span>
              <el-button style="float: right; padding: 3px 0" type="text">Items are sorted by saliency. ?</el-button>
            </div>
            <div class="text item">
              <ul>
                <ol><a href="#">1. Nature</a></ol>
                <ol><a href="#">2. Science</a></ol>
                <ol><a href="#">3. Leonardo</a></ol>
                <ol><a href="#">4. Studies in Conservation</a></ol>
                <ol><a href="#">5. The Journal of Aesthetics and Art Criticism</a></ol>
                <ol><a href="#">6. American Journal of Archaeology</a></ol>
                <ol><a href="#">7. TDR</a></ol>
                <ol><a href="#">8. Screen</a></ol>
                <ol><a href="#">9. Music & Letters</a></ol>
                <ol><a href="#">10. Film Quarterly</a></ol>
                <ol><a href="#">11. Performance Research</a></ol>
                <ol><a href="#">12. October</a></ol>
                <ol><a href="#">13. Sight and Sound</a></ol>
                <ol><a href="#">14. British Journal of Aesthetics</a></ol>
                <ol><a href="#">15. African Arts</a></ol>
              </ul>
            </div>
          </el-card>

        </el-col>
        <el-col :span="12">
          
          <el-card class="box-card">

            <div slot="header" class="clearfix">
              <i class="el-icon-location" />
              <span>Top Conferences in Art</span>
              <el-button style="float: right; padding: 3px 0" type="text">Items are sorted by saliency. ?</el-button>
            </div>
            <div class="text item">
              <ul>
                <ol><a href="#">1. ICMC</a></ol>
                <ol><a href="#">2. SIGGRAPH</a></ol>
                <ol><a href="#">3. Arts</a></ol>
                <ol><a href="#">4. IDEAS</a></ol>
                <ol><a href="#">5. DiGRA</a></ol>
                <ol><a href="#">6. DigitalHeritage</a></ol>
                <ol><a href="#">7. Globe</a></ol>
                <ol><a href="#">8. CSR</a></ol>
                <ol><a href="#">9. RIG</a></ol>
                <ol><a href="#">10. Eurographics</a></ol>
                <ol><a href="#">11. AMSF</a></ol>
                <ol><a href="#">12. ICCC</a></ol>
                <ol><a href="#">13. RASI</a></ol>
                <ol><a href="#">14. C&C</a></ol>
                <ol><a href="#">15. CAIDCD</a></ol>
              </ul>
            </div>
          </el-card>

        </el-col>
      </el-row>
    </div>

    <ul class="tag clearfix">
      <li class="tag-item" v-for="item in tag" :key="item.id">
        <nuxt-link :to="`/tag/${item.idName}`">
          {{ item.name }}
          <span>({{ item.articleAmount }})</span>
        </nuxt-link>
      </li>
    </ul>
    
    <h3 class="title sitemap-article">
      <span class="line"></span>
    </h3>
    <div class="sitemap-article-list">
      <div v-if="yearMap.length === 0" class="year-list">
        暂无文章
      </div>
      <div v-for="(monthMap, key) in yearMap" :key="key" class="year-list">
        <p class="year-name">{{ key }}</p>
        <ul class="month-list" v-for="(monthData, monthKey) in monthMap" :key="monthKey">
          <p class="month-name">{{ monthKey | monthFilter }}</p>
          <li
            class="sitemap-list"
            v-for="item in monthData"
            :key="item.url" :title="`阅读次数:${item.readCount}`">
            <article>
              <time>
                {{ item.publishDate | dateFormat('MM-dd') }}
              </time>
              <nuxt-link :to="`/article/${item.url}`" :title="item.summary">
                {{ item.title }}
              </nuxt-link>

              <span
                @click="goType(item)"
                class="tag">
                  <i
                    :class="{
                      'iconfont': true,
                      'icon-code': true,
                      'icon-think': item.type === 2,
                      'icon-music': item.type === 3
                    }"></i>
              </span>
              <!-- item.meta.views + item.meta.comments * 10 + item.meta.likes * 3 > 1000 -->
              <span
                v-if="item.readCount * 3 > 1000"
                >
                <i class="iconfont icon-hot"></i>  
              </span>


            </article>
          </li>
        </ul>  
      </div>
    </div>

    <!-- <ul class="sitemap-list">
      <li
        class="sitemap-item"
        v-for="(item,index) in list"
        :key="item._id">
        <article>
          <time>
            {{ item.create_at | dateFormat('yyyy.MM.dd') }}
          </time>
          <nuxt-link :to="`/article/${item._id}`">
            {{ item.title }}
          </nuxt-link>
        </article>
      </li>
      <li class="sitemap-item" v-if="list.length === 0">
        暂无文章
      </li>
    </ul> -->
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
      searchValue: '',
      restaurants: [{ "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }]
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

  .searchPanel {
    width: 90rem;
    margin: auto;
    display: flex;
    display: -webkit-flex; /* Safari */
    justify-content: space-around;
    .left {
      width: 45rem;
      padding: 10rem 20px;
      .title {
        color: $blue;
        font-size: 3rem;
        padding-bottom: 1rem;
      }
    }
    .right {
      width: 20rem;
      background: #000;
      z-index: 1000;
      .item {
        background: #ffffff;
        width: 100%;
        height: 20%;
        border-bottom: 1px solid #f0f0f0;
        display: flex;
        display: -webkit-flex; /* Safari */
        justify-content: left;
        .icon {
          padding: 20px;
          i {
            font-size: 2.5em;
            vertical-align: middle;
          }
        }
        .rightText {
          padding-top: 10px;

          .number {
            font-size: 2rem;
          }
          .text {
            font-size: 1rem;
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

  .content {
    width: 90rem;
    margin: auto;
    display: flex;
    display: -webkit-flex; /* Safari */
    justify-content: left;
    font-size: 16px;
    border-top: 1px solid #f0f0f0;
    padding: 10px;

    .content a {
      font-size: 14px ;
      color: #333 ;
    }
    .content a:hover {
      color: $blue ;
    }
  }

  >.title {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0rem;
    line-height: 1.5rem;
    color: $black;
    font-size: 1rem;
    font-weight: normal;

    > p {
      position: relative;
      padding-right: $lg-pad;
      background: $white;
      z-index: 99;      
    }

    > .line {
      top: 50%;
    }

    &.sitemap-article {
      margin-top: 1rem;
    }
  }

  &.mobile {
    width: 100%;
    transform: translate(0);
    
    .sitemap-article-list {
      padding: .8rem;

      .month-list {
        margin: .8rem;


        .sitemap-list {
          padding: .4rem .8rem;
        }
      }
    }

    >.tag {
      padding: .8rem;
    }
  }

  .sitemap-article-list {
    padding: 1rem;

    .year-name {
      font-size: 1.5rem;
    }

    .month-list {
      margin: 1rem 2rem;

      .month-name {
        margin-bottom: .5rem;
      }

      .sitemap-list {
        padding: .5rem 2rem;

        article {
          position: relative;
          display: flex;
          align-items: center;
          height: 5rem;
          line-height: 1.8rem;

          &::before {
            content: " ";
            position: absolute;
            left: 0px;
            top: 2.3rem;
            width: 6px;
            height: 6px;
            margin-left: -4px;
            background: $dividers;
            border-radius: 50%;
          }

          time {
            margin-left: .5rem;
            color: $dividers;
            font-size: $font-size-small;
            width: 6rem;
          }

          a {
            width: 70%;
            margin-left: $md-pad;
            text-decoration: none;
            color: $black;
            //@include text-overflow();
          }
          
          a:hover {
            width: 70%;
            margin-left: $md-pad;
            text-decoration: underline;
            color: $black;
            //@include text-overflow();
          }

          span {
            margin-left: .8rem;
            color: $red;

            &.tag {
              cursor: pointer;
              color: $blue;
            }
          }
        }
      }
    }

    .sitemap-item {
      padding: 1rem;

      article {
        position: relative;
        display: flex;
        align-items: center;
        height: 20px;
        line-height: 20px;

        &::before {
          content: " ";
          position: absolute;
          left: 0px;
          top: 6px;
          width: 6px;
          height: 6px;
          margin-left: -4px;
          background: $dividers;
          border-radius: 50%;
        }

        time {
          width: 2.3rem;

          margin-left: $md-pad;
          color: $dividers;
          font-size: $font-size-small;
        }

        a {
          margin-left: $md-pad;
          text-decoration: underline;
          color: $black;
          @include text-overflow();
          width: 70%;
        }

          span {
            margin-left: .8rem;
            color: $red;

            &.tag {
              cursor: pointer;
              color: $blue;
            }
          }
      }
    }
  }

  >.tag {

    >.tag-item {
      float: left;
      margin: .3rem;

      >a {
        display: block;
        padding: .4rem;
        color: $black;

        &:hover {
          color: $black;
        }
      }
    }
  }
}

</style>
