(function () {
    const recommendSlider = document.getElementById('recommendSlider')
    const recommendLeft = document.getElementsByClassName('recommend-left')[0]
    const recommendRight = document.getElementsByClassName('recommend-right')[0]
    const recommendSliderWidth = window.getComputedStyle(recommendSlider).width
    console.log(recommendSliderWidth)
    console.log(recommendSlider)

    recommendLeft.addEventListener('click', function() {
        if (recommendLeft.className.indexOf('disable') > -1 ) {
            return
        }
        recommendRight.classList.remove('disable')
        recommendLeft.classList.add('disable')
        recommendSlider.style.transform = ''
    })

    recommendRight.addEventListener('click', function() {
        if (recommendRight.className.indexOf('disable') > -1 ) {
            return
        }
        recommendLeft.classList.remove('disable')
        recommendRight.classList.add('disable')
        recommendSlider.style.transform = `translateX(-${recommendSliderWidth})`
    })
})()