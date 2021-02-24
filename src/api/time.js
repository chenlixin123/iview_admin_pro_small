function time(number) {
    let date = new Date(number)
    let Y = date.getFullYear();
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

    // return Y + '-' + M + '-' + D + ' ' + h + ':' + m
    return Y + '-' + M + '-' + D
}

function times(number) {
    let date = new Date(number)
    let Y = date.getFullYear();
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

    // return Y + '-' + M + '-' + D + ' ' + h + ':' + m
    return Y + '年' + M + '月' + D + '日'
    18732465982
}

function TT(number) {
    let date = new Date(number)
    let Y = date.getFullYear();
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let mm = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    // return Y + '-' + M + '-' + D + ' ' + h + ':' + m
    // return Y + '年' + M + '月' + D + '日'
    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + mm
}

function TTS(number) {
    let date = new Date(number)
    let Y = date.getFullYear();
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let mm = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    // return Y + '-' + M + '-' + D + ' ' + h + ':' + m
    // return Y + '年' + M + '月' + D + '日'
    return Y + '-' + M + '-' + D + ' ' + h + ':' + m
}

function TTS1(number) {
    let date = new Date(number)
    let Y = date.getFullYear();
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let mm = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    // return Y + '-' + M + '-' + D + ' ' + h + ':' + m
    // return Y + '年' + M + '月' + D + '日'
    return Y + '/' + M + '/' + D
}
export default {
    time: time,
    times: times,
    TT: TT,
    TTS: TTS,
    TTS1: TTS1
}