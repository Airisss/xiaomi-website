(function () {
    const miNav = document.getElementsByClassName('mi-nav')[0].children
    const miMenu = document.getElementsByClassName('mi-menu')

    let miTimer

    for (let i = 0; i < miNav.length - 2; i++) {
        miNav[i].addEventListener('mouseenter', function () {
            for (let j = 0; j < miNav.length - 2; j++) {
                miMenu[i].style = 'transform: scale(0)'
                miMenu[i].style.display = 'none'
            }
            miMenu[i].style = 'transform: scale(1)'
        })
        miNav[i].addEventListener('mouseleave', function () {
            miTimer = setTimeout(() => {
                miMenu[i].style = 'transform: scale(0)'
                miMenu[i].style = 'transform-origin: top'
            }, 160)
        })
    }

    for (let i = 0; i < miMenu.length; i++) {
        miMenu[i].addEventListener('mouseenter', function () {
            clearTimeout(miTimer)
        })
        miMenu[i].addEventListener('mouseleave', function () {
            miMenu[i].style = 'transform: scale(0)'
            miMenu[i].style = 'transform-origin: top'
        })
    }
})()