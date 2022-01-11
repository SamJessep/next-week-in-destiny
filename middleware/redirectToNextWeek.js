import weeks from '~/data/weeklyItems.json';
import {getNextWeek} from "~/util/dateHelpers"

export default function({ redirect }) {
  const thisWeek = getNextWeek(weeks)
  return redirect('/weeks/'+thisWeek.date)
}