<template>
  <section  class="clearfix main">
    <div class="article">

      <articleView
        :articleList = "list"
        :haveMoreArt="haveMoreArt"
        :havePreArt="havePreArt"
        :currentPage="currentPage"
        currentType=""></articleView>

    </div>
  </section>
</template>
<script>

import articleView from '~/components/common/article'

export default {
  name: 'code-component',

  scrollToTop: true,

  // transition: 'fade',

  fetch ({ store, params }) {
    return store.dispatch('article/getArtList', {
      current_page: params.page || 1
    })
  },

  data () {
    return {}
  },

  computed: {
    mobileLayout () {
      return this.$store.state.options.mobileLayout
    },

    list () {
      return this.$store.state.article.art.list
    },

    banners () {
      return this.list.slice(0, 9)
    },

    haveMoreArt () {
      return this.$store.state.article.art.pagination.currentPage < this.$store.state.article.art.pagination.totals
    },

    currentPage() {
      return this.$store.state.article.art.pagination.currentPage
    },

    havePreArt () {
      return this.$store.state.article.art.pagination.currentPage !== 1
    }
  },

  components: {
    articleView
  }
}
</script>


<style lang="scss">

.main {
  >.title {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0rem;
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
}

</style>
