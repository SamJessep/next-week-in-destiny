export const state = () => ({
  appData: {},
  modalComponent: {},
  showModal: false,
  header: {
    title: '',
    week: {},
  },
})

export const mutations = {
  SET_APP_DATA: (state, dataJSON) => {
    state.appData = dataJSON
  },
  SHOW_DIALOG: (state, component) => {
    state.modalComponent = component
    state.showModal = true
  },
  HIDE_DIALOG: (state) => {
    state.modalComponent = {}
    state.showModal = false
  },
  SET_HEADER_PROPS: (state, props) => {
    state.header = props
  },
}
