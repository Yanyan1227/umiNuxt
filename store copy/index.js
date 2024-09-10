/*
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-08-28 09:52:10
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-08-28 10:51:35
 * @FilePath: /umi/umiNuxt/store/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const state = () => ({
  data: null,
});
export const mutations = {
  setData(state, data) {
    state.data = data;
  },
};
export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      console.log(data);
      commit("setData", data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  },
};
