const div = document.querySelector('div')
const style = div.style

function horizontalAndVerticalScreen() {
  const orientation = window.orientation
  if (orientation === 180 || orientation === 0) {
    // style.width = '50%'
    // style.height = '100%'
    Object.assign(style, {
      width: '50%',
      height: '100%'
    })
  } else if (orientation === 90 || orientation === -90) {
    // style.width = '100%'
    // style.height = '50%'
    Object.assign(style, {
      width: '100%',
      height: '50%'
    })
  }
}

horizontalAndVerticalScreen()

const type = 'onorientationchange' in window ? 'orientationchange' : 'resize'
window.addEventListener(type, horizontalAndVerticalScreen, false)