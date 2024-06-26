/* istanbul ignore next */
export const on = (function () {
  if (!__VUEPRESS_SSR__ && document.addEventListener) {
    return function (element, event, handler, useCapture = false) {
      if (element && event && handler) {
        element.addEventListener(event, handler, useCapture)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/* istanbul ignore next */
export const off = (function () {
  if (!__VUEPRESS_SSR__ && document.removeEventListener) {
    return function (element, event, handler, useCapture = false) {
      if (element && event) {
        element.removeEventListener(event, handler, useCapture)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()
