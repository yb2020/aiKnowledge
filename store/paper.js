/*
 *
 * 论文数据状态
 *
 */
import service from '../api';

export const state = () => {
  return {
    fetching: false,
    posting: false,
    data: {
    }
  };
};

export const mutations = {
  get_list_success(state, data) {
    state.fetching = false;
    data.list.forEach(row => {
      if(row.summary && row.summary.length > 360 ) {
        row.cacheSummary = row.summary
        row.summary = row.summary.substring(0, 360) + '...'
        row.displayShort = true
      }else {
        row.isFull = true
      }
    })
    state.data = data;
  },

  get_list_failure(state) {
    state.fetching = false;
    state.data = {};
  },

  post_paper(state) {
    state.posting = true;
  },


  get_botTranslate_failure(state, action) {
    state.posting = false;
    state.translate = {};
  },

  get_botTranslate_success(state, action) {
    state.posting = false;
    state.translate = {};
  },

  get_paper_success(state, data) {
    if(data.summary && data.summary.length > 360 ) {
      data.cacheSummary = data.summary
      data.summary = data.summary.substring(0, 360) + '...'
      data.displayShort = true
    }else {
      data.isFull = true
    }
    if(data.ext) {
      let translateContent = data.ext.botTranslateSummary
      if(translateContent && translateContent.length > 100) {
        data.ext.cacheBotTranslateSummary = translateContent
        data.ext.botTranslateSummary = translateContent.substring(0, 100) + '...'
        data.ext.displayShort = true
        data.ext.isFull = false
      }else {
        data.ext.botTranslateSummary = translateContent
        data.ext.isFull = true
      }
    }

    state.detail = data
    state.posting = false
  },

  post_paper_ext_success(state, data) {
    state.posting = false
    if(data) {
      if(data.translateSummary) {
        state.detail.ext.translateSummary = data.translateSummary
      }
      if(data.readingGuide) {
        state.detail.ext.readingGuide = data.readingGuide
      }
    }

  },

  post_paper_ext_failure(state) {
    state.posting = false;
  },
  get_paper_failure(state) {
    state.posting = false;
    state.detail = {};
  },

  toggle_show_bot_translate_summary(state) {
    let item = state.detail.ext
    let cacheBotTranslateSummary = item.botTranslateSummary
    item.botTranslateSummary = item.cacheBotTranslateSummary
    item.cacheBotTranslateSummary = cacheBotTranslateSummary
    item.displayShort = !item.displayShort
  },

  toggle_show_summary(state, index) {
    var item = null 
    if(!index) {
      item = state.detail
    }else {
      item = state.data.list[index - 1]
    }
    let cacheSummary = item.summary
    item.summary = item.cacheSummary
    item.cacheSummary = cacheSummary
    item.displayShort = !item.displayShort
  },

  toggle_show(state, index) {
    let item = state.data.list[index]
    let cacheContent = item.content
    item.content = item.cacheContent
    item.cacheContent = cacheContent
    item.displayShort = !item.displayShort

  },

};

export const actions = {
  toggleShowBotTranslateSummary({ commit }) {
    commit('toggle_show_bot_translate_summary')
  },
  toggleShowSummary({ commit }, index) {
    commit('toggle_show_summary', index);
  },
  // 显示或隐藏
  toggleShow({ commit }, index) {
    commit('toggle_show', index);
  },
  // 机器翻译数据
  async botTranslate({ commit }, params) {
    commit('post_paper');
    const res = await service.botTranslate(params);
    if (res && res.status === 1) {
      commit('get_botTranslate_success', res.data);
      //成功回来的后的动作if (!comment.parentId) commit('article/ADD_COMMENT', null, { root: true });
    } else commit('get_botTranslate_failure');
    return res;
  },
  // 提交论文数据
  async postPaperExt({ commit }, params) {
    commit('post_paper');
    const res = await service.postPaperExt(params);
    if (res && res.status === 1) {
      commit('post_paper_ext_success', res.data);
      //成功回来的后的动作if (!comment.parentId) commit('article/ADD_COMMENT', null, { root: true });
    } else commit('post_paper_ext_failure');
    return res;
  },
  // 搜索数据
  async searchPaper({ commit }, params) {
    commit('post_paper');
    const res = await service.searchPaper(params);
    if (res && res.status === 1) {
      commit('get_list_success', res.data);
      //成功回来的后的动作if (!comment.parentId) commit('article/ADD_COMMENT', null, { root: true });
    } else commit('pget_list_failure');
    return res;
  },

  //获取paper数据
  async getPaperById({ commit, state }, params) {

    const res = await service.getPaperById(params);
      
    if (res && res.status === 1) {
      var resultData = res.data
      commit('get_paper_success', resultData);
    } else {
      commit('get_paper_failure');
    }
    return res;

  }

};
