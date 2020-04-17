<template>
  <div class="keywords">
    <div class="content">
      <div class="title">
          <div class="icon"><i class="el-icon-notebook-1" /></div>
          <div class="text">ChemInform</div>
      </div>

      <div class="references">
        <div class="icon"><i class="el-icon-document" /></div>
        <div class="number">723,577</div>
        <div class="text">Papers</div>

        <div class="icon"><i class="el-icon-link" /></div>
        <div class="number">425,021</div>
        <div class="text">Citations*</div>
      </div>


      <div class="infoTitle">
        <h4>Related Journals</h4>
        <p>Website(s):dblp.uni-trier.de | doi.ieeecomputersociety.org | openaccess.thecvf.com | doi.org | ieeexplore.ieee.org | scinapse.io | ui.adsabs.harvard.edu | arxiv-vanity.com | cv-foundation.org | xplqa30.ieee.org</p>
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
        <el-tab-pane label="REFERENCES" name="reference">
          <div class="tabContent">
            <div class="left">

              <div tag="div" class="aside" >
                <div>FILTER BY:</div>
                <el-collapse v-model="activeCollapseName">
                  <el-collapse-item title="Time" name="1">
                    <template slot="title">
                      <i class="el-icon-time"></i> Time
                    </template>
                    <div style="padding: 5px ;">
                        <el-radio-group v-model="timeFilter" size="small">
                          <div style="padding: 5px ;">
                            <el-radio label="0">All Time</el-radio>
                          </div >
                          <div style="padding: 5px ;">
                            <el-radio label="10" >Past 10 Years</el-radio>
                          </div>
                          <div style="padding: 5px ;">
                            <el-radio label="5" >Past 5 Years</el-radio>
                          </div>
                          <div style="padding: 5px ;">
                            <el-radio label="1" >Past 1 Years</el-radio>
                          </div>
                        </el-radio-group>

                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
                    
            </div>
            <div class="right">

              <div class="content">
                <el-row :gutter="24">
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

            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      
    </div>


  </div>
</template>
<script>

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
      activeName: 'reference',
      activeCollapseName: '1',
      timeFilter: '0'
    }
  },

  components: {
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
        width: 100% ;
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
