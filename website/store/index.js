export const state = ()=>({
  weeks: [1,2],
  modalComponent:{},
  showModal:false,
})

export const mutations ={
  SET_WEEKS: (state, weeksJson) => { //capitalization is good-practice for vuex-mutations
      state.weeks = weeksJson;
  },
  SHOW_DIALOG: (state, component) => { //capitalization is good-practice for vuex-mutations
    state.modalComponent = component;
    state.showModal=true
  },
  HIDE_DIALOG: (state) => { //capitalization is good-practice for vuex-mutations
    state.modalComponent = {};
    state.showModal=false
  },
}