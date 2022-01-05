export const state = ()=>({
  weeks: [1,2],
})

export const mutations ={
  SET_WEEKS: (state, weeksJson) => { //capitalization is good-practice for vuex-mutations
      state.weeks = weeksJson;
  }
}