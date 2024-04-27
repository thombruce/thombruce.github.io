export const age = (date: string) => {
  const currentDate = new Date()
  const birthDate = new Date(date)
  const age = ref<number>(0)
  const differenceInMilliseconds = currentDate - birthDate
  return Math.floor(differenceInMilliseconds / 31557600000)
}
