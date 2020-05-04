 /**
 * aiticle
 */

import service from '../api';

export const state = () => ({
  // 话题
  topics: {
  },
  fetch: false
});

export const mutations = {
  SET_TOPIC(state, data) {
    state.fetch = true;
    state.topics = data
  }
};

export const actions = {
  // 获取最热文章列表
  async getTopics({ commit }, data) {
    const res = await service.getTopics(data);
    commit(
      'SET_TOPIC',
      res.data
    );
  }
};
