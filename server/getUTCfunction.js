export function getUTCFunction() {
    const newDate = new Date()
    // const UtcDate = `${newDate.getDate()}/${newDate.getUTCMonth()}/${newDate.getUTCFullYear()}`
    // const UtcTime = `${newDate.getUTCHours()}:${newDate.getUTCMinutes()}`
    const UTCDate = {
        day: newDate.getUTCDate(),
        month: newDate.getUTCMonth(),
        year: newDate.getUTCFullYear()
    }
    const UTCTime = {
        hours: newDate.getUTCHours(),
        minutes: newDate.getUTCMinutes(),
    }
    return {
        date: UTCDate,
        time: UTCTime
    }
}

