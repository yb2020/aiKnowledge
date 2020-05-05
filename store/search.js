/*
 *
 * 论文搜索数据状态
 *
 */
import service from '../api';

export const state = () => {
  return {
    fetching: false,
    posting: false,
    data: {

    },
    detail: {
    }
  };
};

export const mutations = {
  get_list_success(state, data) {
    state.fetching = false;
    state.data = data;
  },

  get_list_failure(state) {
    state.fetching = false;
    state.data = {};
  },

  post_paper(state) {
    state.posting = true;
  },

  get_paper_success(state, action) {
    state.detail = action
    state.posting = false;
  },

  get_paper_failure(state) {
    state.posting = false;
    state.detail = {};
  },

  toggle_show(state, index) {
    let item = state.data.list[index]
    let cacheContent = item.content
    item.content = item.cacheContent
    item.cacheContent = cacheContent
    item.displayShort = !item.displayShort
    console.log(state.data.list[index].displayShort)
    console.log(state.data.list[index].content)

  },

};

export const actions = {
  // 显示或隐藏
  toggleShow({ commit }, index) {
    commit('toggle_show', index);
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
