<template>
  <div class="deatil">
    <div class="title">
        <div class="icon"><i class="el-icon-document" /></div>
        <div class="text">{{paper.title}}</div>
    </div>

    <div class="content">

      <div class="left">
        <div class="authorInfo">
          <div class="time">{{paper.year}}年 {{!paper.journalsList ? "" : paper.journalsList[0].name}}</div>
          <div class="number"> | DOI： 10.1109 / CVPR.2016.90</div>
        </div>
        <div class="authorInfo">
          <div class="author" v-for="(author,index) in paper.authorList" :key="index" v-if="index < 3">
            {{author.name + ' ' + (index + 1) }}
            <!-- {{Object.keys(paper.authorList).length}} -->
          </div>
        </div>

        <div class="authorInfo">
          <div class="org">1 Microsoft ,</div>
          <div class="org">2 西安交通大学</div>
        </div>

        <div class="references">
          <div class="icon"><i class="el-icon-user-solid" /></div>
          <div class="number">{{Object.keys(paper.refPaperList).length}}</div>
          <div class="text">参考文献</div>

          <div class="icon"><i class="el-icon-link" /></div>
          <div class="number">{{paper.conference}}</div>
          <div class="text">引用</div>
        </div>

        <div class="infoTitle" :key="'infoTitle'" v-if="paper.summary">
          <h4>摘要</h4>
          <p style="text-indent: 28px ;">
            {{paper.summary}}
            <el-button style="padding: 0px" @click="toggleShowSummary" v-if="!paper.isFull" type="text">{{paper.displayShort ? "展开" : "收起"}}<i :class="paper.displayShort ? 'el-icon-caret-bottom' : 'el-icon-caret-top'" /></el-button>
          </p>
        </div>

        <div class="infoTitle" :key="'translateInfoTitle'">
          <h4>翻译&nbsp;&nbsp;<nuxt-link style="color: blue" :to="`/paper-curate/${paper.id}`"
            exact>
            编辑
          </nuxt-link></h4>
          
          <p style="text-indent: 28px ;" v-if="paper.ext && paper.ext.botTranslateSummary">
            {{paper.ext.botTranslateSummary}}
            <el-button style="padding: 0px" @click="toggleShowBotTranslateSummary" v-if="!paper.ext.isFull" type="text">
              {{paper.ext.displayShort ? "展开" : "收起"}}
              <i :class="paper.ext.displayShort ? 'el-icon-caret-bottom' : 'el-icon-caret-top'" />
            </el-button>
          </p>

          <div style="padding-top: 10px" v-if="paper.ext && paper.ext.translateSummary">
            <p><b>人工翻译</b></p>
            <p>{{paper.ext.translateSummary}}</p>
          </div>
        </div>

        <div class="infoTitle" :key="'infoTitle2'" v-if="paper.ext && paper.ext.translateSummary">
          <h4>阅读指引</h4>
          <div>
            <p>{{paper.ext.readingGuide}}</p>
          </div>
        </div>

        <div class="infoTitle">
          <h4>相关学科</h4>
          <p>
            <el-tag v-for="(course) in paper.courseList" type="" :key="course.id">
              <i class="el-icon-magic-stick" />{{course.name}}
            </el-tag>
          </p>
        </div>

        <div class="infoTitle">
          <el-button size="mini" type="primary">关注</el-button>
          <el-button size="mini" type="primary">要求</el-button>

          <el-button-group style="padding-left: 10px ;">
            <el-button size="mini" icon="el-icon-edit" type="primary"></el-button>
            <el-button size="mini" icon="el-icon-document" type="primary"></el-button>
            <el-button size="mini" icon="el-icon-share" type="primary"></el-button>
          </el-button-group>
        </div>

      </div>

      <div class="right">
        <el-card :body-style="{ padding: '0px' }">
          <img width="100%" src="@/static/images/1587431549920.jpg">
          <div style="padding: 14px;">
            <div style="width: 250px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{paper.title}}</div>
            <div class="bottom clearfix">
              <time class="time">发表时间:{{paper.date}}</time>
              <el-button type="text" class="button">查看原文</el-button>
            </div>
          </div>
        </el-card>

        <el-card style="margin-top: 10px ">
          <div slot="header" class="clearfix">
            <span>链接</span>
          </div>
          <div class="infoTitle">
            <p v-for="(resource,index) in paper.resourceList" :key=index>
              <a :href="resource.url" target="_blank">{{resource.url}}</a>
            </p>
          </div>
        </el-card>

        <el-card style="margin-top: 10px ">
          <div slot="header" class="clearfix">
            <span>其他版本</span>
          </div>
          <div class="infoTitle">
            <p>深度残差学习用于图像识别</p>
            <p>2015 arXiv：计算机视觉和模式识别</p>
          </div>
        </el-card>

      </div>
      
    </div>

    <div class="detailContent">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="热门讨论" name="review">
          <div class="comment">
            <div class="item" v-for="(discuss, index) in discusses.list" :key="discuss.id">
              <div class="communityTitle">{{discuss.title}}</div>
              <div class="text"  >
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

          <div class="pagination">
            <el-pagination
              :current-page.sync="discusses.pageNum"
              :page-sizes="pageSizes"
              :page-size="discusses.pageSize"
              :total="discusses.total"
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>

          <div class="communityForm">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>发表评论</span>
                <!-- <span>0条评论</span>
                <el-button style="float: right; padding: 3px 0" type="text">切换为时间排序</el-button> -->
              </div>
              <div class="formWapper">
                
                <el-form ref="form.editForm" :model="form.editForm" label-width="0px" :rules="form.editFormRules" class="edit-ruleForm">
                  <el-row :gutter="24">
                    <el-col :span="22">
                      <el-form-item :label-width="'0px'" prop="title" required>
                        <el-input v-model="form.editForm.title" clearable></el-input>
                      </el-form-item>
                      <el-form-item :label-width="'0px'" prop="content" required>
                        <no-ssr><markdown v-model="form.editForm.content" style="height: 100%;" app-name="blog" /></no-ssr>
                      </el-form-item>
                    </el-col>
                    <el-col :span="2" justify="center" align="bottom">
                      <el-button type="primary" :loading="submitLoading" @click="submitForm">发表</el-button>
                    </el-col>
                  </el-row>
                </el-form>
                
              </div>
            </el-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="参考文献" name="reference">
          <div class="tabContent">
            <div class="tabContentLeft">
              <listView />
            </div>
            <div class="tabContentRight">
              <filterView />
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
import markdown from '~/components/markdown'


export default {

  name: 'paper',

  transition: 'fade',

  scrollToTop: true,

  head() {
    return { 
      title: `论文详情页_${this.option.title}`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `论文详情页_${this.option.title}`
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

  async fetch ({ store, params }) {
    let result2 = await store.dispatch('paper/getPaperById', params)
    let result1 = await store.dispatch('discuss/getDiscusses', { refId: params.id, pageSize: 10 })
    return {result1, result2}
  },

  data () {
    return {
      activeName: 'review',
      activePaperName: 'summary',
      submitLoading: false,
      handbook: '',
      markdownOption: {

      },
      currentPaper: {

      },
      pageSizes: [8, 10, 12],
      refId: '',
      form: {
        editForm: {
          title: '',
          content: ''
        },
        editFormRules: {
          title: [
            { min: 1, message: '长度必须大于1个字符', trigger: 'blur' },
            { required: true, message: '请输入评论标题', trigger: 'blur' }
          ],
          content: [
            { min: 1, message: '长度必须大于1个字符', trigger: 'blur' },
            { required: true, message: '请输入评论内容', trigger: 'blur' }
          ]
        }
      },
      extForm: {
        summaryForm: {
          translateSummary: ''
        },
        summaryFormRules: {
          translateSummary: [
            { min: 1, message: '长度必须大于1个字符', trigger: 'blur' },
            { required: true, message: '请输入人工翻译内容', trigger: 'blur' }
          ]
        },
        readingGuideForm: {
          readingGuide: ''
        },
        readingGuideFormRules: {
          readingGuide: [
            { min: 1, message: '长度必须大于1个字符', trigger: 'blur' },
            { required: true, message: '请输入阅读指引内容', trigger: 'blur' }
          ]
        }
      }
    }
  },

  components: {
    articleView, filterView, listView, markdown
  },

  methods: {
    async handlePaperClick(tab) {
      switch(tab.name) {
        case 'translate':
          if(!this.paper.summary || this.paper.ext.translate ) {
            return false
          }
          // let content = this.paper.displayShort ? this.paper.cacheSummary : this.paper.summary
          // let result = await this.$store.dispatch('paper/botTranslate' , {content: content})
          // let translateContent = result.data
          // if(translateContent && translateContent.length > 200) {
          //   this.paperExt.ext.cacheTranslate = translateContent
          //   this.paperExt.ext.translate = translateContent.substring(0, 200) + '...'
          //   this.paperExt.ext.displayShort = true
          //   this.paperExt.ext.isFull = false
          // }else {
          //   this.paperExt.ext.translate = translateContent
          //   this.paperExt.ext.isFull = true
          // }
          break;
        case 'readingGuide':

          break;
      }
    },
    submitTranslateForm() {
      this.$refs['extForm.summaryForm'].validate(async(valid) => {
        if (valid) {
          this.submitLoading = true
          var editForm = JSON.parse(JSON.stringify(this.form.editForm))

          const result = await this.$store.dispatch('paper/postPaperExt', {
            refId: this.paper.id,
            translateSummary: this.extForm.summaryForm.translateSummary
          })

          this.submitLoading = false
          if (result.status === 0) {
            this.$message.error(result.message)
            return false
          }
          this.$message.success(result.message)

          return false
        } else {
          this.$message.error('请根据错误提示修改评论数据！')
          return false
        }
      })
    },
    submitReadingGuideForm() {
      this.$refs['extForm.readingGuideForm'].validate(async(valid) => {
        if (valid) {
          this.submitLoading = true
          var editForm = JSON.parse(JSON.stringify(this.form.editForm))

          const result = await this.$store.dispatch('paper/postPaperExt', {
            refId: this.paper.id,
            readingGuide: this.extForm.readingGuideForm.readingGuide
          })

          this.submitLoading = false
          if (result.status === 0) {
            this.$message.error(result.message)
            return false
          }
          this.$message.success(result.message)

          return false
        } else {
          this.$message.error('请根据错误提示修改评论数据！')
          return false
        }
      })
    },
    toggleShowBotTranslateSummary() {
      this.$store.dispatch('paper/toggleShowBotTranslateSummary')
    },
    toggleShowSummary() {
      this.$store.dispatch('paper/toggleShowSummary')
    },
    toggleShow(index) {
      this.$store.dispatch('discuss/toggleShow', index)
    },
    submitForm() {
      this.$refs['form.editForm'].validate(async(valid) => {
        if (valid) {
          this.submitLoading = true
          var editForm = JSON.parse(JSON.stringify(this.form.editForm))

          const result = await this.$store.dispatch('discuss/postDiscuss', {
            title: this.form.editForm.title,
            refId: this.paper.id,
            content: this.form.editForm.content
          })

          this.submitLoading = false
          if (result.status === 0) {
            this.$message.error(result.message)
            return false
          }
          this.$message.success(result.message)
          this.$refs['form.editForm'].resetFields()
          this.selectedTopic = null
          
          setTimeout(()=>{
            window.location.href = window.location.href
          }, 1000)

          return false
        } else {
          this.$message.error('请根据错误提示修改评论数据！')
          return false
        }
      })
    },
    handleCurrentChange() {
      console.log("aaaa")
    },
    handleSizeChange() {
      console.log("bbbb")
    },
    handleClick() {
      
    }
  },

  computed: {
    paper() {
      console.log(this.$store.state.paper.detail)
      return this.$store.state.paper.detail
    },
    discusses () {
      return this.$store.state.discuss.data
    },
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

.deatil {
    > .title {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 4px 4px 0px 0px;
    margin-top: 10px ;
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
      line-height: 2.2rem ;
    }
  }

  .content {
    margin: auto;
    display: flex;

    .left {
      width: 700px ;
      font-size: 14px ;
      line-height: 24px ;
      padding: 16px 20px;
      background: #fff;

      .references {
        display: flex;
        justify-content: flex-start;
        align-items:center;
        width: 100%;

        .icon {
          font-size: 2rem ;
        }
        .number {
          font-size: 1.8rem ;
          padding-left: 5px ;
        }
        .text {
          font-size: .8rem ;
          padding: 5px 10px 0px 5px;
        }
      }


      .authorInfo {
        display: flex;
        justify-content: left;
        width: 100%;
        .author {
          padding-right: 5px ;
        }
      }

      .infoTitle {
        margin-top: 10px;
        > p {
          font-size: 14px ;
        }
        .el-tag {
          margin-top: 10px ;
          margin-right: 10px;
        }
      }
    }

    .right {
      width: 300px;
      margin-left: 10px ;

      .infoTitle {
        > p {
          font-size: 14px ;
          line-height: 22px;
        }
        .el-tag {
          margin-top: 10px ;
        }
      }
    }
    
    
  }
  .detailContent {
    margin: auto;
    margin-top: 10px;
    font-size: 16px;
    line-height: 24px;
    background: #FFF;
    padding: 10px;

    .comment {

      .item {
        padding: 10px 10px ;
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

    .pagination {
      margin:auto ;
      margin-top: 10px ;
      padding: 10px ;
      background: #FFF;
    }
    .communityForm {
      margin:auto ;
      margin-top: 10px ;
    }
    

    .tabContent {
      display: flex;
      justify-content: flex-start;
      padding: 10px ;
      .tabContentLeft {
        width: 700px ;
        background: #FFF;
      }
      .tabContentRight {
        width: 300px;
        margin-left: 10px ;
      }
    }
  }

  
}
</style>
