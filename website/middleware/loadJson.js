import weeks from '~/data/weeklyItems.json';

export default function({ params, store }) {
   store.commit("SET_WEEKS", weeks);
}