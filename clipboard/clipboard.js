function getClipboardText(event) {
  if (event.clipboardData) {
    // chrome, safari, firefox
    return event.clipboardData.getData('text/plain')
  } else if (window.clipboardData) {
    // ie
    return window.clipboardData.getData('text')
  } else {
    // opera and so on
    window.alert('此版本浏览器不支持剪贴板操作')
  }
}

function setClipboardText(event, value) {
  if (event.clipboardData) {
    // chrome, safari, firefox
    return event.clipboardData.setData('text/plain', value)
  } else if (window.clipboardData) {
    // ie
    return window.clipboardData.setData('text', value)
  } else {
    // opera and so on
    window.alert('此版本浏览器不支持剪贴板操作')
  }
}