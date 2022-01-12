export const getThisWeek = weeks =>{
  for(let i = 0; i<weeks.length; i++){
    const week = weeks[i]
    const date = new Date(week.date)
    const currentDate = new Date()
    if(date>currentDate) return weeks[i-1]
  }
  return weeks[0]
}

export const getNextWeek = weeks =>{
  for(const week of weeks){
    const date = new Date(week.date)
    const currentDate = new Date()
    if(date>currentDate){
      return week
    }
  }
  return weeks[0]
}

export const getWeek = (weeks,date)=>{
  return weeks.find(w=>new Date(w.date).toLocaleDateString() == new Date(date).toLocaleDateString())
}

export const getWeekWithOffset = (weeks, baseDate,weekOffsetFromLastReset) =>{
  for(let i = 0; i<weeks.length; i++){
    const week = weeks[i] 
    const date = new Date(week.date)
    const currentDate = new Date(baseDate)
    if(date>currentDate){
      return weeks[(i-1)+weekOffsetFromLastReset] 
    }else if(date.toDateString() == currentDate.toDateString()){
      return weeks[i+weekOffsetFromLastReset]
    }
  }
  return false
}