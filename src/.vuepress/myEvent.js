import { h as hDemi, isVue2 } from 'vue-demi';// 我们使用的时候使用的 Vue2 的写法，但是 props 还是写在最外层，为了 ts 的智能提示
export const h = (  type: String | Record<any, any>,  options: Options & any = {},  children?: any,) => {  if (isVue2) {    
  const propOut = omit(options, [     
     'props',      // ... 省略了其他 Vue 2 的默认属性如 attrs、on、domProps、class、style    
    ]);   
     // 这里提取出了组件的 props    
     const props = defaults(propOut, options.props || {});     
     if ((type as Record<string, any>).props) {  
          // 这里省略了一些过滤 attrs 和 props 的逻辑，不是很重要      
          return hDemi(type, { ...options, props }, children);    }    
          return hDemi(type, { ...options, props }, children);  }  
          const { props, attrs, domProps, on, scopedSlots, ...extraOptions } = options;  
          const ons = adaptOnsV3(on); 
          // 处理事件  
          const params = { ...extraOptions, ...props, ...attrs, ...domProps, ...ons }; 
          // 排除 scopedSlots  
          const slots = adaptScopedSlotsV3(scopedSlots); // 处理 slots  if (slots && Object.keys(slots).length) {    return hDemi(type, params, {      default: slots?.default || children,      ...slots,    });  }  return hDemi(type, params, children);};const adaptOnsV3 = (ons: Object) => {  if (!ons) return null;  return Object.entries(ons).reduce((ret, [key, handler]) => {    // 修饰符的转换    if (key[0] === '!') {      key = key.slice(1) + 'Capture';    } else if (key[0] === '&') {      key = key.slice(1) + 'Passive';    } else if (key[0] === '~') {      key = key.slice(1) + 'Once';    }    key = key.charAt(0).toUpperCase() + key.slice(1);    key = `on${key}`;    return { ...ret, [key]: handler };  }, {});};const adaptScopedSlotsV3 = (scopedSlots: any) => {  if (!scopedSlots) return null;  return Object.entries(scopedSlots).reduce((ret, [key, slot]) => {    if (isFunction(slot)) {      return { ...ret, [key]: slot };    }    return ret;  }, {} as Record<string, Function>);};