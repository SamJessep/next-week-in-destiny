import data from '~/data/appData.json'

export default function ({ params, store }) {
  store.commit('SET_APP_DATA', data)
}
