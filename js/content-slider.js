(function () {
    const arrow = document.getElementsByClassName('item-arrow')[0]
    const arrowLeft = arrow.children[0]
    const arrowRight = arrow.children[1]

    const sliderWrapper = document.getElementsByClassName('item-slider')[0].children[0]

    // 每次时间触发 X 方向移动的距离
    const sliderWidth = sliderWrapper.clientWidth

    // 当前索引值
    let index = 0

    // X方向移动距离
    let offsetX = 0

    // 分页指示器
    const page = document.getElementsByClassName(' item-pagation')[0].children[0]
    const pagination = page.children

    arrowLeft.addEventListener('click', function () {
        if (index === 0) {
            return
        }
        index--
        offset()
    })

    arrowRight.addEventListener('click', function () {
        if (index === 2) {
            return
        }
        index++
        offset()
    })

    page.addEventListener('click', function(e) {
        if (e.target.tagName === 'DL') {
            return
        }

        index = e.target.getAttribute('data-index')
        offsetX = index * sliderWidth
        sliderWrapper.style.transform = `translateX(-${offsetX}px)`

        // 兄弟元素移除active样式
        for (let i = 0; i < pagination.length; i++) {
            pagination[i].classList.remove('active')
        }
        // 当前元素添加active样式
        e.target.classList.add('active')
    })

    function offset () {
        offsetX = index * sliderWidth
        sliderWrapper.style.transform = `translateX(-${offsetX}px)`

        // 兄弟元素移除active样式
        for (let i = 0; i < pagination.length; i++) {
            pagination[i].classList.remove('active')
        }
        // 当前元素添加active样式
        pagination[index].classList.add('active')
    }
})()