<template>
  <div class="keywords">
    <div class="title">
        <div class="icon"><i class="el-icon-school" /></div>
        <div class="text">麻省理工学院</div>
    </div>
    
    <div class="content">
      <div class="left">
        <div class="avatar">
          <img src="@/static/images/1587434463487.jpg" />
        </div>
      </div>
      <div class="right">

        <div class="references">
          <div class="icon"><i class="el-icon-document" /></div>
          <div class="number">212,327</div>
          <div class="text">论文</div>

          <div class="icon"><i class="el-icon-link" /></div>
          <div class="number">16,864,439</div>
          <div class="text">引用</div>
        </div>

        <div class="infoTitle">
          <h4>关于</h4>
          <p>
            麻省理工学院（MIT）是位于马萨诸塞州剑桥市的一所私立研究型大学。该研究所是一所授予土地，海洋和空间补助的大学，其城市校园沿查尔斯河（Charles River）延伸超过一英里（1.6公里）。该研究所还包括许多主要的校外设施，例如MIT林肯实验室，贝茨中心和干草堆观测站，以及附属实验室，例如Br​​oad和Whitehead研究所。麻省理工学院成立于1861年，以响应美国日益增长的工业化趋势​​，它采用了欧洲理工大学的模式，并强调了应用科学与工程领域的实验室教学。此后，它在现代科学，工程，数学和技术的许多方面的发展中发挥了关键作用。
          </p>
        </div>

        <div class="infoTitle">
          <h4>链接</h4>
          <p>站点:dblp.uni-trier.de | doi.ieeecomputersociety.org | openaccess.thecvf.com | doi.org | ieeexplore.ieee.org | scinapse.io | ui.adsabs.harvard.edu | arxiv-vanity.com | cv-foundation.org | xplqa30.ieee.org</p>
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
        </el-tab-pane>
        <el-tab-pane label="刊物" name="reference">
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

  async fetch ({ store, params }) {
    let result1 = await store.dispatch('discuss/getDiscusses', { refId: params.id, pageSize: 10 })
    return result1
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
    filterView, listView
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
            refId: this.$route.params.id,
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
    width: 1000px;
    margin: auto;
    font-size: 16px;
    border-top: 1px solid #f0f0f0;
    background: #FFFFFF ;
    padding: 10px ;
    line-height: 24px;
    display: flex;

    .left {
      width: 14rem ;
      text-align: center;
      .avatar {
        width: 10rem ;
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
