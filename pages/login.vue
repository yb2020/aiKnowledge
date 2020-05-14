<template>
  <div class="login">

    <div class="topContent">
      <div class="left">
        <el-form ref="form" label-width="120px">
          <el-form-item label="访问密码" prop="password" required>
            <el-input
              v-model="password"
              type="password"
              style="width: 100%;"
              @keyup.enter.native="logon"
              clearable
              >                
              </el-input>
          </el-form-item>
          <el-button style="margin-top: 20px ;" type="primary" @click="logon">登录</el-button>
        </el-form>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'login',

  scrollToTop: true,

  transition: 'fade',

  components: {
  },

  head() {
    return {
      title: "登录",
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

  async fetch ({ store }) {
  },

  computed: {
    option () {
      return this.$store.state.options.option
    },
    mobileLayout () {
      return this.$store.state.options.mobileLayout
    },

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
      password: ''
    }
  },
  methods: {
    logon() {
      if(this.password === '69886') {
        sessionStorage.setItem('password' , this.password);
        this.$router.push("/" );
      }else {
        this.$message.error('password is invalid！')
        return false ;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  margin: 0 auto;

  .topContent {
    margin:auto ;
    margin-top: 10px ;
    width: 1000;
    display: flex;
    display: -webkit-flex; /* Safari */
    justify-content: space-around;


    .left {
      text-align: center;

      .banner {
        height: 5rem;
        background: $blue ;
        border-radius: 4px ;
        font-size: 40px ;
        text-align: center ;
        align-content: center ;
        line-height: 5rem ;
        color: #FFFFFF ;
      }

      .pointerContent {
        margin-top: 10px ;
        background: #FFFFFF ;
        border-radius: 2px ;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.03);


        .item {
          padding: 16px 20px;
          border-bottom: 1px solid #F0F0F0;
          display: flex;
          display: -webkit-flex; /* Safari */
          justify-content: space-between;

          .imgInfo {
            width: 6rem;
            .image {
              width: 6rem ;
              height: 6rem ;
              border: 1px solid #f0f0f0;
              border-radius: 4px;
              font-size: 6rem;
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
            padding-left: 1rem ;

            .title {
              font-size: 16px ;
              font-weight: bolder;
            }
            
            a:hover { 
              color: #ff0000 ;
              text-decoration: underline;
            }

            .content {
              padding: 5px ;
              text-indent: 28px;
              font-size: 14px;
              line-height: 24px;
              height: 100px;
              overflow: hidden;
              text-overflow: ellipsis;
              .link {
                text-indent: 0px ;
                padding-top: 10px;
                font-size: 12px ;
                display: flex;
                display: -webkit-flex; /* Safari */
                justify-content: flex-start ;
                align-items: center ;
                .time {
                  color: rgb(136, 136, 136);
                  padding-left: 10px ;
                }
              }
            }
          }
          .onLeftPadding {
            padding-left: 0px ;
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
          padding: 10px 0px ;
          border-radius: 2px 2px 0px 0px ;
        }
        .content {
          background: #FFFFFF ;
          .item {
            padding: 16px 20px;
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
              font-size: 14px;
              line-height: 22px;
              text-indent: 28px;
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

    .right {
      width: 300px;
      margin-left: 10px ;

      .statisticsPanel {
        background: #FFFFFF ;
        border-radius: 2px ;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.03);

        .item {
          display: flex;
          display: -webkit-flex; /* Safari */
          justify-content: left;
          padding: 20px;

          .icon {
            background: #c7e3fe;
            border-radius: 50%;
            width: 3rem ;
            height: 3rem ;
            text-align: center;
            i {
              padding: .4rem;
              font-size: 1.8em;
              vertical-align: middle;
            }
          }

          .rightText {
            padding-left: 10px;

            .number {
              font-size: 1.2rem;
            }
            .text {
              font-size: 0.8rem;
              font-style: italic;
            }
          }
        }
        .blue {
            .icon {
              background: #c7e3fe;
            }
            i {
              color: $blue;
            }
            .rightText {
              color: $blue;
            }
          }
          .red {
            .icon {
              background: #fef0f0;
            }
            i {
              color: #f36d6f;
            }
            .rightText {
              color: #f36d6f;
            }
          }
          .green {
            .icon {
              background: #f0f9ec;
            }
            i {
              color: #6ac144;
            }
            .rightText {
              color: #6ac144;
            }
          }
        .item:hover {
          background: #f9f9f9;
          cursor: pointer;
        }

      }
      
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
    
  }


}

</style>
