export function daysToXmas(date) {
    if (date === undefined) throw new Error('No date provided')
    const dateProvided = new Date(date).getTime()
    const dateXmas = new Date('Dec 25, 2021').getTime()

    const calculatedDays = dateXmas - dateProvided
    return Math.ceil(new Date(calculatedDays).getTime() / 1000 / 60 / 60 / 24)
}