export default function initOpeningHours() {

    const operatingDays = document.querySelector('[data-week]')
    const daysOfTheWeek = operatingDays.dataset.week.split(',').map(Number)
    const openingHours = operatingDays.dataset.time.split(',').map(Number)

    const now = new Date()
    const currentDay = now.getDay()
    const currentTime = now.getHours()

    const IsBusinessDay = daysOfTheWeek.indexOf(currentDay) !== -1
    const isOpeningHours = (currentTime >= openingHours[0] && currentTime < openingHours[1])

    if (isOpeningHours && IsBusinessDay) {
        operatingDays.classList.add('opening')
    }
}