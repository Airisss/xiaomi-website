(function () {
    const sliders = document.getElementsByClassName('slider-banner')[0].children
    const controlLeft = document.getElementsByClassName('control-l')[0]
    const controlRight = document.getElementsByClassName('control-r')[0]
    const indicators = document.getElementsByClassName('indicators-item')

    let currentIndex = 0
    let sliderInterval

    // 初始化 page　指示器 
    indicatorsChange(currentIndex, sliders.length, indicators)
    sliders[currentIndex].style.display = 'block'
    sliders[currentIndex].style.opacity = '1'

    autoPlay()

    //prev 
    controlLeft.addEventListener('click', function () {
        clearInterval(sliderInterval)
        currentIndex--
        if (currentIndex < 0) {
            currentIndex = sliders.length - 1
        }
        showAndHide()
        indicatorsChange(currentIndex, sliders.length, indicators)
        autoPlay()
    })

    // next
    controlRight.addEventListener('click', function () {
        clearInterval(sliderInterval)
        next()
        autoPlay()
    })

    for (let i=0;i<sliders.length; i++) {
        indicators[i].addEventListener('click', function() {
            if (indicators[i].className.indexOf('active')>-1) {
                return
            }
            clearInterval(sliderInterval)
            currentIndex = i
            showAndHide()
            indicatorsChange(currentIndex, sliders.length, indicators)
            autoPlay()
        })
    }

    // 自动轮播
    function autoPlay() {
        sliderInterval = setInterval(() => {
            next()
        }, 4000)
    }

    function next() {
        currentIndex++
        if (currentIndex > sliders.length - 1) {
            currentIndex = 0
        }
        showAndHide()
        indicatorsChange(currentIndex, sliders.length, indicators)
    }

    // page 指示器
    function indicatorsChange(cur, len, ind) {
        for (let i = 0; i < len; i++) {
            if (ind[i].className.indexOf('active')>-1) {
                ind[i].classList.remove('active')
            }
        }
        ind[cur].classList.add('active')
    }

    // 处理当前元素及其子元素
    function showAndHide() { 
        for (let i = 0; i < sliders.length; i++) {
            sliders[i].style.display = 'none'
            sliders[i].style.opacity = '0'
        }
        sliders[currentIndex].style.display = 'block'
        sliders[currentIndex].style.opacity = '1'
        sliders[currentIndex].style.transition = 'all 0.6s'
    }
})()