import weeks from '~/data/weeklyItems.json';
import {getThisWeek} from "~/util/dateHelpers"

export default function({ redirect }) {
  const thisWeek = getThisWeek(weeks)
  return redirect('/weeks/'+thisWeek.date)
}