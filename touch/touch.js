function load() {
  document.addEventListener('touchstart', touch, false)
  document.addEventListener('touchmove', touch, false)
  document.addEventListener('touchend', touch, false)

  function touch(event) {
    const div = document.querySelector('#inp')
    div.innerHTML = JSON.stringify(event, null, 2)
  }
}

window.addEventListener('load', load, false)