export function getUTCFunction() {
    const newDate = new Date()
    const UtcDate = `${newDate.getDate()}/${newDate.getUTCMonth()}/${newDate.getUTCFullYear()}`
    const UtcTime = `${newDate.getUTCHours()}:${newDate.getUTCMinutes()}`
    return {
        date: UtcDate,
        time: UtcTime
    }
}