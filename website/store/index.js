export const state = ()=>({
  weeks: [1,2],
  modalComponent:{},
  showModal:false,
  header:{
    title:"",
    week:{}
  }
})

export const mutations ={
  SET_WEEKS: (state, weeksJson) => {
      state.weeks = weeksJson;
  },
  SHOW_DIALOG: (state, component) => {
    state.modalComponent = component;
    state.showModal=true
  },
  HIDE_DIALOG: (state) => {
    state.modalComponent = {};
    state.showModal=false
  },
  SET_HEADER_PROPS: (state, props) =>{
    state.header=props
  }
}