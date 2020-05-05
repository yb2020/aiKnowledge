 /**
 * aiticle
 */

import service from '../api';

export const state = () => ({
  // 话题
  topics: {
  },
  squareTopics: {
  },
  fetch: false
});

export const mutations = {
  SET_TOPIC(state, data) {

    data.list.forEach(squareTopic => {
      squareTopic.topicList.forEach(topic => {
        topic.discussList.forEach(row => {
          row.cacheContent = row.content
          if(row.content.length > 20 ) {
            row.content = row.content.substring(0, 20) + '...'
            row.displayShort = true
          }else {
            row.isFull = true
          }
        })
      })
    })

    state.squareTopics = data
    console.log(state.squareTopics)
    state.fetch = true;
  },
  toggle_show(state, data) {
    data.squareTopicIndex, data.topicIndex, data.discussIndex
    let item = state.squareTopics.list[data.squareTopicIndex].topicList[data.topicIndex].discussList[data.discussIndex]
    let cacheContent = item.content
    item.content = item.cacheContent
    item.cacheContent = cacheContent
    item.displayShort = !item.displayShort
  },
};

export const actions = {
  // 评论显示或隐藏
  toggleShow({ commit }, data) {

    commit('toggle_show', data);
  },
  // 获取最热文章列表
  async getTopics({ commit }, data) {
    const res = await service.getTopics(data);
    commit(
      'SET_TOPIC',
      res.data
    );
  }
};
