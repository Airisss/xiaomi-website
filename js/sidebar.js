(function () {
    const topBtn = document.getElementById('top')
    const MAXHEIGHT = 2000
    let scrollY

    window.addEventListener('scroll', function () {
        screenY = document.documentElement.scrollTop || document.body.scrollTop
        if (screenY > MAXHEIGHT) {
            topBtn.style.opacity = 1
        } else {
            topBtn.style.opacity = 0
        }
    })
})()