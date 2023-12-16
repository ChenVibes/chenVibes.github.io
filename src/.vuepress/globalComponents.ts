import { defineAsyncComponent, App } from 'vue'
export default (app: App) => {
  const components = import.meta.glob('./components/*')
  console.log(['components', components])
  for (const item of Object.entries(components)) {
    const [key, value]: [string, any] = item
    let componentNameArr = key.replace('./', '').split('/')
    let componentName = componentNameArr[componentNameArr.length - 1]
    componentName = componentName.split('.')[0]
    app.component(componentName, defineAsyncComponent(value))
  }
}
