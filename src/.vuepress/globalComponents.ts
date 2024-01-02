import { defineAsyncComponent, App } from 'vue'
export default (app: App) => {
  //import.meta.glob 和 import.meta.globEager 区别一个异步加载文件，另一个同步加载文件
  const demo = import.meta.glob('./demo/vue/*')
  const components = import.meta.glob('./components/*/index.js')
  // 自定义指令
  const directives = import.meta.glob('./directives/*/index.js')
  const component = { ...demo, ...components }
  for (const item of Object.entries(component)) {
    const [key, value]: [string, any] = item
    let componentNameArr = key
      .replace('./', '')
      .replace('/index.js', '')
      .split('/')
    let componentName = componentNameArr[componentNameArr.length - 1]
    componentName = componentName.split('.')[0]
    app.component(componentName, defineAsyncComponent(value))
  }
  for (const item of Object.entries(directives)) {
    const [key, value]: [string, any] = item
    app.use(value)
  }
}
