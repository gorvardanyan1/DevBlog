export function getUTCFunction() {
    const newDate = new Date()
    const UtcDate = `${newDate.getDate()}/${newDate.getUTCMonth()}/${newDate.getUTCFullYear()}-${newDate.getUTCHours()}:${newDate.getUTCMinutes()}`

    return UtcDate
}