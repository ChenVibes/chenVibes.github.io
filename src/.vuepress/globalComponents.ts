import { defineAsyncComponent, App } from 'vue'
export default (app: App) => {
  const demo = import.meta.glob('./demo/vue/*')
  const components = import.meta.glob('./components/*')
  const component = { ...demo, ...components }
  for (const item of Object.entries(component)) {
    const [key, value]: [string, any] = item
    let componentNameArr = key.replace('./', '').split('/')
    let componentName = componentNameArr[componentNameArr.length - 1]
    componentName = componentName.split('.')[0]
    app.component(componentName, defineAsyncComponent(value))
  }
}
