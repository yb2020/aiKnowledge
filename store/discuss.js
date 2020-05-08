/*
 *
 * 评论数据状态
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
  // 获取评论
  getList(state) {
    state.fetching = true;
  },

  get_list_success(state, data) {
    state.fetching = false;

    data.list.forEach(row => {
      row.cacheContent = row.content
      if(row.content.length > 20 ) {
        row.content = row.content.substring(0, 20) + '...'
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

  // 发布评论
  post_discuss(state) {
    state.posting = true;
  },

  post_discuss_success(state, action) {
    state.posting = false;
  },

  post_discuss_failure(state) {
    state.posting = false;
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

  // 喜欢某条评论
  LIKE_ITEM(state, action) {
    const comment = state.data.data.list.find(comment => Object.is(comment.id, action.id));
    if (comment) comment.likeCount++;
  }
};

export const actions = {
  // 评论显示或隐藏
  toggleShow({ commit }, index) {
    commit('toggle_show', index);
  },
  // 发布评论
  async postDiscuss({ commit }, discuss) {
    commit('post_discuss');
    const res = await service.postDiscuss(discuss);
    if (res && res.status === 1) {
      console.log(res)
      commit('post_discuss_success', res.data);
      //成功回来的后的动作if (!comment.parentId) commit('article/ADD_COMMENT', null, { root: true });
    } else commit('post_discuss_success');
    return res;
  },

  // 为某条回复点赞
  async likeComment({ commit }, data) {
    const res = await service.likeComment(data);
    if (res && res.status === 1) commit('LIKE_ITEM', data);
    return res;
  },

  //获取discuss数据
  async getDiscusses({ commit, state }, data) {
    data.sort = data.sort || -1;
    data.currentPage = data.currentPage || 1;
    data.pageSize = data.pageSize || 10;

    const res = await service.getDiscusses(data);
      
    if (res && res.status === 1) {
      var resultData = res.data
      if (resultData.pageNum >= 1) 
        //resultData.list = [...state.data.data.list, ...resultData.list];
      // if (Object.is(data.sort, -1)) res.result.data.reverse()
      commit('get_list_success', resultData);
    } else {
      commit('get_list_failure');
    }
    return res;

  },

  // 根据ref-id获取评论列表
  async loadCommentsByRefId({ commit, state }, data) {
    data.sort = data.sort || -1;
    data.currentPage = data.currentPage || 1;
    data.pageSize = data.pageSize || 60;
    commit('REQUEST_LIST');

    setTimeout(async () => {

      const res = await service.getComments(data);
      
      if (res && res.status === 1) {
        var resultData = res.data
        if (resultData.pageNum > 1) 
          resultData.list = [...state.data.data.list, ...resultData.list];
        // if (Object.is(data.sort, -1)) res.result.data.reverse()
        commit('GET_LIST_SUCCESS', {
          data: resultData
        });
      } else commit('GET_LIST_FAILURE');
      return res;
    }, 500);
  }
};
