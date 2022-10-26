const countdownTimer = () => {
    const countDate = new Date(Date.UTC(2021, 09, 26));
    const now = new Date();
    // console.log(countDate.getFullYear(), now.getFullYear());
    const countDateMs = new Date(2022, 09, 26, 22, 30, 00, 00).getTime();
    const nowMs = new Date().getTime();
    // const gap = nowMs - countDateMs;
    const gap = countDateMs - nowMs;

    if (gap < 0) return

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 31;
    const year = month * 12;
    const yearMs = 31536000000;
    const monthMs = 2592000000;

    // console.log(Math.floor(gap / week));
    // console.log(gap / week);
    // console.log(Math.floor(gap / yearMs));
    // console.log(Math.floor(gap / monthMs));

    const gapDay = Math.floor(gap / day);
    const gapHour = Math.floor((gap % day) / hour);
    const gapMinute = Math.floor((gap % hour) / minute);
    const gapSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').textContent = gapDay.toLocaleString('fa', {minimumIntegerDigits: 2});
    document.querySelector('.hour').textContent = gapHour.toLocaleString('fa', {minimumIntegerDigits: 2});
    document.querySelector('.minute').textContent = gapMinute.toLocaleString('fa', {minimumIntegerDigits: 2});
    document.querySelector('.second').textContent = gapSecond.toLocaleString('fa', {minimumIntegerDigits: 2});
    // if (Math.abs(countDate.getFullYear() - now.getFullYear()) > 0) console.log('yes');
}
// countdownTimer();

setInterval(countdownTimer, 1000)
console.log(new Date(2022, 09, 26, 22, 30, 00, 00));