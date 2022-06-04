import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
  setPaymentsListData(state, payload) {
    state.paymentList = payload
  },
  updateDataToPaymentsList(state, data) {
    state.paymentList.splice(data.index, 1, data.row)
  },
  deleteDataToPaymentsList(state, data) {
    state.paymentList.forEach((item, i) => {
      if (item.id == data) {
        state.paymentList.splice(i, 1)
      }
    })
  },
  addDataToPaymentsList(state, payload) {
    state.paymentList.push(payload)
  },
  setCategories(state, payload){
    state.categoryList = payload
  }
}

const getters = {
  getPaymentsList: state => state.paymentList,
  getPaymentValues: state => {
    const res = []
    state.categoryList.forEach(category => {
      const values = state.paymentList.filter(item => item.category == category).reduce((res, cur) => res + cur.value, 0)
      res.push(values)
    })
    return res
  },
  getCategoryList: state=>state.categoryList
}

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: []
  },
  mutations,
  actions: {
    fetchData({commit}) {
      return new Promise((resolve)=>{
        setTimeout(()=>{
          const items = []
          const list = ['Food', 'Transport', 'Education', 'Entertainment', 'Sport']
          for(let i=1; i<=50; i++) {
            items.push({
              date: "23.12.2022",
              category: list[Math.floor(Math.random()*list.length)],
              value: i*100,
              id: Math.floor(Math.random()* Math.floor(Math.random() * Date.now()) +i)
            })
          } resolve(items)
        },2000)
      }).then(res=> {
        commit('setPaymentsListData', res)
      })
    },
    fetchCategoryList({commit}) {
      return new Promise((resolve)=> {
        setTimeout(()=>{
          resolve (['Food', 'Transport', 'Education', 'Entertainment', 'Sport'])
        },1000)
      }).then(res => { commit('setCategories', res)})
    }
  },
  getters
})