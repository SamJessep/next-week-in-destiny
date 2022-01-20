import { setupTest } from '@nuxt/test-utils'
import { getWeekWithOffset } from '../util/dateHelpers'

const weeks = [
  { date: '2021-11-03' },
  { date: '2021-11-10' },
  { date: '2021-11-17' },
  { date: '2021-11-24' },
  { date: '2021-12-01' },
  { date: '2021-12-08' },
  { date: '2021-12-15' },
  { date: '2021-12-22' },
  { date: '2021-12-29' },
  { date: '2022-01-05' },
  { date: '2022-01-12' },
  { date: '2022-01-19' },
  { date: '2022-01-26' },
  { date: '2022-02-02' },
  { date: '2022-02-09' },
  { date: '2022-02-16' },
  { date: '2022-02-23' },
]

describe('date util tests', () => {
  setupTest({})
  test('get week 12/01/2022 with 0 offset to return same date', () => {
    const inputDate = '2022-01-12'
    const outputDate = getWeekWithOffset(weeks, inputDate, 0)
    expect(new Date(outputDate.date).toDateString()).toBe(
      new Date(inputDate).toDateString()
    )
  })

  test('get week 12/01/2022 with 1 offset to return next week', () => {
    const inputDate = '2022-01-12'
    const outputDate = getWeekWithOffset(weeks, inputDate, 1)
    const expectedDate = new Date('2022-01-19').toDateString()
    expect(new Date(outputDate.date).toDateString()).toBe(expectedDate)
  })

  test('get week 12/01/2022 with -1 offset to return previous week', () => {
    const inputDate = '2022-01-12'
    const outputDate = getWeekWithOffset(weeks, inputDate, -1)
    const expectedDate = new Date('2022-01-05').toDateString()
    expect(new Date(outputDate.date).toDateString()).toBe(expectedDate)
  })
})
