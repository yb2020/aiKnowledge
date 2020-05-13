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
        <div class="item" v-for="(squareTopic, squareTopicIndex) in squareTopics.list" :key="squareTopic.id">
          <div class="category">
            <div class="text">
              <nuxt-link :to="`/paper/${squareTopic.id}`">
                <i class="el-icon-document" />{{squareTopic.title}}
              </nuxt-link>
            </div>
          </div>

          <div v-for="(topic, topicIndex) in squareTopic.topicList" :key="topic.id">
            <div class="topic">
              <div class="text">
                <b>话题{{topicIndex + 1}}：</b>{{topic.title}}
              </div>
              <div class="commentButton">
                <el-button type="text" @click="selectTopic(squareTopic, topic)">发表评论</el-button>
              </div>
            </div>

            <div class="comment" v-for="(discuss, discussIndex) in topic.discussList" :key="discuss.id">
              <div class="avatar">
                <img src="@/static/images/1587433534602.jpg" />
              </div>
              <div class="commentContent">
                <div class="communityTitle">{{discuss.title}}</div>
                  <div class="text">
                    {{discuss.content}}
                    <el-button @click="toggleShow(squareTopicIndex, topicIndex, discussIndex)" v-if="!discuss.isFull" type="text">{{discuss.displayShort ? "阅读全文" : "收起全文"}}<i :class="discuss.displayShort ? 'el-icon-caret-bottom' : 'el-icon-caret-top'" /></el-button>
                  </div>
                  <div class="link">
                    <el-button type="primary" size="mini" icon="el-icon-caret-top">赞同3.6万</el-button>
                    <el-button type="text" size="mini" icon="el-icon-s-comment" style="color: #888888; font-weight: normal;">79条评论</el-button>
                    <el-button type="text" size="mini" icon="el-icon-share" style="color: #888888; font-weight: normal;">分享</el-button>
                    <el-button type="text" size="mini" icon="el-icon-star-on" style="color: #888888; font-weight: normal;">收藏</el-button>
                    <div class="time">{{ discuss.createDate | dateFormat('MM-dd') }}</div>
                  </div>
              </div>
            </div><!--discuss item-->

          </div><!--topic item-->

        </div><!--paper item-->

      </div>
    </div>
    
    <div class="pagination">
      <el-pagination
        :current-page.sync="squareTopics.pageNum"
        :page-sizes="pageSizes"
        :page-size="squareTopics.pageSize"
        :total="squareTopics.total"
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
            <el-row :gutter="24" v-if="selectedSquareTopic">
              <el-col :span="24" style="padding-bottom: 10px ;">
                论文：{{selectedSquareTopic.title}}
              </el-col>
            </el-row>
            <el-row :gutter="24" v-if="selectedTopic">
              <el-col :span="24" style="padding-bottom: 10px ;">
                您已选择评论话题：{{selectedTopic.title}}
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="22">
                <el-form-item :label-width="'0px'" prop="title" required>
                  <el-input v-model="form.editForm.title" clearable></el-input>
                </el-form-item>
                <el-form-item :label-width="'0px'" prop="content" required>
                  <el-input type="textarea" v-model="form.editForm.content" clearable></el-input>
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

  </div>
</template>

<script>

export default {
  name: 'topic',

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
    return store.dispatch('topic/getTopics', { pageSize: 10 })
  },

  computed: {
    squareTopics() {
      return this.$store.state.topic.squareTopics
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
  data() {
    return {
      topicCategory: '',
      selectedTopic: null,
      selectedSquareTopic: null,
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
  methods: {
    toggleShow(squareTopicIndex, topicIndex, discussIndex) {
      this.$store.dispatch('topic/toggleShow', {
        squareTopicIndex: squareTopicIndex,
        topicIndex: topicIndex,
        discussIndex: discussIndex  
      })
    },
    submitForm() {
      this.$refs['form.editForm'].validate(async(valid) => {
        if(!this.selectedTopic) {
          this.$message.error('请选择您要评论的话题！')
          return false
        }
        if (valid) {
          this.submitLoading = true
          var editForm = JSON.parse(JSON.stringify(this.form.editForm))
          if(this.search.refId) {
            editForm.topicId = this.search.refId
          }

          const result = await this.$store.dispatch('discuss/postDiscuss', {
            topicId: this.selectedTopic.id,
            title: this.form.editForm.title,
            refId: this.selectedSquareTopic.id,
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
          this.selectedSquareTopic = null
          
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
    selectTopic(squareTopic, topic) {
      this.selectedSquareTopic = squareTopic
      this.selectedTopic = topic
    },
    goType(item) {
      let route = '/code';
      if (item.type === 2) route = '/think';
      if (item.type === 3) route = 'fuck';
      this.$router.push(route);
    },
    handleCurrentChange() {
      console.log("aaaa")
    },
    handleSizeChange() {
      console.log("bbbb")
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
    margin: auto;
    margin-top: 10px ;
    height: 5rem;
    background: $blue ;
    border-radius: 4px ;
    font-size: 2rem ;
    text-align: center ;
    align-content: center ;
    line-height: 5rem ;
    color: #FFFFFF ;
  }

  .topContent {
    margin:auto ;
    margin-top: 10px ;
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

    .title {
      background: $blue ;
      text-align: center ;
      color: #FFFFFF ;
      border-radius: 2px 2px 0px 0px;
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
            a:hover { 
              color: #ff0000 ;
              text-decoration: underline;
            }
          }
        }
        .topic {
          display: flex;
          justify-content: space-between ;
          align-items: center;
          padding: 10px;
          padding-bottom: 0px;

          .text {
            font-size: 16px ;
          }
          .commentButton {
            font-size: 12px;
            font-weight: normal;
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

  .pagination {
    margin:auto ;
    margin-top: 10px ;
    background: #FFFFFF;
    padding: 10px ;
  }
  .communityForm {
    margin:auto ;
    margin-top: 10px ;
  }

}

</style>
