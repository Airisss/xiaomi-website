(function () {
    let timing = 7200
    let h, m, s

    const hPart = document.getElementById('hour')
    const mPart = document.getElementById('minute')
    const sPart = document.getElementById('second')

    setInterval(() => {
        timing--
        h = pad(Math.floor(timing / 3600))
        m = pad(Math.floor(timing % 3600 / 60))
        s = pad(timing % 60)
        hPart.innerHTML = h
        mPart.innerHTML = m
        sPart.innerHTML = s
    }, 1000)

    // 商品点击移动切换
    const flashSlider = document.getElementById('flashSlider')
    const flashLeft = document.getElementsByClassName('flash-left')[0]
    const flashRight = document.getElementsByClassName('flash-right')[0]
    const flashGoodsListWidth = 992

    const flashArrowLeft = document.getElementsByClassName('flash-left')[0]
    const flashArrowRight = document.getElementsByClassName('flash-right')[0]

    flashLeft.addEventListener('click', function () {
        if (flashArrowLeft.className.indexOf('disable') > -1) {
            return
        }
        flashArrowRight.classList.remove('disable')
        flashArrowLeft.classList.add('disable')
        flashSlider.style.transform = ``
    })

    flashRight.addEventListener('click', function () {
        if (flashArrowRight.className.indexOf('disable') > -1) {
            return
        }
        flashArrowLeft.classList.remove('disable')
        flashArrowRight.classList.add('disable')
        flashSlider.style.transform = `translateX(-992px)`
    })

    // 时间补0
    function pad(time, len = 2) {
        let timeLen = time.toString().length
        while (timeLen < len) {
            time = '0' + time
            timeLen++
        }
        return time
    }
})()