/* eslint-disable no-unused-vars */
/**
 * 创建一个scroller的dom
 */
import throttle from 'lodash/throttle'
import { on, off } from './dom'
const THROTTLE_TIME = 1000 / 60
class Scroller {
  /**
   * 创建一个scroller
   * @param {Element} targetContaionEl
   * @param {Element} bottomIsVisibleObserverEl
   * @param {string} mode
   */
  constructor(
    targetContaionEl,
    bottomIsVisibleObserverEl,
    mode = 'hover',
    targetHorizontalEl,
    rootRefs,
    horizontalEvents
  ) {
    if (!targetContaionEl) {
      throw new Error('need have table element')
    }
    this.targetContaionEl = targetContaionEl
    this.targetHorizontalEl = targetHorizontalEl
    this.fullwidth = false
    this.mode = mode
    this.isVisible = false
    this.bottomIsVisibleObserverEl = bottomIsVisibleObserverEl

    /**
     * 创建相关dom
     */
    const scroller = document.createElement('div')
    scroller.classList.add('scrollbar')

    this.dom = scroller

    const bar = document.createElement('div')
    bar.classList.add('scrollbar-content')
    this.bar = bar
    scroller.appendChild(bar)

    this.resetScroller()
    this.bottomIsVisible = false
    this.updateTimer = null
    /**
     * 初始化配置
     */
    const instance = this
    this.scrollEl = ''
    this.checkIsScrollBottom = throttle(function() {
      if (!instance.isVisible) {
        instance.hideScroller()
        return
      }

      if (instance.bottomIsVisible) {
        instance.hideScroller()
        instance.hideBar()
      } else {
        // 显示当前的bar
        instance.showScroller()

        if (instance.mode === 'always') {
          instance.showBar()
        }
      }
    }, THROTTLE_TIME)

    this.targetContainerScroll = throttle(function(e) {
      const el = e.target
      const clientHeight = el.clientHeight // 滚动区域可视高度
      // chorme scrollTop有小数 https://class.imooc.com/course/qadetail/304881
      const scrollTop = Math.ceil(el.scrollTop) // 到头部到距离
      const scrollHeight = el.scrollHeight // 滚动条总高度
      // 滚动到底部的条件
      if (clientHeight + scrollTop >= scrollHeight) {
        instance.isVisible = false
        instance.bottomIsVisible = true
        instance.hideScroller()
        instance.hideBar()
      } else {
        if (instance.bottomIsVisible) {
          instance.isVisible = true
          instance.bottomIsVisible = false
          // instance.resetThumbPosition()
          instance.showScroller()
          instance.showBar()
        }
      }
    }, THROTTLE_TIME)
    on(targetContaionEl, 'scroll', this.targetContainerScroll)

    // 自动同步 targetHorizontalEl => scroller
    this.targetHorizontalScroll = throttle(e => {
      const el = e.target
      e.stopPropagation()
      if (this.scrollEl === 'scrollBar') return false
      this.scrollEl = 'targetHorizontalEl'
      const clientWidth = el.clientWidth // 滚动区域可视宽度
      const scrollLeft = el.scrollLeft // 到最左侧的距离
      const scrollWidth = el.scrollWidth // 滚动条总宽度
      // 滚动到最右侧的条件
      if (clientWidth + scrollLeft >= scrollWidth || scrollLeft === 0) {
        instance.resetScroller()
      }
      if (instance.bottomIsVisible) {
        instance.resetThumbPosition()
      }
      scroller.scrollTo(scrollLeft, 0)

      this.scrollEl = ''
      // instance.hideScroller()
      // instance.isVisible = false
      // instance.bottomIsVisible = true
    }, THROTTLE_TIME)
    on(targetHorizontalEl, 'scroll', this.targetHorizontalScroll)

    // 自动同步 scroller => targetHorizontalEl
    this.syncDestoryHandler = this.initScrollSyncHandler()

    this.tableElObserver = null

    if (MutationObserver) {
      // 监听table的dom变化，自动重新设置
      this.tableElObserver = new MutationObserver(() => this.forceUpdate())
      this.tableElObserver.observe(this.targetHorizontalEl, {
        childList: true, //子节点的变动（指新增，删除或者更改）
        subtree: true, //布尔值，表示是否将该观察器应用于该节点的所有后代节点
        attributes: true, //属性的变动
        attributeFilter: ['style'] //表示需要观察的特定属性
      })
    }
    this.tableResizeObserver = null
    if (ResizeObserver) {
      this.tableResizeObserver = new ResizeObserver(() => this.forceUpdate())
      this.tableResizeObserver.observe(targetHorizontalEl)
    }

    this.tableIntersectionObserver = null
    this.bottomIsVisibleObserver = null
    if (IntersectionObserver) {
      // 本体是否可见
      this.tableIntersectionObserver = new IntersectionObserver(([entry]) => {
        instance.isVisible = entry.intersectionRatio > 0
        instance.forceUpdate()
      })
      this.tableIntersectionObserver.observe(targetHorizontalEl)

      // 底部是否可见
      if (this.bottomIsVisibleObserverEl) {
        this.bottomIsVisibleObserver = new IntersectionObserver(([entry]) => {
          instance.bottomIsVisible = entry.intersectionRatio > 0
          instance.hideScroller()
          instance.hideBar()
        })
        this.bottomIsVisibleObserver.observe(this.bottomIsVisibleObserverEl)
      }
    } else {
      console.info(
        'IntersectionObserver is not support，directive maybe problem'
      )
    }
    this.rootRefs = rootRefs
    this.horizontalEvents = horizontalEvents
    this.initScrollBar()
    window.onresize = this.resizeScrollBar
  }
  resizeScrollBar() {
    const vm = this
    const screenWidth = window.screen.width
    const screenHeight = window.screen.height
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    if (windowWidth === screenWidth && windowHeight === screenHeight) {
      // 在onresize事件中，使用window.requestAnimationFrame方法来执行一个函数，这个函数会在下一次浏览器重绘之前执行
      window.requestAnimationFrame(() => {
        vm.initScrollBar()
      })
    } else {
      vm.initScrollBar && vm.initScrollBar()
    }
  }

  initScrollBar() {
    let { dom, targetContaionEl } = this
    if (dom) {
      dom.style.visibility = 'hidden'
      dom.style.position = 'fixed'
      // dom.style.bottom = '6px'
      dom.style.bottom = this.getDistanceToBottom(targetContaionEl) + 'px'
      dom.style.zIndex = 3
      dom.style.transition = 'all 0.3s ease'
    }
    // bar宽度自动重制
    this.forceUpdate && this.forceUpdate()
  }

  resetThumbPosition() {
    const { targetHorizontalEl } = this
    this.dom.scrollLeft = targetHorizontalEl.scrollLeft
  }

  getDistanceToBottom(element) {
    let rect = element.getBoundingClientRect()
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    let clientHeight = document.documentElement.clientHeight
    let elementBottom = rect.bottom + scrollTop
    let distanceToBottom = clientHeight - elementBottom
    return distanceToBottom < 0 ? 0 : distanceToBottom
  }

  resetScroller() {
    const { targetHorizontalEl, dom, bar } = this
    const boundingClientRect = targetHorizontalEl.getBoundingClientRect()

    if (!this.bottomIsVisible) {
      dom.style.width = boundingClientRect.width + 'px'
      dom.style.maxWidth = `${boundingClientRect.width}px`
      dom.style.left = `${boundingClientRect.left}px`
      if (bar) {
        bar.style.width = `${targetHorizontalEl.scrollWidth}px`
      }
    }
  }

  forceUpdate() {
    clearTimeout(this.updateTimer)
    this.updateTimer = setTimeout(() => {
      this.resetScroller()
      this.resetThumbPosition()
      this.checkIsScrollBottom()
    }, THROTTLE_TIME)
  }

  /**
   * 让scroller的拖动行为和targetHorizontalEl的同步
   */
  initScrollSyncHandler() {
    const vm = this
    const { targetHorizontalEl, dom } = this
    /** @param {MouseEvent} e */

    const scrollUpDocumentHandler = e => {
      if (vm.bottomIsVisible) return false
      e.stopPropagation()
      if (this.scrollEl === 'targetHorizontalEl') return false
      this.scrollEl = 'scrollBar'
      vm.isVisible = true
      vm.bottomIsVisible = false
      const el = e.target
      const clientWidth = el.clientWidth // 滚动区域可视宽度
      const scrollLeft = el.scrollLeft // 到最左侧的距离
      const scrollWidth = el.scrollWidth // 滚动条总宽度
      const {
        scrollMethod, //同步横向滚动header
        scrollLeftMethod, //滚动到最左侧的handler
        scrollRightMethod //滚动到最右侧的handler
      } = vm.horizontalEvents
      vm.rootRefs[scrollMethod](scrollLeft)
      targetHorizontalEl.scrollTo(scrollLeft, 0)
      this.scrollEl = ''
      // 滚动到最右侧的条件
      if (clientWidth + scrollLeft >= scrollWidth) {
        vm.rootRefs[scrollRightMethod]()
        return
      }
      // 滚动到最左侧的条件
      if (scrollLeft === 0) {
        vm.rootRefs[scrollLeftMethod]()
        return
      }
    }
    on(dom, 'scroll', scrollUpDocumentHandler)
    return function() {
      off(dom, 'scroll', scrollUpDocumentHandler)
      off(this.targetContaionEl, 'scroll', this.targetContainerScroll)
      off(this.targetHorizontalEl, 'scroll', this.targetHorizontalScroll)
    }
  }

  /**
   * 显示整体
   */
  showScroller() {
    const { targetHorizontalEl, targetContaionEl } = this
    const boundingClientRect = targetHorizontalEl.getBoundingClientRect()
    if (
      !this.fullwidth &&
      boundingClientRect.height > targetContaionEl.clientHeight
    ) {
      this.dom.style.visibility = 'visible'
    }
  }

  /**
   * 隐藏整体
   */
  hideScroller() {
    this.dom.style.visibility = 'hidden'
  }

  /**
   * 显示滚动条
   */
  showBar() {
    if (!this.isVisible) {
      return
    }
    this.bar.style.opacity = 1
  }

  /**
   * 隐藏滚动条
   */
  hideBar() {
    if (!this.isVisible) {
      this.bar.style.opacity = 0
      return
    }
    if (this.mode === 'always') {
      this.bar.style.opacity = 1
    } else {
      this.bar.style.opacity = 0
    }
  }

  destory() {
    this.tableElObserver && this.tableElObserver.disconnect()
    this.tableResizeObserver && this.tableResizeObserver.disconnect()
    this.tableIntersectionObserver &&
      this.tableIntersectionObserver.disconnect()
    this.bottomIsVisibleObserver && this.bottomIsVisibleObserver.disconnect()
    if (
      this.bottomIsVisibleObserverEl &&
      this.bottomIsVisibleObserverEl.parentElement
    ) {
      this.bottomIsVisibleObserverEl.parentElement.removeChild(
        this.bottomIsVisibleObserverEl
      )
    }
    clearTimeout(this.updateTimer)
    this.syncDestoryHandler()
  }
}
/**
 * containerBox 挂载纵向滚动的容器class
 * horizontalBox 挂载横向滚动的容器class
 * ref 访问实例
 * events 实例的方法name
 */
/** @type {Vue.DirectiveOptions} */
export const directiveVue2 = {
  inserted(el, binding, vnode) {
    const _ref = binding.expression ? binding.value : binding.arg
    const value = _ref.mode
    const container = _ref.containerBox
      ? el.querySelector(`.${_ref.containerBox}`)
      : el
    if (!container) {
      console.info('未找到可挂载的对象')
      return
    }
    if (!MutationObserver || !ResizeObserver || !IntersectionObserver) return
    let horizontalClass = _ref.horizontalBox
    let horizontalElCls = `.${horizontalClass}`
    if (Array.isArray(horizontalClass)) {
      horizontalElCls = horizontalClass
        .map(v => {
          return `.${v}`
        })
        .join(' ')
    }
    const horizontalBox = container.querySelector(horizontalElCls)
    if (!horizontalBox) {
      console.info('未找到可挂载的对象')
      return
    }
    let horizontalEvents = _ref.events
    const rootRefs = vnode.context.$refs[_ref.ref]
    const scrollHeight = horizontalBox.scrollHeight
    const clientHeight = container.clientHeight
    el.showBar = true
    // 没有滚动条 无需加载自定义滚动条
    if (scrollHeight <= clientHeight) {
      el.showBar = false
      return false
    }
    const bottomIsVisibleObserverEl = document.createElement('div')
    const scroller = new Scroller(
      container,
      bottomIsVisibleObserverEl,
      value,
      horizontalBox,
      rootRefs,
      horizontalEvents
    )
    horizontalBox.appendChild(bottomIsVisibleObserverEl)
    horizontalBox.appendChild(scroller.dom)
    el.horizontalScroll = scroller

    if (value === 'hover') {
      on(horizontalBox, 'mouseover', scroller.showBar.bind(scroller))
      on(horizontalBox, 'mouseleave', scroller.showBar.bind(scroller))
    } else {
      scroller.showBar()
    }
  },
  unbind(el) {
    el.showBar && el.horizontalScroll && el.horizontalScroll.destory()
  }
}

export const directiveVue3 = {
  mounted(el, binding, vnode) {
    const _ref = binding.expression ? binding.value : binding.arg
    const value = _ref.mode
    const container = _ref.containerBox
      ? el.querySelector(`.${_ref.containerBox}`)
      : el
    if (!container) {
      console.info('未找到可挂载的对象')
      return
    }
    if (!MutationObserver || !ResizeObserver || !IntersectionObserver) return
    let horizontalClass = _ref.horizontalBox
    let horizontalElCls = `.${horizontalClass}`
    if (Array.isArray(horizontalClass)) {
      horizontalElCls = horizontalClass
        .map(v => {
          return `.${v}`
        })
        .join(' ')
    }
    const horizontalBox = container.querySelector(horizontalElCls)
    if (!horizontalBox) {
      console.info('未找到可挂载的对象')
      return
    }
    const scrollHeight = horizontalBox.scrollHeight
    const clientHeight = container.clientHeight
    el.showBar = true
    if (scrollHeight <= clientHeight) {
      el.showBar = false
      return false
    }
    const bottomIsVisibleObserverEl = document.createElement('div')
    horizontalBox.appendChild(bottomIsVisibleObserverEl)
    let horizontalEvents = _ref.events
    const rootRefs = vnode.context.$refs[_ref.ref]
    const scroller = new Scroller(
      container,
      bottomIsVisibleObserverEl,
      value,
      horizontalBox,
      rootRefs,
      horizontalEvents
    )
    horizontalBox.appendChild(scroller.dom)
    el.horizontalScroll = scroller

    if (value === 'hover') {
      on(horizontalBox, 'mouseover', scroller.showBar.bind(scroller))
      on(horizontalBox, 'mouseleave', scroller.showBar.bind(scroller))
    } else {
      scroller.showBar()
    }
  },
  unmounted(el) {
    el.showBar && el.horizontalScroll && el.horizontalScroll.destory()
  }
}

/**
 * 插件
 * @type {VuePlugin}
 */
export const scrollBar = {
  install(Vue) {
    Vue.directive('horizontalScroll', {
      ...directiveVue2,
      ...directiveVue3
    })
  }
}

export default scrollBar
