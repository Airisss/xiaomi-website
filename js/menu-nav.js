(function () {
    const categoryItem = document.getElementsByClassName('category-item')
    const menuDetail = document.getElementsByClassName('menu-detail')

    let timer

    for (let i = 0; i < categoryItem.length; i++) {
        categoryItem[i].addEventListener('mouseenter', function () {
            for (let j = 0; j < menuDetail.length; j++) {
                menuDetail[j].style.display = 'none'
            }
            menuDetail[i].style.display = 'block'
        })
        categoryItem[i].addEventListener('mouseleave', function () {
            timer = setTimeout(() => {
                menuDetail[i].style.display = 'none'
            }, 160)
        })
    }

    for (let i = 0; i < menuDetail.length; i++) {
        menuDetail[i].addEventListener('mouseenter', function () {
            clearTimeout(timer)
        })
        menuDetail[i].addEventListener('mouseleave', function () {
            this.style.display = 'none'
        })
    }
})()