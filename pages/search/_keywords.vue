<template>
  <div class="keywords">
    <div class="title">
        <div class="icon"><i class="el-icon-search" /></div>
        <div class="text">{{ keywords }}</div>
    </div>

    <div class="detailContent">
      <div class="tabContent">
        <div class="left">
          <filterView />
        </div>
        <div class="right">
          <listView :list="searchResult.list" />
          <div class="pagination">
            <el-pagination
              :current-page.sync="searchResult.pageNum"
              :page-sizes="pageSizes"
              :page-size="searchResult.pageSize"
              :total="searchResult.total"
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
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

  async fetch ({ store, params }) {
    let result1 = await store.dispatch('discuss/getDiscusses', { pageSize: 10 })
    let result2 = await store.dispatch('search/searchPaper', {keywords: params.keywords})
    return {result1,result2}
  },

  data () {
    return {
      activeName: 'review',
      submitLoading: false,
      pageSizes: [8, 10, 12],
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
      }
    }
  },

  components: {
    articleView, filterView, listView
  },

  methods: {
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
    searchResult() {
      return this.$store.state.search.data
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

    .pagination {
      margin:auto ;
      margin-top: 10px ;
      padding: 10px ;
    }
    .communityForm {
      margin:auto ;
      margin-top: 10px ;
      width: 90rem;
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
