<template>
    <div tag="div" class="aside" >
      <div>FILTER BY:</div>
      <el-collapse :expandAll="true" v-model="activeName" @change="handleChange">
        <el-collapse-item title="Time" name="1">
          <template slot="title">
            <i class="el-icon-time"></i> Time
          </template>
          <div>

            From<el-date-picker
              v-model="createDate"
              style="width: 110px"
              type="year"
              placeholder="year">
            </el-date-picker> To<el-date-picker
              v-model="toDate"
              style="width: 110px"
              type="year"
              placeholder="year">
            </el-date-picker>

          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <i class="el-icon-magic-stick"></i> Top Topics
          </template>
          <div>

            <el-checkbox-group v-model="checkTopicsList">
              <div>
                <el-checkbox label="Computer science" />
              </div>
              <div>
                <el-checkbox label="Artificial intelligence" />
              </div>
              <div>
                <el-checkbox label="Pattern recognition" />
              </div>
              <div>
                <el-checkbox label="Machine learning" />
              </div>
              <div>
                <el-checkbox label="Computer vision" />
              </div>
              <div>
                <el-checkbox label="Artificial neural network" />
              </div>
              <div>
                <el-checkbox label="Convolutional neural network" />
              </div>
              <div>
                <el-checkbox label="Object detection" />
              </div>
              <div>
                <el-checkbox label="Caffè" />
              </div>
              <div>
                <el-checkbox label="Contextual image classification" />
              </div>
            </el-checkbox-group>

          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <i class="el-icon-document"></i> Publication Types
          </template>
          <div>

            <el-checkbox-group v-model="checkPublicationicsList">
              <div>
                <el-checkbox label="Conference publications" />
              </div>
              <div>
                <el-checkbox label="Journal publications" />
              </div>
              <div>
                <el-checkbox label="Repository papers" />
              </div>
              <div>
                <el-checkbox label="Books" />
              </div>
              <div>
                <el-checkbox label="Other" />
              </div>
            </el-checkbox-group>

          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <i class="el-icon-user-solid"></i> Top Authors
          </template>
          <div>
            
            <el-checkbox-group v-model="checkAuthorsList">
              <div>
                <el-checkbox label="Ross Girshick" />
              </div>
              <div>
                <el-checkbox label="Geoffrey E. Hinton" />
              </div>
              <div>
                <el-checkbox label="Trevor Darrell" />
              </div>
              <div>
                <el-checkbox label="Alex Krizhevsky" />
              </div>
              <div>
                <el-checkbox label="Ilya Sutskever" />
              </div>
              <div>
                <el-checkbox label="Andrew Zisserman" />
              </div>
              <div>
                <el-checkbox label="Christian Szegedy" />
              </div>
              <div>
                <el-checkbox label="Kaiming He" />
              </div>
              <div>
                <el-checkbox label="Jian Sun" />
              </div>
            </el-checkbox-group>

          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <i class="el-icon-notebook-1"></i> Top Journals
          </template>
          <div>
            
            <el-checkbox-group v-model="checkJournalsList">
              <div>
                <el-checkbox label="Communications of The ACM" />
              </div>
              <div>
                <el-checkbox label="International Journal of Computer Vision" />
              </div>
              <div>
                <el-checkbox label="arXiv: Neural and Evolutionary Computing" />
              </div>
              <div>
                <el-checkbox label="Neural Computation" />
              </div>
              <div>
                <el-checkbox label="IEEE Transactions on Pattern Analysis and Machine Intelligence" />
              </div>
              <div>
                <el-checkbox label="arXiv: Computer Vision and Pattern Recognition" />
              </div>
              <div>
                <el-checkbox label="arXiv: Learning" />
              </div>
              <div>
                <el-checkbox label="IEEE Transactions on Neural Networks" />
              </div>
            </el-checkbox-group>

          </div>
        </el-collapse-item>
        <el-collapse-item name="6">
          <template slot="title">
            <i class="el-icon-school"></i> Top Institutions
          </template>
          <div>
            
            <el-checkbox-group v-model="checkInstitutionsList">
              <div>
                <el-checkbox label="Google" />
              </div>
              <div>
                <el-checkbox label="Microsoft" />
              </div>
              <div>
                <el-checkbox label="University of California, Berkeley" />
              </div>
              <div>
                <el-checkbox label="University of Oxford" />
              </div>
              <div>
                <el-checkbox label="University of North Carolina at Chapel Hill" />
              </div>
              <div>
                <el-checkbox label="University of Michigan" />
              </div>
              <div>
                <el-checkbox label="OpenAI" />
              </div>
              <div>
                <el-checkbox label="Massachusetts Institute of Technology" />
              </div>
              <div>
                <el-checkbox label="Stanford University" />
              </div>
            </el-checkbox-group>

          </div>
        </el-collapse-item>
        <el-collapse-item name="7">
          <template slot="title">
            <i class="el-icon-location"></i> Top Conferences
          </template>
          <div>
            
            <el-checkbox-group v-model="checkConferencesList">
              <div>
                <el-checkbox label="CVPR: Computer Vision and Pattern Recognition" />
              </div>
              <div>
                <el-checkbox label="ICLR: International Conference on Learning Representations" />
              </div>
              <div>
                <el-checkbox label="ICML: International Conference on Machine Learning" />
              </div>
              <div>
                <el-checkbox label="NeurIPS: Neural Information Processing Systems" />
              </div>
              <div>
                <el-checkbox label="ICCV: International Conference on Computer Vision" />
              </div>
              <div>
                <el-checkbox label="MM: ACM Multimedia" />
              </div>
              <div>
                <el-checkbox label="ECCV: European Conference on Computer Vision" />
              </div>
              <div>
                <el-checkbox label="AISTATS: International Conference on Artificial Intelligence and Statistics" />
              </div>
              <div>
                <el-checkbox label="BMVC: British Machine Vision Conference" />
              </div>
              <div>
                <el-checkbox label="SIGGRAPH: International Conference on Computer Graphics and Interactive Techniques" />
              </div>
            </el-checkbox-group>

          </div>
        </el-collapse-item>
      </el-collapse>

    </div>
</template>

<script>

export default {
  name: 'aside',
  data () {
    return {
      createDate: '',
      toDate: '',
      activeName: "1",
      checkTopicsList: [],
      checkPublicationicsList: [],
      checkAuthorsList: [],
      checkJournalsList: [],
      checkInstitutionsList: [],
      checkConferencesList: []
    }
  },

  computed: {

    tag () {
      return this.$store.state.tag.data.list
    },

    hotArt () {
      return this.$store.state.article.hotArt.list
    },

    currentSaying () {
      return this.saying[Math.floor(Math.random() * 4)]
    },

    friends () {
      return this.$store.state.link.data.list
    }
  },

  watch: {
    open (val) {
      if (val) {
        this.$refs.search.focus()
      }
    }
  },

  methods: {
    handleChange () {
    }
  },

  directives: {
    fix: {
      inserted (el) {
        window.addEventListener('scroll', _ => {
          const scrollTop = document.documentElement.scrollTop
          if (scrollTop > 1000) el.classList.add('fixed')
          else el.classList.remove('fixed')
        })
      },
      unbind () {
        window.onscroll = null
      }
    }
  }
}
</script>

<style scoped lang="scss">

  .aside-item {
    margin-bottom: $normal-pad;
  }

  .aside-item.hot-article,
  .aside-item.aside-tag,
  .aside-friends,
  .aside-item.link {

    >.title {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: $sm-pad 0;
      line-height: 1.5rem;
      color: $black;
      font-size: 1rem;
      font-weight: normal;

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

    >.hot-article-list {
      padding: $sm-pad 0;

      >.list {

        >a {
          display: block;
          color: $secondary;
          padding: $sm-pad;
          @include text-overflow();

          &:hover {
            color: $black;
          }
        }
      }
    }
  }

  .aside-tag {

    >.tag {

      >.tag-item {
        float: left;
        margin: .3rem;

        >a {
          display: block;
          padding: .4rem;
          color: $secondary;

          &:hover {
            color: $black;
          }

          &.link-active {
            color: $black;
          }
        }
      }
    }
  }

  .link {
    margin-bottom: 0;

    >.mune {
      padding: $sm-pad;

      >a {
        color: $disabled;
        font-size: $font-size-small;

        &:hover {
          color: $black;
        }
      }
    }

    .line {
      width: $xlg-pad;
    }
  }

  .aside-friends {}
  
  .friends {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    font-weight: 600;

    a {
      padding: .8rem 1rem;
      text-align: center;
    }
  }

  .aside-fix {
    position: fixed;
    width: $container-right;
    top: 1rem;
    transition: all .2s;
    opacity: 0;
    z-index: -1;
    pointer-events: none;

    > .link {
      margin-top: $normal-pad;
    }

    &.fixed {
      top: 5rem;
      opacity: 1;
      z-index: 5;
      pointer-events: all;
    }
  }
</style>
