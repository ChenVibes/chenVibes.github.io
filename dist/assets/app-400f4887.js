var A9 = Object.defineProperty
var B9 = (e, t, r) =>
  t in e
    ? A9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r)
var _o = (e, t, r) => (B9(e, typeof t != 'symbol' ? t + '' : t, r), r)
const v9 = 'modulepreload',
  p9 = function (e) {
    return '/' + e
  },
  N8 = {},
  i = function (t, r, n) {
    if (!r || r.length === 0) return t()
    const E = document.getElementsByTagName('link')
    return Promise.all(
      r.map(o => {
        if (((o = p9(o)), o in N8)) return
        N8[o] = !0
        const a = o.endsWith('.css'),
          l = a ? '[rel="stylesheet"]' : ''
        if (!!n)
          for (let d = E.length - 1; d >= 0; d--) {
            const A = E[d]
            if (A.href === o && (!a || A.rel === 'stylesheet')) return
          }
        else if (document.querySelector(`link[href="${o}"]${l}`)) return
        const c = document.createElement('link')
        if (
          ((c.rel = a ? 'stylesheet' : v9),
          a || ((c.as = 'script'), (c.crossOrigin = '')),
          (c.href = o),
          document.head.appendChild(c),
          a)
        )
          return new Promise((d, A) => {
            c.addEventListener('load', d),
              c.addEventListener('error', () =>
                A(new Error(`Unable to preload CSS for ${o}`))
              )
          })
      })
    ).then(() => t())
  }
function mt(e, t) {
  const r = Object.create(null),
    n = e.split(',')
  for (let E = 0; E < n.length; E++) r[n[E]] = !0
  return t ? E => !!r[E.toLowerCase()] : E => !!r[E]
}
const _e = {},
  Dr = [],
  vt = () => {},
  yl = () => !1,
  f9 = /^on[^a-z]/,
  An = e => f9.test(e),
  WE = e => e.startsWith('onUpdate:'),
  Re = Object.assign,
  KE = (e, t) => {
    const r = e.indexOf(t)
    r > -1 && e.splice(r, 1)
  },
  m9 = Object.prototype.hasOwnProperty,
  Ae = (e, t) => m9.call(e, t),
  z = Array.isArray,
  br = e => Vr(e) === '[object Map]',
  vr = e => Vr(e) === '[object Set]',
  Wo = e => Vr(e) === '[object Date]',
  Cl = e => Vr(e) === '[object RegExp]',
  ne = e => typeof e == 'function',
  Ee = e => typeof e == 'string',
  Tr = e => typeof e == 'symbol',
  ge = e => e !== null && typeof e == 'object',
  GE = e => (ge(e) || ne(e)) && ne(e.then) && ne(e.catch),
  Pa = Object.prototype.toString,
  Vr = e => Pa.call(e),
  Sl = e => Vr(e).slice(8, -1),
  Oa = e => Vr(e) === '[object Object]',
  XE = e => Ee(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Kr = mt(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  h9 = mt(
    'bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo'
  ),
  YE = e => {
    const t = Object.create(null)
    return r => t[r] || (t[r] = e(r))
  },
  _9 = /-(\w)/g,
  Ue = YE(e => e.replace(_9, (t, r) => (r ? r.toUpperCase() : ''))),
  g9 = /\B([A-Z])/g,
  Ze = YE(e => e.replace(g9, '-$1').toLowerCase()),
  Bn = YE(e => e.charAt(0).toUpperCase() + e.slice(1)),
  Rn = YE(e => (e ? `on${Bn(e)}` : '')),
  zt = (e, t) => !Object.is(e, t),
  yr = (e, t) => {
    for (let r = 0; r < e.length; r++) e[r](t)
  },
  kn = (e, t, r) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: r })
  },
  Mn = e => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  $n = e => {
    const t = Ee(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let H8
const kE = () =>
    H8 ||
    (H8 =
      typeof globalThis < 'u'
        ? globalThis
        : typeof self < 'u'
        ? self
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : {}),
  F9 = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/
function D9(e) {
  return F9.test(e) ? `__props.${e}` : `__props[${JSON.stringify(e)}]`
}
const b9 = {
    [1]: 'TEXT',
    [2]: 'CLASS',
    [4]: 'STYLE',
    [8]: 'PROPS',
    [16]: 'FULL_PROPS',
    [32]: 'HYDRATE_EVENTS',
    [64]: 'STABLE_FRAGMENT',
    [128]: 'KEYED_FRAGMENT',
    [256]: 'UNKEYED_FRAGMENT',
    [512]: 'NEED_PATCH',
    [1024]: 'DYNAMIC_SLOTS',
    [2048]: 'DEV_ROOT_FRAGMENT',
    [-1]: 'HOISTED',
    [-2]: 'BAIL'
  },
  y9 = { [1]: 'STABLE', [2]: 'DYNAMIC', [3]: 'FORWARDED' },
  C9 =
    'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console',
  Va = mt(C9),
  S9 = Va,
  J8 = 2
function T9(e, t = 0, r = e.length) {
  let n = e.split(/(\r?\n)/)
  const E = n.filter((l, s) => s % 2 === 1)
  n = n.filter((l, s) => s % 2 === 0)
  let o = 0
  const a = []
  for (let l = 0; l < n.length; l++)
    if (((o += n[l].length + ((E[l] && E[l].length) || 0)), o >= t)) {
      for (let s = l - J8; s <= l + J8 || r > o; s++) {
        if (s < 0 || s >= n.length) continue
        const c = s + 1
        a.push(`${c}${' '.repeat(Math.max(3 - String(c).length, 0))}|  ${n[s]}`)
        const d = n[s].length,
          A = (E[s] && E[s].length) || 0
        if (s === l) {
          const B = t - (o - (d + A)),
            p = Math.max(1, r > o ? d - B : r - t)
          a.push('   |  ' + ' '.repeat(B) + '^'.repeat(p))
        } else if (s > l) {
          if (r > o) {
            const B = Math.max(Math.min(r - o, d), 1)
            a.push('   |  ' + '^'.repeat(B))
          }
          o += d + A
        }
      }
      break
    }
  return a.join(`
`)
}
function Qn(e) {
  if (z(e)) {
    const t = {}
    for (let r = 0; r < e.length; r++) {
      const n = e[r],
        E = Ee(n) ? Tl(n) : Qn(n)
      if (E) for (const o in E) t[o] = E[o]
    }
    return t
  } else if (Ee(e) || ge(e)) return e
}
const R9 = /;(?![^(]*\))/g,
  w9 = /:([^]+)/,
  I9 = /\/\*[^]*?\*\//g
function Tl(e) {
  const t = {}
  return (
    e
      .replace(I9, '')
      .split(R9)
      .forEach(r => {
        if (r) {
          const n = r.split(w9)
          n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
      }),
    t
  )
}
function L9(e) {
  let t = ''
  if (!e || Ee(e)) return t
  for (const r in e) {
    const n = e[r],
      E = r.startsWith('--') ? r : Ze(r)
    ;(Ee(n) || typeof n == 'number') && (t += `${E}:${n};`)
  }
  return t
}
function Zn(e) {
  let t = ''
  if (Ee(e)) t = e
  else if (z(e))
    for (let r = 0; r < e.length; r++) {
      const n = Zn(e[r])
      n && (t += n + ' ')
    }
  else if (ge(e)) for (const r in e) e[r] && (t += r + ' ')
  return t.trim()
}
function P9(e) {
  if (!e) return null
  let { class: t, style: r } = e
  return t && !Ee(t) && (e.class = Zn(t)), r && (e.style = Qn(r)), e
}
const O9 =
    'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot',
  V9 =
    'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view',
  x9 = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr',
  k9 = mt(O9),
  M9 = mt(V9),
  $9 = mt(x9),
  Rl =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  wl = mt(Rl),
  j9 = mt(
    Rl +
      ',async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected'
  )
function xa(e) {
  return !!e || e === ''
}
const N9 = /[>/="'\u0009\u000a\u000c\u0020]/,
  go = {}
function H9(e) {
  if (go.hasOwnProperty(e)) return go[e]
  const t = N9.test(e)
  return t && console.error(`unsafe attribute name: ${e}`), (go[e] = !t)
}
const J9 = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
  },
  z9 = mt(
    'accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap'
  ),
  U9 = mt(
    'xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan'
  ),
  q9 = /["'&<>]/
function W9(e) {
  const t = '' + e,
    r = q9.exec(t)
  if (!r) return t
  let n = '',
    E,
    o,
    a = 0
  for (o = r.index; o < t.length; o++) {
    switch (t.charCodeAt(o)) {
      case 34:
        E = '&quot;'
        break
      case 38:
        E = '&amp;'
        break
      case 39:
        E = '&#39;'
        break
      case 60:
        E = '&lt;'
        break
      case 62:
        E = '&gt;'
        break
      default:
        continue
    }
    a !== o && (n += t.slice(a, o)), (a = o + 1), (n += E)
  }
  return a !== o ? n + t.slice(a, o) : n
}
const K9 = /^-?>|<!--|-->|--!>|<!-$/g
function G9(e) {
  return e.replace(K9, '')
}
function X9(e, t) {
  if (e.length !== t.length) return !1
  let r = !0
  for (let n = 0; r && n < e.length; n++) r = Ut(e[n], t[n])
  return r
}
function Ut(e, t) {
  if (e === t) return !0
  let r = Wo(e),
    n = Wo(t)
  if (r || n) return r && n ? e.getTime() === t.getTime() : !1
  if (((r = Tr(e)), (n = Tr(t)), r || n)) return e === t
  if (((r = z(e)), (n = z(t)), r || n)) return r && n ? X9(e, t) : !1
  if (((r = ge(e)), (n = ge(t)), r || n)) {
    if (!r || !n) return !1
    const E = Object.keys(e).length,
      o = Object.keys(t).length
    if (E !== o) return !1
    for (const a in e) {
      const l = e.hasOwnProperty(a),
        s = t.hasOwnProperty(a)
      if ((l && !s) || (!l && s) || !Ut(e[a], t[a])) return !1
    }
  }
  return String(e) === String(t)
}
function eE(e, t) {
  return e.findIndex(r => Ut(r, t))
}
const Y9 = e =>
    Ee(e)
      ? e
      : e == null
      ? ''
      : z(e) || (ge(e) && (e.toString === Pa || !ne(e.toString)))
      ? JSON.stringify(e, Il, 2)
      : String(e),
  Il = (e, t) =>
    t && t.__v_isRef
      ? Il(e, t.value)
      : br(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (r, [n, E]) => ((r[`${n} =>`] = E), r),
            {}
          )
        }
      : vr(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ge(t) && !z(t) && !Oa(t)
      ? String(t)
      : t,
  gv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        EMPTY_ARR: Dr,
        EMPTY_OBJ: _e,
        NO: yl,
        NOOP: vt,
        PatchFlagNames: b9,
        camelize: Ue,
        capitalize: Bn,
        def: kn,
        escapeHtml: W9,
        escapeHtmlComment: G9,
        extend: Re,
        genPropsAccessExp: D9,
        generateCodeFrame: T9,
        getGlobalThis: kE,
        hasChanged: zt,
        hasOwn: Ae,
        hyphenate: Ze,
        includeBooleanAttr: xa,
        invokeArrayFns: yr,
        isArray: z,
        isBooleanAttr: j9,
        isBuiltInDirective: h9,
        isDate: Wo,
        isFunction: ne,
        isGloballyAllowed: Va,
        isGloballyWhitelisted: S9,
        isHTMLTag: k9,
        isIntegerKey: XE,
        isKnownHtmlAttr: z9,
        isKnownSvgAttr: U9,
        isMap: br,
        isModelListener: WE,
        isObject: ge,
        isOn: An,
        isPlainObject: Oa,
        isPromise: GE,
        isRegExp: Cl,
        isReservedProp: Kr,
        isSSRSafeAttrName: H9,
        isSVGTag: M9,
        isSet: vr,
        isSpecialBooleanAttr: wl,
        isString: Ee,
        isSymbol: Tr,
        isVoidTag: $9,
        looseEqual: Ut,
        looseIndexOf: eE,
        looseToNumber: Mn,
        makeMap: mt,
        normalizeClass: Zn,
        normalizeProps: P9,
        normalizeStyle: Qn,
        objectToString: Pa,
        parseStringStyle: Tl,
        propsToAttrMap: J9,
        remove: KE,
        slotFlagsText: y9,
        stringifyStyle: L9,
        toDisplayString: Y9,
        toHandlerKey: Rn,
        toNumber: $n,
        toRawType: Sl,
        toTypeString: Vr
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
let Et
class ka {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Et),
      !t && Et && (this.index = (Et.scopes || (Et.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const r = Et
      try {
        return (Et = this), t()
      } finally {
        Et = r
      }
    }
  }
  on() {
    Et = this
  }
  off() {
    Et = this.parent
  }
  stop(t) {
    if (this._active) {
      let r, n
      for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop()
      for (r = 0, n = this.cleanups.length; r < n; r++) this.cleanups[r]()
      if (this.scopes)
        for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0)
      if (!this.detached && this.parent && !t) {
        const E = this.parent.scopes.pop()
        E &&
          E !== this &&
          ((this.parent.scopes[this.index] = E), (E.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Q9(e) {
  return new ka(e)
}
function Ll(e, t = Et) {
  t && t.active && t.effects.push(e)
}
function Ma() {
  return Et
}
function Pl(e) {
  Et && Et.cleanups.push(e)
}
const $a = e => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  Ol = e => (e.w & ur) > 0,
  Vl = e => (e.n & ur) > 0,
  Z9 = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ur
  },
  e0 = e => {
    const { deps: t } = e
    if (t.length) {
      let r = 0
      for (let n = 0; n < t.length; n++) {
        const E = t[n]
        Ol(E) && !Vl(E) ? E.delete(e) : (t[r++] = E), (E.w &= ~ur), (E.n &= ~ur)
      }
      t.length = r
    }
  },
  ME = new WeakMap()
let Cn = 0,
  ur = 1
const Ko = 30
let gt
const lr = Symbol(''),
  Go = Symbol('')
class Rr {
  constructor(t, r = null, n) {
    ;(this.fn = t),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Ll(this, n)
  }
  run() {
    if (!this.active) return this.fn()
    let t = gt,
      r = Pt
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (
        (this.parent = gt),
        (gt = this),
        (Pt = !0),
        (ur = 1 << ++Cn),
        Cn <= Ko ? Z9(this) : z8(this),
        this.fn()
      )
    } finally {
      Cn <= Ko && e0(this),
        (ur = 1 << --Cn),
        (gt = this.parent),
        (Pt = r),
        (this.parent = void 0),
        this.deferStop && this.stop()
    }
  }
  stop() {
    gt === this
      ? (this.deferStop = !0)
      : this.active &&
        (z8(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function z8(e) {
  const { deps: t } = e
  if (t.length) {
    for (let r = 0; r < t.length; r++) t[r].delete(e)
    t.length = 0
  }
}
function t0(e, t) {
  e.effect instanceof Rr && (e = e.effect.fn)
  const r = new Rr(e)
  t && (Re(r, t), t.scope && Ll(r, t.scope)), (!t || !t.lazy) && r.run()
  const n = r.run.bind(r)
  return (n.effect = r), n
}
function r0(e) {
  e.effect.stop()
}
let Pt = !0
const ja = []
function xr() {
  ja.push(Pt), (Pt = !1)
}
function n0() {
  ja.push(Pt), (Pt = !0)
}
function kr() {
  const e = ja.pop()
  Pt = e === void 0 ? !0 : e
}
function Xe(e, t, r) {
  if (Pt && gt) {
    let n = ME.get(e)
    n || ME.set(e, (n = new Map()))
    let E = n.get(r)
    E || n.set(r, (E = $a())), xl(E)
  }
}
function xl(e, t) {
  let r = !1
  Cn <= Ko ? Vl(e) || ((e.n |= ur), (r = !Ol(e))) : (r = !e.has(gt)),
    r && (e.add(gt), gt.deps.push(e))
}
function Ot(e, t, r, n, E, o) {
  const a = ME.get(e)
  if (!a) return
  let l = []
  if (t === 'clear') l = [...a.values()]
  else if (r === 'length' && z(e)) {
    const s = Number(n)
    a.forEach((c, d) => {
      ;(d === 'length' || (!Tr(d) && d >= s)) && l.push(c)
    })
  } else
    switch ((r !== void 0 && l.push(a.get(r)), t)) {
      case 'add':
        z(e)
          ? XE(r) && l.push(a.get('length'))
          : (l.push(a.get(lr)), br(e) && l.push(a.get(Go)))
        break
      case 'delete':
        z(e) || (l.push(a.get(lr)), br(e) && l.push(a.get(Go)))
        break
      case 'set':
        br(e) && l.push(a.get(lr))
        break
    }
  if (l.length === 1) l[0] && Xo(l[0])
  else {
    const s = []
    for (const c of l) c && s.push(...c)
    Xo($a(s))
  }
}
function Xo(e, t) {
  const r = z(e) ? e : [...e]
  for (const n of r) n.computed && U8(n)
  for (const n of r) n.computed || U8(n)
}
function U8(e, t) {
  ;(e !== gt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
function E0(e, t) {
  var r
  return (r = ME.get(e)) == null ? void 0 : r.get(t)
}
const o0 = mt('__proto__,__v_isRef,__isVue'),
  kl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(e => e !== 'arguments' && e !== 'caller')
      .map(e => Symbol[e])
      .filter(Tr)
  ),
  q8 = a0()
function a0() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
      e[t] = function (...r) {
        const n = le(this)
        for (let o = 0, a = this.length; o < a; o++) Xe(n, 'get', o + '')
        const E = n[t](...r)
        return E === -1 || E === !1 ? n[t](...r.map(le)) : E
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
      e[t] = function (...r) {
        xr()
        const n = le(this)[t].apply(this, r)
        return kr(), n
      }
    }),
    e
  )
}
function i0(e) {
  const t = le(this)
  return Xe(t, 'has', e), t.hasOwnProperty(e)
}
class Ml {
  constructor(t = !1, r = !1) {
    ;(this._isReadonly = t), (this._shallow = r)
  }
  get(t, r, n) {
    const E = this._isReadonly,
      o = this._shallow
    if (r === '__v_isReactive') return !E
    if (r === '__v_isReadonly') return E
    if (r === '__v_isShallow') return o
    if (r === '__v_raw' && n === (E ? (o ? zl : Jl) : o ? Hl : Nl).get(t))
      return t
    const a = z(t)
    if (!E) {
      if (a && Ae(q8, r)) return Reflect.get(q8, r, n)
      if (r === 'hasOwnProperty') return i0
    }
    const l = Reflect.get(t, r, n)
    return (Tr(r) ? kl.has(r) : o0(r)) || (E || Xe(t, 'get', r), o)
      ? l
      : Ie(l)
      ? a && XE(r)
        ? l
        : l.value
      : ge(l)
      ? E
        ? Kt(l)
        : vn(l)
      : l
  }
}
class $l extends Ml {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, r, n, E) {
    let o = t[r]
    if (wr(o) && Ie(o) && !Ie(n)) return !1
    if (
      !this._shallow &&
      (!jn(n) && !wr(n) && ((o = le(o)), (n = le(n))), !z(t) && Ie(o) && !Ie(n))
    )
      return (o.value = n), !0
    const a = z(t) && XE(r) ? Number(r) < t.length : Ae(t, r),
      l = Reflect.set(t, r, n, E)
    return (
      t === le(E) && (a ? zt(n, o) && Ot(t, 'set', r, n) : Ot(t, 'add', r, n)),
      l
    )
  }
  deleteProperty(t, r) {
    const n = Ae(t, r)
    t[r]
    const E = Reflect.deleteProperty(t, r)
    return E && n && Ot(t, 'delete', r, void 0), E
  }
  has(t, r) {
    const n = Reflect.has(t, r)
    return (!Tr(r) || !kl.has(r)) && Xe(t, 'has', r), n
  }
  ownKeys(t) {
    return Xe(t, 'iterate', z(t) ? 'length' : lr), Reflect.ownKeys(t)
  }
}
class jl extends Ml {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, r) {
    return !0
  }
  deleteProperty(t, r) {
    return !0
  }
}
const l0 = new $l(),
  s0 = new jl(),
  c0 = new $l(!0),
  u0 = new jl(!0),
  Na = e => e,
  QE = e => Reflect.getPrototypeOf(e)
function vE(e, t, r = !1, n = !1) {
  e = e.__v_raw
  const E = le(e),
    o = le(t)
  r || (zt(t, o) && Xe(E, 'get', t), Xe(E, 'get', o))
  const { has: a } = QE(E),
    l = n ? Na : r ? Ua : Nn
  if (a.call(E, t)) return l(e.get(t))
  if (a.call(E, o)) return l(e.get(o))
  e !== E && e.get(t)
}
function pE(e, t = !1) {
  const r = this.__v_raw,
    n = le(r),
    E = le(e)
  return (
    t || (zt(e, E) && Xe(n, 'has', e), Xe(n, 'has', E)),
    e === E ? r.has(e) : r.has(e) || r.has(E)
  )
}
function fE(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Xe(le(e), 'iterate', lr), Reflect.get(e, 'size', e)
  )
}
function W8(e) {
  e = le(e)
  const t = le(this)
  return QE(t).has.call(t, e) || (t.add(e), Ot(t, 'add', e, e)), this
}
function K8(e, t) {
  t = le(t)
  const r = le(this),
    { has: n, get: E } = QE(r)
  let o = n.call(r, e)
  o || ((e = le(e)), (o = n.call(r, e)))
  const a = E.call(r, e)
  return (
    r.set(e, t), o ? zt(t, a) && Ot(r, 'set', e, t) : Ot(r, 'add', e, t), this
  )
}
function G8(e) {
  const t = le(this),
    { has: r, get: n } = QE(t)
  let E = r.call(t, e)
  E || ((e = le(e)), (E = r.call(t, e))), n && n.call(t, e)
  const o = t.delete(e)
  return E && Ot(t, 'delete', e, void 0), o
}
function X8() {
  const e = le(this),
    t = e.size !== 0,
    r = e.clear()
  return t && Ot(e, 'clear', void 0, void 0), r
}
function mE(e, t) {
  return function (n, E) {
    const o = this,
      a = o.__v_raw,
      l = le(a),
      s = t ? Na : e ? Ua : Nn
    return (
      !e && Xe(l, 'iterate', lr), a.forEach((c, d) => n.call(E, s(c), s(d), o))
    )
  }
}
function hE(e, t, r) {
  return function (...n) {
    const E = this.__v_raw,
      o = le(E),
      a = br(o),
      l = e === 'entries' || (e === Symbol.iterator && a),
      s = e === 'keys' && a,
      c = E[e](...n),
      d = r ? Na : t ? Ua : Nn
    return (
      !t && Xe(o, 'iterate', s ? Go : lr),
      {
        next() {
          const { value: A, done: B } = c.next()
          return B
            ? { value: A, done: B }
            : { value: l ? [d(A[0]), d(A[1])] : d(A), done: B }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Qt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function d0() {
  const e = {
      get(o) {
        return vE(this, o)
      },
      get size() {
        return fE(this)
      },
      has: pE,
      add: W8,
      set: K8,
      delete: G8,
      clear: X8,
      forEach: mE(!1, !1)
    },
    t = {
      get(o) {
        return vE(this, o, !1, !0)
      },
      get size() {
        return fE(this)
      },
      has: pE,
      add: W8,
      set: K8,
      delete: G8,
      clear: X8,
      forEach: mE(!1, !0)
    },
    r = {
      get(o) {
        return vE(this, o, !0)
      },
      get size() {
        return fE(this, !0)
      },
      has(o) {
        return pE.call(this, o, !0)
      },
      add: Qt('add'),
      set: Qt('set'),
      delete: Qt('delete'),
      clear: Qt('clear'),
      forEach: mE(!0, !1)
    },
    n = {
      get(o) {
        return vE(this, o, !0, !0)
      },
      get size() {
        return fE(this, !0)
      },
      has(o) {
        return pE.call(this, o, !0)
      },
      add: Qt('add'),
      set: Qt('set'),
      delete: Qt('delete'),
      clear: Qt('clear'),
      forEach: mE(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach(o => {
      ;(e[o] = hE(o, !1, !1)),
        (r[o] = hE(o, !0, !1)),
        (t[o] = hE(o, !1, !0)),
        (n[o] = hE(o, !0, !0))
    }),
    [e, r, t, n]
  )
}
const [A0, B0, v0, p0] = d0()
function ZE(e, t) {
  const r = t ? (e ? p0 : v0) : e ? B0 : A0
  return (n, E, o) =>
    E === '__v_isReactive'
      ? !e
      : E === '__v_isReadonly'
      ? e
      : E === '__v_raw'
      ? n
      : Reflect.get(Ae(r, E) && E in n ? r : n, E, o)
}
const f0 = { get: ZE(!1, !1) },
  m0 = { get: ZE(!1, !0) },
  h0 = { get: ZE(!0, !1) },
  _0 = { get: ZE(!0, !0) },
  Nl = new WeakMap(),
  Hl = new WeakMap(),
  Jl = new WeakMap(),
  zl = new WeakMap()
function g0(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function F0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : g0(Sl(e))
}
function vn(e) {
  return wr(e) ? e : eo(e, !1, l0, f0, Nl)
}
function Ha(e) {
  return eo(e, !1, c0, m0, Hl)
}
function Kt(e) {
  return eo(e, !0, s0, h0, Jl)
}
function D0(e) {
  return eo(e, !0, u0, _0, zl)
}
function eo(e, t, r, n, E) {
  if (!ge(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = E.get(e)
  if (o) return o
  const a = F0(e)
  if (a === 0) return e
  const l = new Proxy(e, a === 2 ? n : r)
  return E.set(e, l), l
}
function Cr(e) {
  return wr(e) ? Cr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function wr(e) {
  return !!(e && e.__v_isReadonly)
}
function jn(e) {
  return !!(e && e.__v_isShallow)
}
function Ja(e) {
  return Cr(e) || wr(e)
}
function le(e) {
  const t = e && e.__v_raw
  return t ? le(t) : e
}
function za(e) {
  return kn(e, '__v_skip', !0), e
}
const Nn = e => (ge(e) ? vn(e) : e),
  Ua = e => (ge(e) ? Kt(e) : e)
function to(e) {
  Pt && gt && ((e = le(e)), xl(e.dep || (e.dep = $a())))
}
function tE(e, t) {
  e = le(e)
  const r = e.dep
  r && Xo(r)
}
function Ie(e) {
  return !!(e && e.__v_isRef === !0)
}
function U(e) {
  return Ul(e, !1)
}
function je(e) {
  return Ul(e, !0)
}
function Ul(e, t) {
  return Ie(e) ? e : new b0(e, t)
}
class b0 {
  constructor(t, r) {
    ;(this.__v_isShallow = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = r ? t : le(t)),
      (this._value = r ? t : Nn(t))
  }
  get value() {
    return to(this), this._value
  }
  set value(t) {
    const r = this.__v_isShallow || jn(t) || wr(t)
    ;(t = r ? t : le(t)),
      zt(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = r ? t : Nn(t)), tE(this))
  }
}
function y0(e) {
  tE(e)
}
function at(e) {
  return Ie(e) ? e.value : e
}
function C0(e) {
  return ne(e) ? e() : at(e)
}
const S0 = {
  get: (e, t, r) => at(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const E = e[t]
    return Ie(E) && !Ie(r) ? ((E.value = r), !0) : Reflect.set(e, t, r, n)
  }
}
function qa(e) {
  return Cr(e) ? e : new Proxy(e, S0)
}
class T0 {
  constructor(t) {
    ;(this.dep = void 0), (this.__v_isRef = !0)
    const { get: r, set: n } = t(
      () => to(this),
      () => tE(this)
    )
    ;(this._get = r), (this._set = n)
  }
  get value() {
    return this._get()
  }
  set value(t) {
    this._set(t)
  }
}
function ql(e) {
  return new T0(e)
}
function R0(e) {
  const t = z(e) ? new Array(e.length) : {}
  for (const r in e) t[r] = Wl(e, r)
  return t
}
class w0 {
  constructor(t, r, n) {
    ;(this._object = t),
      (this._key = r),
      (this._defaultValue = n),
      (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return E0(le(this._object), this._key)
  }
}
class I0 {
  constructor(t) {
    ;(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0)
  }
  get value() {
    return this._getter()
  }
}
function Mr(e, t, r) {
  return Ie(e)
    ? e
    : ne(e)
    ? new I0(e)
    : ge(e) && arguments.length > 1
    ? Wl(e, t, r)
    : U(e)
}
function Wl(e, t, r) {
  const n = e[t]
  return Ie(n) ? n : new w0(e, t, r)
}
class L0 {
  constructor(t, r, n, E) {
    ;(this._setter = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new Rr(t, () => {
        this._dirty || ((this._dirty = !0), tE(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !E),
      (this.__v_isReadonly = n)
  }
  get value() {
    const t = le(this)
    return (
      to(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
function Kl(e, t, r = !1) {
  let n, E
  const o = ne(e)
  return (
    o ? ((n = e), (E = vt)) : ((n = e.get), (E = e.set)),
    new L0(n, E, o || !E, r)
  )
}
const P0 = Promise.resolve(),
  OE = []
let Yo = !1
const O0 = e => {
    OE.push(e), Yo || ((Yo = !0), P0.then(V0))
  },
  V0 = () => {
    for (let e = 0; e < OE.length; e++) OE[e]()
    ;(OE.length = 0), (Yo = !1)
  }
class Wa {
  constructor(t) {
    ;(this.dep = void 0),
      (this._dirty = !0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0)
    let r,
      n = !1,
      E = !1
    ;(this.effect = new Rr(t, o => {
      if (this.dep) {
        if (o) (r = this._value), (n = !0)
        else if (!E) {
          const a = n ? r : this._value
          ;(E = !0),
            (n = !1),
            O0(() => {
              this.effect.active && this._get() !== a && tE(this), (E = !1)
            })
        }
        for (const a of this.dep) a.computed instanceof Wa && a.scheduler(!0)
      }
      this._dirty = !0
    })),
      (this.effect.computed = this)
  }
  _get() {
    return this._dirty
      ? ((this._dirty = !1), (this._value = this.effect.run()))
      : this._value
  }
  get value() {
    return to(this), le(this)._get()
  }
}
function x0(e) {
  return new Wa(e)
}
const Fv = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      EffectScope: ka,
      ITERATE_KEY: lr,
      ReactiveEffect: Rr,
      computed: Kl,
      customRef: ql,
      deferredComputed: x0,
      effect: t0,
      effectScope: Q9,
      enableTracking: n0,
      getCurrentScope: Ma,
      isProxy: Ja,
      isReactive: Cr,
      isReadonly: wr,
      isRef: Ie,
      isShallow: jn,
      markRaw: za,
      onScopeDispose: Pl,
      pauseTracking: xr,
      proxyRefs: qa,
      reactive: vn,
      readonly: Kt,
      ref: U,
      resetTracking: kr,
      shallowReactive: Ha,
      shallowReadonly: D0,
      shallowRef: je,
      stop: r0,
      toRaw: le,
      toRef: Mr,
      toRefs: R0,
      toValue: C0,
      track: Xe,
      trigger: Ot,
      triggerRef: y0,
      unref: at
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)
function Dv(e, ...t) {}
function bv(e, t) {}
function sr(e, t, r, n) {
  let E
  try {
    E = n ? e(...n) : e()
  } catch (o) {
    pn(o, t, r)
  }
  return E
}
function pt(e, t, r, n) {
  if (ne(e)) {
    const o = sr(e, t, r, n)
    return (
      o &&
        GE(o) &&
        o.catch(a => {
          pn(a, t, r)
        }),
      o
    )
  }
  const E = []
  for (let o = 0; o < e.length; o++) E.push(pt(e[o], t, r, n))
  return E
}
function pn(e, t, r, n = !0) {
  const E = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const a = t.proxy,
      l = r
    for (; o; ) {
      const c = o.ec
      if (c) {
        for (let d = 0; d < c.length; d++) if (c[d](e, a, l) === !1) return
      }
      o = o.parent
    }
    const s = t.appContext.config.errorHandler
    if (s) {
      sr(s, null, 10, [e, a, l])
      return
    }
  }
  k0(e, r, E, n)
}
function k0(e, t, r, n = !0) {
  console.error(e)
}
let Hn = !1,
  Qo = !1
const ze = []
let Lt = 0
const Gr = []
let Nt = null,
  _r = 0
const Gl = Promise.resolve()
let Ka = null
function Gt(e) {
  const t = Ka || Gl
  return e ? t.then(this ? e.bind(this) : e) : t
}
function M0(e) {
  let t = Lt + 1,
    r = ze.length
  for (; t < r; ) {
    const n = (t + r) >>> 1,
      E = ze[n],
      o = Jn(E)
    o < e || (o === e && E.pre) ? (t = n + 1) : (r = n)
  }
  return t
}
function ro(e) {
  ;(!ze.length || !ze.includes(e, Hn && e.allowRecurse ? Lt + 1 : Lt)) &&
    (e.id == null ? ze.push(e) : ze.splice(M0(e.id), 0, e), Xl())
}
function Xl() {
  !Hn && !Qo && ((Qo = !0), (Ka = Gl.then(Yl)))
}
function $0(e) {
  const t = ze.indexOf(e)
  t > Lt && ze.splice(t, 1)
}
function Zo(e) {
  z(e)
    ? Gr.push(...e)
    : (!Nt || !Nt.includes(e, e.allowRecurse ? _r + 1 : _r)) && Gr.push(e),
    Xl()
}
function Y8(e, t = Hn ? Lt + 1 : 0) {
  for (; t < ze.length; t++) {
    const r = ze[t]
    r && r.pre && (ze.splice(t, 1), t--, r())
  }
}
function $E(e) {
  if (Gr.length) {
    const t = [...new Set(Gr)]
    if (((Gr.length = 0), Nt)) {
      Nt.push(...t)
      return
    }
    for (Nt = t, Nt.sort((r, n) => Jn(r) - Jn(n)), _r = 0; _r < Nt.length; _r++)
      Nt[_r]()
    ;(Nt = null), (_r = 0)
  }
}
const Jn = e => (e.id == null ? 1 / 0 : e.id),
  j0 = (e, t) => {
    const r = Jn(e) - Jn(t)
    if (r === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return r
  }
function Yl(e) {
  ;(Qo = !1), (Hn = !0), ze.sort(j0)
  const t = vt
  try {
    for (Lt = 0; Lt < ze.length; Lt++) {
      const r = ze[Lt]
      r && r.active !== !1 && sr(r, null, 14)
    }
  } finally {
    ;(Lt = 0),
      (ze.length = 0),
      $E(),
      (Hn = !1),
      (Ka = null),
      (ze.length || Gr.length) && Yl()
  }
}
let Fn,
  _E = []
function N0(e, t) {
  var r, n
  ;(Fn = e),
    Fn
      ? ((Fn.enabled = !0),
        _E.forEach(({ event: E, args: o }) => Fn.emit(E, ...o)),
        (_E = []))
      : typeof window < 'u' &&
        window.HTMLElement &&
        !(
          (n = (r = window.navigator) == null ? void 0 : r.userAgent) != null &&
          n.includes('jsdom')
        )
      ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ =
          t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push(o => {
          N0(o, t)
        }),
        setTimeout(() => {
          Fn || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (_E = []))
        }, 3e3))
      : (_E = [])
}
function H0(e, t, ...r) {
  if (e.isUnmounted) return
  const n = e.vnode.props || _e
  let E = r
  const o = t.startsWith('update:'),
    a = o && t.slice(7)
  if (a && a in n) {
    const d = `${a === 'modelValue' ? 'model' : a}Modifiers`,
      { number: A, trim: B } = n[d] || _e
    B && (E = r.map(p => (Ee(p) ? p.trim() : p))), A && (E = r.map(Mn))
  }
  let l,
    s = n[(l = Rn(t))] || n[(l = Rn(Ue(t)))]
  !s && o && (s = n[(l = Rn(Ze(t)))]), s && pt(s, e, 6, E)
  const c = n[l + 'Once']
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), pt(c, e, 6, E)
  }
}
function Ql(e, t, r = !1) {
  const n = t.emitsCache,
    E = n.get(e)
  if (E !== void 0) return E
  const o = e.emits
  let a = {},
    l = !1
  if (!ne(e)) {
    const s = c => {
      const d = Ql(c, t, !0)
      d && ((l = !0), Re(a, d))
    }
    !r && t.mixins.length && t.mixins.forEach(s),
      e.extends && s(e.extends),
      e.mixins && e.mixins.forEach(s)
  }
  return !o && !l
    ? (ge(e) && n.set(e, null), null)
    : (z(o) ? o.forEach(s => (a[s] = null)) : Re(a, o), ge(e) && n.set(e, a), a)
}
function no(e, t) {
  return !e || !An(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Ae(e, t[0].toLowerCase() + t.slice(1)) || Ae(e, Ze(t)) || Ae(e, t))
}
let Me = null,
  Eo = null
function zn(e) {
  const t = Me
  return (Me = e), (Eo = (e && e.type.__scopeId) || null), t
}
function yv(e) {
  Eo = e
}
function Cv() {
  Eo = null
}
const Sv = e => Zl
function Zl(e, t = Me, r) {
  if (!t || e._n) return e
  const n = (...E) => {
    n._d && ci(-1)
    const o = zn(t)
    let a
    try {
      a = e(...E)
    } finally {
      zn(o), n._d && ci(1)
    }
    return a
  }
  return (n._n = !0), (n._c = !0), (n._d = !0), n
}
function VE(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: E,
    props: o,
    propsOptions: [a],
    slots: l,
    attrs: s,
    emit: c,
    render: d,
    renderCache: A,
    data: B,
    setupState: p,
    ctx: f,
    inheritAttrs: F
  } = e
  let S, D
  const b = zn(e)
  try {
    if (r.shapeFlag & 4) {
      const _ = E || n
      ;(S = ot(d.call(_, _, A, o, p, B, f))), (D = s)
    } else {
      const _ = t
      ;(S = ot(
        _.length > 1 ? _(o, { attrs: s, slots: l, emit: c }) : _(o, null)
      )),
        (D = t.props ? s : z0(s))
    }
  } catch (_) {
    ;(Ln.length = 0), pn(_, e, 1), (S = we(Ge))
  }
  let g = S
  if (D && F !== !1) {
    const _ = Object.keys(D),
      { shapeFlag: w } = g
    _.length && w & 7 && (a && _.some(WE) && (D = U0(D, a)), (g = qt(g, D)))
  }
  return (
    r.dirs && ((g = qt(g)), (g.dirs = g.dirs ? g.dirs.concat(r.dirs) : r.dirs)),
    r.transition && (g.transition = r.transition),
    (S = g),
    zn(b),
    S
  )
}
function J0(e) {
  let t
  for (let r = 0; r < e.length; r++) {
    const n = e[r]
    if (Lr(n)) {
      if (n.type !== Ge || n.children === 'v-if') {
        if (t) return
        t = n
      }
    } else return
  }
  return t
}
const z0 = e => {
    let t
    for (const r in e)
      (r === 'class' || r === 'style' || An(r)) && ((t || (t = {}))[r] = e[r])
    return t
  },
  U0 = (e, t) => {
    const r = {}
    for (const n in e) (!WE(n) || !(n.slice(9) in t)) && (r[n] = e[n])
    return r
  }
function q0(e, t, r) {
  const { props: n, children: E, component: o } = e,
    { props: a, children: l, patchFlag: s } = t,
    c = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (r && s >= 0) {
    if (s & 1024) return !0
    if (s & 16) return n ? Q8(n, a, c) : !!a
    if (s & 8) {
      const d = t.dynamicProps
      for (let A = 0; A < d.length; A++) {
        const B = d[A]
        if (a[B] !== n[B] && !no(c, B)) return !0
      }
    }
  } else
    return (E || l) && (!l || !l.$stable)
      ? !0
      : n === a
      ? !1
      : n
      ? a
        ? Q8(n, a, c)
        : !0
      : !!a
  return !1
}
function Q8(e, t, r) {
  const n = Object.keys(t)
  if (n.length !== Object.keys(e).length) return !0
  for (let E = 0; E < n.length; E++) {
    const o = n[E]
    if (t[o] !== e[o] && !no(r, o)) return !0
  }
  return !1
}
function Ga({ vnode: e, parent: t }, r) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = r), (t = t.parent)
}
const es = e => e.__isSuspense,
  W0 = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, r, n, E, o, a, l, s, c) {
      e == null ? K0(t, r, n, E, o, a, l, s, c) : G0(e, t, r, n, E, a, l, s, c)
    },
    hydrate: X0,
    create: Xa,
    normalize: Y0
  },
  Tv = W0
function Un(e, t) {
  const r = e.props && e.props[t]
  ne(r) && r()
}
function K0(e, t, r, n, E, o, a, l, s) {
  const {
      p: c,
      o: { createElement: d }
    } = s,
    A = d('div'),
    B = (e.suspense = Xa(e, E, n, t, A, r, o, a, l, s))
  c(null, (B.pendingBranch = e.ssContent), A, null, n, B, o, a),
    B.deps > 0
      ? (Un(e, 'onPending'),
        Un(e, 'onFallback'),
        c(null, e.ssFallback, t, r, n, null, o, a),
        Xr(B, e.ssFallback))
      : B.resolve(!1, !0)
}
function G0(e, t, r, n, E, o, a, l, { p: s, um: c, o: { createElement: d } }) {
  const A = (t.suspense = e.suspense)
  ;(A.vnode = t), (t.el = e.el)
  const B = t.ssContent,
    p = t.ssFallback,
    { activeBranch: f, pendingBranch: F, isInFallback: S, isHydrating: D } = A
  if (F)
    (A.pendingBranch = B),
      Ft(B, F)
        ? (s(F, B, A.hiddenContainer, null, E, A, o, a, l),
          A.deps <= 0
            ? A.resolve()
            : S && (s(f, p, r, n, E, null, o, a, l), Xr(A, p)))
        : (A.pendingId++,
          D ? ((A.isHydrating = !1), (A.activeBranch = F)) : c(F, E, A),
          (A.deps = 0),
          (A.effects.length = 0),
          (A.hiddenContainer = d('div')),
          S
            ? (s(null, B, A.hiddenContainer, null, E, A, o, a, l),
              A.deps <= 0
                ? A.resolve()
                : (s(f, p, r, n, E, null, o, a, l), Xr(A, p)))
            : f && Ft(B, f)
            ? (s(f, B, r, n, E, A, o, a, l), A.resolve(!0))
            : (s(null, B, A.hiddenContainer, null, E, A, o, a, l),
              A.deps <= 0 && A.resolve()))
  else if (f && Ft(B, f)) s(f, B, r, n, E, A, o, a, l), Xr(A, B)
  else if (
    (Un(t, 'onPending'),
    (A.pendingBranch = B),
    A.pendingId++,
    s(null, B, A.hiddenContainer, null, E, A, o, a, l),
    A.deps <= 0)
  )
    A.resolve()
  else {
    const { timeout: b, pendingId: g } = A
    b > 0
      ? setTimeout(() => {
          A.pendingId === g && A.fallback(p)
        }, b)
      : b === 0 && A.fallback(p)
  }
}
function Xa(e, t, r, n, E, o, a, l, s, c, d = !1) {
  const {
    p: A,
    m: B,
    um: p,
    n: f,
    o: { parentNode: F, remove: S }
  } = c
  let D
  const b = Q0(e)
  b && t != null && t.pendingBranch && ((D = t.pendingId), t.deps++)
  const g = e.props ? $n(e.props.timeout) : void 0,
    _ = {
      vnode: e,
      parent: t,
      parentComponent: r,
      isSVG: a,
      container: n,
      hiddenContainer: E,
      anchor: o,
      deps: 0,
      pendingId: 0,
      timeout: typeof g == 'number' ? g : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: d,
      isUnmounted: !1,
      effects: [],
      resolve(w = !1, R = !1) {
        const {
          vnode: P,
          activeBranch: T,
          pendingBranch: x,
          pendingId: $,
          effects: K,
          parentComponent: N,
          container: Z
        } = _
        let De = !1
        if (_.isHydrating) _.isHydrating = !1
        else if (!w) {
          ;(De = T && x.transition && x.transition.mode === 'out-in'),
            De &&
              (T.transition.afterLeave = () => {
                $ === _.pendingId && (B(x, Z, re, 0), Zo(K))
              })
          let { anchor: re } = _
          T && ((re = f(T)), p(T, N, _, !0)), De || B(x, Z, re, 0)
        }
        Xr(_, x), (_.pendingBranch = null), (_.isInFallback = !1)
        let fe = _.parent,
          G = !1
        for (; fe; ) {
          if (fe.pendingBranch) {
            fe.effects.push(...K), (G = !0)
            break
          }
          fe = fe.parent
        }
        !G && !De && Zo(K),
          (_.effects = []),
          b &&
            t &&
            t.pendingBranch &&
            D === t.pendingId &&
            (t.deps--, t.deps === 0 && !R && t.resolve()),
          Un(P, 'onResolve')
      },
      fallback(w) {
        if (!_.pendingBranch) return
        const {
          vnode: R,
          activeBranch: P,
          parentComponent: T,
          container: x,
          isSVG: $
        } = _
        Un(R, 'onFallback')
        const K = f(P),
          N = () => {
            _.isInFallback && (A(null, w, x, K, T, null, $, l, s), Xr(_, w))
          },
          Z = w.transition && w.transition.mode === 'out-in'
        Z && (P.transition.afterLeave = N),
          (_.isInFallback = !0),
          p(P, T, null, !0),
          Z || N()
      },
      move(w, R, P) {
        _.activeBranch && B(_.activeBranch, w, R, P), (_.container = w)
      },
      next() {
        return _.activeBranch && f(_.activeBranch)
      },
      registerDep(w, R) {
        const P = !!_.pendingBranch
        P && _.deps++
        const T = w.vnode.el
        w.asyncDep
          .catch(x => {
            pn(x, w, 0)
          })
          .then(x => {
            if (w.isUnmounted || _.isUnmounted || _.pendingId !== w.suspenseId)
              return
            w.asyncResolved = !0
            const { vnode: $ } = w
            aa(w, x, !1), T && ($.el = T)
            const K = !T && w.subTree.el
            R(w, $, F(T || w.subTree.el), T ? null : f(w.subTree), _, a, s),
              K && S(K),
              Ga(w, $.el),
              P && --_.deps === 0 && _.resolve()
          })
      },
      unmount(w, R) {
        ;(_.isUnmounted = !0),
          _.activeBranch && p(_.activeBranch, r, w, R),
          _.pendingBranch && p(_.pendingBranch, r, w, R)
      }
    }
  return _
}
function X0(e, t, r, n, E, o, a, l, s) {
  const c = (t.suspense = Xa(
      t,
      n,
      r,
      e.parentNode,
      document.createElement('div'),
      null,
      E,
      o,
      a,
      l,
      !0
    )),
    d = s(e, (c.pendingBranch = t.ssContent), r, c, o, a)
  return c.deps === 0 && c.resolve(!1, !0), d
}
function Y0(e) {
  const { shapeFlag: t, children: r } = e,
    n = t & 32
  ;(e.ssContent = Z8(n ? r.default : r)),
    (e.ssFallback = n ? Z8(r.fallback) : we(Ge))
}
function Z8(e) {
  let t
  if (ne(e)) {
    const r = Ir && e._c
    r && ((e._d = !1), E8()), (e = e()), r && ((e._d = !0), (t = et), _s())
  }
  return (
    z(e) && (e = J0(e)),
    (e = ot(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(r => r !== e)),
    e
  )
}
function ts(e, t) {
  t && t.pendingBranch
    ? z(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Zo(e)
}
function Xr(e, t) {
  e.activeBranch = t
  const { vnode: r, parentComponent: n } = e,
    E = (r.el = t.el)
  n && n.subTree === r && ((n.vnode.el = E), Ga(n, E))
}
function Q0(e) {
  var t
  return (
    ((t = e.props) == null ? void 0 : t.suspensible) != null &&
    e.props.suspensible !== !1
  )
}
function Z0(e, t) {
  return rE(e, null, t)
}
function eu(e, t) {
  return rE(e, null, { flush: 'post' })
}
function Rv(e, t) {
  return rE(e, null, { flush: 'sync' })
}
const gE = {}
function ae(e, t, r) {
  return rE(e, t, r)
}
function rE(
  e,
  t,
  { immediate: r, deep: n, flush: E, onTrack: o, onTrigger: a } = _e
) {
  var l
  const s = Ma() === ((l = Ve) == null ? void 0 : l.scope) ? Ve : null
  let c,
    d = !1,
    A = !1
  if (
    (Ie(e)
      ? ((c = () => e.value), (d = jn(e)))
      : Cr(e)
      ? ((c = () => e), (n = !0))
      : z(e)
      ? ((A = !0),
        (d = e.some(_ => Cr(_) || jn(_))),
        (c = () =>
          e.map(_ => {
            if (Ie(_)) return _.value
            if (Cr(_)) return Fr(_)
            if (ne(_)) return sr(_, s, 2)
          })))
      : ne(e)
      ? t
        ? (c = () => sr(e, s, 2))
        : (c = () => {
            if (!(s && s.isUnmounted)) return B && B(), pt(e, s, 3, [p])
          })
      : (c = vt),
    t && n)
  ) {
    const _ = c
    c = () => Fr(_())
  }
  let B,
    p = _ => {
      B = b.onStop = () => {
        sr(_, s, 4)
      }
    },
    f
  if (En)
    if (
      ((p = vt),
      t ? r && pt(t, s, 3, [c(), A ? [] : void 0, p]) : c(),
      E === 'sync')
    ) {
      const _ = zu()
      f = _.__watcherHandles || (_.__watcherHandles = [])
    } else return vt
  let F = A ? new Array(e.length).fill(gE) : gE
  const S = () => {
    if (b.active)
      if (t) {
        const _ = b.run()
        ;(n || d || (A ? _.some((w, R) => zt(w, F[R])) : zt(_, F))) &&
          (B && B(),
          pt(t, s, 3, [_, F === gE ? void 0 : A && F[0] === gE ? [] : F, p]),
          (F = _))
      } else b.run()
  }
  S.allowRecurse = !!t
  let D
  E === 'sync'
    ? (D = S)
    : E === 'post'
    ? (D = () => He(S, s && s.suspense))
    : ((S.pre = !0), s && (S.id = s.uid), (D = () => ro(S)))
  const b = new Rr(c, D)
  t
    ? r
      ? S()
      : (F = b.run())
    : E === 'post'
    ? He(b.run.bind(b), s && s.suspense)
    : b.run()
  const g = () => {
    b.stop(), s && s.scope && KE(s.scope.effects, b)
  }
  return f && f.push(g), g
}
function tu(e, t, r) {
  const n = this.proxy,
    E = Ee(e) ? (e.includes('.') ? rs(n, e) : () => n[e]) : e.bind(n, n)
  let o
  ne(t) ? (o = t) : ((o = t.handler), (r = t))
  const a = Ve
  dr(this)
  const l = rE(E, o.bind(n), r)
  return a ? dr(a) : cr(), l
}
function rs(e, t) {
  const r = t.split('.')
  return () => {
    let n = e
    for (let E = 0; E < r.length && n; E++) n = n[r[E]]
    return n
  }
}
function Fr(e, t) {
  if (!ge(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), Ie(e))) Fr(e.value, t)
  else if (z(e)) for (let r = 0; r < e.length; r++) Fr(e[r], t)
  else if (vr(e) || br(e))
    e.forEach(r => {
      Fr(r, t)
    })
  else if (Oa(e)) for (const r in e) Fr(e[r], t)
  return e
}
function wv(e, t) {
  const r = Me
  if (r === null) return e
  const n = lo(r) || r.proxy,
    E = e.dirs || (e.dirs = [])
  for (let o = 0; o < t.length; o++) {
    let [a, l, s, c = _e] = t[o]
    a &&
      (ne(a) && (a = { mounted: a, updated: a }),
      a.deep && Fr(l),
      E.push({
        dir: a,
        instance: n,
        value: l,
        oldValue: void 0,
        arg: s,
        modifiers: c
      }))
  }
  return e
}
function It(e, t, r, n) {
  const E = e.dirs,
    o = t && t.dirs
  for (let a = 0; a < E.length; a++) {
    const l = E[a]
    o && (l.oldValue = o[a].value)
    let s = l.dir[n]
    s && (xr(), pt(s, r, 8, [e.el, l, e, t]), kr())
  }
}
const Er = Symbol('_leaveCb'),
  FE = Symbol('_enterCb')
function ns() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map()
  }
  return (
    se(() => {
      e.isMounted = !0
    }),
    ao(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const At = [Function, Array],
  Es = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: At,
    onEnter: At,
    onAfterEnter: At,
    onEnterCancelled: At,
    onBeforeLeave: At,
    onLeave: At,
    onAfterLeave: At,
    onLeaveCancelled: At,
    onBeforeAppear: At,
    onAppear: At,
    onAfterAppear: At,
    onAppearCancelled: At
  },
  ru = {
    name: 'BaseTransition',
    props: Es,
    setup(e, { slots: t }) {
      const r = ct(),
        n = ns()
      let E
      return () => {
        const o = t.default && Ya(t.default(), !0)
        if (!o || !o.length) return
        let a = o[0]
        if (o.length > 1) {
          for (const F of o)
            if (F.type !== Ge) {
              a = F
              break
            }
        }
        const l = le(e),
          { mode: s } = l
        if (n.isLeaving) return Fo(a)
        const c = ei(a)
        if (!c) return Fo(a)
        const d = qn(c, l, n, r)
        rn(c, d)
        const A = r.subTree,
          B = A && ei(A)
        let p = !1
        const { getTransitionKey: f } = c.type
        if (f) {
          const F = f()
          E === void 0 ? (E = F) : F !== E && ((E = F), (p = !0))
        }
        if (B && B.type !== Ge && (!Ft(c, B) || p)) {
          const F = qn(B, l, n, r)
          if ((rn(B, F), s === 'out-in'))
            return (
              (n.isLeaving = !0),
              (F.afterLeave = () => {
                ;(n.isLeaving = !1), r.update.active !== !1 && r.update()
              }),
              Fo(a)
            )
          s === 'in-out' &&
            c.type !== Ge &&
            (F.delayLeave = (S, D, b) => {
              const g = os(n, B)
              ;(g[String(B.key)] = B),
                (S[Er] = () => {
                  D(), (S[Er] = void 0), delete d.delayedLeave
                }),
                (d.delayedLeave = b)
            })
        }
        return a
      }
    }
  },
  nu = ru
function os(e, t) {
  const { leavingVNodes: r } = e
  let n = r.get(t.type)
  return n || ((n = Object.create(null)), r.set(t.type, n)), n
}
function qn(e, t, r, n) {
  const {
      appear: E,
      mode: o,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: s,
      onAfterEnter: c,
      onEnterCancelled: d,
      onBeforeLeave: A,
      onLeave: B,
      onAfterLeave: p,
      onLeaveCancelled: f,
      onBeforeAppear: F,
      onAppear: S,
      onAfterAppear: D,
      onAppearCancelled: b
    } = t,
    g = String(e.key),
    _ = os(r, e),
    w = (T, x) => {
      T && pt(T, n, 9, x)
    },
    R = (T, x) => {
      const $ = x[1]
      w(T, x), z(T) ? T.every(K => K.length <= 1) && $() : T.length <= 1 && $()
    },
    P = {
      mode: o,
      persisted: a,
      beforeEnter(T) {
        let x = l
        if (!r.isMounted)
          if (E) x = F || l
          else return
        T[Er] && T[Er](!0)
        const $ = _[g]
        $ && Ft(e, $) && $.el[Er] && $.el[Er](), w(x, [T])
      },
      enter(T) {
        let x = s,
          $ = c,
          K = d
        if (!r.isMounted)
          if (E) (x = S || s), ($ = D || c), (K = b || d)
          else return
        let N = !1
        const Z = (T[FE] = De => {
          N ||
            ((N = !0),
            De ? w(K, [T]) : w($, [T]),
            P.delayedLeave && P.delayedLeave(),
            (T[FE] = void 0))
        })
        x ? R(x, [T, Z]) : Z()
      },
      leave(T, x) {
        const $ = String(e.key)
        if ((T[FE] && T[FE](!0), r.isUnmounting)) return x()
        w(A, [T])
        let K = !1
        const N = (T[Er] = Z => {
          K ||
            ((K = !0),
            x(),
            Z ? w(f, [T]) : w(p, [T]),
            (T[Er] = void 0),
            _[$] === e && delete _[$])
        })
        ;(_[$] = e), B ? R(B, [T, N]) : N()
      },
      clone(T) {
        return qn(T, t, r, n)
      }
    }
  return P
}
function Fo(e) {
  if (nE(e)) return (e = qt(e)), (e.children = null), e
}
function ei(e) {
  return nE(e) ? (e.children ? e.children[0] : void 0) : e
}
function rn(e, t) {
  e.shapeFlag & 6 && e.component
    ? rn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function Ya(e, t = !1, r) {
  let n = [],
    E = 0
  for (let o = 0; o < e.length; o++) {
    let a = e[o]
    const l = r == null ? a.key : String(r) + String(a.key != null ? a.key : o)
    a.type === Je
      ? (a.patchFlag & 128 && E++, (n = n.concat(Ya(a.children, t, l))))
      : (t || a.type !== Ge) && n.push(l != null ? qt(a, { key: l }) : a)
  }
  if (E > 1) for (let o = 0; o < n.length; o++) n[o].patchFlag = -2
  return n
}
/*! #__NO_SIDE_EFFECTS__ */ function M(e, t) {
  return ne(e) ? (() => Re({ name: e.name }, t, { setup: e }))() : e
}
const Sr = e => !!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */ function v(e) {
  ne(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: r,
    errorComponent: n,
    delay: E = 200,
    timeout: o,
    suspensible: a = !0,
    onError: l
  } = e
  let s = null,
    c,
    d = 0
  const A = () => (d++, (s = null), B()),
    B = () => {
      let p
      return (
        s ||
        (p = s =
          t()
            .catch(f => {
              if (((f = f instanceof Error ? f : new Error(String(f))), l))
                return new Promise((F, S) => {
                  l(
                    f,
                    () => F(A()),
                    () => S(f),
                    d + 1
                  )
                })
              throw f
            })
            .then(f =>
              p !== s && s
                ? s
                : (f &&
                    (f.__esModule || f[Symbol.toStringTag] === 'Module') &&
                    (f = f.default),
                  (c = f),
                  f)
            ))
      )
    }
  return M({
    name: 'AsyncComponentWrapper',
    __asyncLoader: B,
    get __asyncResolved() {
      return c
    },
    setup() {
      const p = Ve
      if (c) return () => Do(c, p)
      const f = b => {
        ;(s = null), pn(b, p, 13, !n)
      }
      if ((a && p.suspense) || En)
        return B()
          .then(b => () => Do(b, p))
          .catch(b => (f(b), () => (n ? we(n, { error: b }) : null)))
      const F = U(!1),
        S = U(),
        D = U(!!E)
      return (
        E &&
          setTimeout(() => {
            D.value = !1
          }, E),
        o != null &&
          setTimeout(() => {
            if (!F.value && !S.value) {
              const b = new Error(`Async component timed out after ${o}ms.`)
              f(b), (S.value = b)
            }
          }, o),
        B()
          .then(() => {
            ;(F.value = !0),
              p.parent && nE(p.parent.vnode) && ro(p.parent.update)
          })
          .catch(b => {
            f(b), (S.value = b)
          }),
        () => {
          if (F.value && c) return Do(c, p)
          if (S.value && n) return we(n, { error: S.value })
          if (r && !D.value) return we(r)
        }
      )
    }
  })
}
function Do(e, t) {
  const { ref: r, props: n, children: E, ce: o } = t.vnode,
    a = we(e, n, E)
  return (a.ref = r), (a.ce = o), delete t.vnode.ce, a
}
const nE = e => e.type.__isKeepAlive,
  Eu = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number]
    },
    setup(e, { slots: t }) {
      const r = ct(),
        n = r.ctx
      if (!n.renderer)
        return () => {
          const b = t.default && t.default()
          return b && b.length === 1 ? b[0] : b
        }
      const E = new Map(),
        o = new Set()
      let a = null
      const l = r.suspense,
        {
          renderer: {
            p: s,
            m: c,
            um: d,
            o: { createElement: A }
          }
        } = n,
        B = A('div')
      ;(n.activate = (b, g, _, w, R) => {
        const P = b.component
        c(b, g, _, 0, l),
          s(P.vnode, b, g, _, P, l, w, b.slotScopeIds, R),
          He(() => {
            ;(P.isDeactivated = !1), P.a && yr(P.a)
            const T = b.props && b.props.onVnodeMounted
            T && Qe(T, P.parent, b)
          }, l)
      }),
        (n.deactivate = b => {
          const g = b.component
          c(b, B, null, 1, l),
            He(() => {
              g.da && yr(g.da)
              const _ = b.props && b.props.onVnodeUnmounted
              _ && Qe(_, g.parent, b), (g.isDeactivated = !0)
            }, l)
        })
      function p(b) {
        bo(b), d(b, r, l, !0)
      }
      function f(b) {
        E.forEach((g, _) => {
          const w = la(g.type)
          w && (!b || !b(w)) && F(_)
        })
      }
      function F(b) {
        const g = E.get(b)
        !a || !Ft(g, a) ? p(g) : a && bo(a), E.delete(b), o.delete(b)
      }
      ae(
        () => [e.include, e.exclude],
        ([b, g]) => {
          b && f(_ => Sn(b, _)), g && f(_ => !Sn(g, _))
        },
        { flush: 'post', deep: !0 }
      )
      let S = null
      const D = () => {
        S != null && E.set(S, yo(r.subTree))
      }
      return (
        se(D),
        Qa(D),
        ao(() => {
          E.forEach(b => {
            const { subTree: g, suspense: _ } = r,
              w = yo(g)
            if (b.type === w.type && b.key === w.key) {
              bo(w)
              const R = w.component.da
              R && He(R, _)
              return
            }
            p(b)
          })
        }),
        () => {
          if (((S = null), !t.default)) return null
          const b = t.default(),
            g = b[0]
          if (b.length > 1) return (a = null), b
          if (!Lr(g) || (!(g.shapeFlag & 4) && !(g.shapeFlag & 128)))
            return (a = null), g
          let _ = yo(g)
          const w = _.type,
            R = la(Sr(_) ? _.type.__asyncResolved || {} : w),
            { include: P, exclude: T, max: x } = e
          if ((P && (!R || !Sn(P, R))) || (T && R && Sn(T, R)))
            return (a = _), g
          const $ = _.key == null ? w : _.key,
            K = E.get($)
          return (
            _.el && ((_ = qt(_)), g.shapeFlag & 128 && (g.ssContent = _)),
            (S = $),
            K
              ? ((_.el = K.el),
                (_.component = K.component),
                _.transition && rn(_, _.transition),
                (_.shapeFlag |= 512),
                o.delete($),
                o.add($))
              : (o.add($),
                x && o.size > parseInt(x, 10) && F(o.values().next().value)),
            (_.shapeFlag |= 256),
            (a = _),
            es(g.type) ? g : _
          )
        }
      )
    }
  },
  Iv = Eu
function Sn(e, t) {
  return z(e)
    ? e.some(r => Sn(r, t))
    : Ee(e)
    ? e.split(',').includes(t)
    : Cl(e)
    ? e.test(t)
    : !1
}
function ou(e, t) {
  as(e, 'a', t)
}
function au(e, t) {
  as(e, 'da', t)
}
function as(e, t, r = Ve) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let E = r
      for (; E; ) {
        if (E.isDeactivated) return
        E = E.parent
      }
      return e()
    })
  if ((oo(t, n, r), r)) {
    let E = r.parent
    for (; E && E.parent; ) nE(E.parent.vnode) && iu(n, t, r, E), (E = E.parent)
  }
}
function iu(e, t, r, n) {
  const E = oo(t, e, n, !0)
  fn(() => {
    KE(n[t], E)
  }, r)
}
function bo(e) {
  ;(e.shapeFlag &= -257), (e.shapeFlag &= -513)
}
function yo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}
function oo(e, t, r = Ve, n = !1) {
  if (r) {
    const E = r[e] || (r[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...a) => {
          if (r.isUnmounted) return
          xr(), dr(r)
          const l = pt(t, r, e, a)
          return cr(), kr(), l
        })
    return n ? E.unshift(o) : E.push(o), o
  }
}
const Xt =
    e =>
    (t, r = Ve) =>
      (!En || e === 'sp') && oo(e, (...n) => t(...n), r),
  lu = Xt('bm'),
  se = Xt('m'),
  su = Xt('bu'),
  Qa = Xt('u'),
  ao = Xt('bum'),
  fn = Xt('um'),
  cu = Xt('sp'),
  uu = Xt('rtg'),
  du = Xt('rtc')
function Au(e, t = Ve) {
  oo('ec', e, t)
}
const Za = 'components',
  Bu = 'directives'
function lt(e, t) {
  return e8(Za, e, !0, t) || e
}
const is = Symbol.for('v-ndc')
function Lv(e) {
  return Ee(e) ? e8(Za, e, !1) || e : e || is
}
function Pv(e) {
  return e8(Bu, e)
}
function e8(e, t, r = !0, n = !1) {
  const E = Me || Ve
  if (E) {
    const o = E.type
    if (e === Za) {
      const l = la(o, !1)
      if (l && (l === t || l === Ue(t) || l === Bn(Ue(t)))) return o
    }
    const a = ti(E[e] || o[e], t) || ti(E.appContext[e], t)
    return !a && n ? o : a
  }
}
function ti(e, t) {
  return e && (e[t] || e[Ue(t)] || e[Bn(Ue(t))])
}
function Ov(e, t, r, n) {
  let E
  const o = r && r[n]
  if (z(e) || Ee(e)) {
    E = new Array(e.length)
    for (let a = 0, l = e.length; a < l; a++)
      E[a] = t(e[a], a, void 0, o && o[a])
  } else if (typeof e == 'number') {
    E = new Array(e)
    for (let a = 0; a < e; a++) E[a] = t(a + 1, a, void 0, o && o[a])
  } else if (ge(e))
    if (e[Symbol.iterator])
      E = Array.from(e, (a, l) => t(a, l, void 0, o && o[l]))
    else {
      const a = Object.keys(e)
      E = new Array(a.length)
      for (let l = 0, s = a.length; l < s; l++) {
        const c = a[l]
        E[l] = t(e[c], c, l, o && o[l])
      }
    }
  else E = []
  return r && (r[n] = E), E
}
function Vv(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r]
    if (z(n)) for (let E = 0; E < n.length; E++) e[n[E].name] = n[E].fn
    else
      n &&
        (e[n.name] = n.key
          ? (...E) => {
              const o = n.fn(...E)
              return o && (o.key = n.key), o
            }
          : n.fn)
  }
  return e
}
function xv(e, t, r = {}, n, E) {
  if (Me.isCE || (Me.parent && Sr(Me.parent) && Me.parent.isCE))
    return t !== 'default' && (r.name = t), we('slot', r, n && n())
  let o = e[t]
  o && o._c && (o._d = !1), E8()
  const a = o && ls(o(r)),
    l = Fs(
      Je,
      { key: r.key || (a && a.key) || `_${t}` },
      a || (n ? n() : []),
      a && e._ === 1 ? 64 : -2
    )
  return (
    !E && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    o && o._c && (o._d = !0),
    l
  )
}
function ls(e) {
  return e.some(t =>
    Lr(t) ? !(t.type === Ge || (t.type === Je && !ls(t.children))) : !0
  )
    ? e
    : null
}
function kv(e, t) {
  const r = {}
  for (const n in e) r[t && /[A-Z]/.test(n) ? `on:${n}` : Rn(n)] = e[n]
  return r
}
const ea = e => (e ? (Ss(e) ? lo(e) || e.proxy : ea(e.parent)) : null),
  wn = Re(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => ea(e.parent),
    $root: e => ea(e.root),
    $emit: e => e.emit,
    $options: e => t8(e),
    $forceUpdate: e => e.f || (e.f = () => ro(e.update)),
    $nextTick: e => e.n || (e.n = Gt.bind(e.proxy)),
    $watch: e => tu.bind(e)
  }),
  Co = (e, t) => e !== _e && !e.__isScriptSetup && Ae(e, t),
  ta = {
    get({ _: e }, t) {
      const {
        ctx: r,
        setupState: n,
        data: E,
        props: o,
        accessCache: a,
        type: l,
        appContext: s
      } = e
      let c
      if (t[0] !== '$') {
        const p = a[t]
        if (p !== void 0)
          switch (p) {
            case 1:
              return n[t]
            case 2:
              return E[t]
            case 4:
              return r[t]
            case 3:
              return o[t]
          }
        else {
          if (Co(n, t)) return (a[t] = 1), n[t]
          if (E !== _e && Ae(E, t)) return (a[t] = 2), E[t]
          if ((c = e.propsOptions[0]) && Ae(c, t)) return (a[t] = 3), o[t]
          if (r !== _e && Ae(r, t)) return (a[t] = 4), r[t]
          ra && (a[t] = 0)
        }
      }
      const d = wn[t]
      let A, B
      if (d) return t === '$attrs' && Xe(e, 'get', t), d(e)
      if ((A = l.__cssModules) && (A = A[t])) return A
      if (r !== _e && Ae(r, t)) return (a[t] = 4), r[t]
      if (((B = s.config.globalProperties), Ae(B, t))) return B[t]
    },
    set({ _: e }, t, r) {
      const { data: n, setupState: E, ctx: o } = e
      return Co(E, t)
        ? ((E[t] = r), !0)
        : n !== _e && Ae(n, t)
        ? ((n[t] = r), !0)
        : Ae(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((o[t] = r), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: r,
          ctx: n,
          appContext: E,
          propsOptions: o
        }
      },
      a
    ) {
      let l
      return (
        !!r[a] ||
        (e !== _e && Ae(e, a)) ||
        Co(t, a) ||
        ((l = o[0]) && Ae(l, a)) ||
        Ae(n, a) ||
        Ae(wn, a) ||
        Ae(E.config.globalProperties, a)
      )
    },
    defineProperty(e, t, r) {
      return (
        r.get != null
          ? (e._.accessCache[t] = 0)
          : Ae(r, 'value') && this.set(e, t, r.value, null),
        Reflect.defineProperty(e, t, r)
      )
    }
  },
  vu = Re({}, ta, {
    get(e, t) {
      if (t !== Symbol.unscopables) return ta.get(e, t, e)
    },
    has(e, t) {
      return t[0] !== '_' && !Va(t)
    }
  })
function Mv() {
  return null
}
function $v() {
  return null
}
function jv(e) {}
function Nv(e) {}
function Hv() {
  return null
}
function Jv() {}
function zv(e, t) {
  return null
}
function Uv() {
  return ss().slots
}
function qv() {
  return ss().attrs
}
function Wv(e, t, r) {
  const n = ct()
  if (r && r.local) {
    const E = U(e[t])
    return (
      ae(
        () => e[t],
        o => (E.value = o)
      ),
      ae(E, o => {
        o !== e[t] && n.emit(`update:${t}`, o)
      }),
      E
    )
  } else
    return {
      __v_isRef: !0,
      get value() {
        return e[t]
      },
      set value(E) {
        n.emit(`update:${t}`, E)
      }
    }
}
function ss() {
  const e = ct()
  return e.setupContext || (e.setupContext = ws(e))
}
function Wn(e) {
  return z(e) ? e.reduce((t, r) => ((t[r] = null), t), {}) : e
}
function Kv(e, t) {
  const r = Wn(e)
  for (const n in t) {
    if (n.startsWith('__skip')) continue
    let E = r[n]
    E
      ? z(E) || ne(E)
        ? (E = r[n] = { type: E, default: t[n] })
        : (E.default = t[n])
      : E === null && (E = r[n] = { default: t[n] }),
      E && t[`__skip_${n}`] && (E.skipFactory = !0)
  }
  return r
}
function Gv(e, t) {
  return !e || !t ? e || t : z(e) && z(t) ? e.concat(t) : Re({}, Wn(e), Wn(t))
}
function Xv(e, t) {
  const r = {}
  for (const n in e)
    t.includes(n) ||
      Object.defineProperty(r, n, { enumerable: !0, get: () => e[n] })
  return r
}
function Yv(e) {
  const t = ct()
  let r = e()
  return (
    cr(),
    GE(r) &&
      (r = r.catch(n => {
        throw (dr(t), n)
      })),
    [r, () => dr(t)]
  )
}
let ra = !0
function pu(e) {
  const t = t8(e),
    r = e.proxy,
    n = e.ctx
  ;(ra = !1), t.beforeCreate && ri(t.beforeCreate, e, 'bc')
  const {
    data: E,
    computed: o,
    methods: a,
    watch: l,
    provide: s,
    inject: c,
    created: d,
    beforeMount: A,
    mounted: B,
    beforeUpdate: p,
    updated: f,
    activated: F,
    deactivated: S,
    beforeDestroy: D,
    beforeUnmount: b,
    destroyed: g,
    unmounted: _,
    render: w,
    renderTracked: R,
    renderTriggered: P,
    errorCaptured: T,
    serverPrefetch: x,
    expose: $,
    inheritAttrs: K,
    components: N,
    directives: Z,
    filters: De
  } = t
  if ((c && fu(c, n, null), a))
    for (const re in a) {
      const Y = a[re]
      ne(Y) && (n[re] = Y.bind(r))
    }
  if (E) {
    const re = E.call(r, r)
    ge(re) && (e.data = vn(re))
  }
  if (((ra = !0), o))
    for (const re in o) {
      const Y = o[re],
        Le = ne(Y) ? Y.bind(r, r) : ne(Y.get) ? Y.get.bind(r, r) : vt,
        Tt = !ne(Y) && ne(Y.set) ? Y.set.bind(r) : vt,
        dt = y({ get: Le, set: Tt })
      Object.defineProperty(n, re, {
        enumerable: !0,
        configurable: !0,
        get: () => dt.value,
        set: ke => (dt.value = ke)
      })
    }
  if (l) for (const re in l) cs(l[re], n, r, re)
  if (s) {
    const re = ne(s) ? s.call(r) : s
    Reflect.ownKeys(re).forEach(Y => {
      Dt(Y, re[Y])
    })
  }
  d && ri(d, e, 'c')
  function G(re, Y) {
    z(Y) ? Y.forEach(Le => re(Le.bind(r))) : Y && re(Y.bind(r))
  }
  if (
    (G(lu, A),
    G(se, B),
    G(su, p),
    G(Qa, f),
    G(ou, F),
    G(au, S),
    G(Au, T),
    G(du, R),
    G(uu, P),
    G(ao, b),
    G(fn, _),
    G(cu, x),
    z($))
  )
    if ($.length) {
      const re = e.exposed || (e.exposed = {})
      $.forEach(Y => {
        Object.defineProperty(re, Y, {
          get: () => r[Y],
          set: Le => (r[Y] = Le)
        })
      })
    } else e.exposed || (e.exposed = {})
  w && e.render === vt && (e.render = w),
    K != null && (e.inheritAttrs = K),
    N && (e.components = N),
    Z && (e.directives = Z)
}
function fu(e, t, r = vt) {
  z(e) && (e = na(e))
  for (const n in e) {
    const E = e[n]
    let o
    ge(E)
      ? 'default' in E
        ? (o = me(E.from || n, E.default, !0))
        : (o = me(E.from || n))
      : (o = me(E)),
      Ie(o)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: a => (o.value = a)
          })
        : (t[n] = o)
  }
}
function ri(e, t, r) {
  pt(z(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
}
function cs(e, t, r, n) {
  const E = n.includes('.') ? rs(r, n) : () => r[n]
  if (Ee(e)) {
    const o = t[e]
    ne(o) && ae(E, o)
  } else if (ne(e)) ae(E, e.bind(r))
  else if (ge(e))
    if (z(e)) e.forEach(o => cs(o, t, r, n))
    else {
      const o = ne(e.handler) ? e.handler.bind(r) : t[e.handler]
      ne(o) && ae(E, o, e)
    }
}
function t8(e) {
  const t = e.type,
    { mixins: r, extends: n } = t,
    {
      mixins: E,
      optionsCache: o,
      config: { optionMergeStrategies: a }
    } = e.appContext,
    l = o.get(t)
  let s
  return (
    l
      ? (s = l)
      : !E.length && !r && !n
      ? (s = t)
      : ((s = {}), E.length && E.forEach(c => jE(s, c, a, !0)), jE(s, t, a)),
    ge(t) && o.set(t, s),
    s
  )
}
function jE(e, t, r, n = !1) {
  const { mixins: E, extends: o } = t
  o && jE(e, o, r, !0), E && E.forEach(a => jE(e, a, r, !0))
  for (const a in t)
    if (!(n && a === 'expose')) {
      const l = mu[a] || (r && r[a])
      e[a] = l ? l(e[a], t[a]) : t[a]
    }
  return e
}
const mu = {
  data: ni,
  props: Ei,
  emits: Ei,
  methods: Tn,
  computed: Tn,
  beforeCreate: We,
  created: We,
  beforeMount: We,
  mounted: We,
  beforeUpdate: We,
  updated: We,
  beforeDestroy: We,
  beforeUnmount: We,
  destroyed: We,
  unmounted: We,
  activated: We,
  deactivated: We,
  errorCaptured: We,
  serverPrefetch: We,
  components: Tn,
  directives: Tn,
  watch: _u,
  provide: ni,
  inject: hu
}
function ni(e, t) {
  return t
    ? e
      ? function () {
          return Re(
            ne(e) ? e.call(this, this) : e,
            ne(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function hu(e, t) {
  return Tn(na(e), na(t))
}
function na(e) {
  if (z(e)) {
    const t = {}
    for (let r = 0; r < e.length; r++) t[e[r]] = e[r]
    return t
  }
  return e
}
function We(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Tn(e, t) {
  return e ? Re(Object.create(null), e, t) : t
}
function Ei(e, t) {
  return e
    ? z(e) && z(t)
      ? [...new Set([...e, ...t])]
      : Re(Object.create(null), Wn(e), Wn(t ?? {}))
    : t
}
function _u(e, t) {
  if (!e) return t
  if (!t) return e
  const r = Re(Object.create(null), e)
  for (const n in t) r[n] = We(e[n], t[n])
  return r
}
function us() {
  return {
    app: null,
    config: {
      isNativeTag: yl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let gu = 0
function Fu(e, t) {
  return function (n, E = null) {
    ne(n) || (n = Re({}, n)), E != null && !ge(E) && (E = null)
    const o = us(),
      a = new WeakSet()
    let l = !1
    const s = (o.app = {
      _uid: gu++,
      _component: n,
      _props: E,
      _container: null,
      _context: o,
      _instance: null,
      version: qu,
      get config() {
        return o.config
      },
      set config(c) {},
      use(c, ...d) {
        return (
          a.has(c) ||
            (c && ne(c.install)
              ? (a.add(c), c.install(s, ...d))
              : ne(c) && (a.add(c), c(s, ...d))),
          s
        )
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), s
      },
      component(c, d) {
        return d ? ((o.components[c] = d), s) : o.components[c]
      },
      directive(c, d) {
        return d ? ((o.directives[c] = d), s) : o.directives[c]
      },
      mount(c, d, A) {
        if (!l) {
          const B = we(n, E)
          return (
            (B.appContext = o),
            d && t ? t(B, c) : e(B, c, A),
            (l = !0),
            (s._container = c),
            (c.__vue_app__ = s),
            lo(B.component) || B.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, s._container), delete s._container.__vue_app__)
      },
      provide(c, d) {
        return (o.provides[c] = d), s
      },
      runWithContext(c) {
        Kn = s
        try {
          return c()
        } finally {
          Kn = null
        }
      }
    })
    return s
  }
}
let Kn = null
function Dt(e, t) {
  if (Ve) {
    let r = Ve.provides
    const n = Ve.parent && Ve.parent.provides
    n === r && (r = Ve.provides = Object.create(n)), (r[e] = t)
  }
}
function me(e, t, r = !1) {
  const n = Ve || Me
  if (n || Kn) {
    const E = n
      ? n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : Kn._context.provides
    if (E && e in E) return E[e]
    if (arguments.length > 1) return r && ne(t) ? t.call(n && n.proxy) : t
  }
}
function Qv() {
  return !!(Ve || Me || Kn)
}
function Du(e, t, r, n = !1) {
  const E = {},
    o = {}
  kn(o, io, 1), (e.propsDefaults = Object.create(null)), ds(e, t, E, o)
  for (const a in e.propsOptions[0]) a in E || (E[a] = void 0)
  r ? (e.props = n ? E : Ha(E)) : e.type.props ? (e.props = E) : (e.props = o),
    (e.attrs = o)
}
function bu(e, t, r, n) {
  const {
      props: E,
      attrs: o,
      vnode: { patchFlag: a }
    } = e,
    l = le(E),
    [s] = e.propsOptions
  let c = !1
  if ((n || a > 0) && !(a & 16)) {
    if (a & 8) {
      const d = e.vnode.dynamicProps
      for (let A = 0; A < d.length; A++) {
        let B = d[A]
        if (no(e.emitsOptions, B)) continue
        const p = t[B]
        if (s)
          if (Ae(o, B)) p !== o[B] && ((o[B] = p), (c = !0))
          else {
            const f = Ue(B)
            E[f] = Ea(s, l, f, p, e, !1)
          }
        else p !== o[B] && ((o[B] = p), (c = !0))
      }
    }
  } else {
    ds(e, t, E, o) && (c = !0)
    let d
    for (const A in l)
      (!t || (!Ae(t, A) && ((d = Ze(A)) === A || !Ae(t, d)))) &&
        (s
          ? r &&
            (r[A] !== void 0 || r[d] !== void 0) &&
            (E[A] = Ea(s, l, A, void 0, e, !0))
          : delete E[A])
    if (o !== l) for (const A in o) (!t || !Ae(t, A)) && (delete o[A], (c = !0))
  }
  c && Ot(e, 'set', '$attrs')
}
function ds(e, t, r, n) {
  const [E, o] = e.propsOptions
  let a = !1,
    l
  if (t)
    for (let s in t) {
      if (Kr(s)) continue
      const c = t[s]
      let d
      E && Ae(E, (d = Ue(s)))
        ? !o || !o.includes(d)
          ? (r[d] = c)
          : ((l || (l = {}))[d] = c)
        : no(e.emitsOptions, s) ||
          ((!(s in n) || c !== n[s]) && ((n[s] = c), (a = !0)))
    }
  if (o) {
    const s = le(r),
      c = l || _e
    for (let d = 0; d < o.length; d++) {
      const A = o[d]
      r[A] = Ea(E, s, A, c[A], e, !Ae(c, A))
    }
  }
  return a
}
function Ea(e, t, r, n, E, o) {
  const a = e[r]
  if (a != null) {
    const l = Ae(a, 'default')
    if (l && n === void 0) {
      const s = a.default
      if (a.type !== Function && !a.skipFactory && ne(s)) {
        const { propsDefaults: c } = E
        r in c ? (n = c[r]) : (dr(E), (n = c[r] = s.call(null, t)), cr())
      } else n = s
    }
    a[0] && (o && !l ? (n = !1) : a[1] && (n === '' || n === Ze(r)) && (n = !0))
  }
  return n
}
function As(e, t, r = !1) {
  const n = t.propsCache,
    E = n.get(e)
  if (E) return E
  const o = e.props,
    a = {},
    l = []
  let s = !1
  if (!ne(e)) {
    const d = A => {
      s = !0
      const [B, p] = As(A, t, !0)
      Re(a, B), p && l.push(...p)
    }
    !r && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d)
  }
  if (!o && !s) return ge(e) && n.set(e, Dr), Dr
  if (z(o))
    for (let d = 0; d < o.length; d++) {
      const A = Ue(o[d])
      oi(A) && (a[A] = _e)
    }
  else if (o)
    for (const d in o) {
      const A = Ue(d)
      if (oi(A)) {
        const B = o[d],
          p = (a[A] = z(B) || ne(B) ? { type: B } : Re({}, B))
        if (p) {
          const f = li(Boolean, p.type),
            F = li(String, p.type)
          ;(p[0] = f > -1),
            (p[1] = F < 0 || f < F),
            (f > -1 || Ae(p, 'default')) && l.push(A)
        }
      }
    }
  const c = [a, l]
  return ge(e) && n.set(e, c), c
}
function oi(e) {
  return e[0] !== '$'
}
function ai(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function ii(e, t) {
  return ai(e) === ai(t)
}
function li(e, t) {
  return z(t) ? t.findIndex(r => ii(r, e)) : ne(t) && ii(t, e) ? 0 : -1
}
const Bs = e => e[0] === '_' || e === '$stable',
  r8 = e => (z(e) ? e.map(ot) : [ot(e)]),
  yu = (e, t, r) => {
    if (t._n) return t
    const n = Zl((...E) => r8(t(...E)), r)
    return (n._c = !1), n
  },
  vs = (e, t, r) => {
    const n = e._ctx
    for (const E in e) {
      if (Bs(E)) continue
      const o = e[E]
      if (ne(o)) t[E] = yu(E, o, n)
      else if (o != null) {
        const a = r8(o)
        t[E] = () => a
      }
    }
  },
  ps = (e, t) => {
    const r = r8(t)
    e.slots.default = () => r
  },
  Cu = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? ((e.slots = le(t)), kn(t, '_', r)) : vs(t, (e.slots = {}))
    } else (e.slots = {}), t && ps(e, t)
    kn(e.slots, io, 1)
  },
  Su = (e, t, r) => {
    const { vnode: n, slots: E } = e
    let o = !0,
      a = _e
    if (n.shapeFlag & 32) {
      const l = t._
      l
        ? r && l === 1
          ? (o = !1)
          : (Re(E, t), !r && l === 1 && delete E._)
        : ((o = !t.$stable), vs(t, E)),
        (a = t)
    } else t && (ps(e, t), (a = { default: 1 }))
    if (o) for (const l in E) !Bs(l) && a[l] == null && delete E[l]
  }
function NE(e, t, r, n, E = !1) {
  if (z(e)) {
    e.forEach((B, p) => NE(B, t && (z(t) ? t[p] : t), r, n, E))
    return
  }
  if (Sr(n) && !E) return
  const o = n.shapeFlag & 4 ? lo(n.component) || n.component.proxy : n.el,
    a = E ? null : o,
    { i: l, r: s } = e,
    c = t && t.r,
    d = l.refs === _e ? (l.refs = {}) : l.refs,
    A = l.setupState
  if (
    (c != null &&
      c !== s &&
      (Ee(c)
        ? ((d[c] = null), Ae(A, c) && (A[c] = null))
        : Ie(c) && (c.value = null)),
    ne(s))
  )
    sr(s, l, 12, [a, d])
  else {
    const B = Ee(s),
      p = Ie(s)
    if (B || p) {
      const f = () => {
        if (e.f) {
          const F = B ? (Ae(A, s) ? A[s] : d[s]) : s.value
          E
            ? z(F) && KE(F, o)
            : z(F)
            ? F.includes(o) || F.push(o)
            : B
            ? ((d[s] = [o]), Ae(A, s) && (A[s] = d[s]))
            : ((s.value = [o]), e.k && (d[e.k] = s.value))
        } else
          B
            ? ((d[s] = a), Ae(A, s) && (A[s] = a))
            : p && ((s.value = a), e.k && (d[e.k] = a))
      }
      a ? ((f.id = -1), He(f, r)) : f()
    }
  }
}
let Zt = !1
const DE = e => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  bE = e => e.nodeType === 8
function Tu(e) {
  const {
      mt: t,
      p: r,
      o: {
        patchProp: n,
        createText: E,
        nextSibling: o,
        parentNode: a,
        remove: l,
        insert: s,
        createComment: c
      }
    } = e,
    d = (g, _) => {
      if (!_.hasChildNodes()) {
        r(null, g, _), $E(), (_._vnode = g)
        return
      }
      ;(Zt = !1),
        A(_.firstChild, g, null, null, null),
        $E(),
        (_._vnode = g),
        Zt && console.error('Hydration completed but contains mismatches.')
    },
    A = (g, _, w, R, P, T = !1) => {
      const x = bE(g) && g.data === '[',
        $ = () => F(g, _, w, R, P, x),
        { type: K, ref: N, shapeFlag: Z, patchFlag: De } = _
      let fe = g.nodeType
      ;(_.el = g), De === -2 && ((T = !1), (_.dynamicChildren = null))
      let G = null
      switch (K) {
        case nn:
          fe !== 3
            ? _.children === ''
              ? (s((_.el = E('')), a(g), g), (G = g))
              : (G = $())
            : (g.data !== _.children && ((Zt = !0), (g.data = _.children)),
              (G = o(g)))
          break
        case Ge:
          if (fe !== 8 || x)
            if (g.tagName.toLowerCase() === 'template') {
              const re = _.el.content.firstChild
              D(re, g, w), (_.el = g = re), (G = o(g))
            } else G = $()
          else G = o(g)
          break
        case Yr:
          if ((x && ((g = o(g)), (fe = g.nodeType)), fe === 1 || fe === 3)) {
            G = g
            const re = !_.children.length
            for (let Y = 0; Y < _.staticCount; Y++)
              re && (_.children += G.nodeType === 1 ? G.outerHTML : G.data),
                Y === _.staticCount - 1 && (_.anchor = G),
                (G = o(G))
            return x ? o(G) : G
          } else $()
          break
        case Je:
          x ? (G = f(g, _, w, R, P, T)) : (G = $())
          break
        default:
          if (Z & 1)
            (fe !== 1 || _.type.toLowerCase() !== g.tagName.toLowerCase()) &&
            !b(g)
              ? (G = $())
              : (G = B(g, _, w, R, P, T))
          else if (Z & 6) {
            _.slotScopeIds = P
            const re = a(g)
            if (
              (x
                ? (G = S(g))
                : bE(g) && g.data === 'teleport start'
                ? (G = S(g, g.data, 'teleport end'))
                : (G = o(g)),
              t(_, re, null, w, R, DE(re), T),
              Sr(_))
            ) {
              let Y
              x
                ? ((Y = we(Je)),
                  (Y.anchor = G ? G.previousSibling : re.lastChild))
                : (Y = g.nodeType === 3 ? ys('') : we('div')),
                (Y.el = g),
                (_.component.subTree = Y)
            }
          } else
            Z & 64
              ? fe !== 8
                ? (G = $())
                : (G = _.type.hydrate(g, _, w, R, P, T, e, p))
              : Z & 128 &&
                (G = _.type.hydrate(g, _, w, R, DE(a(g)), P, T, e, A))
      }
      return N != null && NE(N, null, R, _), G
    },
    B = (g, _, w, R, P, T) => {
      T = T || !!_.dynamicChildren
      const {
          type: x,
          props: $,
          patchFlag: K,
          shapeFlag: N,
          dirs: Z,
          transition: De
        } = _,
        fe = (x === 'input' && Z) || x === 'option'
      if (fe || K !== -1) {
        if ((Z && It(_, null, w, 'created'), $))
          if (fe || !T || K & 48)
            for (const Y in $)
              ((fe && Y.endsWith('value')) || (An(Y) && !Kr(Y))) &&
                n(g, Y, null, $[Y], !1, void 0, w)
          else $.onClick && n(g, 'onClick', null, $.onClick, !1, void 0, w)
        let G
        ;(G = $ && $.onVnodeBeforeMount) && Qe(G, w, _)
        let re = !1
        if (b(g)) {
          re = ms(R, De) && w && w.vnode.props && w.vnode.props.appear
          const Y = g.content.firstChild
          re && De.beforeEnter(Y), D(Y, g, w), (_.el = g = Y)
        }
        if (
          (Z && It(_, null, w, 'beforeMount'),
          ((G = $ && $.onVnodeMounted) || Z || re) &&
            ts(() => {
              G && Qe(G, w, _),
                re && De.enter(g),
                Z && It(_, null, w, 'mounted')
            }, R),
          N & 16 && !($ && ($.innerHTML || $.textContent)))
        ) {
          let Y = p(g.firstChild, _, g, w, R, P, T)
          for (; Y; ) {
            Zt = !0
            const Le = Y
            ;(Y = Y.nextSibling), l(Le)
          }
        } else
          N & 8 &&
            g.textContent !== _.children &&
            ((Zt = !0), (g.textContent = _.children))
      }
      return g.nextSibling
    },
    p = (g, _, w, R, P, T, x) => {
      x = x || !!_.dynamicChildren
      const $ = _.children,
        K = $.length
      for (let N = 0; N < K; N++) {
        const Z = x ? $[N] : ($[N] = ot($[N]))
        if (g) g = A(g, Z, R, P, T, x)
        else {
          if (Z.type === nn && !Z.children) continue
          ;(Zt = !0), r(null, Z, w, null, R, P, DE(w), T)
        }
      }
      return g
    },
    f = (g, _, w, R, P, T) => {
      const { slotScopeIds: x } = _
      x && (P = P ? P.concat(x) : x)
      const $ = a(g),
        K = p(o(g), _, $, w, R, P, T)
      return K && bE(K) && K.data === ']'
        ? o((_.anchor = K))
        : ((Zt = !0), s((_.anchor = c(']')), $, K), K)
    },
    F = (g, _, w, R, P, T) => {
      if (((Zt = !0), (_.el = null), T)) {
        const K = S(g)
        for (;;) {
          const N = o(g)
          if (N && N !== K) l(N)
          else break
        }
      }
      const x = o(g),
        $ = a(g)
      return l(g), r(null, _, $, x, w, R, DE($), P), x
    },
    S = (g, _ = '[', w = ']') => {
      let R = 0
      for (; g; )
        if (((g = o(g)), g && bE(g) && (g.data === _ && R++, g.data === w))) {
          if (R === 0) return o(g)
          R--
        }
      return g
    },
    D = (g, _, w) => {
      const R = _.parentNode
      R && R.replaceChild(g, _)
      let P = w
      for (; P; )
        P.vnode.el === _ && ((P.vnode.el = g), (P.subTree.el = g)),
          (P = P.parent)
    },
    b = g => g.nodeType === 1 && g.tagName.toLowerCase() === 'template'
  return [d, A]
}
const He = ts
function Ru(e) {
  return fs(e)
}
function wu(e) {
  return fs(e, Tu)
}
function fs(e, t) {
  const r = kE()
  r.__VUE__ = !0
  const {
      insert: n,
      remove: E,
      patchProp: o,
      createElement: a,
      createText: l,
      createComment: s,
      setText: c,
      setElementText: d,
      parentNode: A,
      nextSibling: B,
      setScopeId: p = vt,
      insertStaticContent: f
    } = e,
    F = (
      m,
      h,
      C,
      I = null,
      O = null,
      V = null,
      q = !1,
      j = null,
      J = !!h.dynamicChildren
    ) => {
      if (m === h) return
      m && !Ft(m, h) && ((I = L(m)), ke(m, O, V, !0), (m = null)),
        h.patchFlag === -2 && ((J = !1), (h.dynamicChildren = null))
      const { type: k, ref: ee, shapeFlag: X } = h
      switch (k) {
        case nn:
          S(m, h, C, I)
          break
        case Ge:
          D(m, h, C, I)
          break
        case Yr:
          m == null && b(h, C, I, q)
          break
        case Je:
          N(m, h, C, I, O, V, q, j, J)
          break
        default:
          X & 1
            ? w(m, h, C, I, O, V, q, j, J)
            : X & 6
            ? Z(m, h, C, I, O, V, q, j, J)
            : (X & 64 || X & 128) && k.process(m, h, C, I, O, V, q, j, J, H)
      }
      ee != null && O && NE(ee, m && m.ref, V, h || m, !h)
    },
    S = (m, h, C, I) => {
      if (m == null) n((h.el = l(h.children)), C, I)
      else {
        const O = (h.el = m.el)
        h.children !== m.children && c(O, h.children)
      }
    },
    D = (m, h, C, I) => {
      m == null ? n((h.el = s(h.children || '')), C, I) : (h.el = m.el)
    },
    b = (m, h, C, I) => {
      ;[m.el, m.anchor] = f(m.children, h, C, I, m.el, m.anchor)
    },
    g = ({ el: m, anchor: h }, C, I) => {
      let O
      for (; m && m !== h; ) (O = B(m)), n(m, C, I), (m = O)
      n(h, C, I)
    },
    _ = ({ el: m, anchor: h }) => {
      let C
      for (; m && m !== h; ) (C = B(m)), E(m), (m = C)
      E(h)
    },
    w = (m, h, C, I, O, V, q, j, J) => {
      ;(q = q || h.type === 'svg'),
        m == null ? R(h, C, I, O, V, q, j, J) : x(m, h, O, V, q, j, J)
    },
    R = (m, h, C, I, O, V, q, j) => {
      let J, k
      const { type: ee, props: X, shapeFlag: te, transition: oe, dirs: ie } = m
      if (
        ((J = m.el = a(m.type, V, X && X.is, X)),
        te & 8
          ? d(J, m.children)
          : te & 16 &&
            T(m.children, J, null, I, O, V && ee !== 'foreignObject', q, j),
        ie && It(m, null, I, 'created'),
        P(J, m, m.scopeId, q, I),
        X)
      ) {
        for (const be in X)
          be !== 'value' &&
            !Kr(be) &&
            o(J, be, null, X[be], V, m.children, I, O, Pe)
        'value' in X && o(J, 'value', null, X.value),
          (k = X.onVnodeBeforeMount) && Qe(k, I, m)
      }
      ie && It(m, null, I, 'beforeMount')
      const Ce = ms(O, oe)
      Ce && oe.beforeEnter(J),
        n(J, h, C),
        ((k = X && X.onVnodeMounted) || Ce || ie) &&
          He(() => {
            k && Qe(k, I, m), Ce && oe.enter(J), ie && It(m, null, I, 'mounted')
          }, O)
    },
    P = (m, h, C, I, O) => {
      if ((C && p(m, C), I)) for (let V = 0; V < I.length; V++) p(m, I[V])
      if (O) {
        let V = O.subTree
        if (h === V) {
          const q = O.vnode
          P(m, q, q.scopeId, q.slotScopeIds, O.parent)
        }
      }
    },
    T = (m, h, C, I, O, V, q, j, J = 0) => {
      for (let k = J; k < m.length; k++) {
        const ee = (m[k] = j ? or(m[k]) : ot(m[k]))
        F(null, ee, h, C, I, O, V, q, j)
      }
    },
    x = (m, h, C, I, O, V, q) => {
      const j = (h.el = m.el)
      let { patchFlag: J, dynamicChildren: k, dirs: ee } = h
      J |= m.patchFlag & 16
      const X = m.props || _e,
        te = h.props || _e
      let oe
      C && mr(C, !1),
        (oe = te.onVnodeBeforeUpdate) && Qe(oe, C, h, m),
        ee && It(h, m, C, 'beforeUpdate'),
        C && mr(C, !0)
      const ie = O && h.type !== 'foreignObject'
      if (
        (k
          ? $(m.dynamicChildren, k, j, C, I, ie, V)
          : q || Y(m, h, j, null, C, I, ie, V, !1),
        J > 0)
      ) {
        if (J & 16) K(j, h, X, te, C, I, O)
        else if (
          (J & 2 && X.class !== te.class && o(j, 'class', null, te.class, O),
          J & 4 && o(j, 'style', X.style, te.style, O),
          J & 8)
        ) {
          const Ce = h.dynamicProps
          for (let be = 0; be < Ce.length; be++) {
            const Oe = Ce[be],
              ht = X[Oe],
              jr = te[Oe]
            ;(jr !== ht || Oe === 'value') &&
              o(j, Oe, ht, jr, O, m.children, C, I, Pe)
          }
        }
        J & 1 && m.children !== h.children && d(j, h.children)
      } else !q && k == null && K(j, h, X, te, C, I, O)
      ;((oe = te.onVnodeUpdated) || ee) &&
        He(() => {
          oe && Qe(oe, C, h, m), ee && It(h, m, C, 'updated')
        }, I)
    },
    $ = (m, h, C, I, O, V, q) => {
      for (let j = 0; j < h.length; j++) {
        const J = m[j],
          k = h[j],
          ee =
            J.el && (J.type === Je || !Ft(J, k) || J.shapeFlag & 70)
              ? A(J.el)
              : C
        F(J, k, ee, null, I, O, V, q, !0)
      }
    },
    K = (m, h, C, I, O, V, q) => {
      if (C !== I) {
        if (C !== _e)
          for (const j in C)
            !Kr(j) && !(j in I) && o(m, j, C[j], null, q, h.children, O, V, Pe)
        for (const j in I) {
          if (Kr(j)) continue
          const J = I[j],
            k = C[j]
          J !== k && j !== 'value' && o(m, j, k, J, q, h.children, O, V, Pe)
        }
        'value' in I && o(m, 'value', C.value, I.value)
      }
    },
    N = (m, h, C, I, O, V, q, j, J) => {
      const k = (h.el = m ? m.el : l('')),
        ee = (h.anchor = m ? m.anchor : l(''))
      let { patchFlag: X, dynamicChildren: te, slotScopeIds: oe } = h
      oe && (j = j ? j.concat(oe) : oe),
        m == null
          ? (n(k, C, I), n(ee, C, I), T(h.children, C, ee, O, V, q, j, J))
          : X > 0 && X & 64 && te && m.dynamicChildren
          ? ($(m.dynamicChildren, te, C, O, V, q, j),
            (h.key != null || (O && h === O.subTree)) && n8(m, h, !0))
          : Y(m, h, C, ee, O, V, q, j, J)
    },
    Z = (m, h, C, I, O, V, q, j, J) => {
      ;(h.slotScopeIds = j),
        m == null
          ? h.shapeFlag & 512
            ? O.ctx.activate(h, C, I, q, J)
            : De(h, C, I, O, V, q, J)
          : fe(m, h, J)
    },
    De = (m, h, C, I, O, V, q) => {
      const j = (m.component = Cs(m, I, O))
      if ((nE(m) && (j.ctx.renderer = H), Ts(j), j.asyncDep)) {
        if ((O && O.registerDep(j, G), !m.el)) {
          const J = (j.subTree = we(Ge))
          D(null, J, h, C)
        }
        return
      }
      G(j, m, h, C, O, V, q)
    },
    fe = (m, h, C) => {
      const I = (h.component = m.component)
      if (q0(m, h, C))
        if (I.asyncDep && !I.asyncResolved) {
          re(I, h, C)
          return
        } else (I.next = h), $0(I.update), I.update()
      else (h.el = m.el), (I.vnode = h)
    },
    G = (m, h, C, I, O, V, q) => {
      const j = () => {
          if (m.isMounted) {
            let { next: ee, bu: X, u: te, parent: oe, vnode: ie } = m,
              Ce = ee,
              be
            mr(m, !1),
              ee ? ((ee.el = ie.el), re(m, ee, q)) : (ee = ie),
              X && yr(X),
              (be = ee.props && ee.props.onVnodeBeforeUpdate) &&
                Qe(be, oe, ee, ie),
              mr(m, !0)
            const Oe = VE(m),
              ht = m.subTree
            ;(m.subTree = Oe),
              F(ht, Oe, A(ht.el), L(ht), m, O, V),
              (ee.el = Oe.el),
              Ce === null && Ga(m, Oe.el),
              te && He(te, O),
              (be = ee.props && ee.props.onVnodeUpdated) &&
                He(() => Qe(be, oe, ee, ie), O)
          } else {
            let ee
            const { el: X, props: te } = h,
              { bm: oe, m: ie, parent: Ce } = m,
              be = Sr(h)
            if (
              (mr(m, !1),
              oe && yr(oe),
              !be && (ee = te && te.onVnodeBeforeMount) && Qe(ee, Ce, h),
              mr(m, !0),
              X && Be)
            ) {
              const Oe = () => {
                ;(m.subTree = VE(m)), Be(X, m.subTree, m, O, null)
              }
              be
                ? h.type.__asyncLoader().then(() => !m.isUnmounted && Oe())
                : Oe()
            } else {
              const Oe = (m.subTree = VE(m))
              F(null, Oe, C, I, m, O, V), (h.el = Oe.el)
            }
            if ((ie && He(ie, O), !be && (ee = te && te.onVnodeMounted))) {
              const Oe = h
              He(() => Qe(ee, Ce, Oe), O)
            }
            ;(h.shapeFlag & 256 ||
              (Ce && Sr(Ce.vnode) && Ce.vnode.shapeFlag & 256)) &&
              m.a &&
              He(m.a, O),
              (m.isMounted = !0),
              (h = C = I = null)
          }
        },
        J = (m.effect = new Rr(j, () => ro(k), m.scope)),
        k = (m.update = () => J.run())
      ;(k.id = m.uid), mr(m, !0), k()
    },
    re = (m, h, C) => {
      h.component = m
      const I = m.vnode.props
      ;(m.vnode = h),
        (m.next = null),
        bu(m, h.props, I, C),
        Su(m, h.children, C),
        xr(),
        Y8(),
        kr()
    },
    Y = (m, h, C, I, O, V, q, j, J = !1) => {
      const k = m && m.children,
        ee = m ? m.shapeFlag : 0,
        X = h.children,
        { patchFlag: te, shapeFlag: oe } = h
      if (te > 0) {
        if (te & 128) {
          Tt(k, X, C, I, O, V, q, j, J)
          return
        } else if (te & 256) {
          Le(k, X, C, I, O, V, q, j, J)
          return
        }
      }
      oe & 8
        ? (ee & 16 && Pe(k, O, V), X !== k && d(C, X))
        : ee & 16
        ? oe & 16
          ? Tt(k, X, C, I, O, V, q, j, J)
          : Pe(k, O, V, !0)
        : (ee & 8 && d(C, ''), oe & 16 && T(X, C, I, O, V, q, j, J))
    },
    Le = (m, h, C, I, O, V, q, j, J) => {
      ;(m = m || Dr), (h = h || Dr)
      const k = m.length,
        ee = h.length,
        X = Math.min(k, ee)
      let te
      for (te = 0; te < X; te++) {
        const oe = (h[te] = J ? or(h[te]) : ot(h[te]))
        F(m[te], oe, C, null, O, V, q, j, J)
      }
      k > ee ? Pe(m, O, V, !0, !1, X) : T(h, C, I, O, V, q, j, J, X)
    },
    Tt = (m, h, C, I, O, V, q, j, J) => {
      let k = 0
      const ee = h.length
      let X = m.length - 1,
        te = ee - 1
      for (; k <= X && k <= te; ) {
        const oe = m[k],
          ie = (h[k] = J ? or(h[k]) : ot(h[k]))
        if (Ft(oe, ie)) F(oe, ie, C, null, O, V, q, j, J)
        else break
        k++
      }
      for (; k <= X && k <= te; ) {
        const oe = m[X],
          ie = (h[te] = J ? or(h[te]) : ot(h[te]))
        if (Ft(oe, ie)) F(oe, ie, C, null, O, V, q, j, J)
        else break
        X--, te--
      }
      if (k > X) {
        if (k <= te) {
          const oe = te + 1,
            ie = oe < ee ? h[oe].el : I
          for (; k <= te; )
            F(null, (h[k] = J ? or(h[k]) : ot(h[k])), C, ie, O, V, q, j, J), k++
        }
      } else if (k > te) for (; k <= X; ) ke(m[k], O, V, !0), k++
      else {
        const oe = k,
          ie = k,
          Ce = new Map()
        for (k = ie; k <= te; k++) {
          const nt = (h[k] = J ? or(h[k]) : ot(h[k]))
          nt.key != null && Ce.set(nt.key, k)
        }
        let be,
          Oe = 0
        const ht = te - ie + 1
        let jr = !1,
          M8 = 0
        const gn = new Array(ht)
        for (k = 0; k < ht; k++) gn[k] = 0
        for (k = oe; k <= X; k++) {
          const nt = m[k]
          if (Oe >= ht) {
            ke(nt, O, V, !0)
            continue
          }
          let wt
          if (nt.key != null) wt = Ce.get(nt.key)
          else
            for (be = ie; be <= te; be++)
              if (gn[be - ie] === 0 && Ft(nt, h[be])) {
                wt = be
                break
              }
          wt === void 0
            ? ke(nt, O, V, !0)
            : ((gn[wt - ie] = k + 1),
              wt >= M8 ? (M8 = wt) : (jr = !0),
              F(nt, h[wt], C, null, O, V, q, j, J),
              Oe++)
        }
        const $8 = jr ? Iu(gn) : Dr
        for (be = $8.length - 1, k = ht - 1; k >= 0; k--) {
          const nt = ie + k,
            wt = h[nt],
            j8 = nt + 1 < ee ? h[nt + 1].el : I
          gn[k] === 0
            ? F(null, wt, C, j8, O, V, q, j, J)
            : jr && (be < 0 || k !== $8[be] ? dt(wt, C, j8, 2) : be--)
        }
      }
    },
    dt = (m, h, C, I, O = null) => {
      const { el: V, type: q, transition: j, children: J, shapeFlag: k } = m
      if (k & 6) {
        dt(m.component.subTree, h, C, I)
        return
      }
      if (k & 128) {
        m.suspense.move(h, C, I)
        return
      }
      if (k & 64) {
        q.move(m, h, C, H)
        return
      }
      if (q === Je) {
        n(V, h, C)
        for (let X = 0; X < J.length; X++) dt(J[X], h, C, I)
        n(m.anchor, h, C)
        return
      }
      if (q === Yr) {
        g(m, h, C)
        return
      }
      if (I !== 2 && k & 1 && j)
        if (I === 0) j.beforeEnter(V), n(V, h, C), He(() => j.enter(V), O)
        else {
          const { leave: X, delayLeave: te, afterLeave: oe } = j,
            ie = () => n(V, h, C),
            Ce = () => {
              X(V, () => {
                ie(), oe && oe()
              })
            }
          te ? te(V, ie, Ce) : Ce()
        }
      else n(V, h, C)
    },
    ke = (m, h, C, I = !1, O = !1) => {
      const {
        type: V,
        props: q,
        ref: j,
        children: J,
        dynamicChildren: k,
        shapeFlag: ee,
        patchFlag: X,
        dirs: te
      } = m
      if ((j != null && NE(j, null, C, m, !0), ee & 256)) {
        h.ctx.deactivate(m)
        return
      }
      const oe = ee & 1 && te,
        ie = !Sr(m)
      let Ce
      if ((ie && (Ce = q && q.onVnodeBeforeUnmount) && Qe(Ce, h, m), ee & 6))
        Rt(m.component, C, I)
      else {
        if (ee & 128) {
          m.suspense.unmount(C, I)
          return
        }
        oe && It(m, null, h, 'beforeUnmount'),
          ee & 64
            ? m.type.remove(m, h, C, O, H, I)
            : k && (V !== Je || (X > 0 && X & 64))
            ? Pe(k, h, C, !1, !0)
            : ((V === Je && X & 384) || (!O && ee & 16)) && Pe(J, h, C),
          I && rt(m)
      }
      ;((ie && (Ce = q && q.onVnodeUnmounted)) || oe) &&
        He(() => {
          Ce && Qe(Ce, h, m), oe && It(m, null, h, 'unmounted')
        }, C)
    },
    rt = m => {
      const { type: h, el: C, anchor: I, transition: O } = m
      if (h === Je) {
        xt(C, I)
        return
      }
      if (h === Yr) {
        _(m)
        return
      }
      const V = () => {
        E(C), O && !O.persisted && O.afterLeave && O.afterLeave()
      }
      if (m.shapeFlag & 1 && O && !O.persisted) {
        const { leave: q, delayLeave: j } = O,
          J = () => q(C, V)
        j ? j(m.el, V, J) : J()
      } else V()
    },
    xt = (m, h) => {
      let C
      for (; m !== h; ) (C = B(m)), E(m), (m = C)
      E(h)
    },
    Rt = (m, h, C) => {
      const { bum: I, scope: O, update: V, subTree: q, um: j } = m
      I && yr(I),
        O.stop(),
        V && ((V.active = !1), ke(q, m, h, C)),
        j && He(j, h),
        He(() => {
          m.isUnmounted = !0
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          m.asyncDep &&
          !m.asyncResolved &&
          m.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve())
    },
    Pe = (m, h, C, I = !1, O = !1, V = 0) => {
      for (let q = V; q < m.length; q++) ke(m[q], h, C, I, O)
    },
    L = m =>
      m.shapeFlag & 6
        ? L(m.component.subTree)
        : m.shapeFlag & 128
        ? m.suspense.next()
        : B(m.anchor || m.el),
    W = (m, h, C) => {
      m == null
        ? h._vnode && ke(h._vnode, null, null, !0)
        : F(h._vnode || null, m, h, null, null, null, C),
        Y8(),
        $E(),
        (h._vnode = m)
    },
    H = { p: F, um: ke, m: dt, r: rt, mt: De, mc: T, pc: Y, pbc: $, n: L, o: e }
  let Q, Be
  return t && ([Q, Be] = t(H)), { render: W, hydrate: Q, createApp: Fu(W, Q) }
}
function mr({ effect: e, update: t }, r) {
  e.allowRecurse = t.allowRecurse = r
}
function ms(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function n8(e, t, r = !1) {
  const n = e.children,
    E = t.children
  if (z(n) && z(E))
    for (let o = 0; o < n.length; o++) {
      const a = n[o]
      let l = E[o]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = E[o] = or(E[o])), (l.el = a.el)),
        r || n8(a, l)),
        l.type === nn && (l.el = a.el)
    }
}
function Iu(e) {
  const t = e.slice(),
    r = [0]
  let n, E, o, a, l
  const s = e.length
  for (n = 0; n < s; n++) {
    const c = e[n]
    if (c !== 0) {
      if (((E = r[r.length - 1]), e[E] < c)) {
        ;(t[n] = E), r.push(n)
        continue
      }
      for (o = 0, a = r.length - 1; o < a; )
        (l = (o + a) >> 1), e[r[l]] < c ? (o = l + 1) : (a = l)
      c < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), (r[o] = n))
    }
  }
  for (o = r.length, a = r[o - 1]; o-- > 0; ) (r[o] = a), (a = t[a])
  return r
}
const Lu = e => e.__isTeleport,
  In = e => e && (e.disabled || e.disabled === ''),
  si = e => typeof SVGElement < 'u' && e instanceof SVGElement,
  oa = (e, t) => {
    const r = e && e.to
    return Ee(r) ? (t ? t(r) : null) : r
  },
  Pu = {
    __isTeleport: !0,
    process(e, t, r, n, E, o, a, l, s, c) {
      const {
          mc: d,
          pc: A,
          pbc: B,
          o: { insert: p, querySelector: f, createText: F, createComment: S }
        } = c,
        D = In(t.props)
      let { shapeFlag: b, children: g, dynamicChildren: _ } = t
      if (e == null) {
        const w = (t.el = F('')),
          R = (t.anchor = F(''))
        p(w, r, n), p(R, r, n)
        const P = (t.target = oa(t.props, f)),
          T = (t.targetAnchor = F(''))
        P && (p(T, P), (a = a || si(P)))
        const x = ($, K) => {
          b & 16 && d(g, $, K, E, o, a, l, s)
        }
        D ? x(r, R) : P && x(P, T)
      } else {
        t.el = e.el
        const w = (t.anchor = e.anchor),
          R = (t.target = e.target),
          P = (t.targetAnchor = e.targetAnchor),
          T = In(e.props),
          x = T ? r : R,
          $ = T ? w : P
        if (
          ((a = a || si(R)),
          _
            ? (B(e.dynamicChildren, _, x, E, o, a, l), n8(e, t, !0))
            : s || A(e, t, x, $, E, o, a, l, !1),
          D)
        )
          T
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : yE(t, r, w, c, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const K = (t.target = oa(t.props, f))
          K && yE(t, K, null, c, 0)
        } else T && yE(t, R, P, c, 1)
      }
      hs(t)
    },
    remove(e, t, r, n, { um: E, o: { remove: o } }, a) {
      const {
        shapeFlag: l,
        children: s,
        anchor: c,
        targetAnchor: d,
        target: A,
        props: B
      } = e
      if ((A && o(d), a && o(c), l & 16)) {
        const p = a || !In(B)
        for (let f = 0; f < s.length; f++) {
          const F = s[f]
          E(F, t, r, p, !!F.dynamicChildren)
        }
      }
    },
    move: yE,
    hydrate: Ou
  }
function yE(e, t, r, { o: { insert: n }, m: E }, o = 2) {
  o === 0 && n(e.targetAnchor, t, r)
  const { el: a, anchor: l, shapeFlag: s, children: c, props: d } = e,
    A = o === 2
  if ((A && n(a, t, r), (!A || In(d)) && s & 16))
    for (let B = 0; B < c.length; B++) E(c[B], t, r, 2)
  A && n(l, t, r)
}
function Ou(
  e,
  t,
  r,
  n,
  E,
  o,
  { o: { nextSibling: a, parentNode: l, querySelector: s } },
  c
) {
  const d = (t.target = oa(t.props, s))
  if (d) {
    const A = d._lpa || d.firstChild
    if (t.shapeFlag & 16)
      if (In(t.props))
        (t.anchor = c(a(e), t, l(e), r, n, E, o)), (t.targetAnchor = A)
      else {
        t.anchor = a(e)
        let B = A
        for (; B; )
          if (
            ((B = a(B)), B && B.nodeType === 8 && B.data === 'teleport anchor')
          ) {
            ;(t.targetAnchor = B),
              (d._lpa = t.targetAnchor && a(t.targetAnchor))
            break
          }
        c(A, t, d, r, n, E, o)
      }
    hs(t)
  }
  return t.anchor && a(t.anchor)
}
const Zv = Pu
function hs(e) {
  const t = e.ctx
  if (t && t.ut) {
    let r = e.children[0].el
    for (; r && r !== e.targetAnchor; )
      r.nodeType === 1 && r.setAttribute('data-v-owner', t.uid),
        (r = r.nextSibling)
    t.ut()
  }
}
const Je = Symbol.for('v-fgt'),
  nn = Symbol.for('v-txt'),
  Ge = Symbol.for('v-cmt'),
  Yr = Symbol.for('v-stc'),
  Ln = []
let et = null
function E8(e = !1) {
  Ln.push((et = e ? null : []))
}
function _s() {
  Ln.pop(), (et = Ln[Ln.length - 1] || null)
}
let Ir = 1
function ci(e) {
  Ir += e
}
function gs(e) {
  return (
    (e.dynamicChildren = Ir > 0 ? et || Dr : null),
    _s(),
    Ir > 0 && et && et.push(e),
    e
  )
}
function e3(e, t, r, n, E, o) {
  return gs(bs(e, t, r, n, E, o, !0))
}
function Fs(e, t, r, n, E) {
  return gs(we(e, t, r, n, E, !0))
}
function Lr(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Ft(e, t) {
  return e.type === t.type && e.key === t.key
}
function t3(e) {}
const io = '__vInternal',
  Ds = ({ key: e }) => e ?? null,
  xE = ({ ref: e, ref_key: t, ref_for: r }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? Ee(e) || Ie(e) || ne(e)
        ? { i: Me, r: e, k: t, f: !!r }
        : e
      : null
  )
function bs(
  e,
  t = null,
  r = null,
  n = 0,
  E = null,
  o = e === Je ? 0 : 1,
  a = !1,
  l = !1
) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ds(t),
    ref: t && xE(t),
    scopeId: Eo,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: E,
    dynamicChildren: null,
    appContext: null,
    ctx: Me
  }
  return (
    l
      ? (o8(s, r), o & 128 && e.normalize(s))
      : r && (s.shapeFlag |= Ee(r) ? 8 : 16),
    Ir > 0 &&
      !a &&
      et &&
      (s.patchFlag > 0 || o & 6) &&
      s.patchFlag !== 32 &&
      et.push(s),
    s
  )
}
const we = Vu
function Vu(e, t = null, r = null, n = 0, E = null, o = !1) {
  if (((!e || e === is) && (e = Ge), Lr(e))) {
    const l = qt(e, t, !0)
    return (
      r && o8(l, r),
      Ir > 0 &&
        !o &&
        et &&
        (l.shapeFlag & 6 ? (et[et.indexOf(e)] = l) : et.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((Hu(e) && (e = e.__vccOpts), t)) {
    t = xu(t)
    let { class: l, style: s } = t
    l && !Ee(l) && (t.class = Zn(l)),
      ge(s) && (Ja(s) && !z(s) && (s = Re({}, s)), (t.style = Qn(s)))
  }
  const a = Ee(e) ? 1 : es(e) ? 128 : Lu(e) ? 64 : ge(e) ? 4 : ne(e) ? 2 : 0
  return bs(e, t, r, n, E, a, o, !0)
}
function xu(e) {
  return e ? (Ja(e) || io in e ? Re({}, e) : e) : null
}
function qt(e, t, r = !1) {
  const { props: n, ref: E, patchFlag: o, children: a } = e,
    l = t ? ku(n || {}, t) : n
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ds(l),
    ref:
      t && t.ref ? (r && E ? (z(E) ? E.concat(xE(t)) : [E, xE(t)]) : xE(t)) : E,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Je ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && qt(e.ssContent),
    ssFallback: e.ssFallback && qt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}
function ys(e = ' ', t = 0) {
  return we(nn, null, e, t)
}
function r3(e, t) {
  const r = we(Yr, null, e)
  return (r.staticCount = t), r
}
function n3(e = '', t = !1) {
  return t ? (E8(), Fs(Ge, null, e)) : we(Ge, null, e)
}
function ot(e) {
  return e == null || typeof e == 'boolean'
    ? we(Ge)
    : z(e)
    ? we(Je, null, e.slice())
    : typeof e == 'object'
    ? or(e)
    : we(nn, null, String(e))
}
function or(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : qt(e)
}
function o8(e, t) {
  let r = 0
  const { shapeFlag: n } = e
  if (t == null) t = null
  else if (z(t)) r = 16
  else if (typeof t == 'object')
    if (n & 65) {
      const E = t.default
      E && (E._c && (E._d = !1), o8(e, E()), E._c && (E._d = !0))
      return
    } else {
      r = 32
      const E = t._
      !E && !(io in t)
        ? (t._ctx = Me)
        : E === 3 &&
          Me &&
          (Me.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    ne(t)
      ? ((t = { default: t, _ctx: Me }), (r = 32))
      : ((t = String(t)), n & 64 ? ((r = 16), (t = [ys(t)])) : (r = 8))
  ;(e.children = t), (e.shapeFlag |= r)
}
function ku(...e) {
  const t = {}
  for (let r = 0; r < e.length; r++) {
    const n = e[r]
    for (const E in n)
      if (E === 'class')
        t.class !== n.class && (t.class = Zn([t.class, n.class]))
      else if (E === 'style') t.style = Qn([t.style, n.style])
      else if (An(E)) {
        const o = t[E],
          a = n[E]
        a &&
          o !== a &&
          !(z(o) && o.includes(a)) &&
          (t[E] = o ? [].concat(o, a) : a)
      } else E !== '' && (t[E] = n[E])
  }
  return t
}
function Qe(e, t, r, n = null) {
  pt(e, t, 7, [r, n])
}
const Mu = us()
let $u = 0
function Cs(e, t, r) {
  const n = e.type,
    E = (t ? t.appContext : e.appContext) || Mu,
    o = {
      uid: $u++,
      vnode: e,
      type: n,
      parent: t,
      appContext: E,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new ka(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(E.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: As(n, E),
      emitsOptions: Ql(n, E),
      emit: null,
      emitted: null,
      propsDefaults: _e,
      inheritAttrs: n.inheritAttrs,
      ctx: _e,
      data: _e,
      props: _e,
      attrs: _e,
      slots: _e,
      refs: _e,
      setupState: _e,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = H0.bind(null, o)),
    e.ce && e.ce(o),
    o
  )
}
let Ve = null
const ct = () => Ve || Me
let a8,
  Nr,
  ui = '__VUE_INSTANCE_SETTERS__'
;(Nr = kE()[ui]) || (Nr = kE()[ui] = []),
  Nr.push(e => (Ve = e)),
  (a8 = e => {
    Nr.length > 1 ? Nr.forEach(t => t(e)) : Nr[0](e)
  })
const dr = e => {
    a8(e), e.scope.on()
  },
  cr = () => {
    Ve && Ve.scope.off(), a8(null)
  }
function Ss(e) {
  return e.vnode.shapeFlag & 4
}
let En = !1
function Ts(e, t = !1) {
  En = t
  const { props: r, children: n } = e.vnode,
    E = Ss(e)
  Du(e, r, E, t), Cu(e, n)
  const o = E ? ju(e, t) : void 0
  return (En = !1), o
}
function ju(e, t) {
  const r = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = za(new Proxy(e.ctx, ta)))
  const { setup: n } = r
  if (n) {
    const E = (e.setupContext = n.length > 1 ? ws(e) : null)
    dr(e), xr()
    const o = sr(n, e, 0, [e.props, E])
    if ((kr(), cr(), GE(o))) {
      if ((o.then(cr, cr), t))
        return o
          .then(a => {
            aa(e, a, t)
          })
          .catch(a => {
            pn(a, e, 0)
          })
      e.asyncDep = o
    } else aa(e, o, t)
  } else Rs(e, t)
}
function aa(e, t, r) {
  ne(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ge(t) && (e.setupState = qa(t)),
    Rs(e, r)
}
let HE, ia
function E3(e) {
  ;(HE = e),
    (ia = t => {
      t.render._rc && (t.withProxy = new Proxy(t.ctx, vu))
    })
}
const o3 = () => !HE
function Rs(e, t, r) {
  const n = e.type
  if (!e.render) {
    if (!t && HE && !n.render) {
      const E = n.template || t8(e).template
      if (E) {
        const { isCustomElement: o, compilerOptions: a } = e.appContext.config,
          { delimiters: l, compilerOptions: s } = n,
          c = Re(Re({ isCustomElement: o, delimiters: l }, a), s)
        n.render = HE(E, c)
      }
    }
    ;(e.render = n.render || vt), ia && ia(e)
  }
  {
    dr(e), xr()
    try {
      pu(e)
    } finally {
      kr(), cr()
    }
  }
}
function Nu(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, r) {
        return Xe(e, 'get', '$attrs'), t[r]
      }
    }))
  )
}
function ws(e) {
  const t = r => {
    e.exposed = r || {}
  }
  return {
    get attrs() {
      return Nu(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}
function lo(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(qa(za(e.exposed)), {
        get(t, r) {
          if (r in t) return t[r]
          if (r in wn) return wn[r](e)
        },
        has(t, r) {
          return r in t || r in wn
        }
      }))
    )
}
function la(e, t = !0) {
  return ne(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Hu(e) {
  return ne(e) && '__vccOpts' in e
}
const y = (e, t) => Kl(e, t, En)
function u(e, t, r) {
  const n = arguments.length
  return n === 2
    ? ge(t) && !z(t)
      ? Lr(t)
        ? we(e, null, [t])
        : we(e, t)
      : we(e, null, t)
    : (n > 3
        ? (r = Array.prototype.slice.call(arguments, 2))
        : n === 3 && Lr(r) && (r = [r]),
      we(e, t, r))
}
const Ju = Symbol.for('v-scx'),
  zu = () => me(Ju)
function a3() {}
function i3(e, t, r, n) {
  const E = r[n]
  if (E && Uu(E, e)) return E
  const o = t()
  return (o.memo = e.slice()), (r[n] = o)
}
function Uu(e, t) {
  const r = e.memo
  if (r.length != t.length) return !1
  for (let n = 0; n < r.length; n++) if (zt(r[n], t[n])) return !1
  return Ir > 0 && et && et.push(e), !0
}
const qu = '3.3.7',
  Wu = {
    createComponentInstance: Cs,
    setupComponent: Ts,
    renderComponentRoot: VE,
    setCurrentRenderingInstance: zn,
    isVNode: Lr,
    normalizeVNode: ot
  },
  l3 = Wu,
  s3 = null,
  c3 = null,
  Ku = 'http://www.w3.org/2000/svg',
  gr = typeof document < 'u' ? document : null,
  di = gr && gr.createElement('template'),
  Gu = {
    insert: (e, t, r) => {
      t.insertBefore(e, r || null)
    },
    remove: e => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, r, n) => {
      const E = t
        ? gr.createElementNS(Ku, e)
        : gr.createElement(e, r ? { is: r } : void 0)
      return (
        e === 'select' &&
          n &&
          n.multiple != null &&
          E.setAttribute('multiple', n.multiple),
        E
      )
    },
    createText: e => gr.createTextNode(e),
    createComment: e => gr.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => gr.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, r, n, E, o) {
      const a = r ? r.previousSibling : t.lastChild
      if (E && (E === o || E.nextSibling))
        for (
          ;
          t.insertBefore(E.cloneNode(!0), r),
            !(E === o || !(E = E.nextSibling));

        );
      else {
        di.innerHTML = n ? `<svg>${e}</svg>` : e
        const l = di.content
        if (n) {
          const s = l.firstChild
          for (; s.firstChild; ) l.appendChild(s.firstChild)
          l.removeChild(s)
        }
        t.insertBefore(l, r)
      }
      return [
        a ? a.nextSibling : t.firstChild,
        r ? r.previousSibling : t.lastChild
      ]
    }
  },
  er = 'transition',
  Dn = 'animation',
  on = Symbol('_vtc'),
  Ar = (e, { slots: t }) => u(nu, Ls(e), t)
Ar.displayName = 'Transition'
const Is = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  Xu = (Ar.props = Re({}, Es, Is)),
  hr = (e, t = []) => {
    z(e) ? e.forEach(r => r(...t)) : e && e(...t)
  },
  Ai = e => (e ? (z(e) ? e.some(t => t.length > 1) : e.length > 1) : !1)
function Ls(e) {
  const t = {}
  for (const N in e) N in Is || (t[N] = e[N])
  if (e.css === !1) return t
  const {
      name: r = 'v',
      type: n,
      duration: E,
      enterFromClass: o = `${r}-enter-from`,
      enterActiveClass: a = `${r}-enter-active`,
      enterToClass: l = `${r}-enter-to`,
      appearFromClass: s = o,
      appearActiveClass: c = a,
      appearToClass: d = l,
      leaveFromClass: A = `${r}-leave-from`,
      leaveActiveClass: B = `${r}-leave-active`,
      leaveToClass: p = `${r}-leave-to`
    } = e,
    f = Yu(E),
    F = f && f[0],
    S = f && f[1],
    {
      onBeforeEnter: D,
      onEnter: b,
      onEnterCancelled: g,
      onLeave: _,
      onLeaveCancelled: w,
      onBeforeAppear: R = D,
      onAppear: P = b,
      onAppearCancelled: T = g
    } = t,
    x = (N, Z, De) => {
      nr(N, Z ? d : l), nr(N, Z ? c : a), De && De()
    },
    $ = (N, Z) => {
      ;(N._isLeaving = !1), nr(N, A), nr(N, p), nr(N, B), Z && Z()
    },
    K = N => (Z, De) => {
      const fe = N ? P : b,
        G = () => x(Z, N, De)
      hr(fe, [Z, G]),
        Bi(() => {
          nr(Z, N ? s : o), Mt(Z, N ? d : l), Ai(fe) || vi(Z, n, F, G)
        })
    }
  return Re(t, {
    onBeforeEnter(N) {
      hr(D, [N]), Mt(N, o), Mt(N, a)
    },
    onBeforeAppear(N) {
      hr(R, [N]), Mt(N, s), Mt(N, c)
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(N, Z) {
      N._isLeaving = !0
      const De = () => $(N, Z)
      Mt(N, A),
        Os(),
        Mt(N, B),
        Bi(() => {
          N._isLeaving && (nr(N, A), Mt(N, p), Ai(_) || vi(N, n, S, De))
        }),
        hr(_, [N, De])
    },
    onEnterCancelled(N) {
      x(N, !1), hr(g, [N])
    },
    onAppearCancelled(N) {
      x(N, !0), hr(T, [N])
    },
    onLeaveCancelled(N) {
      $(N), hr(w, [N])
    }
  })
}
function Yu(e) {
  if (e == null) return null
  if (ge(e)) return [So(e.enter), So(e.leave)]
  {
    const t = So(e)
    return [t, t]
  }
}
function So(e) {
  return $n(e)
}
function Mt(e, t) {
  t.split(/\s+/).forEach(r => r && e.classList.add(r)),
    (e[on] || (e[on] = new Set())).add(t)
}
function nr(e, t) {
  t.split(/\s+/).forEach(n => n && e.classList.remove(n))
  const r = e[on]
  r && (r.delete(t), r.size || (e[on] = void 0))
}
function Bi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Qu = 0
function vi(e, t, r, n) {
  const E = (e._endId = ++Qu),
    o = () => {
      E === e._endId && n()
    }
  if (r) return setTimeout(o, r)
  const { type: a, timeout: l, propCount: s } = Ps(e, t)
  if (!a) return n()
  const c = a + 'end'
  let d = 0
  const A = () => {
      e.removeEventListener(c, B), o()
    },
    B = p => {
      p.target === e && ++d >= s && A()
    }
  setTimeout(() => {
    d < s && A()
  }, l + 1),
    e.addEventListener(c, B)
}
function Ps(e, t) {
  const r = window.getComputedStyle(e),
    n = f => (r[f] || '').split(', '),
    E = n(`${er}Delay`),
    o = n(`${er}Duration`),
    a = pi(E, o),
    l = n(`${Dn}Delay`),
    s = n(`${Dn}Duration`),
    c = pi(l, s)
  let d = null,
    A = 0,
    B = 0
  t === er
    ? a > 0 && ((d = er), (A = a), (B = o.length))
    : t === Dn
    ? c > 0 && ((d = Dn), (A = c), (B = s.length))
    : ((A = Math.max(a, c)),
      (d = A > 0 ? (a > c ? er : Dn) : null),
      (B = d ? (d === er ? o.length : s.length) : 0))
  const p =
    d === er && /\b(transform|all)(,|$)/.test(n(`${er}Property`).toString())
  return { type: d, timeout: A, propCount: B, hasTransform: p }
}
function pi(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((r, n) => fi(r) + fi(e[n])))
}
function fi(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Os() {
  return document.body.offsetHeight
}
function Zu(e, t, r) {
  const n = e[on]
  n && (t = (t ? [t, ...n] : [...n]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : r
      ? e.setAttribute('class', t)
      : (e.className = t)
}
const i8 = Symbol('_vod'),
  e1 = {
    beforeMount(e, { value: t }, { transition: r }) {
      ;(e[i8] = e.style.display === 'none' ? '' : e.style.display),
        r && t ? r.beforeEnter(e) : bn(e, t)
    },
    mounted(e, { value: t }, { transition: r }) {
      r && t && r.enter(e)
    },
    updated(e, { value: t, oldValue: r }, { transition: n }) {
      !t != !r &&
        (n
          ? t
            ? (n.beforeEnter(e), bn(e, !0), n.enter(e))
            : n.leave(e, () => {
                bn(e, !1)
              })
          : bn(e, t))
    },
    beforeUnmount(e, { value: t }) {
      bn(e, t)
    }
  }
function bn(e, t) {
  e.style.display = t ? e[i8] : 'none'
}
function t1() {
  e1.getSSRProps = ({ value: e }) => {
    if (!e) return { style: { display: 'none' } }
  }
}
function r1(e, t, r) {
  const n = e.style,
    E = Ee(r)
  if (r && !E) {
    if (t && !Ee(t)) for (const o in t) r[o] == null && sa(n, o, '')
    for (const o in r) sa(n, o, r[o])
  } else {
    const o = n.display
    E ? t !== r && (n.cssText = r) : t && e.removeAttribute('style'),
      i8 in e && (n.display = o)
  }
}
const mi = /\s*!important$/
function sa(e, t, r) {
  if (z(r)) r.forEach(n => sa(e, t, n))
  else if ((r == null && (r = ''), t.startsWith('--'))) e.setProperty(t, r)
  else {
    const n = n1(e, t)
    mi.test(r)
      ? e.setProperty(Ze(n), r.replace(mi, ''), 'important')
      : (e[n] = r)
  }
}
const hi = ['Webkit', 'Moz', 'ms'],
  To = {}
function n1(e, t) {
  const r = To[t]
  if (r) return r
  let n = Ue(t)
  if (n !== 'filter' && n in e) return (To[t] = n)
  n = Bn(n)
  for (let E = 0; E < hi.length; E++) {
    const o = hi[E] + n
    if (o in e) return (To[t] = o)
  }
  return t
}
const _i = 'http://www.w3.org/1999/xlink'
function E1(e, t, r, n, E) {
  if (n && t.startsWith('xlink:'))
    r == null
      ? e.removeAttributeNS(_i, t.slice(6, t.length))
      : e.setAttributeNS(_i, t, r)
  else {
    const o = wl(t)
    r == null || (o && !xa(r))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : r)
  }
}
function o1(e, t, r, n, E, o, a) {
  if (t === 'innerHTML' || t === 'textContent') {
    n && a(n, E, o), (e[t] = r ?? '')
    return
  }
  const l = e.tagName
  if (t === 'value' && l !== 'PROGRESS' && !l.includes('-')) {
    e._value = r
    const c = l === 'OPTION' ? e.getAttribute('value') : e.value,
      d = r ?? ''
    c !== d && (e.value = d), r == null && e.removeAttribute(t)
    return
  }
  let s = !1
  if (r === '' || r == null) {
    const c = typeof e[t]
    c === 'boolean'
      ? (r = xa(r))
      : r == null && c === 'string'
      ? ((r = ''), (s = !0))
      : c === 'number' && ((r = 0), (s = !0))
  }
  try {
    e[t] = r
  } catch {}
  s && e.removeAttribute(t)
}
function Ht(e, t, r, n) {
  e.addEventListener(t, r, n)
}
function a1(e, t, r, n) {
  e.removeEventListener(t, r, n)
}
const gi = Symbol('_vei')
function i1(e, t, r, n, E = null) {
  const o = e[gi] || (e[gi] = {}),
    a = o[t]
  if (n && a) a.value = n
  else {
    const [l, s] = l1(t)
    if (n) {
      const c = (o[t] = u1(n, E))
      Ht(e, l, c, s)
    } else a && (a1(e, l, a, s), (o[t] = void 0))
  }
}
const Fi = /(?:Once|Passive|Capture)$/
function l1(e) {
  let t
  if (Fi.test(e)) {
    t = {}
    let n
    for (; (n = e.match(Fi)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Ze(e.slice(2)), t]
}
let Ro = 0
const s1 = Promise.resolve(),
  c1 = () => Ro || (s1.then(() => (Ro = 0)), (Ro = Date.now()))
function u1(e, t) {
  const r = n => {
    if (!n._vts) n._vts = Date.now()
    else if (n._vts <= r.attached) return
    pt(d1(n, r.value), t, 5, [n])
  }
  return (r.value = e), (r.attached = c1()), r
}
function d1(e, t) {
  if (z(t)) {
    const r = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        r.call(e), (e._stopped = !0)
      }),
      t.map(n => E => !E._stopped && n && n(E))
    )
  } else return t
}
const Di = /^on[a-z]/,
  A1 = (e, t, r, n, E = !1, o, a, l, s) => {
    t === 'class'
      ? Zu(e, n, E)
      : t === 'style'
      ? r1(e, r, n)
      : An(t)
      ? WE(t) || i1(e, t, r, n, a)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : B1(e, t, n, E)
        )
      ? o1(e, t, n, o, a, l, s)
      : (t === 'true-value'
          ? (e._trueValue = n)
          : t === 'false-value' && (e._falseValue = n),
        E1(e, t, n, E))
  }
function B1(e, t, r, n) {
  return n
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && Di.test(t) && ne(r))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (Di.test(t) && Ee(r))
    ? !1
    : t in e
}
/*! #__NO_SIDE_EFFECTS__ */ function v1(e, t) {
  const r = M(e)
  class n extends l8 {
    constructor(o) {
      super(r, o, t)
    }
  }
  return (n.def = r), n
}
/*! #__NO_SIDE_EFFECTS__ */ const u3 = e => v1(e, w1),
  p1 = typeof HTMLElement < 'u' ? HTMLElement : class {}
class l8 extends p1 {
  constructor(t, r = {}, n) {
    super(),
      (this._def = t),
      (this._props = r),
      (this._instance = null),
      (this._connected = !1),
      (this._resolved = !1),
      (this._numberProps = null),
      (this._ob = null),
      this.shadowRoot && n
        ? n(this._createVNode(), this.shadowRoot)
        : (this.attachShadow({ mode: 'open' }),
          this._def.__asyncLoader || this._resolveProps(this._def))
  }
  connectedCallback() {
    ;(this._connected = !0),
      this._instance || (this._resolved ? this._update() : this._resolveDef())
  }
  disconnectedCallback() {
    ;(this._connected = !1),
      this._ob && (this._ob.disconnect(), (this._ob = null)),
      Gt(() => {
        this._connected || (Ri(null, this.shadowRoot), (this._instance = null))
      })
  }
  _resolveDef() {
    this._resolved = !0
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name)
    ;(this._ob = new MutationObserver(n => {
      for (const E of n) this._setAttr(E.attributeName)
    })),
      this._ob.observe(this, { attributes: !0 })
    const t = (n, E = !1) => {
        const { props: o, styles: a } = n
        let l
        if (o && !z(o))
          for (const s in o) {
            const c = o[s]
            ;(c === Number || (c && c.type === Number)) &&
              (s in this._props && (this._props[s] = $n(this._props[s])),
              ((l || (l = Object.create(null)))[Ue(s)] = !0))
          }
        ;(this._numberProps = l),
          E && this._resolveProps(n),
          this._applyStyles(a),
          this._update()
      },
      r = this._def.__asyncLoader
    r ? r().then(n => t(n, !0)) : t(this._def)
  }
  _resolveProps(t) {
    const { props: r } = t,
      n = z(r) ? r : Object.keys(r || {})
    for (const E of Object.keys(this))
      E[0] !== '_' && n.includes(E) && this._setProp(E, this[E], !0, !1)
    for (const E of n.map(Ue))
      Object.defineProperty(this, E, {
        get() {
          return this._getProp(E)
        },
        set(o) {
          this._setProp(E, o)
        }
      })
  }
  _setAttr(t) {
    let r = this.getAttribute(t)
    const n = Ue(t)
    this._numberProps && this._numberProps[n] && (r = $n(r)),
      this._setProp(n, r, !1)
  }
  _getProp(t) {
    return this._props[t]
  }
  _setProp(t, r, n = !0, E = !0) {
    r !== this._props[t] &&
      ((this._props[t] = r),
      E && this._instance && this._update(),
      n &&
        (r === !0
          ? this.setAttribute(Ze(t), '')
          : typeof r == 'string' || typeof r == 'number'
          ? this.setAttribute(Ze(t), r + '')
          : r || this.removeAttribute(Ze(t))))
  }
  _update() {
    Ri(this._createVNode(), this.shadowRoot)
  }
  _createVNode() {
    const t = we(this._def, Re({}, this._props))
    return (
      this._instance ||
        (t.ce = r => {
          ;(this._instance = r), (r.isCE = !0)
          const n = (o, a) => {
            this.dispatchEvent(new CustomEvent(o, { detail: a }))
          }
          r.emit = (o, ...a) => {
            n(o, a), Ze(o) !== o && n(Ze(o), a)
          }
          let E = this
          for (; (E = E && (E.parentNode || E.host)); )
            if (E instanceof l8) {
              ;(r.parent = E._instance), (r.provides = E._instance.provides)
              break
            }
        }),
      t
    )
  }
  _applyStyles(t) {
    t &&
      t.forEach(r => {
        const n = document.createElement('style')
        ;(n.textContent = r), this.shadowRoot.appendChild(n)
      })
  }
}
function d3(e = '$style') {
  {
    const t = ct()
    if (!t) return _e
    const r = t.type.__cssModules
    if (!r) return _e
    const n = r[e]
    return n || _e
  }
}
function A3(e) {
  const t = ct()
  if (!t) return
  const r = (t.ut = (E = e(t.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
      ).forEach(o => ua(o, E))
    }),
    n = () => {
      const E = e(t.proxy)
      ca(t.subTree, E), r(E)
    }
  eu(n),
    se(() => {
      const E = new MutationObserver(n)
      E.observe(t.subTree.el.parentNode, { childList: !0 }),
        fn(() => E.disconnect())
    })
}
function ca(e, t) {
  if (e.shapeFlag & 128) {
    const r = e.suspense
    ;(e = r.activeBranch),
      r.pendingBranch &&
        !r.isHydrating &&
        r.effects.push(() => {
          ca(r.activeBranch, t)
        })
  }
  for (; e.component; ) e = e.component.subTree
  if (e.shapeFlag & 1 && e.el) ua(e.el, t)
  else if (e.type === Je) e.children.forEach(r => ca(r, t))
  else if (e.type === Yr) {
    let { el: r, anchor: n } = e
    for (; r && (ua(r, t), r !== n); ) r = r.nextSibling
  }
}
function ua(e, t) {
  if (e.nodeType === 1) {
    const r = e.style
    for (const n in t) r.setProperty(`--${n}`, t[n])
  }
}
const Vs = new WeakMap(),
  xs = new WeakMap(),
  JE = Symbol('_moveCb'),
  bi = Symbol('_enterCb'),
  ks = {
    name: 'TransitionGroup',
    props: Re({}, Xu, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const r = ct(),
        n = ns()
      let E, o
      return (
        Qa(() => {
          if (!E.length) return
          const a = e.moveClass || `${e.name || 'v'}-move`
          if (!F1(E[0].el, r.vnode.el, a)) return
          E.forEach(h1), E.forEach(_1)
          const l = E.filter(g1)
          Os(),
            l.forEach(s => {
              const c = s.el,
                d = c.style
              Mt(c, a),
                (d.transform = d.webkitTransform = d.transitionDuration = '')
              const A = (c[JE] = B => {
                ;(B && B.target !== c) ||
                  ((!B || /transform$/.test(B.propertyName)) &&
                    (c.removeEventListener('transitionend', A),
                    (c[JE] = null),
                    nr(c, a)))
              })
              c.addEventListener('transitionend', A)
            })
        }),
        () => {
          const a = le(e),
            l = Ls(a)
          let s = a.tag || Je
          ;(E = o), (o = t.default ? Ya(t.default()) : [])
          for (let c = 0; c < o.length; c++) {
            const d = o[c]
            d.key != null && rn(d, qn(d, l, n, r))
          }
          if (E)
            for (let c = 0; c < E.length; c++) {
              const d = E[c]
              rn(d, qn(d, l, n, r)), Vs.set(d, d.el.getBoundingClientRect())
            }
          return we(s, null, o)
        }
      )
    }
  },
  f1 = e => delete e.mode
ks.props
const m1 = ks
function h1(e) {
  const t = e.el
  t[JE] && t[JE](), t[bi] && t[bi]()
}
function _1(e) {
  xs.set(e, e.el.getBoundingClientRect())
}
function g1(e) {
  const t = Vs.get(e),
    r = xs.get(e),
    n = t.left - r.left,
    E = t.top - r.top
  if (n || E) {
    const o = e.el.style
    return (
      (o.transform = o.webkitTransform = `translate(${n}px,${E}px)`),
      (o.transitionDuration = '0s'),
      e
    )
  }
}
function F1(e, t, r) {
  const n = e.cloneNode(),
    E = e[on]
  E &&
    E.forEach(l => {
      l.split(/\s+/).forEach(s => s && n.classList.remove(s))
    }),
    r.split(/\s+/).forEach(l => l && n.classList.add(l)),
    (n.style.display = 'none')
  const o = t.nodeType === 1 ? t : t.parentNode
  o.appendChild(n)
  const { hasTransform: a } = Ps(n)
  return o.removeChild(n), a
}
const Br = e => {
  const t = e.props['onUpdate:modelValue'] || !1
  return z(t) ? r => yr(t, r) : t
}
function D1(e) {
  e.target.composing = !0
}
function yi(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const ft = Symbol('_assign'),
  da = {
    created(e, { modifiers: { lazy: t, trim: r, number: n } }, E) {
      e[ft] = Br(E)
      const o = n || (E.props && E.props.type === 'number')
      Ht(e, t ? 'change' : 'input', a => {
        if (a.target.composing) return
        let l = e.value
        r && (l = l.trim()), o && (l = Mn(l)), e[ft](l)
      }),
        r &&
          Ht(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t ||
          (Ht(e, 'compositionstart', D1),
          Ht(e, 'compositionend', yi),
          Ht(e, 'change', yi))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: r, trim: n, number: E } },
      o
    ) {
      if (
        ((e[ft] = Br(o)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== 'range' &&
            (r ||
              (n && e.value.trim() === t) ||
              ((E || e.type === 'number') && Mn(e.value) === t))))
      )
        return
      const a = t ?? ''
      e.value !== a && (e.value = a)
    }
  },
  Ms = {
    deep: !0,
    created(e, t, r) {
      ;(e[ft] = Br(r)),
        Ht(e, 'change', () => {
          const n = e._modelValue,
            E = an(e),
            o = e.checked,
            a = e[ft]
          if (z(n)) {
            const l = eE(n, E),
              s = l !== -1
            if (o && !s) a(n.concat(E))
            else if (!o && s) {
              const c = [...n]
              c.splice(l, 1), a(c)
            }
          } else if (vr(n)) {
            const l = new Set(n)
            o ? l.add(E) : l.delete(E), a(l)
          } else a(js(e, o))
        })
    },
    mounted: Ci,
    beforeUpdate(e, t, r) {
      ;(e[ft] = Br(r)), Ci(e, t, r)
    }
  }
function Ci(e, { value: t, oldValue: r }, n) {
  ;(e._modelValue = t),
    z(t)
      ? (e.checked = eE(t, n.props.value) > -1)
      : vr(t)
      ? (e.checked = t.has(n.props.value))
      : t !== r && (e.checked = Ut(t, js(e, !0)))
}
const $s = {
    created(e, { value: t }, r) {
      ;(e.checked = Ut(t, r.props.value)),
        (e[ft] = Br(r)),
        Ht(e, 'change', () => {
          e[ft](an(e))
        })
    },
    beforeUpdate(e, { value: t, oldValue: r }, n) {
      ;(e[ft] = Br(n)), t !== r && (e.checked = Ut(t, n.props.value))
    }
  },
  b1 = {
    deep: !0,
    created(e, { value: t, modifiers: { number: r } }, n) {
      const E = vr(t)
      Ht(e, 'change', () => {
        const o = Array.prototype.filter
          .call(e.options, a => a.selected)
          .map(a => (r ? Mn(an(a)) : an(a)))
        e[ft](e.multiple ? (E ? new Set(o) : o) : o[0])
      }),
        (e[ft] = Br(n))
    },
    mounted(e, { value: t }) {
      Si(e, t)
    },
    beforeUpdate(e, t, r) {
      e[ft] = Br(r)
    },
    updated(e, { value: t }) {
      Si(e, t)
    }
  }
function Si(e, t) {
  const r = e.multiple
  if (!(r && !z(t) && !vr(t))) {
    for (let n = 0, E = e.options.length; n < E; n++) {
      const o = e.options[n],
        a = an(o)
      if (r) z(t) ? (o.selected = eE(t, a) > -1) : (o.selected = t.has(a))
      else if (Ut(an(o), t)) {
        e.selectedIndex !== n && (e.selectedIndex = n)
        return
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1)
  }
}
function an(e) {
  return '_value' in e ? e._value : e.value
}
function js(e, t) {
  const r = t ? '_trueValue' : '_falseValue'
  return r in e ? e[r] : t
}
const y1 = {
  created(e, t, r) {
    CE(e, t, r, null, 'created')
  },
  mounted(e, t, r) {
    CE(e, t, r, null, 'mounted')
  },
  beforeUpdate(e, t, r, n) {
    CE(e, t, r, n, 'beforeUpdate')
  },
  updated(e, t, r, n) {
    CE(e, t, r, n, 'updated')
  }
}
function Ns(e, t) {
  switch (e) {
    case 'SELECT':
      return b1
    case 'TEXTAREA':
      return da
    default:
      switch (t) {
        case 'checkbox':
          return Ms
        case 'radio':
          return $s
        default:
          return da
      }
  }
}
function CE(e, t, r, n, E) {
  const a = Ns(e.tagName, r.props && r.props.type)[E]
  a && a(e, t, r, n)
}
function C1() {
  ;(da.getSSRProps = ({ value: e }) => ({ value: e })),
    ($s.getSSRProps = ({ value: e }, t) => {
      if (t.props && Ut(t.props.value, e)) return { checked: !0 }
    }),
    (Ms.getSSRProps = ({ value: e }, t) => {
      if (z(e)) {
        if (t.props && eE(e, t.props.value) > -1) return { checked: !0 }
      } else if (vr(e)) {
        if (t.props && e.has(t.props.value)) return { checked: !0 }
      } else if (e) return { checked: !0 }
    }),
    (y1.getSSRProps = (e, t) => {
      if (typeof t.type != 'string') return
      const r = Ns(t.type.toUpperCase(), t.props && t.props.type)
      if (r.getSSRProps) return r.getSSRProps(e, t)
    })
}
const S1 = ['ctrl', 'shift', 'alt', 'meta'],
  T1 = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, t) => S1.some(r => e[`${r}Key`] && !t.includes(r))
  },
  B3 =
    (e, t) =>
    (r, ...n) => {
      for (let E = 0; E < t.length; E++) {
        const o = T1[t[E]]
        if (o && o(r, t)) return
      }
      return e(r, ...n)
    },
  R1 = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
  },
  v3 = (e, t) => r => {
    if (!('key' in r)) return
    const n = Ze(r.key)
    if (t.some(E => E === n || R1[E] === n)) return e(r)
  },
  Hs = Re({ patchProp: A1 }, Gu)
let Pn,
  Ti = !1
function Js() {
  return Pn || (Pn = Ru(Hs))
}
function zs() {
  return (Pn = Ti ? Pn : wu(Hs)), (Ti = !0), Pn
}
const Ri = (...e) => {
    Js().render(...e)
  },
  w1 = (...e) => {
    zs().hydrate(...e)
  },
  p3 = (...e) => {
    const t = Js().createApp(...e),
      { mount: r } = t
    return (
      (t.mount = n => {
        const E = Us(n)
        if (!E) return
        const o = t._component
        !ne(o) && !o.render && !o.template && (o.template = E.innerHTML),
          (E.innerHTML = '')
        const a = r(E, !1, E instanceof SVGElement)
        return (
          E instanceof Element &&
            (E.removeAttribute('v-cloak'), E.setAttribute('data-v-app', '')),
          a
        )
      }),
      t
    )
  },
  I1 = (...e) => {
    const t = zs().createApp(...e),
      { mount: r } = t
    return (
      (t.mount = n => {
        const E = Us(n)
        if (E) return r(E, !0, E instanceof SVGElement)
      }),
      t
    )
  }
function Us(e) {
  return Ee(e) ? document.querySelector(e) : e
}
let wi = !1
const f3 = () => {
    wi || ((wi = !0), C1(), t1())
  },
  L1 = {
    'v-8daa1a0e': () =>
      i(() => import('./index.html-602c62a5.js'), []).then(({ data: e }) => e),
    'v-a038fc3c': () =>
      i(() => import('./书签收藏.html-d8d69a21.js'), []).then(
        ({ data: e }) => e
      ),
    'v-a9d475b0': () =>
      i(() => import('./index.html-818e8b54.js'), []).then(({ data: e }) => e),
    'v-2af1522a': () =>
      i(() => import('./index.html-895e84b2.js'), []).then(({ data: e }) => e),
    'v-4c2784f0': () =>
      i(() => import('./前后端数据交互.html-a1f44123.js'), []).then(
        ({ data: e }) => e
      ),
    'v-7c618c22': () =>
      i(() => import('./本地存储.html-5f58d91c.js'), []).then(
        ({ data: e }) => e
      ),
    'v-eee9b25a': () =>
      i(() => import('./index.html-b2580791.js'), []).then(({ data: e }) => e),
    'v-2307de2e': () =>
      i(() => import('./index.html-5d06effc.js'), []).then(({ data: e }) => e),
    'v-3443c502': () =>
      i(() => import('./H5微信分享.html-12f10154.js'), []).then(
        ({ data: e }) => e
      ),
    'v-6173ac40': () =>
      i(() => import('./index.html-b99a8ddf.js'), []).then(({ data: e }) => e),
    'v-03d76054': () =>
      i(() => import('./WebSocket的嵌入.html-aec8fb43.js'), []).then(
        ({ data: e }) => e
      ),
    'v-d6005d76': () =>
      i(
        () =>
          import(
            './http断点续传原理_http头Range、Content-Range.html-efb19647.js'
          ),
        []
      ).then(({ data: e }) => e),
    'v-b2f45cfc': () =>
      i(
        () =>
          import(
            './window.btoa 和 window.atob方法实现编码与解码.html-5dee46a3.js'
          ),
        []
      ).then(({ data: e }) => e),
    'v-6b85e19e': () =>
      i(() => import('./一行代码全站进入悼念模式.html-35db16ae.js'), []).then(
        ({ data: e }) => e
      ),
    'v-71bd102f': () =>
      i(() => import('./九种跨域解决方案.html-52938a9b.js'), []).then(
        ({ data: e }) => e
      ),
    'v-35eea18b': () =>
      i(() => import('./前端性能优化总结.html-f49be742.js'), []).then(
        ({ data: e }) => e
      ),
    'v-22f9d806': () =>
      i(() => import('./前端缓存.html-c80d2f85.js'), []).then(
        ({ data: e }) => e
      ),
    'v-148827a0': () =>
      i(() => import('./前端跨页面通信.html-7774d84f.js'), []).then(
        ({ data: e }) => e
      ),
    'v-6430d112': () =>
      i(() => import('./压缩图片.html-5f92d787.js'), []).then(
        ({ data: e }) => e
      ),
    'v-88057dd2': () =>
      i(() => import('./如何精确统计页面停留时长.html-4cc29b14.js'), []).then(
        ({ data: e }) => e
      ),
    'v-0f1df674': () =>
      i(() => import('./常见的网站安全问题.html-c8894e1c.js'), []).then(
        ({ data: e }) => e
      ),
    'v-92c8dac6': () =>
      i(() => import('./开发常用代码片段.html-c645978a.js'), []).then(
        ({ data: e }) => e
      ),
    'v-aceef52a': () =>
      i(
        () => import('./如何全面系统掌握前端效率工程化.html-a80071ed.js'),
        []
      ).then(({ data: e }) => e),
    'v-4171ac0a': () =>
      i(
        () => import('./最新的前端大厂面经（详解答案）.html-edbe5f77.js'),
        []
      ).then(({ data: e }) => e),
    'v-3b82417d': () =>
      i(() => import('./面经系列-css.html-10f2b2a5.js'), []).then(
        ({ data: e }) => e
      ),
    'v-a9a4a7b2': () =>
      i(() => import('./面经系列-html.html-89d0bd8a.js'), []).then(
        ({ data: e }) => e
      ),
    'v-2632ab89': () =>
      i(() => import('./面经系列-js.html-25f4c72a.js'), []).then(
        ({ data: e }) => e
      ),
    'v-432133da': () =>
      i(() => import('./面经系列-vue.html-e260f225.js'), []).then(
        ({ data: e }) => e
      ),
    'v-2f3b8ddd': () =>
      i(() => import('./面经系列-优化.html-c8c01e18.js'), []).then(
        ({ data: e }) => e
      ),
    'v-744babfe': () =>
      i(() => import('./面经系列-基础面试题.html-f21d96f4.js'), []).then(
        ({ data: e }) => e
      ),
    'v-13e4bea5': () =>
      i(() => import('./面经系列-浏览器.html-9d8c144c.js'), []).then(
        ({ data: e }) => e
      ),
    'v-1221fd78': () =>
      i(() => import('./CSS 书写规范建议.html-91e5a10c.js'), []).then(
        ({ data: e }) => e
      ),
    'v-67ae34e2': () =>
      i(
        () =>
          import(
            './JS模块规范：AMD、UMD、CMD、commonJS、ES6 module.html-5680db6c.js'
          ),
        []
      ).then(({ data: e }) => e),
    'v-a0f5bfd2': () =>
      i(() => import('./commonJs详解.html-c2079f6a.js'), []).then(
        ({ data: e }) => e
      ),
    'v-c291d276': () =>
      i(() => import('./Flex布局.html-17e6204f.js'), []).then(
        ({ data: e }) => e
      ),
    'v-7b780ad4': () =>
      i(() => import('./Sass.html-c1f4b485.js'), []).then(({ data: e }) => e),
    'v-4880d4a6': () =>
      i(() => import('./Git版本控制工具.html-54df208b.js'), []).then(
        ({ data: e }) => e
      ),
    'v-05920706': () =>
      i(() => import('./Linux.html-c166f6a9.js'), []).then(({ data: e }) => e),
    'v-03a50e3c': () =>
      i(() => import('./Webpack_babel.html-73dfb3f1.js'), []).then(
        ({ data: e }) => e
      ),
    'v-3109a60f': () =>
      i(() => import('./Webpack4.0.html-704fc64a.js'), []).then(
        ({ data: e }) => e
      ),
    'v-6dee9d16': () =>
      i(() => import('./Webpack5.0学习总结.html-b1856c80.js'), []).then(
        ({ data: e }) => e
      ),
    'v-c0487376': () =>
      i(() => import('./mac安装pod流程.html-70d4cf64.js'), []).then(
        ({ data: e }) => e
      ),
    'v-0202caaf': () =>
      i(() => import('./nginx配置.html-11c202cd.js'), []).then(
        ({ data: e }) => e
      ),
    'v-06367869': () =>
      i(() => import('./vscode常用插件.html-2be23ca7.js'), []).then(
        ({ data: e }) => e
      ),
    'v-080d42c3': () =>
      i(
        () => import('./vue-cli3.X自动部署项目到服务器.html-2de925da.js'),
        []
      ).then(({ data: e }) => e),
    'v-55e548c0': () =>
      i(() => import('./删除RN安卓开发环境.html-fab19d8c.js'), []).then(
        ({ data: e }) => e
      ),
    'v-00140707': () =>
      i(
        () => import('./微服务架构和分布式架构的区别是什么.html-6e03abda.js'),
        []
      ).then(({ data: e }) => e),
    'v-d6e48cfe': () =>
      i(
        () => import('./服务器如何设置服务自动启动进程.html-7b88f5bd.js'),
        []
      ).then(({ data: e }) => e),
    'v-a988658e': () =>
      i(() => import('./理解serverless无服务架构.html-a7b6d178.js'), []).then(
        ({ data: e }) => e
      ),
    'v-4930d5a1': () =>
      i(() => import('./阿里云linux服务器安装桌面.html-eaf35d7e.js'), []).then(
        ({ data: e }) => e
      ),
    'v-12975cb0': () =>
      i(
        () => import('./阿里云轻量应用服务器防火墙配置.html-5f05f426.js'),
        []
      ).then(({ data: e }) => e),
    'v-222b7bd2': () =>
      i(() => import('./index.html-67077198.js'), []).then(({ data: e }) => e),
    'v-6b16d8cf': () =>
      i(() => import('./微信小程序.html-56039bd8.js'), []).then(
        ({ data: e }) => e
      ),
    'v-76bfbc3c': () =>
      i(
        () => import('./vuex和redux的数据持久化缓存方案.html-430e3b1e.js'),
        []
      ).then(({ data: e }) => e),
    'v-b56c971e': () =>
      i(() => import('./vue与react全面对比.html-9443d6dd.js'), []).then(
        ({ data: e }) => e
      ),
    'v-1ff4e172': () =>
      i(() => import('./前端工程师自检清单.html-ffbc7f5d.js'), []).then(
        ({ data: e }) => e
      ),
    'v-2630ab4c': () =>
      i(() => import('./01.html-6dd39620.js'), []).then(({ data: e }) => e),
    'v-a37f46a2': () =>
      i(() => import('./思维导图.html-988d4dfb.js'), []).then(
        ({ data: e }) => e
      ),
    'v-94e632d0': () =>
      i(() => import('./Crypto-js---加密算法库.html-e73b11ec.js'), []).then(
        ({ data: e }) => e
      ),
    'v-5e40b5d5': () =>
      i(
        () => import('./常见算法相关的JavaScript实现.html-e0273818.js'),
        []
      ).then(({ data: e }) => e),
    'v-0ebfad97': () =>
      i(() => import('./概述篇.html-e36d52ba.js'), []).then(({ data: e }) => e),
    'v-7c9eb5bd': () =>
      i(() => import('./Node.html-805be63a.js'), []).then(({ data: e }) => e),
    'v-5ccd377a': () =>
      i(() => import('./index.html-e55b7739.js'), []).then(({ data: e }) => e),
    'v-c1183614': () =>
      i(() => import('./koa.html-8c76727a.js'), []).then(({ data: e }) => e),
    'v-b29f1a14': () =>
      i(() => import('./node基础知识以及常用库.html-26eca7d9.js'), []).then(
        ({ data: e }) => e
      ),
    'v-7ca6d646': () =>
      i(() => import('./python.html-0cfa6df8.js'), []).then(({ data: e }) => e),
    'v-b7685482': () =>
      i(() => import('./MongoDB.html-808971eb.js'), []).then(
        ({ data: e }) => e
      ),
    'v-431839f8': () =>
      i(() => import('./index.html-0af593e8.js'), []).then(({ data: e }) => e),
    'v-44dbb96f': () =>
      i(() => import('./mysql.html-4cb2d005.js'), []).then(({ data: e }) => e),
    'v-33770c83': () =>
      i(() => import('./深入浅出mongoose.html-f02f2c13.js'), []).then(
        ({ data: e }) => e
      ),
    'v-fab7c824': () =>
      i(() => import('./index.html-958906d7.js'), []).then(({ data: e }) => e),
    'v-0dd559df': () =>
      i(() => import('./mac提示app已损坏解决方法.html-bc289c43.js'), []).then(
        ({ data: e }) => e
      ),
    'v-1a64708b': () =>
      i(() => import('./mac软件.html-3285938e.js'), []).then(
        ({ data: e }) => e
      ),
    'v-3af3a18d': () =>
      i(() => import('./index.html-8720deae.js'), []).then(({ data: e }) => e),
    'v-170a91f0': () =>
      i(() => import('./游戏墙.html-46357acf.js'), []).then(({ data: e }) => e),
    'v-f7cd8a78': () =>
      i(() => import('./游戏评价.html-4be2a6a4.js'), []).then(
        ({ data: e }) => e
      ),
    'v-1fe05178': () =>
      i(() => import('./IntelliJ系软件破解.html-7f5010a6.js'), []).then(
        ({ data: e }) => e
      ),
    'v-10b4f0b9': () =>
      i(() => import('./IntelliJ软件插件.html-3933716f.js'), []).then(
        ({ data: e }) => e
      ),
    'v-19f5ef16': () =>
      i(() => import('./index.html-464f2d9e.js'), []).then(({ data: e }) => e),
    'v-4b7687bc': () =>
      i(() => import('./git.html-c3e3f563.js'), []).then(({ data: e }) => e),
    'v-8f0ffe7a': () =>
      i(() => import('./homebrew.html-703334b3.js'), []).then(
        ({ data: e }) => e
      ),
    'v-a301ec1a': () =>
      i(() => import('./阿里云对象存储图床搭建.html-df70dcd4.js'), []).then(
        ({ data: e }) => e
      ),
    'v-a67cb7e4': () =>
      i(() => import('./index.html-2bcb0e53.js'), []).then(({ data: e }) => e),
    'v-c4f32fc8': () =>
      i(() => import('./菜鸟前端的22年总结.html-69abfee1.js'), []).then(
        ({ data: e }) => e
      ),
    'v-2d401c52': () =>
      i(
        () => import('./CSS图片底侧空白缝隙解决方案.html-71d54fe6.js'),
        []
      ).then(({ data: e }) => e),
    'v-0762220d': () =>
      i(() => import('./CSS文本溢出处理方式.html-f96ffe94.js'), []).then(
        ({ data: e }) => e
      ),
    'v-29397a28': () =>
      i(() => import('./index.html-d22aede2.js'), []).then(({ data: e }) => e),
    'v-e3451e9c': () =>
      i(() => import('./Web移动端适配的一些思考.html-9ff15715.js'), []).then(
        ({ data: e }) => e
      ),
    'v-352cbdcb': () =>
      i(
        () => import('./利用calc函数轻松实现各种宽高自适应.html-ec4303e3.js'),
        []
      ).then(({ data: e }) => e),
    'v-b718a028': () =>
      i(
        () =>
          import(
            './Array.prototype.slice.call()_Array.from()的应用和理解.html-57e7f8c2.js'
          ),
        []
      ).then(({ data: e }) => e),
    'v-63737a94': () =>
      i(() => import('./js的严格模式.html-f88f9b73.js'), []).then(
        ({ data: e }) => e
      ),
    'v-74875426': () =>
      i(() => import('./关于async和await.html-7c81f101.js'), []).then(
        ({ data: e }) => e
      ),
    'v-36b1da14': () =>
      i(
        () => import('./动态修改favicon网站图标地址.html-d4d95c02.js'),
        []
      ).then(({ data: e }) => e),
    'v-246bef6e': () =>
      i(() => import('./在输入框的光标处插入内容.html-d09f7d56.js'), []).then(
        ({ data: e }) => e
      ),
    'v-6e634088': () =>
      i(() => import('./数组delete元素.html-24892e5e.js'), []).then(
        ({ data: e }) => e
      ),
    'v-3ead2f48': () =>
      i(() => import('./数组对象对比找出差异项.html-fae329ca.js'), []).then(
        ({ data: e }) => e
      ),
    'v-7bea55ce': () =>
      i(
        () => import('./数组对象根据对象中指定的属性去重.html-96f98c75.js'),
        []
      ).then(({ data: e }) => e),
    'v-77271408': () =>
      i(
        () =>
          import('./数组对象根据数据项状态属性如何筛选数据.html-30455aae.js'),
        []
      ).then(({ data: e }) => e),
    'v-5f49510e': () =>
      i(() => import('./理解js事件循环.html-0f56e00c.js'), []).then(
        ({ data: e }) => e
      ),
    'v-e50f465a': () =>
      i(() => import('./重新理解闭包.html-7bed3d0d.js'), []).then(
        ({ data: e }) => e
      ),
    'v-58a8e13c': () =>
      i(() => import('./Hook对比HOC和renderProps.html-72531dad.js'), []).then(
        ({ data: e }) => e
      ),
    'v-b0785230': () =>
      i(() => import('./概述.html-6dc9ef8d.js'), []).then(({ data: e }) => e),
    'v-14634a24': () =>
      i(() => import('./Vue 项目总结.html-9eaf2ace.js'), []).then(
        ({ data: e }) => e
      ),
    'v-6448b763': () =>
      i(
        () => import('./element-ui日期选择器禁止选择指定日期.html-3dda34a0.js'),
        []
      ).then(({ data: e }) => e),
    'v-539c1268': () =>
      i(
        () => import('./element-ui树控件自动定位到当前选择项.html-6c55c688.js'),
        []
      ).then(({ data: e }) => e),
    'v-619f771c': () =>
      i(
        () => import('./element-ui清除表单的奇怪现象.html-45aaa9b1.js'),
        []
      ).then(({ data: e }) => e),
    'v-f61a2544': () =>
      i(
        () =>
          import(
            './element-ui表格中修改switch开关状态的二种方法.html-d86576b6.js'
          ),
        []
      ).then(({ data: e }) => e),
    'v-0c2e89ed': () =>
      i(
        () => import('./v-modelSync修饰符使用和原理.html-5338514b.js'),
        []
      ).then(({ data: e }) => e),
    'v-a1d83b16': () =>
      i(
        () => import('./vue2echarts数据报表项目学习心得.html-a8d5829c.js'),
        []
      ).then(({ data: e }) => e),
    'v-4d15f9ed': () =>
      i(
        () => import('./vue2中使用lodash实现节流防抖.html-8660640e.js'),
        []
      ).then(({ data: e }) => e),
    'v-62d8b48e': () =>
      i(() => import('./vue2中的css深度选择器.html-6cbd8157.js'), []).then(
        ({ data: e }) => e
      ),
    'v-3fffe92b': () =>
      i(
        () => import('./vue2和vue3的v-if与v-for的优先级差异.html-98dd34fa.js'),
        []
      ).then(({ data: e }) => e),
    'v-cbf738c2': () =>
      i(() => import('./vue2如何实现界面刷新.html-b5a5da66.js'), []).then(
        ({ data: e }) => e
      ),
    'v-51dc1186': () =>
      i(() => import('./vue2实现滚动窗口同步滚动.html-d4e5c89d.js'), []).then(
        ({ data: e }) => e
      ),
    'v-a41a7cf8': () =>
      i(() => import('./vue2虚拟列表实现.html-a0f28d06.js'), []).then(
        ({ data: e }) => e
      ),
    'v-6e32e664': () =>
      i(
        () => import('./vue3vite3.0项目支持路径别名.html-adf9e479.js'),
        []
      ).then(({ data: e }) => e),
    'v-9710e106': () =>
      i(() => import('./vue3开发RABC权限管理系统.html-058cb9b0.js'), []).then(
        ({ data: e }) => e
      ),
    'v-2c119a0c': () =>
      i(() => import('./vue开源项目库.html-1381eff9.js'), []).then(
        ({ data: e }) => e
      ),
    'v-605eaf1c': () =>
      i(
        () => import('./利用tooltip实现文本超出提示.html-5057f2c7.js'),
        []
      ).then(({ data: e }) => e),
    'v-624dbca4': () =>
      i(() => import('./PBR材质纹理.html-ca616777.js'), []).then(
        ({ data: e }) => e
      ),
    'v-c5f1abc2': () =>
      i(() => import('./index.html-3fedfd34.js'), []).then(({ data: e }) => e),
    'v-0f704b9a': () =>
      i(() => import('./Threejs物体.html-77bf6932.js'), []).then(
        ({ data: e }) => e
      ),
    'v-a038728c': () =>
      i(() => import('./Three开发入门与调试设置.html-2b451d37.js'), []).then(
        ({ data: e }) => e
      ),
    'v-310bd976': () =>
      i(() => import('./开发环境搭建.html-7ff1d26f.js'), []).then(
        ({ data: e }) => e
      ),
    'v-3913334e': () =>
      i(() => import('./材质与纹理.html-1e6efd9d.js'), []).then(
        ({ data: e }) => e
      ),
    'v-88684426': () =>
      i(() => import('./灯光与阴影.html-409017bc.js'), []).then(
        ({ data: e }) => e
      ),
    'v-e0cbd8ee': () =>
      i(() => import('./canvas基础.html-8b6b8957.js'), []).then(
        ({ data: e }) => e
      ),
    'v-de5de07e': () =>
      i(() => import('./回流重绘.html-02fd2e12.js'), []).then(
        ({ data: e }) => e
      ),
    'v-0583f47c': () =>
      i(() => import('./浏览器.html-d697ad7b.js'), []).then(({ data: e }) => e),
    'v-5bfdfb20': () =>
      i(() => import('./20_ css高频实用片段.html-7a8b3bf0.js'), []).then(
        ({ data: e }) => e
      ),
    'v-b4a0489a': () =>
      i(() => import('./2D与3D转换.html-33133f23.js'), []).then(
        ({ data: e }) => e
      ),
    'v-9c47fa7e': () =>
      i(
        () => import('./CSS八种让人眼前一亮的HOVER效果.html-8501d982.js'),
        []
      ).then(({ data: e }) => e),
    'v-15fc8bce': () =>
      i(() => import('./less.html-01f277c8.js'), []).then(({ data: e }) => e),
    'v-0e03c0ba': () =>
      i(() => import('./基础与盒模型.html-f105481a.js'), []).then(
        ({ data: e }) => e
      ),
    'v-5e7cbd2c': () =>
      i(() => import('./浮动与定位.html-cb05625c.js'), []).then(
        ({ data: e }) => e
      ),
    'v-0999edd9': () =>
      i(() => import('./背景与渐变.html-cdf197e1.js'), []).then(
        ({ data: e }) => e
      ),
    'v-71430068': () =>
      i(() => import('./踩雷css.html-9648055a.js'), []).then(
        ({ data: e }) => e
      ),
    'v-386957f2': () =>
      i(() => import('./边框圆角与盒子阴影.html-d591686c.js'), []).then(
        ({ data: e }) => e
      ),
    'v-f28bccce': () =>
      i(() => import('./过渡与动画.html-3cacb998.js'), []).then(
        ({ data: e }) => e
      ),
    'v-f47c39e8': () =>
      i(() => import('./H5C3总结.html-54e24873.js'), []).then(
        ({ data: e }) => e
      ),
    'v-43dbda5f': () =>
      i(() => import('./H5CSS3.html-4d853ccc.js'), []).then(({ data: e }) => e),
    'v-06f83f68': () =>
      i(() => import('./HTML5.html-1c87d2d9.js'), []).then(({ data: e }) => e),
    'v-74457929': () =>
      i(() => import('./HTML5移动开发UI框架.html-2fc325db.js'), []).then(
        ({ data: e }) => e
      ),
    'v-d3697fb0': () =>
      i(() => import('./前端动画.html-a1f5ba10.js'), []).then(
        ({ data: e }) => e
      ),
    'v-538d677a': () =>
      i(() => import('./Ajax.html-98da9792.js'), []).then(({ data: e }) => e),
    'v-59921c4f': () =>
      i(() => import('./BOM.html-5501511d.js'), []).then(({ data: e }) => e),
    'v-10c9918b': () =>
      i(() => import('./Canvas.html-50070b84.js'), []).then(({ data: e }) => e),
    'v-2954760d': () =>
      i(() => import('./DOM.html-dfb041cd.js'), []).then(({ data: e }) => e),
    'v-ff563d60': () =>
      i(() => import('./JavaScript23种设计模式.html-aeeb9a9f.js'), []).then(
        ({ data: e }) => e
      ),
    'v-5892f4fc': () =>
      i(() => import('./JavaScript函数库.html-96be1528.js'), []).then(
        ({ data: e }) => e
      ),
    'v-d5fc2992': () =>
      i(
        () => import('./Javascript异步编程的4种方法.html-4f7b45c8.js'),
        []
      ).then(({ data: e }) => e),
    'v-a0f6ed6e': () =>
      i(() => import('./Ts核心知识点总结.html-1edcb9b2.js'), []).then(
        ({ data: e }) => e
      ),
    'v-3118468a': () =>
      i(() => import('./js方法手动实现.html-c2645881.js'), []).then(
        ({ data: e }) => e
      ),
    'v-e12f83da': () =>
      i(() => import('./函数.html-35140df2.js'), []).then(({ data: e }) => e),
    'v-0a9e9975': () =>
      i(() => import('./变量与数据类型.html-ce90ce73.js'), []).then(
        ({ data: e }) => e
      ),
    'v-6b45e24e': () =>
      i(() => import('./操作符.html-e1367db5.js'), []).then(({ data: e }) => e),
    'v-120e4f10': () =>
      i(() => import('./数组.html-b6b9755f.js'), []).then(({ data: e }) => e),
    'v-835caad4': () =>
      i(() => import('./正则表达式.html-61b2cc51.js'), []).then(
        ({ data: e }) => e
      ),
    'v-0f51c0e6': () =>
      i(() => import('./流程控制语句.html-821dad7b.js'), []).then(
        ({ data: e }) => e
      ),
    'v-45706c20': () =>
      i(() => import('./难点总结.html-1ecd54c7.js'), []).then(
        ({ data: e }) => e
      ),
    'v-5a1eb93a': () =>
      i(() => import('./面向对象.html-e7de8acc.js'), []).then(
        ({ data: e }) => e
      ),
    'v-d029f7dc': () =>
      i(() => import('./JSX核心语法.html-c4ff3bd0.js'), []).then(
        ({ data: e }) => e
      ),
    'v-2aea1902': () =>
      i(() => import('./index.html-55b1defa.js'), []).then(({ data: e }) => e),
    'v-3396cd48': () =>
      i(() => import('./React.html-57a1ef59.js'), []).then(({ data: e }) => e),
    'v-176aef0e': () =>
      i(() => import('./ReactHook.html-f7f18c3d.js'), []).then(
        ({ data: e }) => e
      ),
    'v-67e92153': () =>
      i(() => import('./ReactRouter.html-736c3b6c.js'), []).then(
        ({ data: e }) => e
      ),
    'v-74948506': () =>
      i(() => import('./React与TypeScript.html-fa7aa4da.js'), []).then(
        ({ data: e }) => e
      ),
    'v-8f032ab2': () =>
      i(() => import('./React中axios.html-5185e036.js'), []).then(
        ({ data: e }) => e
      ),
    'v-0f86a3bd': () =>
      i(() => import('./React中的CSS.html-c1ea6d40.js'), []).then(
        ({ data: e }) => e
      ),
    'v-4f772ce9': () =>
      i(() => import('./React总结.html-838d2545.js'), []).then(
        ({ data: e }) => e
      ),
    'v-0cc32b96': () =>
      i(() => import('./React的过渡动画.html-57ecaf67.js'), []).then(
        ({ data: e }) => e
      ),
    'v-26da8c91': () =>
      i(() => import('./React组件化开发.html-b2963c61.js'), []).then(
        ({ data: e }) => e
      ),
    'v-4648a5f2': () =>
      i(() => import('./Redux.html-d11032b2.js'), []).then(({ data: e }) => e),
    'v-694e6903': () =>
      i(() => import('./react学习路线.html-fda6a70d.js'), []).then(
        ({ data: e }) => e
      ),
    'v-02dff447': () =>
      i(() => import('./Pinia.html-835072d8.js'), []).then(({ data: e }) => e),
    'v-34a3c34a': () =>
      i(() => import('./index.html-b77d934d.js'), []).then(({ data: e }) => e),
    'v-055d5656': () =>
      i(() => import('./Vue3.0新特性.html-dfe923be.js'), []).then(
        ({ data: e }) => e
      ),
    'v-de29251e': () =>
      i(() => import('./Vue3.html-8a488387.js'), []).then(({ data: e }) => e),
    'v-0699cd05': () =>
      i(() => import('./VueRouter.html-c4e73456.js'), []).then(
        ({ data: e }) => e
      ),
    'v-5fe28728': () =>
      i(() => import('./VueX.html-fe1677a2.js'), []).then(({ data: e }) => e),
    'v-f0654642': () =>
      i(() => import('./Vue核心.html-885c33db.js'), []).then(
        ({ data: e }) => e
      ),
    'v-7d1f9d1b': () =>
      i(() => import('./Vue组件化编程.html-05b646fd.js'), []).then(
        ({ data: e }) => e
      ),
    'v-7badcaf4': () =>
      i(() => import('./index.html-faf30972.js'), []).then(({ data: e }) => e),
    'v-48df62da': () =>
      i(
        () => import('./深入理解javascript原型和闭包.html-2230d138.js'),
        []
      ).then(({ data: e }) => e),
    'v-6b521627': () =>
      i(() => import('./Class类.html-bd7692ab.js'), []).then(
        ({ data: e }) => e
      ),
    'v-09af57da': () =>
      i(() => import('./ES6的新增方法.html-e35716d2.js'), []).then(
        ({ data: e }) => e
      ),
    'v-080e7088': () =>
      i(() => import('./Generator.html-bcb2b83f.js'), []).then(
        ({ data: e }) => e
      ),
    'v-03fc2edc': () =>
      i(() => import('./Module模块.html-30c89ca8.js'), []).then(
        ({ data: e }) => e
      ),
    'v-724a3fc0': () =>
      i(() => import('./Promise.html-a9a99cf6.js'), []).then(
        ({ data: e }) => e
      ),
    'v-a4bf6a92': () =>
      i(() => import('./Proxy和Reflect.html-12d96be7.js'), []).then(
        ({ data: e }) => e
      ),
    'v-5357faee': () =>
      i(() => import('./Set和Map数据结构.html-e435bb50.js'), []).then(
        ({ data: e }) => e
      ),
    'v-43faf7f8': () =>
      i(() => import('./let和const.html-69490010.js'), []).then(
        ({ data: e }) => e
      ),
    'v-94ff530a': () =>
      i(() => import('./剩余参数与展开运算符.html-36f62442.js'), []).then(
        ({ data: e }) => e
      ),
    'v-2d3fb87c': () =>
      i(
        () => import('./对象字面量的增强与函数参数的默认值.html-08f6bda2.js'),
        []
      ).then(({ data: e }) => e),
    'v-7f9cc112': () =>
      i(() => import('./模板字符串与箭头函数.html-05b939b3.js'), []).then(
        ({ data: e }) => e
      ),
    'v-4f3e6294': () =>
      i(() => import('./解构赋值.html-d7f2f65a.js'), []).then(
        ({ data: e }) => e
      ),
    'v-011b7805': () =>
      i(() => import('./遍历器与for...of循环.html-d9294543.js'), []).then(
        ({ data: e }) => e
      ),
    'v-59377d8f': () =>
      i(() => import('./index.html-85ba8e7f.js'), []).then(({ data: e }) => e),
    'v-f2525b1a': () =>
      i(() => import('./TS基础.html-c5a2a272.js'), []).then(({ data: e }) => e),
    'v-2ce8218c': () =>
      i(() => import('./TS进阶.html-a7627a24.js'), []).then(({ data: e }) => e),
    'v-25d50e6e': () =>
      i(() => import('./index.html-9b15baa8.js'), []).then(({ data: e }) => e),
    'v-13fb1133': () =>
      i(() => import('./图.html-243a6b7c.js'), []).then(({ data: e }) => e),
    'v-aae17a9c': () =>
      i(() => import('./字典.html-9b670fb9.js'), []).then(({ data: e }) => e),
    'v-4bf7c004': () =>
      i(() => import('./时间空间复杂度.html-50a2177c.js'), []).then(
        ({ data: e }) => e
      ),
    'v-29fb20db': () =>
      i(() => import('./栈.html-b916ab4c.js'), []).then(({ data: e }) => e),
    'v-52ef6fc3': () =>
      i(() => import('./树.html-89712d95.js'), []).then(({ data: e }) => e),
    'v-61c295f3': () =>
      i(() => import('./链表.html-e884dc64.js'), []).then(({ data: e }) => e),
    'v-5ba50a24': () =>
      i(() => import('./队列.html-b10c86cb.js'), []).then(({ data: e }) => e),
    'v-adf81840': () =>
      i(() => import('./集合.html-2ef9b951.js'), []).then(({ data: e }) => e),
    'v-3cbc3bf2': () =>
      i(
        () =>
          import(
            './如何优雅的使用vue_Dcloud（Hbuild）开发混合app.html-cc17eb15.js'
          ),
        []
      ).then(({ data: e }) => e),
    'v-8624ebe2': () =>
      i(() => import('./打包app.html-b430bb90.js'), []).then(
        ({ data: e }) => e
      ),
    'v-1d357774': () =>
      i(() => import('./移动Web.html-fa3f6efb.js'), []).then(
        ({ data: e }) => e
      ),
    'v-6bf2c5ad': () =>
      i(() => import('./移动Web开发入门.html-118eca58.js'), []).then(
        ({ data: e }) => e
      ),
    'v-7da81af2': () =>
      i(() => import('./移动端真机调试spy-debugger.html-0e9459bc.js'), []).then(
        ({ data: e }) => e
      ),
    'v-7520a2b4': () =>
      i(() => import('./JavaScript.html-31a8e88f.js'), []).then(
        ({ data: e }) => e
      ),
    'v-4c4a259d': () =>
      i(() => import('./index.html-356d84a4.js'), []).then(({ data: e }) => e),
    'v-15875df2': () =>
      i(() => import('./开发环境搭建.html-bf6e8d66.js'), []).then(
        ({ data: e }) => e
      ),
    'v-5363f5e2': () =>
      i(() => import('./编程思想.html-cdd287d1.js'), []).then(
        ({ data: e }) => e
      ),
    'v-5e0c8ca6': () =>
      i(() => import('./index.html-382c00cb.js'), []).then(({ data: e }) => e),
    'v-1a302d61': () =>
      i(() => import('./基础知识.html-de07a5d5.js'), []).then(
        ({ data: e }) => e
      ),
    'v-744d79a4': () =>
      i(() => import('./官网博客案例实现.html-92f94e62.js'), []).then(
        ({ data: e }) => e
      ),
    'v-346dd858': () =>
      i(() => import('./index.html-134bcf02.js'), []).then(({ data: e }) => e),
    'v-a6a85388': () =>
      i(() => import('./React-Native.html-2fdcec6f.js'), []).then(
        ({ data: e }) => e
      ),
    'v-2ba61c6e': () =>
      i(() => import('./React-Native总结.html-a989fa63.js'), []).then(
        ({ data: e }) => e
      ),
    'v-3706649a': () =>
      i(() => import('./404.html-ecb28004.js'), []).then(({ data: e }) => e),
    'v-27b49013': () =>
      i(() => import('./index.html-181f9bb2.js'), []).then(({ data: e }) => e),
    'v-c27f24fc': () =>
      i(() => import('./index.html-0030c966.js'), []).then(({ data: e }) => e),
    'v-9fb81952': () =>
      i(() => import('./index.html-6edbec6e.js'), []).then(({ data: e }) => e),
    'v-57b1bfc1': () =>
      i(() => import('./index.html-4c18d459.js'), []).then(({ data: e }) => e),
    'v-443af0ca': () =>
      i(() => import('./index.html-9767e9c5.js'), []).then(({ data: e }) => e),
    'v-60a386e7': () =>
      i(() => import('./index.html-f1fb98f3.js'), []).then(({ data: e }) => e),
    'v-2c9f8eac': () =>
      i(() => import('./index.html-3c507625.js'), []).then(({ data: e }) => e),
    'v-aab4ee98': () =>
      i(() => import('./index.html-93751257.js'), []).then(({ data: e }) => e),
    'v-f5b080b0': () =>
      i(() => import('./index.html-e8ccac22.js'), []).then(({ data: e }) => e),
    'v-4bc3fec0': () =>
      i(() => import('./index.html-35af412a.js'), []).then(({ data: e }) => e),
    'v-d809e874': () =>
      i(() => import('./index.html-b11ff566.js'), []).then(({ data: e }) => e),
    'v-8b888220': () =>
      i(() => import('./index.html-df46601b.js'), []).then(({ data: e }) => e),
    'v-586910ec': () =>
      i(() => import('./index.html-0b50f3d9.js'), []).then(({ data: e }) => e),
    'v-2927306e': () =>
      i(() => import('./index.html-8f9531ca.js'), []).then(({ data: e }) => e),
    'v-c321bac0': () =>
      i(() => import('./index.html-c55fea47.js'), []).then(({ data: e }) => e),
    'v-9d672a38': () =>
      i(() => import('./index.html-bc9a2654.js'), []).then(({ data: e }) => e),
    'v-0660c8a7': () =>
      i(() => import('./index.html-800c0120.js'), []).then(({ data: e }) => e),
    'v-b6e98450': () =>
      i(() => import('./index.html-2c46b09d.js'), []).then(({ data: e }) => e),
    'v-63677946': () =>
      i(() => import('./index.html-a0d5e65e.js'), []).then(({ data: e }) => e),
    'v-03374f16': () =>
      i(() => import('./index.html-6cfe86ff.js'), []).then(({ data: e }) => e),
    'v-d82043fc': () =>
      i(() => import('./index.html-9b744733.js'), []).then(({ data: e }) => e),
    'v-5ecb563f': () =>
      i(() => import('./index.html-47fdd7d6.js'), []).then(({ data: e }) => e),
    'v-22af1d98': () =>
      i(() => import('./index.html-6728f001.js'), []).then(({ data: e }) => e),
    'v-5bc93818': () =>
      i(() => import('./index.html-df57bbac.js'), []).then(({ data: e }) => e),
    'v-744d024e': () =>
      i(() => import('./index.html-931a20dc.js'), []).then(({ data: e }) => e),
    'v-e52c881c': () =>
      i(() => import('./index.html-b0d8b4a7.js'), []).then(({ data: e }) => e),
    'v-154dc4c4': () =>
      i(() => import('./index.html-e6913e30.js'), []).then(({ data: e }) => e),
    'v-01560935': () =>
      i(() => import('./index.html-a30cc746.js'), []).then(({ data: e }) => e),
    'v-3fe1292c': () =>
      i(() => import('./index.html-1cca370a.js'), []).then(({ data: e }) => e),
    'v-288e4719': () =>
      i(() => import('./index.html-3aea96ad.js'), []).then(({ data: e }) => e),
    'v-926502fe': () =>
      i(() => import('./index.html-a1a74d39.js'), []).then(({ data: e }) => e),
    'v-2826d081': () =>
      i(() => import('./index.html-ab54dc43.js'), []).then(({ data: e }) => e),
    'v-7d0e6254': () =>
      i(() => import('./index.html-26c1a2e7.js'), []).then(({ data: e }) => e),
    'v-4507db72': () =>
      i(() => import('./index.html-7fa866ec.js'), []).then(({ data: e }) => e),
    'v-006f9769': () =>
      i(() => import('./index.html-844b63b8.js'), []).then(({ data: e }) => e),
    'v-2cc9ac3d': () =>
      i(() => import('./index.html-39d48115.js'), []).then(({ data: e }) => e),
    'v-eafad332': () =>
      i(() => import('./index.html-28bdcc0c.js'), []).then(({ data: e }) => e),
    'v-4ac2fdf1': () =>
      i(() => import('./index.html-3d0b30cb.js'), []).then(({ data: e }) => e),
    'v-8f7daaaa': () =>
      i(() => import('./index.html-d9a883d1.js'), []).then(({ data: e }) => e),
    'v-59401cc8': () =>
      i(() => import('./index.html-c02ca58d.js'), []).then(({ data: e }) => e),
    'v-63806412': () =>
      i(() => import('./index.html-8ab93edc.js'), []).then(({ data: e }) => e),
    'v-97aefb08': () =>
      i(() => import('./index.html-62ea9c69.js'), []).then(({ data: e }) => e),
    'v-4088415f': () =>
      i(() => import('./index.html-4a9da77f.js'), []).then(({ data: e }) => e),
    'v-b302da92': () =>
      i(() => import('./index.html-36054d76.js'), []).then(({ data: e }) => e),
    'v-227ecbd6': () =>
      i(() => import('./index.html-903f2bb5.js'), []).then(({ data: e }) => e),
    'v-3d7e901c': () =>
      i(() => import('./index.html-5d2a4985.js'), []).then(({ data: e }) => e),
    'v-44360dd8': () =>
      i(() => import('./index.html-03e53a3c.js'), []).then(({ data: e }) => e),
    'v-286e3dc8': () =>
      i(() => import('./index.html-81732de5.js'), []).then(({ data: e }) => e),
    'v-4d852ace': () =>
      i(() => import('./index.html-621f13cf.js'), []).then(({ data: e }) => e),
    'v-2920a333': () =>
      i(() => import('./index.html-d7582869.js'), []).then(({ data: e }) => e),
    'v-5e0b61bd': () =>
      i(() => import('./index.html-b817e2ee.js'), []).then(({ data: e }) => e),
    'v-23e7ea67': () =>
      i(() => import('./index.html-c7a04b66.js'), []).then(({ data: e }) => e),
    'v-4bc03a0c': () =>
      i(() => import('./index.html-b28ea6ba.js'), []).then(({ data: e }) => e),
    'v-eb686fe0': () =>
      i(() => import('./index.html-cc7793bc.js'), []).then(({ data: e }) => e),
    'v-65f270d8': () =>
      i(() => import('./index.html-22fd0922.js'), []).then(({ data: e }) => e),
    'v-37fc715f': () =>
      i(() => import('./index.html-35d12d5b.js'), []).then(({ data: e }) => e),
    'v-137f2c63': () =>
      i(() => import('./index.html-794599a2.js'), []).then(({ data: e }) => e),
    'v-2687e471': () =>
      i(() => import('./index.html-887646c3.js'), []).then(({ data: e }) => e),
    'v-7cda78cb': () =>
      i(() => import('./index.html-b671a20d.js'), []).then(({ data: e }) => e),
    'v-28e050df': () =>
      i(() => import('./index.html-535cc1b0.js'), []).then(({ data: e }) => e),
    'v-0fd59de4': () =>
      i(() => import('./index.html-fa210b3d.js'), []).then(({ data: e }) => e),
    'v-b30a441c': () =>
      i(() => import('./index.html-320e431f.js'), []).then(({ data: e }) => e),
    'v-5fb2089c': () =>
      i(() => import('./index.html-4ab4cf11.js'), []).then(({ data: e }) => e),
    'v-29752bdd': () =>
      i(() => import('./index.html-1e7f7480.js'), []).then(({ data: e }) => e),
    'v-65ee2aa4': () =>
      i(() => import('./index.html-80a2d639.js'), []).then(({ data: e }) => e),
    'v-89f348a6': () =>
      i(() => import('./index.html-66c245bc.js'), []).then(({ data: e }) => e),
    'v-3d184cee': () =>
      i(() => import('./index.html-b4e986ce.js'), []).then(({ data: e }) => e),
    'v-b30a3518': () =>
      i(() => import('./index.html-b6abc77f.js'), []).then(({ data: e }) => e),
    'v-884bc6b0': () =>
      i(() => import('./index.html-66183284.js'), []).then(({ data: e }) => e),
    'v-b30a1710': () =>
      i(() => import('./index.html-244bedc4.js'), []).then(({ data: e }) => e),
    'v-119178eb': () =>
      i(() => import('./index.html-2f26675e.js'), []).then(({ data: e }) => e),
    'v-245f5676': () =>
      i(() => import('./index.html-3ddcd8b8.js'), []).then(({ data: e }) => e),
    'v-65f6d381': () =>
      i(() => import('./index.html-77e59c78.js'), []).then(({ data: e }) => e),
    'v-794d224b': () =>
      i(() => import('./index.html-7194d219.js'), []).then(({ data: e }) => e),
    'v-58e39d2b': () =>
      i(() => import('./index.html-21ab7dc5.js'), []).then(({ data: e }) => e),
    'v-9f472498': () =>
      i(() => import('./index.html-32d94752.js'), []).then(({ data: e }) => e),
    'v-442fcfc0': () =>
      i(() => import('./index.html-543354b1.js'), []).then(({ data: e }) => e),
    'v-1bee38ca': () =>
      i(() => import('./index.html-3208222b.js'), []).then(({ data: e }) => e),
    'v-c04f9a82': () =>
      i(() => import('./index.html-f6d59312.js'), []).then(({ data: e }) => e),
    'v-788be0b2': () =>
      i(() => import('./index.html-012f51d7.js'), []).then(({ data: e }) => e),
    'v-590addf8': () =>
      i(() => import('./index.html-6c083114.js'), []).then(({ data: e }) => e),
    'v-b356b776': () =>
      i(() => import('./index.html-d5ed6ddd.js'), []).then(({ data: e }) => e),
    'v-b7762ed0': () =>
      i(() => import('./index.html-99c778c3.js'), []).then(({ data: e }) => e),
    'v-7ee9e0e8': () =>
      i(() => import('./index.html-77261300.js'), []).then(({ data: e }) => e),
    'v-180d5090': () =>
      i(() => import('./index.html-a42408a0.js'), []).then(({ data: e }) => e),
    'v-57d72a87': () =>
      i(() => import('./index.html-b8aed673.js'), []).then(({ data: e }) => e),
    'v-fd152726': () =>
      i(() => import('./index.html-4fbf7997.js'), []).then(({ data: e }) => e),
    'v-35bc8e54': () =>
      i(() => import('./index.html-32d1610e.js'), []).then(({ data: e }) => e),
    'v-2953c4b5': () =>
      i(() => import('./index.html-d5cb9633.js'), []).then(({ data: e }) => e),
    'v-06ebc23c': () =>
      i(() => import('./index.html-254e56fd.js'), []).then(({ data: e }) => e),
    'v-2953c4d4': () =>
      i(() => import('./index.html-eff0ebe8.js'), []).then(({ data: e }) => e),
    'v-bc7b9816': () =>
      i(() => import('./index.html-b7cd4d6c.js'), []).then(({ data: e }) => e),
    'v-6e3f2a98': () =>
      i(() => import('./index.html-fdaed841.js'), []).then(({ data: e }) => e),
    'v-65ef0bff': () =>
      i(() => import('./index.html-bd6776c4.js'), []).then(({ data: e }) => e),
    'v-962e227a': () =>
      i(() => import('./index.html-916a2722.js'), []).then(({ data: e }) => e),
    'v-15c34810': () =>
      i(() => import('./index.html-b8c059ad.js'), []).then(({ data: e }) => e),
    'v-0842592c': () =>
      i(() => import('./index.html-22074978.js'), []).then(({ data: e }) => e),
    'v-5c5af6a7': () =>
      i(() => import('./index.html-b064a430.js'), []).then(({ data: e }) => e),
    'v-0083498e': () =>
      i(() => import('./index.html-5fdcdb98.js'), []).then(({ data: e }) => e),
    'v-06be9332': () =>
      i(() => import('./index.html-47e03af7.js'), []).then(({ data: e }) => e),
    'v-1378dfa0': () =>
      i(() => import('./index.html-e72f28cd.js'), []).then(({ data: e }) => e),
    'v-34ef3fac': () =>
      i(() => import('./index.html-ad87081e.js'), []).then(({ data: e }) => e),
    'v-0ceffcb2': () =>
      i(() => import('./index.html-94562a46.js'), []).then(({ data: e }) => e),
    'v-09a91fe2': () =>
      i(() => import('./index.html-64ad0c6c.js'), []).then(({ data: e }) => e),
    'v-294e8ebd': () =>
      i(() => import('./index.html-971ca164.js'), []).then(({ data: e }) => e),
    'v-64e6318a': () =>
      i(() => import('./index.html-a797ff09.js'), []).then(({ data: e }) => e),
    'v-3fb58c9e': () =>
      i(() => import('./index.html-4704330d.js'), []).then(({ data: e }) => e),
    'v-586bd7bf': () =>
      i(() => import('./index.html-e1cf28c7.js'), []).then(({ data: e }) => e),
    'v-0dc7daa4': () =>
      i(() => import('./index.html-3e76a094.js'), []).then(({ data: e }) => e),
    'v-935e02ba': () =>
      i(() => import('./index.html-d3b83cc0.js'), []).then(({ data: e }) => e),
    'v-57f72af1': () =>
      i(() => import('./index.html-eb75930f.js'), []).then(({ data: e }) => e),
    'v-28475211': () =>
      i(() => import('./index.html-f57baca5.js'), []).then(({ data: e }) => e),
    'v-2d91415a': () =>
      i(() => import('./index.html-e54ec342.js'), []).then(({ data: e }) => e),
    'v-31f58c60': () =>
      i(() => import('./index.html-ae4d973f.js'), []).then(({ data: e }) => e),
    'v-b3153486': () =>
      i(() => import('./index.html-7a721cf8.js'), []).then(({ data: e }) => e),
    'v-b313630a': () =>
      i(() => import('./index.html-b652f827.js'), []).then(({ data: e }) => e),
    'v-700e079e': () =>
      i(() => import('./index.html-6a6285b1.js'), []).then(({ data: e }) => e),
    'v-0be95582': () =>
      i(() => import('./index.html-57b125e8.js'), []).then(({ data: e }) => e),
    'v-aafe73e0': () =>
      i(() => import('./index.html-e71aa3f7.js'), []).then(({ data: e }) => e),
    'v-738ffd67': () =>
      i(() => import('./index.html-9c803212.js'), []).then(({ data: e }) => e),
    'v-f64eddd4': () =>
      i(() => import('./index.html-7681cef3.js'), []).then(({ data: e }) => e),
    'v-470fd025': () =>
      i(() => import('./index.html-45019f17.js'), []).then(({ data: e }) => e),
    'v-66f1a1a4': () =>
      i(() => import('./index.html-98b5bf89.js'), []).then(({ data: e }) => e),
    'v-51c7cc6e': () =>
      i(() => import('./index.html-249456e3.js'), []).then(({ data: e }) => e),
    'v-b47f1fa2': () =>
      i(() => import('./index.html-2bc7ce95.js'), []).then(({ data: e }) => e),
    'v-c0b6803a': () =>
      i(() => import('./index.html-24d33178.js'), []).then(({ data: e }) => e),
    'v-90f98c8e': () =>
      i(() => import('./index.html-4cf950d5.js'), []).then(({ data: e }) => e),
    'v-0d223344': () =>
      i(() => import('./index.html-ee0eee0f.js'), []).then(({ data: e }) => e),
    'v-3f8dd4f6': () =>
      i(() => import('./index.html-662ce408.js'), []).then(({ data: e }) => e),
    'v-56a27b8a': () =>
      i(() => import('./index.html-841fe96b.js'), []).then(({ data: e }) => e),
    'v-7159b88a': () =>
      i(() => import('./index.html-f621b812.js'), []).then(({ data: e }) => e),
    'v-3d319135': () =>
      i(() => import('./index.html-138565bb.js'), []).then(({ data: e }) => e),
    'v-b3fc6626': () =>
      i(() => import('./index.html-61096b4b.js'), []).then(({ data: e }) => e),
    'v-42a2b80e': () =>
      i(() => import('./index.html-2baf5c2c.js'), []).then(({ data: e }) => e),
    'v-51aa3ec2': () =>
      i(() => import('./index.html-e4080309.js'), []).then(({ data: e }) => e),
    'v-2a65b148': () =>
      i(() => import('./index.html-846b6774.js'), []).then(({ data: e }) => e),
    'v-1279d962': () =>
      i(() => import('./index.html-35732a15.js'), []).then(({ data: e }) => e),
    'v-624fd560': () =>
      i(() => import('./index.html-5d5a57e3.js'), []).then(({ data: e }) => e),
    'v-b306094a': () =>
      i(() => import('./index.html-2fbb479c.js'), []).then(({ data: e }) => e),
    'v-b30b9cbe': () =>
      i(() => import('./index.html-3b58e229.js'), []).then(({ data: e }) => e),
    'v-b30c667c': () =>
      i(() => import('./index.html-0e6fc0bd.js'), []).then(({ data: e }) => e),
    'v-3f2d760c': () =>
      i(() => import('./index.html-f5dac462.js'), []).then(({ data: e }) => e),
    'v-1cc2ba94': () =>
      i(() => import('./index.html-8e24d1c7.js'), []).then(({ data: e }) => e),
    'v-302da203': () =>
      i(() => import('./index.html-e164c321.js'), []).then(({ data: e }) => e),
    'v-449e8fd4': () =>
      i(() => import('./index.html-89b0374a.js'), []).then(({ data: e }) => e),
    'v-4e91f925': () =>
      i(() => import('./index.html-5cc02bf3.js'), []).then(({ data: e }) => e),
    'v-0ac25f49': () =>
      i(() => import('./index.html-9b921c64.js'), []).then(({ data: e }) => e),
    'v-56b77ef3': () =>
      i(() => import('./index.html-743a0c46.js'), []).then(({ data: e }) => e),
    'v-240a4080': () =>
      i(() => import('./index.html-8082923e.js'), []).then(({ data: e }) => e),
    'v-2367f3cb': () =>
      i(() => import('./index.html-58a983e9.js'), []).then(({ data: e }) => e),
    'v-34ece0c6': () =>
      i(() => import('./index.html-52c52dc6.js'), []).then(({ data: e }) => e),
    'v-300d34ce': () =>
      i(() => import('./index.html-161ed986.js'), []).then(({ data: e }) => e),
    'v-2a810ce3': () =>
      i(() => import('./index.html-6d843943.js'), []).then(({ data: e }) => e),
    'v-0b0853ac': () =>
      i(() => import('./index.html-59d32c6d.js'), []).then(({ data: e }) => e),
    'v-405ef958': () =>
      i(() => import('./index.html-15f4d3d5.js'), []).then(({ data: e }) => e),
    'v-b6d14f14': () =>
      i(() => import('./index.html-ded0dd2b.js'), []).then(({ data: e }) => e),
    'v-b6d14944': () =>
      i(() => import('./index.html-7006c168.js'), []).then(({ data: e }) => e),
    'v-4f1a28a4': () =>
      i(() => import('./index.html-049d7b7b.js'), []).then(({ data: e }) => e),
    'v-7d0f4556': () =>
      i(() => import('./index.html-a799d88b.js'), []).then(({ data: e }) => e),
    'v-3f698511': () =>
      i(() => import('./index.html-cc6f3d4c.js'), []).then(({ data: e }) => e),
    'v-63eec128': () =>
      i(() => import('./index.html-6bcfb38d.js'), []).then(({ data: e }) => e),
    'v-9ed0166a': () =>
      i(() => import('./index.html-545bc96d.js'), []).then(({ data: e }) => e),
    'v-3b951558': () =>
      i(() => import('./index.html-23daf546.js'), []).then(({ data: e }) => e),
    'v-b5120c32': () =>
      i(() => import('./index.html-6bcb58f0.js'), []).then(({ data: e }) => e)
  },
  P1 = JSON.parse(
    `{"base":"/","lang":"zh-CN","title":"Mr Chen's Blog","description":"一个专注于编程开发技术的个人知识库博客","head":[],"locales":{}}`
  )
var O1 = ([e, t, r]) =>
    e === 'meta' && t.name
      ? `${e}.${t.name}`
      : ['title', 'base'].includes(e)
      ? e
      : e === 'template' && t.id
      ? `${e}.${t.id}`
      : JSON.stringify([e, t, r]),
  V1 = e => {
    const t = new Set(),
      r = []
    return (
      e.forEach(n => {
        const E = O1(n)
        t.has(E) || (t.add(E), r.push(n))
      }),
      r
    )
  },
  qs = e => (e[e.length - 1] === '/' || e.endsWith('.html') ? e : `${e}/`),
  x1 = e => e.startsWith('ftp://'),
  pr = e => /^(https?:)?\/\//.test(e),
  k1 = /.md((\?|#).*)?$/,
  zE = (e, t = '/') =>
    !!(
      pr(e) ||
      x1(e) ||
      (e.startsWith('/') && !e.startsWith(t) && !k1.test(e))
    ),
  Ws = e => /^mailto:/.test(e),
  M1 = e => /^tel:/.test(e),
  EE = e => Object.prototype.toString.call(e) === '[object Object]',
  s8 = e => (e[e.length - 1] === '/' ? e.slice(0, -1) : e),
  Ks = e => (e[0] === '/' ? e.slice(1) : e),
  $1 = (e, t) => {
    const r = Object.keys(e).sort((n, E) => {
      const o = E.split('/').length - n.split('/').length
      return o !== 0 ? o : E.length - n.length
    })
    for (const n of r) if (t.startsWith(n)) return n
    return '/'
  },
  Ii = (e, t = '/') => {
    const r = e.replace(/^(https?:)?\/\/[^/]*/, '')
    return r.startsWith(t) ? `/${r.slice(t.length)}` : r
  }
const Gs = {
  'v-8daa1a0e': v(() =>
    i(
      () => import('./index.html-e495fb9b.js'),
      [
        'assets/index.html-e495fb9b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a038fc3c': v(() =>
    i(
      () => import('./书签收藏.html-432890cd.js'),
      [
        'assets/书签收藏.html-432890cd.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a9d475b0': v(() =>
    i(
      () => import('./index.html-44c4b5ff.js'),
      [
        'assets/index.html-44c4b5ff.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2af1522a': v(() =>
    i(
      () => import('./index.html-ce3c6ee6.js'),
      [
        'assets/index.html-ce3c6ee6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4c2784f0': v(() =>
    i(
      () => import('./前后端数据交互.html-1b7bdec9.js'),
      [
        'assets/前后端数据交互.html-1b7bdec9.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7c618c22': v(() =>
    i(
      () => import('./本地存储.html-a7c37abd.js'),
      [
        'assets/本地存储.html-a7c37abd.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-eee9b25a': v(() =>
    i(
      () => import('./index.html-f23b642c.js'),
      [
        'assets/index.html-f23b642c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2307de2e': v(() =>
    i(
      () => import('./index.html-a371d0f4.js'),
      [
        'assets/index.html-a371d0f4.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3443c502': v(() =>
    i(
      () => import('./H5微信分享.html-331cc9a9.js'),
      [
        'assets/H5微信分享.html-331cc9a9.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-6173ac40': v(() =>
    i(
      () => import('./index.html-d483a421.js'),
      [
        'assets/index.html-d483a421.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-03d76054': v(() =>
    i(
      () => import('./WebSocket的嵌入.html-bbe8fca5.js'),
      [
        'assets/WebSocket的嵌入.html-bbe8fca5.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-d6005d76': v(() =>
    i(
      () =>
        import(
          './http断点续传原理_http头Range、Content-Range.html-b4362af6.js'
        ),
      [
        'assets/http断点续传原理_http头Range、Content-Range.html-b4362af6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b2f45cfc': v(() =>
    i(
      () =>
        import(
          './window.btoa 和 window.atob方法实现编码与解码.html-3597f677.js'
        ),
      [
        'assets/window.btoa 和 window.atob方法实现编码与解码.html-3597f677.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-6b85e19e': v(() =>
    i(
      () => import('./一行代码全站进入悼念模式.html-505dae3e.js'),
      [
        'assets/一行代码全站进入悼念模式.html-505dae3e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-71bd102f': v(() =>
    i(
      () => import('./九种跨域解决方案.html-102dfef0.js'),
      [
        'assets/九种跨域解决方案.html-102dfef0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-35eea18b': v(() =>
    i(
      () => import('./前端性能优化总结.html-64c23644.js'),
      [
        'assets/前端性能优化总结.html-64c23644.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-22f9d806': v(() =>
    i(
      () => import('./前端缓存.html-644e54c2.js'),
      [
        'assets/前端缓存.html-644e54c2.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-148827a0': v(() =>
    i(
      () => import('./前端跨页面通信.html-ee24e587.js'),
      [
        'assets/前端跨页面通信.html-ee24e587.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-6430d112': v(() =>
    i(
      () => import('./压缩图片.html-2b4875da.js'),
      [
        'assets/压缩图片.html-2b4875da.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-88057dd2': v(() =>
    i(
      () => import('./如何精确统计页面停留时长.html-fca5ce42.js'),
      [
        'assets/如何精确统计页面停留时长.html-fca5ce42.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0f1df674': v(() =>
    i(
      () => import('./常见的网站安全问题.html-1723633f.js'),
      [
        'assets/常见的网站安全问题.html-1723633f.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-92c8dac6': v(() =>
    i(
      () => import('./开发常用代码片段.html-924ca1d1.js'),
      [
        'assets/开发常用代码片段.html-924ca1d1.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-aceef52a': v(() =>
    i(
      () => import('./如何全面系统掌握前端效率工程化.html-ac0b4ecf.js'),
      [
        'assets/如何全面系统掌握前端效率工程化.html-ac0b4ecf.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4171ac0a': v(() =>
    i(
      () => import('./最新的前端大厂面经（详解答案）.html-e13bf4c7.js'),
      [
        'assets/最新的前端大厂面经（详解答案）.html-e13bf4c7.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3b82417d': v(() =>
    i(
      () => import('./面经系列-css.html-3cbb98f2.js'),
      [
        'assets/面经系列-css.html-3cbb98f2.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a9a4a7b2': v(() =>
    i(
      () => import('./面经系列-html.html-827c67cc.js'),
      [
        'assets/面经系列-html.html-827c67cc.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2632ab89': v(() =>
    i(
      () => import('./面经系列-js.html-63d046c4.js'),
      [
        'assets/面经系列-js.html-63d046c4.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-432133da': v(() =>
    i(
      () => import('./面经系列-vue.html-664bb07a.js'),
      [
        'assets/面经系列-vue.html-664bb07a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2f3b8ddd': v(() =>
    i(
      () => import('./面经系列-优化.html-90384f2a.js'),
      [
        'assets/面经系列-优化.html-90384f2a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-744babfe': v(() =>
    i(
      () => import('./面经系列-基础面试题.html-c818975f.js'),
      [
        'assets/面经系列-基础面试题.html-c818975f.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-13e4bea5': v(() =>
    i(
      () => import('./面经系列-浏览器.html-4cc2a67f.js'),
      [
        'assets/面经系列-浏览器.html-4cc2a67f.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-1221fd78': v(() =>
    i(
      () => import('./CSS 书写规范建议.html-8cf66b6b.js'),
      [
        'assets/CSS 书写规范建议.html-8cf66b6b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-67ae34e2': v(() =>
    i(
      () =>
        import(
          './JS模块规范：AMD、UMD、CMD、commonJS、ES6 module.html-56c0a7c4.js'
        ),
      [
        'assets/JS模块规范：AMD、UMD、CMD、commonJS、ES6 module.html-56c0a7c4.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a0f5bfd2': v(() =>
    i(
      () => import('./commonJs详解.html-7b09d8cc.js'),
      [
        'assets/commonJs详解.html-7b09d8cc.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-c291d276': v(() =>
    i(
      () => import('./Flex布局.html-77c3f201.js'),
      [
        'assets/Flex布局.html-77c3f201.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7b780ad4': v(() =>
    i(
      () => import('./Sass.html-3689faf7.js'),
      [
        'assets/Sass.html-3689faf7.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4880d4a6': v(() =>
    i(
      () => import('./Git版本控制工具.html-cb2e5f72.js'),
      [
        'assets/Git版本控制工具.html-cb2e5f72.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-05920706': v(() =>
    i(
      () => import('./Linux.html-a4d417b0.js'),
      [
        'assets/Linux.html-a4d417b0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-03a50e3c': v(() =>
    i(
      () => import('./Webpack_babel.html-6b406224.js'),
      [
        'assets/Webpack_babel.html-6b406224.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3109a60f': v(() =>
    i(
      () => import('./Webpack4.0.html-3b55fe04.js'),
      [
        'assets/Webpack4.0.html-3b55fe04.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-6dee9d16': v(() =>
    i(
      () => import('./Webpack5.0学习总结.html-0dee441e.js'),
      [
        'assets/Webpack5.0学习总结.html-0dee441e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-c0487376': v(() =>
    i(
      () => import('./mac安装pod流程.html-4facec4e.js'),
      [
        'assets/mac安装pod流程.html-4facec4e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0202caaf': v(() =>
    i(
      () => import('./nginx配置.html-1def0463.js'),
      [
        'assets/nginx配置.html-1def0463.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-06367869': v(() =>
    i(
      () => import('./vscode常用插件.html-a5ee1402.js'),
      [
        'assets/vscode常用插件.html-a5ee1402.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-080d42c3': v(() =>
    i(
      () => import('./vue-cli3.X自动部署项目到服务器.html-622d8c9f.js'),
      [
        'assets/vue-cli3.X自动部署项目到服务器.html-622d8c9f.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-55e548c0': v(() =>
    i(
      () => import('./删除RN安卓开发环境.html-9dff1495.js'),
      [
        'assets/删除RN安卓开发环境.html-9dff1495.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-00140707': v(() =>
    i(
      () => import('./微服务架构和分布式架构的区别是什么.html-ae1a4fd6.js'),
      [
        'assets/微服务架构和分布式架构的区别是什么.html-ae1a4fd6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-d6e48cfe': v(() =>
    i(
      () => import('./服务器如何设置服务自动启动进程.html-ddd63739.js'),
      [
        'assets/服务器如何设置服务自动启动进程.html-ddd63739.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a988658e': v(() =>
    i(
      () => import('./理解serverless无服务架构.html-fac4072a.js'),
      [
        'assets/理解serverless无服务架构.html-fac4072a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4930d5a1': v(() =>
    i(
      () => import('./阿里云linux服务器安装桌面.html-7d446f75.js'),
      [
        'assets/阿里云linux服务器安装桌面.html-7d446f75.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-12975cb0': v(() =>
    i(
      () => import('./阿里云轻量应用服务器防火墙配置.html-3e773683.js'),
      [
        'assets/阿里云轻量应用服务器防火墙配置.html-3e773683.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-222b7bd2': v(() =>
    i(
      () => import('./index.html-50194037.js'),
      [
        'assets/index.html-50194037.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-6b16d8cf': v(() =>
    i(
      () => import('./微信小程序.html-1c4e40e3.js'),
      [
        'assets/微信小程序.html-1c4e40e3.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-76bfbc3c': v(() =>
    i(
      () => import('./vuex和redux的数据持久化缓存方案.html-bf42af51.js'),
      [
        'assets/vuex和redux的数据持久化缓存方案.html-bf42af51.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b56c971e': v(() =>
    i(
      () => import('./vue与react全面对比.html-009b4f51.js'),
      [
        'assets/vue与react全面对比.html-009b4f51.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-1ff4e172': v(() =>
    i(
      () => import('./前端工程师自检清单.html-3f8ebcb3.js'),
      [
        'assets/前端工程师自检清单.html-3f8ebcb3.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2630ab4c': v(() =>
    i(
      () => import('./01.html-c98e2f9b.js'),
      [
        'assets/01.html-c98e2f9b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a37f46a2': v(() =>
    i(
      () => import('./思维导图.html-5e511b0a.js'),
      [
        'assets/思维导图.html-5e511b0a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-94e632d0': v(() =>
    i(
      () => import('./Crypto-js---加密算法库.html-a944eb42.js'),
      [
        'assets/Crypto-js---加密算法库.html-a944eb42.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5e40b5d5': v(() =>
    i(
      () => import('./常见算法相关的JavaScript实现.html-9bb1d52b.js'),
      [
        'assets/常见算法相关的JavaScript实现.html-9bb1d52b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0ebfad97': v(() =>
    i(
      () => import('./概述篇.html-906d0e9b.js'),
      [
        'assets/概述篇.html-906d0e9b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7c9eb5bd': v(() =>
    i(
      () => import('./Node.html-4d4104e3.js'),
      [
        'assets/Node.html-4d4104e3.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5ccd377a': v(() =>
    i(
      () => import('./index.html-61a8be99.js'),
      [
        'assets/index.html-61a8be99.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-c1183614': v(() =>
    i(
      () => import('./koa.html-13ed52f9.js'),
      [
        'assets/koa.html-13ed52f9.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b29f1a14': v(() =>
    i(
      () => import('./node基础知识以及常用库.html-d3d8d952.js'),
      [
        'assets/node基础知识以及常用库.html-d3d8d952.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7ca6d646': v(() =>
    i(
      () => import('./python.html-003a7323.js'),
      [
        'assets/python.html-003a7323.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b7685482': v(() =>
    i(
      () => import('./MongoDB.html-4688d63c.js'),
      [
        'assets/MongoDB.html-4688d63c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-431839f8': v(() =>
    i(
      () => import('./index.html-e5dd44ea.js'),
      [
        'assets/index.html-e5dd44ea.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-44dbb96f': v(() =>
    i(
      () => import('./mysql.html-089b4e7c.js'),
      [
        'assets/mysql.html-089b4e7c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-33770c83': v(() =>
    i(
      () => import('./深入浅出mongoose.html-d9087427.js'),
      [
        'assets/深入浅出mongoose.html-d9087427.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-fab7c824': v(() =>
    i(
      () => import('./index.html-136c49c9.js'),
      [
        'assets/index.html-136c49c9.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0dd559df': v(() =>
    i(
      () => import('./mac提示app已损坏解决方法.html-652f1f84.js'),
      [
        'assets/mac提示app已损坏解决方法.html-652f1f84.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-1a64708b': v(() =>
    i(
      () => import('./mac软件.html-08b3a4c7.js'),
      [
        'assets/mac软件.html-08b3a4c7.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3af3a18d': v(() =>
    i(
      () => import('./index.html-21d17f30.js'),
      [
        'assets/index.html-21d17f30.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-170a91f0': v(() =>
    i(
      () => import('./游戏墙.html-919d01ad.js'),
      [
        'assets/游戏墙.html-919d01ad.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-f7cd8a78': v(() =>
    i(
      () => import('./游戏评价.html-d7019b5d.js'),
      [
        'assets/游戏评价.html-d7019b5d.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-1fe05178': v(() =>
    i(
      () => import('./IntelliJ系软件破解.html-48b36f54.js'),
      [
        'assets/IntelliJ系软件破解.html-48b36f54.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-10b4f0b9': v(() =>
    i(
      () => import('./IntelliJ软件插件.html-1b661b88.js'),
      [
        'assets/IntelliJ软件插件.html-1b661b88.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-19f5ef16': v(() =>
    i(
      () => import('./index.html-4a8c62df.js'),
      [
        'assets/index.html-4a8c62df.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4b7687bc': v(() =>
    i(
      () => import('./git.html-f40c3abd.js'),
      [
        'assets/git.html-f40c3abd.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-8f0ffe7a': v(() =>
    i(
      () => import('./homebrew.html-065633ac.js'),
      [
        'assets/homebrew.html-065633ac.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a301ec1a': v(() =>
    i(
      () => import('./阿里云对象存储图床搭建.html-58b2ab7c.js'),
      [
        'assets/阿里云对象存储图床搭建.html-58b2ab7c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a67cb7e4': v(() =>
    i(
      () => import('./index.html-ff21a87b.js'),
      [
        'assets/index.html-ff21a87b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-c4f32fc8': v(() =>
    i(
      () => import('./菜鸟前端的22年总结.html-3c412e5b.js'),
      [
        'assets/菜鸟前端的22年总结.html-3c412e5b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2d401c52': v(() =>
    i(
      () => import('./CSS图片底侧空白缝隙解决方案.html-06e8c9bc.js'),
      [
        'assets/CSS图片底侧空白缝隙解决方案.html-06e8c9bc.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0762220d': v(() =>
    i(
      () => import('./CSS文本溢出处理方式.html-46e38301.js'),
      [
        'assets/CSS文本溢出处理方式.html-46e38301.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-29397a28': v(() =>
    i(
      () => import('./index.html-1886d636.js'),
      [
        'assets/index.html-1886d636.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-e3451e9c': v(() =>
    i(
      () => import('./Web移动端适配的一些思考.html-2d7d3bc3.js'),
      [
        'assets/Web移动端适配的一些思考.html-2d7d3bc3.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-352cbdcb': v(() =>
    i(
      () => import('./利用calc函数轻松实现各种宽高自适应.html-50a4c06a.js'),
      [
        'assets/利用calc函数轻松实现各种宽高自适应.html-50a4c06a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b718a028': v(() =>
    i(
      () =>
        import(
          './Array.prototype.slice.call()_Array.from()的应用和理解.html-75ae2fa8.js'
        ),
      [
        'assets/Array.prototype.slice.call()_Array.from()的应用和理解.html-75ae2fa8.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-63737a94': v(() =>
    i(
      () => import('./js的严格模式.html-2f0049fb.js'),
      [
        'assets/js的严格模式.html-2f0049fb.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-74875426': v(() =>
    i(
      () => import('./关于async和await.html-7af76c83.js'),
      [
        'assets/关于async和await.html-7af76c83.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-36b1da14': v(() =>
    i(
      () => import('./动态修改favicon网站图标地址.html-72e77c90.js'),
      [
        'assets/动态修改favicon网站图标地址.html-72e77c90.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-246bef6e': v(() =>
    i(
      () => import('./在输入框的光标处插入内容.html-8205f2ca.js'),
      [
        'assets/在输入框的光标处插入内容.html-8205f2ca.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-6e634088': v(() =>
    i(
      () => import('./数组delete元素.html-da1aad5e.js'),
      [
        'assets/数组delete元素.html-da1aad5e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3ead2f48': v(() =>
    i(
      () => import('./数组对象对比找出差异项.html-f199d33b.js'),
      [
        'assets/数组对象对比找出差异项.html-f199d33b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7bea55ce': v(() =>
    i(
      () => import('./数组对象根据对象中指定的属性去重.html-da81d31c.js'),
      [
        'assets/数组对象根据对象中指定的属性去重.html-da81d31c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-77271408': v(() =>
    i(
      () => import('./数组对象根据数据项状态属性如何筛选数据.html-6973d390.js'),
      [
        'assets/数组对象根据数据项状态属性如何筛选数据.html-6973d390.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5f49510e': v(() =>
    i(
      () => import('./理解js事件循环.html-d27aa911.js'),
      [
        'assets/理解js事件循环.html-d27aa911.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-e50f465a': v(() =>
    i(
      () => import('./重新理解闭包.html-dc9ac164.js'),
      [
        'assets/重新理解闭包.html-dc9ac164.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-58a8e13c': v(() =>
    i(
      () => import('./Hook对比HOC和renderProps.html-e7c8fcb9.js'),
      [
        'assets/Hook对比HOC和renderProps.html-e7c8fcb9.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b0785230': v(() =>
    i(
      () => import('./概述.html-f6ec7fca.js'),
      [
        'assets/概述.html-f6ec7fca.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-14634a24': v(() =>
    i(
      () => import('./Vue 项目总结.html-a4b92f49.js'),
      [
        'assets/Vue 项目总结.html-a4b92f49.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-6448b763': v(() =>
    i(
      () => import('./element-ui日期选择器禁止选择指定日期.html-7cdd0a8e.js'),
      [
        'assets/element-ui日期选择器禁止选择指定日期.html-7cdd0a8e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-539c1268': v(() =>
    i(
      () => import('./element-ui树控件自动定位到当前选择项.html-fe713d21.js'),
      [
        'assets/element-ui树控件自动定位到当前选择项.html-fe713d21.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-619f771c': v(() =>
    i(
      () => import('./element-ui清除表单的奇怪现象.html-42af1867.js'),
      [
        'assets/element-ui清除表单的奇怪现象.html-42af1867.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-f61a2544': v(() =>
    i(
      () =>
        import(
          './element-ui表格中修改switch开关状态的二种方法.html-7bae44b6.js'
        ),
      [
        'assets/element-ui表格中修改switch开关状态的二种方法.html-7bae44b6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0c2e89ed': v(() =>
    i(
      () => import('./v-modelSync修饰符使用和原理.html-ae5cb275.js'),
      [
        'assets/v-modelSync修饰符使用和原理.html-ae5cb275.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a1d83b16': v(() =>
    i(
      () => import('./vue2echarts数据报表项目学习心得.html-5944b5b3.js'),
      [
        'assets/vue2echarts数据报表项目学习心得.html-5944b5b3.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4d15f9ed': v(() =>
    i(
      () => import('./vue2中使用lodash实现节流防抖.html-b90517b7.js'),
      [
        'assets/vue2中使用lodash实现节流防抖.html-b90517b7.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-62d8b48e': v(() =>
    i(
      () => import('./vue2中的css深度选择器.html-28bd8259.js'),
      [
        'assets/vue2中的css深度选择器.html-28bd8259.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3fffe92b': v(() =>
    i(
      () => import('./vue2和vue3的v-if与v-for的优先级差异.html-4535a34a.js'),
      [
        'assets/vue2和vue3的v-if与v-for的优先级差异.html-4535a34a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-cbf738c2': v(() =>
    i(
      () => import('./vue2如何实现界面刷新.html-d185b0f9.js'),
      [
        'assets/vue2如何实现界面刷新.html-d185b0f9.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-51dc1186': v(() =>
    i(
      () => import('./vue2实现滚动窗口同步滚动.html-d22f63a0.js'),
      [
        'assets/vue2实现滚动窗口同步滚动.html-d22f63a0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a41a7cf8': v(() =>
    i(
      () => import('./vue2虚拟列表实现.html-89a4a518.js'),
      [
        'assets/vue2虚拟列表实现.html-89a4a518.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-6e32e664': v(() =>
    i(
      () => import('./vue3vite3.0项目支持路径别名.html-51b9030a.js'),
      [
        'assets/vue3vite3.0项目支持路径别名.html-51b9030a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-9710e106': v(() =>
    i(
      () => import('./vue3开发RABC权限管理系统.html-e3563c48.js'),
      [
        'assets/vue3开发RABC权限管理系统.html-e3563c48.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2c119a0c': v(() =>
    i(
      () => import('./vue开源项目库.html-b1b4bc6e.js'),
      [
        'assets/vue开源项目库.html-b1b4bc6e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-605eaf1c': v(() =>
    i(
      () => import('./利用tooltip实现文本超出提示.html-7f89e809.js'),
      [
        'assets/利用tooltip实现文本超出提示.html-7f89e809.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-624dbca4': v(() =>
    i(
      () => import('./PBR材质纹理.html-8ada3b0d.js'),
      [
        'assets/PBR材质纹理.html-8ada3b0d.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-c5f1abc2': v(() =>
    i(
      () => import('./index.html-17906f8e.js'),
      [
        'assets/index.html-17906f8e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0f704b9a': v(() =>
    i(
      () => import('./Threejs物体.html-ddae273d.js'),
      [
        'assets/Threejs物体.html-ddae273d.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a038728c': v(() =>
    i(
      () => import('./Three开发入门与调试设置.html-674f6ce6.js'),
      [
        'assets/Three开发入门与调试设置.html-674f6ce6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-310bd976': v(() =>
    i(
      () => import('./开发环境搭建.html-ef09a0d1.js'),
      [
        'assets/开发环境搭建.html-ef09a0d1.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3913334e': v(() =>
    i(
      () => import('./材质与纹理.html-55bc2642.js'),
      [
        'assets/材质与纹理.html-55bc2642.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-88684426': v(() =>
    i(
      () => import('./灯光与阴影.html-14a95cbb.js'),
      [
        'assets/灯光与阴影.html-14a95cbb.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-e0cbd8ee': v(() =>
    i(
      () => import('./canvas基础.html-43a008b7.js'),
      [
        'assets/canvas基础.html-43a008b7.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-de5de07e': v(() =>
    i(
      () => import('./回流重绘.html-ce8c7fa5.js'),
      [
        'assets/回流重绘.html-ce8c7fa5.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0583f47c': v(() =>
    i(
      () => import('./浏览器.html-3fec4160.js'),
      [
        'assets/浏览器.html-3fec4160.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5bfdfb20': v(() =>
    i(
      () => import('./20_ css高频实用片段.html-ba105850.js'),
      [
        'assets/20_ css高频实用片段.html-ba105850.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b4a0489a': v(() =>
    i(
      () => import('./2D与3D转换.html-f3fce253.js'),
      [
        'assets/2D与3D转换.html-f3fce253.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-9c47fa7e': v(() =>
    i(
      () => import('./CSS八种让人眼前一亮的HOVER效果.html-f1ab9a47.js'),
      [
        'assets/CSS八种让人眼前一亮的HOVER效果.html-f1ab9a47.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-15fc8bce': v(() =>
    i(
      () => import('./less.html-9ed6c563.js'),
      [
        'assets/less.html-9ed6c563.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0e03c0ba': v(() =>
    i(
      () => import('./基础与盒模型.html-44d99c87.js'),
      [
        'assets/基础与盒模型.html-44d99c87.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5e7cbd2c': v(() =>
    i(
      () => import('./浮动与定位.html-0d344b15.js'),
      [
        'assets/浮动与定位.html-0d344b15.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0999edd9': v(() =>
    i(
      () => import('./背景与渐变.html-4216479a.js'),
      [
        'assets/背景与渐变.html-4216479a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-71430068': v(() =>
    i(
      () => import('./踩雷css.html-7ba948bc.js'),
      [
        'assets/踩雷css.html-7ba948bc.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-386957f2': v(() =>
    i(
      () => import('./边框圆角与盒子阴影.html-71580165.js'),
      [
        'assets/边框圆角与盒子阴影.html-71580165.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-f28bccce': v(() =>
    i(
      () => import('./过渡与动画.html-1f6407fe.js'),
      [
        'assets/过渡与动画.html-1f6407fe.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-f47c39e8': v(() =>
    i(
      () => import('./H5C3总结.html-43595241.js'),
      [
        'assets/H5C3总结.html-43595241.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-43dbda5f': v(() =>
    i(
      () => import('./H5CSS3.html-54d1925e.js'),
      [
        'assets/H5CSS3.html-54d1925e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-06f83f68': v(() =>
    i(
      () => import('./HTML5.html-87b7b56a.js'),
      [
        'assets/HTML5.html-87b7b56a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-74457929': v(() =>
    i(
      () => import('./HTML5移动开发UI框架.html-144092da.js'),
      [
        'assets/HTML5移动开发UI框架.html-144092da.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-d3697fb0': v(() =>
    i(
      () => import('./前端动画.html-51979f27.js'),
      [
        'assets/前端动画.html-51979f27.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-538d677a': v(() =>
    i(
      () => import('./Ajax.html-921d5be2.js'),
      [
        'assets/Ajax.html-921d5be2.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-59921c4f': v(() =>
    i(
      () => import('./BOM.html-ed3418c3.js'),
      [
        'assets/BOM.html-ed3418c3.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-10c9918b': v(() =>
    i(
      () => import('./Canvas.html-aec5efa5.js'),
      [
        'assets/Canvas.html-aec5efa5.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2954760d': v(() =>
    i(
      () => import('./DOM.html-0f94e60c.js'),
      [
        'assets/DOM.html-0f94e60c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-ff563d60': v(() =>
    i(
      () => import('./JavaScript23种设计模式.html-2c04af68.js'),
      [
        'assets/JavaScript23种设计模式.html-2c04af68.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5892f4fc': v(() =>
    i(
      () => import('./JavaScript函数库.html-61e611fe.js'),
      [
        'assets/JavaScript函数库.html-61e611fe.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-d5fc2992': v(() =>
    i(
      () => import('./Javascript异步编程的4种方法.html-a2e30cda.js'),
      [
        'assets/Javascript异步编程的4种方法.html-a2e30cda.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a0f6ed6e': v(() =>
    i(
      () => import('./Ts核心知识点总结.html-2717938f.js'),
      [
        'assets/Ts核心知识点总结.html-2717938f.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3118468a': v(() =>
    i(
      () => import('./js方法手动实现.html-8b055d46.js'),
      [
        'assets/js方法手动实现.html-8b055d46.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-e12f83da': v(() =>
    i(
      () => import('./函数.html-2a00a432.js'),
      [
        'assets/函数.html-2a00a432.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0a9e9975': v(() =>
    i(
      () => import('./变量与数据类型.html-162fc2b0.js'),
      [
        'assets/变量与数据类型.html-162fc2b0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-6b45e24e': v(() =>
    i(
      () => import('./操作符.html-01407617.js'),
      [
        'assets/操作符.html-01407617.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-120e4f10': v(() =>
    i(
      () => import('./数组.html-f510c9fe.js'),
      [
        'assets/数组.html-f510c9fe.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-835caad4': v(() =>
    i(
      () => import('./正则表达式.html-fbfeb200.js'),
      [
        'assets/正则表达式.html-fbfeb200.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0f51c0e6': v(() =>
    i(
      () => import('./流程控制语句.html-c2fb9ede.js'),
      [
        'assets/流程控制语句.html-c2fb9ede.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-45706c20': v(() =>
    i(
      () => import('./难点总结.html-8ac88268.js'),
      [
        'assets/难点总结.html-8ac88268.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5a1eb93a': v(() =>
    i(
      () => import('./面向对象.html-cef64be2.js'),
      [
        'assets/面向对象.html-cef64be2.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-d029f7dc': v(() =>
    i(
      () => import('./JSX核心语法.html-aa03fbc2.js'),
      [
        'assets/JSX核心语法.html-aa03fbc2.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2aea1902': v(() =>
    i(
      () => import('./index.html-150384a8.js'),
      [
        'assets/index.html-150384a8.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3396cd48': v(() =>
    i(
      () => import('./React.html-68b872e4.js'),
      [
        'assets/React.html-68b872e4.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-176aef0e': v(() =>
    i(
      () => import('./ReactHook.html-b43c0445.js'),
      [
        'assets/ReactHook.html-b43c0445.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-67e92153': v(() =>
    i(
      () => import('./ReactRouter.html-26361910.js'),
      [
        'assets/ReactRouter.html-26361910.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-74948506': v(() =>
    i(
      () => import('./React与TypeScript.html-a1437dde.js'),
      [
        'assets/React与TypeScript.html-a1437dde.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-8f032ab2': v(() =>
    i(
      () => import('./React中axios.html-16db1442.js'),
      [
        'assets/React中axios.html-16db1442.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0f86a3bd': v(() =>
    i(
      () => import('./React中的CSS.html-4c30d759.js'),
      [
        'assets/React中的CSS.html-4c30d759.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4f772ce9': v(() =>
    i(
      () => import('./React总结.html-40348c28.js'),
      [
        'assets/React总结.html-40348c28.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0cc32b96': v(() =>
    i(
      () => import('./React的过渡动画.html-717a85c8.js'),
      [
        'assets/React的过渡动画.html-717a85c8.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-26da8c91': v(() =>
    i(
      () => import('./React组件化开发.html-a0ec8219.js'),
      [
        'assets/React组件化开发.html-a0ec8219.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4648a5f2': v(() =>
    i(
      () => import('./Redux.html-f81b3430.js'),
      [
        'assets/Redux.html-f81b3430.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-694e6903': v(() =>
    i(
      () => import('./react学习路线.html-8ff6e47b.js'),
      [
        'assets/react学习路线.html-8ff6e47b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-02dff447': v(() =>
    i(
      () => import('./Pinia.html-a4f029e7.js'),
      [
        'assets/Pinia.html-a4f029e7.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-34a3c34a': v(() =>
    i(
      () => import('./index.html-05a8cb36.js'),
      [
        'assets/index.html-05a8cb36.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-055d5656': v(() =>
    i(
      () => import('./Vue3.0新特性.html-296cefb0.js'),
      [
        'assets/Vue3.0新特性.html-296cefb0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-de29251e': v(() =>
    i(
      () => import('./Vue3.html-d7d590b3.js'),
      [
        'assets/Vue3.html-d7d590b3.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0699cd05': v(() =>
    i(
      () => import('./VueRouter.html-4e9dd4cc.js'),
      [
        'assets/VueRouter.html-4e9dd4cc.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5fe28728': v(() =>
    i(
      () => import('./VueX.html-b6591232.js'),
      [
        'assets/VueX.html-b6591232.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-f0654642': v(() =>
    i(
      () => import('./Vue核心.html-9dfb47c8.js'),
      [
        'assets/Vue核心.html-9dfb47c8.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7d1f9d1b': v(() =>
    i(
      () => import('./Vue组件化编程.html-72726e2a.js'),
      [
        'assets/Vue组件化编程.html-72726e2a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7badcaf4': v(() =>
    i(
      () => import('./index.html-f3aec8b5.js'),
      [
        'assets/index.html-f3aec8b5.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-48df62da': v(() =>
    i(
      () => import('./深入理解javascript原型和闭包.html-8c66d9f4.js'),
      [
        'assets/深入理解javascript原型和闭包.html-8c66d9f4.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-6b521627': v(() =>
    i(
      () => import('./Class类.html-142c7a0d.js'),
      [
        'assets/Class类.html-142c7a0d.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-09af57da': v(() =>
    i(
      () => import('./ES6的新增方法.html-5adc1c29.js'),
      [
        'assets/ES6的新增方法.html-5adc1c29.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-080e7088': v(() =>
    i(
      () => import('./Generator.html-a4a95e7e.js'),
      [
        'assets/Generator.html-a4a95e7e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-03fc2edc': v(() =>
    i(
      () => import('./Module模块.html-fb948d5e.js'),
      [
        'assets/Module模块.html-fb948d5e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-724a3fc0': v(() =>
    i(
      () => import('./Promise.html-3be091c7.js'),
      [
        'assets/Promise.html-3be091c7.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a4bf6a92': v(() =>
    i(
      () => import('./Proxy和Reflect.html-892128a0.js'),
      [
        'assets/Proxy和Reflect.html-892128a0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5357faee': v(() =>
    i(
      () => import('./Set和Map数据结构.html-156f95e4.js'),
      [
        'assets/Set和Map数据结构.html-156f95e4.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-43faf7f8': v(() =>
    i(
      () => import('./let和const.html-40b640ec.js'),
      [
        'assets/let和const.html-40b640ec.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-94ff530a': v(() =>
    i(
      () => import('./剩余参数与展开运算符.html-2c960f74.js'),
      [
        'assets/剩余参数与展开运算符.html-2c960f74.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2d3fb87c': v(() =>
    i(
      () => import('./对象字面量的增强与函数参数的默认值.html-64c5eb20.js'),
      [
        'assets/对象字面量的增强与函数参数的默认值.html-64c5eb20.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7f9cc112': v(() =>
    i(
      () => import('./模板字符串与箭头函数.html-82b112c0.js'),
      [
        'assets/模板字符串与箭头函数.html-82b112c0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4f3e6294': v(() =>
    i(
      () => import('./解构赋值.html-2aad85c6.js'),
      [
        'assets/解构赋值.html-2aad85c6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-011b7805': v(() =>
    i(
      () => import('./遍历器与for...of循环.html-1c5613a6.js'),
      [
        'assets/遍历器与for...of循环.html-1c5613a6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-59377d8f': v(() =>
    i(
      () => import('./index.html-f8800e14.js'),
      [
        'assets/index.html-f8800e14.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-f2525b1a': v(() =>
    i(
      () => import('./TS基础.html-8c50de45.js'),
      [
        'assets/TS基础.html-8c50de45.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2ce8218c': v(() =>
    i(
      () => import('./TS进阶.html-b5c1fb8c.js'),
      [
        'assets/TS进阶.html-b5c1fb8c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-25d50e6e': v(() =>
    i(
      () => import('./index.html-7cb07147.js'),
      [
        'assets/index.html-7cb07147.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-13fb1133': v(() =>
    i(
      () => import('./图.html-a828016d.js'),
      [
        'assets/图.html-a828016d.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-aae17a9c': v(() =>
    i(
      () => import('./字典.html-91956549.js'),
      [
        'assets/字典.html-91956549.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4bf7c004': v(() =>
    i(
      () => import('./时间空间复杂度.html-8547cbca.js'),
      [
        'assets/时间空间复杂度.html-8547cbca.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-29fb20db': v(() =>
    i(
      () => import('./栈.html-fc35501b.js'),
      [
        'assets/栈.html-fc35501b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-52ef6fc3': v(() =>
    i(
      () => import('./树.html-a1aeb234.js'),
      [
        'assets/树.html-a1aeb234.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-61c295f3': v(() =>
    i(
      () => import('./链表.html-47996f87.js'),
      [
        'assets/链表.html-47996f87.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5ba50a24': v(() =>
    i(
      () => import('./队列.html-06ad71b6.js'),
      [
        'assets/队列.html-06ad71b6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-adf81840': v(() =>
    i(
      () => import('./集合.html-1d7d74c5.js'),
      [
        'assets/集合.html-1d7d74c5.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3cbc3bf2': v(() =>
    i(
      () =>
        import(
          './如何优雅的使用vue_Dcloud（Hbuild）开发混合app.html-d12fe8a6.js'
        ),
      [
        'assets/如何优雅的使用vue_Dcloud（Hbuild）开发混合app.html-d12fe8a6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-8624ebe2': v(() =>
    i(
      () => import('./打包app.html-52c13153.js'),
      [
        'assets/打包app.html-52c13153.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-1d357774': v(() =>
    i(
      () => import('./移动Web.html-7f4094a2.js'),
      [
        'assets/移动Web.html-7f4094a2.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-6bf2c5ad': v(() =>
    i(
      () => import('./移动Web开发入门.html-745d0e98.js'),
      [
        'assets/移动Web开发入门.html-745d0e98.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7da81af2': v(() =>
    i(
      () => import('./移动端真机调试spy-debugger.html-ff6cfa70.js'),
      [
        'assets/移动端真机调试spy-debugger.html-ff6cfa70.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7520a2b4': v(() =>
    i(
      () => import('./JavaScript.html-f5f52f02.js'),
      [
        'assets/JavaScript.html-f5f52f02.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4c4a259d': v(() =>
    i(
      () => import('./index.html-4c0f3b90.js'),
      [
        'assets/index.html-4c0f3b90.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-15875df2': v(() =>
    i(
      () => import('./开发环境搭建.html-e5b4e56e.js'),
      [
        'assets/开发环境搭建.html-e5b4e56e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5363f5e2': v(() =>
    i(
      () => import('./编程思想.html-cbe6ae07.js'),
      [
        'assets/编程思想.html-cbe6ae07.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5e0c8ca6': v(() =>
    i(
      () => import('./index.html-85094bab.js'),
      [
        'assets/index.html-85094bab.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-1a302d61': v(() =>
    i(
      () => import('./基础知识.html-9adec054.js'),
      [
        'assets/基础知识.html-9adec054.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-744d79a4': v(() =>
    i(
      () => import('./官网博客案例实现.html-b8f6d739.js'),
      [
        'assets/官网博客案例实现.html-b8f6d739.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-346dd858': v(() =>
    i(
      () => import('./index.html-e3ae4da7.js'),
      [
        'assets/index.html-e3ae4da7.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-a6a85388': v(() =>
    i(
      () => import('./React-Native.html-66bf40c3.js'),
      [
        'assets/React-Native.html-66bf40c3.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2ba61c6e': v(() =>
    i(
      () => import('./React-Native总结.html-4b15c30a.js'),
      [
        'assets/React-Native总结.html-4b15c30a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3706649a': v(() =>
    i(
      () => import('./404.html-5649f998.js'),
      [
        'assets/404.html-5649f998.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-27b49013': v(() =>
    i(
      () => import('./index.html-2d7b263e.js'),
      [
        'assets/index.html-2d7b263e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-c27f24fc': v(() =>
    i(
      () => import('./index.html-c02aad55.js'),
      [
        'assets/index.html-c02aad55.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-9fb81952': v(() =>
    i(
      () => import('./index.html-3d763a69.js'),
      [
        'assets/index.html-3d763a69.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-57b1bfc1': v(() =>
    i(
      () => import('./index.html-046e7097.js'),
      [
        'assets/index.html-046e7097.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-443af0ca': v(() =>
    i(
      () => import('./index.html-d1c38981.js'),
      [
        'assets/index.html-d1c38981.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-60a386e7': v(() =>
    i(
      () => import('./index.html-fe34f271.js'),
      [
        'assets/index.html-fe34f271.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2c9f8eac': v(() =>
    i(
      () => import('./index.html-be967b68.js'),
      [
        'assets/index.html-be967b68.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-aab4ee98': v(() =>
    i(
      () => import('./index.html-b368d247.js'),
      [
        'assets/index.html-b368d247.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-f5b080b0': v(() =>
    i(
      () => import('./index.html-f8fc5ec4.js'),
      [
        'assets/index.html-f8fc5ec4.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4bc3fec0': v(() =>
    i(
      () => import('./index.html-9d32c41b.js'),
      [
        'assets/index.html-9d32c41b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-d809e874': v(() =>
    i(
      () => import('./index.html-8369b23a.js'),
      [
        'assets/index.html-8369b23a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-8b888220': v(() =>
    i(
      () => import('./index.html-ea495846.js'),
      [
        'assets/index.html-ea495846.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-586910ec': v(() =>
    i(
      () => import('./index.html-c9eae43c.js'),
      [
        'assets/index.html-c9eae43c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2927306e': v(() =>
    i(
      () => import('./index.html-99851179.js'),
      [
        'assets/index.html-99851179.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-c321bac0': v(() =>
    i(
      () => import('./index.html-bb1a835f.js'),
      [
        'assets/index.html-bb1a835f.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-9d672a38': v(() =>
    i(
      () => import('./index.html-83cace69.js'),
      [
        'assets/index.html-83cace69.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0660c8a7': v(() =>
    i(
      () => import('./index.html-34ca895a.js'),
      [
        'assets/index.html-34ca895a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b6e98450': v(() =>
    i(
      () => import('./index.html-75d4bf0d.js'),
      [
        'assets/index.html-75d4bf0d.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-63677946': v(() =>
    i(
      () => import('./index.html-76b971ec.js'),
      [
        'assets/index.html-76b971ec.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-03374f16': v(() =>
    i(
      () => import('./index.html-439bcad0.js'),
      [
        'assets/index.html-439bcad0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-d82043fc': v(() =>
    i(
      () => import('./index.html-9c277028.js'),
      [
        'assets/index.html-9c277028.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5ecb563f': v(() =>
    i(
      () => import('./index.html-97eb9391.js'),
      [
        'assets/index.html-97eb9391.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-22af1d98': v(() =>
    i(
      () => import('./index.html-df2a458b.js'),
      [
        'assets/index.html-df2a458b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5bc93818': v(() =>
    i(
      () => import('./index.html-8163b5d5.js'),
      [
        'assets/index.html-8163b5d5.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-744d024e': v(() =>
    i(
      () => import('./index.html-b58a15a0.js'),
      [
        'assets/index.html-b58a15a0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-e52c881c': v(() =>
    i(
      () => import('./index.html-e85108dd.js'),
      [
        'assets/index.html-e85108dd.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-154dc4c4': v(() =>
    i(
      () => import('./index.html-bc8d2057.js'),
      [
        'assets/index.html-bc8d2057.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-01560935': v(() =>
    i(
      () => import('./index.html-fd8bdeed.js'),
      [
        'assets/index.html-fd8bdeed.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3fe1292c': v(() =>
    i(
      () => import('./index.html-ea5f38b4.js'),
      [
        'assets/index.html-ea5f38b4.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-288e4719': v(() =>
    i(
      () => import('./index.html-4f38aa5a.js'),
      [
        'assets/index.html-4f38aa5a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-926502fe': v(() =>
    i(
      () => import('./index.html-f7c2e622.js'),
      [
        'assets/index.html-f7c2e622.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2826d081': v(() =>
    i(
      () => import('./index.html-b8c26170.js'),
      [
        'assets/index.html-b8c26170.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7d0e6254': v(() =>
    i(
      () => import('./index.html-fdd0ec05.js'),
      [
        'assets/index.html-fdd0ec05.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4507db72': v(() =>
    i(
      () => import('./index.html-7534d714.js'),
      [
        'assets/index.html-7534d714.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-006f9769': v(() =>
    i(
      () => import('./index.html-fb2db41b.js'),
      [
        'assets/index.html-fb2db41b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2cc9ac3d': v(() =>
    i(
      () => import('./index.html-c08e8bd6.js'),
      [
        'assets/index.html-c08e8bd6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-eafad332': v(() =>
    i(
      () => import('./index.html-dbed3986.js'),
      [
        'assets/index.html-dbed3986.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4ac2fdf1': v(() =>
    i(
      () => import('./index.html-c061e92e.js'),
      [
        'assets/index.html-c061e92e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-8f7daaaa': v(() =>
    i(
      () => import('./index.html-151b155d.js'),
      [
        'assets/index.html-151b155d.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-59401cc8': v(() =>
    i(
      () => import('./index.html-4d74d18b.js'),
      [
        'assets/index.html-4d74d18b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-63806412': v(() =>
    i(
      () => import('./index.html-30487c25.js'),
      [
        'assets/index.html-30487c25.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-97aefb08': v(() =>
    i(
      () => import('./index.html-80601eeb.js'),
      [
        'assets/index.html-80601eeb.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4088415f': v(() =>
    i(
      () => import('./index.html-d347887f.js'),
      [
        'assets/index.html-d347887f.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b302da92': v(() =>
    i(
      () => import('./index.html-ce3785e0.js'),
      [
        'assets/index.html-ce3785e0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-227ecbd6': v(() =>
    i(
      () => import('./index.html-2325af9f.js'),
      [
        'assets/index.html-2325af9f.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3d7e901c': v(() =>
    i(
      () => import('./index.html-a9f04428.js'),
      [
        'assets/index.html-a9f04428.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-44360dd8': v(() =>
    i(
      () => import('./index.html-2167da58.js'),
      [
        'assets/index.html-2167da58.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-286e3dc8': v(() =>
    i(
      () => import('./index.html-3444b0ea.js'),
      [
        'assets/index.html-3444b0ea.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4d852ace': v(() =>
    i(
      () => import('./index.html-8eda13fe.js'),
      [
        'assets/index.html-8eda13fe.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2920a333': v(() =>
    i(
      () => import('./index.html-6da42655.js'),
      [
        'assets/index.html-6da42655.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5e0b61bd': v(() =>
    i(
      () => import('./index.html-3b91f2ea.js'),
      [
        'assets/index.html-3b91f2ea.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-23e7ea67': v(() =>
    i(
      () => import('./index.html-9eb30604.js'),
      [
        'assets/index.html-9eb30604.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4bc03a0c': v(() =>
    i(
      () => import('./index.html-131ff1f2.js'),
      [
        'assets/index.html-131ff1f2.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-eb686fe0': v(() =>
    i(
      () => import('./index.html-8b29c40c.js'),
      [
        'assets/index.html-8b29c40c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-65f270d8': v(() =>
    i(
      () => import('./index.html-8584dd57.js'),
      [
        'assets/index.html-8584dd57.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-37fc715f': v(() =>
    i(
      () => import('./index.html-1c1e193f.js'),
      [
        'assets/index.html-1c1e193f.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-137f2c63': v(() =>
    i(
      () => import('./index.html-63fbecda.js'),
      [
        'assets/index.html-63fbecda.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2687e471': v(() =>
    i(
      () => import('./index.html-fc06d3f8.js'),
      [
        'assets/index.html-fc06d3f8.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7cda78cb': v(() =>
    i(
      () => import('./index.html-c01a6558.js'),
      [
        'assets/index.html-c01a6558.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-28e050df': v(() =>
    i(
      () => import('./index.html-7160da80.js'),
      [
        'assets/index.html-7160da80.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0fd59de4': v(() =>
    i(
      () => import('./index.html-630935a2.js'),
      [
        'assets/index.html-630935a2.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b30a441c': v(() =>
    i(
      () => import('./index.html-dbb2de65.js'),
      [
        'assets/index.html-dbb2de65.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5fb2089c': v(() =>
    i(
      () => import('./index.html-eb608b0e.js'),
      [
        'assets/index.html-eb608b0e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-29752bdd': v(() =>
    i(
      () => import('./index.html-16f21438.js'),
      [
        'assets/index.html-16f21438.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-65ee2aa4': v(() =>
    i(
      () => import('./index.html-8c582971.js'),
      [
        'assets/index.html-8c582971.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-89f348a6': v(() =>
    i(
      () => import('./index.html-c697a3bf.js'),
      [
        'assets/index.html-c697a3bf.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3d184cee': v(() =>
    i(
      () => import('./index.html-6d649d76.js'),
      [
        'assets/index.html-6d649d76.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b30a3518': v(() =>
    i(
      () => import('./index.html-17f74574.js'),
      [
        'assets/index.html-17f74574.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-884bc6b0': v(() =>
    i(
      () => import('./index.html-ea1d37e8.js'),
      [
        'assets/index.html-ea1d37e8.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b30a1710': v(() =>
    i(
      () => import('./index.html-dc094f3b.js'),
      [
        'assets/index.html-dc094f3b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-119178eb': v(() =>
    i(
      () => import('./index.html-44e6a830.js'),
      [
        'assets/index.html-44e6a830.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-245f5676': v(() =>
    i(
      () => import('./index.html-65dd4013.js'),
      [
        'assets/index.html-65dd4013.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-65f6d381': v(() =>
    i(
      () => import('./index.html-986eda7c.js'),
      [
        'assets/index.html-986eda7c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-794d224b': v(() =>
    i(
      () => import('./index.html-df6f5790.js'),
      [
        'assets/index.html-df6f5790.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-58e39d2b': v(() =>
    i(
      () => import('./index.html-d2b76305.js'),
      [
        'assets/index.html-d2b76305.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-9f472498': v(() =>
    i(
      () => import('./index.html-92488f63.js'),
      [
        'assets/index.html-92488f63.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-442fcfc0': v(() =>
    i(
      () => import('./index.html-e916c86f.js'),
      [
        'assets/index.html-e916c86f.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-1bee38ca': v(() =>
    i(
      () => import('./index.html-7a885441.js'),
      [
        'assets/index.html-7a885441.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-c04f9a82': v(() =>
    i(
      () => import('./index.html-6f5d9de0.js'),
      [
        'assets/index.html-6f5d9de0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-788be0b2': v(() =>
    i(
      () => import('./index.html-48200be1.js'),
      [
        'assets/index.html-48200be1.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-590addf8': v(() =>
    i(
      () => import('./index.html-95b9404d.js'),
      [
        'assets/index.html-95b9404d.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b356b776': v(() =>
    i(
      () => import('./index.html-c829ae05.js'),
      [
        'assets/index.html-c829ae05.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b7762ed0': v(() =>
    i(
      () => import('./index.html-337c0a72.js'),
      [
        'assets/index.html-337c0a72.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7ee9e0e8': v(() =>
    i(
      () => import('./index.html-7598c411.js'),
      [
        'assets/index.html-7598c411.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-180d5090': v(() =>
    i(
      () => import('./index.html-e0895a75.js'),
      [
        'assets/index.html-e0895a75.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-57d72a87': v(() =>
    i(
      () => import('./index.html-fa2079af.js'),
      [
        'assets/index.html-fa2079af.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-fd152726': v(() =>
    i(
      () => import('./index.html-ca9945a5.js'),
      [
        'assets/index.html-ca9945a5.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-35bc8e54': v(() =>
    i(
      () => import('./index.html-07f11aec.js'),
      [
        'assets/index.html-07f11aec.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2953c4b5': v(() =>
    i(
      () => import('./index.html-9c8c5503.js'),
      [
        'assets/index.html-9c8c5503.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-06ebc23c': v(() =>
    i(
      () => import('./index.html-74df4187.js'),
      [
        'assets/index.html-74df4187.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2953c4d4': v(() =>
    i(
      () => import('./index.html-98e0b418.js'),
      [
        'assets/index.html-98e0b418.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-bc7b9816': v(() =>
    i(
      () => import('./index.html-4775b8e1.js'),
      [
        'assets/index.html-4775b8e1.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-6e3f2a98': v(() =>
    i(
      () => import('./index.html-1835bbc0.js'),
      [
        'assets/index.html-1835bbc0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-65ef0bff': v(() =>
    i(
      () => import('./index.html-ce4ea71c.js'),
      [
        'assets/index.html-ce4ea71c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-962e227a': v(() =>
    i(
      () => import('./index.html-b24c0730.js'),
      [
        'assets/index.html-b24c0730.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-15c34810': v(() =>
    i(
      () => import('./index.html-aeb88c6a.js'),
      [
        'assets/index.html-aeb88c6a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0842592c': v(() =>
    i(
      () => import('./index.html-8808913e.js'),
      [
        'assets/index.html-8808913e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-5c5af6a7': v(() =>
    i(
      () => import('./index.html-ad8d781c.js'),
      [
        'assets/index.html-ad8d781c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0083498e': v(() =>
    i(
      () => import('./index.html-db21288c.js'),
      [
        'assets/index.html-db21288c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-06be9332': v(() =>
    i(
      () => import('./index.html-ea482675.js'),
      [
        'assets/index.html-ea482675.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-1378dfa0': v(() =>
    i(
      () => import('./index.html-0832e6d1.js'),
      [
        'assets/index.html-0832e6d1.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-34ef3fac': v(() =>
    i(
      () => import('./index.html-6d35b616.js'),
      [
        'assets/index.html-6d35b616.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0ceffcb2': v(() =>
    i(
      () => import('./index.html-38c8c650.js'),
      [
        'assets/index.html-38c8c650.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-09a91fe2': v(() =>
    i(
      () => import('./index.html-c7f3ba4b.js'),
      [
        'assets/index.html-c7f3ba4b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-294e8ebd': v(() =>
    i(
      () => import('./index.html-8d6886e9.js'),
      [
        'assets/index.html-8d6886e9.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-64e6318a': v(() =>
    i(
      () => import('./index.html-b7aaf9f5.js'),
      [
        'assets/index.html-b7aaf9f5.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3fb58c9e': v(() =>
    i(
      () => import('./index.html-f4a92f4b.js'),
      [
        'assets/index.html-f4a92f4b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-586bd7bf': v(() =>
    i(
      () => import('./index.html-b45eb00c.js'),
      [
        'assets/index.html-b45eb00c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0dc7daa4': v(() =>
    i(
      () => import('./index.html-5c43215d.js'),
      [
        'assets/index.html-5c43215d.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-935e02ba': v(() =>
    i(
      () => import('./index.html-28feb2f1.js'),
      [
        'assets/index.html-28feb2f1.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-57f72af1': v(() =>
    i(
      () => import('./index.html-8cd8eaf7.js'),
      [
        'assets/index.html-8cd8eaf7.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-28475211': v(() =>
    i(
      () => import('./index.html-444b959d.js'),
      [
        'assets/index.html-444b959d.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2d91415a': v(() =>
    i(
      () => import('./index.html-3a45f01f.js'),
      [
        'assets/index.html-3a45f01f.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-31f58c60': v(() =>
    i(
      () => import('./index.html-8bfb27fb.js'),
      [
        'assets/index.html-8bfb27fb.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b3153486': v(() =>
    i(
      () => import('./index.html-2727d75b.js'),
      [
        'assets/index.html-2727d75b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b313630a': v(() =>
    i(
      () => import('./index.html-6e84f09f.js'),
      [
        'assets/index.html-6e84f09f.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-700e079e': v(() =>
    i(
      () => import('./index.html-850f1209.js'),
      [
        'assets/index.html-850f1209.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0be95582': v(() =>
    i(
      () => import('./index.html-1fc4683b.js'),
      [
        'assets/index.html-1fc4683b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-aafe73e0': v(() =>
    i(
      () => import('./index.html-04ea6d2e.js'),
      [
        'assets/index.html-04ea6d2e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-738ffd67': v(() =>
    i(
      () => import('./index.html-5229cfc4.js'),
      [
        'assets/index.html-5229cfc4.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-f64eddd4': v(() =>
    i(
      () => import('./index.html-5c016725.js'),
      [
        'assets/index.html-5c016725.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-470fd025': v(() =>
    i(
      () => import('./index.html-42119edd.js'),
      [
        'assets/index.html-42119edd.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-66f1a1a4': v(() =>
    i(
      () => import('./index.html-4c6065f5.js'),
      [
        'assets/index.html-4c6065f5.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-51c7cc6e': v(() =>
    i(
      () => import('./index.html-e3ad371a.js'),
      [
        'assets/index.html-e3ad371a.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b47f1fa2': v(() =>
    i(
      () => import('./index.html-bfbb4bed.js'),
      [
        'assets/index.html-bfbb4bed.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-c0b6803a': v(() =>
    i(
      () => import('./index.html-4e225251.js'),
      [
        'assets/index.html-4e225251.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-90f98c8e': v(() =>
    i(
      () => import('./index.html-8c82fd3e.js'),
      [
        'assets/index.html-8c82fd3e.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0d223344': v(() =>
    i(
      () => import('./index.html-9256b1d7.js'),
      [
        'assets/index.html-9256b1d7.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3f8dd4f6': v(() =>
    i(
      () => import('./index.html-f6ad96f7.js'),
      [
        'assets/index.html-f6ad96f7.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-56a27b8a': v(() =>
    i(
      () => import('./index.html-959301bc.js'),
      [
        'assets/index.html-959301bc.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7159b88a': v(() =>
    i(
      () => import('./index.html-c286f5f4.js'),
      [
        'assets/index.html-c286f5f4.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3d319135': v(() =>
    i(
      () => import('./index.html-31755123.js'),
      [
        'assets/index.html-31755123.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b3fc6626': v(() =>
    i(
      () => import('./index.html-ac509461.js'),
      [
        'assets/index.html-ac509461.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-42a2b80e': v(() =>
    i(
      () => import('./index.html-5e776d94.js'),
      [
        'assets/index.html-5e776d94.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-51aa3ec2': v(() =>
    i(
      () => import('./index.html-118d2287.js'),
      [
        'assets/index.html-118d2287.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2a65b148': v(() =>
    i(
      () => import('./index.html-79d8a05d.js'),
      [
        'assets/index.html-79d8a05d.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-1279d962': v(() =>
    i(
      () => import('./index.html-2c408f47.js'),
      [
        'assets/index.html-2c408f47.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-624fd560': v(() =>
    i(
      () => import('./index.html-59e83ed6.js'),
      [
        'assets/index.html-59e83ed6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b306094a': v(() =>
    i(
      () => import('./index.html-17e17e05.js'),
      [
        'assets/index.html-17e17e05.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b30b9cbe': v(() =>
    i(
      () => import('./index.html-5de90b8c.js'),
      [
        'assets/index.html-5de90b8c.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b30c667c': v(() =>
    i(
      () => import('./index.html-3324eb48.js'),
      [
        'assets/index.html-3324eb48.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3f2d760c': v(() =>
    i(
      () => import('./index.html-3163aba6.js'),
      [
        'assets/index.html-3163aba6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-1cc2ba94': v(() =>
    i(
      () => import('./index.html-4188d41b.js'),
      [
        'assets/index.html-4188d41b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-302da203': v(() =>
    i(
      () => import('./index.html-16fa6505.js'),
      [
        'assets/index.html-16fa6505.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-449e8fd4': v(() =>
    i(
      () => import('./index.html-1bd51fef.js'),
      [
        'assets/index.html-1bd51fef.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4e91f925': v(() =>
    i(
      () => import('./index.html-31c22ec1.js'),
      [
        'assets/index.html-31c22ec1.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0ac25f49': v(() =>
    i(
      () => import('./index.html-01770399.js'),
      [
        'assets/index.html-01770399.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-56b77ef3': v(() =>
    i(
      () => import('./index.html-88ad6f95.js'),
      [
        'assets/index.html-88ad6f95.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-240a4080': v(() =>
    i(
      () => import('./index.html-8719f705.js'),
      [
        'assets/index.html-8719f705.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2367f3cb': v(() =>
    i(
      () => import('./index.html-b68addda.js'),
      [
        'assets/index.html-b68addda.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-34ece0c6': v(() =>
    i(
      () => import('./index.html-d2e89de6.js'),
      [
        'assets/index.html-d2e89de6.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-300d34ce': v(() =>
    i(
      () => import('./index.html-80410acb.js'),
      [
        'assets/index.html-80410acb.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-2a810ce3': v(() =>
    i(
      () => import('./index.html-0b2185b3.js'),
      [
        'assets/index.html-0b2185b3.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-0b0853ac': v(() =>
    i(
      () => import('./index.html-2c0d0abe.js'),
      [
        'assets/index.html-2c0d0abe.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-405ef958': v(() =>
    i(
      () => import('./index.html-c29a3f71.js'),
      [
        'assets/index.html-c29a3f71.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b6d14f14': v(() =>
    i(
      () => import('./index.html-45904670.js'),
      [
        'assets/index.html-45904670.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b6d14944': v(() =>
    i(
      () => import('./index.html-dadf2281.js'),
      [
        'assets/index.html-dadf2281.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-4f1a28a4': v(() =>
    i(
      () => import('./index.html-17181dc1.js'),
      [
        'assets/index.html-17181dc1.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-7d0f4556': v(() =>
    i(
      () => import('./index.html-fcefc130.js'),
      [
        'assets/index.html-fcefc130.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3f698511': v(() =>
    i(
      () => import('./index.html-612e44a0.js'),
      [
        'assets/index.html-612e44a0.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-63eec128': v(() =>
    i(
      () => import('./index.html-6ed7000b.js'),
      [
        'assets/index.html-6ed7000b.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-9ed0166a': v(() =>
    i(
      () => import('./index.html-b3a2a451.js'),
      [
        'assets/index.html-b3a2a451.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-3b951558': v(() =>
    i(
      () => import('./index.html-25f8eedf.js'),
      [
        'assets/index.html-25f8eedf.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  ),
  'v-b5120c32': v(() =>
    i(
      () => import('./index.html-00ad1374.js'),
      [
        'assets/index.html-00ad1374.js',
        'assets/plugin-vue_export-helper-c27b6911.js'
      ]
    )
  )
}
var j1 = Symbol(''),
  N1 = U(L1),
  Xs = Kt({
    key: '',
    path: '',
    title: '',
    lang: '',
    frontmatter: {},
    headers: []
  }),
  ar = U(Xs),
  de = () => ar,
  Ys = Symbol(''),
  Fe = () => {
    const e = me(Ys)
    if (!e) throw new Error('usePageFrontmatter() is called without provider.')
    return e
  },
  Qs = Symbol(''),
  H1 = () => {
    const e = me(Qs)
    if (!e) throw new Error('usePageHead() is called without provider.')
    return e
  },
  J1 = Symbol(''),
  Zs = Symbol(''),
  so = () => {
    const e = me(Zs)
    if (!e) throw new Error('usePageLang() is called without provider.')
    return e
  },
  e5 = Symbol(''),
  z1 = () => {
    const e = me(e5)
    if (!e) throw new Error('usePageLayout() is called without provider.')
    return e
  },
  c8 = Symbol(''),
  Vt = () => {
    const e = me(c8)
    if (!e) throw new Error('useRouteLocale() is called without provider.')
    return e
  },
  qr = U(P1),
  t5 = () => qr,
  r5 = Symbol(''),
  oE = () => {
    const e = me(r5)
    if (!e) throw new Error('useSiteLocaleData() is called without provider.')
    return e
  },
  U1 = Symbol(''),
  q1 = 'Layout',
  W1 = 'NotFound',
  $t = vn({
    resolveLayouts: e => e.reduce((t, r) => ({ ...t, ...r.layouts }), {}),
    resolvePageData: async e => {
      const t = N1.value[e]
      return (await (t == null ? void 0 : t())) ?? Xs
    },
    resolvePageFrontmatter: e => e.frontmatter,
    resolvePageHead: (e, t, r) => {
      const n = Ee(t.description) ? t.description : r.description,
        E = [
          ...(z(t.head) ? t.head : []),
          ...r.head,
          ['title', {}, e],
          ['meta', { name: 'description', content: n }]
        ]
      return V1(E)
    },
    resolvePageHeadTitle: (e, t) =>
      [e.title, t.title].filter(r => !!r).join(' | '),
    resolvePageLang: e => e.lang || 'en',
    resolvePageLayout: (e, t) => {
      let r
      if (e.path) {
        const n = e.frontmatter.layout
        Ee(n) ? (r = n) : (r = q1)
      } else r = W1
      return t[r]
    },
    resolveRouteLocale: (e, t) => $1(e, t),
    resolveSiteLocaleData: (e, t) => ({ ...e, ...e.locales[t] })
  }),
  co = M({
    name: 'ClientOnly',
    setup(e, t) {
      const r = U(!1)
      return (
        se(() => {
          r.value = !0
        }),
        () => {
          var n, E
          return r.value
            ? (E = (n = t.slots).default) == null
              ? void 0
              : E.call(n)
            : null
        }
      )
    }
  }),
  n5 = M({
    name: 'Content',
    props: { pageKey: { type: String, required: !1, default: '' } },
    setup(e) {
      const t = de(),
        r = y(() => Gs[e.pageKey || t.value.key])
      return () => (r.value ? u(r.value) : u('div', '404 Not Found'))
    }
  }),
  ut = (e = {}) => e,
  Se = e => (pr(e) ? e : `/${Ks(e)}`)
const K1 = {}
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const zr = typeof window < 'u'
function G1(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const he = Object.assign
function wo(e, t) {
  const r = {}
  for (const n in t) {
    const E = t[n]
    r[n] = bt(E) ? E.map(e) : e(E)
  }
  return r
}
const On = () => {},
  bt = Array.isArray,
  X1 = /\/$/,
  Y1 = e => e.replace(X1, '')
function Io(e, t, r = '/') {
  let n,
    E = {},
    o = '',
    a = ''
  const l = t.indexOf('#')
  let s = t.indexOf('?')
  return (
    l < s && l >= 0 && (s = -1),
    s > -1 &&
      ((n = t.slice(0, s)),
      (o = t.slice(s + 1, l > -1 ? l : t.length)),
      (E = e(o))),
    l > -1 && ((n = n || t.slice(0, l)), (a = t.slice(l, t.length))),
    (n = t7(n ?? t, r)),
    { fullPath: n + (o && '?') + o + a, path: n, query: E, hash: a }
  )
}
function Q1(e, t) {
  const r = t.query ? e(t.query) : ''
  return t.path + (r && '?') + r + (t.hash || '')
}
function Li(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function Z1(e, t, r) {
  const n = t.matched.length - 1,
    E = r.matched.length - 1
  return (
    n > -1 &&
    n === E &&
    ln(t.matched[n], r.matched[E]) &&
    E5(t.params, r.params) &&
    e(t.query) === e(r.query) &&
    t.hash === r.hash
  )
}
function ln(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function E5(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const r in e) if (!e7(e[r], t[r])) return !1
  return !0
}
function e7(e, t) {
  return bt(e) ? Pi(e, t) : bt(t) ? Pi(t, e) : e === t
}
function Pi(e, t) {
  return bt(t)
    ? e.length === t.length && e.every((r, n) => r === t[n])
    : e.length === 1 && e[0] === t
}
function t7(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const r = t.split('/'),
    n = e.split('/'),
    E = n[n.length - 1]
  ;(E === '..' || E === '.') && n.push('')
  let o = r.length - 1,
    a,
    l
  for (a = 0; a < n.length; a++)
    if (((l = n[a]), l !== '.'))
      if (l === '..') o > 1 && o--
      else break
  return (
    r.slice(0, o).join('/') +
    '/' +
    n.slice(a - (a === n.length ? 1 : 0)).join('/')
  )
}
var Gn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(Gn || (Gn = {}))
var Vn
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Vn || (Vn = {}))
function r7(e) {
  if (!e)
    if (zr) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Y1(e)
}
const n7 = /^[^#]+#/
function E7(e, t) {
  return e.replace(n7, '#') + t
}
function o7(e, t) {
  const r = document.documentElement.getBoundingClientRect(),
    n = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: n.left - r.left - (t.left || 0),
    top: n.top - r.top - (t.top || 0)
  }
}
const uo = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function a7(e) {
  let t
  if ('el' in e) {
    const r = e.el,
      n = typeof r == 'string' && r.startsWith('#'),
      E =
        typeof r == 'string'
          ? n
            ? document.getElementById(r.slice(1))
            : document.querySelector(r)
          : r
    if (!E) return
    t = o7(E, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      )
}
function Oi(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Aa = new Map()
function i7(e, t) {
  Aa.set(e, t)
}
function l7(e) {
  const t = Aa.get(e)
  return Aa.delete(e), t
}
let s7 = () => location.protocol + '//' + location.host
function o5(e, t) {
  const { pathname: r, search: n, hash: E } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let l = E.includes(e.slice(o)) ? e.slice(o).length : 1,
      s = E.slice(l)
    return s[0] !== '/' && (s = '/' + s), Li(s, '')
  }
  return Li(r, e) + n + E
}
function c7(e, t, r, n) {
  let E = [],
    o = [],
    a = null
  const l = ({ state: B }) => {
    const p = o5(e, location),
      f = r.value,
      F = t.value
    let S = 0
    if (B) {
      if (((r.value = p), (t.value = B), a && a === f)) {
        a = null
        return
      }
      S = F ? B.position - F.position : 0
    } else n(p)
    E.forEach(D => {
      D(r.value, f, {
        delta: S,
        type: Gn.pop,
        direction: S ? (S > 0 ? Vn.forward : Vn.back) : Vn.unknown
      })
    })
  }
  function s() {
    a = r.value
  }
  function c(B) {
    E.push(B)
    const p = () => {
      const f = E.indexOf(B)
      f > -1 && E.splice(f, 1)
    }
    return o.push(p), p
  }
  function d() {
    const { history: B } = window
    B.state && B.replaceState(he({}, B.state, { scroll: uo() }), '')
  }
  function A() {
    for (const B of o) B()
    ;(o = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', d)
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', d, { passive: !0 }),
    { pauseListeners: s, listen: c, destroy: A }
  )
}
function Vi(e, t, r, n = !1, E = !1) {
  return {
    back: e,
    current: t,
    forward: r,
    replaced: n,
    position: window.history.length,
    scroll: E ? uo() : null
  }
}
function u7(e) {
  const { history: t, location: r } = window,
    n = { value: o5(e, r) },
    E = { value: t.state }
  E.value ||
    o(
      n.value,
      {
        back: null,
        current: n.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function o(s, c, d) {
    const A = e.indexOf('#'),
      B =
        A > -1
          ? (r.host && document.querySelector('base') ? e : e.slice(A)) + s
          : s7() + e + s
    try {
      t[d ? 'replaceState' : 'pushState'](c, '', B), (E.value = c)
    } catch (p) {
      console.error(p), r[d ? 'replace' : 'assign'](B)
    }
  }
  function a(s, c) {
    const d = he({}, t.state, Vi(E.value.back, s, E.value.forward, !0), c, {
      position: E.value.position
    })
    o(s, d, !0), (n.value = s)
  }
  function l(s, c) {
    const d = he({}, E.value, t.state, { forward: s, scroll: uo() })
    o(d.current, d, !0)
    const A = he({}, Vi(n.value, s, null), { position: d.position + 1 }, c)
    o(s, A, !1), (n.value = s)
  }
  return { location: n, state: E, push: l, replace: a }
}
function d7(e) {
  e = r7(e)
  const t = u7(e),
    r = c7(e, t.state, t.location, t.replace)
  function n(o, a = !0) {
    a || r.pauseListeners(), history.go(o)
  }
  const E = he(
    { location: '', base: e, go: n, createHref: E7.bind(null, e) },
    t,
    r
  )
  return (
    Object.defineProperty(E, 'location', {
      enumerable: !0,
      get: () => t.location.value
    }),
    Object.defineProperty(E, 'state', {
      enumerable: !0,
      get: () => t.state.value
    }),
    E
  )
}
function A7(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function a5(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const jt = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  i5 = Symbol('')
var xi
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(xi || (xi = {}))
function sn(e, t) {
  return he(new Error(), { type: e, [i5]: !0 }, t)
}
function kt(e, t) {
  return e instanceof Error && i5 in e && (t == null || !!(e.type & t))
}
const ki = '[^/]+?',
  B7 = { sensitive: !1, strict: !1, start: !0, end: !0 },
  v7 = /[.+*?^${}()[\]/\\]/g
function p7(e, t) {
  const r = he({}, B7, t),
    n = []
  let E = r.start ? '^' : ''
  const o = []
  for (const c of e) {
    const d = c.length ? [] : [90]
    r.strict && !c.length && (E += '/')
    for (let A = 0; A < c.length; A++) {
      const B = c[A]
      let p = 40 + (r.sensitive ? 0.25 : 0)
      if (B.type === 0)
        A || (E += '/'), (E += B.value.replace(v7, '\\$&')), (p += 40)
      else if (B.type === 1) {
        const { value: f, repeatable: F, optional: S, regexp: D } = B
        o.push({ name: f, repeatable: F, optional: S })
        const b = D || ki
        if (b !== ki) {
          p += 10
          try {
            new RegExp(`(${b})`)
          } catch (_) {
            throw new Error(
              `Invalid custom RegExp for param "${f}" (${b}): ` + _.message
            )
          }
        }
        let g = F ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`
        A || (g = S && c.length < 2 ? `(?:/${g})` : '/' + g),
          S && (g += '?'),
          (E += g),
          (p += 20),
          S && (p += -8),
          F && (p += -20),
          b === '.*' && (p += -50)
      }
      d.push(p)
    }
    n.push(d)
  }
  if (r.strict && r.end) {
    const c = n.length - 1
    n[c][n[c].length - 1] += 0.7000000000000001
  }
  r.strict || (E += '/?'), r.end ? (E += '$') : r.strict && (E += '(?:/|$)')
  const a = new RegExp(E, r.sensitive ? '' : 'i')
  function l(c) {
    const d = c.match(a),
      A = {}
    if (!d) return null
    for (let B = 1; B < d.length; B++) {
      const p = d[B] || '',
        f = o[B - 1]
      A[f.name] = p && f.repeatable ? p.split('/') : p
    }
    return A
  }
  function s(c) {
    let d = '',
      A = !1
    for (const B of e) {
      ;(!A || !d.endsWith('/')) && (d += '/'), (A = !1)
      for (const p of B)
        if (p.type === 0) d += p.value
        else if (p.type === 1) {
          const { value: f, repeatable: F, optional: S } = p,
            D = f in c ? c[f] : ''
          if (bt(D) && !F)
            throw new Error(
              `Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`
            )
          const b = bt(D) ? D.join('/') : D
          if (!b)
            if (S)
              B.length < 2 &&
                (d.endsWith('/') ? (d = d.slice(0, -1)) : (A = !0))
            else throw new Error(`Missing required param "${f}"`)
          d += b
        }
    }
    return d || '/'
  }
  return { re: a, score: n, keys: o, parse: l, stringify: s }
}
function f7(e, t) {
  let r = 0
  for (; r < e.length && r < t.length; ) {
    const n = t[r] - e[r]
    if (n) return n
    r++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0
}
function m7(e, t) {
  let r = 0
  const n = e.score,
    E = t.score
  for (; r < n.length && r < E.length; ) {
    const o = f7(n[r], E[r])
    if (o) return o
    r++
  }
  if (Math.abs(E.length - n.length) === 1) {
    if (Mi(n)) return 1
    if (Mi(E)) return -1
  }
  return E.length - n.length
}
function Mi(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const h7 = { type: 0, value: '' },
  _7 = /[a-zA-Z0-9_]/
function g7(e) {
  if (!e) return [[]]
  if (e === '/') return [[h7]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(p) {
    throw new Error(`ERR (${r})/"${c}": ${p}`)
  }
  let r = 0,
    n = r
  const E = []
  let o
  function a() {
    o && E.push(o), (o = [])
  }
  let l = 0,
    s,
    c = '',
    d = ''
  function A() {
    c &&
      (r === 0
        ? o.push({ type: 0, value: c })
        : r === 1 || r === 2 || r === 3
        ? (o.length > 1 &&
            (s === '*' || s === '+') &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: c,
            regexp: d,
            repeatable: s === '*' || s === '+',
            optional: s === '*' || s === '?'
          }))
        : t('Invalid state to consume buffer'),
      (c = ''))
  }
  function B() {
    c += s
  }
  for (; l < e.length; ) {
    if (((s = e[l++]), s === '\\' && r !== 2)) {
      ;(n = r), (r = 4)
      continue
    }
    switch (r) {
      case 0:
        s === '/' ? (c && A(), a()) : s === ':' ? (A(), (r = 1)) : B()
        break
      case 4:
        B(), (r = n)
        break
      case 1:
        s === '('
          ? (r = 2)
          : _7.test(s)
          ? B()
          : (A(), (r = 0), s !== '*' && s !== '?' && s !== '+' && l--)
        break
      case 2:
        s === ')'
          ? d[d.length - 1] == '\\'
            ? (d = d.slice(0, -1) + s)
            : (r = 3)
          : (d += s)
        break
      case 3:
        A(), (r = 0), s !== '*' && s !== '?' && s !== '+' && l--, (d = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return r === 2 && t(`Unfinished custom RegExp for param "${c}"`), A(), a(), E
}
function F7(e, t, r) {
  const n = p7(g7(e.path), r),
    E = he(n, { record: e, parent: t, children: [], alias: [] })
  return t && !E.record.aliasOf == !t.record.aliasOf && t.children.push(E), E
}
function D7(e, t) {
  const r = [],
    n = new Map()
  t = Ni({ strict: !1, end: !0, sensitive: !1 }, t)
  function E(d) {
    return n.get(d)
  }
  function o(d, A, B) {
    const p = !B,
      f = b7(d)
    f.aliasOf = B && B.record
    const F = Ni(t, d),
      S = [f]
    if ('alias' in d) {
      const g = typeof d.alias == 'string' ? [d.alias] : d.alias
      for (const _ of g)
        S.push(
          he({}, f, {
            components: B ? B.record.components : f.components,
            path: _,
            aliasOf: B ? B.record : f
          })
        )
    }
    let D, b
    for (const g of S) {
      const { path: _ } = g
      if (A && _[0] !== '/') {
        const w = A.record.path,
          R = w[w.length - 1] === '/' ? '' : '/'
        g.path = A.record.path + (_ && R + _)
      }
      if (
        ((D = F7(g, A, F)),
        B
          ? B.alias.push(D)
          : ((b = b || D),
            b !== D && b.alias.push(D),
            p && d.name && !ji(D) && a(d.name)),
        f.children)
      ) {
        const w = f.children
        for (let R = 0; R < w.length; R++) o(w[R], D, B && B.children[R])
      }
      ;(B = B || D),
        ((D.record.components && Object.keys(D.record.components).length) ||
          D.record.name ||
          D.record.redirect) &&
          s(D)
    }
    return b
      ? () => {
          a(b)
        }
      : On
  }
  function a(d) {
    if (a5(d)) {
      const A = n.get(d)
      A &&
        (n.delete(d),
        r.splice(r.indexOf(A), 1),
        A.children.forEach(a),
        A.alias.forEach(a))
    } else {
      const A = r.indexOf(d)
      A > -1 &&
        (r.splice(A, 1),
        d.record.name && n.delete(d.record.name),
        d.children.forEach(a),
        d.alias.forEach(a))
    }
  }
  function l() {
    return r
  }
  function s(d) {
    let A = 0
    for (
      ;
      A < r.length &&
      m7(d, r[A]) >= 0 &&
      (d.record.path !== r[A].record.path || !l5(d, r[A]));

    )
      A++
    r.splice(A, 0, d), d.record.name && !ji(d) && n.set(d.record.name, d)
  }
  function c(d, A) {
    let B,
      p = {},
      f,
      F
    if ('name' in d && d.name) {
      if (((B = n.get(d.name)), !B)) throw sn(1, { location: d })
      ;(F = B.record.name),
        (p = he(
          $i(
            A.params,
            B.keys.filter(b => !b.optional).map(b => b.name)
          ),
          d.params &&
            $i(
              d.params,
              B.keys.map(b => b.name)
            )
        )),
        (f = B.stringify(p))
    } else if ('path' in d)
      (f = d.path),
        (B = r.find(b => b.re.test(f))),
        B && ((p = B.parse(f)), (F = B.record.name))
    else {
      if (((B = A.name ? n.get(A.name) : r.find(b => b.re.test(A.path))), !B))
        throw sn(1, { location: d, currentLocation: A })
      ;(F = B.record.name),
        (p = he({}, A.params, d.params)),
        (f = B.stringify(p))
    }
    const S = []
    let D = B
    for (; D; ) S.unshift(D.record), (D = D.parent)
    return { name: F, path: f, params: p, matched: S, meta: C7(S) }
  }
  return (
    e.forEach(d => o(d)),
    {
      addRoute: o,
      resolve: c,
      removeRoute: a,
      getRoutes: l,
      getRecordMatcher: E
    }
  )
}
function $i(e, t) {
  const r = {}
  for (const n of t) n in e && (r[n] = e[n])
  return r
}
function b7(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: y7(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component }
  }
}
function y7(e) {
  const t = {},
    r = e.props || !1
  if ('component' in e) t.default = r
  else for (const n in e.components) t[n] = typeof r == 'object' ? r[n] : r
  return t
}
function ji(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function C7(e) {
  return e.reduce((t, r) => he(t, r.meta), {})
}
function Ni(e, t) {
  const r = {}
  for (const n in e) r[n] = n in t ? t[n] : e[n]
  return r
}
function l5(e, t) {
  return t.children.some(r => r === e || l5(e, r))
}
const s5 = /#/g,
  S7 = /&/g,
  T7 = /\//g,
  R7 = /=/g,
  w7 = /\?/g,
  c5 = /\+/g,
  I7 = /%5B/g,
  L7 = /%5D/g,
  u5 = /%5E/g,
  P7 = /%60/g,
  d5 = /%7B/g,
  O7 = /%7C/g,
  A5 = /%7D/g,
  V7 = /%20/g
function u8(e) {
  return encodeURI('' + e)
    .replace(O7, '|')
    .replace(I7, '[')
    .replace(L7, ']')
}
function x7(e) {
  return u8(e).replace(d5, '{').replace(A5, '}').replace(u5, '^')
}
function Ba(e) {
  return u8(e)
    .replace(c5, '%2B')
    .replace(V7, '+')
    .replace(s5, '%23')
    .replace(S7, '%26')
    .replace(P7, '`')
    .replace(d5, '{')
    .replace(A5, '}')
    .replace(u5, '^')
}
function k7(e) {
  return Ba(e).replace(R7, '%3D')
}
function M7(e) {
  return u8(e).replace(s5, '%23').replace(w7, '%3F')
}
function $7(e) {
  return e == null ? '' : M7(e).replace(T7, '%2F')
}
function UE(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function j7(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const n = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let E = 0; E < n.length; ++E) {
    const o = n[E].replace(c5, ' '),
      a = o.indexOf('='),
      l = UE(a < 0 ? o : o.slice(0, a)),
      s = a < 0 ? null : UE(o.slice(a + 1))
    if (l in t) {
      let c = t[l]
      bt(c) || (c = t[l] = [c]), c.push(s)
    } else t[l] = s
  }
  return t
}
function Hi(e) {
  let t = ''
  for (let r in e) {
    const n = e[r]
    if (((r = k7(r)), n == null)) {
      n !== void 0 && (t += (t.length ? '&' : '') + r)
      continue
    }
    ;(bt(n) ? n.map(o => o && Ba(o)) : [n && Ba(n)]).forEach(o => {
      o !== void 0 &&
        ((t += (t.length ? '&' : '') + r), o != null && (t += '=' + o))
    })
  }
  return t
}
function N7(e) {
  const t = {}
  for (const r in e) {
    const n = e[r]
    n !== void 0 &&
      (t[r] = bt(n)
        ? n.map(E => (E == null ? null : '' + E))
        : n == null
        ? n
        : '' + n)
  }
  return t
}
const H7 = Symbol(''),
  Ji = Symbol(''),
  Ao = Symbol(''),
  d8 = Symbol(''),
  va = Symbol('')
function yn() {
  let e = []
  function t(n) {
    return (
      e.push(n),
      () => {
        const E = e.indexOf(n)
        E > -1 && e.splice(E, 1)
      }
    )
  }
  function r() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: r }
}
function ir(e, t, r, n, E) {
  const o = n && (n.enterCallbacks[E] = n.enterCallbacks[E] || [])
  return () =>
    new Promise((a, l) => {
      const s = A => {
          A === !1
            ? l(sn(4, { from: r, to: t }))
            : A instanceof Error
            ? l(A)
            : A7(A)
            ? l(sn(2, { from: t, to: A }))
            : (o &&
                n.enterCallbacks[E] === o &&
                typeof A == 'function' &&
                o.push(A),
              a())
        },
        c = e.call(n && n.instances[E], t, r, s)
      let d = Promise.resolve(c)
      e.length < 3 && (d = d.then(s)), d.catch(A => l(A))
    })
}
function Lo(e, t, r, n) {
  const E = []
  for (const o of e)
    for (const a in o.components) {
      let l = o.components[a]
      if (!(t !== 'beforeRouteEnter' && !o.instances[a]))
        if (J7(l)) {
          const c = (l.__vccOpts || l)[t]
          c && E.push(ir(c, r, n, o, a))
        } else {
          let s = l()
          E.push(() =>
            s.then(c => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${a}" at "${o.path}"`)
                )
              const d = G1(c) ? c.default : c
              o.components[a] = d
              const B = (d.__vccOpts || d)[t]
              return B && ir(B, r, n, o, a)()
            })
          )
        }
    }
  return E
}
function J7(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function pa(e) {
  const t = me(Ao),
    r = me(d8),
    n = y(() => t.resolve(at(e.to))),
    E = y(() => {
      const { matched: s } = n.value,
        { length: c } = s,
        d = s[c - 1],
        A = r.matched
      if (!d || !A.length) return -1
      const B = A.findIndex(ln.bind(null, d))
      if (B > -1) return B
      const p = zi(s[c - 2])
      return c > 1 && zi(d) === p && A[A.length - 1].path !== p
        ? A.findIndex(ln.bind(null, s[c - 2]))
        : B
    }),
    o = y(() => E.value > -1 && W7(r.params, n.value.params)),
    a = y(
      () =>
        E.value > -1 &&
        E.value === r.matched.length - 1 &&
        E5(r.params, n.value.params)
    )
  function l(s = {}) {
    return q7(s)
      ? t[at(e.replace) ? 'replace' : 'push'](at(e.to)).catch(On)
      : Promise.resolve()
  }
  return {
    route: n,
    href: y(() => n.value.href),
    isActive: o,
    isExactActive: a,
    navigate: l
  }
}
const z7 = M({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: pa,
    setup(e, { slots: t }) {
      const r = vn(pa(e)),
        { options: n } = me(Ao),
        E = y(() => ({
          [Ui(e.activeClass, n.linkActiveClass, 'router-link-active')]:
            r.isActive,
          [Ui(
            e.exactActiveClass,
            n.linkExactActiveClass,
            'router-link-exact-active'
          )]: r.isExactActive
        }))
      return () => {
        const o = t.default && t.default(r)
        return e.custom
          ? o
          : u(
              'a',
              {
                'aria-current': r.isExactActive ? e.ariaCurrentValue : null,
                href: r.href,
                onClick: r.navigate,
                class: E.value
              },
              o
            )
      }
    }
  }),
  U7 = z7
function q7(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function W7(e, t) {
  for (const r in t) {
    const n = t[r],
      E = e[r]
    if (typeof n == 'string') {
      if (n !== E) return !1
    } else if (!bt(E) || E.length !== n.length || n.some((o, a) => o !== E[a]))
      return !1
  }
  return !0
}
function zi(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Ui = (e, t, r) => e ?? t ?? r,
  K7 = M({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: r }) {
      const n = me(va),
        E = y(() => e.route || n.value),
        o = me(Ji, 0),
        a = y(() => {
          let c = at(o)
          const { matched: d } = E.value
          let A
          for (; (A = d[c]) && !A.components; ) c++
          return c
        }),
        l = y(() => E.value.matched[a.value])
      Dt(
        Ji,
        y(() => a.value + 1)
      ),
        Dt(H7, l),
        Dt(va, E)
      const s = U()
      return (
        ae(
          () => [s.value, l.value, e.name],
          ([c, d, A], [B, p, f]) => {
            d &&
              ((d.instances[A] = c),
              p &&
                p !== d &&
                c &&
                c === B &&
                (d.leaveGuards.size || (d.leaveGuards = p.leaveGuards),
                d.updateGuards.size || (d.updateGuards = p.updateGuards))),
              c &&
                d &&
                (!p || !ln(d, p) || !B) &&
                (d.enterCallbacks[A] || []).forEach(F => F(c))
          },
          { flush: 'post' }
        ),
        () => {
          const c = E.value,
            d = e.name,
            A = l.value,
            B = A && A.components[d]
          if (!B) return qi(r.default, { Component: B, route: c })
          const p = A.props[d],
            f = p
              ? p === !0
                ? c.params
                : typeof p == 'function'
                ? p(c)
                : p
              : null,
            S = u(
              B,
              he({}, f, t, {
                onVnodeUnmounted: D => {
                  D.component.isUnmounted && (A.instances[d] = null)
                },
                ref: s
              })
            )
          return qi(r.default, { Component: S, route: c }) || S
        }
      )
    }
  })
function qi(e, t) {
  if (!e) return null
  const r = e(t)
  return r.length === 1 ? r[0] : r
}
const B5 = K7
function G7(e) {
  const t = D7(e.routes, e),
    r = e.parseQuery || j7,
    n = e.stringifyQuery || Hi,
    E = e.history,
    o = yn(),
    a = yn(),
    l = yn(),
    s = je(jt)
  let c = jt
  zr &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const d = wo.bind(null, L => '' + L),
    A = wo.bind(null, $7),
    B = wo.bind(null, UE)
  function p(L, W) {
    let H, Q
    return (
      a5(L) ? ((H = t.getRecordMatcher(L)), (Q = W)) : (Q = L), t.addRoute(Q, H)
    )
  }
  function f(L) {
    const W = t.getRecordMatcher(L)
    W && t.removeRoute(W)
  }
  function F() {
    return t.getRoutes().map(L => L.record)
  }
  function S(L) {
    return !!t.getRecordMatcher(L)
  }
  function D(L, W) {
    if (((W = he({}, W || s.value)), typeof L == 'string')) {
      const C = Io(r, L, W.path),
        I = t.resolve({ path: C.path }, W),
        O = E.createHref(C.fullPath)
      return he(C, I, {
        params: B(I.params),
        hash: UE(C.hash),
        redirectedFrom: void 0,
        href: O
      })
    }
    let H
    if ('path' in L) H = he({}, L, { path: Io(r, L.path, W.path).path })
    else {
      const C = he({}, L.params)
      for (const I in C) C[I] == null && delete C[I]
      ;(H = he({}, L, { params: A(C) })), (W.params = A(W.params))
    }
    const Q = t.resolve(H, W),
      Be = L.hash || ''
    Q.params = d(B(Q.params))
    const m = Q1(n, he({}, L, { hash: x7(Be), path: Q.path })),
      h = E.createHref(m)
    return he(
      { fullPath: m, hash: Be, query: n === Hi ? N7(L.query) : L.query || {} },
      Q,
      { redirectedFrom: void 0, href: h }
    )
  }
  function b(L) {
    return typeof L == 'string' ? Io(r, L, s.value.path) : he({}, L)
  }
  function g(L, W) {
    if (c !== L) return sn(8, { from: W, to: L })
  }
  function _(L) {
    return P(L)
  }
  function w(L) {
    return _(he(b(L), { replace: !0 }))
  }
  function R(L) {
    const W = L.matched[L.matched.length - 1]
    if (W && W.redirect) {
      const { redirect: H } = W
      let Q = typeof H == 'function' ? H(L) : H
      return (
        typeof Q == 'string' &&
          ((Q = Q.includes('?') || Q.includes('#') ? (Q = b(Q)) : { path: Q }),
          (Q.params = {})),
        he(
          { query: L.query, hash: L.hash, params: 'path' in Q ? {} : L.params },
          Q
        )
      )
    }
  }
  function P(L, W) {
    const H = (c = D(L)),
      Q = s.value,
      Be = L.state,
      m = L.force,
      h = L.replace === !0,
      C = R(H)
    if (C)
      return P(
        he(b(C), {
          state: typeof C == 'object' ? he({}, Be, C.state) : Be,
          force: m,
          replace: h
        }),
        W || H
      )
    const I = H
    I.redirectedFrom = W
    let O
    return (
      !m && Z1(n, Q, H) && ((O = sn(16, { to: I, from: Q })), dt(Q, Q, !0, !1)),
      (O ? Promise.resolve(O) : $(I, Q))
        .catch(V => (kt(V) ? (kt(V, 2) ? V : Tt(V)) : Y(V, I, Q)))
        .then(V => {
          if (V) {
            if (kt(V, 2))
              return P(
                he({ replace: h }, b(V.to), {
                  state: typeof V.to == 'object' ? he({}, Be, V.to.state) : Be,
                  force: m
                }),
                W || I
              )
          } else V = N(I, Q, !0, h, Be)
          return K(I, Q, V), V
        })
    )
  }
  function T(L, W) {
    const H = g(L, W)
    return H ? Promise.reject(H) : Promise.resolve()
  }
  function x(L) {
    const W = xt.values().next().value
    return W && typeof W.runWithContext == 'function'
      ? W.runWithContext(L)
      : L()
  }
  function $(L, W) {
    let H
    const [Q, Be, m] = X7(L, W)
    H = Lo(Q.reverse(), 'beforeRouteLeave', L, W)
    for (const C of Q)
      C.leaveGuards.forEach(I => {
        H.push(ir(I, L, W))
      })
    const h = T.bind(null, L, W)
    return (
      H.push(h),
      Pe(H)
        .then(() => {
          H = []
          for (const C of o.list()) H.push(ir(C, L, W))
          return H.push(h), Pe(H)
        })
        .then(() => {
          H = Lo(Be, 'beforeRouteUpdate', L, W)
          for (const C of Be)
            C.updateGuards.forEach(I => {
              H.push(ir(I, L, W))
            })
          return H.push(h), Pe(H)
        })
        .then(() => {
          H = []
          for (const C of m)
            if (C.beforeEnter)
              if (bt(C.beforeEnter))
                for (const I of C.beforeEnter) H.push(ir(I, L, W))
              else H.push(ir(C.beforeEnter, L, W))
          return H.push(h), Pe(H)
        })
        .then(
          () => (
            L.matched.forEach(C => (C.enterCallbacks = {})),
            (H = Lo(m, 'beforeRouteEnter', L, W)),
            H.push(h),
            Pe(H)
          )
        )
        .then(() => {
          H = []
          for (const C of a.list()) H.push(ir(C, L, W))
          return H.push(h), Pe(H)
        })
        .catch(C => (kt(C, 8) ? C : Promise.reject(C)))
    )
  }
  function K(L, W, H) {
    l.list().forEach(Q => x(() => Q(L, W, H)))
  }
  function N(L, W, H, Q, Be) {
    const m = g(L, W)
    if (m) return m
    const h = W === jt,
      C = zr ? history.state : {}
    H &&
      (Q || h
        ? E.replace(L.fullPath, he({ scroll: h && C && C.scroll }, Be))
        : E.push(L.fullPath, Be)),
      (s.value = L),
      dt(L, W, H, h),
      Tt()
  }
  let Z
  function De() {
    Z ||
      (Z = E.listen((L, W, H) => {
        if (!Rt.listening) return
        const Q = D(L),
          Be = R(Q)
        if (Be) {
          P(he(Be, { replace: !0 }), Q).catch(On)
          return
        }
        c = Q
        const m = s.value
        zr && i7(Oi(m.fullPath, H.delta), uo()),
          $(Q, m)
            .catch(h =>
              kt(h, 12)
                ? h
                : kt(h, 2)
                ? (P(h.to, Q)
                    .then(C => {
                      kt(C, 20) && !H.delta && H.type === Gn.pop && E.go(-1, !1)
                    })
                    .catch(On),
                  Promise.reject())
                : (H.delta && E.go(-H.delta, !1), Y(h, Q, m))
            )
            .then(h => {
              ;(h = h || N(Q, m, !1)),
                h &&
                  (H.delta && !kt(h, 8)
                    ? E.go(-H.delta, !1)
                    : H.type === Gn.pop && kt(h, 20) && E.go(-1, !1)),
                K(Q, m, h)
            })
            .catch(On)
      }))
  }
  let fe = yn(),
    G = yn(),
    re
  function Y(L, W, H) {
    Tt(L)
    const Q = G.list()
    return (
      Q.length ? Q.forEach(Be => Be(L, W, H)) : console.error(L),
      Promise.reject(L)
    )
  }
  function Le() {
    return re && s.value !== jt
      ? Promise.resolve()
      : new Promise((L, W) => {
          fe.add([L, W])
        })
  }
  function Tt(L) {
    return (
      re ||
        ((re = !L),
        De(),
        fe.list().forEach(([W, H]) => (L ? H(L) : W())),
        fe.reset()),
      L
    )
  }
  function dt(L, W, H, Q) {
    const { scrollBehavior: Be } = e
    if (!zr || !Be) return Promise.resolve()
    const m =
      (!H && l7(Oi(L.fullPath, 0))) ||
      ((Q || !H) && history.state && history.state.scroll) ||
      null
    return Gt()
      .then(() => Be(L, W, m))
      .then(h => h && a7(h))
      .catch(h => Y(h, L, W))
  }
  const ke = L => E.go(L)
  let rt
  const xt = new Set(),
    Rt = {
      currentRoute: s,
      listening: !0,
      addRoute: p,
      removeRoute: f,
      hasRoute: S,
      getRoutes: F,
      resolve: D,
      options: e,
      push: _,
      replace: w,
      go: ke,
      back: () => ke(-1),
      forward: () => ke(1),
      beforeEach: o.add,
      beforeResolve: a.add,
      afterEach: l.add,
      onError: G.add,
      isReady: Le,
      install(L) {
        const W = this
        L.component('RouterLink', U7),
          L.component('RouterView', B5),
          (L.config.globalProperties.$router = W),
          Object.defineProperty(L.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => at(s)
          }),
          zr &&
            !rt &&
            s.value === jt &&
            ((rt = !0), _(E.location).catch(Be => {}))
        const H = {}
        for (const Be in jt)
          Object.defineProperty(H, Be, {
            get: () => s.value[Be],
            enumerable: !0
          })
        L.provide(Ao, W), L.provide(d8, Ha(H)), L.provide(va, s)
        const Q = L.unmount
        xt.add(L),
          (L.unmount = function () {
            xt.delete(L),
              xt.size < 1 &&
                ((c = jt),
                Z && Z(),
                (Z = null),
                (s.value = jt),
                (rt = !1),
                (re = !1)),
              Q()
          })
      }
    }
  function Pe(L) {
    return L.reduce((W, H) => W.then(() => x(H)), Promise.resolve())
  }
  return Rt
}
function X7(e, t) {
  const r = [],
    n = [],
    E = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let a = 0; a < o; a++) {
    const l = t.matched[a]
    l && (e.matched.find(c => ln(c, l)) ? n.push(l) : r.push(l))
    const s = e.matched[a]
    s && (t.matched.find(c => ln(c, s)) || E.push(s))
  }
  return [r, n, E]
}
function qe() {
  return me(Ao)
}
function St() {
  return me(d8)
}
var Ke = Uint8Array,
  Wr = Uint16Array,
  Y7 = Int32Array,
  v5 = new Ke([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0
  ]),
  p5 = new Ke([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0
  ]),
  Q7 = new Ke([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15
  ]),
  f5 = function (e, t) {
    for (var r = new Wr(31), n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1]
    for (var E = new Y7(r[30]), n = 1; n < 30; ++n)
      for (var o = r[n]; o < r[n + 1]; ++o) E[o] = ((o - r[n]) << 5) | n
    return { b: r, r: E }
  },
  m5 = f5(v5, 2),
  h5 = m5.b,
  Z7 = m5.r
;(h5[28] = 258), (Z7[258] = 28)
var ed = f5(p5, 0),
  td = ed.b,
  fa = new Wr(32768)
for (var Te = 0; Te < 32768; ++Te) {
  var tr = ((Te & 43690) >> 1) | ((Te & 21845) << 1)
  ;(tr = ((tr & 52428) >> 2) | ((tr & 13107) << 2)),
    (tr = ((tr & 61680) >> 4) | ((tr & 3855) << 4)),
    (fa[Te] = (((tr & 65280) >> 8) | ((tr & 255) << 8)) >> 1)
}
var xn = function (e, t, r) {
    for (var n = e.length, E = 0, o = new Wr(t); E < n; ++E)
      e[E] && ++o[e[E] - 1]
    var a = new Wr(t)
    for (E = 1; E < t; ++E) a[E] = (a[E - 1] + o[E - 1]) << 1
    var l
    if (r) {
      l = new Wr(1 << t)
      var s = 15 - t
      for (E = 0; E < n; ++E)
        if (e[E])
          for (
            var c = (E << 4) | e[E],
              d = t - e[E],
              A = a[e[E] - 1]++ << d,
              B = A | ((1 << d) - 1);
            A <= B;
            ++A
          )
            l[fa[A] >> s] = c
    } else
      for (l = new Wr(n), E = 0; E < n; ++E)
        e[E] && (l[E] = fa[a[e[E] - 1]++] >> (15 - e[E]))
    return l
  },
  aE = new Ke(288)
for (var Te = 0; Te < 144; ++Te) aE[Te] = 8
for (var Te = 144; Te < 256; ++Te) aE[Te] = 9
for (var Te = 256; Te < 280; ++Te) aE[Te] = 7
for (var Te = 280; Te < 288; ++Te) aE[Te] = 8
var _5 = new Ke(32)
for (var Te = 0; Te < 32; ++Te) _5[Te] = 5
var rd = xn(aE, 9, 1),
  nd = xn(_5, 5, 1),
  Po = function (e) {
    for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r])
    return t
  },
  _t = function (e, t, r) {
    var n = (t / 8) | 0
    return ((e[n] | (e[n + 1] << 8)) >> (t & 7)) & r
  },
  Oo = function (e, t) {
    var r = (t / 8) | 0
    return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >> (t & 7)
  },
  Ed = function (e) {
    return ((e + 7) / 8) | 0
  },
  A8 = function (e, t, r) {
    return (
      (t == null || t < 0) && (t = 0),
      (r == null || r > e.length) && (r = e.length),
      new Ke(e.subarray(t, r))
    )
  },
  od = [
    'unexpected EOF',
    'invalid block type',
    'invalid length/literal',
    'invalid distance',
    'stream finished',
    'no stream handler',
    ,
    'no callback',
    'invalid UTF-8 data',
    'extra field too long',
    'date not in range 1980-2099',
    'filename too long',
    'stream finishing',
    'invalid zip data'
  ],
  Bt = function (e, t, r) {
    var n = new Error(t || od[e])
    if (
      ((n.code = e),
      Error.captureStackTrace && Error.captureStackTrace(n, Bt),
      !r)
    )
      throw n
    return n
  },
  ad = function (e, t, r, n) {
    var E = e.length,
      o = n ? n.length : 0
    if (!E || (t.f && !t.l)) return r || new Ke(0)
    var a = !r,
      l = a || t.i != 2,
      s = t.i
    a && (r = new Ke(E * 3))
    var c = function (Be) {
        var m = r.length
        if (Be > m) {
          var h = new Ke(Math.max(m * 2, Be))
          h.set(r), (r = h)
        }
      },
      d = t.f || 0,
      A = t.p || 0,
      B = t.b || 0,
      p = t.l,
      f = t.d,
      F = t.m,
      S = t.n,
      D = E * 8
    do {
      if (!p) {
        d = _t(e, A, 1)
        var b = _t(e, A + 1, 3)
        if (((A += 3), b))
          if (b == 1) (p = rd), (f = nd), (F = 9), (S = 5)
          else if (b == 2) {
            var R = _t(e, A, 31) + 257,
              P = _t(e, A + 10, 15) + 4,
              T = R + _t(e, A + 5, 31) + 1
            A += 14
            for (var x = new Ke(T), $ = new Ke(19), K = 0; K < P; ++K)
              $[Q7[K]] = _t(e, A + K * 3, 7)
            A += P * 3
            for (
              var N = Po($), Z = (1 << N) - 1, De = xn($, N, 1), K = 0;
              K < T;

            ) {
              var fe = De[_t(e, A, Z)]
              A += fe & 15
              var g = fe >> 4
              if (g < 16) x[K++] = g
              else {
                var G = 0,
                  re = 0
                for (
                  g == 16
                    ? ((re = 3 + _t(e, A, 3)), (A += 2), (G = x[K - 1]))
                    : g == 17
                    ? ((re = 3 + _t(e, A, 7)), (A += 3))
                    : g == 18 && ((re = 11 + _t(e, A, 127)), (A += 7));
                  re--;

                )
                  x[K++] = G
              }
            }
            var Y = x.subarray(0, R),
              Le = x.subarray(R)
            ;(F = Po(Y)), (S = Po(Le)), (p = xn(Y, F, 1)), (f = xn(Le, S, 1))
          } else Bt(1)
        else {
          var g = Ed(A) + 4,
            _ = e[g - 4] | (e[g - 3] << 8),
            w = g + _
          if (w > E) {
            s && Bt(0)
            break
          }
          l && c(B + _),
            r.set(e.subarray(g, w), B),
            (t.b = B += _),
            (t.p = A = w * 8),
            (t.f = d)
          continue
        }
        if (A > D) {
          s && Bt(0)
          break
        }
      }
      l && c(B + 131072)
      for (var Tt = (1 << F) - 1, dt = (1 << S) - 1, ke = A; ; ke = A) {
        var G = p[Oo(e, A) & Tt],
          rt = G >> 4
        if (((A += G & 15), A > D)) {
          s && Bt(0)
          break
        }
        if ((G || Bt(2), rt < 256)) r[B++] = rt
        else if (rt == 256) {
          ;(ke = A), (p = null)
          break
        } else {
          var xt = rt - 254
          if (rt > 264) {
            var K = rt - 257,
              Rt = v5[K]
            ;(xt = _t(e, A, (1 << Rt) - 1) + h5[K]), (A += Rt)
          }
          var Pe = f[Oo(e, A) & dt],
            L = Pe >> 4
          Pe || Bt(3), (A += Pe & 15)
          var Le = td[L]
          if (L > 3) {
            var Rt = p5[L]
            ;(Le += Oo(e, A) & ((1 << Rt) - 1)), (A += Rt)
          }
          if (A > D) {
            s && Bt(0)
            break
          }
          l && c(B + 131072)
          var W = B + xt
          if (B < Le) {
            var H = o - Le,
              Q = Math.min(Le, W)
            for (H + B < 0 && Bt(3); B < Q; ++B) r[B] = n[H + B]
          }
          for (; B < W; ++B) r[B] = r[B - Le]
        }
      }
      ;(t.l = p),
        (t.p = ke),
        (t.b = B),
        (t.f = d),
        p && ((d = 1), (t.m = F), (t.d = f), (t.n = S))
    } while (!d)
    return B != r.length && a ? A8(r, 0, B) : r.subarray(0, B)
  },
  id = new Ke(0),
  ld = function (e, t) {
    return (
      ((e[0] & 15) != 8 || e[0] >> 4 > 7 || ((e[0] << 8) | e[1]) % 31) &&
        Bt(6, 'invalid zlib data'),
      ((e[1] >> 5) & 1) == +!t &&
        Bt(
          6,
          'invalid zlib data: ' +
            (e[1] & 32 ? 'need' : 'unexpected') +
            ' dictionary'
        ),
      ((e[1] >> 3) & 4) + 2
    )
  }
function sd(e, t) {
  return ad(
    e.subarray(ld(e, t && t.dictionary), -4),
    { i: 2 },
    t && t.out,
    t && t.dictionary
  )
}
var Wi = typeof TextEncoder < 'u' && new TextEncoder(),
  ma = typeof TextDecoder < 'u' && new TextDecoder(),
  cd = 0
try {
  ma.decode(id, { stream: !0 }), (cd = 1)
} catch {}
var ud = function (e) {
  for (var t = '', r = 0; ; ) {
    var n = e[r++],
      E = (n > 127) + (n > 223) + (n > 239)
    if (r + E > e.length) return { s: t, r: A8(e, r - 1) }
    E
      ? E == 3
        ? ((n =
            (((n & 15) << 18) |
              ((e[r++] & 63) << 12) |
              ((e[r++] & 63) << 6) |
              (e[r++] & 63)) -
            65536),
          (t += String.fromCharCode(55296 | (n >> 10), 56320 | (n & 1023))))
        : E & 1
        ? (t += String.fromCharCode(((n & 31) << 6) | (e[r++] & 63)))
        : (t += String.fromCharCode(
            ((n & 15) << 12) | ((e[r++] & 63) << 6) | (e[r++] & 63)
          ))
      : (t += String.fromCharCode(n))
  }
}
function dd(e, t) {
  if (t) {
    for (var r = new Ke(e.length), n = 0; n < e.length; ++n)
      r[n] = e.charCodeAt(n)
    return r
  }
  if (Wi) return Wi.encode(e)
  for (
    var E = e.length,
      o = new Ke(e.length + (e.length >> 1)),
      a = 0,
      l = function (d) {
        o[a++] = d
      },
      n = 0;
    n < E;
    ++n
  ) {
    if (a + 5 > o.length) {
      var s = new Ke(a + 8 + ((E - n) << 1))
      s.set(o), (o = s)
    }
    var c = e.charCodeAt(n)
    c < 128 || t
      ? l(c)
      : c < 2048
      ? (l(192 | (c >> 6)), l(128 | (c & 63)))
      : c > 55295 && c < 57344
      ? ((c = (65536 + (c & 1047552)) | (e.charCodeAt(++n) & 1023)),
        l(240 | (c >> 18)),
        l(128 | ((c >> 12) & 63)),
        l(128 | ((c >> 6) & 63)),
        l(128 | (c & 63)))
      : (l(224 | (c >> 12)), l(128 | ((c >> 6) & 63)), l(128 | (c & 63)))
  }
  return A8(o, 0, a)
}
function Ad(e, t) {
  if (t) {
    for (var r = '', n = 0; n < e.length; n += 16384)
      r += String.fromCharCode.apply(null, e.subarray(n, n + 16384))
    return r
  } else {
    if (ma) return ma.decode(e)
    var E = ud(e),
      o = E.s,
      r = E.r
    return r.length && Bt(8), o
  }
}
const ce = ({ name: e = '', color: t = 'currentColor' }, { slots: r }) => {
  var n
  return u(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      class: ['icon', `${e}-icon`],
      viewBox: '0 0 1024 1024',
      fill: t,
      'aria-label': `${e} icon`
    },
    (n = r.default) == null ? void 0 : n.call(r)
  )
}
ce.displayName = 'IconBase'
const Bo = ({
  size: e = 48,
  stroke: t = 4,
  wrapper: r = !0,
  height: n = 2 * e
}) => {
  const E = u(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      preserveAspectRatio: 'xMidYMid',
      viewBox: '25 25 50 50'
    },
    [
      u('animateTransform', {
        attributeName: 'transform',
        type: 'rotate',
        dur: '2s',
        keyTimes: '0;1',
        repeatCount: 'indefinite',
        values: '0;360'
      }),
      u(
        'circle',
        {
          cx: '50',
          cy: '50',
          r: '20',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': t,
          'stroke-linecap': 'round'
        },
        [
          u('animate', {
            attributeName: 'stroke-dasharray',
            dur: '1.5s',
            keyTimes: '0;0.5;1',
            repeatCount: 'indefinite',
            values: '1,200;90,200;1,200'
          }),
          u('animate', {
            attributeName: 'stroke-dashoffset',
            dur: '1.5s',
            keyTimes: '0;0.5;1',
            repeatCount: 'indefinite',
            values: '0;-35px;-125px'
          })
        ]
      )
    ]
  )
  return r
    ? u(
        'div',
        {
          class: 'loading-icon-wrapper',
          style: `display:flex;align-items:center;justify-content:center;height:${n}px`
        },
        E
      )
    : E
}
Bo.displayName = 'LoadingIcon'
const g5 = (e, { slots: t }) => {
    var r
    return (r = t.default) == null ? void 0 : r.call(t)
  },
  Bd = e => /\b(?:Android|iPhone)/i.test(e),
  vd = e => /version\/([\w.]+) .*(mobile ?safari|safari)/i.test(e),
  pd = e =>
    [
      /\((ipad);[-\w),; ]+apple/i,
      /applecoremedia\/[\w.]+ \((ipad)/i,
      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
    ].some(t => t.test(e)),
  B8 = (e = '') => {
    if (e) {
      if (typeof e == 'number') return new Date(e)
      const t = Date.parse(e.toString())
      if (!Number.isNaN(t)) return new Date(t)
    }
    return null
  },
  vo = (e, t) => {
    let r = 1
    for (let n = 0; n < e.length; n++)
      (r += e.charCodeAt(n)), (r += r << 10), (r ^= r >> 6)
    return (r += r << 3), (r ^= r >> 11), r % t
  },
  F5 = Array.isArray,
  fd = e => typeof e == 'function',
  md = e => typeof e == 'string'
var hd = e => e.startsWith('ftp://'),
  v8 = e => /^(https?:)?\/\//.test(e),
  _d = /.md((\?|#).*)?$/,
  gd = (e, t = '/') =>
    !!(
      v8(e) ||
      hd(e) ||
      (e.startsWith('/') && !e.startsWith(t) && !_d.test(e))
    ),
  D5 = e => Object.prototype.toString.call(e) === '[object Object]'
function Fd() {
  const e = U(!1)
  return (
    ct() &&
      se(() => {
        e.value = !0
      }),
    e
  )
}
function Dd(e) {
  return Fd(), y(() => !!e())
}
const Wt = e => typeof e == 'string',
  cn = (e, t) => Wt(e) && e.startsWith(t),
  Hr = (e, t) => Wt(e) && e.endsWith(t),
  mn = Object.entries,
  bd = Object.fromEntries,
  st = Object.keys,
  b5 = e => (
    e.endsWith('.md') && (e = `${e.slice(0, -3)}.html`),
    !e.endsWith('/') && !e.endsWith('.html') && (e = `${e}.html`),
    (e = e.replace(/(^|\/)(?:README|index).html$/i, '$1')),
    e
  ),
  Ki = e => D5(e) && Wt(e.name),
  Xn = (e, t = !1) =>
    e
      ? F5(e)
        ? e
            .map(r => (Wt(r) ? { name: r } : Ki(r) ? r : null))
            .filter(r => r !== null)
        : Wt(e)
        ? [{ name: e }]
        : Ki(e)
        ? [e]
        : (console.error(
            `Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${
              t ? '' : '| false'
            } | undefined\`, but got`,
            e
          ),
          [])
      : [],
  y5 = (e, t) => {
    if (e) {
      if (F5(e) && e.every(Wt)) return e
      if (Wt(e)) return [e]
      console.error(
        `Expect ${
          t || 'value'
        } to be \`string[] | string | undefined\`, but got`,
        e
      )
    }
    return []
  },
  C5 = e => y5(e, 'category'),
  S5 = e => y5(e, 'tag'),
  po = e => cn(e, '/')
let yd = class {
  constructor() {
    _o(this, 'containerElement')
    _o(this, 'messageElements', {})
    const t = 'message-container',
      r = document.getElementById(t)
    r
      ? (this.containerElement = r)
      : ((this.containerElement = document.createElement('div')),
        (this.containerElement.id = t),
        document.body.appendChild(this.containerElement))
  }
  pop(t, r = 2e3) {
    const n = document.createElement('div'),
      E = Date.now()
    return (
      (n.className = 'message move-in'),
      (n.innerHTML = t),
      this.containerElement.appendChild(n),
      (this.messageElements[E] = n),
      r > 0 &&
        setTimeout(() => {
          this.close(E)
        }, r),
      E
    )
  }
  close(t) {
    if (t) {
      const r = this.messageElements[t]
      r.classList.remove('move-in'),
        r.classList.add('move-out'),
        r.addEventListener('animationend', () => {
          r.remove(), delete this.messageElements[t]
        })
    } else st(this.messageElements).forEach(r => this.close(Number(r)))
  }
  destroy() {
    document.body.removeChild(this.containerElement)
  }
}
const T5 = /#.*$/u,
  Cd = e => {
    const t = T5.exec(e)
    return t ? t[0] : ''
  },
  Gi = e =>
    decodeURI(e)
      .replace(T5, '')
      .replace(/(index)?\.(md|html)$/, ''),
  p8 = (e, t) => {
    if (t === void 0) return !1
    const r = Gi(e.path),
      n = Gi(t),
      E = Cd(t)
    return E ? E === e.hash && (!n || r === n) : r === n
  },
  ha = e => {
    const t = atob(e)
    return Ad(sd(dd(t, !0)))
  },
  Sd = e => (v8(e) ? e : `https://github.com/${e}`),
  R5 = e =>
    !v8(e) || /github\.com/.test(e)
      ? 'GitHub'
      : /bitbucket\.org/.test(e)
      ? 'Bitbucket'
      : /gitlab\.com/.test(e)
      ? 'GitLab'
      : /gitee\.com/.test(e)
      ? 'Gitee'
      : null,
  un = (e, ...t) => {
    const r = e.resolve(...t),
      n = r.matched[r.matched.length - 1]
    if (!(n != null && n.redirect)) return r
    const { redirect: E } = n,
      o = fd(E) ? E(r) : E,
      a = md(o) ? { path: o } : o
    return un(e, { hash: r.hash, query: r.query, params: r.params, ...a })
  },
  Td = e => {
    if (
      !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
      !e.defaultPrevented &&
      !(e.button !== void 0 && e.button !== 0)
    ) {
      if (e.currentTarget) {
        const t = e.currentTarget.getAttribute('target')
        if (t != null && t.match(/\b_blank\b/i)) return
      }
      return e.preventDefault(), !0
    }
  },
  xe = ({ to: e = '' }, { slots: t }) => {
    var r
    const n = qe(),
      E = (o = {}) => (Td(o) ? n.push(e).catch() : Promise.resolve())
    return u(
      'a',
      { class: 'md-link', href: Se(b5(e)), onClick: E },
      (r = t.default) == null ? void 0 : r.call(t)
    )
  }
xe.displayName = 'VPLink'
const w5 = () =>
  u(ce, { name: 'github' }, () =>
    u('path', {
      d: 'M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z'
    })
  )
w5.displayName = 'GitHubIcon'
const I5 = () =>
  u(ce, { name: 'gitlab' }, () =>
    u('path', {
      d: 'M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z'
    })
  )
I5.displayName = 'GitLabIcon'
const L5 = () =>
  u(ce, { name: 'gitee' }, () =>
    u('path', {
      d: 'M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z'
    })
  )
L5.displayName = 'GiteeIcon'
const P5 = () =>
  u(ce, { name: 'bitbucket' }, () =>
    u('path', {
      d: 'M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z'
    })
  )
P5.displayName = 'BitbucketIcon'
const O5 = () =>
  u(ce, { name: 'source' }, () =>
    u('path', {
      d: 'M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z'
    })
  )
O5.displayName = 'SourceIcon'
const it = (e, t) => {
    const r = t ? t._instance : ct()
    return (
      D5(r == null ? void 0 : r.appContext.components) &&
      (e in r.appContext.components ||
        Ue(e) in r.appContext.components ||
        Bn(Ue(e)) in r.appContext.components)
    )
  },
  Rd = () =>
    Dd(
      () =>
        typeof window < 'u' &&
        window.navigator &&
        'userAgent' in window.navigator
    ),
  wd = () => {
    const e = Rd()
    return y(() => e.value && /\b(?:Android|iPhone)/i.test(navigator.userAgent))
  },
  $r = e => {
    const t = Vt()
    return y(() => e[t.value])
  }
function yt(e) {
  return Ma() ? (Pl(e), !0) : !1
}
function $e(e) {
  return typeof e == 'function' ? e() : at(e)
}
const Pr = typeof window < 'u' && typeof document < 'u',
  Id = Object.prototype.toString,
  Ld = e => Id.call(e) === '[object Object]',
  Or = () => {},
  Xi = Pd()
function Pd() {
  var e
  return (
    Pr &&
    ((e = window == null ? void 0 : window.navigator) == null
      ? void 0
      : e.userAgent) &&
    /iP(ad|hone|od)/.test(window.navigator.userAgent)
  )
}
function f8(e, t) {
  function r(...n) {
    return new Promise((E, o) => {
      Promise.resolve(
        e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })
      )
        .then(E)
        .catch(o)
    })
  }
  return r
}
const V5 = e => e()
function Od(e, t = {}) {
  let r,
    n,
    E = Or
  const o = l => {
    clearTimeout(l), E(), (E = Or)
  }
  return l => {
    const s = $e(e),
      c = $e(t.maxWait)
    return (
      r && o(r),
      s <= 0 || (c !== void 0 && c <= 0)
        ? (n && (o(n), (n = null)), Promise.resolve(l()))
        : new Promise((d, A) => {
            ;(E = t.rejectOnCancel ? A : d),
              c &&
                !n &&
                (n = setTimeout(() => {
                  r && o(r), (n = null), d(l())
                }, c)),
              (r = setTimeout(() => {
                n && o(n), (n = null), d(l())
              }, s))
          })
    )
  }
}
function Vd(e, t = !0, r = !0, n = !1) {
  let E = 0,
    o,
    a = !0,
    l = Or,
    s
  const c = () => {
    o && (clearTimeout(o), (o = void 0), l(), (l = Or))
  }
  return A => {
    const B = $e(e),
      p = Date.now() - E,
      f = () => (s = A())
    return (
      c(),
      B <= 0
        ? ((E = Date.now()), f())
        : (p > B && (r || !a)
            ? ((E = Date.now()), f())
            : t &&
              (s = new Promise((F, S) => {
                ;(l = n ? S : F),
                  (o = setTimeout(() => {
                    ;(E = Date.now()), (a = !0), F(f()), c()
                  }, Math.max(0, B - p)))
              })),
          !r && !o && (o = setTimeout(() => (a = !0), B)),
          (a = !1),
          s)
    )
  }
}
function xd(e = V5) {
  const t = U(!0)
  function r() {
    t.value = !1
  }
  function n() {
    t.value = !0
  }
  const E = (...o) => {
    t.value && e(...o)
  }
  return { isActive: Kt(t), pause: r, resume: n, eventFilter: E }
}
function kd(...e) {
  if (e.length !== 1) return Mr(...e)
  const t = e[0]
  return typeof t == 'function' ? Kt(ql(() => ({ get: t, set: Or }))) : U(t)
}
function Md(e, t = 200, r = {}) {
  return f8(Od(t, r), e)
}
function $d(e, t = 200, r = !1, n = !0, E = !1) {
  return f8(Vd(t, r, n, E), e)
}
function jd(e, t, r = {}) {
  const { eventFilter: n = V5, ...E } = r
  return ae(e, f8(n, t), E)
}
function Nd(e, t, r = {}) {
  const { eventFilter: n, ...E } = r,
    { eventFilter: o, pause: a, resume: l, isActive: s } = xd(n)
  return {
    stop: jd(e, t, { ...E, eventFilter: o }),
    pause: a,
    resume: l,
    isActive: s
  }
}
function m8(e, t = !0) {
  ct() ? se(e) : t ? e() : Gt(e)
}
function Hd(e) {
  ct() && fn(e)
}
function Jd(e, t = 1e3, r = {}) {
  const { immediate: n = !0, immediateCallback: E = !1 } = r
  let o = null
  const a = U(!1)
  function l() {
    o && (clearInterval(o), (o = null))
  }
  function s() {
    ;(a.value = !1), l()
  }
  function c() {
    const d = $e(t)
    d <= 0 || ((a.value = !0), E && e(), l(), (o = setInterval(e, d)))
  }
  if ((n && Pr && c(), Ie(t) || typeof t == 'function')) {
    const d = ae(t, () => {
      a.value && Pr && c()
    })
    yt(d)
  }
  return yt(s), { isActive: a, pause: s, resume: c }
}
function zd(e, t, r = {}) {
  const { immediate: n = !0 } = r,
    E = U(!1)
  let o = null
  function a() {
    o && (clearTimeout(o), (o = null))
  }
  function l() {
    ;(E.value = !1), a()
  }
  function s(...c) {
    a(),
      (E.value = !0),
      (o = setTimeout(() => {
        ;(E.value = !1), (o = null), e(...c)
      }, $e(t)))
  }
  return (
    n && ((E.value = !0), Pr && s()),
    yt(l),
    { isPending: Kt(E), start: s, stop: l }
  )
}
function _a(e = !1, t = {}) {
  const { truthyValue: r = !0, falsyValue: n = !1 } = t,
    E = Ie(e),
    o = U(e)
  function a(l) {
    if (arguments.length) return (o.value = l), o.value
    {
      const s = $e(r)
      return (o.value = o.value === s ? $e(n) : s), o.value
    }
  }
  return E ? a : [o, a]
}
function Jt(e) {
  var t
  const r = $e(e)
  return (t = r == null ? void 0 : r.$el) != null ? t : r
}
const Ct = Pr ? window : void 0,
  h8 = Pr ? window.document : void 0,
  Ud = Pr ? window.navigator : void 0
function Ne(...e) {
  let t, r, n, E
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([r, n, E] = e), (t = Ct))
      : ([t, r, n, E] = e),
    !t)
  )
    return Or
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n])
  const o = [],
    a = () => {
      o.forEach(d => d()), (o.length = 0)
    },
    l = (d, A, B, p) => (
      d.addEventListener(A, B, p), () => d.removeEventListener(A, B, p)
    ),
    s = ae(
      () => [Jt(t), $e(E)],
      ([d, A]) => {
        if ((a(), !d)) return
        const B = Ld(A) ? { ...A } : A
        o.push(...r.flatMap(p => n.map(f => l(d, p, f, B))))
      },
      { immediate: !0, flush: 'post' }
    ),
    c = () => {
      s(), a()
    }
  return yt(c), c
}
function qd() {
  const e = U(!1)
  return (
    ct() &&
      se(() => {
        e.value = !0
      }),
    e
  )
}
function iE(e) {
  const t = qd()
  return y(() => (t.value, !!e()))
}
function Wd(e, t = {}) {
  const { immediate: r = !0, fpsLimit: n = void 0, window: E = Ct } = t,
    o = U(!1),
    a = n ? 1e3 / n : null
  let l = 0,
    s = null
  function c(B) {
    if (!o.value || !E) return
    const p = B - (l || B)
    if (a && p < a) {
      s = E.requestAnimationFrame(c)
      return
    }
    e({ delta: p, timestamp: B }), (l = B), (s = E.requestAnimationFrame(c))
  }
  function d() {
    !o.value && E && ((o.value = !0), (s = E.requestAnimationFrame(c)))
  }
  function A() {
    ;(o.value = !1), s != null && E && (E.cancelAnimationFrame(s), (s = null))
  }
  return r && d(), yt(A), { isActive: Kt(o), pause: A, resume: d }
}
function x5(e, t = {}) {
  const { window: r = Ct } = t,
    n = iE(() => r && 'matchMedia' in r && typeof r.matchMedia == 'function')
  let E
  const o = U(!1),
    a = c => {
      o.value = c.matches
    },
    l = () => {
      E &&
        ('removeEventListener' in E
          ? E.removeEventListener('change', a)
          : E.removeListener(a))
    },
    s = Z0(() => {
      n.value &&
        (l(),
        (E = r.matchMedia($e(e))),
        'addEventListener' in E
          ? E.addEventListener('change', a)
          : E.addListener(a),
        (o.value = E.matches))
    })
  return (
    yt(() => {
      s(), l(), (E = void 0)
    }),
    o
  )
}
function Kd(e = {}) {
  const {
      navigator: t = Ud,
      read: r = !1,
      source: n,
      copiedDuring: E = 1500,
      legacy: o = !1
    } = e,
    a = iE(() => t && 'clipboard' in t),
    l = y(() => a.value || o),
    s = U(''),
    c = U(!1),
    d = zd(() => (c.value = !1), E)
  function A() {
    a.value
      ? t.clipboard.readText().then(F => {
          s.value = F
        })
      : (s.value = f())
  }
  l.value && r && Ne(['copy', 'cut'], A)
  async function B(F = $e(n)) {
    l.value &&
      F != null &&
      (a.value ? await t.clipboard.writeText(F) : p(F),
      (s.value = F),
      (c.value = !0),
      d.start())
  }
  function p(F) {
    const S = document.createElement('textarea')
    ;(S.value = F ?? ''),
      (S.style.position = 'absolute'),
      (S.style.opacity = '0'),
      document.body.appendChild(S),
      S.select(),
      document.execCommand('copy'),
      S.remove()
  }
  function f() {
    var F, S, D
    return (D =
      (S =
        (F = document == null ? void 0 : document.getSelection) == null
          ? void 0
          : F.call(document)) == null
        ? void 0
        : S.toString()) != null
      ? D
      : ''
  }
  return { isSupported: l, text: s, copied: c, copy: B }
}
const SE =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  TE = '__vueuse_ssr_handlers__',
  Gd = Xd()
function Xd() {
  return TE in SE || (SE[TE] = SE[TE] || {}), SE[TE]
}
function Yd(e, t) {
  return Gd[e] || t
}
function Qd(e) {
  return e == null
    ? 'any'
    : e instanceof Set
    ? 'set'
    : e instanceof Map
    ? 'map'
    : e instanceof Date
    ? 'date'
    : typeof e == 'boolean'
    ? 'boolean'
    : typeof e == 'string'
    ? 'string'
    : typeof e == 'object'
    ? 'object'
    : Number.isNaN(e)
    ? 'any'
    : 'number'
}
const Zd = {
    boolean: { read: e => e === 'true', write: e => String(e) },
    object: { read: e => JSON.parse(e), write: e => JSON.stringify(e) },
    number: { read: e => Number.parseFloat(e), write: e => String(e) },
    any: { read: e => e, write: e => String(e) },
    string: { read: e => e, write: e => String(e) },
    map: {
      read: e => new Map(JSON.parse(e)),
      write: e => JSON.stringify(Array.from(e.entries()))
    },
    set: {
      read: e => new Set(JSON.parse(e)),
      write: e => JSON.stringify(Array.from(e))
    },
    date: { read: e => new Date(e), write: e => e.toISOString() }
  },
  Yi = 'vueuse-storage'
function hn(e, t, r, n = {}) {
  var E
  const {
      flush: o = 'pre',
      deep: a = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: s = !0,
      mergeDefaults: c = !1,
      shallow: d,
      window: A = Ct,
      eventFilter: B,
      onError: p = T => {
        console.error(T)
      }
    } = n,
    f = (d ? je : U)(t)
  if (!r)
    try {
      r = Yd('getDefaultStorage', () => {
        var T
        return (T = Ct) == null ? void 0 : T.localStorage
      })()
    } catch (T) {
      p(T)
    }
  if (!r) return f
  const F = $e(t),
    S = Qd(F),
    D = (E = n.serializer) != null ? E : Zd[S],
    { pause: b, resume: g } = Nd(f, () => _(f.value), {
      flush: o,
      deep: a,
      eventFilter: B
    })
  return A && l && (Ne(A, 'storage', P), Ne(A, Yi, R)), P(), f
  function _(T) {
    try {
      if (T == null) r.removeItem(e)
      else {
        const x = D.write(T),
          $ = r.getItem(e)
        $ !== x &&
          (r.setItem(e, x),
          A &&
            A.dispatchEvent(
              new CustomEvent(Yi, {
                detail: { key: e, oldValue: $, newValue: x, storageArea: r }
              })
            ))
      }
    } catch (x) {
      p(x)
    }
  }
  function w(T) {
    const x = T ? T.newValue : r.getItem(e)
    if (x == null) return s && F !== null && r.setItem(e, D.write(F)), F
    if (!T && c) {
      const $ = D.read(x)
      return typeof c == 'function'
        ? c($, F)
        : S === 'object' && !Array.isArray($)
        ? { ...F, ...$ }
        : $
    } else return typeof x != 'string' ? x : D.read(x)
  }
  function R(T) {
    P(T.detail)
  }
  function P(T) {
    if (!(T && T.storageArea !== r)) {
      if (T && T.key == null) {
        f.value = F
        return
      }
      if (!(T && T.key !== e)) {
        b()
        try {
          ;(T == null ? void 0 : T.newValue) !== D.write(f.value) &&
            (f.value = w(T))
        } catch (x) {
          p(x)
        } finally {
          T ? Gt(g) : g()
        }
      }
    }
  }
}
function e6(e) {
  return x5('(prefers-color-scheme: dark)', e)
}
function t6(e, t, r = {}) {
  const { window: n = Ct, ...E } = r
  let o
  const a = iE(() => n && 'MutationObserver' in n),
    l = () => {
      o && (o.disconnect(), (o = void 0))
    },
    s = ae(
      () => Jt(e),
      d => {
        l(),
          a.value && n && d && ((o = new MutationObserver(t)), o.observe(d, E))
      },
      { immediate: !0 }
    ),
    c = () => {
      l(), s()
    }
  return yt(c), { isSupported: a, stop: c }
}
function r6(e, t, r = {}) {
  const { window: n = Ct, ...E } = r
  let o
  const a = iE(() => n && 'ResizeObserver' in n),
    l = () => {
      o && (o.disconnect(), (o = void 0))
    },
    s = y(() => (Array.isArray(e) ? e.map(A => Jt(A)) : [Jt(e)])),
    c = ae(
      s,
      A => {
        if ((l(), a.value && n)) {
          o = new ResizeObserver(t)
          for (const B of A) B && o.observe(B, E)
        }
      },
      { immediate: !0, flush: 'post', deep: !0 }
    ),
    d = () => {
      l(), c()
    }
  return yt(d), { isSupported: a, stop: d }
}
function n6(e, t = { width: 0, height: 0 }, r = {}) {
  const { window: n = Ct, box: E = 'content-box' } = r,
    o = y(() => {
      var s, c
      return (c = (s = Jt(e)) == null ? void 0 : s.namespaceURI) == null
        ? void 0
        : c.includes('svg')
    }),
    a = U(t.width),
    l = U(t.height)
  return (
    r6(
      e,
      ([s]) => {
        const c =
          E === 'border-box'
            ? s.borderBoxSize
            : E === 'content-box'
            ? s.contentBoxSize
            : s.devicePixelContentBoxSize
        if (n && o.value) {
          const d = Jt(e)
          if (d) {
            const A = n.getComputedStyle(d)
            ;(a.value = Number.parseFloat(A.width)),
              (l.value = Number.parseFloat(A.height))
          }
        } else if (c) {
          const d = Array.isArray(c) ? c : [c]
          ;(a.value = d.reduce((A, { inlineSize: B }) => A + B, 0)),
            (l.value = d.reduce((A, { blockSize: B }) => A + B, 0))
        } else (a.value = s.contentRect.width), (l.value = s.contentRect.height)
      },
      r
    ),
    ae(
      () => Jt(e),
      s => {
        ;(a.value = s ? t.width : 0), (l.value = s ? t.height : 0)
      }
    ),
    { width: a, height: l }
  )
}
const Qi = [
  'fullscreenchange',
  'webkitfullscreenchange',
  'webkitendfullscreen',
  'mozfullscreenchange',
  'MSFullscreenChange'
]
function _8(e, t = {}) {
  const { document: r = h8, autoExit: n = !1 } = t,
    E = y(() => {
      var D
      return (D = Jt(e)) != null
        ? D
        : r == null
        ? void 0
        : r.querySelector('html')
    }),
    o = U(!1),
    a = y(() =>
      [
        'requestFullscreen',
        'webkitRequestFullscreen',
        'webkitEnterFullscreen',
        'webkitEnterFullScreen',
        'webkitRequestFullScreen',
        'mozRequestFullScreen',
        'msRequestFullscreen'
      ].find(D => (r && D in r) || (E.value && D in E.value))
    ),
    l = y(() =>
      [
        'exitFullscreen',
        'webkitExitFullscreen',
        'webkitExitFullScreen',
        'webkitCancelFullScreen',
        'mozCancelFullScreen',
        'msExitFullscreen'
      ].find(D => (r && D in r) || (E.value && D in E.value))
    ),
    s = y(() =>
      [
        'fullScreen',
        'webkitIsFullScreen',
        'webkitDisplayingFullscreen',
        'mozFullScreen',
        'msFullscreenElement'
      ].find(D => (r && D in r) || (E.value && D in E.value))
    ),
    c = [
      'fullscreenElement',
      'webkitFullscreenElement',
      'mozFullScreenElement',
      'msFullscreenElement'
    ].find(D => r && D in r),
    d = iE(
      () =>
        E.value &&
        r &&
        a.value !== void 0 &&
        l.value !== void 0 &&
        s.value !== void 0
    ),
    A = () => (c ? (r == null ? void 0 : r[c]) === E.value : !1),
    B = () => {
      if (s.value) {
        if (r && r[s.value] != null) return r[s.value]
        {
          const D = E.value
          if ((D == null ? void 0 : D[s.value]) != null) return !!D[s.value]
        }
      }
      return !1
    }
  async function p() {
    if (!(!d.value || !o.value)) {
      if (l.value)
        if ((r == null ? void 0 : r[l.value]) != null) await r[l.value]()
        else {
          const D = E.value
          ;(D == null ? void 0 : D[l.value]) != null && (await D[l.value]())
        }
      o.value = !1
    }
  }
  async function f() {
    if (!d.value || o.value) return
    B() && (await p())
    const D = E.value
    a.value &&
      (D == null ? void 0 : D[a.value]) != null &&
      (await D[a.value](), (o.value = !0))
  }
  async function F() {
    await (o.value ? p() : f())
  }
  const S = () => {
    const D = B()
    ;(!D || (D && A())) && (o.value = D)
  }
  return (
    Ne(r, Qi, S, !1),
    Ne(() => Jt(E), Qi, S, !1),
    n && yt(p),
    { isSupported: d, isFullscreen: o, enter: f, exit: p, toggle: F }
  )
}
function Vo(e) {
  return typeof Window < 'u' && e instanceof Window
    ? e.document.documentElement
    : typeof Document < 'u' && e instanceof Document
    ? e.documentElement
    : e
}
function h3(e = {}) {
  const { controls: t = !1, interval: r = 'requestAnimationFrame' } = e,
    n = U(new Date()),
    E = () => (n.value = new Date()),
    o =
      r === 'requestAnimationFrame'
        ? Wd(E, { immediate: !0 })
        : Jd(E, r, { immediate: !0 })
  return t ? { now: n, ...o } : n
}
function _3(e, t = Or, r = {}) {
  const {
      immediate: n = !0,
      manual: E = !1,
      type: o = 'text/javascript',
      async: a = !0,
      crossOrigin: l,
      referrerPolicy: s,
      noModule: c,
      defer: d,
      document: A = h8,
      attrs: B = {}
    } = r,
    p = U(null)
  let f = null
  const F = b =>
      new Promise((g, _) => {
        const w = T => ((p.value = T), g(T), T)
        if (!A) {
          g(!1)
          return
        }
        let R = !1,
          P = A.querySelector(`script[src="${$e(e)}"]`)
        P
          ? P.hasAttribute('data-loaded') && w(P)
          : ((P = A.createElement('script')),
            (P.type = o),
            (P.async = a),
            (P.src = $e(e)),
            d && (P.defer = d),
            l && (P.crossOrigin = l),
            c && (P.noModule = c),
            s && (P.referrerPolicy = s),
            Object.entries(B).forEach(([T, x]) =>
              P == null ? void 0 : P.setAttribute(T, x)
            ),
            (R = !0)),
          P.addEventListener('error', T => _(T)),
          P.addEventListener('abort', T => _(T)),
          P.addEventListener('load', () => {
            P.setAttribute('data-loaded', 'true'), t(P), w(P)
          }),
          R && (P = A.head.appendChild(P)),
          b || w(P)
      }),
    S = (b = !0) => (f || (f = F(b)), f),
    D = () => {
      if (!A) return
      ;(f = null), p.value && (p.value = null)
      const b = A.querySelector(`script[src="${$e(e)}"]`)
      b && A.head.removeChild(b)
    }
  return n && !E && m8(S), E || Hd(D), { scriptTag: p, load: S, unload: D }
}
function k5(e) {
  const t = window.getComputedStyle(e)
  if (
    t.overflowX === 'scroll' ||
    t.overflowY === 'scroll' ||
    (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0
  {
    const r = e.parentNode
    return !r || r.tagName === 'BODY' ? !1 : k5(r)
  }
}
function E6(e) {
  const t = e || window.event,
    r = t.target
  return k5(r)
    ? !1
    : t.touches.length > 1
    ? !0
    : (t.preventDefault && t.preventDefault(), !1)
}
function M5(e, t = !1) {
  const r = U(t)
  let n = null,
    E
  ae(
    kd(e),
    l => {
      const s = Vo($e(l))
      if (s) {
        const c = s
        ;(E = c.style.overflow), r.value && (c.style.overflow = 'hidden')
      }
    },
    { immediate: !0 }
  )
  const o = () => {
      const l = Vo($e(e))
      !l ||
        r.value ||
        (Xi &&
          (n = Ne(
            l,
            'touchmove',
            s => {
              E6(s)
            },
            { passive: !1 }
          )),
        (l.style.overflow = 'hidden'),
        (r.value = !0))
    },
    a = () => {
      const l = Vo($e(e))
      !l ||
        !r.value ||
        (Xi && (n == null || n()), (l.style.overflow = E), (r.value = !1))
    }
  return (
    yt(a),
    y({
      get() {
        return r.value
      },
      set(l) {
        l ? o() : a()
      }
    })
  )
}
function $5(e, t, r = {}) {
  const { window: n = Ct } = r
  return hn(e, t, n == null ? void 0 : n.sessionStorage, r)
}
let o6 = 0
function a6(e, t = {}) {
  const r = U(!1),
    {
      document: n = h8,
      immediate: E = !0,
      manual: o = !1,
      id: a = `vueuse_styletag_${++o6}`
    } = t,
    l = U(e)
  let s = () => {}
  const c = () => {
      if (!n) return
      const A = n.getElementById(a) || n.createElement('style')
      A.isConnected ||
        ((A.id = a), t.media && (A.media = t.media), n.head.appendChild(A)),
        !r.value &&
          ((s = ae(
            l,
            B => {
              A.textContent = B
            },
            { immediate: !0 }
          )),
          (r.value = !0))
    },
    d = () => {
      !n ||
        !r.value ||
        (s(), n.head.removeChild(n.getElementById(a)), (r.value = !1))
    }
  return (
    E && !o && m8(c),
    o || yt(d),
    { id: a, css: l, unload: d, load: c, isLoaded: Kt(r) }
  )
}
function i6(e = {}) {
  const { window: t = Ct } = e
  if (!t) return { x: U(0), y: U(0) }
  const r = U(t.scrollX),
    n = U(t.scrollY)
  return (
    Ne(
      t,
      'scroll',
      () => {
        ;(r.value = t.scrollX), (n.value = t.scrollY)
      },
      { capture: !1, passive: !0 }
    ),
    { x: r, y: n }
  )
}
function l6(e = {}) {
  const {
      window: t = Ct,
      initialWidth: r = Number.POSITIVE_INFINITY,
      initialHeight: n = Number.POSITIVE_INFINITY,
      listenOrientation: E = !0,
      includeScrollbar: o = !0
    } = e,
    a = U(r),
    l = U(n),
    s = () => {
      t &&
        (o
          ? ((a.value = t.innerWidth), (l.value = t.innerHeight))
          : ((a.value = t.document.documentElement.clientWidth),
            (l.value = t.document.documentElement.clientHeight)))
    }
  if ((s(), m8(s), Ne('resize', s, { passive: !0 }), E)) {
    const c = x5('(orientation: portrait)')
    ae(c, () => s())
  }
  return { width: a, height: l }
}
var s6 = M({
  name: 'FontIcon',
  props: {
    icon: { type: String, default: '' },
    color: { type: String, default: '' },
    size: { type: [String, Number], default: '' }
  },
  setup(e) {
    const t = y(() => {
        const n = ['font-icon icon'],
          E = `iconfont icon-${e.icon}`
        return n.push(E), n
      }),
      r = y(() => {
        const n = {}
        return (
          e.color && (n.color = e.color),
          e.size &&
            (n['font-size'] = Number.isNaN(Number(e.size))
              ? e.size
              : `${e.size}px`),
          st(n).length ? n : null
        )
      })
    return () =>
      e.icon ? u('span', { key: e.icon, class: t.value, style: r.value }) : null
  }
})
const j5 = (
  { type: e = 'info', text: t = '', vertical: r, color: n },
  { slots: E }
) => {
  var o
  return u(
    'span',
    {
      class: ['vp-badge', e, { diy: n }],
      style: { verticalAlign: r ?? !1, backgroundColor: n ?? !1 }
    },
    ((o = E.default) == null ? void 0 : o.call(E)) || t
  )
}
j5.displayName = 'Badge'
const Zi = 'https://codepen.io',
  c6 = e => {
    let t = ''
    for (const r in e)
      r !== 'prefill' &&
        r !== 'open' &&
        (t !== '' && (t += '&'), (t += r + '=' + encodeURIComponent(e[r])))
    return t
  },
  N5 = e => {
    const t = e.preview === 'true' ? 'embed/preview' : 'embed'
    if ('prefill' in e) return [Zi, t, 'prefill'].join('/')
    let r = e['slug-hash']
    if (!r) throw new Error('slug-hash is required')
    return (
      e.token && (r += '/' + e.token),
      [Zi, e.user || 'anon', t, r + '?' + c6(e)]
        .join('/')
        .replace(/\/\//g, '//')
    )
  },
  ga = (e, t) => {
    const r = document.createElement(e)
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        r.setAttribute(n, t[n].toString())
    return r
  },
  u6 = e => {
    const t = ga('form', {
      class: 'code-pen-embed-form',
      style: 'display: none;',
      method: 'post',
      action: N5(e),
      target: e.name || ''
    })
    for (const r in e)
      r !== 'prefill' &&
        t.append(
          ga('input', { type: 'hidden', name: r, value: e[r].toString() })
        )
    return t
  },
  d6 = e => {
    const { height: t = 300, class: r = '', name: n = 'CodePen Embed' } = e,
      E = {
        class: `cp_embed_iframe ${r}`,
        src: N5(e),
        allowfullscreen: '',
        allowpaymentrequest: '',
        allowTransparency: '',
        frameborder: 0,
        width: '100%',
        height: t,
        name: n,
        scrolling: 'no',
        style: 'width: 100%; overflow: hidden; display: block;',
        title: e['pen-title'] || n
      }
    return (
      'prefill' in e || (E.loading = 'lazy'),
      e['slug-hash'] &&
        (E.id = `code-pen-embed-${e['slug-hash'].replace('/', '_')}`),
      ga('iframe', E)
    )
  },
  A6 = (e, t) => {
    if (e.parentNode) {
      const r = document.createElement('div')
      return (
        (r.className = 'code-pen-embed-wrapper'),
        r.append(t),
        e.parentNode.replaceChild(r, e),
        r
      )
    }
    return e.append(t), e
  }
let B6 = 1
const el = (e, t) => {
  const r =
    typeof t == 'string'
      ? document.querySelector(t)
      : t instanceof HTMLElement
      ? t
      : null
  e.user || (e.user = 'anon'),
    e.name || (e.name = r ? `code-pen-api-${B6++}` : '_blank')
  const n = document.createDocumentFragment()
  let E = null
  'prefill' in e &&
    ((e.data = JSON.stringify(e.prefill || '{}')), (E = u6(e)), n.append(E)),
    r ? (n.append(d6(e)), A6(r, n)) : document.body.appendChild(n),
    E && E.submit()
}
var v6 = M({
  name: 'CodePen',
  props: {
    link: { type: String, default: '' },
    user: { type: String, default: '' },
    slugHash: { type: String, default: '' },
    title: { type: String, default: '' },
    height: { type: [String, Number], default: 380 },
    theme: { type: String, default: 'default' },
    defaultTab: { type: Array, default: () => ['result'] },
    status: { type: String, default: 'preview' }
  },
  setup(e) {
    const t = () => {
        const o =
          /(?:^(?:https?:)?\/\/codepen.io\/|^\/|^)(.*?)\/(?:pen|embed)\/(.*?)\/?$/.exec(
            e.link
          )
        return {
          user: o == null ? void 0 : o[1],
          slugHash: o == null ? void 0 : o[2]
        }
      },
      r = y(() => t().user || e.user),
      n = y(() => t().slugHash || e.slugHash),
      E = y(() => ({
        user: r.value,
        'slug-hash': n.value,
        'theme-id': e.theme,
        'default-tab': e.defaultTab.join(','),
        'pen-title': e.title,
        height: e.height,
        preview: e.status === 'preview' ? 'true' : ''
      }))
    return (
      se(() => {
        e.status !== 'clicktorun' && el(E.value, `.codepen-${n.value}`)
      }),
      () =>
        u('div', { class: ['codepen-wrapper', `codepen-${n.value}`] }, [
          e.status === 'clicktorun'
            ? u(
                'button',
                {
                  type: 'button',
                  class: 'codepen-button',
                  onClick: () => {
                    el(E.value, `.codepen-${n.value}`)
                  }
                },
                'Run Code'
              )
            : null,
          u('span', [
            'See the Pen ',
            u('a', { href: e.link }, [e.title]),
            ' by ',
            u('a', { href: `https://codepen.io/${r.value}` }, [r.value]),
            ' on ',
            u('a', { href: 'https://codepen.io' }, ['CodePen']),
            '.'
          ])
        ])
    )
  }
})
const tl = e => (Ee(e) ? e : `${e}px`),
  p6 = (e, t = 0) => {
    const r = je(),
      n = y(() => tl(at(e.width) || '100%')),
      E = U('auto'),
      o = s => {
        if (Ee(s)) {
          const [c, d] = s.split(':'),
            A = Number(c) / Number(d)
          if (!Number.isNaN(A)) return A
        }
        return typeof s == 'number' ? s : 16 / 9
      },
      a = s => {
        const c = at(e.height),
          d = o(at(e.ratio))
        return c ? tl(c) : `${Number(s) / d + at(t)}px`
      },
      l = () => {
        r.value && (E.value = a(r.value.clientWidth))
      }
    return (
      se(() => {
        l(),
          Ie(t) && ae(t, () => l()),
          Ne('orientationchange', () => l()),
          Ne('resize', () => l())
      }),
      { el: r, width: n, height: E }
    )
  },
  f6 = e => (pr(e) ? e : Se(e)),
  xo = e => {
    console.error('[PDF]: ' + e)
  },
  m6 = e => {
    for (; e.firstChild; ) e.removeChild(e.firstChild)
  },
  h6 = e =>
    e === 'string'
      ? document.querySelector(e)
      : e instanceof HTMLElement
      ? e
      : document.body,
  _6 = e => {
    let t = ''
    return (
      e &&
        ((t += mn(e)
          .map(([r, n]) =>
            r === 'noToolbar'
              ? `toolbar=${n ? 0 : 1}`
              : `${encodeURIComponent(r)}=${encodeURIComponent(n)}`
          )
          .join('&')),
        t && (t = `#${t.slice(0, t.length - 1)}`)),
      t
    )
  },
  g6 = (e, t, r, n, E) => {
    m6(t)
    let o = r
    e === 'pdfjs' &&
      (o = `${`${qs(Se(null))}web/viewer.html`}?file=${encodeURIComponent(
        r
      )}${_6(n)}`)
    const a = e === 'pdfjs' || e === 'iframe' ? 'iframe' : 'embed',
      l = document.createElement(a)
    return (
      (l.className = 'pdf-viewer'),
      (l.type = 'application/pdf'),
      (l.title = E),
      (l.src = o),
      l instanceof HTMLIFrameElement && (l.allow = 'fullscreen'),
      t.classList.add('pdf-viewer-container'),
      t.appendChild(l),
      t.getElementsByTagName(a)[0]
    )
  },
  F6 = (e, t = null, { title: r, hint: n, options: E = {} }) => {
    var o, a
    if (
      typeof window > 'u' ||
      !((o = window == null ? void 0 : window.navigator) != null && o.userAgent)
    )
      return null
    const { navigator: l } = window,
      { userAgent: s } = l,
      c = window.Promise !== void 0,
      d = pd(s) || Bd(s),
      A = !d && vd(s),
      B =
        !d && /firefox/i.test(s) && s.split('rv:').length > 1
          ? parseInt(s.split('rv:')[1].split('.')[0], 10) > 18
          : !1,
      p = !d && (c || B)
    if (!Ee(e)) return xo('URL is not valid'), null
    const f = h6(t)
    if (!f) return xo('Target element cannot be determined'), null
    const F =
      r ||
      ((a = /\/([^/]+).pdf/.exec(e)) == null ? void 0 : a[1]) ||
      'PDF Viewer'
    return p || !d
      ? g6(A ? 'iframe' : 'embed', f, e, E, F)
      : ((f.innerHTML = n.replace(/\[url\]/g, e)),
        xo('This browser does not support embedded PDFs'),
        null)
  }
var D6 = M({
  name: 'PDF',
  props: {
    url: { type: String, required: !0 },
    title: { type: String, default: '' },
    width: { type: [String, Number], default: '100%' },
    height: { type: [String, Number], default: void 0 },
    ratio: { type: [String, Number], default: 16 / 9 },
    page: { type: [String, Number], default: 1 },
    noToolbar: Boolean,
    zoom: { type: [String, Number], default: 100 }
  },
  setup(e) {
    const { el: t, width: r, height: n } = p6(e),
      E = $r({
        '/': {
          hint: "<p>此浏览器不支持嵌入式 PDF。请下载 PDF 查看：<a href='[url]' target='_blank'>下载 PDF</a></p>"
        }
      })
    return (
      se(() => {
        F6(f6(e.url), t.value, {
          title: e.title,
          hint: E.value.hint,
          options: { page: e.page, noToolbar: e.noToolbar, zoom: e.zoom }
        })
      }),
      () =>
        u('div', {
          class: 'pdf-viewer-wrapper',
          ref: t,
          style: { width: r.value, height: n.value }
        })
    )
  }
})
const H5 = () =>
  u(ce, { name: 'back-to-top' }, () => [
    u('path', {
      d: 'M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z'
    }),
    u('path', {
      d: 'm795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z'
    })
  ])
H5.displayName = 'BackToTopIcon'
var b6 = M({
  name: 'BackToTop',
  props: { threshold: { type: Number, default: 100 }, noProgress: Boolean },
  setup(e) {
    const t = Fe(),
      r = $r({ '/': { backToTop: '返回顶部' } }),
      n = je(),
      { height: E } = n6(n),
      { height: o } = l6(),
      { y: a } = i6(),
      l = y(() => t.value.backToTop !== !1 && a.value > e.threshold),
      s = y(() => a.value / (E.value - o.value))
    return (
      se(() => {
        n.value = document.body
      }),
      () =>
        u(Ar, { name: 'fade' }, () =>
          l.value
            ? u(
                'button',
                {
                  type: 'button',
                  class: 'vp-back-to-top-button',
                  'aria-label': r.value.backToTop,
                  'data-balloon-pos': 'left',
                  onClick: () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                },
                [
                  e.noProgress
                    ? null
                    : u(
                        'svg',
                        { class: 'vp-scroll-progress' },
                        u('circle', {
                          cx: '50%',
                          cy: '50%',
                          style: {
                            'stroke-dasharray': `calc(${
                              Math.PI * s.value * 100
                            }% - ${4 * Math.PI}px) calc(${Math.PI * 100}% - ${
                              4 * Math.PI
                            }px)`
                          }
                        })
                      ),
                  u(H5)
                ]
              )
            : null
        )
    )
  }
})
const y6 = ut({
  enhance: ({ app: e }) => {
    it('FontIcon') || e.component('FontIcon', s6),
      it('Badge') || e.component('Badge', j5),
      it('CodePen') || e.component('CodePen', v6),
      it('PDF') || e.component('PDF', D6)
  },
  setup: () => {
    a6(`@import url("//at.alicdn.com/t/c/font_3677319_oahe2s4vqga.css");
`)
  },
  rootComponents: [() => u(b6, {})]
})
function J5(e, t, r) {
  var n, E, o
  t === void 0 && (t = 50), r === void 0 && (r = {})
  var a = (n = r.isImmediate) != null && n,
    l = (E = r.callback) != null && E,
    s = r.maxWait,
    c = Date.now(),
    d = []
  function A() {
    if (s !== void 0) {
      var p = Date.now() - c
      if (p + t >= s) return s - p
    }
    return t
  }
  var B = function () {
    var p = [].slice.call(arguments),
      f = this
    return new Promise(function (F, S) {
      var D = a && o === void 0
      if (
        (o !== void 0 && clearTimeout(o),
        (o = setTimeout(function () {
          if (((o = void 0), (c = Date.now()), !a)) {
            var g = e.apply(f, p)
            l && l(g),
              d.forEach(function (_) {
                return (0, _.resolve)(g)
              }),
              (d = [])
          }
        }, A())),
        D)
      ) {
        var b = e.apply(f, p)
        return l && l(b), F(b)
      }
      d.push({ resolve: F, reject: S })
    })
  }
  return (
    (B.cancel = function (p) {
      o !== void 0 && clearTimeout(o),
        d.forEach(function (f) {
          return (0, f.reject)(p)
        }),
        (d = [])
    }),
    B
  )
}
const C6 = ({
    headerLinkSelector: e,
    headerAnchorSelector: t,
    delay: r,
    offset: n = 5
  }) => {
    const E = qe(),
      a = J5(() => {
        var F, S
        const l = Math.max(
          window.scrollY,
          document.documentElement.scrollTop,
          document.body.scrollTop
        )
        if (Math.abs(l - 0) < n) {
          rl(E, '')
          return
        }
        const c = window.innerHeight + l,
          d = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
          ),
          A = Math.abs(d - c) < n,
          B = Array.from(document.querySelectorAll(e)),
          f = Array.from(document.querySelectorAll(t)).filter(D =>
            B.some(b => b.hash === D.hash)
          )
        for (let D = 0; D < f.length; D++) {
          const b = f[D],
            g = f[D + 1],
            _ =
              l >=
              (((F = b.parentElement) == null ? void 0 : F.offsetTop) ?? 0) - n,
            w =
              !g ||
              l <
                (((S = g.parentElement) == null ? void 0 : S.offsetTop) ?? 0) -
                  n
          if (!(_ && w)) continue
          const P = decodeURIComponent(E.currentRoute.value.hash),
            T = decodeURIComponent(b.hash)
          if (P === T) return
          if (A) {
            for (let x = D + 1; x < f.length; x++)
              if (P === decodeURIComponent(f[x].hash)) return
          }
          rl(E, T)
          return
        }
      }, r)
    se(() => {
      window.addEventListener('scroll', a)
    }),
      ao(() => {
        window.removeEventListener('scroll', a)
      })
  },
  rl = async (e, t) => {
    const { scrollBehavior: r } = e.options
    ;(e.options.scrollBehavior = void 0),
      await e
        .replace({ query: e.currentRoute.value.query, hash: t, force: !0 })
        .finally(() => (e.options.scrollBehavior = r))
  },
  S6 = '.vp-sidebar-link, .toc-link',
  T6 = '.header-anchor',
  R6 = 200,
  w6 = 5,
  I6 = ut({
    setup() {
      C6({
        headerLinkSelector: S6,
        headerAnchorSelector: T6,
        delay: R6,
        offset: w6
      })
    }
  })
let z5 = () => null
const U5 = Symbol(''),
  L6 = e => {
    z5 = e
  },
  P6 = () => me(U5),
  O6 = e => {
    e.provide(U5, z5)
  }
var V6 = M({
    name: 'AutoCatalog',
    props: {
      base: { type: String, default: '' },
      level: { type: Number, default: 3 },
      index: Boolean
    },
    setup(e) {
      const t = P6(),
        r = $r({ '/': { title: '目录', empty: '暂无目录' } }),
        n = de(),
        E = qe(),
        o = t5(),
        a = c => {
          const d = c.I
          return typeof d > 'u' || d
        },
        l = () => {
          const c = e.base || n.value.path.replace(/\/[^/]+$/, '/'),
            d = E.getRoutes(),
            A = []
          return (
            d
              .filter(({ meta: B, path: p }) => {
                if (!cn(p, c) || p === c) return !1
                if (c === '/') {
                  const f = st(o.value.locales).filter(F => F !== '/')
                  if (p === '/404.html' || f.some(F => cn(p, F))) return !1
                }
                return (
                  ((Hr(p, '.html') && !Hr(p, '/index.html')) || Hr(p, '/')) &&
                  a(B)
                )
              })
              .map(({ path: B, meta: p }) => {
                const f = B.substring(c.length).split('/').length
                return {
                  title: p.t || '',
                  icon: p.i,
                  base: B.replace(/\/[^/]+\/?$/, '/'),
                  order: p.O || null,
                  level: Hr(B, '/') ? f - 1 : f,
                  path: B
                }
              })
              .filter(({ title: B, level: p }) => B && p <= e.level)
              .sort(
                (
                  { title: B, level: p, path: f, order: F },
                  { title: S, level: D, path: b, order: g }
                ) =>
                  p - D ||
                  (Hr(f, '/index.html')
                    ? -1
                    : Hr(b, '/index.html')
                    ? 1
                    : F === null
                    ? g === null
                      ? B.localeCompare(S)
                      : g
                    : g === null
                    ? F
                    : F > 0
                    ? g > 0
                      ? F - g
                      : -1
                    : g < 0
                    ? F - g
                    : 1)
              )
              .forEach(B => {
                var p
                const { base: f, level: F } = B
                switch (F) {
                  case 1:
                    A.push(B)
                    break
                  case 2: {
                    const S = A.find(D => D.path === f)
                    S && (S.children ?? (S.children = [])).push(B)
                    break
                  }
                  default: {
                    const S = A.find(
                      D => D.path === f.replace(/\/[^/]+\/$/, '/')
                    )
                    if (S) {
                      const D =
                        (p = S.children) == null
                          ? void 0
                          : p.find(b => b.path === f)
                      D && (D.children ?? (D.children = [])).push(B)
                    }
                  }
                }
              }),
            A
          )
        },
        s = y(() => l())
      return () =>
        u('div', { class: 'vp-catalog' }, [
          u('h2', { class: 'vp-catalog-main-title' }, r.value.title),
          s.value.length
            ? s.value.map(
                ({ children: c = [], icon: d, path: A, title: B }, p) => [
                  u(
                    'h3',
                    {
                      id: B,
                      class: [
                        'vp-catalog-child-title',
                        { 'has-children': c.length }
                      ]
                    },
                    [
                      u(
                        'a',
                        {
                          href: `#${B}`,
                          class: 'header-anchor',
                          'aria-hidden': !0
                        },
                        '#'
                      ),
                      u(xe, { class: 'vp-catalog-title', to: A }, () => [
                        e.index ? `${p + 1}.` : null,
                        d && t ? u(t, { icon: d }) : null,
                        B || A
                      ])
                    ]
                  ),
                  c.length
                    ? u(
                        'ul',
                        { class: 'vp-catalog-child-catalogs' },
                        c.map(
                          (
                            { children: f = [], icon: F, path: S, title: D },
                            b
                          ) =>
                            u('li', { class: 'vp-child-catalog' }, [
                              u(
                                'div',
                                {
                                  class: [
                                    'vp-catalog-sub-title',
                                    { 'has-children': f.length }
                                  ]
                                },
                                [
                                  u(
                                    'a',
                                    { href: `#${D}`, class: 'header-anchor' },
                                    '#'
                                  ),
                                  u(
                                    xe,
                                    { class: 'vp-catalog-title', to: S },
                                    () => [
                                      e.index ? `${p + 1}.${b + 1}` : null,
                                      F && t ? u(t, { icon: F }) : null,
                                      D || S
                                    ]
                                  )
                                ]
                              ),
                              f.length
                                ? u(
                                    'div',
                                    { class: 'v-sub-catalogs' },
                                    f.map(({ icon: g, path: _, title: w }, R) =>
                                      u(
                                        xe,
                                        { class: 'vp-sub-catalog', to: _ },
                                        () => [
                                          e.index
                                            ? `${p + 1}.${b + 1}.${R + 1}`
                                            : null,
                                          g && t ? u(t, { icon: g }) : null,
                                          w || _
                                        ]
                                      )
                                    )
                                  )
                                : null
                            ])
                        )
                      )
                    : null
                ]
              )
            : u('p', { class: 'vp-empty-catalog' }, r.value.empty)
        ])
    }
  }),
  x6 = ut({
    enhance: ({ app: e }) => {
      O6(e), it('AutoCatalog', e) || e.component('AutoCatalog', V6)
    }
  })
const k6 = u(
    'svg',
    {
      class: 'external-link-icon',
      xmlns: 'http://www.w3.org/2000/svg',
      'aria-hidden': 'true',
      focusable: 'false',
      x: '0px',
      y: '0px',
      viewBox: '0 0 100 100',
      width: '15',
      height: '15'
    },
    [
      u('path', {
        fill: 'currentColor',
        d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z'
      }),
      u('polygon', {
        fill: 'currentColor',
        points:
          '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9'
      })
    ]
  ),
  q5 = M({
    name: 'ExternalLinkIcon',
    props: { locales: { type: Object, required: !1, default: () => ({}) } },
    setup(e) {
      const t = Vt(),
        r = y(
          () => e.locales[t.value] ?? { openInNewWindow: 'open in new window' }
        )
      return () =>
        u('span', [
          k6,
          u(
            'span',
            { class: 'external-link-icon-sr-only' },
            r.value.openInNewWindow
          )
        ])
    }
  }),
  M6 = {},
  $6 = ut({
    enhance({ app: e }) {
      e.component('ExternalLinkIcon', u(q5, { locales: M6 }))
    }
  })
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */ const ve = {
    settings: {
      minimum: 0.08,
      easing: 'ease',
      speed: 200,
      trickle: !0,
      trickleRate: 0.02,
      trickleSpeed: 800,
      barSelector: '[role="bar"]',
      parent: 'body',
      template: '<div class="bar" role="bar"></div>'
    },
    status: null,
    set: e => {
      const t = ve.isStarted()
      ;(e = ko(e, ve.settings.minimum, 1)), (ve.status = e === 1 ? null : e)
      const r = ve.render(!t),
        n = r.querySelector(ve.settings.barSelector),
        E = ve.settings.speed,
        o = ve.settings.easing
      return (
        r.offsetWidth,
        j6(a => {
          RE(n, {
            transform: 'translate3d(' + nl(e) + '%,0,0)',
            transition: 'all ' + E + 'ms ' + o
          }),
            e === 1
              ? (RE(r, { transition: 'none', opacity: '1' }),
                r.offsetWidth,
                setTimeout(function () {
                  RE(r, { transition: 'all ' + E + 'ms linear', opacity: '0' }),
                    setTimeout(function () {
                      ve.remove(), a()
                    }, E)
                }, E))
              : setTimeout(() => a(), E)
        }),
        ve
      )
    },
    isStarted: () => typeof ve.status == 'number',
    start: () => {
      ve.status || ve.set(0)
      const e = () => {
        setTimeout(() => {
          ve.status && (ve.trickle(), e())
        }, ve.settings.trickleSpeed)
      }
      return ve.settings.trickle && e(), ve
    },
    done: e =>
      !e && !ve.status ? ve : ve.inc(0.3 + 0.5 * Math.random()).set(1),
    inc: e => {
      let t = ve.status
      return t
        ? (typeof e != 'number' &&
            (e = (1 - t) * ko(Math.random() * t, 0.1, 0.95)),
          (t = ko(t + e, 0, 0.994)),
          ve.set(t))
        : ve.start()
    },
    trickle: () => ve.inc(Math.random() * ve.settings.trickleRate),
    render: e => {
      if (ve.isRendered()) return document.getElementById('nprogress')
      El(document.documentElement, 'nprogress-busy')
      const t = document.createElement('div')
      ;(t.id = 'nprogress'), (t.innerHTML = ve.settings.template)
      const r = t.querySelector(ve.settings.barSelector),
        n = e ? '-100' : nl(ve.status || 0),
        E = document.querySelector(ve.settings.parent)
      return (
        RE(r, {
          transition: 'all 0 linear',
          transform: 'translate3d(' + n + '%,0,0)'
        }),
        E !== document.body && El(E, 'nprogress-custom-parent'),
        E == null || E.appendChild(t),
        t
      )
    },
    remove: () => {
      ol(document.documentElement, 'nprogress-busy'),
        ol(
          document.querySelector(ve.settings.parent),
          'nprogress-custom-parent'
        )
      const e = document.getElementById('nprogress')
      e && N6(e)
    },
    isRendered: () => !!document.getElementById('nprogress')
  },
  ko = (e, t, r) => (e < t ? t : e > r ? r : e),
  nl = e => (-1 + e) * 100,
  j6 = (function () {
    const e = []
    function t() {
      const r = e.shift()
      r && r(t)
    }
    return function (r) {
      e.push(r), e.length === 1 && t()
    }
  })(),
  RE = (function () {
    const e = ['Webkit', 'O', 'Moz', 'ms'],
      t = {}
    function r(a) {
      return a.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (l, s) {
        return s.toUpperCase()
      })
    }
    function n(a) {
      const l = document.body.style
      if (a in l) return a
      let s = e.length
      const c = a.charAt(0).toUpperCase() + a.slice(1)
      let d
      for (; s--; ) if (((d = e[s] + c), d in l)) return d
      return a
    }
    function E(a) {
      return (a = r(a)), t[a] ?? (t[a] = n(a))
    }
    function o(a, l, s) {
      ;(l = E(l)), (a.style[l] = s)
    }
    return function (a, l) {
      for (const s in l) {
        const c = l[s]
        c !== void 0 && Object.prototype.hasOwnProperty.call(l, s) && o(a, s, c)
      }
    }
  })(),
  W5 = (e, t) => (typeof e == 'string' ? e : g8(e)).indexOf(' ' + t + ' ') >= 0,
  El = (e, t) => {
    const r = g8(e),
      n = r + t
    W5(r, t) || (e.className = n.substring(1))
  },
  ol = (e, t) => {
    const r = g8(e)
    if (!W5(e, t)) return
    const n = r.replace(' ' + t + ' ', ' ')
    e.className = n.substring(1, n.length - 1)
  },
  g8 = e => (' ' + (e.className || '') + ' ').replace(/\s+/gi, ' '),
  N6 = e => {
    e && e.parentNode && e.parentNode.removeChild(e)
  }
const H6 = () => {
    se(() => {
      const e = qe(),
        t = new Set()
      t.add(e.currentRoute.value.path),
        e.beforeEach(r => {
          t.has(r.path) || ve.start()
        }),
        e.afterEach(r => {
          t.add(r.path), ve.done()
        })
    })
  },
  J6 = ut({
    setup() {
      H6()
    }
  }),
  z6 = JSON.parse(
    `{"encrypt":{"config":{}},"contributors":false,"editLink":false,"author":{"name":"Mr.Chen","url":"/logo.png"},"repoDisplay":false,"logo":"/logo.png","footer":"","copyright":"Copyright © 2018-present Mr.Chen","pageInfo":["Author","Original","Date","Category","Tag","ReadingTime","Word","PageView"],"displayFooter":true,"breadcrumb":true,"blog":{"roundAvatar":true,"avatar":"/logo.png","description":"前端攻城狮,目前在上海工作。<br>\\n    <hr>\\n    ✍️自2018年1月1日写了:<br>\\n    <a href='https://wakatime.com/@b94342d7-a3b1-41c3-8455-342d836a7152'><img src='https://wakatime.com/badge/user/b94342d7-a3b1-41c3-8455-342d836a7152.svg'>的代码</a><br>\\n    <hr>\\n    💻开发工具:<br>\\n    <img src='https://img.shields.io/badge/-MacBookPro,2020,M1-000?style=flat-square&logo=Apple&logoColor=white'/>\\n    <img src='https://img.shields.io/badge/-WebStorm-000?style=flat-square&logo=WebStorm&logoColor=white'/>\\n    <img src='https://img.shields.io/badge/-Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white'/>\\n    <br>\\n    <hr>\\n    👌正在使用:<br>\\n    <img src='https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white'/>\\n    <img src='https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white'/>\\n    <img src='https://img.shields.io/badge/-Vue-4FC08D?style=flat-square&logo=Vue.js&logoColor=white'/>\\n    <img src='https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white'/>\\n    <br>\\n    <hr>\\n    💪正在学习:<br>\\n    <img src='https://img.shields.io/badge/-Three.js-000?style=flat-square&logo=Three.js&logoColor=white'/>\\n    <img src='https://img.shields.io/badge/-Next.js-000?style=flat-square&logo=Next.js&logoColor=white'/>\\n    <img src='https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=NestJS&logoColor=white'/>\\n    <img src='https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white'/>\\n    <img src='https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white'/>\\n    <img src='https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=Redis&logoColor=white'/>\\n    <hr>\\n    ","medias":{"Email":"mailto:599422271@qq.com","Github":"https://github.com/frontchen","Gitee":"https://gitee.com/magicBegin"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":[{"text":"首页","link":"/","icon":"home"},{"text":"前端开发","link":"/前端开发/","icon":"html"},{"text":"后端开发","icon":"be","link":"/后端开发/"},{"text":"基础知识","icon":"study","link":"/基础知识/"},{"text":"开发日志","icon":"biji","link":"/开发日志/"},{"text":"书签收藏","icon":"shuqian","link":"/书签收藏"},{"text":"杂七杂八","icon":"note","link":"/杂七杂八/"}],"sidebar":{"/杂七杂八/":"structure","/开发日志/":"structure","/数据结构算法/":"structure","/前端开发/":"structure","/基础知识/":"structure","/后端开发/":"structure"}}}}`
  ),
  U6 = U(z6),
  K5 = () => U6,
  G5 = Symbol(''),
  q6 = () => {
    const e = me(G5)
    if (!e) throw new Error('useThemeLocaleData() is called without provider.')
    return e
  },
  W6 = (e, t) => {
    const { locales: r, ...n } = e
    return { ...n, ...(r == null ? void 0 : r[t]) }
  },
  K6 = ut({
    enhance({ app: e }) {
      const t = K5(),
        r = e._context.provides[c8],
        n = y(() => W6(t.value, r.value))
      e.provide(G5, n),
        Object.defineProperties(e.config.globalProperties, {
          $theme: {
            get() {
              return t.value
            }
          },
          $themeLocale: {
            get() {
              return n.value
            }
          }
        })
    }
  }),
  G6 = { 'Content-Type': 'application/json' },
  X6 = ({ serverURL: e, lang: t, paths: r, signal: n }) =>
    (({ serverURL: E, lang: o, paths: a, type: l, signal: s }) =>
      fetch(
        `${E}/article?path=${encodeURIComponent(
          a.join(',')
        )}&type=${encodeURIComponent(l.join(','))}&lang=${o}`,
        { signal: s }
      ).then(c => c.json()))({
      serverURL: e,
      lang: t,
      paths: r,
      type: ['time'],
      signal: n
    }).then(E => (Array.isArray(E) ? E : [E])),
  Y6 = e =>
    (({ serverURL: t, lang: r, path: n, type: E, action: o }) =>
      fetch(`${t}/article?lang=${r}`, {
        method: 'POST',
        headers: G6,
        body: JSON.stringify({ path: n, type: E, action: o })
      }).then(a => a.json()))({ ...e, type: 'time', action: 'inc' }),
  al = e => {
    const t = ((r = '') => r.replace(/\/$/u, ''))(e)
    return /^(https?:)?\/\//.test(t) ? t : `https://${t}`
  },
  Q6 = e => {
    e.name !== 'AbortError' && console.error(e.message)
  },
  il = e => e.dataset.path || e.getAttribute('id'),
  ll = (e, t) => {
    t.forEach((r, n) => {
      r.innerText = e[n].toString()
    })
  },
  Z6 = ({
    serverURL: e,
    path: t = window.location.pathname,
    selector: r = '.waline-pageview-count',
    update: n = !0,
    lang: E = navigator.language
  }) => {
    const o = new AbortController(),
      a = Array.from(document.querySelectorAll(r)),
      l = c => {
        const d = il(c)
        return d !== null && t !== d
      },
      s = c =>
        X6({
          serverURL: al(e),
          paths: c.map(d => il(d) || t),
          lang: E,
          signal: o.signal
        })
          .then(d => ll(d, c))
          .catch(Q6)
    if (n) {
      const c = a.filter(A => !l(A)),
        d = a.filter(l)
      Y6({ serverURL: al(e), path: t, lang: E }).then(A =>
        ll(new Array(c.length).fill(A), c)
      ),
        d.length && s(d)
    } else s(a)
    return o.abort.bind(o)
  }
const e2 = {
  provider: 'Waline',
  dark: 'auto',
  serverURL: 'https://waline.zfhblog.top'
}
let t2 = e2
const X5 = Symbol(''),
  Y5 = () => me(X5),
  r2 = Y5,
  n2 = e => {
    e.provide(X5, t2)
  },
  E2 = { '/': { placeholder: '请留言。(填写邮箱可在被回复时收到邮件提醒)' } }
i(() => import('./waline-meta-56fbc549.js'), [])
var o2 = M({
    name: 'WalineComment',
    props: { identifier: { type: String, required: !0 } },
    setup(e) {
      const t = r2(),
        r = Fe(),
        n = so(),
        E = $r(E2)
      let o
      const a = !!t.serverURL,
        l = y(() => {
          if (!a) return !1
          const c = t.pageview !== !1,
            d = r.value.pageview
          return !!d || (c !== !1 && d !== !1)
        }),
        s = y(() => ({
          lang: n.value === 'zh-CN' ? 'zh-CN' : 'en',
          locale: E.value,
          dark: 'html.dark',
          ...t,
          path: e.identifier
        }))
      return (
        se(() => {
          ae(
            () => e.identifier,
            () => {
              o == null || o(),
                l.value &&
                  Gt().then(() => {
                    setTimeout(() => {
                      o = Z6({ serverURL: t.serverURL, path: e.identifier })
                    }, t.delay || 800)
                  })
            },
            { immediate: !0 }
          )
        }),
        () =>
          a
            ? u(
                'div',
                { id: 'comment', class: 'waline-wrapper' },
                u(
                  v({
                    loader: async () =>
                      (await i(() => import('./component-d5992bff.js'), []))
                        .Waline,
                    loadingComponent: Bo
                  }),
                  s.value
                )
              )
            : null
      )
    }
  }),
  a2 = M({
    name: 'CommentService',
    props: { darkmode: Boolean },
    setup(e) {
      const t = Y5(),
        r = de(),
        n = Fe(),
        E = t.comment !== !1,
        o = y(() => n.value.comment || (E && n.value.comment !== !1))
      return () =>
        u(o2, {
          identifier: n.value.commentID || r.value.path,
          darkmode: e.darkmode,
          style: { display: o.value ? 'block' : 'none' }
        })
    }
  }),
  i2 = ut({
    enhance: ({ app: e }) => {
      n2(e), e.component('CommentService', a2)
    }
  })
const l2 = 800,
  s2 = 2e3,
  c2 = { '/': { copy: '复制代码', copied: '已复制', hint: '复制成功' } },
  u2 = !1,
  d2 = ['.theme-hope-content div[class*="language-"] pre'],
  sl = !1,
  Mo = new Map(),
  A2 = () => {
    const { copy: e } = Kd({ legacy: !0 }),
      t = $r(c2),
      r = de(),
      n = wd(),
      E = l => {
        if (!l.hasAttribute('copy-code-registered')) {
          const s = document.createElement('button')
          ;(s.type = 'button'),
            s.classList.add('copy-code-button'),
            (s.innerHTML = '<div class="copy-icon" />'),
            s.setAttribute('aria-label', t.value.copy),
            s.setAttribute('data-copied', t.value.copied),
            l.parentElement && l.parentElement.insertBefore(s, l),
            l.setAttribute('copy-code-registered', '')
        }
      },
      o = () =>
        Gt().then(
          () =>
            new Promise(l => {
              setTimeout(() => {
                d2.forEach(s => {
                  document.querySelectorAll(s).forEach(E)
                }),
                  l()
              }, l2)
            })
        ),
      a = (l, s, c) => {
        let { innerText: d = '' } = s
        ;/language-(shellscript|shell|bash|sh|zsh)/.test(
          l.classList.toString()
        ) && (d = d.replace(/^ *(\$|>) /gm, '')),
          e(d).then(() => {
            c.classList.add('copied'), clearTimeout(Mo.get(c))
            const A = setTimeout(() => {
              c.classList.remove('copied'), c.blur(), Mo.delete(c)
            }, s2)
            Mo.set(c, A)
          })
      }
    se(() => {
      ;(!n.value || sl) && o(),
        Ne('click', l => {
          const s = l.target
          if (s.matches('div[class*="language-"] > button.copy')) {
            const c = s.parentElement,
              d = s.nextElementSibling
            d && a(c, d, s)
          } else if (s.matches('div[class*="language-"] div.copy-icon')) {
            const c = s.parentElement,
              d = c.parentElement,
              A = c.nextElementSibling
            A && a(d, A, c)
          }
        }),
        ae(
          () => r.value.path,
          () => {
            ;(!n.value || sl) && o()
          }
        )
    })
  }
var B2 = ut({
  setup: () => {
    A2()
  }
})
const wE = hn('VUEPRESS_CODE_TAB_STORE', {})
var v2 = M({
  name: 'CodeTabs',
  props: {
    active: { type: Number, default: 0 },
    data: { type: Array, required: !0 },
    id: { type: String, required: !0 },
    tabId: { type: String, default: '' }
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = U(e.active),
      n = je([]),
      E = () => {
        e.tabId && (wE.value[e.tabId] = e.data[r.value].id)
      },
      o = (c = r.value) => {
        ;(r.value = c < n.value.length - 1 ? c + 1 : 0),
          n.value[r.value].focus()
      },
      a = (c = r.value) => {
        ;(r.value = c > 0 ? c - 1 : n.value.length - 1),
          n.value[r.value].focus()
      },
      l = (c, d) => {
        c.key === ' ' || c.key === 'Enter'
          ? (c.preventDefault(), (r.value = d))
          : c.key === 'ArrowRight'
          ? (c.preventDefault(), o())
          : c.key === 'ArrowLeft' && (c.preventDefault(), a()),
          e.tabId && (wE.value[e.tabId] = e.data[r.value].id)
      },
      s = () => {
        if (e.tabId) {
          const c = e.data.findIndex(({ id: d }) => wE.value[e.tabId] === d)
          if (c !== -1) return c
        }
        return e.active
      }
    return (
      se(() => {
        ;(r.value = s()),
          ae(
            () => wE.value[e.tabId],
            (c, d) => {
              if (e.tabId && c !== d) {
                const A = e.data.findIndex(({ id: B }) => B === c)
                A !== -1 && (r.value = A)
              }
            }
          )
      }),
      () =>
        e.data.length
          ? u('div', { class: 'vp-code-tabs' }, [
              u(
                'div',
                { class: 'vp-code-tabs-nav', role: 'tablist' },
                e.data.map(({ id: c }, d) => {
                  const A = d === r.value
                  return u(
                    'button',
                    {
                      type: 'button',
                      ref: B => {
                        B && (n.value[d] = B)
                      },
                      class: ['vp-code-tab-nav', { active: A }],
                      role: 'tab',
                      'aria-controls': `codetab-${e.id}-${d}`,
                      'aria-selected': A,
                      onClick: () => {
                        ;(r.value = d), E()
                      },
                      onKeydown: B => l(B, d)
                    },
                    t[`title${d}`]({ value: c, isActive: A })
                  )
                })
              ),
              e.data.map(({ id: c }, d) => {
                const A = d === r.value
                return u(
                  'div',
                  {
                    class: ['vp-code-tab', { active: A }],
                    id: `codetab-${e.id}-${d}`,
                    role: 'tabpanel',
                    'aria-expanded': A
                  },
                  t[`tab${d}`]({ value: c, isActive: A })
                )
              })
            ])
          : null
    )
  }
})
const Q5 = ({ active: e = !1 }, { slots: t }) => {
  var r
  return u(
    'div',
    { class: ['code-group-item', { active: e }], 'aria-selected': e },
    (r = t.default) == null ? void 0 : r.call(t)
  )
}
Q5.displayName = 'CodeGroupItem'
const p2 = M({
  name: 'CodeGroup',
  slots: Object,
  setup(e, { slots: t }) {
    const r = U(-1),
      n = je([]),
      E = (l = r.value) => {
        ;(r.value = l < n.value.length - 1 ? l + 1 : 0),
          n.value[r.value].focus()
      },
      o = (l = r.value) => {
        ;(r.value = l > 0 ? l - 1 : n.value.length - 1),
          n.value[r.value].focus()
      },
      a = (l, s) => {
        l.key === ' ' || l.key === 'Enter'
          ? (l.preventDefault(), (r.value = s))
          : l.key === 'ArrowRight'
          ? (l.preventDefault(), E(s))
          : l.key === 'ArrowLeft' && (l.preventDefault(), o(s))
      }
    return () => {
      var l
      const s = (((l = t.default) == null ? void 0 : l.call(t)) || [])
        .filter(c => c.type.name === 'CodeGroupItem')
        .map(c => (c.props === null && (c.props = {}), c))
      return s.length === 0
        ? null
        : (r.value < 0 || r.value > s.length - 1
            ? ((r.value = s.findIndex(c => 'active' in c.props)),
              r.value === -1 && (r.value = 0))
            : s.forEach((c, d) => {
                c.props.active = d === r.value
              }),
          u('div', { class: 'code-group' }, [
            u(
              'div',
              { class: 'code-group-nav' },
              s.map((c, d) => {
                const A = d === r.value
                return u(
                  'button',
                  {
                    type: 'button',
                    ref: B => {
                      B && (n.value[d] = B)
                    },
                    class: ['code-group-nav-tab', { active: A }],
                    'aria-pressed': A,
                    'aria-expanded': A,
                    onClick: () => {
                      r.value = d
                    },
                    onKeydown: B => a(B, d)
                  },
                  c.props.title
                )
              })
            ),
            s
          ]))
    }
  }
})
const f2 =
    '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',
  m2 =
    '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>'
const $o = {
    useBabel: !1,
    jsLib: [],
    cssLib: [],
    codepenLayout: 'left',
    codepenEditors: '101',
    babel: 'https://unpkg.com/@babel/standalone/babel.min.js',
    vue: 'https://unpkg.com/vue/dist/vue.global.prod.js',
    react: 'https://unpkg.com/react/umd/react.production.min.js',
    reactDOM: 'https://unpkg.com/react-dom/umd/react-dom.production.min.js'
  },
  cl = {
    html: {
      types: ['html', 'slim', 'haml', 'md', 'markdown', 'vue'],
      map: { html: 'none', vue: 'none', md: 'markdown' }
    },
    js: {
      types: [
        'js',
        'javascript',
        'coffee',
        'coffeescript',
        'ts',
        'typescript',
        'ls',
        'livescript'
      ],
      map: {
        js: 'none',
        javascript: 'none',
        coffee: 'coffeescript',
        ls: 'livescript',
        ts: 'typescript'
      }
    },
    css: {
      types: ['css', 'less', 'sass', 'scss', 'stylus', 'styl'],
      map: { css: 'none', styl: 'stylus' }
    }
  },
  h2 = (e, t, r) => {
    const n = document.createElement(e)
    return (
      EE(t) &&
        st(t).forEach(E => {
          if (E.indexOf('data')) n[E] = t[E]
          else {
            const o = E.replace('data', '')
            n.dataset[o] = t[E]
          }
        }),
      r &&
        r.forEach(E => {
          n.appendChild(E)
        }),
      n
    )
  },
  F8 = e => ({
    ...$o,
    ...e,
    jsLib: Array.from(new Set([...($o.jsLib || []), ...(e.jsLib || [])])),
    cssLib: Array.from(new Set([...($o.cssLib || []), ...(e.cssLib || [])]))
  }),
  Qr = (e, t) => {
    if (e[t] !== void 0) return e[t]
    const r = new Promise(n => {
      var E
      const o = document.createElement('script')
      ;(o.src = t),
        (E = document.querySelector('body')) == null || E.appendChild(o),
        (o.onload = () => {
          n()
        })
    })
    return (e[t] = r), r
  },
  _2 = (e, t) => {
    if (t.css && Array.from(e.childNodes).every(r => r.nodeName !== 'STYLE')) {
      const r = h2('style', { innerHTML: t.css })
      e.appendChild(r)
    }
  },
  g2 = (e, t, r) => {
    const n = r.getScript()
    if (n && Array.from(t.childNodes).every(E => E.nodeName !== 'SCRIPT')) {
      const E = document.createElement('script')
      E.appendChild(
        document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;
${n}}`)
      ),
        t.appendChild(E)
    }
  },
  F2 = e => {
    const t = st(e),
      r = { html: [], js: [], css: [], isLegal: !1 }
    return (
      ['html', 'js', 'css'].forEach(n => {
        const E = t.filter(o => cl[n].types.includes(o))
        if (E.length) {
          const o = E[0]
          r[n] = [e[o].replace(/^\n|\n$/g, ''), cl[n].map[o] || o]
        }
      }),
      (r.isLegal =
        (!r.html.length || r.html[1] === 'none') &&
        (!r.js.length || r.js[1] === 'none') &&
        (!r.css.length || r.css[1] === 'none')),
      r
    )
  },
  Z5 = e =>
    e.replace(/<br \/>/g, '<br>').replace(/<((\S+)[^<]*?)\s+\/>/g, '<$1></$2>'),
  ec = e => `<div id="app">
${Z5(e)}
</div>`,
  D2 = e => `${e
    .replace('export default ', 'const $reactApp = ')
    .replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, '')};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,
  b2 = e =>
    e
      .replace(
        /export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,
        "Vue.createApp({$1}).mount('#app')"
      )
      .replace(
        /export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,
        "Vue.createApp({$1}).mount('#app')"
      )
      .trim(),
  tc = e =>
    `(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?module.exports.default:module.exports;})({})`,
  y2 = (e, t) => {
    const r = F8(t),
      n = e.js[0] || ''
    return {
      ...r,
      html: Z5(e.html[0] || ''),
      js: n,
      css: e.css[0] || '',
      isLegal: e.isLegal,
      getScript: () => {
        var E
        return r.useBabel
          ? ((E = window.Babel.transform(n, { presets: ['es2015'] })) == null
              ? void 0
              : E.code) || ''
          : n
      }
    }
  },
  C2 = /<template>([\s\S]+)<\/template>/u,
  S2 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,
  T2 = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,
  R2 = (e, t) => {
    const r = F8(t),
      n = e.html[0] || '',
      E = C2.exec(n),
      o = S2.exec(n),
      a = T2.exec(n),
      l = E ? E[1].replace(/^\n|\n$/g, '') : '',
      [s = '', c = ''] = o ? [o[4].replace(/^\n|\n$/g, ''), o[3]] : [],
      [d = '', A = ''] = a ? [a[4].replace(/^\n|\n$/g, ''), a[3]] : [],
      B = c === '' && (A === '' || A === 'css')
    return {
      ...r,
      html: ec(l),
      js: b2(s),
      css: d,
      isLegal: B,
      jsLib: [r.vue, ...r.jsLib],
      getScript: () => {
        var p, f
        const F = t.useBabel
          ? ((f =
              (p = window.Babel) == null
                ? void 0
                : p.transform(s, { presets: ['es2015'] })) == null
              ? void 0
              : f.code) || ''
          : s.replace(/export\s+default/u, 'return')
        return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${tc(
          F
        )};appOptions.template=\`${l.replace(
          '`',
          '\\`"'
        )}\`;window.Vue.createApp(appOptions).mount(app);`
      }
    }
  },
  w2 = (e, t) => {
    const r = F8(t)
    return {
      ...r,
      html: ec(''),
      js: D2(e.js[0] || ''),
      css:
        e.css[0] ||
        (e.js[0]
          ? e.js[0]
              .replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, '$1')
              .trim()
          : ''),
      isLegal: e.isLegal,
      jsLib: [r.react, r.reactDOM, ...r.jsLib],
      jsx: !0,
      getScript: () => {
        var n, E
        const o =
          ((E =
            (n = window.Babel) == null
              ? void 0
              : n.transform(e.js[0] || '', { presets: ['es2015', 'react'] })) ==
          null
            ? void 0
            : E.code) || ''
        return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${tc(
          o
        )}))`
      }
    }
  },
  Zr = {},
  I2 = e => Promise.all([Qr(Zr, e.babel), Qr(Zr, e.react), Qr(Zr, e.reactDOM)]),
  L2 = e => {
    const t = [Qr(Zr, e.vue)]
    return e.useBabel && t.push(Qr(Zr, e.babel)), Promise.all(t)
  },
  P2 = e => (e.useBabel ? Qr(Zr, e.babel) : Promise.resolve())
var O2 = M({
  name: 'CodeDemo',
  props: {
    id: { type: String, required: !0 },
    type: { type: String, default: 'normal' },
    title: { type: String, default: '' },
    config: { type: String, default: '' },
    code: { type: String, required: !0 }
  },
  slots: Object,
  setup(e, { slots: t }) {
    const [r, n] = _a(!1),
      E = je(),
      o = je(),
      a = U('0'),
      l = U(!1),
      s = y(() => JSON.parse(e.config ? ha(e.config) : '{}')),
      c = y(() => {
        const f = JSON.parse(ha(e.code))
        return F2(f)
      }),
      d = y(() =>
        e.type === 'react'
          ? w2(c.value, s.value)
          : e.type === 'vue'
          ? R2(c.value, s.value)
          : y2(c.value, s.value)
      ),
      A = y(() => d.value.isLegal),
      B = (f = !1) => {
        const F = E.value.attachShadow({ mode: 'open' }),
          S = document.createElement('div')
        S.classList.add('code-demo-app'),
          F.appendChild(S),
          A.value
            ? (f && (S.innerHTML = d.value.html),
              _2(F, d.value),
              g2(e.id, F, d.value),
              (a.value = '0'))
            : (a.value = 'auto'),
          (l.value = !0)
      },
      p = () => {
        switch (e.type) {
          case 'react':
            return I2(d.value).then(() => B())
          case 'vue':
            return L2(d.value).then(() => B())
          default:
            return P2(d.value).then(() => B(!0))
        }
      }
    return (
      se(() => {
        setTimeout(() => {
          p()
        }, 800)
      }),
      () => {
        var f
        return u('div', { class: 'vp-code-demo', id: e.id }, [
          u('div', { class: 'vp-code-demo-header' }, [
            d.value.isLegal
              ? u('button', {
                  type: 'button',
                  title: 'toggle',
                  'aria-hidden': !0,
                  class: [
                    'vp-code-demo-toggle-button',
                    r.value ? 'down' : 'end'
                  ],
                  onClick: () => {
                    ;(a.value = r.value
                      ? '0'
                      : `${o.value.clientHeight + 13.8}px`),
                      n()
                  }
                })
              : null,
            e.title
              ? u(
                  'span',
                  { class: 'vp-code-demo-title' },
                  decodeURIComponent(e.title)
                )
              : null,
            d.value.isLegal && d.value.jsfiddle !== !1
              ? u(
                  'form',
                  {
                    class: 'code-demo-jsfiddle',
                    target: '_blank',
                    action: 'https://jsfiddle.net/api/post/library/pure/',
                    method: 'post'
                  },
                  [
                    u('input', {
                      type: 'hidden',
                      name: 'html',
                      value: d.value.html
                    }),
                    u('input', {
                      type: 'hidden',
                      name: 'js',
                      value: d.value.js
                    }),
                    u('input', {
                      type: 'hidden',
                      name: 'css',
                      value: d.value.css
                    }),
                    u('input', { type: 'hidden', name: 'wrap', value: '1' }),
                    u('input', {
                      type: 'hidden',
                      name: 'panel_js',
                      value: '3'
                    }),
                    u('input', {
                      type: 'hidden',
                      name: 'resources',
                      value: [...d.value.cssLib, ...d.value.jsLib].join(',')
                    }),
                    u('button', {
                      type: 'submit',
                      class: 'jsfiddle-button',
                      innerHTML: m2,
                      'aria-label': 'JSFiddle',
                      'data-balloon-pos': 'up'
                    })
                  ]
                )
              : null,
            !d.value.isLegal || d.value.codepen !== !1
              ? u(
                  'form',
                  {
                    class: 'code-demo-codepen',
                    target: '_blank',
                    action: 'https://codepen.io/pen/define',
                    method: 'post'
                  },
                  [
                    u('input', {
                      type: 'hidden',
                      name: 'data',
                      value: JSON.stringify({
                        html: d.value.html,
                        js: d.value.js,
                        css: d.value.css,
                        js_external: d.value.jsLib.join(';'),
                        css_external: d.value.cssLib.join(';'),
                        layout: d.value.codepenLayout,
                        html_pre_processor: c.value ? c.value.html[1] : 'none',
                        js_pre_processor: c.value
                          ? c.value.js[1]
                          : d.value.jsx
                          ? 'babel'
                          : 'none',
                        css_pre_processor: c.value ? c.value.css[1] : 'none',
                        editors: d.value.codepenEditors
                      })
                    }),
                    u('button', {
                      type: 'submit',
                      innerHTML: f2,
                      class: 'codepen-button',
                      'aria-label': 'Codepen',
                      'data-balloon-pos': 'up'
                    })
                  ]
                )
              : null
          ]),
          l.value ? null : u(Bo, { class: 'vp-code-demo-loading' }),
          u('div', {
            ref: E,
            class: 'vp-code-demo-display',
            style: { display: A.value && l.value ? 'block' : 'none' }
          }),
          u(
            'div',
            { class: 'vp-code-demo-code-wrapper', style: { height: a.value } },
            u(
              'div',
              { ref: o, class: 'vp-code-demo-codes' },
              (f = t.default) == null ? void 0 : f.call(t)
            )
          )
        ])
      }
    )
  }
})
var D8 = {
    x: 0,
    y: 0,
    'line-width': 2,
    'line-length': 40,
    'text-margin': 8,
    'font-size': 14,
    'font-color': '#8DA1AC',
    'line-color': '#8DA1AC',
    'element-color': 'black',
    fill: 'white',
    'yes-text': 'Yes',
    'no-text': 'No',
    'arrow-end': 'block',
    scale: 1
  },
  V2 = {
    ...D8,
    symbols: {
      start: {
        class: 'start-element',
        'font-color': '#fff',
        fill: '#595959',
        'line-width': '0px'
      },
      end: {
        class: 'end-element',
        'font-color': '#fff',
        fill: '#595959',
        'line-width': '0px'
      },
      operation: {
        class: 'operation-element',
        'font-color': '#fff',
        fill: '#1890ff',
        'line-width': '0px'
      },
      inputoutput: {
        class: 'inputoutput-element',
        'font-color': '#fff',
        fill: '#1890ff',
        'line-width': '0px'
      },
      subroutine: {
        class: 'subroutine-element',
        'font-color': '#fff',
        fill: '#FF485E',
        'element-color': '#fff',
        'line-color': 'red'
      },
      condition: {
        class: 'condition-element',
        'font-color': '#fff',
        fill: '#FF485E',
        'line-width': '0px'
      },
      parallel: {
        class: 'parallel-element',
        'font-color': '#fff',
        fill: '#1890ff',
        'line-width': '0px'
      }
    }
  },
  x2 = {
    ...D8,
    'line-width': 1,
    symbols: {
      start: {
        class: 'start-element',
        fill: '#ccc',
        'line-color': '#5c6ac4',
        'font-color': '#000'
      },
      end: {
        class: 'end-element',
        fill: '#ccc',
        'line-color': '#5c6ac4',
        'font-color': '#000'
      },
      operation: {
        class: 'operation-element',
        fill: '#f1f1f1',
        'line-color': '#5c6ac4',
        'font-color': '#000'
      },
      inputoutput: {
        class: 'inputoutput-element',
        fill: '#f1f1f1',
        'line-color': '#5c6ac4',
        'font-color': '#000'
      },
      subroutine: {
        class: 'subroutine-element',
        fill: '#f1f1f1',
        'line-color': '#5c6ac4',
        'font-color': '#000'
      },
      condition: {
        class: 'condition-element',
        fill: '#f1f1f1',
        'line-color': '#5c6ac4',
        'font-color': '#000'
      },
      parallel: {
        class: 'parallel-element',
        fill: '#f1f1f1',
        'line-color': '#5c6ac4',
        'font-color': '#000'
      }
    }
  },
  k2 = {
    ...D8,
    symbols: {
      start: {
        class: 'start-element',
        'font-color': '#fff',
        fill: '#2F495F',
        'line-width': '0px'
      },
      end: {
        class: 'end-element',
        'font-color': '#fff',
        fill: '#2F495F',
        'line-width': '0px'
      },
      operation: {
        class: 'operation-element',
        'font-color': '#fff',
        fill: '#00BC7D',
        'line-width': '0px'
      },
      inputoutput: {
        class: 'inputoutput-element',
        'font-color': '#fff',
        fill: '#EB4D5D',
        'line-width': '0px'
      },
      subroutine: {
        class: 'subroutine-element',
        'font-color': '#fff',
        fill: '#937AC4',
        'element-color': '#fff',
        'line-color': 'red'
      },
      condition: {
        class: 'condition-element',
        'font-color': '#fff',
        fill: '#FFB500',
        'line-width': '0px'
      },
      parallel: {
        class: 'parallel-element',
        'font-color': '#fff',
        fill: '#2F495F',
        'line-width': '0px'
      }
    }
  }
const ul = { ant: V2, vue: k2, pie: x2 }
var M2 = M({
  name: 'FlowChart',
  props: {
    code: { type: String, required: !0 },
    id: { type: String, required: !0 },
    preset: { type: String, default: 'vue' }
  },
  setup(e) {
    let t = null
    const r = je(),
      n = U(!0),
      E = U(1),
      o = y(
        () =>
          ul[e.preset] ||
          (console.warn(`[md-enhance:flowchart] Unknown preset: ${e.preset}`),
          ul.vue)
      ),
      a = l => (l < 419 ? 0.8 : l > 1280 ? 1 : 0.9)
    return (
      se(() => {
        Promise.all([
          i(() => import('./flowchart-d65a1d8e.js'), []),
          new Promise(l => setTimeout(l, 800))
        ]).then(([{ parse: l }]) => {
          ;(t = l(ha(e.code))),
            (E.value = a(window.innerWidth)),
            (n.value = !1),
            t.draw(e.id, { ...o.value, scale: E.value })
        }),
          Ne(
            'resize',
            Md(() => {
              if (t) {
                const l = a(window.innerWidth)
                E.value !== l &&
                  ((E.value = l), t.draw(e.id, { ...o.value, scale: l }))
              }
            }, 100)
          )
      }),
      () => [
        n.value ? u(Bo, { class: 'flowchart-loading', height: 192 }) : null,
        u('div', {
          ref: r,
          class: ['flowchart-wrapper', e.preset],
          id: e.id,
          style: { display: n.value ? 'none' : 'block' }
        })
      ]
    )
  }
})
const jo = hn('VUEPRESS_TAB_STORE', {})
var $2 = M({
  name: 'Tabs',
  props: {
    active: { type: Number, default: 0 },
    data: { type: Array, required: !0 },
    id: { type: String, required: !0 },
    tabId: { type: String, default: '' }
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = U(e.active),
      n = je([]),
      E = () => {
        e.tabId && (jo.value[e.tabId] = e.data[r.value].id)
      },
      o = (c = r.value) => {
        ;(r.value = c < n.value.length - 1 ? c + 1 : 0),
          n.value[r.value].focus()
      },
      a = (c = r.value) => {
        ;(r.value = c > 0 ? c - 1 : n.value.length - 1),
          n.value[r.value].focus()
      },
      l = (c, d) => {
        c.key === ' ' || c.key === 'Enter'
          ? (c.preventDefault(), (r.value = d))
          : c.key === 'ArrowRight'
          ? (c.preventDefault(), o())
          : c.key === 'ArrowLeft' && (c.preventDefault(), a()),
          E()
      },
      s = () => {
        if (e.tabId) {
          const c = e.data.findIndex(({ id: d }) => jo.value[e.tabId] === d)
          if (c !== -1) return c
        }
        return e.active
      }
    return (
      se(() => {
        ;(r.value = s()),
          ae(
            () => jo.value[e.tabId],
            (c, d) => {
              if (e.tabId && c !== d) {
                const A = e.data.findIndex(({ id: B }) => B === c)
                A !== -1 && (r.value = A)
              }
            }
          )
      }),
      () =>
        e.data.length
          ? u('div', { class: 'vp-tabs' }, [
              u(
                'div',
                { class: 'vp-tabs-nav', role: 'tablist' },
                e.data.map(({ id: c }, d) => {
                  const A = d === r.value
                  return u(
                    'button',
                    {
                      type: 'button',
                      ref: B => {
                        B && (n.value[d] = B)
                      },
                      class: ['vp-tab-nav', { active: A }],
                      role: 'tab',
                      'aria-controls': `tab-${e.id}-${d}`,
                      'aria-selected': A,
                      onClick: () => {
                        ;(r.value = d), E()
                      },
                      onKeydown: B => l(B, d)
                    },
                    t[`title${d}`]({ value: c, isActive: A })
                  )
                })
              ),
              e.data.map(({ id: c }, d) => {
                const A = d === r.value
                return u(
                  'div',
                  {
                    class: ['vp-tab', { active: A }],
                    id: `tab-${e.id}-${d}`,
                    role: 'tabpanel',
                    'aria-expanded': A
                  },
                  t[`tab${d}`]({ value: c, isActive: A })
                )
              })
            ])
          : null
    )
  }
})
const j2 = ut({
  enhance: ({ app: e }) => {
    e.component('CodeTabs', v2),
      it('CodeGroup', e) || e.component('CodeGroup', p2),
      it('CodeGroupItem', e) || e.component('CodeGroupItem', Q5),
      e.component('CodeDemo', O2),
      e.component('FlowChart', M2),
      e.component('Tabs', $2)
  },
  setup: () => {}
})
let N2 = {}
const rc = Symbol(''),
  H2 = () => me(rc),
  J2 = e => {
    e.provide(rc, N2)
  }
const z2 = '.theme-hope-content :not(a) > img:not([no-view])',
  U2 = {
    '/': {
      closeTitle: '关闭',
      downloadTitle: '下载图片',
      fullscreenTitle: '切换全屏',
      zoomTitle: '缩放',
      arrowPrevTitle: '上一个 (左箭头)',
      arrowNextTitle: '下一个 (右箭头)'
    }
  },
  q2 = 800,
  W2 =
    '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',
  K2 = e =>
    Ee(e)
      ? Array.from(document.querySelectorAll(e))
      : e.map(t => Array.from(document.querySelectorAll(t))).flat(),
  nc = e =>
    new Promise((t, r) => {
      e.complete
        ? t({
            type: 'image',
            element: e,
            src: e.src,
            width: e.naturalWidth,
            height: e.naturalHeight,
            alt: e.alt,
            msrc: e.src
          })
        : ((e.onload = () => t(nc(e))), (e.onerror = n => r(n)))
    }),
  G2 = () => {
    const { isSupported: e, toggle: t } = _8(),
      r = H2(),
      n = $r(U2),
      E = de()
    let o
    const a = s => {
        s.on('uiRegister', () => {
          e &&
            s.ui.registerElement({
              name: 'fullscreen',
              order: 7,
              isButton: !0,
              html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',
              onClick: () => {
                t()
              }
            }),
            s.ui.registerElement({
              name: 'download',
              order: 8,
              isButton: !0,
              tagName: 'a',
              html: {
                isCustomSVG: !0,
                inner:
                  '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',
                outlineID: 'pswp__icn-download'
              },
              onInit: (c, d) => {
                c.setAttribute('download', ''),
                  c.setAttribute('target', '_blank'),
                  c.setAttribute('rel', 'noopener'),
                  d.on('change', () => {
                    c.setAttribute('href', d.currSlide.data.src)
                  })
              }
            }),
            s.ui.registerElement({
              name: 'bulletsIndicator',
              className: 'photo-swipe-bullets-indicator',
              appendTo: 'wrapper',
              onInit: (c, d) => {
                const A = []
                let B = -1
                for (let p = 0; p < d.getNumItems(); p++) {
                  const f = document.createElement('div')
                  ;(f.className = 'photo-swipe-bullet'),
                    (f.onclick = F => {
                      d.goTo(A.indexOf(F.target))
                    }),
                    A.push(f),
                    c.appendChild(f)
                }
                d.on('change', () => {
                  B >= 0 && A[B].classList.remove('active'),
                    A[d.currIndex].classList.add('active'),
                    (B = d.currIndex)
                })
              }
            })
        })
      },
      l = () =>
        Promise.all([
          i(() => import('./photoswipe.esm-1464cdb9.js'), []),
          Gt().then(() =>
            new Promise(s => setTimeout(s, q2)).then(() => K2(z2))
          )
        ]).then(([{ default: s }, c]) => {
          const d = c.map(A => ({ html: W2, element: A, msrc: A.src }))
          c.forEach((A, B) => {
            const p = () => {
              ;(o = new s({
                preloaderDelay: 0,
                showHideAnimationType: 'zoom',
                ...n.value,
                ...r,
                dataSource: d,
                index: B,
                closeOnVerticalDrag: !0,
                wheelToZoom: !1
              })),
                a(o),
                o.addFilter('thumbEl', () => A),
                o.addFilter('placeholderSrc', () => A.src),
                o.init()
            }
            ;(A.style.cursor = 'zoom-in'),
              A.addEventListener('click', () => {
                p()
              }),
              A.addEventListener('keypress', ({ key: f }) => {
                f === 'Enter' && p()
              })
          }),
            c.forEach((A, B) => {
              nc(A).then(p => {
                d.splice(B, 1, p), o == null || o.refreshSlideContent(B)
              })
            })
        })
    se(() => {
      Ne('wheel', () => {
        o == null || o.close()
      }),
        l(),
        ae(
          () => E.value.path,
          () => l()
        )
    })
  }
var X2 = ut({
  enhance: ({ app: e }) => {
    J2(e)
  },
  setup: () => {
    G2()
  }
})
const Ec = () => {
    const e = de()
    return y(() => e.value.readingTime ?? null)
  },
  Fa =
    typeof {
      '/': {
        word: '约 $word 字',
        less1Minute: '小于 1 分钟',
        time: '大约 $time 分钟'
      }
    } > 'u'
      ? null
      : {
          '/': {
            word: '约 $word 字',
            less1Minute: '小于 1 分钟',
            time: '大约 $time 分钟'
          }
        },
  oc = (e, t) => {
    const { minutes: r, words: n } = e,
      { less1Minute: E, word: o, time: a } = t
    return {
      time: r < 1 ? E : a.replace('$time', Math.round(r).toString()),
      words: o.replace('$word', n.toString())
    }
  },
  dl = { words: '', time: '' },
  ac = () => (Fa ? $r(Fa) : y(() => null)),
  Y2 = () => {
    if (typeof Fa > 'u') return y(() => dl)
    const e = Ec(),
      t = ac()
    return y(() => (e.value && t.value ? oc(e.value, t.value) : dl))
  },
  fr = () => K5(),
  ue = () => q6(),
  _n = () => y(() => !!fr().value.pure)
var No = M({ name: 'EmptyComponent', setup: () => () => null })
const Q2 = '719px',
  Z2 = '1440px',
  eA = 'false',
  b8 = { mobileBreakPoint: Q2, pcBreakPoint: Z2, enableThemeColor: eA },
  y8 = {
    '/杂七杂八/': [
      {
        text: '开发工具',
        prefix: '开发工具/',
        collapsible: !0,
        icon: 'gongju',
        link: '开发工具/',
        children: [
          '阿里云对象存储图床搭建',
          'IntelliJ软件插件',
          'IntelliJ系软件破解',
          'git',
          'homebrew'
        ]
      },
      {
        text: '总结',
        prefix: '总结/',
        collapsible: !0,
        icon: 'zongjiehuibao',
        link: '总结/',
        children: ['菜鸟前端的22年总结']
      },
      {
        text: 'mac',
        prefix: 'mac/',
        collapsible: !0,
        icon: 'mac',
        link: 'mac/',
        children: ['mac软件', 'mac提示app已损坏解决方法']
      },
      {
        text: 'Switch',
        prefix: 'switch/',
        collapsible: !0,
        icon: 'switch',
        link: 'switch/',
        children: ['游戏墙', '游戏评价']
      }
    ],
    '/开发日志/': [
      '常见的网站安全问题',
      '九种跨域解决方案',
      '开发常用代码片段',
      '前端缓存',
      '前端跨页面通信',
      '前端性能优化总结',
      '如何精确统计页面停留时长',
      '压缩图片',
      '一行代码全站进入悼念模式',
      {
        text: 'CSS',
        prefix: 'CSS/',
        collapsible: !0,
        icon: 'css',
        children: [
          'CSS文本溢出处理方式',
          '利用calc函数轻松实现各种宽高自适应',
          'CSS图片底侧空白缝隙解决方案',
          'Web移动端适配的一些思考'
        ]
      },
      'H5微信分享',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/http%E6%96%AD%E7%82%B9%E7%BB%AD%E4%BC%A0%E5%8E%9F%E7%90%86_http%E5%A4%B4Range%E3%80%81Content-Range.html',
      {
        text: 'J S',
        prefix: 'JS/',
        collapsible: !0,
        children: [
          '数组对象对比找出差异项',
          '动态修改favicon网站图标地址',
          '关于async和await',
          '理解js事件循环',
          '数组对象根据对象中指定的属性去重',
          '数组对象根据数据项状态属性如何筛选数据',
          '数组delete元素',
          '在输入框的光标处插入内容',
          '重新理解闭包',
          '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/Array.prototype.slice.call()_Array.from()%E7%9A%84%E5%BA%94%E7%94%A8%E5%92%8C%E7%90%86%E8%A7%A3.html',
          'js的严格模式'
        ]
      },
      {
        text: 'React',
        prefix: 'React/',
        collapsible: !0,
        children: ['Hook对比HOC和renderProps']
      },
      {
        text: 'Vue',
        prefix: 'Vue/',
        collapsible: !0,
        children: [
          'vue2如何实现界面刷新',
          '利用tooltip实现文本超出提示',
          'element-ui表格中修改switch开关状态的二种方法',
          'element-ui清除表单的奇怪现象',
          'element-ui日期选择器禁止选择指定日期',
          'element-ui树控件自动定位到当前选择项',
          'v-modelSync修饰符使用和原理',
          'Vue 项目总结',
          'vue2echarts数据报表项目学习心得',
          'vue2和vue3的v-if与v-for的优先级差异',
          'vue2实现滚动窗口同步滚动',
          'vue2虚拟列表实现',
          'vue2中的css深度选择器',
          'vue2中使用lodash实现节流防抖',
          'vue3vite3.0项目支持路径别名',
          'vue3开发RABC权限管理系统',
          'vue开源项目库'
        ]
      },
      'WebSocket的嵌入',
      'window.btoa 和 window.atob方法实现编码与解码'
    ],
    '/数据结构算法/': [],
    '/前端开发/': [
      {
        text: '',
        prefix: '前端框架/',
        collapsible: !0,
        children: [
          '',
          {
            text: 'React',
            prefix: 'React/',
            collapsible: !0,
            icon: 'react',
            children: [
              'JSX核心语法',
              'React中的CSS',
              'React组件化开发',
              'ReactRouter',
              'Redux',
              'React中axios',
              'React的过渡动画',
              'ReactHook',
              'React与TypeScript',
              {
                text: 'Next.js',
                prefix: 'Next.js/',
                collapsible: !0,
                icon: 'vercel',
                link: 'Next.js/',
                children: ['基础知识', '官网博客案例实现']
              },
              'React',
              'react学习路线',
              'React总结'
            ]
          },
          {
            text: 'Vue',
            prefix: 'Vue/',
            collapsible: !0,
            icon: 'vue',
            children: [
              'Vue核心',
              'Vue组件化编程',
              'VueRouter',
              'VueX',
              'Vue3',
              'Pinia',
              'Vue3.0新特性'
            ]
          }
        ]
      },
      {
        text: '代码规范',
        prefix: '代码规范/',
        collapsible: !0,
        children: [
          'CSS 书写规范建议',
          'JS模块规范：AMD、UMD、CMD、commonJS、ES6 module',
          'commonJs详解'
        ]
      },
      {
        text: '前端工程化',
        prefix: '前端工程化/',
        collapsible: !0,
        children: [
          '阿里云轻量应用服务器防火墙配置',
          '阿里云linux服务器安装桌面',
          '服务器如何设置服务自动启动进程',
          '理解serverless无服务架构',
          '删除RN安卓开发环境',
          '微服务架构和分布式架构的区别是什么',
          'Git版本控制工具',
          'Linux',
          'mac安装pod流程',
          'nginx配置',
          'vscode常用插件',
          'vue-cli3.X自动部署项目到服务器',
          '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack_babel.html',
          'Webpack4.0',
          'Webpack5.0学习总结'
        ]
      },
      {
        text: '前端基石',
        prefix: '前端基石/',
        collapsible: !0,
        children: [
          {
            text: 'C S S3',
            prefix: 'CSS3/',
            collapsible: !0,
            children: [
              '基础与盒模型',
              '浮动与定位',
              '边框圆角与盒子阴影',
              '过渡与动画',
              '背景与渐变',
              '2D与3D转换',
              '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/20_%20css%E9%AB%98%E9%A2%91%E5%AE%9E%E7%94%A8%E7%89%87%E6%AE%B5.html',
              '踩雷css',
              'CSS八种让人眼前一亮的HOVER效果',
              'less'
            ]
          },
          {
            text: 'H T M L5',
            prefix: 'HTML5/',
            collapsible: !0,
            children: [
              '前端动画',
              'H5C3总结',
              'H5CSS3',
              'HTML5',
              'HTML5移动开发UI框架'
            ]
          },
          {
            text: 'J S基础',
            prefix: 'JS基础/',
            collapsible: !0,
            children: [
              '变量与数据类型',
              '操作符',
              '函数',
              '流程控制语句',
              '面向对象',
              '难点总结',
              '数组',
              '正则表达式',
              'Ajax',
              'BOM',
              'Canvas',
              'DOM',
              'JavaScript23种设计模式',
              'JavaScript函数库',
              'Javascript异步编程的4种方法',
              'js方法手动实现',
              'Ts核心知识点总结'
            ]
          }
        ]
      },
      {
        text: '前端进阶',
        prefix: '前端进阶/',
        collapsible: !0,
        children: [
          {
            text: '数据结构算法',
            prefix: '数据结构算法/',
            collapsible: !0,
            icon: 'suanfa',
            children: [
              '时间空间复杂度',
              '栈',
              '队列',
              '集合',
              '链表',
              '树',
              '图',
              '字典'
            ]
          },
          '微信小程序',
          {
            text: '移动开发',
            prefix: '移动开发/',
            collapsible: !0,
            children: [
              '打包app',
              '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E7%9A%84%E4%BD%BF%E7%94%A8vue_Dcloud%EF%BC%88Hbuild%EF%BC%89%E5%BC%80%E5%8F%91%E6%B7%B7%E5%90%88app.html',
              '移动端真机调试spy-debugger',
              '移动Web',
              '移动Web开发入门',
              {
                text: 'React Native',
                prefix: 'ReactNative/',
                collapsible: !0,
                icon: 'react',
                children: ['React-Native', 'React-Native总结']
              }
            ]
          },
          {
            text: '重学前端',
            prefix: '重学前端/',
            collapsible: !0,
            children: ['JavaScript']
          },
          {
            text: 'E S6',
            prefix: 'ES6/',
            collapsible: !0,
            children: [
              '遍历器与for...of循环',
              '对象字面量的增强与函数参数的默认值',
              '解构赋值',
              '模板字符串与箭头函数',
              '剩余参数与展开运算符',
              'Class类',
              'ES6的新增方法',
              'Generator',
              'let和const',
              'Module模块',
              'Promise',
              'Proxy和Reflect',
              'Set和Map数据结构'
            ]
          },
          {
            text: 'JS高级',
            prefix: 'JS高级/',
            collapsible: !0,
            icon: 'javascript',
            link: 'JS高级/',
            children: ['深入理解javascript原型和闭包']
          },
          {
            text: 'TypeScript',
            prefix: 'TypeScript/',
            collapsible: !0,
            icon: 'typescript',
            link: 'TypeScript/',
            children: ['TS基础', 'TS进阶']
          }
        ]
      },
      {
        text: '前端图形',
        prefix: '前端图形/',
        collapsible: !0,
        children: [
          {
            text: '玩转 C S S艺术之美',
            prefix: '玩转CSS艺术之美/',
            collapsible: !0,
            children: ['浏览器', '回流重绘']
          },
          {
            text: 'C S S世界阅读笔记',
            prefix: 'CSS世界阅读笔记/',
            collapsible: !0,
            children: ['概述']
          },
          {
            text: 'Canvas',
            prefix: 'canvas/',
            collapsible: !0,
            children: ['canvas基础']
          },
          'Flex布局',
          'Sass',
          {
            text: 'three.js',
            prefix: 'Three.js/',
            collapsible: !0,
            icon: 'three',
            link: 'Three.js/',
            children: [
              '开发环境搭建',
              'Three开发入门与调试设置',
              'Threejs物体',
              '材质与纹理',
              'PBR材质纹理',
              '灯光与阴影'
            ]
          }
        ]
      },
      {
        text: '转载',
        prefix: '转载/',
        collapsible: !0,
        children: [
          'vue与react全面对比',
          '前端工程师自检清单',
          'vuex和redux的数据持久化缓存方案'
        ]
      }
    ],
    '/基础知识/': [
      '本地存储',
      {
        text: '计算机网络',
        prefix: '计算机网络/',
        collapsible: !0,
        children: ['概述篇']
      },
      {
        text: '浏览器工作原理与实践',
        prefix: '浏览器工作原理与实践/',
        collapsible: !0,
        children: ['01', '思维导图']
      },
      '前后端数据交互',
      {
        text: '算法',
        prefix: '算法/',
        collapsible: !0,
        children: ['常见算法相关的JavaScript实现', 'Crypto-js---加密算法库']
      }
    ],
    '/后端开发/': [
      {
        text: '数据库',
        prefix: '数据库/',
        collapsible: !0,
        icon: 'node',
        children: ['深入浅出mongoose', 'MongoDB', 'mysql']
      },
      {
        text: 'node',
        prefix: 'node/',
        collapsible: !0,
        icon: 'node',
        children: [
          'node基础知识以及常用库',
          'koa',
          {
            text: 'Nest',
            prefix: 'nest/',
            collapsible: !0,
            icon: 'nest',
            children: ['开发环境搭建', '编程思想']
          },
          'Node'
        ]
      },
      {
        text: 'Python',
        prefix: 'python/',
        collapsible: !0,
        children: ['python']
      }
    ]
  },
  ic = e => {
    const { icon: t = '', color: r, size: n } = e,
      E = {}
    return (
      r && (E.color = r),
      n && (E.height = Number.isNaN(Number(n)) ? n : `${n}px`),
      pr(t)
        ? u('img', { class: 'icon', src: t, 'no-view': '', style: E })
        : po(t)
        ? u('img', { class: 'icon', src: Se(t), 'no-view': '', style: E })
        : u(lt('FontIcon'), e)
    )
  }
ic.displayName = 'HopeIcon'
var Ye = ic,
  ye = (e => (
    (e.type = 'y'),
    (e.title = 't'),
    (e.shortTitle = 's'),
    (e.icon = 'i'),
    (e.author = 'a'),
    (e.date = 'd'),
    (e.localizedDate = 'l'),
    (e.category = 'c'),
    (e.tag = 'g'),
    (e.isEncrypted = 'n'),
    (e.isOriginal = 'o'),
    (e.readingTime = 'r'),
    (e.excerpt = 'e'),
    (e.sticky = 'u'),
    (e.cover = 'v'),
    (e.index = 'I'),
    (e.order = 'O'),
    e
  ))(ye || {}),
  lc = (e => (
    (e.article = 'a'), (e.home = 'h'), (e.slide = 's'), (e.page = 'p'), e
  ))(lc || {})
const en = (e, t, r = !1) => {
    const n = encodeURI(t)
    let E = un(e, b5(n))
    E.name === '404' && (E = un(e, n))
    const { fullPath: o, meta: a, name: l } = E
    return {
      text: !r && a[ye.shortTitle] ? a[ye.shortTitle] : a[ye.title] || t,
      link: l === '404' ? t : o,
      ...(a[ye.icon] ? { icon: a[ye.icon] } : {})
    }
  },
  lE = () => {
    const e = qe(),
      t = St()
    return r => {
      if (r)
        if (po(r)) t.path !== r && e.push(r)
        else if (pr(r) || Ws(r)) window && window.open(r)
        else {
          const n = t.path.slice(0, t.path.lastIndexOf('/'))
          e.push(`${n}/${encodeURI(r)}`)
        }
    }
  },
  sc = () => {
    const e = ue(),
      t = Fe()
    return y(() => {
      const { author: r } = t.value
      return r ? Xn(r) : r === !1 ? [] : Xn(e.value.author, !1)
    })
  },
  tA = () => {
    const e = Fe()
    return y(() =>
      C5(e.value.category).map(t => {
        var r, n
        return {
          name: t,
          path:
            ((n =
              (r = me(Symbol.for('categoryMap'))) == null
                ? void 0
                : r.value.map[t]) == null
              ? void 0
              : n.path) || ''
        }
      })
    )
  },
  rA = () => {
    const e = Fe()
    return y(() =>
      S5(e.value.tag).map(t => {
        var r, n
        return {
          name: t,
          path:
            ((n =
              (r = me(Symbol.for('tagMap'))) == null
                ? void 0
                : r.value.map[t]) == null
              ? void 0
              : n.path) || ''
        }
      })
    )
  },
  nA = () => {
    const e = Fe(),
      t = de()
    return y(() => {
      const r = B8(e.value.date)
      if (r) return r
      const { createdTime: n } = t.value.git || {}
      return n ? new Date(n) : null
    })
  },
  EA = () => {
    const e = ue(),
      t = de(),
      r = Fe(),
      n = sc(),
      E = tA(),
      o = rA(),
      a = nA(),
      l = Ec(),
      s = Y2(),
      c = y(() => ({
        author: n.value,
        category: E.value,
        date: a.value,
        localizedDate: t.value.localizedDate,
        tag: o.value,
        isOriginal: r.value.isOriginal || !1,
        readingTime: l.value,
        readingTimeLocale: s.value,
        pageview: 'pageview' in r.value ? r.value.pageview : !0
      })),
      d = y(() =>
        'pageInfo' in r.value
          ? r.value.pageInfo
          : 'pageInfo' in e.value
          ? e.value.pageInfo
          : null
      )
    return { info: c, items: d }
  },
  { mobileBreakPoint: oA, pcBreakPoint: aA } = b8,
  Al = e => (e.endsWith('px') ? Number(e.slice(0, -2)) : null),
  sE = () => {
    const e = U(!1),
      t = U(!1),
      r = () => {
        ;(e.value = window.innerWidth <= (Al(oA) ?? 719)),
          (t.value = window.innerWidth >= (Al(aA) ?? 1440))
      }
    return (
      se(() => {
        r(), Ne('resize', r, !1), Ne('orientationchange', r, !1)
      }),
      { isMobile: e, isPC: t }
    )
  },
  cc = Symbol(''),
  cE = () => {
    const e = me(cc)
    if (!e) throw new Error('useDarkmode() is called without provider.')
    return e
  },
  iA = e => {
    const t = fr(),
      r = e6(),
      n = hn('vuepress-theme-hope-scheme', 'auto'),
      E = y(() => t.value.darkmode || 'switch'),
      o = y(() => {
        const l = E.value
        return l === 'disable'
          ? !1
          : l === 'enable'
          ? !0
          : l === 'auto'
          ? r.value
          : l === 'toggle'
          ? n.value === 'dark'
          : n.value === 'dark' || (n.value === 'auto' && r.value)
      }),
      a = y(() => {
        const l = E.value
        return l === 'switch' || l === 'toggle'
      })
    e.provide(cc, { canToggle: a, config: E, isDarkmode: o, status: n }),
      Object.defineProperties(e.config.globalProperties, {
        $isDarkmode: { get: () => o.value }
      })
  },
  lA = () => {
    const { isDarkmode: e } = cE(),
      t = (r = e.value) =>
        document.documentElement.setAttribute(
          'data-theme',
          r ? 'dark' : 'light'
        )
    se(() => {
      ae(e, t, { immediate: !0 })
    })
  }
var tt = M({
  name: 'AutoLink',
  inheritAttrs: !1,
  props: {
    config: { type: Object, required: !0 },
    exact: Boolean,
    noExternalLinkIcon: Boolean
  },
  emits: ['focusout'],
  slots: Object,
  setup(e, { attrs: t, emit: r, slots: n }) {
    const E = St(),
      o = t5(),
      a = Mr(e, 'config'),
      l = y(() => pr(a.value.link)),
      s = y(() => Ws(a.value.link) || M1(a.value.link)),
      c = y(() =>
        s.value ? void 0 : a.value.target || (l.value ? '_blank' : void 0)
      ),
      d = y(() => c.value === '_blank'),
      A = y(() => !l.value && !s.value && !d.value),
      B = y(() =>
        s.value
          ? void 0
          : a.value.rel || (d.value ? 'noopener noreferrer' : void 0)
      ),
      p = y(() => a.value.ariaLabel || a.value.text),
      f = y(() => {
        if (e.exact) return !1
        const S = st(o.value.locales)
        return S.length
          ? S.every(D => D !== a.value.link)
          : a.value.link !== '/'
      }),
      F = y(() =>
        A.value
          ? a.value.activeMatch
            ? new RegExp(a.value.activeMatch).test(E.path)
            : f.value
            ? cn(E.path, a.value.link)
            : E.path === a.value.link
          : !1
      )
    return () => {
      const { before: S, after: D, default: b } = n,
        { text: g, icon: _, link: w } = a.value
      return A.value
        ? u(
            xe,
            {
              to: w,
              'aria-label': p.value,
              ...t,
              class: ['nav-link', { active: F.value }, t.class],
              onFocusout: () => r('focusout')
            },
            () =>
              b
                ? b()
                : [S ? S() : u(Ye, { icon: _ }), g, D == null ? void 0 : D()]
          )
        : u(
            'a',
            {
              href: w,
              rel: B.value,
              target: c.value,
              'aria-label': p.value,
              ...t,
              class: ['nav-link', t.class],
              onFocusout: () => r('focusout')
            },
            b
              ? b()
              : [
                  S ? S() : u(Ye, { icon: _ }),
                  g,
                  e.noExternalLinkIcon ? null : u(q5),
                  D == null ? void 0 : D()
                ]
          )
    }
  }
})
const dn = (e, t, r = !1) =>
    'activeMatch' in t
      ? new RegExp(t.activeMatch).test(e.path)
      : p8(e, t.link)
      ? !0
      : t.children && !r
      ? t.children.some(n => dn(e, n))
      : !1,
  uc = (e, t) =>
    t.type === 'group'
      ? t.children.some(r =>
          r.type === 'group' ? uc(e, r) : r.type === 'page' && dn(e, r, !0)
        ) ||
        ('prefix' in t && p8(e, t.prefix))
      : !1,
  dc = (e, t) =>
    Ee(e.link)
      ? u(tt, { ...t, config: e })
      : u('p', t, [u(Ye, { icon: e.icon }), e.text]),
  Ac = e => {
    const t = St()
    return e
      ? u(
          'ul',
          { class: 'vp-sidebar-sub-headers' },
          e.map(r => {
            const n = dn(t, r, !0)
            return u('li', { class: 'vp-sidebar-sub-header' }, [
              dc(r, {
                class: ['vp-sidebar-link', 'vp-heading', { active: n }]
              }),
              Ac(r.children)
            ])
          })
        )
      : null
  },
  Ho = (e = '', t = '') => (po(t) ? t : `${qs(e)}${t}`),
  sA = (e, t) => {
    const r = de()
    return {
      type: 'heading',
      text: e.title,
      link: `${r.value.path}#${e.slug}`,
      children: C8(e.children, t)
    }
  },
  C8 = (e, t) => (t > 0 ? e.map(r => sA(r, t - 1)) : []),
  Bc = e => {
    const t = de()
    return C8(t.value.headers, e)
  },
  Da = (e, t, r = '') => {
    const n = qe(),
      E = de(),
      o = (a, l = r) => {
        var s
        const c = Ee(a)
          ? en(n, Ho(l, a))
          : a.link
          ? { ...a, ...(zE(a.link) ? {} : { link: en(n, Ho(l, a.link)).link }) }
          : a
        if ('children' in c) {
          const d = Ho(l, c.prefix),
            A = c.children === 'structure' ? y8[d] : c.children
          return {
            type: 'group',
            ...c,
            prefix: d,
            children: A.map(B => o(B, d))
          }
        }
        return {
          type: 'page',
          ...c,
          children:
            c.link === E.value.path
              ? C8(
                  ((s = E.value.headers[0]) == null ? void 0 : s.level) === 1
                    ? E.value.headers[0].children
                    : E.value.headers,
                  t
                )
              : []
        }
      }
    return e.map(a => o(a))
  },
  cA = (e, t) => {
    const r = de(),
      n = st(e).sort((E, o) => o.length - E.length)
    for (const E of n)
      if (cn(decodeURI(r.value.path), E)) {
        const o = e[E]
        return o
          ? Da(o === 'structure' ? y8[E] : o === 'heading' ? Bc(t) : o, t, E)
          : []
      }
    return console.warn(`${r.value.path} is missing sidebar config.`), []
  },
  uA = (e, t) => {
    const r = Vt()
    return e === !1
      ? []
      : e === 'heading'
      ? Bc(t)
      : e === 'structure'
      ? Da(y8[r.value], t, r.value)
      : z(e)
      ? Da(e, t)
      : EE(e)
      ? cA(e, t)
      : []
  },
  vc = Symbol(''),
  dA = () => {
    const e = Fe(),
      t = ue(),
      r = y(() =>
        e.value.home ? !1 : e.value.sidebar ?? t.value.sidebar ?? 'structure'
      ),
      n = y(() => e.value.headerDepth ?? t.value.headerDepth ?? 2),
      E = y(() => uA(r.value, n.value))
    Dt(vc, E)
  },
  S8 = () => {
    const e = me(vc)
    if (!e) throw new Error('useSidebarItems() is called without provider.')
    return e
  }
var AA = M({
    name: 'PageFooter',
    setup() {
      const e = Fe(),
        t = ue(),
        r = sc(),
        n = y(() => {
          const { copyright: a, footer: l } = e.value
          return l !== !1 && !!(a || l || t.value.displayFooter)
        }),
        E = y(() => {
          const { footer: a } = e.value
          return a === !1 ? !1 : Ee(a) ? a : t.value.footer || ''
        }),
        o = y(() =>
          'copyright' in e.value
            ? e.value.copyright
            : 'copyright' in t.value
            ? t.value.copyright
            : r.value.length
            ? `Copyright © ${new Date().getFullYear()} ${r.value[0].name}`
            : !1
        )
      return () =>
        n.value
          ? u('footer', { class: 'vp-footer-wrapper' }, [
              E.value
                ? u('div', { class: 'vp-footer', innerHTML: E.value })
                : null,
              o.value
                ? u('div', { class: 'vp-copyright', innerHTML: o.value })
                : null
            ])
          : null
    }
  }),
  BA = M({
    name: 'NavbarDropdownLink',
    props: { config: { type: Object, required: !0 } },
    slots: Object,
    setup(e, { slots: t }) {
      const r = de(),
        n = Mr(e, 'config'),
        E = y(() => n.value.ariaLabel || n.value.text),
        o = U(!1)
      ae(
        () => r.value.path,
        () => {
          o.value = !1
        }
      )
      const a = l => {
        l.detail === 0 && (o.value = !o.value)
      }
      return () => {
        var l
        return u('div', { class: ['dropdown-wrapper', { open: o.value }] }, [
          u(
            'button',
            {
              type: 'button',
              class: 'dropdown-title',
              'aria-label': E.value,
              onClick: a
            },
            [
              ((l = t.title) == null ? void 0 : l.call(t)) ||
                u('span', { class: 'title' }, [
                  u(Ye, { icon: n.value.icon }),
                  e.config.text
                ]),
              u('span', { class: 'arrow' }),
              u(
                'ul',
                { class: 'nav-dropdown' },
                n.value.children.map((s, c) => {
                  const d = c === n.value.children.length - 1
                  return u(
                    'li',
                    { class: 'dropdown-item' },
                    'children' in s
                      ? [
                          u(
                            'h4',
                            { class: 'dropdown-subtitle' },
                            s.link
                              ? u(tt, {
                                  config: s,
                                  onFocusout: () => {
                                    s.children.length === 0 &&
                                      d &&
                                      (o.value = !1)
                                  }
                                })
                              : u('span', s.text)
                          ),
                          u(
                            'ul',
                            { class: 'dropdown-subitem-wrapper' },
                            s.children.map((A, B) =>
                              u(
                                'li',
                                { class: 'dropdown-subitem' },
                                u(tt, {
                                  config: A,
                                  onFocusout: () => {
                                    B === s.children.length - 1 &&
                                      d &&
                                      (o.value = !1)
                                  }
                                })
                              )
                            )
                          )
                        ]
                      : u(tt, {
                          config: s,
                          onFocusout: () => {
                            d && (o.value = !1)
                          }
                        })
                  )
                })
              )
            ]
          )
        ])
      }
    }
  })
const pc = (e, t, r = '') =>
    Ee(t)
      ? en(e, `${r}${t}`)
      : 'children' in t
      ? {
          ...t,
          ...(t.link && !zE(t.link) ? en(e, `${r}${t.link}`) : {}),
          children: t.children.map(n => pc(e, n, `${r}${t.prefix || ''}`))
        }
      : { ...t, link: zE(t.link) ? t.link : en(e, `${r}${t.link}`).link },
  fc = () => {
    const e = ue(),
      t = qe(),
      r = () => (e.value.navbar || []).map(E => pc(t, E)),
      n = U(r())
    return (
      ae(e, () => {
        n.value = r()
      }),
      n
    )
  },
  vA = () => {
    const e = ue(),
      t = y(() => e.value.repo || null),
      r = y(() => (t.value ? Sd(t.value) : null)),
      n = y(() => (t.value ? R5(t.value) : null)),
      E = y(() =>
        r.value
          ? e.value.repoLabel ?? (n.value === null ? 'Source' : n.value)
          : null
      )
    return y(() =>
      !r.value || !E.value || e.value.repoDisplay === !1
        ? null
        : { type: n.value || 'Source', label: E.value, link: r.value }
    )
  }
var pA = M({
    name: 'NavScreenDropdown',
    props: { config: { type: Object, required: !0 } },
    setup(e) {
      const t = de(),
        r = Mr(e, 'config'),
        n = y(() => r.value.ariaLabel || r.value.text),
        E = U(!1)
      ae(
        () => t.value.path,
        () => {
          E.value = !1
        }
      )
      const o = (a, l) => l[l.length - 1] === a
      return () => [
        u(
          'button',
          {
            type: 'button',
            class: ['nav-screen-dropdown-title', { active: E.value }],
            'aria-label': n.value,
            onClick: () => {
              E.value = !E.value
            }
          },
          [
            u('span', { class: 'title' }, [
              u(Ye, { icon: r.value.icon }),
              e.config.text
            ]),
            u('span', { class: ['arrow', E.value ? 'down' : 'end'] })
          ]
        ),
        u(
          'ul',
          { class: ['nav-screen-dropdown', { hide: !E.value }] },
          r.value.children.map(a =>
            u(
              'li',
              { class: 'dropdown-item' },
              'children' in a
                ? [
                    u(
                      'h4',
                      { class: 'dropdown-subtitle' },
                      a.link
                        ? u(tt, {
                            config: a,
                            onFocusout: () => {
                              o(a, r.value.children) &&
                                a.children.length === 0 &&
                                (E.value = !1)
                            }
                          })
                        : u('span', a.text)
                    ),
                    u(
                      'ul',
                      { class: 'dropdown-subitem-wrapper' },
                      a.children.map(l =>
                        u(
                          'li',
                          { class: 'dropdown-subitem' },
                          u(tt, {
                            config: l,
                            onFocusout: () => {
                              o(l, a.children) &&
                                o(a, r.value.children) &&
                                (E.value = !1)
                            }
                          })
                        )
                      )
                    )
                  ]
                : u(tt, {
                    config: a,
                    onFocusout: () => {
                      o(a, r.value.children) && (E.value = !1)
                    }
                  })
            )
          )
        )
      ]
    }
  }),
  fA = M({
    name: 'NavScreenLinks',
    setup() {
      const e = fc()
      return () =>
        e.value.length
          ? u(
              'nav',
              { class: 'nav-screen-links' },
              e.value.map(t =>
                u(
                  'div',
                  { class: 'navbar-links-item' },
                  'children' in t ? u(pA, { config: t }) : u(tt, { config: t })
                )
              )
            )
          : null
    }
  })
const mc = () =>
  u(ce, { name: 'dark' }, () =>
    u('path', {
      d: 'M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z'
    })
  )
mc.displayName = 'DarkIcon'
const hc = () =>
  u(ce, { name: 'light' }, () =>
    u('path', {
      d: 'M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z'
    })
  )
hc.displayName = 'LightIcon'
const _c = () =>
  u(ce, { name: 'auto' }, () =>
    u('path', {
      d: 'M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z'
    })
  )
_c.displayName = 'AutoIcon'
const gc = () =>
  u(ce, { name: 'enter-fullscreen' }, () =>
    u('path', {
      d: 'M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z'
    })
  )
gc.displayName = 'EnterFullScreenIcon'
const Fc = () =>
  u(ce, { name: 'cancel-fullscreen' }, () =>
    u('path', {
      d: 'M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z'
    })
  )
Fc.displayName = 'CancelFullScreenIcon'
const Dc = () =>
  u(ce, { name: 'outlook' }, () => [
    u('path', {
      d: 'M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z'
    })
  ])
Dc.displayName = 'OutlookIcon'
var bc = M({
    name: 'AppearanceSwitch',
    setup() {
      const { config: e, status: t } = cE(),
        r = () => {
          e.value === 'switch'
            ? (t.value = { light: 'dark', dark: 'auto', auto: 'light' }[
                t.value
              ])
            : (t.value = t.value === 'light' ? 'dark' : 'light')
        }
      return () =>
        u(
          'button',
          { type: 'button', id: 'appearance-switch', onClick: () => r() },
          [
            u(_c, {
              style: { display: t.value === 'auto' ? 'block' : 'none' }
            }),
            u(mc, {
              style: { display: t.value === 'dark' ? 'block' : 'none' }
            }),
            u(hc, {
              style: { display: t.value === 'light' ? 'block' : 'none' }
            })
          ]
        )
    }
  }),
  mA = M({
    name: 'AppearanceMode',
    setup() {
      const e = ue(),
        { canToggle: t } = cE(),
        r = y(() => e.value.outlookLocales.darkmode)
      return () =>
        t.value
          ? u('div', { class: 'appearance-wrapper' }, [
              u(
                'label',
                { class: 'appearance-title', for: 'appearance-switch' },
                r.value
              ),
              u(bc)
            ])
          : null
    }
  })
const Jo = 'VUEPRESS_THEME_COLOR'
var hA = M({
  name: 'ThemeColorPicker',
  props: { themeColor: { type: Object, required: !0 } },
  setup(e) {
    const t = (r = '') => {
      const n = document.documentElement.classList,
        E = st(e.themeColor)
      if (!r) {
        localStorage.removeItem(Jo), n.remove(...E)
        return
      }
      n.remove(...E.filter(o => o !== r)), n.add(r), localStorage.setItem(Jo, r)
    }
    return (
      se(() => {
        const r = localStorage.getItem(Jo)
        r && t(r)
      }),
      () =>
        u('ul', { id: 'theme-color-picker' }, [
          u('li', u('span', { class: 'theme-color', onClick: () => t() })),
          mn(e.themeColor).map(([r, n]) =>
            u(
              'li',
              u('span', { style: { background: n }, onClick: () => t(r) })
            )
          )
        ])
    )
  }
})
const tn = b8.enableThemeColor === 'true',
  _A = tn ? bd(mn(b8).filter(([e]) => e.startsWith('theme-'))) : {}
var gA = M({
    name: 'ThemeColor',
    setup() {
      const e = ue(),
        t = y(() => e.value.outlookLocales.themeColor)
      return () =>
        tn
          ? u('div', { class: 'theme-color-wrapper' }, [
              u(
                'label',
                { class: 'theme-color-title', for: 'theme-color-picker' },
                t.value
              ),
              u(hA, { themeColor: _A })
            ])
          : null
    }
  }),
  yc = M({
    name: 'ToggleFullScreenButton',
    setup() {
      const e = ue(),
        { isSupported: t, isFullscreen: r, toggle: n } = _8(),
        E = y(() => e.value.outlookLocales.fullscreen)
      return () =>
        t
          ? u('div', { class: 'full-screen-wrapper' }, [
              u(
                'label',
                { class: 'full-screen-title', for: 'full-screen-switch' },
                E.value
              ),
              u(
                'button',
                {
                  type: 'button',
                  id: 'full-screen-switch',
                  class: 'full-screen',
                  ariaPressed: r.value,
                  onClick: () => n()
                },
                r.value ? u(Fc) : u(gc)
              )
            ])
          : null
    }
  }),
  Cc = M({
    name: 'OutlookSettings',
    setup() {
      const e = fr(),
        t = _n(),
        r = y(() => !t.value && e.value.fullscreen)
      return () =>
        u(co, () => [tn ? u(gA) : null, u(mA), r.value ? u(yc) : null])
    }
  }),
  FA = M({
    name: 'NavScreen',
    props: { show: Boolean },
    emits: ['close'],
    slots: Object,
    setup(e, { emit: t, slots: r }) {
      const n = de(),
        { isMobile: E } = sE(),
        o = je(),
        a = M5(o)
      return (
        se(() => {
          ;(o.value = document.body),
            ae(E, l => {
              !l && e.show && ((a.value = !1), t('close'))
            }),
            ae(
              () => n.value.path,
              () => {
                ;(a.value = !1), t('close')
              }
            )
        }),
        fn(() => {
          a.value = !1
        }),
        () =>
          u(
            Ar,
            {
              name: 'fade',
              onEnter: () => {
                a.value = !0
              },
              onAfterLeave: () => {
                a.value = !1
              }
            },
            () => {
              var l, s
              return e.show
                ? u(
                    'div',
                    { id: 'nav-screen' },
                    u('div', { class: 'vp-nav-screen-container' }, [
                      (l = r.before) == null ? void 0 : l.call(r),
                      u(fA),
                      u('div', { class: 'vp-outlook-wrapper' }, u(Cc)),
                      (s = r.after) == null ? void 0 : s.call(r)
                    ])
                  )
                : null
            }
          )
      )
    }
  }),
  DA = M({
    name: 'NavbarBrand',
    setup() {
      const e = Vt(),
        t = oE(),
        r = ue(),
        n = y(() => r.value.home || e.value),
        E = y(() => t.value.title),
        o = y(() => r.value.navTitle ?? E.value),
        a = y(() => (r.value.logo ? Se(r.value.logo) : null)),
        l = y(() => (r.value.logoDark ? Se(r.value.logoDark) : null))
      return () =>
        u(xe, { to: n.value, class: 'vp-brand' }, () => [
          a.value
            ? u('img', {
                class: ['vp-nav-logo', { light: !!l.value }],
                src: a.value,
                alt: E.value
              })
            : null,
          l.value
            ? u('img', {
                class: ['vp-nav-logo dark'],
                src: l.value,
                alt: E.value
              })
            : null,
          o.value
            ? u(
                'span',
                {
                  class: [
                    'vp-site-name',
                    {
                      'hide-in-pad':
                        a.value && r.value.hideSiteNameOnMobile !== !1
                    }
                  ]
                },
                o.value
              )
            : null
        ])
    }
  }),
  bA = M({
    name: 'NavbarLinks',
    setup() {
      const e = fc()
      return () =>
        e.value.length
          ? u(
              'nav',
              { class: 'vp-nav-links' },
              e.value.map(t =>
                u(
                  'div',
                  { class: 'nav-item hide-in-mobile' },
                  'children' in t ? u(BA, { config: t }) : u(tt, { config: t })
                )
              )
            )
          : null
    }
  }),
  yA = M({
    name: 'RepoLink',
    components: {
      BitbucketIcon: P5,
      GiteeIcon: L5,
      GitHubIcon: w5,
      GitLabIcon: I5,
      SourceIcon: O5
    },
    setup() {
      const e = vA()
      return () =>
        e.value
          ? u(
              'div',
              { class: 'nav-item vp-repo' },
              u(
                'a',
                {
                  class: 'vp-repo-link',
                  href: e.value.link,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': e.value.label
                },
                u(lt(`${e.value.type}Icon`), {
                  style: {
                    width: '1.25rem',
                    height: '1.25rem',
                    verticalAlign: 'middle'
                  }
                })
              )
            )
          : null
    }
  })
const Sc = ({ active: e = !1 }, { emit: t }) =>
  u(
    'button',
    {
      type: 'button',
      class: ['vp-toggle-navbar-button', { 'is-active': e }],
      'aria-label': 'Toggle Navbar',
      'aria-expanded': e,
      'aria-controls': 'nav-screen',
      onClick: () => t('toggle')
    },
    u('span', [
      u('span', { class: 'vp-top' }),
      u('span', { class: 'vp-middle' }),
      u('span', { class: 'vp-bottom' })
    ])
  )
Sc.displayName = 'ToggleNavbarButton'
var CA = Sc
const ba = (e, { emit: t }) =>
  u(
    'button',
    {
      type: 'button',
      class: 'vp-toggle-sidebar-button',
      title: 'Toggle Sidebar',
      onClick: () => t('toggle')
    },
    u('span', { class: 'icon' })
  )
;(ba.displayName = 'ToggleSidebarButton'), (ba.emits = ['toggle'])
var SA = ba,
  TA = M({
    name: 'OutlookButton',
    setup() {
      const { isSupported: e } = _8(),
        t = fr(),
        r = _n(),
        n = de(),
        { canToggle: E } = cE(),
        o = U(!1),
        a = y(() => !r.value && t.value.fullscreen && e)
      return (
        ae(
          () => n.value.path,
          () => {
            o.value = !1
          }
        ),
        () =>
          E.value || a.value || tn
            ? u(
                'div',
                { class: 'nav-item hide-in-mobile' },
                E.value && !a.value && !tn
                  ? u(bc)
                  : a.value && !E.value && !tn
                  ? u(yc)
                  : u(
                      'button',
                      {
                        type: 'button',
                        class: ['outlook-button', { open: o.value }],
                        tabindex: '-1',
                        'aria-hidden': !0
                      },
                      [u(Dc), u('div', { class: 'outlook-dropdown' }, u(Cc))]
                    )
              )
            : null
      )
    }
  }),
  RA = M({
    name: 'NavBar',
    emits: ['toggleSidebar'],
    slots: Object,
    setup(e, { emit: t, slots: r }) {
      const n = ue(),
        { isMobile: E } = sE(),
        o = U(!1),
        a = y(() => {
          const { navbarAutoHide: d = 'mobile' } = n.value
          return d !== 'none' && (d === 'always' || E.value)
        }),
        l = y(
          () =>
            n.value.navbarLayout || {
              start: ['Brand'],
              center: ['Links'],
              end: ['Language', 'Repo', 'Outlook', 'Search']
            }
        ),
        s = {
          Brand: DA,
          Language: No,
          Links: bA,
          Repo: yA,
          Outlook: TA,
          Search: it('Docsearch')
            ? lt('Docsearch')
            : it('SearchBox')
            ? lt('SearchBox')
            : No
        },
        c = d => s[d] ?? (it(d) ? lt(d) : No)
      return () => {
        var d, A, B, p, f, F
        return [
          u(
            'header',
            {
              id: 'navbar',
              class: [
                'vp-navbar',
                { 'auto-hide': a.value, 'hide-icon': n.value.navbarIcon === !1 }
              ]
            },
            [
              u('div', { class: 'vp-navbar-start' }, [
                u(SA, {
                  onToggle: () => {
                    o.value && (o.value = !1), t('toggleSidebar')
                  }
                }),
                (d = r.startBefore) == null ? void 0 : d.call(r),
                (l.value.start || []).map(S => u(c(S))),
                (A = r.startAfter) == null ? void 0 : A.call(r)
              ]),
              u('div', { class: 'vp-navbar-center' }, [
                (B = r.centerBefore) == null ? void 0 : B.call(r),
                (l.value.center || []).map(S => u(c(S))),
                (p = r.centerAfter) == null ? void 0 : p.call(r)
              ]),
              u('div', { class: 'vp-navbar-end' }, [
                (f = r.endBefore) == null ? void 0 : f.call(r),
                (l.value.end || []).map(S => u(c(S))),
                (F = r.endAfter) == null ? void 0 : F.call(r),
                u(CA, {
                  active: o.value,
                  onToggle: () => {
                    o.value = !o.value
                  }
                })
              ])
            ]
          ),
          u(
            FA,
            {
              show: o.value,
              onClose: () => {
                o.value = !1
              }
            },
            {
              before: () => {
                var S
                return (S = r.screenTop) == null ? void 0 : S.call(r)
              },
              after: () => {
                var S
                return (S = r.screenBottom) == null ? void 0 : S.call(r)
              }
            }
          )
        ]
      }
    }
  }),
  wA = M({
    name: 'SidebarChild',
    props: { config: { type: Object, required: !0 } },
    setup(e) {
      const t = St()
      return () => [
        dc(e.config, {
          class: [
            'vp-sidebar-link',
            `vp-sidebar-${e.config.type}`,
            { active: dn(t, e.config, !0) }
          ],
          exact: !0
        }),
        Ac(e.config.children)
      ]
    }
  }),
  IA = M({
    name: 'SidebarGroup',
    props: {
      config: { type: Object, required: !0 },
      open: { type: Boolean, required: !0 }
    },
    emits: ['toggle'],
    setup(e, { emit: t }) {
      const r = St(),
        n = y(() => dn(r, e.config)),
        E = y(() => dn(r, e.config, !0))
      return () => {
        const {
          collapsible: o,
          children: a = [],
          icon: l,
          prefix: s,
          link: c,
          text: d
        } = e.config
        return u('section', { class: 'vp-sidebar-group' }, [
          u(
            o ? 'button' : 'p',
            {
              class: [
                'vp-sidebar-heading',
                { clickable: o || c, exact: E.value, active: n.value }
              ],
              ...(o
                ? {
                    type: 'button',
                    onClick: () => t('toggle'),
                    onKeydown: A => {
                      A.key === 'Enter' && t('toggle')
                    }
                  }
                : {})
            },
            [
              u(Ye, { icon: l }),
              c
                ? u(tt, {
                    class: 'vp-sidebar-title',
                    config: { text: d, link: c },
                    noExternalLinkIcon: !0
                  })
                : u('span', { class: 'vp-sidebar-title' }, d),
              o
                ? u('span', { class: ['vp-arrow', e.open ? 'down' : 'end'] })
                : null
            ]
          ),
          e.open || !o ? u(Tc, { key: s, config: a }) : null
        ])
      }
    }
  }),
  Tc = M({
    name: 'SidebarLinks',
    props: { config: { type: Array, required: !0 } },
    setup(e) {
      const t = St(),
        r = U(-1),
        n = E => {
          r.value = E === r.value ? -1 : E
        }
      return (
        ae(
          () => t.path,
          () => {
            const E = e.config.findIndex(o => uc(t, o))
            r.value = E
          },
          { immediate: !0, flush: 'post' }
        ),
        () =>
          u(
            'ul',
            { class: 'vp-sidebar-links' },
            e.config.map((E, o) =>
              u(
                'li',
                E.type === 'group'
                  ? u(IA, {
                      config: E,
                      open: o === r.value,
                      onToggle: () => n(o)
                    })
                  : u(wA, { config: E })
              )
            )
          )
      )
    }
  }),
  LA = M({
    name: 'SideBar',
    slots: Object,
    setup(e, { slots: t }) {
      const r = St(),
        n = ue(),
        E = S8(),
        o = je()
      return (
        se(() => {
          ae(
            () => r.hash,
            a => {
              const l = document.querySelector(
                `.vp-sidebar a.vp-sidebar-link[href="${r.path}${a}"]`
              )
              if (!l) return
              const { top: s, height: c } = o.value.getBoundingClientRect(),
                { top: d, height: A } = l.getBoundingClientRect()
              d < s
                ? l.scrollIntoView(!0)
                : d + A > s + c && l.scrollIntoView(!1)
            }
          )
        }),
        () => {
          var a, l, s
          return u(
            'aside',
            {
              ref: o,
              id: 'sidebar',
              class: ['vp-sidebar', { 'hide-icon': n.value.sidebarIcon === !1 }]
            },
            [
              (a = t.top) == null ? void 0 : a.call(t),
              ((l = t.default) == null ? void 0 : l.call(t)) ||
                u(Tc, { config: E.value }),
              (s = t.bottom) == null ? void 0 : s.call(t)
            ]
          )
        }
      )
    }
  }),
  T8 = M({
    name: 'CommonWrapper',
    props: {
      containerClass: { type: String, default: '' },
      noNavbar: Boolean,
      noSidebar: Boolean,
      noToc: Boolean
    },
    slots: Object,
    setup(e, { slots: t }) {
      const r = qe(),
        n = de(),
        E = Fe(),
        o = ue(),
        { isMobile: a, isPC: l } = sE(),
        [s, c] = _a(!1),
        [d, A] = _a(!1),
        B = S8(),
        p = U(!1),
        f = y(() =>
          e.noNavbar || E.value.navbar === !1 || o.value.navbar === !1
            ? !1
            : !!(
                n.value.title ||
                o.value.logo ||
                o.value.repo ||
                o.value.navbar
              )
        ),
        F = y(() =>
          e.noSidebar
            ? !1
            : E.value.sidebar !== !1 && B.value.length !== 0 && !E.value.home
        ),
        S = y(() =>
          e.noToc || E.value.home
            ? !1
            : E.value.toc || (o.value.toc !== !1 && E.value.toc !== !1)
        ),
        D = { x: 0, y: 0 },
        b = R => {
          ;(D.x = R.changedTouches[0].clientX),
            (D.y = R.changedTouches[0].clientY)
        },
        g = R => {
          const P = R.changedTouches[0].clientX - D.x,
            T = R.changedTouches[0].clientY - D.y
          Math.abs(P) > Math.abs(T) * 1.5 &&
            Math.abs(P) > 40 &&
            (P > 0 && D.x <= 80 ? c(!0) : c(!1))
        },
        _ = () =>
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0
      let w = 0
      return (
        Ne(
          'scroll',
          $d(
            () => {
              const R = _()
              R <= 58 || R < w
                ? (p.value = !1)
                : w + 200 < R && !s.value && (p.value = !0),
                (w = R)
            },
            300,
            !0
          )
        ),
        ae(a, R => {
          R || c(!1)
        }),
        se(() => {
          const R = M5(document.body)
          ae(s, T => {
            R.value = T
          })
          const P = r.afterEach(() => {
            c(!1)
          })
          fn(() => {
            ;(R.value = !1), P()
          })
        }),
        () =>
          u(it('GlobalEncrypt') ? lt('GlobalEncrypt') : g5, () =>
            u(
              'div',
              {
                class: [
                  'theme-container',
                  {
                    'no-navbar': !f.value,
                    'no-sidebar':
                      !F.value &&
                      !(t.sidebar || t.sidebarTop || t.sidebarBottom),
                    'has-toc': S.value,
                    'hide-navbar': p.value,
                    'sidebar-collapsed': !a.value && !l.value && d.value,
                    'sidebar-open': a.value && s.value
                  },
                  e.containerClass,
                  E.value.containerClass || ''
                ],
                onTouchStart: b,
                onTouchEnd: g
              },
              [
                f.value
                  ? u(
                      RA,
                      { onToggleSidebar: () => c() },
                      {
                        startBefore: () => {
                          var R
                          return (R = t.navbarStartBefore) == null
                            ? void 0
                            : R.call(t)
                        },
                        startAfter: () => {
                          var R
                          return (R = t.navbarStartAfter) == null
                            ? void 0
                            : R.call(t)
                        },
                        centerBefore: () => {
                          var R
                          return (R = t.navbarCenterBefore) == null
                            ? void 0
                            : R.call(t)
                        },
                        centerAfter: () => {
                          var R
                          return (R = t.navbarCenterAfter) == null
                            ? void 0
                            : R.call(t)
                        },
                        endBefore: () => {
                          var R
                          return (R = t.navbarEndBefore) == null
                            ? void 0
                            : R.call(t)
                        },
                        endAfter: () => {
                          var R
                          return (R = t.navbarEndAfter) == null
                            ? void 0
                            : R.call(t)
                        },
                        screenTop: () => {
                          var R
                          return (R = t.navScreenTop) == null
                            ? void 0
                            : R.call(t)
                        },
                        screenBottom: () => {
                          var R
                          return (R = t.navScreenBottom) == null
                            ? void 0
                            : R.call(t)
                        }
                      }
                    )
                  : null,
                u(Ar, { name: 'fade' }, () =>
                  s.value
                    ? u('div', {
                        class: 'vp-sidebar-mask',
                        onClick: () => c(!1)
                      })
                    : null
                ),
                u(Ar, { name: 'fade' }, () =>
                  a.value
                    ? null
                    : u(
                        'div',
                        { class: 'toggle-sidebar-wrapper', onClick: () => A() },
                        u('span', {
                          class: ['arrow', d.value ? 'end' : 'start']
                        })
                      )
                ),
                u(
                  LA,
                  {},
                  {
                    ...(t.sidebar ? { default: () => t.sidebar() } : {}),
                    top: () => {
                      var R
                      return (R = t.sidebarTop) == null ? void 0 : R.call(t)
                    },
                    bottom: () => {
                      var R
                      return (R = t.sidebarBottom) == null ? void 0 : R.call(t)
                    }
                  }
                ),
                t.default(),
                u(AA)
              ]
            )
          )
      )
    }
  }),
  pe = M({
    name: 'DropTransition',
    props: {
      type: { type: String, default: 'single' },
      delay: { type: Number, default: 0 },
      duration: { type: Number, default: 0.25 },
      appear: Boolean
    },
    slots: Object,
    setup(e, { slots: t }) {
      const r = E => {
          ;(E.style.transition = `transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`),
            (E.style.transform = 'translateY(-20px)'),
            (E.style.opacity = '0')
        },
        n = E => {
          ;(E.style.transform = 'translateY(0)'), (E.style.opacity = '1')
        }
      return () =>
        u(
          e.type === 'single' ? Ar : m1,
          {
            name: 'drop',
            appear: e.appear,
            onAppear: r,
            onAfterAppear: n,
            onEnter: r,
            onAfterEnter: n,
            onBeforeLeave: r
          },
          () => t.default()
        )
    }
  })
const ya = ({ custom: e }) =>
  u(n5, { class: ['theme-hope-content', { custom: e }] })
;(ya.displayName = 'MarkdownContent'), (ya.props = { custom: Boolean })
var R8 = ya
const Rc = () =>
  u(ce, { name: 'author' }, () =>
    u('path', {
      d: 'M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z'
    })
  )
Rc.displayName = 'AuthorIcon'
const wc = () =>
  u(ce, { name: 'calendar' }, () =>
    u('path', {
      d: 'M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z'
    })
  )
wc.displayName = 'CalendarIcon'
const Ic = () =>
  u(ce, { name: 'category' }, () =>
    u('path', {
      d: 'M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z'
    })
  )
Ic.displayName = 'CategoryIcon'
const Lc = () =>
  u(ce, { name: 'eye' }, () =>
    u('path', {
      d: 'M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z'
    })
  )
Lc.displayName = 'EyeIcon'
const Pc = () =>
  u(ce, { name: 'fire' }, () =>
    u('path', {
      d: 'M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z'
    })
  )
Pc.displayName = 'FireIcon'
const Oc = () =>
  u(ce, { name: 'print' }, () =>
    u('path', {
      d: 'M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z'
    })
  )
Oc.displayName = 'PrintIcon'
const Vc = () =>
  u(ce, { name: 'tag' }, () =>
    u('path', {
      d: 'M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z'
    })
  )
Vc.displayName = 'TagIcon'
const xc = () =>
  u(ce, { name: 'timer' }, () =>
    u('path', {
      d: 'M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z'
    })
  )
xc.displayName = 'TimerIcon'
const kc = () =>
  u(ce, { name: 'word' }, () => [
    u('path', {
      d: 'M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z'
    }),
    u('path', {
      d: 'M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z'
    })
  ])
kc.displayName = 'WordIcon'
const Yt = () => {
  const e = ue()
  return y(() => e.value.metaLocales)
}
var PA = M({
    name: 'AuthorInfo',
    inheritAttrs: !1,
    props: { author: { type: Array, required: !0 }, pure: Boolean },
    setup(e) {
      const t = Yt()
      return () =>
        e.author.length
          ? u(
              'span',
              {
                class: 'page-author-info',
                'aria-label': `${t.value.author}${e.pure ? '' : '🖊'}`,
                ...(e.pure ? {} : { 'data-balloon-pos': 'down' })
              },
              [
                u(Rc),
                u(
                  'span',
                  e.author.map(r =>
                    r.url
                      ? u(
                          'a',
                          {
                            class: 'page-author-item',
                            href: r.url,
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          },
                          r.name
                        )
                      : u('span', { class: 'page-author-item' }, r.name)
                  )
                ),
                u('span', {
                  property: 'author',
                  content: e.author.map(r => r.name).join(', ')
                })
              ]
            )
          : null
    }
  }),
  OA = M({
    name: 'CategoryInfo',
    inheritAttrs: !1,
    props: { category: { type: Array, required: !0 }, pure: Boolean },
    setup(e) {
      const t = qe(),
        r = de(),
        n = Yt(),
        E = (o, a = '') => {
          a && r.value.path !== a && (o.preventDefault(), t.push(a))
        }
      return () =>
        e.category.length
          ? u(
              'span',
              {
                class: 'page-category-info',
                'aria-label': `${n.value.category}${e.pure ? '' : '🌈'}`,
                ...(e.pure ? {} : { 'data-balloon-pos': 'down' })
              },
              [
                u(Ic),
                e.category.map(({ name: o, path: a }) =>
                  u(
                    'span',
                    {
                      class: [
                        'page-category-item',
                        { [`category${vo(o, 9)}`]: !e.pure, clickable: a }
                      ],
                      role: a ? 'navigation' : '',
                      onClick: l => E(l, a)
                    },
                    o
                  )
                ),
                u('meta', {
                  property: 'articleSection',
                  content: e.category.map(({ name: o }) => o).join(',')
                })
              ]
            )
          : null
    }
  }),
  VA = M({
    name: 'DateInfo',
    inheritAttrs: !1,
    props: {
      date: { type: Object, default: null },
      localizedDate: { type: String, default: '' },
      pure: Boolean
    },
    setup(e) {
      const t = so(),
        r = Yt()
      return () =>
        e.date
          ? u(
              'span',
              {
                class: 'page-date-info',
                'aria-label': `${r.value.date}${e.pure ? '' : '📅'}`,
                ...(e.pure ? {} : { 'data-balloon-pos': 'down' })
              },
              [
                u(wc),
                u(
                  'span',
                  u(
                    co,
                    () => e.localizedDate || e.date.toLocaleDateString(t.value)
                  )
                ),
                u('meta', {
                  property: 'datePublished',
                  content: e.date.toISOString() || ''
                })
              ]
            )
          : null
    }
  }),
  xA = M({
    name: 'OriginalInfo',
    inheritAttrs: !1,
    props: { isOriginal: Boolean },
    setup(e) {
      const t = Yt()
      return () =>
        e.isOriginal
          ? u('span', { class: 'page-original-info' }, t.value.origin)
          : null
    }
  }),
  kA = M({
    name: 'PageViewInfo',
    inheritAttrs: !1,
    props: {
      pageview: { type: [Boolean, String], default: !1 },
      pure: Boolean
    },
    setup(e) {
      const t = St(),
        r = Yt(),
        n = je(),
        E = U(0)
      return (
        t6(
          n,
          () => {
            const o = n.value.textContent
            o && !isNaN(Number(o)) && (E.value = Number(o))
          },
          { childList: !0 }
        ),
        () =>
          e.pageview
            ? u(
                'span',
                {
                  class: 'page-pageview-info',
                  'aria-label': `${r.value.views}${e.pure ? '' : '🔢'}`,
                  ...(e.pure ? {} : { 'data-balloon-pos': 'down' })
                },
                [
                  u(E.value < 1e3 ? Lc : Pc),
                  u(
                    'span',
                    {
                      ref: n,
                      id: 'ArtalkPV',
                      class: 'waline-pageview-count',
                      'data-path': Ee(e.pageview) ? e.pageview : Se(t.path)
                    },
                    '...'
                  )
                ]
              )
            : null
      )
    }
  }),
  MA = M({
    name: 'ReadingTimeInfo',
    inheritAttrs: !1,
    props: {
      readingTime: { type: Object, default: () => null },
      readingTimeLocale: { type: Object, default: () => null },
      pure: Boolean
    },
    setup(e) {
      const t = Yt(),
        r = y(() => {
          if (!e.readingTime) return null
          const { minutes: n } = e.readingTime
          return n < 1 ? 'PT1M' : `PT${Math.round(n)}M`
        })
      return () => {
        var n, E
        return (n = e.readingTimeLocale) != null && n.time
          ? u(
              'span',
              {
                class: 'page-reading-time-info',
                'aria-label': `${t.value.readingTime}${e.pure ? '' : '⌛'}`,
                ...(e.pure ? {} : { 'data-balloon-pos': 'down' })
              },
              [
                u(xc),
                u('span', (E = e.readingTimeLocale) == null ? void 0 : E.time),
                u('meta', { property: 'timeRequired', content: r.value })
              ]
            )
          : null
      }
    }
  }),
  $A = M({
    name: 'TagInfo',
    inheritAttrs: !1,
    props: { tag: { type: Array, default: () => [] }, pure: Boolean },
    setup(e) {
      const t = qe(),
        r = de(),
        n = Yt(),
        E = (o, a = '') => {
          a && r.value.path !== a && (o.preventDefault(), t.push(a))
        }
      return () =>
        e.tag.length
          ? u(
              'span',
              {
                class: 'page-tag-info',
                'aria-label': `${n.value.tag}${e.pure ? '' : '🏷'}`,
                ...(e.pure ? {} : { 'data-balloon-pos': 'down' })
              },
              [
                u(Vc),
                e.tag.map(({ name: o, path: a }) =>
                  u(
                    'span',
                    {
                      class: [
                        'page-tag-item',
                        { [`tag${vo(o, 9)}`]: !e.pure, clickable: a }
                      ],
                      role: a ? 'navigation' : '',
                      onClick: l => E(l, a)
                    },
                    o
                  )
                ),
                u('meta', {
                  property: 'keywords',
                  content: e.tag.map(({ name: o }) => o).join(',')
                })
              ]
            )
          : null
    }
  }),
  jA = M({
    name: 'ReadTimeInfo',
    inheritAttrs: !1,
    props: {
      readingTime: { type: Object, default: () => null },
      readingTimeLocale: { type: Object, default: () => null },
      pure: Boolean
    },
    setup(e) {
      const t = Yt()
      return () => {
        var r, n, E
        return (r = e.readingTimeLocale) != null && r.words
          ? u(
              'span',
              {
                class: 'page-word-info',
                'aria-label': `${t.value.words}${e.pure ? '' : '🔠'}`,
                ...(e.pure ? {} : { 'data-balloon-pos': 'down' })
              },
              [
                u(kc),
                u('span', (n = e.readingTimeLocale) == null ? void 0 : n.words),
                u('meta', {
                  property: 'wordCount',
                  content: (E = e.readingTime) == null ? void 0 : E.words
                })
              ]
            )
          : null
      }
    }
  }),
  Mc = M({
    name: 'PageInfo',
    components: {
      AuthorInfo: PA,
      CategoryInfo: OA,
      DateInfo: VA,
      OriginalInfo: xA,
      PageViewInfo: kA,
      ReadingTimeInfo: MA,
      TagInfo: $A,
      WordInfo: jA
    },
    props: {
      items: {
        type: [Array, Boolean],
        default: () => [
          'Author',
          'Original',
          'Date',
          'PageView',
          'ReadingTime',
          'Category',
          'Tag'
        ]
      },
      info: { type: Object, required: !0 }
    },
    setup(e) {
      const t = _n()
      return () =>
        e.items
          ? u(
              'div',
              { class: 'page-info' },
              e.items.map(r => u(lt(`${r}Info`), { ...e.info, pure: t.value }))
            )
          : null
    }
  }),
  NA = M({
    name: 'PrintButton',
    setup() {
      const e = fr(),
        t = ue()
      return () =>
        e.value.print === !1
          ? null
          : u(
              'button',
              {
                type: 'button',
                class: 'print-button',
                title: t.value.metaLocales.print,
                onClick: () => {
                  window.print()
                }
              },
              u(Oc)
            )
    }
  })
const HA = ({ title: e, level: t, slug: r }) =>
    u(xe, { to: `#${r}`, class: ['toc-link', `level${t}`] }, () => e),
  Ca = (e, t) => {
    const r = St()
    return e.length && t > 0
      ? u(
          'ul',
          { class: 'toc-list' },
          e.map(n => {
            const E = Ca(n.children, t - 1)
            return [
              u(
                'li',
                { class: ['toc-item', { active: p8(r, `#${n.slug}`) }] },
                HA(n)
              ),
              E ? u('li', E) : null
            ]
          })
        )
      : null
  }
var $c = M({
    name: 'TOC',
    props: {
      items: { type: Array, default: () => [] },
      headerDepth: { type: Number, default: 2 }
    },
    slots: Object,
    setup(e, { slots: t }) {
      const r = St(),
        n = de(),
        E = Yt(),
        o = je(),
        a = U('-1.7rem'),
        l = c => {
          var d
          ;(d = o.value) == null || d.scrollTo({ top: c, behavior: 'smooth' })
        },
        s = () => {
          if (o.value) {
            const c = document.querySelector('.toc-item.active')
            c
              ? (a.value = `${
                  c.getBoundingClientRect().top -
                  o.value.getBoundingClientRect().top +
                  o.value.scrollTop
                }px`)
              : (a.value = '-1.7rem')
          } else a.value = '-1.7rem'
        }
      return (
        se(() => {
          ae(
            () => r.hash,
            c => {
              if (o.value) {
                const d = document.querySelector(
                  `#toc a.toc-link[href$="${c}"]`
                )
                if (!d) return
                const { top: A, height: B } = o.value.getBoundingClientRect(),
                  { top: p, height: f } = d.getBoundingClientRect()
                p < A
                  ? l(o.value.scrollTop + p - A)
                  : p + f > A + B && l(o.value.scrollTop + p + f - A - B)
              }
            }
          ),
            ae(
              () => r.fullPath,
              () => s(),
              { flush: 'post', immediate: !0 }
            )
        }),
        () => {
          var c, d
          const A = e.items.length
            ? Ca(e.items, e.headerDepth)
            : n.value.headers
            ? Ca(n.value.headers, e.headerDepth)
            : null
          return A
            ? u('div', { class: 'toc-place-holder' }, [
                u('aside', { id: 'toc' }, [
                  (c = t.before) == null ? void 0 : c.call(t),
                  u('div', { class: 'toc-header' }, [E.value.toc, u(NA)]),
                  u('div', { class: 'toc-wrapper', ref: o }, [
                    A,
                    u('div', { class: 'toc-marker', style: { top: a.value } })
                  ]),
                  (d = t.after) == null ? void 0 : d.call(t)
                ])
              ])
            : null
        }
      )
    }
  }),
  w8 = M({
    name: 'SkipLink',
    props: { content: { type: String, default: 'main-content' } },
    setup(e) {
      const t = de(),
        r = ue(),
        n = je(),
        E = ({ target: o }) => {
          const a = document.querySelector(o.hash)
          if (a) {
            const l = () => {
              a.removeAttribute('tabindex'), a.removeEventListener('blur', l)
            }
            a.setAttribute('tabindex', '-1'),
              a.addEventListener('blur', l),
              a.focus(),
              window.scrollTo(0, 0)
          }
        }
      return (
        se(() => {
          ae(
            () => t.value.path,
            () => n.value.focus()
          )
        }),
        () => [
          u('span', { ref: n, tabindex: '-1' }),
          u(
            'a',
            {
              href: `#${e.content}`,
              class: 'vp-skip-link sr-only',
              onClick: E
            },
            r.value.routeLocales.skipToContent
          )
        ]
      )
    }
  })
let zo = null,
  IE = null
const JA = {
    wait: () => zo,
    pending: () => {
      zo = new Promise(e => (IE = e))
    },
    resolve: () => {
      IE == null || IE(), (zo = null), (IE = null)
    }
  },
  jc = () => JA
var Nc = M({
  name: 'FadeSlideY',
  slots: Object,
  setup(e, { slots: t }) {
    const { resolve: r, pending: n } = jc()
    return () =>
      u(
        Ar,
        {
          name: 'fade-slide-y',
          mode: 'out-in',
          onBeforeEnter: r,
          onBeforeLeave: n
        },
        () => {
          var E
          return (E = t.default) == null ? void 0 : E.call(t)
        }
      )
  }
})
const zA = (e, t) => {
    const r = e.replace(t, '/').split('/'),
      n = []
    let E = s8(t)
    return (
      r.forEach((o, a) => {
        a !== r.length - 1
          ? ((E += `${o}/`), n.push({ link: E, name: o || 'Home' }))
          : o !== '' && ((E += o), n.push({ link: E, name: o }))
      }),
      n
    )
  },
  Hc = (e, { slots: t }) => {
    var r, n
    const {
      bgImage: E,
      bgImageDark: o,
      bgImageStyle: a,
      color: l,
      description: s,
      image: c,
      imageDark: d,
      header: A,
      features: B = []
    } = e
    return u('div', { class: 'vp-feature-wrapper' }, [
      E
        ? u('div', {
            class: ['vp-feature-bg', { light: o }],
            style: [{ 'background-image': `url(${E})` }, a]
          })
        : null,
      o
        ? u('div', {
            class: 'vp-feature-bg dark',
            style: [{ 'background-image': `url(${o})` }, a]
          })
        : null,
      u('div', { class: 'vp-feature', style: l ? { color: l } : {} }, [
        ((r = t.image) == null ? void 0 : r.call(t, e)) || [
          c
            ? u('img', {
                class: ['vp-feature-image', { light: d }],
                src: Se(c),
                alt: A
              })
            : null,
          d
            ? u('img', { class: 'vp-feature-image dark', src: Se(d), alt: A })
            : null
        ],
        ((n = t.info) == null ? void 0 : n.call(t, e)) || [
          A ? u('h2', { class: 'vp-feature-header' }, A) : null,
          s ? u('p', { class: 'vp-feature-description', innerHTML: s }) : null
        ],
        B.length
          ? u(
              'div',
              { class: 'vp-features' },
              B.map(({ icon: p, title: f, details: F, link: S }) => {
                const D = [
                  u('h3', { class: 'vp-feature-title' }, [
                    u(Ye, { icon: p }),
                    u('span', { innerHTML: f })
                  ]),
                  u('p', { class: 'vp-feature-details', innerHTML: F })
                ]
                return S
                  ? zE(S)
                    ? u(
                        'a',
                        {
                          class: 'vp-feature-item link',
                          href: S,
                          role: 'navigation',
                          'aria-label': f,
                          target: '_blank'
                        },
                        D
                      )
                    : u(
                        xe,
                        {
                          class: 'vp-feature-item link',
                          to: S,
                          role: 'navigation',
                          'aria-label': f
                        },
                        () => D
                      )
                  : u('div', { class: 'vp-feature-item' }, D)
              })
            )
          : null
      ])
    ])
  }
Hc.displayName = 'FeaturePanel'
var Bl = Hc,
  UA = M({
    name: 'HeroInfo',
    slots: Object,
    setup(e, { slots: t }) {
      const r = Fe(),
        n = oE(),
        E = y(() => r.value.heroFullScreen ?? !1),
        o = y(() => {
          const { heroText: c, tagline: d } = r.value
          return {
            text: c ?? n.value.title ?? 'Hello',
            tagline: d ?? n.value.description ?? '',
            isFullScreen: E.value
          }
        }),
        a = y(() => {
          const {
            heroText: c,
            heroImage: d,
            heroImageDark: A,
            heroAlt: B,
            heroImageStyle: p
          } = r.value
          return {
            image: d ? Se(d) : null,
            imageDark: A ? Se(A) : null,
            heroStyle: p,
            alt: B || c || 'hero image',
            isFullScreen: E.value
          }
        }),
        l = y(() => {
          const { bgImage: c, bgImageDark: d, bgImageStyle: A } = r.value
          return {
            image: Wt(c) ? Se(c) : null,
            imageDark: Wt(d) ? Se(d) : null,
            bgStyle: A,
            isFullScreen: E.value
          }
        }),
        s = y(() => r.value.actions ?? [])
      return () => {
        var c, d, A
        return u(
          'header',
          { class: ['vp-hero-info-wrapper', { fullscreen: E.value }] },
          [
            ((c = t.heroBg) == null ? void 0 : c.call(t, l.value)) || [
              l.value.image
                ? u('div', {
                    class: ['vp-hero-mask', { light: l.value.imageDark }],
                    style: [
                      { 'background-image': `url(${l.value.image})` },
                      l.value.bgStyle
                    ]
                  })
                : null,
              l.value.imageDark
                ? u('div', {
                    class: 'vp-hero-mask dark',
                    style: [
                      { 'background-image': `url(${l.value.imageDark})` },
                      l.value.bgStyle
                    ]
                  })
                : null
            ],
            u('div', { class: 'vp-hero-info' }, [
              ((d = t.heroImage) == null ? void 0 : d.call(t, a.value)) ||
                u(pe, { appear: !0, type: 'group' }, () => [
                  a.value.image
                    ? u('img', {
                        key: 'light',
                        class: ['vp-hero-image', { light: a.value.imageDark }],
                        style: a.value.heroStyle,
                        src: a.value.image,
                        alt: a.value.alt
                      })
                    : null,
                  a.value.imageDark
                    ? u('img', {
                        key: 'dark',
                        class: 'vp-hero-image dark',
                        style: a.value.heroStyle,
                        src: a.value.imageDark,
                        alt: a.value.alt
                      })
                    : null
                ]),
              ((A = t.heroInfo) == null ? void 0 : A.call(t, o.value)) ??
                u('div', { class: 'vp-hero-infos' }, [
                  o.value.text
                    ? u(pe, { appear: !0, delay: 0.04 }, () =>
                        u('h1', { id: 'main-title' }, o.value.text)
                      )
                    : null,
                  o.value.tagline
                    ? u(pe, { appear: !0, delay: 0.08 }, () =>
                        u('p', {
                          class: 'vp-description',
                          innerHTML: o.value.tagline
                        })
                      )
                    : null,
                  s.value.length
                    ? u(pe, { appear: !0, delay: 0.12 }, () =>
                        u(
                          'p',
                          { class: 'vp-actions' },
                          s.value.map(B =>
                            u(tt, {
                              class: ['vp-action', B.type || 'default'],
                              config: B,
                              noExternalLinkIcon: !0
                            })
                          )
                        )
                      )
                    : null
                ])
            ])
          ]
        )
      }
    }
  })
const Jc = (e, { slots: t }) => {
  var r, n, E
  const {
    bgImage: o,
    bgImageDark: a,
    bgImageStyle: l,
    color: s,
    description: c,
    image: d,
    imageDark: A,
    header: B,
    highlights: p = [],
    type: f = 'un-order'
  } = e
  return u(
    'div',
    { class: 'vp-highlight-wrapper', style: s ? { color: s } : {} },
    [
      o
        ? u('div', {
            class: ['vp-highlight-bg', { light: a }],
            style: [{ 'background-image': `url(${o})` }, l]
          })
        : null,
      a
        ? u('div', {
            class: 'vp-highlight-bg dark',
            style: [{ 'background-image': `url(${a})` }, l]
          })
        : null,
      u('div', { class: 'vp-highlight' }, [
        ((r = t.image) == null ? void 0 : r.call(t, e)) || [
          d
            ? u('img', {
                class: ['vp-highlight-image', { light: A }],
                src: Se(d),
                alt: B
              })
            : null,
          A
            ? u('img', { class: 'vp-highlight-image dark', src: Se(A), alt: B })
            : null
        ],
        ((n = t.info) == null ? void 0 : n.call(t, e)) || [
          u(
            'div',
            { class: 'vp-highlight-info-wrapper' },
            u('div', { class: 'vp-highlight-info' }, [
              B
                ? u('h2', { class: 'vp-highlight-header', innerHTML: B })
                : null,
              c
                ? u('p', { class: 'vp-highlight-description', innerHTML: c })
                : null,
              ((E = t.highlights) == null ? void 0 : E.call(t, p)) ||
                u(
                  f === 'order' ? 'ol' : f === 'no-order' ? 'dl' : 'ul',
                  { class: 'vp-highlights' },
                  p.map(({ icon: F, title: S, details: D, link: b }) => {
                    const g = [
                      u(
                        f === 'no-order' ? 'dt' : 'h3',
                        { class: 'vp-highlight-title' },
                        [
                          F
                            ? u(Ye, { class: 'vp-highlight-icon', icon: F })
                            : null,
                          u('span', { innerHTML: S })
                        ]
                      ),
                      D
                        ? u(f === 'no-order' ? 'dd' : 'p', {
                            class: 'vp-highlight-details',
                            innerHTML: D
                          })
                        : null
                    ]
                    return u(
                      f === 'no-order' ? 'div' : 'li',
                      { class: ['vp-highlight-item-wrapper', { link: b }] },
                      b
                        ? gd(b)
                          ? u(
                              'a',
                              {
                                class: 'vp-highlight-item link',
                                href: b,
                                role: 'navigation',
                                'aria-label': S,
                                target: '_blank'
                              },
                              g
                            )
                          : u(
                              xe,
                              {
                                class: 'vp-highlight-item link',
                                to: b,
                                role: 'navigation',
                                'aria-label': S
                              },
                              () => g
                            )
                        : u('div', { class: 'vp-highlight-item' }, g)
                    )
                  })
                )
            ])
          )
        ]
      ])
    ]
  )
}
Jc.displayName = 'HighlightPanel'
var qA = Jc,
  WA = M({
    name: 'HomePage',
    slots: Object,
    setup(e, { slots: t }) {
      const r = _n(),
        n = Fe(),
        E = y(() => {
          const { features: a } = n.value
          return z(a) ? a : null
        }),
        o = y(() => {
          const { highlights: a } = n.value
          return z(a) ? a : null
        })
      return () => {
        var a, l, s, c
        return u(
          'main',
          {
            id: 'main-content',
            class: ['vp-project-home ', { pure: r.value }],
            'aria-labelledby': n.value.heroText === null ? '' : 'main-title'
          },
          [
            (a = t.top) == null ? void 0 : a.call(t),
            u(UA),
            ((l = o.value) == null
              ? void 0
              : l.map(d => ('features' in d ? u(Bl, d) : u(qA, d)))) ||
              (E.value
                ? u(pe, { appear: !0, delay: 0.24 }, () =>
                    u(Bl, { features: E.value })
                  )
                : null),
            (s = t.center) == null ? void 0 : s.call(t),
            u(pe, { appear: !0, delay: 0.32 }, () => u(R8)),
            (c = t.bottom) == null ? void 0 : c.call(t)
          ]
        )
      }
    }
  }),
  KA = M({
    name: 'BreadCrumb',
    setup() {
      const e = qe(),
        t = de(),
        r = Vt(),
        n = Fe(),
        E = ue(),
        o = je([]),
        a = y(
          () =>
            (n.value.breadcrumb ||
              (n.value.breadcrumb !== !1 && E.value.breadcrumb !== !1)) &&
            o.value.length > 1
        ),
        l = y(
          () =>
            n.value.breadcrumbIcon ||
            (n.value.breadcrumbIcon !== !1 && E.value.breadcrumbIcon !== !1)
        ),
        s = () => {
          const c = e.getRoutes(),
            d = zA(t.value.path, r.value)
              .map(({ link: A, name: B }) => {
                const p = c.find(f => f.path === A)
                if (p) {
                  const { meta: f, path: F } = un(e, p.path)
                  return {
                    title: f[ye.shortTitle] || f[ye.title] || B,
                    icon: f[ye.icon],
                    path: F
                  }
                }
                return null
              })
              .filter(A => A !== null)
          d.length > 1 && (o.value = d)
        }
      return (
        se(() => {
          s(), ae(() => t.value.path, s)
        }),
        () =>
          u(
            'nav',
            { class: ['vp-breadcrumb', { disable: !a.value }] },
            a.value
              ? u(
                  'ol',
                  { vocab: 'https://schema.org/', typeof: 'BreadcrumbList' },
                  o.value.map((c, d) =>
                    u(
                      'li',
                      {
                        class: { 'is-active': o.value.length - 1 === d },
                        property: 'itemListElement',
                        typeof: 'ListItem'
                      },
                      [
                        u(
                          xe,
                          { to: c.path, property: 'item', typeof: 'WebPage' },
                          () => [
                            l.value ? u(Ye, { icon: c.icon }) : null,
                            u(
                              'span',
                              { property: 'name' },
                              c.title || 'Unknown'
                            )
                          ]
                        ),
                        u('meta', { property: 'position', content: d + 1 })
                      ]
                    )
                  )
                )
              : []
          )
      )
    }
  })
const vl = e => {
    const t = qe()
    return e === !1 ? !1 : Ee(e) ? en(t, e, !0) : EE(e) ? e : null
  },
  Sa = (e, t, r) => {
    const n = e.findIndex(E => E.link === t)
    if (n !== -1) {
      const E = e[n + r]
      return E != null && E.link ? E : null
    }
    for (const E of e)
      if (E.children) {
        const o = Sa(E.children, t, r)
        if (o) return o
      }
    return null
  }
var GA = M({
  name: 'PageNav',
  setup() {
    const e = ue(),
      t = Fe(),
      r = S8(),
      n = de(),
      E = lE(),
      o = y(() => {
        const l = vl(t.value.prev)
        return l === !1
          ? null
          : l ||
              (e.value.prevLink === !1 ? null : Sa(r.value, n.value.path, -1))
      }),
      a = y(() => {
        const l = vl(t.value.next)
        return l === !1
          ? null
          : l || (e.value.nextLink === !1 ? null : Sa(r.value, n.value.path, 1))
      })
    return (
      Ne('keydown', l => {
        l.altKey &&
          (l.key === 'ArrowRight'
            ? a.value && (E(a.value.link), l.preventDefault())
            : l.key === 'ArrowLeft' &&
              o.value &&
              (E(o.value.link), l.preventDefault()))
      }),
      () =>
        o.value || a.value
          ? u('nav', { class: 'vp-page-nav' }, [
              o.value
                ? u(tt, { class: 'prev', config: o.value }, () => {
                    var l, s
                    return [
                      u('div', { class: 'hint' }, [
                        u('span', { class: 'arrow start' }),
                        e.value.metaLocales.prev
                      ]),
                      u('div', { class: 'link' }, [
                        u(Ye, {
                          icon: (l = o.value) == null ? void 0 : l.icon
                        }),
                        (s = o.value) == null ? void 0 : s.text
                      ])
                    ]
                  })
                : null,
              a.value
                ? u(tt, { class: 'next', config: a.value }, () => {
                    var l, s
                    return [
                      u('div', { class: 'hint' }, [
                        e.value.metaLocales.next,
                        u('span', { class: 'arrow end' })
                      ]),
                      u('div', { class: 'link' }, [
                        (l = a.value) == null ? void 0 : l.text,
                        u(Ye, { icon: (s = a.value) == null ? void 0 : s.icon })
                      ])
                    ]
                  })
                : null
            ])
          : null
    )
  }
})
const XA = {
    GitHub: ':repo/edit/:branch/:path',
    GitLab: ':repo/-/edit/:branch/:path',
    Gitee: ':repo/edit/:branch/:path',
    Bitbucket:
      ':repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default'
  },
  YA = ({
    docsRepo: e,
    docsBranch: t,
    docsDir: r,
    filePathRelative: n,
    editLinkPattern: E
  }) => {
    if (!n) return null
    const o = R5(e)
    let a
    return (
      E ? (a = E) : o !== null && (a = XA[o]),
      a
        ? a
            .replace(/:repo/, pr(e) ? e : `https://github.com/${e}`)
            .replace(/:branch/, t)
            .replace(/:path/, Ks(`${s8(r)}/${n}`))
        : null
    )
  },
  QA = () => {
    const e = ue(),
      t = de(),
      r = Fe()
    return y(() => {
      const {
        repo: n,
        docsRepo: E = n,
        docsBranch: o = 'main',
        docsDir: a = '',
        editLink: l,
        editLinkPattern: s = ''
      } = e.value
      if (!(r.value.editLink ?? l ?? !0) || !E) return null
      const c = YA({
        docsRepo: E,
        docsBranch: o,
        docsDir: a,
        editLinkPattern: s,
        filePathRelative: t.value.filePathRelative
      })
      return c ? { text: e.value.metaLocales.editLink, link: c } : null
    })
  },
  ZA = () => {
    const e = oE(),
      t = ue(),
      r = de(),
      n = Fe()
    return y(() => {
      var E, o
      return !(n.value.lastUpdated ?? t.value.lastUpdated ?? !0) ||
        !((E = r.value.git) != null && E.updatedTime)
        ? null
        : new Date(
            (o = r.value.git) == null ? void 0 : o.updatedTime
          ).toLocaleString(e.value.lang)
    })
  },
  eB = () => {
    const e = ue(),
      t = de(),
      r = Fe()
    return y(() => {
      var n
      return r.value.contributors ?? e.value.contributors ?? !0
        ? ((n = t.value.git) == null ? void 0 : n.contributors) ?? null
        : null
    })
  }
var tB = M({
  name: 'PageTitle',
  setup() {
    const e = de(),
      t = Fe(),
      r = ue(),
      { info: n, items: E } = EA()
    return () =>
      u('div', { class: 'vp-page-title' }, [
        u('h1', [
          r.value.titleIcon === !1 ? null : u(Ye, { icon: t.value.icon }),
          e.value.title
        ]),
        u(Mc, {
          info: n.value,
          ...(E.value === null ? {} : { items: E.value })
        }),
        u('hr')
      ])
  }
})
const zc = () =>
  u(ce, { name: 'edit' }, () => [
    u('path', {
      d: 'M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z'
    }),
    u('path', {
      d: 'M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z'
    })
  ])
zc.displayName = 'EditIcon'
var rB = M({
    name: 'PageMeta',
    setup() {
      const e = ue(),
        t = QA(),
        r = ZA(),
        n = eB()
      return () => {
        const { metaLocales: E } = e.value
        return u('footer', { class: 'page-meta' }, [
          t.value
            ? u(
                'div',
                { class: 'meta-item edit-link' },
                u(
                  tt,
                  { class: 'label', config: t.value },
                  { before: () => u(zc) }
                )
              )
            : null,
          u('div', { class: 'meta-item git-info' }, [
            r.value
              ? u('div', { class: 'update-time' }, [
                  u('span', { class: 'label' }, `${E.lastUpdated}: `),
                  u(co, () => u('span', { class: 'info' }, r.value))
                ])
              : null,
            n.value && n.value.length
              ? u('div', { class: 'contributors' }, [
                  u('span', { class: 'label' }, `${E.contributors}: `),
                  n.value.map(({ email: o, name: a }, l) => [
                    u(
                      'span',
                      { class: 'contributor', title: `email: ${o}` },
                      a
                    ),
                    l !== n.value.length - 1 ? ',' : ''
                  ])
                ])
              : null
          ])
        ])
      }
    }
  }),
  nB = M({
    name: 'NormalPage',
    slots: Object,
    setup(e, { slots: t }) {
      const r = Fe(),
        n = de(),
        { isDarkmode: E } = cE(),
        o = ue(),
        a = y(() => r.value.toc || (r.value.toc !== !1 && o.value.toc !== !1))
      return () =>
        u(
          'main',
          { id: 'main-content', class: 'vp-page' },
          u(it('LocalEncrypt') ? lt('LocalEncrypt') : g5, () => {
            var l, s, c, d
            return [
              (l = t.top) == null ? void 0 : l.call(t),
              r.value.cover
                ? u('img', {
                    class: 'page-cover',
                    src: Se(r.value.cover),
                    alt: n.value.title,
                    'no-view': ''
                  })
                : null,
              u(KA),
              u(tB),
              a.value
                ? u(
                    $c,
                    {
                      headerDepth:
                        r.value.headerDepth ?? o.value.headerDepth ?? 2
                    },
                    {
                      before: () => {
                        var A
                        return (A = t.tocBefore) == null ? void 0 : A.call(t)
                      },
                      after: () => {
                        var A
                        return (A = t.tocAfter) == null ? void 0 : A.call(t)
                      }
                    }
                  )
                : null,
              (s = t.contentBefore) == null ? void 0 : s.call(t),
              u(R8),
              (c = t.contentAfter) == null ? void 0 : c.call(t),
              u(rB),
              u(GA),
              it('CommentService')
                ? u(lt('CommentService'), { darkmode: E.value })
                : null,
              (d = t.bottom) == null ? void 0 : d.call(t)
            ]
          })
        )
    }
  }),
  EB = M({
    name: 'Layout',
    setup() {
      const e = fr(),
        t = ue(),
        r = de(),
        n = Fe(),
        { isMobile: E } = sE(),
        o = y(() => {
          var a, l
          return (
            ((a = t.value.blog) == null ? void 0 : a.sidebarDisplay) ||
            ((l = e.value.blog) == null ? void 0 : l.sidebarDisplay) ||
            'mobile'
          )
        })
      return () => [
        u(w8),
        u(
          T8,
          {},
          {
            default: () =>
              n.value.home ? u(WA) : u(Nc, () => u(nB, { key: r.value.path })),
            ...(o.value !== 'none'
              ? { navScreenBottom: () => u(lt('BloggerInfo')) }
              : {}),
            ...(!E.value && o.value === 'always'
              ? { sidebar: () => u(lt('BloggerInfo')) }
              : {})
          }
        )
      ]
    }
  }),
  oB = M({
    name: 'NotFoundHint',
    setup() {
      const e = ue(),
        t = () => {
          const r = e.value.routeLocales.notFoundMsg
          return r[Math.floor(Math.random() * r.length)]
        }
      return () =>
        u('div', { class: 'not-found-hint' }, [
          u('p', { class: 'error-code' }, '404'),
          u('h1', { class: 'error-title' }, e.value.routeLocales.notFoundTitle),
          u('p', { class: 'error-hint' }, t())
        ])
    }
  }),
  aB = M({
    name: 'NotFound',
    slots: Object,
    setup(e, { slots: t }) {
      const r = Vt(),
        n = ue(),
        { navigate: E } = pa({ to: n.value.home ?? r.value })
      return () => [
        u(w8),
        u(T8, { noSidebar: !0 }, () => {
          var o
          return u(
            'main',
            { id: 'main-content', class: 'vp-page not-found' },
            ((o = t.default) == null ? void 0 : o.call(t)) || [
              u(oB),
              u('div', { class: 'actions' }, [
                u(
                  'button',
                  {
                    type: 'button',
                    class: 'action-button',
                    onClick: () => {
                      window.history.go(-1)
                    }
                  },
                  n.value.routeLocales.back
                ),
                u(
                  'button',
                  {
                    type: 'button',
                    class: 'action-button',
                    onClick: () => E()
                  },
                  n.value.routeLocales.home
                )
              ])
            ]
          )
        })
      ]
    }
  })
const iB = {
    Email:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>',
    Github:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',
    Gitee:
      '<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>'
  },
  lB = {
    category: {
      '/': {
        path: '/category/',
        map: {
          基础知识: {
            path: '/category/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/',
            keys: [
              'v-4c2784f0',
              'v-7c618c22',
              'v-2630ab4c',
              'v-0ebfad97',
              'v-5e40b5d5',
              'v-94e632d0'
            ]
          },
          开发日志: {
            path: '/category/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/',
            keys: [
              'v-148827a0',
              'v-14634a24',
              'v-2c119a0c',
              'v-0f1df674',
              'v-92c8dac6',
              'v-35eea18b',
              'v-d6005d76',
              'v-03d76054',
              'v-6b85e19e',
              'v-22f9d806',
              'v-71bd102f',
              'v-b2f45cfc',
              'v-88057dd2',
              'v-3443c502',
              'v-6430d112'
            ]
          },
          面经指南: {
            path: '/category/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/',
            keys: [
              'v-4171ac0a',
              'v-744babfe',
              'v-13e4bea5',
              'v-aceef52a',
              'v-3b82417d',
              'v-a9a4a7b2',
              'v-2632ab89',
              'v-432133da',
              'v-2f3b8ddd'
            ]
          },
          前端开发: {
            path: '/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/',
            keys: [
              'v-d6e48cfe',
              'v-12975cb0',
              'v-00140707',
              'v-6dee9d16',
              'v-a988658e',
              'v-55e548c0',
              'v-c0487376',
              'v-0202caaf',
              'v-a0f5bfd2',
              'v-67ae34e2',
              'v-1ff4e172',
              'v-080d42c3',
              'v-1221fd78',
              'v-06367869',
              'v-05920706',
              'v-4880d4a6',
              'v-03a50e3c',
              'v-3109a60f',
              'v-4930d5a1'
            ]
          },
          前端图形: {
            path: '/category/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/',
            keys: [
              'v-c291d276',
              'v-7b780ad4',
              'v-b0785230',
              'v-e0cbd8ee',
              'v-0583f47c'
            ]
          },
          前端进阶: {
            path: '/category/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/',
            keys: [
              'v-6b16d8cf',
              'v-6b521627',
              'v-09af57da',
              'v-080e7088',
              'v-03fc2edc',
              'v-724a3fc0',
              'v-a4bf6a92',
              'v-5357faee',
              'v-43faf7f8',
              'v-94ff530a',
              'v-2d3fb87c',
              'v-7f9cc112',
              'v-4f3e6294',
              'v-011b7805',
              'v-3cbc3bf2',
              'v-8624ebe2',
              'v-1d357774',
              'v-7da81af2',
              'v-a6a85388',
              'v-2ba61c6e'
            ]
          },
          转载: {
            path: '/category/%E8%BD%AC%E8%BD%BD/',
            keys: ['v-76bfbc3c', 'v-b56c971e']
          },
          浏览器工作原理与实践: {
            path: '/category/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/',
            keys: ['v-2630ab4c']
          },
          计算机网络: {
            path: '/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/',
            keys: ['v-0ebfad97']
          },
          后端开发: {
            path: '/category/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/',
            keys: ['v-7ca6d646', 'v-7c9eb5bd']
          },
          node技术栈: {
            path: '/category/node%E6%8A%80%E6%9C%AF%E6%A0%88/',
            keys: ['v-b29f1a14', 'v-15875df2', 'v-5363f5e2']
          },
          数据库: {
            path: '/category/%E6%95%B0%E6%8D%AE%E5%BA%93/',
            keys: ['v-b7685482', 'v-44dbb96f', 'v-33770c83']
          },
          杂记: {
            path: '/category/%E6%9D%82%E8%AE%B0/',
            keys: [
              'v-0dd559df',
              'v-1a64708b',
              'v-170a91f0',
              'v-f7cd8a78',
              'v-1fe05178',
              'v-10b4f0b9',
              'v-a301ec1a',
              'v-c4f32fc8'
            ]
          },
          mac: { path: '/category/mac/', keys: ['v-0dd559df', 'v-1a64708b'] },
          switch: {
            path: '/category/switch/',
            keys: ['v-170a91f0', 'v-f7cd8a78']
          },
          开发工具: {
            path: '/category/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/',
            keys: ['v-4b7687bc', 'v-8f0ffe7a']
          },
          总结: { path: '/category/%E6%80%BB%E7%BB%93/', keys: ['v-c4f32fc8'] },
          开发笔记: {
            path: '/category/%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0/',
            keys: [
              'v-2d401c52',
              'v-0762220d',
              'v-e3451e9c',
              'v-352cbdcb',
              'v-b718a028',
              'v-63737a94',
              'v-74875426',
              'v-36b1da14',
              'v-246bef6e',
              'v-6e634088',
              'v-3ead2f48',
              'v-7bea55ce',
              'v-77271408',
              'v-5f49510e',
              'v-e50f465a',
              'v-58a8e13c',
              'v-6448b763',
              'v-539c1268',
              'v-619f771c',
              'v-f61a2544',
              'v-0c2e89ed',
              'v-a1d83b16',
              'v-4d15f9ed',
              'v-62d8b48e',
              'v-3fffe92b',
              'v-cbf738c2',
              'v-51dc1186',
              'v-a41a7cf8',
              'v-6e32e664',
              'v-9710e106',
              'v-605eaf1c'
            ]
          },
          CSS: {
            path: '/category/css/',
            keys: ['v-2d401c52', 'v-0762220d', 'v-e3451e9c', 'v-352cbdcb']
          },
          JS: {
            path: '/category/js/',
            keys: [
              'v-b718a028',
              'v-63737a94',
              'v-74875426',
              'v-36b1da14',
              'v-246bef6e',
              'v-6e634088',
              'v-3ead2f48',
              'v-7bea55ce',
              'v-77271408',
              'v-5f49510e',
              'v-e50f465a'
            ]
          },
          React: {
            path: '/category/react/',
            keys: [
              'v-58a8e13c',
              'v-d029f7dc',
              'v-176aef0e',
              'v-67e92153',
              'v-74948506',
              'v-8f032ab2',
              'v-0f86a3bd',
              'v-0cc32b96',
              'v-26da8c91',
              'v-4648a5f2'
            ]
          },
          CSS世界阅读笔记: {
            path: '/category/css%E4%B8%96%E7%95%8C%E9%98%85%E8%AF%BB%E7%AC%94%E8%AE%B0/',
            keys: ['v-b0785230']
          },
          Vue: {
            path: '/category/vue/',
            keys: [
              'v-6448b763',
              'v-539c1268',
              'v-619f771c',
              'v-f61a2544',
              'v-0c2e89ed',
              'v-a1d83b16',
              'v-62d8b48e',
              'v-3fffe92b',
              'v-6e32e664',
              'v-9710e106',
              'v-605eaf1c',
              'v-02dff447',
              'v-de29251e',
              'v-0699cd05',
              'v-5fe28728',
              'v-f0654642',
              'v-7d1f9d1b'
            ]
          },
          Vue2: {
            path: '/category/vue2/',
            keys: ['v-4d15f9ed', 'v-cbf738c2', 'v-51dc1186', 'v-a41a7cf8']
          },
          '前端开发 - 前端图形 - Three.js': {
            path: '/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91---%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2---three.js/',
            keys: [
              'v-624dbca4',
              'v-0f704b9a',
              'v-a038728c',
              'v-310bd976',
              'v-3913334e',
              'v-88684426'
            ]
          },
          Canvas: { path: '/category/canvas/', keys: ['v-e0cbd8ee'] },
          '前端图形 - 玩转CSS艺术之美': {
            path: '/category/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2---%E7%8E%A9%E8%BD%ACcss%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/',
            keys: ['v-de5de07e']
          },
          玩转CSS艺术之美: {
            path: '/category/%E7%8E%A9%E8%BD%ACcss%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/',
            keys: ['v-0583f47c']
          },
          前端基石: {
            path: '/category/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/',
            keys: [
              'v-b4a0489a',
              'v-0e03c0ba',
              'v-5e7cbd2c',
              'v-0999edd9',
              'v-386957f2',
              'v-f28bccce',
              'v-06f83f68',
              'v-59921c4f',
              'v-2954760d',
              'v-e12f83da',
              'v-0a9e9975',
              'v-6b45e24e',
              'v-120e4f10',
              'v-835caad4',
              'v-0f51c0e6',
              'v-5a1eb93a',
              'v-5bfdfb20',
              'v-a0f6ed6e',
              'v-9c47fa7e',
              'v-71430068',
              'v-3118468a',
              'v-ff563d60',
              'v-5892f4fc',
              'v-d3697fb0',
              'v-15fc8bce',
              'v-f47c39e8',
              'v-43dbda5f',
              'v-74457929',
              'v-10c9918b',
              'v-d5fc2992',
              'v-45706c20',
              'v-538d677a'
            ]
          },
          CSS3: {
            path: '/category/css3/',
            keys: [
              'v-b4a0489a',
              'v-0e03c0ba',
              'v-5e7cbd2c',
              'v-0999edd9',
              'v-386957f2',
              'v-f28bccce'
            ]
          },
          JS基础: {
            path: '/category/js%E5%9F%BA%E7%A1%80/',
            keys: [
              'v-59921c4f',
              'v-2954760d',
              'v-e12f83da',
              'v-0a9e9975',
              'v-6b45e24e',
              'v-120e4f10',
              'v-835caad4',
              'v-0f51c0e6',
              'v-5a1eb93a'
            ]
          },
          前端框架: {
            path: '/category/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/',
            keys: [
              'v-d029f7dc',
              'v-176aef0e',
              'v-67e92153',
              'v-74948506',
              'v-8f032ab2',
              'v-0f86a3bd',
              'v-0cc32b96',
              'v-26da8c91',
              'v-4648a5f2',
              'v-02dff447',
              'v-de29251e',
              'v-0699cd05',
              'v-5fe28728',
              'v-f0654642',
              'v-7d1f9d1b',
              'v-1a302d61',
              'v-744d79a4',
              'v-694e6903',
              'v-055d5656',
              'v-4f772ce9',
              'v-3396cd48'
            ]
          },
          '前端开发 - 前端进阶 - JS高级': {
            path: '/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91---%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6---js%E9%AB%98%E7%BA%A7/',
            keys: ['v-48df62da']
          },
          ES6: {
            path: '/category/es6/',
            keys: [
              'v-6b521627',
              'v-09af57da',
              'v-080e7088',
              'v-03fc2edc',
              'v-724a3fc0',
              'v-a4bf6a92',
              'v-5357faee',
              'v-43faf7f8',
              'v-94ff530a',
              'v-2d3fb87c',
              'v-7f9cc112',
              'v-4f3e6294',
              'v-011b7805'
            ]
          },
          '前端开发 - 前端进阶 - TypeScript': {
            path: '/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91---%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6---typescript/',
            keys: ['v-f2525b1a', 'v-2ce8218c']
          },
          数据结构与算法: {
            path: '/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/',
            keys: [
              'v-13fb1133',
              'v-29fb20db',
              'v-52ef6fc3',
              'v-61c295f3',
              'v-5ba50a24',
              'v-adf81840'
            ]
          },
          算法: { path: '/category/%E7%AE%97%E6%B3%95/', keys: ['v-aae17a9c'] },
          数据结构算法: {
            path: '/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/',
            keys: ['v-4bf7c004']
          },
          移动开发: {
            path: '/category/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/',
            keys: ['v-6bf2c5ad']
          },
          重学前端: {
            path: '/category/%E9%87%8D%E5%AD%A6%E5%89%8D%E7%AB%AF/',
            keys: ['v-7520a2b4']
          },
          nest: { path: '/category/nest/', keys: ['v-15875df2', 'v-5363f5e2'] },
          'Next.js': {
            path: '/category/next.js/',
            keys: ['v-1a302d61', 'v-744d79a4']
          }
        }
      }
    },
    tag: {
      '/': {
        path: '/tag/',
        map: {
          HTTP: { path: '/tag/http/', keys: ['v-4c2784f0'] },
          Ajax: { path: '/tag/ajax/', keys: ['v-4c2784f0'] },
          axios: { path: '/tag/axios/', keys: ['v-4c2784f0'] },
          Cookie: { path: '/tag/cookie/', keys: ['v-7c618c22'] },
          localStorage: { path: '/tag/localstorage/', keys: ['v-7c618c22'] },
          sessionStorage: {
            path: '/tag/sessionstorage/',
            keys: ['v-7c618c22']
          },
          项目总结: {
            path: '/tag/%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/',
            keys: [
              'v-148827a0',
              'v-14634a24',
              'v-2c119a0c',
              'v-0f1df674',
              'v-92c8dac6',
              'v-35eea18b',
              'v-d6005d76',
              'v-03d76054',
              'v-6b85e19e',
              'v-22f9d806',
              'v-71bd102f',
              'v-b2f45cfc',
              'v-88057dd2',
              'v-3443c502',
              'v-6430d112'
            ]
          },
          Vue: {
            path: '/tag/vue/',
            keys: ['v-14634a24', 'v-2c119a0c', 'v-0f1df674', 'v-055d5656']
          },
          代码规范: {
            path: '/tag/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/',
            keys: ['v-a0f5bfd2', 'v-67ae34e2', 'v-1221fd78']
          },
          Flex: { path: '/tag/flex/', keys: ['v-c291d276'] },
          Sass: { path: '/tag/sass/', keys: ['v-7b780ad4'] },
          前端工程化: {
            path: '/tag/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/',
            keys: [
              'v-d6e48cfe',
              'v-12975cb0',
              'v-00140707',
              'v-6dee9d16',
              'v-a988658e',
              'v-55e548c0',
              'v-c0487376',
              'v-0202caaf',
              'v-1ff4e172',
              'v-080d42c3',
              'v-06367869',
              'v-05920706',
              'v-4880d4a6',
              'v-03a50e3c',
              'v-3109a60f',
              'v-4930d5a1'
            ]
          },
          随笔: {
            path: '/tag/%E9%9A%8F%E7%AC%94/',
            keys: ['v-76bfbc3c', 'v-b56c971e']
          },
          chrome架构: {
            path: '/tag/chrome%E6%9E%B6%E6%9E%84/',
            keys: ['v-2630ab4c']
          },
          算法: {
            path: '/tag/%E7%AE%97%E6%B3%95/',
            keys: ['v-5e40b5d5', 'v-94e632d0']
          },
          node: { path: '/tag/node/', keys: ['v-b29f1a14', 'v-7c9eb5bd'] },
          npm: { path: '/tag/npm/', keys: ['v-b29f1a14'] },
          yarn: { path: '/tag/yarn/', keys: ['v-b29f1a14'] },
          commonJs: { path: '/tag/commonjs/', keys: ['v-b29f1a14'] },
          nrm: { path: '/tag/nrm/', keys: ['v-b29f1a14'] },
          nvm: { path: '/tag/nvm/', keys: ['v-b29f1a14'] },
          python: { path: '/tag/python/', keys: ['v-7ca6d646'] },
          MongoDB: { path: '/tag/mongodb/', keys: ['v-b7685482'] },
          mongoose: {
            path: '/tag/mongoose/',
            keys: ['v-b7685482', 'v-33770c83']
          },
          mysql: { path: '/tag/mysql/', keys: ['v-44dbb96f'] },
          mongodb: { path: '/tag/mongodb/', keys: ['v-33770c83'] },
          日常: { path: '/tag/%E6%97%A5%E5%B8%B8/', keys: ['v-c4f32fc8'] },
          严格模式: {
            path: '/tag/%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F/',
            keys: ['v-63737a94']
          },
          闭包: { path: '/tag/%E9%97%AD%E5%8C%85/', keys: ['v-e50f465a'] },
          elementUI: {
            path: '/tag/elementui/',
            keys: ['v-539c1268', 'v-619f771c', 'v-f61a2544', 'v-605eaf1c']
          },
          vue2: {
            path: '/tag/vue2/',
            keys: [
              'v-539c1268',
              'v-619f771c',
              'v-f61a2544',
              'v-0c2e89ed',
              'v-a1d83b16',
              'v-4d15f9ed',
              'v-62d8b48e',
              'v-51dc1186',
              'v-a41a7cf8',
              'v-605eaf1c'
            ]
          },
          vue3: {
            path: '/tag/vue3/',
            keys: ['v-0c2e89ed', 'v-6e32e664', 'v-9710e106']
          },
          原理: { path: '/tag/%E5%8E%9F%E7%90%86/', keys: ['v-0c2e89ed'] },
          echarts: { path: '/tag/echarts/', keys: ['v-a1d83b16'] },
          lodash: { path: '/tag/lodash/', keys: ['v-4d15f9ed'] },
          vite3: { path: '/tag/vite3/', keys: ['v-6e32e664'] },
          Pinia: { path: '/tag/pinia/', keys: ['v-9710e106'] },
          ElementPlus: { path: '/tag/elementplus/', keys: ['v-9710e106'] },
          vite: { path: '/tag/vite/', keys: ['v-9710e106'] },
          'Vue-Router': { path: '/tag/vue-router/', keys: ['v-9710e106'] },
          RABC后台管理系统: {
            path: '/tag/rabc%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/',
            keys: ['v-9710e106']
          },
          Canvas基础: {
            path: '/tag/canvas%E5%9F%BA%E7%A1%80/',
            keys: ['v-e0cbd8ee']
          },
          CSS3: {
            path: '/tag/css3/',
            keys: ['v-5bfdfb20', 'v-9c47fa7e', 'v-71430068', 'v-15fc8bce']
          },
          HTML5: {
            path: '/tag/html5/',
            keys: [
              'v-06f83f68',
              'v-d3697fb0',
              'v-f47c39e8',
              'v-43dbda5f',
              'v-74457929'
            ]
          },
          JS基础: {
            path: '/tag/js%E5%9F%BA%E7%A1%80/',
            keys: [
              'v-a0f6ed6e',
              'v-3118468a',
              'v-ff563d60',
              'v-5892f4fc',
              'v-10c9918b',
              'v-d5fc2992',
              'v-45706c20',
              'v-538d677a'
            ]
          },
          BOM: { path: '/tag/bom/', keys: ['v-59921c4f'] },
          DOM: { path: '/tag/dom/', keys: ['v-2954760d'] },
          函数: { path: '/tag/%E5%87%BD%E6%95%B0/', keys: ['v-e12f83da'] },
          变量: { path: '/tag/%E5%8F%98%E9%87%8F/', keys: ['v-0a9e9975'] },
          数据类型: {
            path: '/tag/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/',
            keys: ['v-0a9e9975']
          },
          操作符: {
            path: '/tag/%E6%93%8D%E4%BD%9C%E7%AC%A6/',
            keys: ['v-6b45e24e']
          },
          数组: { path: '/tag/%E6%95%B0%E7%BB%84/', keys: ['v-120e4f10'] },
          数组方法: {
            path: '/tag/%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95/',
            keys: ['v-120e4f10']
          },
          正则表达式: {
            path: '/tag/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/',
            keys: ['v-835caad4']
          },
          流程控制: {
            path: '/tag/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/',
            keys: ['v-0f51c0e6']
          },
          对象: { path: '/tag/%E5%AF%B9%E8%B1%A1/', keys: ['v-5a1eb93a'] },
          原型: { path: '/tag/%E5%8E%9F%E5%9E%8B/', keys: ['v-5a1eb93a'] },
          原型链: {
            path: '/tag/%E5%8E%9F%E5%9E%8B%E9%93%BE/',
            keys: ['v-5a1eb93a']
          },
          React: {
            path: '/tag/react/',
            keys: ['v-694e6903', 'v-4f772ce9', 'v-3396cd48']
          },
          Class: { path: '/tag/class/', keys: ['v-6b521627'] },
          ES6新增方法: {
            path: '/tag/es6%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95/',
            keys: ['v-09af57da']
          },
          Generator: { path: '/tag/generator/', keys: ['v-080e7088'] },
          Module: { path: '/tag/module/', keys: ['v-03fc2edc'] },
          export: { path: '/tag/export/', keys: ['v-03fc2edc'] },
          'export default': {
            path: '/tag/export-default/',
            keys: ['v-03fc2edc']
          },
          Promise: { path: '/tag/promise/', keys: ['v-724a3fc0'] },
          异步: { path: '/tag/%E5%BC%82%E6%AD%A5/', keys: ['v-724a3fc0'] },
          Proxy: { path: '/tag/proxy/', keys: ['v-a4bf6a92'] },
          Reflect: { path: '/tag/reflect/', keys: ['v-a4bf6a92'] },
          Set: { path: '/tag/set/', keys: ['v-5357faee'] },
          Map: { path: '/tag/map/', keys: ['v-5357faee'] },
          let: { path: '/tag/let/', keys: ['v-43faf7f8'] },
          const: { path: '/tag/const/', keys: ['v-43faf7f8'] },
          剩余参数: {
            path: '/tag/%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0/',
            keys: ['v-94ff530a']
          },
          展开运算符: {
            path: '/tag/%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6/',
            keys: ['v-94ff530a']
          },
          对象字面量: {
            path: '/tag/%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F/',
            keys: ['v-2d3fb87c']
          },
          函数参数默认值: {
            path: '/tag/%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E9%BB%98%E8%AE%A4%E5%80%BC/',
            keys: ['v-2d3fb87c']
          },
          模板字符串: {
            path: '/tag/%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2/',
            keys: ['v-7f9cc112']
          },
          箭头函数: {
            path: '/tag/%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0/',
            keys: ['v-7f9cc112']
          },
          解构赋值: {
            path: '/tag/%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC/',
            keys: ['v-4f3e6294']
          },
          遍历器: {
            path: '/tag/%E9%81%8D%E5%8E%86%E5%99%A8/',
            keys: ['v-011b7805']
          },
          forof: { path: '/tag/forof/', keys: ['v-011b7805'] },
          图: { path: '/tag/%E5%9B%BE/', keys: ['v-13fb1133'] },
          字典: { path: '/tag/%E5%AD%97%E5%85%B8/', keys: ['v-aae17a9c'] },
          时间复杂度: {
            path: '/tag/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6/',
            keys: ['v-4bf7c004']
          },
          空间复杂度: {
            path: '/tag/%E7%A9%BA%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6/',
            keys: ['v-4bf7c004']
          },
          栈: { path: '/tag/%E6%A0%88/', keys: ['v-29fb20db'] },
          树: { path: '/tag/%E6%A0%91/', keys: ['v-52ef6fc3'] },
          链表: { path: '/tag/%E9%93%BE%E8%A1%A8/', keys: ['v-61c295f3'] },
          队列: { path: '/tag/%E9%98%9F%E5%88%97/', keys: ['v-5ba50a24'] },
          集合: { path: '/tag/%E9%9B%86%E5%90%88/', keys: ['v-adf81840'] },
          移动开发: {
            path: '/tag/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/',
            keys: [
              'v-3cbc3bf2',
              'v-8624ebe2',
              'v-1d357774',
              'v-7da81af2',
              'v-a6a85388',
              'v-2ba61c6e'
            ]
          },
          移动Web: {
            path: '/tag/%E7%A7%BB%E5%8A%A8web/',
            keys: ['v-6bf2c5ad']
          },
          JavaScript: { path: '/tag/javascript/', keys: ['v-7520a2b4'] },
          ReactNative: {
            path: '/tag/reactnative/',
            keys: ['v-a6a85388', 'v-2ba61c6e']
          }
        }
      }
    }
  },
  sB = {
    article: {
      '/': {
        path: '/article/',
        keys: [
          'v-a9d475b0',
          'v-2af1522a',
          'v-4c2784f0',
          'v-7c618c22',
          'v-eee9b25a',
          'v-2307de2e',
          'v-6173ac40',
          'v-c291d276',
          'v-7b780ad4',
          'v-222b7bd2',
          'v-6b16d8cf',
          'v-2630ab4c',
          'v-a37f46a2',
          'v-0ebfad97',
          'v-5ccd377a',
          'v-c1183614',
          'v-b29f1a14',
          'v-b7685482',
          'v-431839f8',
          'v-44dbb96f',
          'v-33770c83',
          'v-fab7c824',
          'v-0dd559df',
          'v-1a64708b',
          'v-3af3a18d',
          'v-170a91f0',
          'v-f7cd8a78',
          'v-1fe05178',
          'v-10b4f0b9',
          'v-19f5ef16',
          'v-4b7687bc',
          'v-8f0ffe7a',
          'v-a301ec1a',
          'v-a67cb7e4',
          'v-c4f32fc8',
          'v-2d401c52',
          'v-0762220d',
          'v-29397a28',
          'v-e3451e9c',
          'v-352cbdcb',
          'v-b718a028',
          'v-63737a94',
          'v-74875426',
          'v-36b1da14',
          'v-246bef6e',
          'v-6e634088',
          'v-3ead2f48',
          'v-7bea55ce',
          'v-77271408',
          'v-5f49510e',
          'v-e50f465a',
          'v-58a8e13c',
          'v-b0785230',
          'v-6448b763',
          'v-539c1268',
          'v-619f771c',
          'v-f61a2544',
          'v-0c2e89ed',
          'v-a1d83b16',
          'v-4d15f9ed',
          'v-62d8b48e',
          'v-3fffe92b',
          'v-cbf738c2',
          'v-51dc1186',
          'v-a41a7cf8',
          'v-6e32e664',
          'v-9710e106',
          'v-605eaf1c',
          'v-624dbca4',
          'v-c5f1abc2',
          'v-0f704b9a',
          'v-a038728c',
          'v-310bd976',
          'v-3913334e',
          'v-88684426',
          'v-e0cbd8ee',
          'v-de5de07e',
          'v-0583f47c',
          'v-b4a0489a',
          'v-0e03c0ba',
          'v-5e7cbd2c',
          'v-0999edd9',
          'v-386957f2',
          'v-f28bccce',
          'v-06f83f68',
          'v-59921c4f',
          'v-2954760d',
          'v-e12f83da',
          'v-0a9e9975',
          'v-6b45e24e',
          'v-120e4f10',
          'v-835caad4',
          'v-0f51c0e6',
          'v-5a1eb93a',
          'v-d029f7dc',
          'v-2aea1902',
          'v-176aef0e',
          'v-67e92153',
          'v-74948506',
          'v-8f032ab2',
          'v-0f86a3bd',
          'v-0cc32b96',
          'v-26da8c91',
          'v-4648a5f2',
          'v-02dff447',
          'v-34a3c34a',
          'v-de29251e',
          'v-0699cd05',
          'v-5fe28728',
          'v-f0654642',
          'v-7d1f9d1b',
          'v-7badcaf4',
          'v-48df62da',
          'v-6b521627',
          'v-09af57da',
          'v-080e7088',
          'v-03fc2edc',
          'v-724a3fc0',
          'v-a4bf6a92',
          'v-5357faee',
          'v-43faf7f8',
          'v-94ff530a',
          'v-2d3fb87c',
          'v-7f9cc112',
          'v-4f3e6294',
          'v-011b7805',
          'v-59377d8f',
          'v-f2525b1a',
          'v-2ce8218c',
          'v-25d50e6e',
          'v-13fb1133',
          'v-aae17a9c',
          'v-4bf7c004',
          'v-29fb20db',
          'v-52ef6fc3',
          'v-61c295f3',
          'v-5ba50a24',
          'v-adf81840',
          'v-6bf2c5ad',
          'v-7520a2b4',
          'v-4c4a259d',
          'v-15875df2',
          'v-5363f5e2',
          'v-5e0c8ca6',
          'v-1a302d61',
          'v-744d79a4',
          'v-346dd858',
          'v-d6e48cfe',
          'v-12975cb0',
          'v-00140707',
          'v-694e6903',
          'v-148827a0',
          'v-6dee9d16',
          'v-5e40b5d5',
          'v-a988658e',
          'v-14634a24',
          'v-2c119a0c',
          'v-5bfdfb20',
          'v-4171ac0a',
          'v-0f1df674',
          'v-92c8dac6',
          'v-55e548c0',
          'v-055d5656',
          'v-744babfe',
          'v-13e4bea5',
          'v-35eea18b',
          'v-d6005d76',
          'v-c0487376',
          'v-03d76054',
          'v-aceef52a',
          'v-3b82417d',
          'v-a9a4a7b2',
          'v-2632ab89',
          'v-432133da',
          'v-2f3b8ddd',
          'v-a0f6ed6e',
          'v-9c47fa7e',
          'v-6b85e19e',
          'v-71430068',
          'v-22f9d806',
          'v-0202caaf',
          'v-76bfbc3c',
          'v-a0f5bfd2',
          'v-67ae34e2',
          'v-b56c971e',
          'v-3118468a',
          'v-1ff4e172',
          'v-71bd102f',
          'v-080d42c3',
          'v-b2f45cfc',
          'v-ff563d60',
          'v-5892f4fc',
          'v-1221fd78',
          'v-7ca6d646',
          'v-88057dd2',
          'v-06367869',
          'v-4f772ce9',
          'v-05920706',
          'v-d3697fb0',
          'v-3443c502',
          'v-6430d112',
          'v-4880d4a6',
          'v-03a50e3c',
          'v-3109a60f',
          'v-4930d5a1',
          'v-94e632d0',
          'v-7c9eb5bd',
          'v-15fc8bce',
          'v-f47c39e8',
          'v-43dbda5f',
          'v-74457929',
          'v-10c9918b',
          'v-d5fc2992',
          'v-45706c20',
          'v-3396cd48',
          'v-3cbc3bf2',
          'v-8624ebe2',
          'v-1d357774',
          'v-7da81af2',
          'v-a6a85388',
          'v-2ba61c6e',
          'v-538d677a'
        ]
      }
    },
    star: { '/': { path: '/star/', keys: [] } },
    timeline: {
      '/': {
        path: '/timeline/',
        keys: [
          'v-a9d475b0',
          'v-2af1522a',
          'v-4c2784f0',
          'v-7c618c22',
          'v-eee9b25a',
          'v-2307de2e',
          'v-6173ac40',
          'v-c291d276',
          'v-7b780ad4',
          'v-222b7bd2',
          'v-6b16d8cf',
          'v-2630ab4c',
          'v-a37f46a2',
          'v-0ebfad97',
          'v-5ccd377a',
          'v-c1183614',
          'v-b29f1a14',
          'v-b7685482',
          'v-431839f8',
          'v-44dbb96f',
          'v-33770c83',
          'v-fab7c824',
          'v-0dd559df',
          'v-1a64708b',
          'v-3af3a18d',
          'v-170a91f0',
          'v-f7cd8a78',
          'v-1fe05178',
          'v-10b4f0b9',
          'v-19f5ef16',
          'v-4b7687bc',
          'v-8f0ffe7a',
          'v-a301ec1a',
          'v-a67cb7e4',
          'v-c4f32fc8',
          'v-2d401c52',
          'v-0762220d',
          'v-29397a28',
          'v-e3451e9c',
          'v-352cbdcb',
          'v-b718a028',
          'v-63737a94',
          'v-74875426',
          'v-36b1da14',
          'v-246bef6e',
          'v-6e634088',
          'v-3ead2f48',
          'v-7bea55ce',
          'v-77271408',
          'v-5f49510e',
          'v-e50f465a',
          'v-58a8e13c',
          'v-b0785230',
          'v-6448b763',
          'v-539c1268',
          'v-619f771c',
          'v-f61a2544',
          'v-0c2e89ed',
          'v-a1d83b16',
          'v-4d15f9ed',
          'v-62d8b48e',
          'v-3fffe92b',
          'v-cbf738c2',
          'v-51dc1186',
          'v-a41a7cf8',
          'v-6e32e664',
          'v-9710e106',
          'v-605eaf1c',
          'v-624dbca4',
          'v-c5f1abc2',
          'v-0f704b9a',
          'v-a038728c',
          'v-310bd976',
          'v-3913334e',
          'v-88684426',
          'v-e0cbd8ee',
          'v-de5de07e',
          'v-0583f47c',
          'v-b4a0489a',
          'v-0e03c0ba',
          'v-5e7cbd2c',
          'v-0999edd9',
          'v-386957f2',
          'v-f28bccce',
          'v-06f83f68',
          'v-59921c4f',
          'v-2954760d',
          'v-e12f83da',
          'v-0a9e9975',
          'v-6b45e24e',
          'v-120e4f10',
          'v-835caad4',
          'v-0f51c0e6',
          'v-5a1eb93a',
          'v-d029f7dc',
          'v-2aea1902',
          'v-176aef0e',
          'v-67e92153',
          'v-74948506',
          'v-8f032ab2',
          'v-0f86a3bd',
          'v-0cc32b96',
          'v-26da8c91',
          'v-4648a5f2',
          'v-02dff447',
          'v-34a3c34a',
          'v-de29251e',
          'v-0699cd05',
          'v-5fe28728',
          'v-f0654642',
          'v-7d1f9d1b',
          'v-7badcaf4',
          'v-48df62da',
          'v-6b521627',
          'v-09af57da',
          'v-080e7088',
          'v-03fc2edc',
          'v-724a3fc0',
          'v-a4bf6a92',
          'v-5357faee',
          'v-43faf7f8',
          'v-94ff530a',
          'v-2d3fb87c',
          'v-7f9cc112',
          'v-4f3e6294',
          'v-011b7805',
          'v-59377d8f',
          'v-f2525b1a',
          'v-2ce8218c',
          'v-25d50e6e',
          'v-13fb1133',
          'v-aae17a9c',
          'v-4bf7c004',
          'v-29fb20db',
          'v-52ef6fc3',
          'v-61c295f3',
          'v-5ba50a24',
          'v-adf81840',
          'v-6bf2c5ad',
          'v-7520a2b4',
          'v-4c4a259d',
          'v-15875df2',
          'v-5363f5e2',
          'v-5e0c8ca6',
          'v-1a302d61',
          'v-744d79a4',
          'v-346dd858',
          'v-d6e48cfe',
          'v-12975cb0',
          'v-00140707',
          'v-694e6903',
          'v-148827a0',
          'v-6dee9d16',
          'v-5e40b5d5',
          'v-a988658e',
          'v-14634a24',
          'v-2c119a0c',
          'v-5bfdfb20',
          'v-4171ac0a',
          'v-0f1df674',
          'v-92c8dac6',
          'v-55e548c0',
          'v-055d5656',
          'v-744babfe',
          'v-13e4bea5',
          'v-35eea18b',
          'v-d6005d76',
          'v-c0487376',
          'v-03d76054',
          'v-aceef52a',
          'v-3b82417d',
          'v-a9a4a7b2',
          'v-2632ab89',
          'v-432133da',
          'v-2f3b8ddd',
          'v-a0f6ed6e',
          'v-9c47fa7e',
          'v-6b85e19e',
          'v-71430068',
          'v-22f9d806',
          'v-0202caaf',
          'v-76bfbc3c',
          'v-a0f5bfd2',
          'v-67ae34e2',
          'v-b56c971e',
          'v-3118468a',
          'v-1ff4e172',
          'v-71bd102f',
          'v-080d42c3',
          'v-b2f45cfc',
          'v-ff563d60',
          'v-5892f4fc',
          'v-1221fd78',
          'v-7ca6d646',
          'v-88057dd2',
          'v-06367869',
          'v-4f772ce9',
          'v-05920706',
          'v-d3697fb0',
          'v-3443c502',
          'v-6430d112',
          'v-4880d4a6',
          'v-03a50e3c',
          'v-3109a60f',
          'v-4930d5a1',
          'v-94e632d0',
          'v-7c9eb5bd',
          'v-15fc8bce',
          'v-f47c39e8',
          'v-43dbda5f',
          'v-74457929',
          'v-10c9918b',
          'v-d5fc2992',
          'v-45706c20',
          'v-3396cd48',
          'v-3cbc3bf2',
          'v-8624ebe2',
          'v-1d357774',
          'v-7da81af2',
          'v-a6a85388',
          'v-2ba61c6e',
          'v-538d677a'
        ]
      }
    }
  },
  pl = U(lB),
  Uc = (e = '') => {
    const t = de(),
      r = qe(),
      n = Vt()
    return y(() => {
      var E
      const o = e || ((E = Fe().value.blog) == null ? void 0 : E.key) || ''
      if (!o)
        return (
          console.warn('useBlogCategory: key not found'), { path: '/', map: {} }
        )
      const a = r.getRoutes()
      if (!pl.value[o]) throw new Error(`useBlogCategory: key ${o} is invalid`)
      const l = pl.value[o][n.value],
        s = { path: l.path, map: {} }
      for (const c in l.map) {
        const d = l.map[c]
        s.map[c] = { path: d.path, items: [] }
        for (const A of d.keys) {
          const B = a.find(({ name: p }) => p === A)
          if (B) {
            const p = un(r, B.path)
            s.map[c].items.push({ path: p.path, info: p.meta })
          }
        }
        t.value.path === d.path && (s.currentItems = s.map[c].items)
      }
      return s
    })
  },
  fl = U(sB),
  fo = (e = '') => {
    const t = qe(),
      r = Vt()
    return y(() => {
      var n
      const E = e || ((n = Fe().value.blog) == null ? void 0 : n.key) || ''
      if (!E)
        return (
          console.warn('useBlogType: key not found'), { path: '/', items: [] }
        )
      if (!fl.value[E]) throw new Error(`useBlogType: key ${e} is invalid`)
      const o = t.getRoutes(),
        a = fl.value[E][r.value],
        l = { path: a.path, items: [] }
      for (const s of a.keys) {
        const c = o.find(({ name: d }) => d === s)
        if (c) {
          const d = un(t, c.path)
          l.items.push({ path: d.path, info: d.meta })
        }
      }
      return l
    })
  }
const cB = './assets/hero-197a9d2d.jpg',
  qc = Symbol.for('categoryMap'),
  uE = () => {
    const e = me(qc)
    if (!e) throw new Error('useCategoryMap() is called without provider.')
    return e
  },
  uB = () => {
    const e = Uc('category')
    Dt(qc, e)
  },
  dE = () => {
    const e = fr(),
      t = ue()
    return y(() => ({ ...e.value.blog, ...t.value.blog }))
  },
  Wc = Symbol.for('tagMap'),
  AE = () => {
    const e = me(Wc)
    if (!e) throw new Error('useTagMap() is called without provider.')
    return e
  },
  dB = () => {
    const e = Uc('tag')
    Dt(Wc, e)
  },
  AB = e => {
    const t = ue()
    return y(() => {
      const { [ye.author]: r } = e.value
      return r ? Xn(r) : r === !1 ? [] : Xn(t.value.author, !1)
    })
  },
  BB = e => {
    const t = uE()
    return y(() =>
      C5(e.value[ye.category]).map(r => ({
        name: r,
        path: t.value.map[r].path
      }))
    )
  },
  vB = e => {
    const t = AE()
    return y(() =>
      S5(e.value[ye.tag]).map(r => ({ name: r, path: t.value.map[r].path }))
    )
  },
  pB = e =>
    y(() => {
      const { [ye.date]: t } = e.value
      return B8(t)
    }),
  fB = e => {
    const t = Mr(e, 'info'),
      r = dE(),
      n = AB(t),
      E = BB(t),
      o = vB(t),
      a = pB(t),
      l = ac(),
      s = y(() => ({
        author: n.value,
        category: E.value,
        date: a.value,
        localizedDate: t.value[ye.localizedDate] || '',
        tag: o.value,
        isOriginal: t.value[ye.isOriginal] || !1,
        readingTime: t.value[ye.readingTime] || null,
        readingTimeLocale:
          t.value[ye.readingTime] && l.value
            ? oc(t.value[ye.readingTime], l.value)
            : null,
        pageview: e.path
      })),
      c = y(() => r.value.articleInfo)
    return { info: s, items: c }
  },
  Kc = Symbol(''),
  BE = () => {
    const e = me(Kc)
    if (!e) throw new Error('useArticles() is called without provider.')
    return e
  },
  mB = () => {
    const e = fo('article')
    Dt(Kc, e)
  },
  Gc = Symbol(''),
  I8 = () => {
    const e = me(Gc)
    if (!e) throw new Error('useStars() is called without provider.')
    return e
  },
  hB = () => {
    const e = fo('star')
    Dt(Gc, e)
  },
  Xc = Symbol(''),
  L8 = () => {
    const e = me(Xc)
    if (!e) throw new Error('useTimelines() is called without provider.')
    return e
  },
  _B = () => {
    const e = fo('timeline'),
      t = y(() => {
        const r = []
        return (
          e.value.items.forEach(({ info: n, path: E }) => {
            const o = B8(n[ye.date]),
              a = o == null ? void 0 : o.getFullYear(),
              l = o ? o.getMonth() + 1 : null,
              s = o == null ? void 0 : o.getDate()
            a &&
              l &&
              s &&
              ((!r[0] || r[0].year !== a) && r.unshift({ year: a, items: [] }),
              r[0].items.push({ date: `${l}/${s}`, info: n, path: E }))
          }),
          { ...e.value, config: r.reverse() }
        )
      })
    Dt(Xc, t)
  },
  gB = () => {
    mB(), uB(), hB(), dB(), _B()
  }
var FB = M({
    name: 'SocialMedia',
    setup() {
      const e = dE(),
        t = _n(),
        r = y(() => {
          const n = e.value.medias
          return n
            ? mn(n).map(([E, o]) => ({ name: E, icon: iB[E], url: o }))
            : []
        })
      return () =>
        r.value.length
          ? u(
              'div',
              { class: 'vp-social-medias' },
              r.value.map(({ name: n, icon: E, url: o }) =>
                u('a', {
                  class: 'vp-social-media',
                  href: o,
                  rel: 'noopener noreferrer',
                  target: '_blank',
                  'aria-label': n,
                  ...(t.value ? {} : { 'data-balloon-pos': 'up' }),
                  innerHTML: E
                })
              )
            )
          : null
    }
  }),
  P8 = M({
    name: 'BloggerInfo',
    setup() {
      const e = dE(),
        t = oE(),
        r = ue(),
        n = BE(),
        E = uE(),
        o = AE(),
        a = L8(),
        l = lE(),
        s = y(() => {
          var B
          return (
            e.value.name ||
            ((B = Xn(r.value.author)[0]) == null ? void 0 : B.name) ||
            t.value.title
          )
        }),
        c = y(() => e.value.avatar || r.value.logo),
        d = y(() => r.value.blogLocales),
        A = y(() => e.value.intro)
      return () => {
        const { article: B, category: p, tag: f, timeline: F } = d.value,
          S = [
            [n.value.path, n.value.items.length, B],
            [E.value.path, st(E.value.map).length, p],
            [o.value.path, st(o.value.map).length, f],
            [a.value.path, a.value.items.length, F]
          ]
        return u(
          'div',
          {
            class: 'vp-blogger-info',
            vocab: 'https://schema.org/',
            typeof: 'Person'
          },
          [
            u(
              'div',
              {
                class: 'vp-blogger',
                ...(A.value
                  ? {
                      style: { cursor: 'pointer' },
                      'aria-label': d.value.intro,
                      'data-balloon-pos': 'down',
                      role: 'navigation',
                      onClick: () => l(A.value)
                    }
                  : {})
              },
              [
                c.value
                  ? u('img', {
                      class: [
                        'vp-blogger-avatar',
                        { round: e.value.roundAvatar }
                      ],
                      src: Se(c.value),
                      property: 'image',
                      alt: 'Blogger Avatar'
                    })
                  : null,
                s.value
                  ? u(
                      'div',
                      { class: 'vp-blogger-name', property: 'name' },
                      s.value
                    )
                  : null,
                e.value.description
                  ? u('div', {
                      class: 'vp-blogger-description',
                      innerHTML: e.value.description
                    })
                  : null,
                A.value
                  ? u('meta', { property: 'url', content: Se(A.value) })
                  : null
              ]
            ),
            u(
              'div',
              { class: 'vp-blog-counts' },
              S.map(([D, b, g]) =>
                u(xe, { class: 'vp-blog-count', to: D }, () => [
                  u('div', { class: 'count' }, b),
                  u('div', g)
                ])
              )
            ),
            u(FB)
          ]
        )
      }
    }
  })
const Ta = () =>
  u(ce, { name: 'category' }, () =>
    u('path', {
      d: 'M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z'
    })
  )
Ta.displayName = 'CategoryIcon'
const Ra = () =>
  u(ce, { name: 'tag' }, () =>
    u('path', {
      d: 'M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z'
    })
  )
Ra.displayName = 'TagIcon'
const O8 = () =>
  u(ce, { name: 'timeline' }, () =>
    u('path', {
      d: 'M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0'
    })
  )
O8.displayName = 'TimelineIcon'
const Yc = () =>
  u(ce, { name: 'slides' }, () =>
    u('path', {
      d: 'M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z'
    })
  )
Yc.displayName = 'SlideIcon'
const Qc = () =>
  u(ce, { name: 'sticky' }, () => [
    u('path', {
      d: 'm381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z'
    })
  ])
Qc.displayName = 'StickyIcon'
const qE = () =>
  u(ce, { name: 'article' }, () =>
    u('path', {
      d: 'M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z'
    })
  )
qE.displayName = 'ArticleIcon'
const Zc = () =>
  u(ce, { name: 'book' }, () =>
    u('path', {
      d: 'M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z'
    })
  )
Zc.displayName = 'BookIcon'
const e9 = () =>
  u(ce, { name: 'link' }, () =>
    u('path', {
      d: 'M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z'
    })
  )
e9.displayName = 'LinkIcon'
const t9 = () =>
  u(ce, { name: 'project' }, () =>
    u('path', {
      d: 'M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z'
    })
  )
t9.displayName = 'ProjectIcon'
const r9 = () =>
  u(ce, { name: 'friend' }, () =>
    u('path', {
      d: 'M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z'
    })
  )
r9.displayName = 'FriendIcon'
const wa = () =>
  u(ce, { name: 'slide-down' }, () =>
    u('path', {
      d: 'M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z'
    })
  )
wa.displayName = 'SlideDownIcon'
const n9 = () =>
  u('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    class: 'empty-icon',
    viewBox: '0 0 1024 1024',
    innerHTML:
      '<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'
  })
n9.displayName = 'EmptyIcon'
const E9 = () =>
  u(ce, { name: 'lock' }, () =>
    u('path', {
      d: 'M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z'
    })
  )
E9.displayName = 'LockIcon'
var DB = M({
    name: 'ArticleItem',
    props: {
      info: { type: Object, required: !0 },
      path: { type: String, required: !0 }
    },
    slots: Object,
    setup(e, { slots: t }) {
      const r = Mr(e, 'info'),
        { info: n, items: E } = fB(e)
      return () => {
        var o, a, l
        const {
            [ye.title]: s,
            [ye.type]: c,
            [ye.isEncrypted]: d = !1,
            [ye.cover]: A,
            [ye.excerpt]: B,
            [ye.sticky]: p
          } = r.value,
          f = n.value
        return u(
          'div',
          { class: 'vp-article-wrapper' },
          u(
            'article',
            {
              class: 'vp-article-item',
              vocab: 'https://schema.org/',
              typeof: 'Article'
            },
            [
              ((o = t.cover) == null ? void 0 : o.call(t, { cover: A })) ||
                (A
                  ? [
                      u('img', { class: 'vp-article-cover', src: Se(A) }),
                      u('meta', { property: 'image', content: Se(A) })
                    ]
                  : []),
              p ? u(Qc) : null,
              u(xe, { to: e.path }, () => {
                var F
                return (
                  ((F = t.title) == null
                    ? void 0
                    : F.call(t, { title: s, isEncrypted: d, type: c })) ||
                  u('header', { class: 'vp-article-title' }, [
                    d ? u(E9) : null,
                    c === lc.slide ? u(Yc) : null,
                    u('span', { property: 'headline' }, s)
                  ])
                )
              }),
              ((a = t.excerpt) == null ? void 0 : a.call(t, { excerpt: B })) ||
                (B
                  ? u('div', { class: 'vp-article-excerpt', innerHTML: B })
                  : null),
              u('hr', { class: 'vp-article-hr' }),
              ((l = t.info) == null ? void 0 : l.call(t, { info: f })) ||
                u(Mc, { info: f, ...(E.value ? { items: E.value } : {}) })
            ]
          )
        )
      }
    }
  }),
  bB = M({
    name: 'Pagination',
    props: {
      total: { type: Number, default: 10 },
      perPage: { type: Number, default: 10 },
      current: { type: Number, default: 1 }
    },
    emits: ['updateCurrentPage'],
    setup(e, { emit: t }) {
      let r
      const n = ue(),
        E = U(''),
        o = y(() => n.value.paginationLocales),
        a = y(() => Math.ceil(e.total / e.perPage)),
        l = y(() => !!a.value && a.value !== 1),
        s = y(() => (a.value < 7 ? !1 : e.current > 4)),
        c = y(() => (a.value < 7 ? !1 : e.current < a.value - 3)),
        d = y(() => {
          const { current: p } = e
          let f = 1,
            F = a.value
          const S = []
          a.value >= 7 &&
            (p <= 4 && p < a.value - 3
              ? ((f = 1), (F = 5))
              : p > 4 && p >= a.value - 3
              ? ((F = a.value), (f = a.value - 4))
              : a.value > 7 && ((f = p - 2), (F = p + 2)))
          for (let D = f; D <= F; D++) S.push(D)
          return S
        }),
        A = p => t('updateCurrentPage', p),
        B = p => {
          const f = parseInt(p)
          f <= a.value && f > 0
            ? A(f)
            : r.pop(
                `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${o.value.errorText.replace(
                  /\$page/g,
                  a.value.toString()
                )}`
              )
        }
      return (
        se(() => {
          r = new yd()
        }),
        () =>
          u(
            'div',
            { class: 'vp-pagination' },
            l.value
              ? u('div', { class: 'vp-pagination-list' }, [
                  u('div', { class: 'vp-pagination-number ' }, [
                    e.current > 1
                      ? u(
                          'div',
                          {
                            class: 'prev',
                            role: 'navigation',
                            unselectable: 'on',
                            onClick: () => A(e.current - 1)
                          },
                          o.value.prev
                        )
                      : null,
                    s.value
                      ? [
                          u(
                            'div',
                            { role: 'navigation', onClick: () => A(1) },
                            1
                          ),
                          u('div', { class: 'ellipsis' }, '...')
                        ]
                      : null,
                    d.value.map(p =>
                      u(
                        'div',
                        {
                          key: p,
                          class: { active: e.current === p },
                          role: 'navigation',
                          onClick: () => A(p)
                        },
                        p
                      )
                    ),
                    c.value
                      ? [
                          u('div', { class: 'ellipsis' }, '...'),
                          u(
                            'div',
                            { role: 'navigation', onClick: () => A(a.value) },
                            a.value
                          )
                        ]
                      : null,
                    e.current < a.value
                      ? u(
                          'div',
                          {
                            class: 'next',
                            role: 'navigation',
                            unselectable: 'on',
                            onClick: () => A(e.current + 1)
                          },
                          o.value.next
                        )
                      : null
                  ]),
                  u('div', { class: 'vp-pagination-nav' }, [
                    u(
                      'label',
                      { for: 'navigation-text' },
                      `${o.value.navigate}: `
                    ),
                    u('input', {
                      id: 'navigation-text',
                      value: E.value,
                      onInput: ({ target: p }) => {
                        E.value = p.value
                      },
                      onKeydown: p => {
                        p.key === 'Enter' && (p.preventDefault(), B(E.value))
                      }
                    }),
                    u(
                      'button',
                      {
                        class: 'vp-pagination-button',
                        role: 'navigation',
                        title: o.value.action,
                        onClick: () => B(E.value)
                      },
                      o.value.action
                    )
                  ])
                ])
              : []
          )
      )
    }
  }),
  V8 = M({
    name: 'ArticleList',
    props: { items: { type: Array, default: () => [] } },
    setup(e) {
      const t = St(),
        r = qe(),
        n = dE(),
        E = U(1),
        o = y(() => n.value.articlePerPage || 10),
        a = y(() => e.items.slice((E.value - 1) * o.value, E.value * o.value)),
        l = s => {
          E.value = s
          const c = { ...t.query }
          c.page === s.toString() ||
            (s === 1 && !c.page) ||
            (s === 1 ? delete c.page : (c.page = s.toString()),
            r.push({ path: t.path, query: c }))
        }
      return (
        se(() => {
          const { page: s } = t.query
          l(s ? Number(s) : 1),
            i(() => import('./pageview-4eb5c236.js'), []).then(
              ({ updatePageview: c }) => {
                c()
              }
            ),
            ae(E, () => {
              const c =
                document.querySelector('#article-list').getBoundingClientRect()
                  .top + window.scrollY
              setTimeout(() => {
                window.scrollTo(0, c)
              }, 100)
            }),
            ae(
              () => t.query,
              ({ page: c }) => {
                l(c ? Number(c) : 1)
              }
            )
        }),
        () =>
          u(
            'div',
            { id: 'article-list', class: 'vp-article-list' },
            a.value.length
              ? [
                  ...a.value.map(({ info: s, path: c }, d) =>
                    u(pe, { appear: !0, delay: d * 0.04 }, () =>
                      u(DB, { key: c, info: s, path: c })
                    )
                  ),
                  u(bB, {
                    current: E.value,
                    perPage: o.value,
                    total: e.items.length,
                    onUpdateCurrentPage: l
                  })
                ]
              : u(n9)
          )
      )
    }
  }),
  x8 = M({
    name: 'CategoryList',
    setup() {
      const e = de(),
        t = uE()
      return () =>
        u(
          'ul',
          { class: 'vp-category-list' },
          mn(t.value.map).map(([r, { path: n, items: E }]) =>
            u(
              'li',
              {
                class: [
                  'vp-category',
                  `vp-category${vo(r, 9)}`,
                  { active: n === e.value.path }
                ]
              },
              u(xe, { to: n }, () => [
                r,
                u('span', { class: 'count' }, E.length)
              ])
            )
          )
        )
    }
  }),
  k8 = M({
    name: 'TagList',
    setup() {
      const e = Fe(),
        t = AE(),
        r = n => {
          var E
          return n === ((E = e.value.blog) == null ? void 0 : E.name)
        }
      return () =>
        u(
          'ul',
          { class: 'tag-list-wrapper' },
          mn(t.value.map).map(([n, { path: E, items: o }]) =>
            u(
              'li',
              { class: ['tag', `tag${vo(n, 9)}`, { active: r(n) }] },
              u(xe, { to: E }, () => [
                n,
                u('span', { class: 'tag-num' }, o.length)
              ])
            )
          )
        )
    }
  }),
  yB = M({
    name: 'TimelineList',
    setup() {
      const e = ue(),
        t = L8(),
        r = lE(),
        n = y(() => e.value.blogLocales.timeline)
      return () =>
        u('div', { class: 'timeline-list-wrapper' }, [
          u(
            'div',
            { class: 'timeline-list-title', onClick: () => r(t.value.path) },
            [u(O8), u('span', { class: 'num' }, t.value.items.length), n.value]
          ),
          u('hr'),
          u(
            'div',
            { class: 'timeline-content' },
            u(
              'ul',
              { class: 'timeline-list' },
              t.value.config.map(({ year: E, items: o }, a) =>
                u(pe, { appear: !0, delay: 0.08 * (a + 1) }, () =>
                  u('li', [
                    u('h3', { class: 'timeline-year' }, E),
                    u(
                      'ul',
                      { class: 'timeline-year-wrapper' },
                      o.map(({ date: l, info: s, path: c }) =>
                        u('li', { class: 'timeline-item' }, [
                          u('span', { class: 'timeline-date' }, l),
                          u(
                            xe,
                            { class: 'timeline-title', to: c },
                            () => s[ye.title]
                          )
                        ])
                      )
                    )
                  ])
                )
              )
            )
          )
        ])
    }
  }),
  o9 = M({
    name: 'InfoList',
    setup() {
      const e = ue(),
        t = BE(),
        r = uE(),
        n = y(() => st(r.value.map).length),
        E = I8(),
        o = AE(),
        a = y(() => st(o.value.map).length),
        l = lE(),
        s = U('article'),
        c = y(() => e.value.blogLocales),
        d = [
          ['article', qE],
          ['category', Ta],
          ['tag', Ra],
          ['timeline', O8]
        ]
      return () =>
        u('div', { class: 'vp-blog-infos' }, [
          u(
            'div',
            { class: 'vp-blog-type-switcher' },
            d.map(([A, B]) =>
              u(
                'button',
                {
                  type: 'button',
                  class: 'vp-blog-type-button',
                  onClick: () => {
                    s.value = A
                  }
                },
                u(
                  'div',
                  {
                    class: ['icon-wrapper', { active: s.value === A }],
                    'aria-label': c.value[A],
                    'data-balloon-pos': 'up'
                  },
                  u(B)
                )
              )
            )
          ),
          u(pe, () =>
            s.value === 'article'
              ? u('div', { class: 'vp-sticky-article-wrapper' }, [
                  u('div', { class: 'title', onClick: () => l(t.value.path) }, [
                    u(qE),
                    u('span', { class: 'num' }, t.value.items.length),
                    c.value.article
                  ]),
                  u('hr'),
                  u(
                    'ul',
                    { class: 'vp-sticky-articles' },
                    E.value.items.map(({ info: A, path: B }, p) =>
                      u(pe, { appear: !0, delay: 0.08 * (p + 1) }, () =>
                        u(
                          'li',
                          { class: 'vp-sticky-article' },
                          u(xe, { to: B }, () => A[ye.title])
                        )
                      )
                    )
                  )
                ])
              : s.value === 'category'
              ? u('div', { class: 'vp-category-wrapper' }, [
                  n.value
                    ? u(
                        'div',
                        { class: 'title', onClick: () => l(r.value.path) },
                        [
                          u(Ta),
                          u('span', { class: 'num' }, n.value),
                          c.value.category
                        ]
                      )
                    : null,
                  u('hr'),
                  u(pe, { delay: 0.04 }, () => u(x8))
                ])
              : s.value === 'tag'
              ? u('div', { class: 'vp-tag-wrapper' }, [
                  a.value
                    ? u(
                        'div',
                        { class: 'title', onClick: () => l(o.value.path) },
                        [
                          u(Ra),
                          u('span', { class: 'num' }, a.value),
                          c.value.tag
                        ]
                      )
                    : null,
                  u('hr'),
                  u(pe, { delay: 0.04 }, () => u(k8))
                ])
              : u(pe, () => u(yB))
          )
        ])
    }
  }),
  mo = M({
    name: 'BlogWrapper',
    slots: Object,
    setup(e, { slots: t }) {
      const { isMobile: r } = sE()
      return () => [
        u(w8),
        u(
          T8,
          { noSidebar: !0, noToc: !0 },
          {
            default: () => t.default(),
            navScreenBottom: () => u(P8),
            ...(r.value ? { sidebar: () => u(o9) } : {})
          }
        )
      ]
    }
  })
const a9 = () =>
  u('aside', { class: 'vp-blog-info-wrapper' }, [
    u(pe, () => u(P8)),
    u(pe, { delay: 0.04 }, () => u(o9))
  ])
a9.displayName = 'InfoPanel'
var ho = a9,
  CB = M({
    name: 'BlogPage',
    components: { CategoryList: x8, TagList: k8 },
    setup() {
      const e = de(),
        t = Fe(),
        r = uE(),
        n = AE(),
        E = y(() => t.value.blog || {}),
        o = y(() => {
          const { key: l = '' } = E.value
          return l === 'category'
            ? 'CategoryList'
            : l === 'tag'
            ? 'TagList'
            : null
        }),
        a = y(() => {
          const { name: l = '', key: s = '' } = E.value
          return s === 'category'
            ? l
              ? r.value.map[l].items
              : []
            : s === 'tag'
            ? l
              ? n.value.map[l].items
              : []
            : []
        })
      return () =>
        u(mo, () =>
          u(
            'div',
            { class: 'vp-page vp-blog' },
            u('div', { class: 'blog-page-wrapper' }, [
              u('main', { id: 'main-content', class: 'vp-blog-main' }, [
                u(pe, () => (o.value ? u(lt(o.value)) : null)),
                E.value.name
                  ? u(pe, { appear: !0, delay: 0.24 }, () =>
                      u(V8, { key: e.value.path, items: a.value })
                    )
                  : null
              ]),
              u(pe, { delay: 0.16 }, () => u(ho, { key: 'blog' }))
            ])
          )
        )
    }
  }),
  SB = M({
    name: 'BlogHero',
    slots: Object,
    setup(e, { slots: t }) {
      const r = Fe(),
        n = oE(),
        E = je(),
        o = y(() => r.value.heroFullScreen ?? !1),
        a = y(() => {
          const {
            heroText: s,
            heroImage: c,
            heroImageDark: d,
            heroAlt: A,
            heroImageStyle: B,
            tagline: p
          } = r.value
          return {
            text: s ?? n.value.title ?? 'Hello',
            image: c ? Se(c) : null,
            imageDark: d ? Se(d) : null,
            heroStyle: B,
            alt: A || s || 'hero image',
            tagline: p ?? '',
            isFullScreen: o.value
          }
        }),
        l = y(() => {
          const { bgImage: s, bgImageDark: c, bgImageStyle: d } = r.value
          return {
            image: Ee(s) ? Se(s) : s === !1 ? null : cB,
            imageDark: Ee(c) ? Se(c) : null,
            bgStyle: d,
            isFullScreen: o.value
          }
        })
      return () => {
        var s, c
        return r.value.hero === !1
          ? null
          : u(
              'div',
              {
                ref: E,
                class: [
                  'vp-blog-hero',
                  { fullscreen: o.value, 'no-bg': !l.value.image }
                ]
              },
              [
                ((s = t.heroBg) == null ? void 0 : s.call(t, l.value)) || [
                  l.value.image
                    ? u('div', {
                        class: ['vp-blog-mask', { light: l.value.imageDark }],
                        style: [
                          {
                            background: `url(${l.value.image}) center/cover no-repeat`
                          },
                          l.value.bgStyle
                        ]
                      })
                    : null,
                  l.value.imageDark
                    ? u('div', {
                        class: 'vp-blog-mask dark',
                        style: [
                          {
                            background: `url(${l.value.imageDark}) center/cover no-repeat`
                          },
                          l.value.bgStyle
                        ]
                      })
                    : null
                ],
                ((c = t.heroInfo) == null ? void 0 : c.call(t, a.value)) || [
                  u(pe, { appear: !0, type: 'group', delay: 0.04 }, () => [
                    a.value.image
                      ? u('img', {
                          key: 'light',
                          class: [
                            'vp-blog-hero-image',
                            { light: a.value.imageDark }
                          ],
                          style: a.value.heroStyle,
                          src: a.value.image,
                          alt: a.value.alt
                        })
                      : null,
                    a.value.imageDark
                      ? u('img', {
                          key: 'dark',
                          class: 'vp-blog-hero-image dark',
                          style: a.value.heroStyle,
                          src: a.value.imageDark,
                          alt: a.value.alt
                        })
                      : null
                  ]),
                  u(pe, { appear: !0, delay: 0.08 }, () =>
                    a.value.text
                      ? u('h1', { class: 'vp-blog-hero-title' }, a.value.text)
                      : null
                  ),
                  u(pe, { appear: !0, delay: 0.12 }, () =>
                    a.value.tagline
                      ? u('p', {
                          class: 'vp-blog-hero-description',
                          innerHTML: a.value.tagline
                        })
                      : null
                  )
                ],
                a.value.isFullScreen
                  ? u(
                      'button',
                      {
                        type: 'button',
                        class: 'slide-down-button',
                        onClick: () => {
                          window.scrollTo({
                            top: E.value.clientHeight,
                            behavior: 'smooth'
                          })
                        }
                      },
                      [u(wa), u(wa)]
                    )
                  : null
              ]
            )
      }
    }
  })
const TB = ['link', 'article', 'book', 'project', 'friend']
var RB = M({
    name: 'ProjectPanel',
    components: {
      ArticleIcon: qE,
      BookIcon: Zc,
      FriendIcon: r9,
      LinkIcon: e9,
      ProjectIcon: t9
    },
    setup() {
      const e = Fe(),
        t = _n(),
        r = lE(),
        n = (E = '', o = 'icon') =>
          TB.includes(E)
            ? u(lt(`${E}-icon`))
            : pr(E)
            ? u('img', { class: 'vp-project-image', src: E, alt: o })
            : po(E)
            ? u('img', { class: 'vp-project-image', src: Se(E), alt: o })
            : u(Ye, { icon: E })
      return () => {
        var E
        return (E = e.value.projects) != null && E.length
          ? u(
              'div',
              { class: 'vp-project-panel' },
              e.value.projects.map(
                ({ icon: o, link: a, name: l, desc: s }, c) =>
                  u(
                    'div',
                    {
                      class: [
                        'vp-project-card',
                        { [`project${c % 9}`]: !t.value }
                      ],
                      onClick: () => r(a)
                    },
                    [
                      n(o, l),
                      u('div', { class: 'vp-project-name' }, l),
                      u('div', { class: 'vp-project-desc' }, s)
                    ]
                  )
              )
            )
          : null
      }
    }
  }),
  wB = M({
    name: 'BlogHome',
    setup() {
      const e = BE()
      return () =>
        u('div', { class: 'vp-page vp-blog' }, [
          u(SB),
          u('div', { class: 'blog-page-wrapper' }, [
            u('main', { id: 'main-content', class: 'vp-blog-main' }, [
              u(pe, { appear: !0, delay: 0.16 }, () => u(RB)),
              u(pe, { appear: !0, delay: 0.24 }, () =>
                u(V8, { items: e.value.items })
              )
            ]),
            u(pe, { appear: !0, delay: 0.16 }, () => u(ho, { key: 'blog' }))
          ]),
          u(pe, { appear: !0, delay: 0.28 }, () => u(R8))
        ])
    }
  }),
  IB = M({
    name: 'BlogHome',
    setup() {
      return () => u(mo, () => u(wB))
    }
  }),
  i9 = M({
    name: 'ArticleType',
    setup() {
      const e = de(),
        t = Vt(),
        r = ue(),
        n = BE(),
        E = I8(),
        o = y(() => {
          const a = r.value.blogLocales
          return [
            { text: a.all, path: n.value.path },
            { text: a.star, path: E.value.path },
            ...[].map(({ key: l, path: s }) => ({
              text: a[l],
              path: s.replace(/^\//, t.value)
            }))
          ]
        })
      return () =>
        u(
          'ul',
          { class: 'vp-article-type-wrapper' },
          o.value.map(a =>
            u(
              'li',
              {
                class: ['vp-article-type', { active: a.path === e.value.path }]
              },
              u(xe, { to: a.path }, () => a.text)
            )
          )
        )
    }
  }),
  LB = M({
    name: 'BlogPage',
    setup() {
      const e = fo(),
        t = Fe(),
        r = de(),
        n = BE(),
        E = I8(),
        o = y(() => {
          const { key: a = '', type: l } = t.value.blog || {}
          return a === 'star'
            ? E.value.items
            : l === 'type' && a
            ? e.value.items
            : n.value.items
        })
      return () =>
        u(mo, () =>
          u(
            'div',
            { class: 'vp-page vp-blog' },
            u('div', { class: 'blog-page-wrapper' }, [
              u('main', { id: 'main-content', class: 'vp-blog-main' }, [
                u(pe, () => u(i9)),
                u(pe, { appear: !0, delay: 0.24 }, () =>
                  u(V8, { key: r.value.path, items: o.value })
                )
              ]),
              u(pe, { delay: 0.16 }, () => u(ho, { key: 'blog' }))
            ])
          )
        )
    }
  }),
  PB = M({
    name: 'TimelineItems',
    setup() {
      const e = dE(),
        t = ue(),
        r = L8(),
        n = y(() => e.value.timeline || t.value.blogLocales.timelineTitle),
        E = y(() =>
          r.value.config.map(({ year: o }) => ({
            title: o.toString(),
            level: 2,
            slug: o.toString(),
            children: []
          }))
        )
      return () =>
        u(
          'div',
          { class: 'timeline-wrapper' },
          u('ul', { class: 'timeline-content' }, [
            u(pe, () => u('li', { class: 'motto' }, n.value)),
            u($c, { items: E.value }),
            r.value.config.map(({ year: o, items: a }, l) =>
              u(
                pe,
                { appear: !0, delay: 0.08 * (l + 1), type: 'group' },
                () => [
                  u(
                    'h3',
                    { key: 'title', id: o, class: 'timeline-year-title' },
                    u('span', o)
                  ),
                  u('li', { key: 'content', class: 'timeline-year-list' }, [
                    u(
                      'ul',
                      { class: 'timeline-year-wrapper' },
                      a.map(({ date: s, info: c, path: d }) =>
                        u('li', { class: 'timeline-item' }, [
                          u('span', { class: 'timeline-date' }, s),
                          u(
                            xe,
                            { class: 'timeline-title', to: d },
                            () => c[ye.title]
                          )
                        ])
                      )
                    )
                  ])
                ]
              )
            )
          ])
        )
    }
  }),
  OB = M({
    name: 'Timeline',
    components: { ArticleType: i9, CategoryList: x8, TagList: k8 },
    setup() {
      return () =>
        u(mo, () =>
          u(
            'div',
            { class: 'vp-page vp-blog' },
            u('div', { class: 'blog-page-wrapper' }, [
              u('main', { id: 'main-content', class: 'vp-blog-main' }, [
                u(pe, { appear: !0, delay: 0.24 }, () => u(PB))
              ]),
              u(pe, { delay: 0.16 }, () => u(ho, { key: 'blog' }))
            ])
          )
        )
    }
  })
const Jr =
    './ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
      ''
    ),
  Uo = Array.from({ length: 64 }, (e, t) => t),
  LE = e => Array(e).fill(-1),
  rr = [
    ...LE(46),
    0,
    1,
    ...Uo.slice(54, 64),
    ...LE(7),
    ...Uo.slice(2, 28),
    ...LE(6),
    ...Uo.slice(28, 54),
    ...LE(5)
  ],
  ml = [
    608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832,
    137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300,
    3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731
  ],
  hl = [
    3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670,
    3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374,
    1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416,
    1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379,
    3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982,
    1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464,
    3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006,
    3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050,
    732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708,
    2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067,
    1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745,
    3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033,
    772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826,
    1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571,
    1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486,
    1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502,
    3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902,
    469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251,
    122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683,
    2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531,
    1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396,
    3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435,
    3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882,
    3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056,
    1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064,
    1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595,
    3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392,
    3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851,
    2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539,
    1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580,
    2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160,
    2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540,
    1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551,
    3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937,
    3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981,
    2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143,
    3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398,
    577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418,
    2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193,
    298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269,
    3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943,
    4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956,
    1404054877, 2845806497, 146425753, 1854211946, 1266315497, 3048417604,
    3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590,
    3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593,
    2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782,
    2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742,
    1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761,
    1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060,
    2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511,
    2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646,
    2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255,
    2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799,
    847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711,
    750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728,
    3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711,
    2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266,
    1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398,
    312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773,
    2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769,
    4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025,
    2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303,
    2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128,
    2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456,
    1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115,
    2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034,
    4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552,
    3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879,
    3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695,
    2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008,
    1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193,
    2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233,
    238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339,
    2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896,
    1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787,
    1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240,
    3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143,
    3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107,
    2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357,
    342012276, 595725824, 1480756522, 206960106, 497939518, 591360097,
    863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208,
    1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973,
    2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548,
    4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456,
    3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914,
    3873677099, 3682840055, 3913112168, 2491498743, 4132185628, 2489919796,
    1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738,
    1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640,
    1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741,
    2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922,
    676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912,
    1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102,
    2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353,
    3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050,
    980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775,
    1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547,
    1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593,
    1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011,
    2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135,
    1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820,
    628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990,
    2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642,
    2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413,
    1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846,
    172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560,
    2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404,
    4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036,
    2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131,
    926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651,
    309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160,
    443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806,
    3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982,
    2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264,
    2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119,
    2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658,
    4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929,
    2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776,
    2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870,
    3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364,
    1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185,
    3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074,
    2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717,
    4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579,
    1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742,
    1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273,
    448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396,
    508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340,
    908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504,
    976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578,
    3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283,
    3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217,
    3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814,
    691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906,
    1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820,
    2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233,
    1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353,
    2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191,
    753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344,
    530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254,
    1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136,
    2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250,
    60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426,
    457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805,
    55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263,
    1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142,
    1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792,
    2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957,
    1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891,
    3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579,
    2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400,
    1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388,
    886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488,
    1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036,
    3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993,
    3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674,
    3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343,
    4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370,
    261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801,
    3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347,
    1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142,
    453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566,
    3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879,
    370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899,
    2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580,
    3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322,
    1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758,
    1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379,
    950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296,
    2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436,
    29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231,
    3075367218, 3463963227, 1469046755, 985887462
  ],
  l9 = [1332899944, 1700884034, 1701343084, 1684370003, 1668446532, 1869963892],
  Ia = (e, t) => {
    if (t <= 0 || t > e.length) throw Error(`Illegal len: ${t}`)
    let r = 0,
      n,
      E
    const o = []
    for (; r < t; ) {
      if (
        ((n = e[r++] & 255),
        o.push(Jr[(n >> 2) & 63]),
        (n = (n & 3) << 4),
        r >= t)
      ) {
        o.push(Jr[n & 63])
        break
      }
      if (
        ((E = e[r++] & 255),
        (n |= (E >> 4) & 15),
        o.push(Jr[n & 63]),
        (n = (E & 15) << 2),
        r >= t)
      ) {
        o.push(Jr[n & 63])
        break
      }
      ;(E = e[r++] & 255),
        (n |= (E >> 6) & 3),
        o.push(Jr[n & 63]),
        o.push(Jr[E & 63])
    }
    return o.join('')
  },
  VB = (e, t) => {
    if (t <= 0) throw Error(`Illegal len: ${t}`)
    const r = e.length
    let n = 0,
      E = 0,
      o,
      a,
      l,
      s,
      c,
      d
    const A = []
    for (
      ;
      n < r - 1 &&
      E < t &&
      ((d = e.charCodeAt(n++)),
      (o = d < rr.length ? rr[d] : -1),
      (d = e.charCodeAt(n++)),
      (a = d < rr.length ? rr[d] : -1),
      !(
        o == -1 ||
        a == -1 ||
        ((c = (o << 2) >>> 0),
        (c |= (a & 48) >> 4),
        A.push(String.fromCharCode(c)),
        ++E >= t || n >= r) ||
        ((d = e.charCodeAt(n++)), (l = d < rr.length ? rr[d] : -1), l == -1) ||
        ((c = ((a & 15) << 4) >>> 0),
        (c |= (l & 60) >> 2),
        A.push(String.fromCharCode(c)),
        ++E >= t || n >= r)
      ));

    )
      (d = e.charCodeAt(n++)),
        (s = d < rr.length ? rr[d] : -1),
        (c = ((l & 3) << 6) >>> 0),
        (c |= s),
        A.push(String.fromCharCode(c)),
        ++E
    return A.map(B => B.charCodeAt(0))
  },
  xB = (e, t) => {
    let r = null
    for (
      typeof e == 'number' && ((r = e), (e = () => null));
      r !== null || (r = e()) !== null;

    )
      r < 128
        ? t(r & 127)
        : r < 2048
        ? (t(((r >> 6) & 31) | 192), t((r & 63) | 128))
        : r < 65536
        ? (t(((r >> 12) & 15) | 224),
          t(((r >> 6) & 63) | 128),
          t((r & 63) | 128))
        : (t(((r >> 18) & 7) | 240),
          t(((r >> 12) & 63) | 128),
          t(((r >> 6) & 63) | 128),
          t((r & 63) | 128)),
        (r = null)
  },
  kB = (e, t) => {
    let r,
      n = null
    for (; (r = n !== null ? n : e()) !== null; ) {
      if (
        r >= 55296 &&
        r <= 57343 &&
        (n = e()) !== null &&
        n >= 56320 &&
        n <= 57343
      ) {
        t((r - 55296) * 1024 + n - 56320 + 65536), (n = null)
        continue
      }
      t(r)
    }
    n !== null && t(n)
  },
  MB = (e, t) => {
    kB(e, function (r) {
      xB(r, t)
    })
  },
  $B =
    typeof process < 'u' && process && typeof process.nextTick == 'function'
      ? typeof setImmediate == 'function'
        ? setImmediate
        : process.nextTick
      : setTimeout,
  jB = e => {
    const t = []
    let r = 0
    return (
      MB(
        () => (r >= e.length ? null : e.charCodeAt(r++)),
        n => {
          t.push(n)
        }
      ),
      t
    )
  },
  Yn = (e, t, r, n) => {
    let E,
      o = e[t],
      a = e[t + 1]
    return (
      (o ^= r[0]),
      (E = n[o >>> 24]),
      (E += n[256 | ((o >> 16) & 255)]),
      (E ^= n[512 | ((o >> 8) & 255)]),
      (E += n[768 | (o & 255)]),
      (a ^= E ^ r[1]),
      (E = n[a >>> 24]),
      (E += n[256 | ((a >> 16) & 255)]),
      (E ^= n[512 | ((a >> 8) & 255)]),
      (E += n[768 | (a & 255)]),
      (o ^= E ^ r[2]),
      (E = n[o >>> 24]),
      (E += n[256 | ((o >> 16) & 255)]),
      (E ^= n[512 | ((o >> 8) & 255)]),
      (E += n[768 | (o & 255)]),
      (a ^= E ^ r[3]),
      (E = n[a >>> 24]),
      (E += n[256 | ((a >> 16) & 255)]),
      (E ^= n[512 | ((a >> 8) & 255)]),
      (E += n[768 | (a & 255)]),
      (o ^= E ^ r[4]),
      (E = n[o >>> 24]),
      (E += n[256 | ((o >> 16) & 255)]),
      (E ^= n[512 | ((o >> 8) & 255)]),
      (E += n[768 | (o & 255)]),
      (a ^= E ^ r[5]),
      (E = n[a >>> 24]),
      (E += n[256 | ((a >> 16) & 255)]),
      (E ^= n[512 | ((a >> 8) & 255)]),
      (E += n[768 | (a & 255)]),
      (o ^= E ^ r[6]),
      (E = n[o >>> 24]),
      (E += n[256 | ((o >> 16) & 255)]),
      (E ^= n[512 | ((o >> 8) & 255)]),
      (E += n[768 | (o & 255)]),
      (a ^= E ^ r[7]),
      (E = n[a >>> 24]),
      (E += n[256 | ((a >> 16) & 255)]),
      (E ^= n[512 | ((a >> 8) & 255)]),
      (E += n[768 | (a & 255)]),
      (o ^= E ^ r[8]),
      (E = n[o >>> 24]),
      (E += n[256 | ((o >> 16) & 255)]),
      (E ^= n[512 | ((o >> 8) & 255)]),
      (E += n[768 | (o & 255)]),
      (a ^= E ^ r[9]),
      (E = n[a >>> 24]),
      (E += n[256 | ((a >> 16) & 255)]),
      (E ^= n[512 | ((a >> 8) & 255)]),
      (E += n[768 | (a & 255)]),
      (o ^= E ^ r[10]),
      (E = n[o >>> 24]),
      (E += n[256 | ((o >> 16) & 255)]),
      (E ^= n[512 | ((o >> 8) & 255)]),
      (E += n[768 | (o & 255)]),
      (a ^= E ^ r[11]),
      (E = n[a >>> 24]),
      (E += n[256 | ((a >> 16) & 255)]),
      (E ^= n[512 | ((a >> 8) & 255)]),
      (E += n[768 | (a & 255)]),
      (o ^= E ^ r[12]),
      (E = n[o >>> 24]),
      (E += n[256 | ((o >> 16) & 255)]),
      (E ^= n[512 | ((o >> 8) & 255)]),
      (E += n[768 | (o & 255)]),
      (a ^= E ^ r[13]),
      (E = n[a >>> 24]),
      (E += n[256 | ((a >> 16) & 255)]),
      (E ^= n[512 | ((a >> 8) & 255)]),
      (E += n[768 | (a & 255)]),
      (o ^= E ^ r[14]),
      (E = n[o >>> 24]),
      (E += n[256 | ((o >> 16) & 255)]),
      (E ^= n[512 | ((o >> 8) & 255)]),
      (E += n[768 | (o & 255)]),
      (a ^= E ^ r[15]),
      (E = n[a >>> 24]),
      (E += n[256 | ((a >> 16) & 255)]),
      (E ^= n[512 | ((a >> 8) & 255)]),
      (E += n[768 | (a & 255)]),
      (o ^= E ^ r[16]),
      (e[t] = a ^ r[16 + 1]),
      (e[t + 1] = o),
      e
    )
  },
  Ur = (e, t) => {
    let r = 0
    for (let n = 0; n < 4; ++n)
      (r = (r << 8) | (e[t] & 255)), (t = (t + 1) % e.length)
    return { key: r, offp: t }
  },
  _l = (e, t, r) => {
    const n = t.length,
      E = r.length
    let o = 0,
      a = [0, 0],
      l
    for (let s = 0; s < n; s++)
      (l = Ur(e, o)), (o = l.offp), (t[s] = t[s] ^ l.key)
    for (let s = 0; s < n; s += 2)
      (a = Yn(a, 0, t, r)), (t[s] = a[0]), (t[s + 1] = a[1])
    for (let s = 0; s < E; s += 2)
      (a = Yn(a, 0, t, r)), (r[s] = a[0]), (r[s + 1] = a[1])
  },
  NB = (e, t, r, n) => {
    const E = r.length,
      o = n.length
    let a = 0,
      l = [0, 0],
      s
    for (let c = 0; c < E; c++)
      (s = Ur(t, a)), (a = s.offp), (r[c] = r[c] ^ s.key)
    a = 0
    for (let c = 0; c < E; c += 2)
      (s = Ur(e, a)),
        (a = s.offp),
        (l[0] ^= s.key),
        (s = Ur(e, a)),
        (a = s.offp),
        (l[1] ^= s.key),
        (l = Yn(l, 0, r, n)),
        (r[c] = l[0]),
        (r[c + 1] = l[1])
    for (let c = 0; c < o; c += 2)
      (s = Ur(e, a)),
        (a = s.offp),
        (l[0] ^= s.key),
        (s = Ur(e, a)),
        (a = s.offp),
        (l[1] ^= s.key),
        (l = Yn(l, 0, r, n)),
        (n[c] = l[0]),
        (n[c + 1] = l[1])
  },
  gl = (e, t, r, n, E) => {
    const o = l9.slice(),
      a = o.length
    if (r < 4 || r > 31) {
      const B = new Error(`Illegal number of rounds (4-31): ${r}`)
      if (n === !1) return Promise.reject(B)
      throw B
    }
    if (t.length !== 16) {
      const B = new Error(`Illegal salt length: ${t.length} != 16`)
      if (n === !1) return Promise.reject(B)
      throw B
    }
    r = (1 << r) >>> 0
    let l,
      s,
      c = 0,
      d
    Int32Array
      ? ((l = new Int32Array(ml)), (s = new Int32Array(hl)))
      : ((l = ml.slice()), (s = hl.slice())),
      NB(t, e, l, s)
    const A = () => {
      if ((E && E(c / r), c < r)) {
        const B = Date.now()
        for (
          ;
          c < r &&
          ((c = c + 1), _l(e, l, s), _l(t, l, s), !(Date.now() - B > 100));

        );
      } else {
        for (c = 0; c < 64; c++)
          for (d = 0; d < a >> 1; d++) Yn(o, d << 1, l, s)
        const B = []
        for (c = 0; c < a; c++)
          B.push(((o[c] >> 24) & 255) >>> 0),
            B.push(((o[c] >> 16) & 255) >>> 0),
            B.push(((o[c] >> 8) & 255) >>> 0),
            B.push((o[c] & 255) >>> 0)
        return n === !1 ? Promise.resolve(B) : B
      }
      if (n === !1)
        return new Promise(B =>
          $B(() => {
            A().then(B)
          })
        )
    }
    if (n === !1) return A()
    {
      let B
      for (;;) if (typeof (B = A()) < 'u') return B || []
    }
  },
  HB = e => {
    try {
      let t
      return (
        (self.crypto || self.msCrypto).getRandomValues(
          (t = new Uint32Array(e))
        ),
        Array.prototype.slice.call(t)
      )
    } catch {
      throw Error('WebCryptoAPI is not available')
    }
  },
  JB = (e = 10) => {
    if (typeof e != 'number') throw Error('Illegal arguments: ' + typeof e)
    e < 4 ? (e = 4) : e > 31 && (e = 31)
    const t = []
    return (
      t.push('$2a$'),
      e < 10 && t.push('0'),
      t.push(e.toString()),
      t.push('$'),
      t.push(Ia(HB(16), 16)),
      t.join('')
    )
  }
function zB(e, t, r, n) {
  if (typeof e != 'string' || typeof t != 'string') {
    const p = new Error('Invalid string / salt: Not a string')
    if (r === !1) return Promise.reject(p)
    throw p
  }
  let E, o
  if (t.charAt(0) !== '$' || t.charAt(1) !== '2') {
    const p = new Error('Invalid salt version: ' + t.substring(0, 2))
    if (r === !1) return Promise.reject(p)
    throw p
  }
  if (t.charAt(2) === '$') (E = String.fromCharCode(0)), (o = 3)
  else {
    if (
      ((E = t.charAt(2)),
      (E !== 'a' && E !== 'b' && E !== 'y') || t.charAt(3) !== '$')
    ) {
      const p = Error('Invalid salt revision: ' + t.substring(2, 4))
      if (r === !1) return Promise.reject(p)
      throw p
    }
    o = 4
  }
  if (t.charAt(o + 2) > '$') {
    const p = new Error('Missing salt rounds')
    if (r === !1) return Promise.reject(p)
    throw p
  }
  const a = parseInt(t.substring(o, o + 1), 10) * 10,
    l = parseInt(t.substring(o + 1, o + 2), 10),
    s = a + l,
    c = t.substring(o + 3, o + 25)
  e += E >= 'a' ? '\0' : ''
  const d = jB(e),
    A = VB(c, 16),
    B = p => {
      const f = []
      return (
        f.push('$2'),
        E >= 'a' && f.push(E),
        f.push('$'),
        s < 10 && f.push('0'),
        f.push(s.toString()),
        f.push('$'),
        f.push(Ia(A, A.length)),
        f.push(Ia(p, l9.length * 4 - 1)),
        f.join('')
      )
    }
  return r === !1 ? gl(d, A, s, !1, n).then(p => B(p)) : B(gl(d, A, s, !0, n))
}
const UB = (e, t = 10) => {
    if (
      (typeof t == 'number' && (t = JB(t)),
      typeof e != 'string' || typeof t != 'string')
    )
      throw Error('Illegal arguments: ' + typeof e + ', ' + typeof t)
    return zB(e, t, !0)
  },
  La = (e, t) => {
    if (typeof e != 'string' || typeof t != 'string')
      throw Error('Illegal arguments: ' + typeof e + ', ' + typeof t)
    return t.length !== 60 ? !1 : UB(e, t.substring(0, t.length - 31)) === t
  },
  s9 = () =>
    u(ce, { name: 'lock' }, () =>
      u('path', {
        d: 'M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z'
      })
    )
s9.displayName = 'LockIcon'
var c9 = M({
  name: 'PasswordModal',
  props: { full: Boolean },
  emits: ['verify'],
  setup(e, { emit: t }) {
    const r = Fe(),
      n = ue(),
      E = U(''),
      o = U(!1),
      a = U(!1),
      l = y(() => n.value.encryptLocales)
    let s = null
    const c = () => {
      s && clearTimeout(s),
        (o.value = !1),
        t('verify', E.value, a.value),
        Gt().then(() => {
          ;(o.value = !0),
            (s = setTimeout(() => {
              o.value = !1
            }, 1e3))
        })
    }
    return () =>
      u(
        'div',
        { class: ['vp-decrypt-layer', { expand: e.full || r.value.home }] },
        u('div', { class: 'vp-decrypt-modal' }, [
          u(
            'div',
            { class: ['vp-decrypt-hint', { tried: o.value }] },
            o.value
              ? l.value.errorHint
              : u(s9, { 'aria-label': l.value.iconLabel })
          ),
          u('div', { class: 'vp-decrypt-input' }, [
            u('input', {
              type: 'password',
              value: E.value,
              placeholder: l.value.placeholder,
              onInput: ({ target: d }) => {
                E.value = d.value
              },
              onKeydown: ({ key: d }) => {
                d === 'Enter' && c()
              }
            })
          ]),
          u('div', { class: 'vp-remember-password' }, [
            u('input', {
              type: 'checkbox',
              value: a.value,
              onChange: () => (a.value = !a.value)
            }),
            l.value.remember
          ]),
          u(
            'button',
            { type: 'button', class: 'vp-decrypt-submit', onClick: () => c() },
            'OK'
          )
        ])
      )
  }
})
const u9 = () => {
    const e = fr()
    return y(() => e.value.encrypt || {})
  },
  Fl = 'VUEPRESS_HOPE_GLOBAL_TOKEN',
  qB = () => {
    const e = u9(),
      t = hn(Fl, ''),
      r = $5(Fl, ''),
      n = y(() => {
        const { global: o = !1, admin: a = [] } = e.value
        return o && a.length > 0
      }),
      E = y(() => {
        if (n.value) {
          if (t.value) return e.value.admin.some(o => La(t.value, o))
          if (r.value) return e.value.admin.some(o => La(r.value, o))
        }
        return !1
      })
    return {
      isEncrypted: n,
      isDecrypted: E,
      validate: (o, a = !1) => {
        ;(a ? t : r).value = o
      }
    }
  },
  qo = (e = '', t) => !!e && La(e, t),
  Dl = 'VUEPRESS_HOPE_PATH_TOKEN',
  WB = () => {
    const e = de(),
      t = u9(),
      r = hn(Dl, {}),
      n = $5(Dl, {}),
      E = a =>
        EE(t.value.config)
          ? st(t.value.config)
              .filter(l => cn(decodeURI(a), l))
              .sort((l, s) => s.length - l.length)
          : [],
      o = a => {
        const l = E(a)
        if (l.length > 0) {
          const { config: s = {} } = t.value
          return {
            isEncrypted: !0,
            isDecrypted: l.some(
              c =>
                (r.value[c] && s[c].some(d => qo(r.value[c], d))) ||
                (n.value[c] && s[c].some(d => qo(n.value[c], d)))
            )
          }
        }
        return { isDecrypted: !1, isEncrypted: !1 }
      }
    return {
      status: y(() => o(e.value.path)),
      getStatus: o,
      validate: (a, l = !1) => {
        const { config: s = {} } = t.value,
          c = E(e.value.path)
        for (const d of c)
          if (s[d].filter(A => qo(a, A))) {
            ;(l ? r : n).value[d] = a
            break
          }
      }
    }
  }
var KB = M({
    name: 'GlobalEncrypt',
    slots: Object,
    setup(e, { slots: t }) {
      const { isDecrypted: r, isEncrypted: n, validate: E } = qB(),
        o = U(!1)
      return (
        se(() => {
          o.value = !0
        }),
        () =>
          u(Nc, () =>
            n.value
              ? o.value
                ? r.value
                  ? t.default()
                  : u(c9, { full: !0, onVerify: E })
                : null
              : t.default()
          )
      )
    }
  }),
  GB = M({
    name: 'LocalEncrypt',
    slots: Object,
    setup(e, { slots: t }) {
      const { status: r, validate: n } = WB(),
        E = U(!1)
      return (
        se(() => {
          E.value = !0
        }),
        () => {
          const { isEncrypted: o, isDecrypted: a } = r.value
          return o
            ? E.value
              ? a
                ? t.default() || null
                : u(c9, { full: !0, onVerify: n })
              : null
            : t.default() || null
        }
      )
    }
  })
L6(Ye)
const XB = ut({
    enhance: ({ app: e, router: t }) => {
      const { scrollBehavior: r } = t.options
      ;(t.options.scrollBehavior = async (...n) => (
        await jc().wait(), r(...n)
      )),
        iA(e),
        e.component('HopeIcon', Ye),
        e.component('VPLink', xe),
        e.component('BloggerInfo', P8),
        e.component('GlobalEncrypt', KB),
        e.component('LocalEncrypt', GB)
    },
    setup: () => {
      lA(), dA(), gB()
    },
    layouts: {
      Layout: EB,
      NotFound: aB,
      BlogCategory: CB,
      BlogHome: IB,
      BlogType: LB,
      Timeline: OB
    }
  }),
  YB = {
    enhance: ({ app: e }) => {
      e.component(
        'Busuanzi',
        v(() =>
          i(
            () => import('./Busuanzi-38174df3.js'),
            [
              'assets/Busuanzi-38174df3.js',
              'assets/commonjsHelpers-042e6b4d.js',
              'assets/plugin-vue_export-helper-c27b6911.js'
            ]
          )
        )
      ),
        e.component(
          'SwitchData',
          v(() =>
            i(
              () => import('./SwitchData-809f1ce2.js'),
              [
                'assets/SwitchData-809f1ce2.js',
                'assets/atropos-vue.esm-b3e85aba.js',
                'assets/plugin-vue_export-helper-c27b6911.js'
              ]
            )
          )
        ),
        e.component(
          'SwitchPoster',
          v(() =>
            i(
              () => import('./SwitchPoster-4a9fbbf9.js'),
              [
                'assets/SwitchPoster-4a9fbbf9.js',
                'assets/atropos-vue.esm-b3e85aba.js',
                'assets/plugin-vue_export-helper-c27b6911.js'
              ]
            )
          )
        )
    }
  },
  QB = e => {
    const t = Ne('keydown', r => {
      const n = r.key === 'k' && (r.ctrlKey || r.metaKey)
      ;(!(r.key === '/') && !n) || (r.preventDefault(), e(), t())
    })
  },
  ZB = e => e.button === 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey,
  ev = () => {
    const e = qe()
    return {
      hitComponent: ({ hit: t, children: r }) => ({
        type: 'a',
        ref: void 0,
        constructor: void 0,
        key: void 0,
        props: {
          href: t.url,
          onClick: n => {
            ZB(n) || (n.preventDefault(), e.push(Ii(t.url, '/')))
          },
          children: r
        },
        __v: null
      }),
      navigator: {
        navigate: ({ itemUrl: t }) => {
          e.push(Ii(t, '/'))
        }
      },
      transformSearchClient: t => {
        const r = J5(t.search, 500)
        return { ...t, search: async (...n) => r(...n) }
      }
    }
  },
  tv = (e = [], t) => [`lang:${t}`, ...(z(e) ? e : [e])],
  rv = ({ buttonText: e = 'Search', buttonAriaLabel: t = e } = {}) =>
    `<button type="button" class="DocSearch DocSearch-Button" aria-label="${t}"><span class="DocSearch-Button-Container"><svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${e}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"><svg width="15" height="15" class="DocSearch-Control-Key-Icon"><path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="square"></path></svg></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`,
  nv = 16,
  d9 = () => {
    if (document.querySelector('.DocSearch-Modal')) return
    const e = new Event('keydown')
    ;(e.key = 'k'),
      (e.metaKey = !0),
      window.dispatchEvent(e),
      setTimeout(d9, nv)
  },
  Ev = e => {
    const t = 'algolia-preconnect'
    ;(window.requestIdleCallback || setTimeout)(() => {
      if (document.head.querySelector(`#${t}`)) return
      const n = document.createElement('link')
      ;(n.id = t),
        (n.rel = 'preconnect'),
        (n.href = `https://${e}-dsn.algolia.net`),
        (n.crossOrigin = ''),
        document.head.appendChild(n)
    })
  },
  ov = {
    appId: 'HDTORBOLNJ',
    apiKey: '5cc292fcb4b413686f662fc008a02ffa',
    indexName: 'vuepress'
  }
i(() => import('./style-e9220a04.js'), []),
  i(() => import('./docsearch-1d421ddb.js'), [])
const av = M({
    name: 'Docsearch',
    props: {
      containerId: {
        type: String,
        required: !1,
        default: 'docsearch-container'
      },
      options: { type: Object, required: !1, default: () => ov }
    },
    setup(e) {
      const t = ev(),
        r = so(),
        n = Vt(),
        E = U(!1),
        o = U(!1),
        a = y(() => {
          var c
          return {
            ...e.options,
            ...((c = e.options.locales) == null ? void 0 : c[n.value])
          }
        }),
        l = async () => {
          var d
          const { default: c } = await i(
            () => import('./index-82585c84.js'),
            []
          )
          c({
            ...t,
            ...a.value,
            container: `#${e.containerId}`,
            searchParameters: {
              ...a.value.searchParameters,
              facetFilters: tv(
                (d = a.value.searchParameters) == null
                  ? void 0
                  : d.facetFilters,
                r.value
              )
            }
          }),
            (E.value = !0)
        },
        s = () => {
          o.value || E.value || ((o.value = !0), l(), d9(), ae(n, l))
        }
      return (
        QB(s),
        se(() => Ev(a.value.appId)),
        () => {
          var c
          return [
            u('div', {
              id: e.containerId,
              style: { display: E.value ? 'block' : 'none' }
            }),
            E.value
              ? null
              : u('div', {
                  onClick: s,
                  innerHTML: rv(
                    (c = a.value.translations) == null ? void 0 : c.button
                  )
                })
          ]
        }
      )
    }
  }),
  iv = ut({
    enhance({ app: e }) {
      e.component('Docsearch', av)
    }
  })
const lv = ut({
    async enhance({ app: e }) {
      {
        const t = await i(
          () => import('./avue.min-98c01615.js').then(r => r.a),
          ['assets/avue.min-98c01615.js', 'assets/commonjsHelpers-042e6b4d.js']
        )
        e.use(t)
      }
    }
  }),
  PE = [K1, y6, I6, x6, $6, J6, K6, i2, B2, j2, X2, XB, YB, iv, lv],
  sv = [
    [
      'v-8daa1a0e',
      '/',
      { y: 'h', t: '首页', i: 'home' },
      ['/index.html', '/README.md']
    ],
    [
      'v-a038fc3c',
      '/%E4%B9%A6%E7%AD%BE%E6%94%B6%E8%97%8F.html',
      { y: 'p', t: '书签收藏', i: 'shuqian' },
      [
        '/书签收藏.html',
        '/%E4%B9%A6%E7%AD%BE%E6%94%B6%E8%97%8F',
        '/书签收藏.md',
        '/%E4%B9%A6%E7%AD%BE%E6%94%B6%E8%97%8F.md'
      ]
    ],
    [
      'v-a9d475b0',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/',
      {
        d: 1697989125e3,
        r: { minutes: 0.03, words: 9 },
        y: 'a',
        t: '前端开发',
        i: 'be'
      },
      [
        '/前端开发/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/index.html',
        '/前端开发/README.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/README.md'
      ]
    ],
    [
      'v-2af1522a',
      '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/',
      {
        d: 1697989125e3,
        r: { minutes: 0.03, words: 9 },
        y: 'a',
        t: '基础知识',
        i: 'study'
      },
      [
        '/基础知识/',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/index.html',
        '/基础知识/README.md',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/README.md'
      ]
    ],
    [
      'v-4c2784f0',
      '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%89%8D%E5%90%8E%E7%AB%AF%E6%95%B0%E6%8D%AE%E4%BA%A4%E4%BA%92.html',
      {
        d: 1697989125e3,
        c: '基础知识',
        g: ['HTTP', 'Ajax', 'axios'],
        e: '// TODO：重整 前后端数据交互 初始前后端通信 前后端通信方式什么？ 前端和后端数据交互的过程浏览器和服务器交互的过程 前端向后端发送数据： 1.登录功能 2.搜索功能 后端向前端发送数据： 页面上的图、文字等内容 前后端通信的过程与概念解释 1. 前后端通信的过程 前后端通信是在 请求-响应 中完成的 2. 概念解释 前端：浏览器端; 客户端：...',
        r: { minutes: 13.86, words: 4159 },
        y: 'a',
        t: '前后端数据交互'
      },
      [
        '/基础知识/前后端数据交互.html',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%89%8D%E5%90%8E%E7%AB%AF%E6%95%B0%E6%8D%AE%E4%BA%A4%E4%BA%92',
        '/基础知识/前后端数据交互.md',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%89%8D%E5%90%8E%E7%AB%AF%E6%95%B0%E6%8D%AE%E4%BA%A4%E4%BA%92.md'
      ]
    ],
    [
      'v-7c618c22',
      '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8.html',
      {
        d: 1697989125e3,
        c: '基础知识',
        g: ['Cookie', 'localStorage', 'sessionStorage'],
        e: '// TODO：重整 Cookie 初识 cookie 浏览器存储数据的一种方式; 因为存储在用户本地，而不是存储在服务器上，是本地存储; 一般会自动随着浏览器每次请求发送到服务器端; 作用：利用cookie跟踪统计用户访问该网站的习惯，比如什么时间访问，访问了哪些页面，在每个网页的停留时间等 cookie 的基本方法 1. 写入cookie: 不能一...',
        r: { minutes: 3.94, words: 1183 },
        y: 'a',
        t: '本地存储'
      },
      [
        '/基础知识/本地存储.html',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8',
        '/基础知识/本地存储.md',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8.md'
      ]
    ],
    [
      'v-eee9b25a',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/',
      {
        d: 1697989125e3,
        r: { minutes: 0.03, words: 9 },
        y: 'a',
        t: '后端开发',
        i: 'be'
      },
      [
        '/后端开发/',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/index.html',
        '/后端开发/README.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/README.md'
      ]
    ],
    [
      'v-2307de2e',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/',
      {
        d: 1697989125e3,
        r: { minutes: 0.03, words: 9 },
        y: 'a',
        t: '杂七杂八',
        i: 'note'
      },
      [
        '/杂七杂八/',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/index.html',
        '/杂七杂八/README.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/README.md'
      ]
    ],
    [
      'v-3443c502',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/H5%E5%BE%AE%E4%BF%A1%E5%88%86%E4%BA%AB.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['开发日志'],
        g: ['项目总结'],
        r: { minutes: 1.02, words: 305 },
        y: 'a',
        t: 'H5微信分享'
      },
      [
        '/开发日志/H5微信分享.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/H5%E5%BE%AE%E4%BF%A1%E5%88%86%E4%BA%AB',
        '/开发日志/H5微信分享.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/H5%E5%BE%AE%E4%BF%A1%E5%88%86%E4%BA%AB.md'
      ]
    ],
    [
      'v-6173ac40',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/',
      {
        d: 1697989125e3,
        r: { minutes: 0.03, words: 9 },
        y: 'a',
        t: '开发日志',
        i: 'biji'
      },
      [
        '/开发日志/',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/index.html',
        '/开发日志/README.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/README.md'
      ]
    ],
    [
      'v-03d76054',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/WebSocket%E7%9A%84%E5%B5%8C%E5%85%A5.html',
      {
        d: 16104096e5,
        l: '2021年1月12日',
        c: ['开发日志'],
        g: ['项目总结'],
        e: 'WebSocket 是什么 WebSocket 是一种在客户端与服务器之间保持 TCP 长连接的网络协议，这样它们就可以随时进行信息交换。提供了一个双向通讯的功能。 WebSocket 解决了什么 WebSocket 解决了传统的 Ajax 只能单向通讯的问题 WebSocket 的使用 【客户端】 【服务端】 可以参考 npm version (ht...',
        r: { minutes: 4.1, words: 1231 },
        y: 'a',
        t: 'WebSocket的嵌入'
      },
      [
        '/开发日志/WebSocket的嵌入.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/WebSocket%E7%9A%84%E5%B5%8C%E5%85%A5',
        '/开发日志/WebSocket的嵌入.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/WebSocket%E7%9A%84%E5%B5%8C%E5%85%A5.md'
      ]
    ],
    [
      'v-d6005d76',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/http%E6%96%AD%E7%82%B9%E7%BB%AD%E4%BC%A0%E5%8E%9F%E7%90%86_http%E5%A4%B4Range%E3%80%81Content-Range.html',
      {
        d: 1614384e6,
        l: '2021年2月27日',
        c: ['开发日志'],
        g: ['项目总结'],
        e: 'HTTP 请求头 Range 所谓断点续传，也就是要从文件已经下载的地方开始继续下载。在以前版本的 HTTP 协议是不支持断点的，HTTP/1.1 开始就支持了。一般断点下载时才用到 Range 和 Content-Range 实体头。 Range 用于请求头中，指定第一个字节的位置和最后一个字节的位置，一般格式： Content-Range 用于响应...',
        r: { minutes: 3.52, words: 1056 },
        y: 'a',
        t: 'http断点续传原理:http头Range、Content-Range'
      },
      [
        '/开发日志/http断点续传原理_http头Range、Content-Range.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/http%E6%96%AD%E7%82%B9%E7%BB%AD%E4%BC%A0%E5%8E%9F%E7%90%86_http%E5%A4%B4Range%E3%80%81Content-Range',
        '/开发日志/http断点续传原理:http头Range、Content-Range.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/http%E6%96%AD%E7%82%B9%E7%BB%AD%E4%BC%A0%E5%8E%9F%E7%90%86:http%E5%A4%B4Range%E3%80%81Content-Range.html',
        '/开发日志/http断点续传原理:http头Range、Content-Range.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/http%E6%96%AD%E7%82%B9%E7%BB%AD%E4%BC%A0%E5%8E%9F%E7%90%86:http%E5%A4%B4Range%E3%80%81Content-Range.md'
      ]
    ],
    [
      'v-b2f45cfc',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/window.btoa%20%E5%92%8C%20window.atob%E6%96%B9%E6%B3%95%E5%AE%9E%E7%8E%B0%E7%BC%96%E7%A0%81%E4%B8%8E%E8%A7%A3%E7%A0%81.html',
      {
        d: 15546816e5,
        l: '2019年4月8日',
        c: ['开发日志'],
        g: ['项目总结'],
        e: '文章目录 window.atob() 与 window.btoa(); Unicode 字符串; decodeURIComponent() 与 encodeURIComponent(); escape() 与 unescape() 方法; window.atob() 与 window.btoa() `WindowBase64.atob() 函数用来解码...',
        r: { minutes: 2.2, words: 661 },
        y: 'a',
        t: 'window.btoa 和 window.atob方法实现编码与解码'
      },
      [
        '/开发日志/window.btoa 和 window.atob方法实现编码与解码.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/window.btoa%20%E5%92%8C%20window.atob%E6%96%B9%E6%B3%95%E5%AE%9E%E7%8E%B0%E7%BC%96%E7%A0%81%E4%B8%8E%E8%A7%A3%E7%A0%81',
        '/开发日志/window.btoa 和 window.atob方法实现编码与解码.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/window.btoa%20%E5%92%8C%20window.atob%E6%96%B9%E6%B3%95%E5%AE%9E%E7%8E%B0%E7%BC%96%E7%A0%81%E4%B8%8E%E8%A7%A3%E7%A0%81.md'
      ]
    ],
    [
      'v-6b85e19e',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E4%B8%80%E8%A1%8C%E4%BB%A3%E7%A0%81%E5%85%A8%E7%AB%99%E8%BF%9B%E5%85%A5%E6%82%BC%E5%BF%B5%E6%A8%A1%E5%BC%8F.html',
      {
        d: 15963264e5,
        l: '2020年8月2日',
        c: '开发日志',
        g: '项目总结',
        e: '一行代码全站进入悼念模式 IQ 前端 功能介绍 一个专注于 CSS/JS 开发技巧的前端公众号，更多前端小干货等着你喔 4 月 5 日 前言 为表达全国各族人民对抗击新冠肺炎疫情斗争牺牲烈士和逝世同胞的深切哀悼，国务院发布公告，决定「2020 年 4 月 4 日举行全国性哀悼活动」。 在此期间，全国和驻外使领馆下半旗志哀，全国停止公共娱乐活动。4 月 ...',
        r: { minutes: 3.6, words: 1079 },
        y: 'a',
        t: '一行代码全站进入悼念模式'
      },
      [
        '/开发日志/一行代码全站进入悼念模式.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E4%B8%80%E8%A1%8C%E4%BB%A3%E7%A0%81%E5%85%A8%E7%AB%99%E8%BF%9B%E5%85%A5%E6%82%BC%E5%BF%B5%E6%A8%A1%E5%BC%8F',
        '/开发日志/一行代码全站进入悼念模式.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E4%B8%80%E8%A1%8C%E4%BB%A3%E7%A0%81%E5%85%A8%E7%AB%99%E8%BF%9B%E5%85%A5%E6%82%BC%E5%BF%B5%E6%A8%A1%E5%BC%8F.md'
      ]
    ],
    [
      'v-71bd102f',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E4%B9%9D%E7%A7%8D%E8%B7%A8%E5%9F%9F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html',
      {
        d: 15561504e5,
        l: '2019年4月25日',
        c: ['开发日志'],
        g: ['项目总结'],
        e: '1.jsonp 客户端 服务端 2.cors 客户端 服务端 3.postMessage 客户端 服务端 4.name 客户端 服务端 5.hash 6.domain 7.websocket 客户端 服务端 8.nginx 客户端 服务端 9.node 中间件代理 客户端 服务端',
        r: { minutes: 3.39, words: 1017 },
        y: 'a',
        t: '九种跨域解决方案'
      },
      [
        '/开发日志/九种跨域解决方案.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E4%B9%9D%E7%A7%8D%E8%B7%A8%E5%9F%9F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88',
        '/开发日志/九种跨域解决方案.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E4%B9%9D%E7%A7%8D%E8%B7%A8%E5%9F%9F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.md'
      ]
    ],
    [
      'v-35eea18b',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%80%BB%E7%BB%93.html',
      {
        d: 16167168e5,
        l: '2021年3月26日',
        c: ['开发日志'],
        g: ['项目总结'],
        e: 'HTTP 请求头 Range 为什么要做性能优化？性能优化到底有多重要？ 网站的性能优化对于用户的留存率、转化率有很大的影响，所以对于前端开发来说性能优化能力也是重要的考察点。 性能优化的点非常的多，有的小伙伴觉得记起来非常的麻烦，所以这里主要梳理出一条线来帮助记忆。 可以将性能优化分为两个大的分类： 加载时优化; 运行时优化; 加载时性能 顾名思义加...',
        r: { minutes: 21.56, words: 6468 },
        y: 'a',
        t: '前端性能优化总结'
      },
      [
        '/开发日志/前端性能优化总结.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%80%BB%E7%BB%93',
        '/开发日志/前端性能优化总结.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%80%BB%E7%BB%93.md'
      ]
    ],
    [
      'v-22f9d806',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E7%BC%93%E5%AD%98.html',
      {
        d: 158544e7,
        l: '2020年3月29日',
        c: '开发日志',
        g: '项目总结',
        e: '前端缓存指的是，浏览器对服务器最近请求过的资源进行存储，通过这种方式来达到减少与服务器的交互请求，以此减少对带宽流量的浪费，以及减少了服务器的负担，而浏览器缓存主要分为两种，强缓存和协商缓存 1.强缓存 强缓存所谓的“强”，在于强制让浏览器按照一定时间范围内来存储来自服务器的资源，有点强制的味道～，强缓存是利用 Expires 或者 Cache-Con...',
        r: { minutes: 7.23, words: 2170 },
        y: 'a',
        t: '前端缓存'
      },
      [
        '/开发日志/前端缓存.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E7%BC%93%E5%AD%98',
        '/开发日志/前端缓存.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E7%BC%93%E5%AD%98.md'
      ]
    ],
    [
      'v-148827a0',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E8%B7%A8%E9%A1%B5%E9%9D%A2%E9%80%9A%E4%BF%A1.html',
      {
        d: 1648944e6,
        l: '2022年4月3日',
        c: ['开发日志'],
        g: ['项目总结'],
        e: '背景 用户在实际的操作场景中会打开多个 Tab 页面 A、B、C、D、E...。当用户在 E Tab 页退出登录，并且登录到新的账号，然后用户切换到非 E 的 Tab 时，发现登录信息没有刷新， 并且由于登录信息没有刷新，会出现操作异常。这个问题简单来说就是多个 Tab 信息没有同步。问题的关键在于一个 Tab 退出重新登录，需要通知到其他的 Tab ...',
        r: { minutes: 12.11, words: 3632 },
        y: 'a',
        t: '前端跨页面通信'
      },
      [
        '/开发日志/前端跨页面通信.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E8%B7%A8%E9%A1%B5%E9%9D%A2%E9%80%9A%E4%BF%A1',
        '/开发日志/前端跨页面通信.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E8%B7%A8%E9%A1%B5%E9%9D%A2%E9%80%9A%E4%BF%A1.md'
      ]
    ],
    [
      'v-6430d112',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%8E%8B%E7%BC%A9%E5%9B%BE%E7%89%87.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['开发日志'],
        g: ['项目总结'],
        e: '将 blob 对象转二进制 buffer 在客户端，返回的数据是 blob 二进制数据，那么怎么将它向客户端进行解压呢？最后通过 renderer 对象成功解决： url 转 base64 base64 转 blob BASE64 加密字符串，当编码的字节较长时，encode 出来的字符串会自动加入\\r\\n 进行自动换行。针对这个问题，原因是 rfc ...',
        r: { minutes: 2.65, words: 795 },
        y: 'a',
        t: '压缩图片'
      },
      [
        '/开发日志/压缩图片.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%8E%8B%E7%BC%A9%E5%9B%BE%E7%89%87',
        '/开发日志/压缩图片.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%8E%8B%E7%BC%A9%E5%9B%BE%E7%89%87.md'
      ]
    ],
    [
      'v-88057dd2',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%A6%82%E4%BD%95%E7%B2%BE%E7%A1%AE%E7%BB%9F%E8%AE%A1%E9%A1%B5%E9%9D%A2%E5%81%9C%E7%95%99%E6%97%B6%E9%95%BF.html',
      {
        d: 15351552e5,
        l: '2018年8月25日',
        c: ['开发日志'],
        g: ['项目总结'],
        e: '1.背景 页面停留时间（Time on Page）简称 Tp，是网站分析中很常见的一个指标，用于反映用户在某些页面上停留时间的长短，传统的 Tp 统计方法会存在一定的统计盲区，比如无法监控单页应用，没有考虑用户切换 Tab、最小化窗口等操作场景。 基于上述背景，重新调研和实现了精确统计页面停留时长的方案，需要 兼容单页应用和多页应用，并且不耦合或入侵业...',
        r: { minutes: 5.22, words: 1566 },
        y: 'a',
        t: '如何精确统计页面停留时长'
      },
      [
        '/开发日志/如何精确统计页面停留时长.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%A6%82%E4%BD%95%E7%B2%BE%E7%A1%AE%E7%BB%9F%E8%AE%A1%E9%A1%B5%E9%9D%A2%E5%81%9C%E7%95%99%E6%97%B6%E9%95%BF',
        '/开发日志/如何精确统计页面停留时长.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%A6%82%E4%BD%95%E7%B2%BE%E7%A1%AE%E7%BB%9F%E8%AE%A1%E9%A1%B5%E9%9D%A2%E5%81%9C%E7%95%99%E6%97%B6%E9%95%BF.md'
      ]
    ],
    [
      'v-0f1df674',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%B8%B8%E8%A7%81%E7%9A%84%E7%BD%91%E7%AB%99%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98.html',
      {
        d: 16304544e5,
        l: '2021年9月1日',
        c: ['开发日志'],
        g: ['项目总结', 'Vue'],
        e: '经过一番 996，精心打造的网站眼看就要部属上线了，但在网站正式上线之前，你有没有想过自己的网站是否安全吗？尽管你的网站用了很多高大上的技术，但是如果网站的安全性不足，无法保护网站的数据，甚至成为恶意程序的寄生温床，那前面堆砌了再多的美好也都成了枉然。 SQL 注入 在众多安全性漏洞中，SQL 注入绝对是最严重但也是最好处理的一种安全漏洞。在数据库执行...',
        r: { minutes: 5.89, words: 1768 },
        y: 'a',
        t: '常见的网站安全问题'
      },
      [
        '/开发日志/常见的网站安全问题.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%B8%B8%E8%A7%81%E7%9A%84%E7%BD%91%E7%AB%99%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98',
        '/开发日志/常见的网站安全问题.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%B8%B8%E8%A7%81%E7%9A%84%E7%BD%91%E7%AB%99%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98.md'
      ]
    ],
    [
      'v-92c8dac6',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%BC%80%E5%8F%91%E5%B8%B8%E7%94%A8%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.html',
      {
        d: 16301952e5,
        l: '2021年8月29日',
        c: ['开发日志'],
        g: ['项目总结'],
        e: '1\\. 下载一个 excel 文档 同时适用于 word,ppt 等浏览器不会默认执行预览的文档,也可以用于下载后端接口返回的流数据，见3 2\\. 在浏览器中自定义下载一些内容 场景：我想下载一些 DOM 内容，我想下载一个 JSON 文件 3\\. 下载后端返回的流 数据是后端以接口的形式返回的,调用1中的 download 方法进行下载 4\\. 提供...',
        r: { minutes: 7.05, words: 2114 },
        y: 'a',
        t: '开发常用代码片段'
      },
      [
        '/开发日志/开发常用代码片段.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%BC%80%E5%8F%91%E5%B8%B8%E7%94%A8%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5',
        '/开发日志/开发常用代码片段.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%BC%80%E5%8F%91%E5%B8%B8%E7%94%A8%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.md'
      ]
    ],
    [
      'v-aceef52a',
      '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E5%A6%82%E4%BD%95%E5%85%A8%E9%9D%A2%E7%B3%BB%E7%BB%9F%E6%8E%8C%E6%8F%A1%E5%89%8D%E7%AB%AF%E6%95%88%E7%8E%87%E5%B7%A5%E7%A8%8B%E5%8C%96.html',
      {
        d: 1610064e6,
        l: '2021年1月8日',
        c: '面经指南',
        e: '为什么要学习前端效率工程化 通常，一个中高级前端工程师，除了要完成业务功能开发目标外，还要对所开发项目的效率、性能、质量等工程化维度去制定和实施技术优化目标，其中以提升效率为目标的优化技术和工具就属于效率工程化的范畴。 对于公司而言，团队效率可以直接带来人工投入产出比的提升，因此效率提升通常会被作为技术层面的一个重点优化方向。而在面试中，对效率工程化的...',
        r: { minutes: 5.85, words: 1755 },
        y: 'a',
        t: '如何全面系统掌握前端效率工程化'
      },
      [
        '/面经指南/如何全面系统掌握前端效率工程化.html',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E5%A6%82%E4%BD%95%E5%85%A8%E9%9D%A2%E7%B3%BB%E7%BB%9F%E6%8E%8C%E6%8F%A1%E5%89%8D%E7%AB%AF%E6%95%88%E7%8E%87%E5%B7%A5%E7%A8%8B%E5%8C%96',
        '/面经指南/如何全面系统掌握前端效率工程化.md',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E5%A6%82%E4%BD%95%E5%85%A8%E9%9D%A2%E7%B3%BB%E7%BB%9F%E6%8E%8C%E6%8F%A1%E5%89%8D%E7%AB%AF%E6%95%88%E7%8E%87%E5%B7%A5%E7%A8%8B%E5%8C%96.md'
      ]
    ],
    [
      'v-4171ac0a',
      '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E6%9C%80%E6%96%B0%E7%9A%84%E5%89%8D%E7%AB%AF%E5%A4%A7%E5%8E%82%E9%9D%A2%E7%BB%8F%EF%BC%88%E8%AF%A6%E8%A7%A3%E7%AD%94%E6%A1%88%EF%BC%89.html',
      {
        d: 1631232e6,
        l: '2021年9月10日',
        c: '面经指南',
        e: '简单 1 从输入一个 URL 地址到浏览器完成渲染的整个过程 这个问题属于老生常谈的经典问题了 下面给出面试简单版作答 1. 浏览器地址栏输入 URL 并回车 2. 浏览器查找当前 URL 是否存在缓存，并比较缓存是否过期 3. DNS 解析 URL 对应的 IP 4. 根据 IP 建立 TCP 连接（三次握手） 5. 发送 http 请求 6. 服务...',
        r: { minutes: 36.15, words: 10846 },
        y: 'a',
        t: '最新的前端大厂面经（详解答案）'
      },
      [
        '/面经指南/最新的前端大厂面经（详解答案）.html',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E6%9C%80%E6%96%B0%E7%9A%84%E5%89%8D%E7%AB%AF%E5%A4%A7%E5%8E%82%E9%9D%A2%E7%BB%8F%EF%BC%88%E8%AF%A6%E8%A7%A3%E7%AD%94%E6%A1%88%EF%BC%89',
        '/面经指南/最新的前端大厂面经（详解答案）.md',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E6%9C%80%E6%96%B0%E7%9A%84%E5%89%8D%E7%AB%AF%E5%A4%A7%E5%8E%82%E9%9D%A2%E7%BB%8F%EF%BC%88%E8%AF%A6%E8%A7%A3%E7%AD%94%E6%A1%88%EF%BC%89.md'
      ]
    ],
    [
      'v-3b82417d',
      '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-css.html',
      {
        d: 1610064e6,
        l: '2021年1月8日',
        c: '面经指南',
        e: 'link 与 @import 的区别 link 是 HTML ⽅式， @import 是CSS⽅式; link 最⼤限度⽀持并⾏下载， @import 过多嵌套导致串⾏下载，出现 FOUC (⽂档样式短暂失效); link 可以通过 rel="alternate stylesheet" 指定候选样式; 浏览器对 link ⽀持早于 @import ，可...',
        r: { minutes: 58.07, words: 17420 },
        y: 'a',
        t: '面经系列-css'
      },
      [
        '/面经指南/面经系列-css.html',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-css',
        '/面经指南/面经系列-css.md',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-css.md'
      ]
    ],
    [
      'v-a9a4a7b2',
      '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-html.html',
      {
        d: 1610064e6,
        l: '2021年1月8日',
        c: '面经指南',
        e: '图片中 title 和 alt 区别？ 通常当⿏标滑动到元素上的时候显示; alt 是 的特有属性，是图⽚内容的等价描述，⽤于图⽚⽆法加载时显示、读屏器阅读图⽚。可提图⽚⾼可访问性，除了纯装饰图⽚外都必须设置有意义的值，搜索引擎会重点分析。; Html5 有哪些新特性、移除了哪些元素 新增元素：; 绘画canvas; 用于媒介回放的video 和 au...',
        r: { minutes: 6.32, words: 1896 },
        y: 'a',
        t: '面经系列-html'
      },
      [
        '/面经指南/面经系列-html.html',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-html',
        '/面经指南/面经系列-html.md',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-html.md'
      ]
    ],
    [
      'v-2632ab89',
      '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-js.html',
      {
        d: 1610064e6,
        l: '2021年1月8日',
        c: '面经指南',
        e: '1\\. 介绍一下 js 的数据类型有哪些,值是如何存储的 JavaScript 一共有 8 种数据类型，其中有 7 种基本数据类型：Undefined、Null、Boolean、Number、String、Symbol（es6 新增，表示独一无二的值）和 BigInt（es10 新增）； 1 种引用数据类型——Object（Object 本质上是由一组...',
        r: { minutes: 110.34, words: 33101 },
        y: 'a',
        t: '面经系列-js'
      },
      [
        '/面经指南/面经系列-js.html',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-js',
        '/面经指南/面经系列-js.md',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-js.md'
      ]
    ],
    [
      'v-432133da',
      '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-vue.html',
      {
        d: 1610064e6,
        l: '2021年1月8日',
        c: '面经指南',
        e: '来，先介绍一下 Vue 的响应式系统 Vue 为 MVVM 框架，当数据模型 data 变化时，页面视图会得到响应更新，其原理对 data 的 getter/setter 方法进行拦截（Object.defineProperty 或者 Proxy），利用发布订阅的设计模式，在 getter 方法中进行订阅，在 setter 方法中发布通知，让所有订阅者...',
        r: { minutes: 14.25, words: 4276 },
        y: 'a',
        t: '面经系列-vue'
      },
      [
        '/面经指南/面经系列-vue.html',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-vue',
        '/面经指南/面经系列-vue.md',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-vue.md'
      ]
    ],
    [
      'v-2f3b8ddd',
      '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-%E4%BC%98%E5%8C%96.html',
      {
        d: 1610064e6,
        l: '2021年1月8日',
        c: '面经指南',
        e: 'SEO 优化 合理的 title 、 description 、 keywords ：搜索对着三项的权重逐个减⼩， title值强调重点即可，重要关键词出现不要超过 2 次，⽽且要靠前，不同⻚⾯ title 要有所不同； description 把⻚⾯内容⾼度概括，⻓度合适，不可过分堆砌关键词，不同⻚⾯description 有所不同； keyword...',
        r: { minutes: 4.19, words: 1258 },
        y: 'a',
        t: '面经系列-优化'
      },
      [
        '/面经指南/面经系列-优化.html',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-%E4%BC%98%E5%8C%96',
        '/面经指南/面经系列-优化.md',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-%E4%BC%98%E5%8C%96.md'
      ]
    ],
    [
      'v-744babfe',
      '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98.html',
      {
        d: 16177536e5,
        l: '2021年4月7日',
        c: '面经指南',
        e: '数据类型 JS 数据类型分为两大类，九个数据类型： 1. 原始类型 2. 对象类型 其中原始类型又分为七种类型，分别为： boolean; number; string; undefined; null; symbol; bigint; 对象类型分为两种，分别为： Object; Function; 其中 Object 中又包含了很多子类型，比如 Ar...',
        r: { minutes: 31.22, words: 9365 },
        y: 'a',
        t: '面经系列-基础面试题'
      },
      [
        '/面经指南/面经系列-基础面试题.html',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98',
        '/面经指南/面经系列-基础面试题.md',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98.md'
      ]
    ],
    [
      'v-13e4bea5',
      '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-%E6%B5%8F%E8%A7%88%E5%99%A8.html',
      {
        d: 16177536e5,
        l: '2021年4月7日',
        c: '面经指南',
        e: '浏览器内核的理解 主要分两个部分：渲染引擎、`js引擎; 渲染引擎：负责取得网页的内容（html css img ...），以及计算网页的显示方式，然后会输出至显示器或者打印机。浏览器的内核不同对于网页的语法解释也不同，所以渲染的效果也不一样; js引擎：解析和执行 javascript 来实现网页的动态效果; 最开始渲染引擎和 js 引擎并没有区分的...',
        r: { minutes: 9.49, words: 2848 },
        y: 'a',
        t: '面经系列-浏览器'
      },
      [
        '/面经指南/面经系列-浏览器.html',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-%E6%B5%8F%E8%A7%88%E5%99%A8',
        '/面经指南/面经系列-浏览器.md',
        '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-%E6%B5%8F%E8%A7%88%E5%99%A8.md'
      ]
    ],
    [
      'v-1221fd78',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/CSS%20%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83%E5%BB%BA%E8%AE%AE.html',
      {
        d: 1535328e6,
        l: '2018年8月27日',
        c: '前端开发',
        g: '代码规范',
        e: '我觉得不同的规范都有各自的长处与缺陷，对待所谓的规范最好的方式不是人云亦云，拿来就用，而是应该结合实际情况及需求，取长补短，取其精华去其糟粕。 编码设置 采用 UTF-8 编码，在 CSS 代码头部使用： 注意，必须要定义在 CSS 文件所有字符的前面（包括编码注释），@charset 才会生效。 例如，下面的例子都会使得 @charset 失效： 命...',
        r: { minutes: 9.93, words: 2979 },
        y: 'a',
        t: 'CSS 书写规范建议'
      },
      [
        '/前端开发/代码规范/CSS 书写规范建议.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/CSS%20%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83%E5%BB%BA%E8%AE%AE',
        '/前端开发/代码规范/CSS 书写规范建议.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/CSS%20%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83%E5%BB%BA%E8%AE%AE.md'
      ]
    ],
    [
      'v-67ae34e2',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/JS%E6%A8%A1%E5%9D%97%E8%A7%84%E8%8C%83%EF%BC%9AAMD%E3%80%81UMD%E3%80%81CMD%E3%80%81commonJS%E3%80%81ES6%20module.html',
      {
        d: 15657408e5,
        l: '2019年8月14日',
        c: '前端开发',
        g: '代码规范',
        e: 'commonJS 特点：; 1、模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。 2、模块加载会阻塞接下来代码的执行，需要等到模块加载完成才能继续执行——同步加载。 环境：服务器环境; 应用：nodejs 的模块规范是参照 commonJS 实现的。; 语法：;...',
        r: { minutes: 3.11, words: 933 },
        y: 'a',
        t: 'JS模块规范：AMD、UMD、CMD、commonJS、ES6 module'
      },
      [
        '/前端开发/代码规范/JS模块规范：AMD、UMD、CMD、commonJS、ES6 module.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/JS%E6%A8%A1%E5%9D%97%E8%A7%84%E8%8C%83%EF%BC%9AAMD%E3%80%81UMD%E3%80%81CMD%E3%80%81commonJS%E3%80%81ES6%20module',
        '/前端开发/代码规范/JS模块规范：AMD、UMD、CMD、commonJS、ES6 module.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/JS%E6%A8%A1%E5%9D%97%E8%A7%84%E8%8C%83%EF%BC%9AAMD%E3%80%81UMD%E3%80%81CMD%E3%80%81commonJS%E3%80%81ES6%20module.md'
      ]
    ],
    [
      'v-a0f5bfd2',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/commonJs%E8%AF%A6%E8%A7%A3.html',
      {
        d: 15662592e5,
        l: '2019年8月20日',
        c: '前端开发',
        g: '代码规范',
        e: '面试会问 require 的运行机制和缓存策略你了解吗？ require 加载模块的是同步还是异步？谈谈你的理解 exports 和 module.exports 的区别是什么？ require 加载模块的时候加载的究竟是什么？ require 提到 exports 和 module.exports 我们不得不提到 require 关键字。大家都知道 ...',
        r: { minutes: 4.06, words: 1219 },
        y: 'a',
        t: 'require时,exports和module.exports的区别'
      },
      [
        '/前端开发/代码规范/commonJs详解.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/commonJs%E8%AF%A6%E8%A7%A3',
        '/前端开发/代码规范/commonJs详解.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/commonJs%E8%AF%A6%E8%A7%A3.md'
      ]
    ],
    [
      'v-c291d276',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Flex%E5%B8%83%E5%B1%80.html',
      {
        d: 1697989125e3,
        c: '前端图形',
        g: 'Flex',
        e: '基础概念 flex 容器：采用 flex 布局的元素，称为 flex 容器; flex 项目：flex 容器的所有子元素自动成为容器成员，称为 flex 项目; 容器默认存在两根轴：水平的主轴main axis和垂直的交叉轴cross axis。主轴的开始位置叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做cross s...',
        r: { minutes: 6.83, words: 2048 },
        y: 'a',
        t: 'flex布局'
      },
      [
        '/前端开发/前端图形/Flex布局.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Flex%E5%B8%83%E5%B1%80',
        '/前端开发/前端图形/Flex布局.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Flex%E5%B8%83%E5%B1%80.md'
      ]
    ],
    [
      'v-7b780ad4',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Sass.html',
      {
        d: 1697989125e3,
        c: '前端图形',
        g: 'Sass',
        e: '注意 以下不代表 scss 的所有功能，仅总结本人目前在项目大量使用过的功能 Sass 中文网 (https://www.sass.hk/) scss 里加{}，加“;” sass 里不加{}，不加“;” 根据个人习惯，使用 scss 变量 方便批量管理统一的样式 嵌套 减少代码重复次数 拆分，引入 把代码拆分成若干个 scss 文件 Mixin 混入...',
        r: { minutes: 1.12, words: 337 },
        y: 'a',
        t: 'Sass'
      },
      [
        '/前端开发/前端图形/Sass.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Sass',
        '/前端开发/前端图形/Sass.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Sass.md'
      ]
    ],
    [
      'v-4880d4a6',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Git%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E5%B7%A5%E5%85%B7.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: '前端开发',
        g: '前端工程化',
        e: '第一次使用配置操作 git config user.name 你的目标用户名 git config user.email 你的目标邮箱名 使用--global 参数，配置全局的用户名和邮箱，只需要配置一次即可。 git config --global user.name hucc git config --global user.email 11111...',
        r: { minutes: 6.32, words: 1895 },
        y: 'a',
        t: 'Git版本控制工具'
      },
      [
        '/前端开发/前端工程化/Git版本控制工具.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Git%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E5%B7%A5%E5%85%B7',
        '/前端开发/前端工程化/Git版本控制工具.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Git%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E5%B7%A5%E5%85%B7.md'
      ]
    ],
    [
      'v-05920706',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Linux.html',
      {
        d: 15347232e5,
        l: '2018年8月20日',
        c: '前端开发',
        g: '前端工程化',
        e: '1.Linux 命令 命令概述 man 命令手册 功能键 功能 -------- -------------------- 空格键 显示手册页的下一屏 Enter 键 一次滚动手册页的一行 b 回滚一屏 f 前滚一屏 q 退出 man 命令 h 列出所有功能键 /word 搜索 word 字符串 | 自动补全 在敲出命令的前几个字母的同时，按下 tab...',
        r: { minutes: 30.57, words: 9172 },
        y: 'a',
        t: 'Linux'
      },
      [
        '/前端开发/前端工程化/Linux.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Linux',
        '/前端开发/前端工程化/Linux.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Linux.md'
      ]
    ],
    [
      'v-03a50e3c',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack_babel.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: '前端开发',
        g: '前端工程化',
        e: 'Webpack 前端模块系统的演进 (http://zhaoda.net/webpack-handbook/module-system.html) webpack 解决了现存模块打包器的两个痛点： 1 Code Spliting - 代码分离; 2 静态资源的模块化处理方案; 在 webpack 看来：所有的静态资源都是模块; webpack 模块能够...',
        r: { minutes: 9.05, words: 2715 },
        y: 'a',
        t: 'Webpack+babel'
      },
      [
        '/前端开发/前端工程化/Webpack_babel.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack_babel',
        '/前端开发/前端工程化/Webpack+babel.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack+babel.html',
        '/前端开发/前端工程化/Webpack+babel.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack+babel.md'
      ]
    ],
    [
      'v-3109a60f',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack4.0.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: '前端开发',
        g: '前端工程化',
        e: 'Update 1.环境支持： 官方宣布不再支持 Node 4, Node 6，使用的是 v8 5.0 版本，支持 93%的 ES6 语法。因为 webpack4 使用了很多 JS 新的语法，它们在新版本的 v8 里经过了优化。 2.0 配置: 受 Parcel 打包工具启发，尽可能的让开发者运行项目的成本变低。webpack4 不再强制需要 webpa...',
        r: { minutes: 7.39, words: 2216 },
        y: 'a',
        t: 'Webpack4.0'
      },
      [
        '/前端开发/前端工程化/Webpack4.0.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack4.0',
        '/前端开发/前端工程化/Webpack4.0.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack4.0.md'
      ]
    ],
    [
      'v-6dee9d16',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack5.0%E5%AD%A6%E4%B9%A0%E6%80%BB%E7%BB%93.html',
      {
        d: 16477344e5,
        l: '2022年3月20日',
        c: '前端开发',
        g: '前端工程化',
        e: 'Webpack 是什么? Webpack 是一种前端资源构建工具，一个静态模块打包器。 前端资源构建工具：主要理解一下这个前端资源是哪些资源。这些前端资源就是浏览器不认识的 web 资源， 比如 sass、less、ts，包括 js 里的高级语法。这些资源要能够在浏览器中正常工作，必须一一经过编译处理。而 webpack 就是可以集成这些编译工具的一个...',
        r: { minutes: 32.48, words: 9744 },
        y: 'a',
        t: 'Webpack5.0学习总结'
      },
      [
        '/前端开发/前端工程化/Webpack5.0学习总结.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack5.0%E5%AD%A6%E4%B9%A0%E6%80%BB%E7%BB%93',
        '/前端开发/前端工程化/Webpack5.0学习总结.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack5.0%E5%AD%A6%E4%B9%A0%E6%80%BB%E7%BB%93.md'
      ]
    ],
    [
      'v-c0487376',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/mac%E5%AE%89%E8%A3%85pod%E6%B5%81%E7%A8%8B.html',
      {
        d: 16140384e5,
        l: '2021年2月23日',
        c: '前端开发',
        g: '前端工程化',
        e: 'Homebrew 的安装方法 完全体 几分钟安装完成; 精简版; 卸载 brew; 常见错误; Homebrew 安装完成之后，处理安装 Ruby 版本: 安装完成后查看其 Ruby 源： 此时可能会出现错误：dyld: Library not loaded: /usr/local/opt/gmp/lib/libgmp.10.dylib; 这里就要更新...',
        r: { minutes: 1.09, words: 327 },
        y: 'a',
        t: 'mac安装pod流程'
      },
      [
        '/前端开发/前端工程化/mac安装pod流程.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/mac%E5%AE%89%E8%A3%85pod%E6%B5%81%E7%A8%8B',
        '/前端开发/前端工程化/mac安装pod流程.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/mac%E5%AE%89%E8%A3%85pod%E6%B5%81%E7%A8%8B.md'
      ]
    ],
    [
      'v-0202caaf',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/nginx%E9%85%8D%E7%BD%AE.html',
      {
        d: 158544e7,
        l: '2020年3月29日',
        c: '前端开发',
        g: '前端工程化',
        e: '随着前端变革，Nginx 也成为了前端开发工程师必不可少应该具备的一项技能了，那 nginx 到底起的是吗作用？ 其实 Nginx 一直跟我们息息相关，它既可以作为 Web 服务器，也可以作为负载均衡服务器，具备高性能、高并发连接等 1.负载均衡 当一个应用单位时间内访问量激增，服务器的带宽及性能受到影响，影响大到自身承受能力时，服务器就会宕机奔溃，为...',
        r: { minutes: 6.94, words: 2081 },
        y: 'a',
        t: 'nginx配置'
      },
      [
        '/前端开发/前端工程化/nginx配置.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/nginx%E9%85%8D%E7%BD%AE',
        '/前端开发/前端工程化/nginx配置.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/nginx%E9%85%8D%E7%BD%AE.md'
      ]
    ],
    [
      'v-06367869',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/vscode%E5%B8%B8%E7%94%A8%E6%8F%92%E4%BB%B6.html',
      {
        d: 15349824e5,
        l: '2018年8月23日',
        c: '前端开发',
        g: '前端工程化',
        e: '必备插件 要用 Vue 高亮，搜 vue syntax HighLight; eslint,beautify,以及针对具体框架 vue,react,angular 的插件; wepy-beautify; rc-beautify; vetur; 语法高亮、智能感知、Emmet 等 VueHelper; snippet 代码片段 Auto Close Ta...',
        r: { minutes: 17.75, words: 5326 },
        y: 'a',
        t: 'vscode常用插件'
      },
      [
        '/前端开发/前端工程化/vscode常用插件.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/vscode%E5%B8%B8%E7%94%A8%E6%8F%92%E4%BB%B6',
        '/前端开发/前端工程化/vscode常用插件.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/vscode%E5%B8%B8%E7%94%A8%E6%8F%92%E4%BB%B6.md'
      ]
    ],
    [
      'v-080d42c3',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/vue-cli3.X%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE%E5%88%B0%E6%9C%8D%E5%8A%A1%E5%99%A8.html',
      {
        d: 15550272e5,
        l: '2019年4月12日',
        c: '前端开发',
        g: '前端工程化',
        e: '前言 平时部署前端项目流程是：先部署到测试环境 ok 后再发布到生产环境上，部署到测试环境用 xshell 连上服务器，然后用 xftp 连接服务器，然后本地 build 项目，接着把 build 好的文件通过 xftp 上传到服务器上，整个流程感觉稍有繁琐，重复。 本教程讲解的是 Vue-CLI 3.x 脚手架搭建的 vue 项目, 利用scp2 (...',
        r: { minutes: 3.26, words: 978 },
        y: 'a',
        t: 'vue-cli3.X自动部署项目到服务器'
      },
      [
        '/前端开发/前端工程化/vue-cli3.X自动部署项目到服务器.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/vue-cli3.X%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE%E5%88%B0%E6%9C%8D%E5%8A%A1%E5%99%A8',
        '/前端开发/前端工程化/vue-cli3.X自动部署项目到服务器.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/vue-cli3.X%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE%E5%88%B0%E6%9C%8D%E5%8A%A1%E5%99%A8.md'
      ]
    ],
    [
      'v-55e548c0',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%88%A0%E9%99%A4RN%E5%AE%89%E5%8D%93%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.html',
      {
        d: 16269984e5,
        l: '2021年7月23日',
        c: '前端开发',
        g: '前端工程化',
        e: '============================ 1、卸载 Android Studio，在终端(terminal)执行以下命令： 1. rm -rf /Applications/Android\\ Studio.app 2. rm -rf ~/Library/Preferences/AndroidStudio\\* 3. rm -rf ~/Lib...',
        r: { minutes: 1.33, words: 400 },
        y: 'a',
        t: '删除RN安卓开发环境'
      },
      [
        '/前端开发/前端工程化/删除RN安卓开发环境.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%88%A0%E9%99%A4RN%E5%AE%89%E5%8D%93%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83',
        '/前端开发/前端工程化/删除RN安卓开发环境.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%88%A0%E9%99%A4RN%E5%AE%89%E5%8D%93%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.md'
      ]
    ],
    [
      'v-00140707',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84%E5%92%8C%E5%88%86%E5%B8%83%E5%BC%8F%E6%9E%B6%E6%9E%84%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88.html',
      {
        d: 16569792e5,
        l: '2022年7月5日',
        c: '前端开发',
        g: '前端工程化',
        e: '微服务架构和分布式架构的区别是部署方式不一样。分布式是将一个大的系统划分为多个业务模块,这些业务模块会分别部署到不同的机器上，通过接口进行数据交互。微服务的应用可以部署在是同一个服务器，不一定是分散在多个服务器上。 微服务架构和分布式架构的区别是部署方式不一样。分布式是将一个大的系统划分为多个业务模块,这些业务模块会分别部署到不同的机器上，通过接口进行...',
        r: { minutes: 3.85, words: 1155 },
        y: 'a',
        t: '微服务架构和分布式架构的区别是什么'
      },
      [
        '/前端开发/前端工程化/微服务架构和分布式架构的区别是什么.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84%E5%92%8C%E5%88%86%E5%B8%83%E5%BC%8F%E6%9E%B6%E6%9E%84%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88',
        '/前端开发/前端工程化/微服务架构和分布式架构的区别是什么.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84%E5%92%8C%E5%88%86%E5%B8%83%E5%BC%8F%E6%9E%B6%E6%9E%84%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88.md'
      ]
    ],
    [
      'v-d6e48cfe',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%A6%82%E4%BD%95%E8%AE%BE%E7%BD%AE%E6%9C%8D%E5%8A%A1%E8%87%AA%E5%8A%A8%E5%90%AF%E5%8A%A8%E8%BF%9B%E7%A8%8B.html',
      {
        d: 16570656e5,
        l: '2022年7月6日',
        c: '前端开发',
        g: '前端工程化',
        e: '1、进入服务器 ssh 目录并输入以下命令（root 权限），进入到 linux 启动配置文件目录 2、输入以下命令会自动打开一个新建启动文件的编辑窗口（名称可自行定义） 3、窗口里输入键盘命令 i 进入编辑模式，并输入以下内容，注意第一行、第二行必须保留。从第三行开始输入你要启动的服务命令（必须得手动能成功启动，自动启动才会生效） 输入完以后按ESC...',
        r: { minutes: 1.08, words: 324 },
        y: 'a',
        t: '服务器如何设置服务自动启动进程'
      },
      [
        '/前端开发/前端工程化/服务器如何设置服务自动启动进程.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%A6%82%E4%BD%95%E8%AE%BE%E7%BD%AE%E6%9C%8D%E5%8A%A1%E8%87%AA%E5%8A%A8%E5%90%AF%E5%8A%A8%E8%BF%9B%E7%A8%8B',
        '/前端开发/前端工程化/服务器如何设置服务自动启动进程.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%A6%82%E4%BD%95%E8%AE%BE%E7%BD%AE%E6%9C%8D%E5%8A%A1%E8%87%AA%E5%8A%A8%E5%90%AF%E5%8A%A8%E8%BF%9B%E7%A8%8B.md'
      ]
    ],
    [
      'v-a988658e',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E7%90%86%E8%A7%A3serverless%E6%97%A0%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84.html',
      {
        d: 16456608e5,
        l: '2022年2月24日',
        c: '前端开发',
        g: '前端工程化',
        e: '理解 serverless 无服务架构原理(一) (https://www.cnblogs.com/tugenhua0707/p/10991363.html) 阅读目录 一：什么是 serverless 无服务？; 二：与传统模式架构区别？; 三：serverless 优缺点？; 四：使用 serverless 的应用场景有哪些？; 一：什么是 ser...',
        r: { minutes: 12.31, words: 3692 },
        y: 'a',
        t: '理解serverless无服务架构'
      },
      [
        '/前端开发/前端工程化/理解serverless无服务架构.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E7%90%86%E8%A7%A3serverless%E6%97%A0%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84',
        '/前端开发/前端工程化/理解serverless无服务架构.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E7%90%86%E8%A7%A3serverless%E6%97%A0%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84.md'
      ]
    ],
    [
      'v-4930d5a1',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E9%98%BF%E9%87%8C%E4%BA%91linux%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%E6%A1%8C%E9%9D%A2.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: '前端开发',
        g: '前端工程化',
        e: 'CentOS 7 系统下，本文以 MATE 桌面环境安装进行安装配置说明： 1.登录服务器，执行如下指令安装桌面环境：; 先安装 MATE Desktop yum groups install “MATE Desktop” 命令输入之后，会列出一大堆文字的，然后显示这个 y/d/n，输入 y，按回车下载安装； 安装完成，显示下面图片 complete ...',
        r: { minutes: 2.59, words: 776 },
        y: 'a',
        t: '阿里云linux服务器安装桌面'
      },
      [
        '/前端开发/前端工程化/阿里云linux服务器安装桌面.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E9%98%BF%E9%87%8C%E4%BA%91linux%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%E6%A1%8C%E9%9D%A2',
        '/前端开发/前端工程化/阿里云linux服务器安装桌面.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E9%98%BF%E9%87%8C%E4%BA%91linux%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%E6%A1%8C%E9%9D%A2.md'
      ]
    ],
    [
      'v-12975cb0',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E9%98%BF%E9%87%8C%E4%BA%91%E8%BD%BB%E9%87%8F%E5%BA%94%E7%94%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%98%B2%E7%81%AB%E5%A2%99%E9%85%8D%E7%BD%AE.html',
      {
        d: 16570656e5,
        l: '2022年7月6日',
        c: '前端开发',
        g: '前端工程化',
        e: '1.命令行 (https://so.csdn.net/so/search?q=%E5%91%BD%E4%BB%A4%E8%A1%8C&spm=1001.2101.3001.7020)配置 1.开启防火墙 systemctl start firewalld 2.限制端口 firewall-cmd --zone=public --add-port=5672...',
        r: { minutes: 1.25, words: 375 },
        y: 'a',
        t: '阿里云轻量应用服务器防火墙配置'
      },
      [
        '/前端开发/前端工程化/阿里云轻量应用服务器防火墙配置.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E9%98%BF%E9%87%8C%E4%BA%91%E8%BD%BB%E9%87%8F%E5%BA%94%E7%94%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%98%B2%E7%81%AB%E5%A2%99%E9%85%8D%E7%BD%AE',
        '/前端开发/前端工程化/阿里云轻量应用服务器防火墙配置.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E9%98%BF%E9%87%8C%E4%BA%91%E8%BD%BB%E9%87%8F%E5%BA%94%E7%94%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%98%B2%E7%81%AB%E5%A2%99%E9%85%8D%E7%BD%AE.md'
      ]
    ],
    [
      'v-222b7bd2',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/',
      { d: 1697989125e3, y: 'a', t: '' },
      [
        '/前端开发/前端框架/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/index.html',
        '/前端开发/前端框架/README.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/README.md'
      ]
    ],
    [
      'v-6b16d8cf',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F.html',
      {
        d: 1697989125e3,
        c: '前端进阶',
        e: '小程序文件类型及代码结构介绍 一个页面由 4 个文件组成：xx.js,`xx.json,xx.wxml,xx.wxss 项目根目录下，也有这样的 3 个文件app.js,app.json,app.wxss，为全局的逻辑，配置，样式 全局配置文件的使用 全局配置 (https://developers.weixin.qq.com/miniprogram/...',
        r: { minutes: 3.97, words: 1192 },
        y: 'a',
        t: '微信小程序',
        i: 'xiaochengxu'
      },
      [
        '/前端开发/前端进阶/微信小程序.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F',
        '/前端开发/前端进阶/微信小程序.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F.md'
      ]
    ],
    [
      'v-76bfbc3c',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/vuex%E5%92%8Credux%E7%9A%84%E6%95%B0%E6%8D%AE%E6%8C%81%E4%B9%85%E5%8C%96%E7%BC%93%E5%AD%98%E6%96%B9%E6%A1%88.html',
      {
        d: 15767136e5,
        l: '2019年12月19日',
        c: ['转载'],
        g: ['随笔'],
        e: 'vuex-persist Vuex 解决了多视图之间的数据共享问题。但是运用过程中又带来了一个新的问题是，Vuex 的状态存储并不能持久化。也就是说当你存储在 Vuex 中的 store 里的数据，只要一刷新页面，数据就丢失了。 引入vuex-persist (https://github.com/championswimmer/vuex-persis...',
        r: { minutes: 3.67, words: 1101 },
        y: 'a',
        t: 'vuex',
        i: 'pen-to-square'
      },
      [
        '/前端开发/转载/vuex和redux的数据持久化缓存方案.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/vuex%E5%92%8Credux%E7%9A%84%E6%95%B0%E6%8D%AE%E6%8C%81%E4%B9%85%E5%8C%96%E7%BC%93%E5%AD%98%E6%96%B9%E6%A1%88',
        '/前端开发/转载/vuex和redux的数据持久化缓存方案.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/vuex%E5%92%8Credux%E7%9A%84%E6%95%B0%E6%8D%AE%E6%8C%81%E4%B9%85%E5%8C%96%E7%BC%93%E5%AD%98%E6%96%B9%E6%A1%88.md'
      ]
    ],
    [
      'v-b56c971e',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/vue%E4%B8%8Ereact%E5%85%A8%E9%9D%A2%E5%AF%B9%E6%AF%94.html',
      {
        d: 15605568e5,
        l: '2019年6月15日',
        c: ['转载'],
        g: ['随笔'],
        e: 'vue 与 react 全面对比 生命周期 第一阶段：组件挂载阶段 vue 说明 react 说明 ------------ ------------------------------------------------------------------------------------------------------------------...',
        r: { minutes: 8.28, words: 2485 },
        y: 'a',
        t: '',
        i: 'pen-to-square'
      },
      [
        '/前端开发/转载/vue与react全面对比.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/vue%E4%B8%8Ereact%E5%85%A8%E9%9D%A2%E5%AF%B9%E6%AF%94',
        '/前端开发/转载/vue与react全面对比.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/vue%E4%B8%8Ereact%E5%85%A8%E9%9D%A2%E5%AF%B9%E6%AF%94.md'
      ]
    ],
    [
      'v-1ff4e172',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88%E8%87%AA%E6%A3%80%E6%B8%85%E5%8D%95.html',
      {
        d: 15564096e5,
        l: '2019年4月28日',
        c: '前端开发',
        g: '前端工程化',
        e: '开篇 前端开发是一个非常特殊的行业，它的历史实际上不是很长，但是知识之繁杂，技术迭代速度之快是其他技术所不能比拟的。 winter在他的《重学前端》课程中提到： 到现在为止，前端工程师已经成为研发体系中的重要岗位之一。可是，与此相对的是，我发现极少或者几乎没有大学的计算机专业愿意开设前端课程，更没有系统性的教学方案出现。大部分前端工程师的知识，其实都是...',
        r: { minutes: 23.75, words: 7125 },
        y: 'a',
        t: '前端工程师自检清单'
      },
      [
        '/前端开发/转载/前端工程师自检清单.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88%E8%87%AA%E6%A3%80%E6%B8%85%E5%8D%95',
        '/前端开发/转载/前端工程师自检清单.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88%E8%87%AA%E6%A3%80%E6%B8%85%E5%8D%95.md'
      ]
    ],
    [
      'v-2630ab4c',
      '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/01.html',
      {
        d: 1697989125e3,
        c: ['基础知识', '浏览器工作原理与实践'],
        g: 'chrome架构',
        e: '无论你是想要设计高性能 Web 应用，还是要优化现有的 Web 应用，你都需要了解浏览器中的网络流程、⻚面渲染过程，JavaScript 执行流程，以及 Web 安全理论，而这些功能是分散在浏览器的各个功能组件中的，比较多、比较散，要怎样学习才能掌握呢?通过浏览器的多进程架构的学习，你就可以把这些分散的知识点串 起来，组成一张网，从而让自己能站在更高的...',
        r: { minutes: 17.52, words: 5255 },
        y: 'a',
        t: '01-chrome架构：仅仅打开了一个页面，为什么会有4个进程？'
      },
      [
        '/基础知识/浏览器工作原理与实践/01.html',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/01',
        '/基础知识/浏览器工作原理与实践/01.md',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/01.md'
      ]
    ],
    [
      'v-a37f46a2',
      '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE.html',
      {
        d: 1697989125e3,
        e: '放大 🔍 页面查看 浏览器工作原理与实践_思维导图',
        r: { minutes: 0.26, words: 79 },
        y: 'a',
        t: '思维导图'
      },
      [
        '/基础知识/浏览器工作原理与实践/思维导图.html',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE',
        '/基础知识/浏览器工作原理与实践/思维导图.md',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE.md'
      ]
    ],
    [
      'v-94e632d0',
      '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%AE%97%E6%B3%95/Crypto-js---%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95%E5%BA%93.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: '基础知识',
        g: '算法',
        e: 'MD5 加密： SHA1 加密 SHA2 加密 Progressive Hashing',
        r: { minutes: 0.32, words: 97 },
        y: 'a',
        t: 'Crypto-js---加密算法库'
      },
      [
        '/基础知识/算法/Crypto-js---加密算法库.html',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%AE%97%E6%B3%95/Crypto-js---%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95%E5%BA%93',
        '/基础知识/算法/Crypto-js---加密算法库.md',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%AE%97%E6%B3%95/Crypto-js---%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95%E5%BA%93.md'
      ]
    ],
    [
      'v-5e40b5d5',
      '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%AE%97%E6%B3%95/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95%E7%9B%B8%E5%85%B3%E7%9A%84JavaScript%E5%AE%9E%E7%8E%B0.html',
      {
        d: 16458336e5,
        l: '2022年2月26日',
        c: ['基础知识'],
        g: ['算法'],
        e: '常见算法相关的 JavaScript 实现 位运算相关 计算汉明重量 判断奇偶 二分查找 非递归方法 递归方法 常见排序 快速排序 二叉树遍历相关 先序遍历（中->左->右） 递归实现 非递归实现 中序遍历（左->中->右） 递归实现 非递归实现 后序遍历（左->右->中） 递归实现 非递归实现 层次遍历',
        r: { minutes: 1.61, words: 482 },
        y: 'a',
        t: '常见算法相关的JavaScript实现'
      },
      [
        '/基础知识/算法/常见算法相关的JavaScript实现.html',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%AE%97%E6%B3%95/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95%E7%9B%B8%E5%85%B3%E7%9A%84JavaScript%E5%AE%9E%E7%8E%B0',
        '/基础知识/算法/常见算法相关的JavaScript实现.md',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%AE%97%E6%B3%95/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95%E7%9B%B8%E5%85%B3%E7%9A%84JavaScript%E5%AE%9E%E7%8E%B0.md'
      ]
    ],
    [
      'v-0ebfad97',
      '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E6%A6%82%E8%BF%B0%E7%AF%87.html',
      {
        d: 1697989125e3,
        c: ['基础知识', '计算机网络'],
        e: '什么是计算机网络？ 计算机网络主要由一些通用的、可编程的硬件互连而成，通过这些硬件，可以传送不同类型的数据，并且可以支持广泛和日益增长的应用。 计算机网络的不是软件概念，还包含硬件设备; 计算机网络不仅仅是信息通信，还可以支持广泛的应用; 计算机网络分类 计算机网络分类 计算机网络分类2 计算机网络分类3 计算机网络发展历史 互联网的发展历史 互联网的...',
        r: { minutes: 16.07, words: 4822 },
        y: 'a',
        t: '概述篇'
      },
      [
        '/基础知识/计算机网络/概述篇.html',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E6%A6%82%E8%BF%B0%E7%AF%87',
        '/基础知识/计算机网络/概述篇.md',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E6%A6%82%E8%BF%B0%E7%AF%87.md'
      ]
    ],
    [
      'v-7c9eb5bd',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/Node.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: '后端开发',
        g: 'node',
        e: '1、浏览器的工作原理 浏览器组成： 用户界面：地址栏 前进后退、书签菜单; 渲染引擎:负责显示请求的内容; 浏览器引擎:在用户界面和渲染引擎之间传达指令（点击刷新）; 网络模块：用户网络调用; UI 后端:用户绘制基本的窗口小部件; JS 解释器:解析和执行 js 代码; 数据存储:持久层（cookie、LocalStorage 和 SessionSt...',
        r: { minutes: 18.13, words: 5438 },
        y: 'a',
        t: 'Node'
      },
      [
        '/后端开发/node/Node.html',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/Node',
        '/后端开发/node/Node.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/Node.md'
      ]
    ],
    [
      'v-5ccd377a',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/',
      {
        d: 1697989125e3,
        r: { minutes: 0.02, words: 6 },
        y: 'a',
        t: 'node',
        i: 'node'
      },
      [
        '/后端开发/node/',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/index.html',
        '/后端开发/node/README.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/README.md'
      ]
    ],
    [
      'v-c1183614',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/koa.html',
      {
        d: 1697989125e3,
        e: 'koa2 环境搭建-创建项目 安装脚手架：npm i koa-generator -g 使用脚手架 koa-generator 创建 koa2 项目 ：koa2 xxx koa2 环境搭建-目录和文件介绍 app.js 是项目入口文件，其中 app.use()都是中间件 bin/www 获取 app 导出的 Koa 实例，并且监听 3000 端口；其他...',
        r: { minutes: 7.02, words: 2105 },
        y: 'a',
        t: 'koa2'
      },
      [
        '/后端开发/node/koa.html',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/koa',
        '/后端开发/node/koa.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/koa.md'
      ]
    ],
    [
      'v-b29f1a14',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/node%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E4%BB%A5%E5%8F%8A%E5%B8%B8%E7%94%A8%E5%BA%93.html',
      {
        d: 1697989125e3,
        c: 'node技术栈',
        g: ['npm', 'yarn', 'commonJs', 'nrm', 'nvm', 'node'],
        e: 'node.js 介绍 一个基于 Chrome v8 引擎的 Javascript 运行时(代码的运行环境)环境 chrome v8 引擎 chrome 是一个浏览器，它可以执行 js 代码; V8 就是 chrome 的 js 引擎，以速度著称; nodejs 也是基于 js 语法的，因此也可以借用 ∨8 引擎; nvm nvm 是 node.js 的...',
        r: { minutes: 3.18, words: 954 },
        y: 'a',
        t: 'node基础知识以及常用库',
        O: 1
      },
      [
        '/后端开发/node/node基础知识以及常用库.html',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/node%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E4%BB%A5%E5%8F%8A%E5%B8%B8%E7%94%A8%E5%BA%93',
        '/后端开发/node/node基础知识以及常用库.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/node%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E4%BB%A5%E5%8F%8A%E5%B8%B8%E7%94%A8%E5%BA%93.md'
      ]
    ],
    [
      'v-7ca6d646',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/python/python.html',
      {
        d: 1535328e6,
        l: '2018年8月27日',
        c: ['后端开发'],
        g: ['python'],
        e: "1.认识 python 和基础知识 1.1 注释 单行注释 以#开头，#右边的所有东西当做说明，而不是真正要执行的程序，起辅助说明作用 多行注释 3. python 程序中，中文支持 如果直接在程序中用到了中文，比如 print('你好') 如果直接运行输出，程序会出错： 中文出错 解决的办法为：在程序的开头写入如下代码，这就是中文注释 #coding...",
        r: { minutes: 46.14, words: 13842 },
        y: 'a',
        t: 'python'
      },
      [
        '/后端开发/python/python.html',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/python/python',
        '/后端开发/python/python.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/python/python.md'
      ]
    ],
    [
      'v-b7685482',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/MongoDB.html',
      {
        d: 1697989125e3,
        c: '数据库',
        g: ['MongoDB', 'mongoose'],
        e: 'MongoDB 一. MongoDB 介绍: MongoDB 是一个跨平台，面向文档的数据库，高性能，高可用性和易于扩展。 二、三个概念 数据库:数据库是一个集合的物理容器,一个单一的 MongoDB 服务器通常有多个数据库。; 集合:集合是一组 MongoDB 的文件。简单理解就是一个数组; 文档 : 文档是一组键值对。(可以认为是 json 格式,...',
        r: { minutes: 11.14, words: 3342 },
        y: 'a',
        t: 'MongoDB'
      },
      [
        '/后端开发/数据库/MongoDB.html',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/MongoDB',
        '/后端开发/数据库/MongoDB.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/MongoDB.md'
      ]
    ],
    [
      'v-431839f8',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/',
      {
        d: 1697989125e3,
        r: { minutes: 0.03, words: 8 },
        y: 'a',
        t: '数据库',
        i: 'node'
      },
      [
        '/后端开发/数据库/',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/index.html',
        '/后端开发/数据库/README.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/README.md'
      ]
    ],
    [
      'v-44dbb96f',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/mysql.html',
      {
        d: 1697989125e3,
        c: '数据库',
        g: ['mysql'],
        e: '一、mysql 服务的启动和停止 二、登陆 mysql 三、增加新用户 mysql> 格式：grant 权限 on 数据库.\\* to 用户名@登录主机 identified by "密码" 四： 操作数据库及常见错误 mysql> 登录到 mysql 中，然后在 mysql 的提示符下运行下列命令，每个命令以分号结束。 1、 显示数据库列表。 2、 ...',
        r: { minutes: 5.75, words: 1726 },
        y: 'a',
        t: 'mysql'
      },
      [
        '/后端开发/数据库/mysql.html',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/mysql',
        '/后端开发/数据库/mysql.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/mysql.md'
      ]
    ],
    [
      'v-33770c83',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAmongoose.html',
      {
        d: 1697989125e3,
        c: '数据库',
        g: ['mongodb', 'mongoose'],
        e: '连接数据库 connect mongoose 有两种方式 第一种: 第二种: mongoose.createConnection()和 mongoose.connect()区别 首先，我们需要定义一个连接，如果你的 app 只用到一个数据库，你应该使用 mongoose.connect。如果你还需要连接其他数据库，使用 mongoose.createC...',
        r: { minutes: 31.85, words: 9556 },
        y: 'a',
        t: '深入浅出mongoose'
      },
      [
        '/后端开发/数据库/深入浅出mongoose.html',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAmongoose',
        '/后端开发/数据库/深入浅出mongoose.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAmongoose.md'
      ]
    ],
    [
      'v-fab7c824',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/mac/',
      {
        d: 1697989125e3,
        e: 'mac 软件 (); mac 提示 app 已损坏解决方法 ();',
        r: { minutes: 0.08, words: 25 },
        y: 'a',
        t: 'mac',
        i: 'mac'
      },
      [
        '/杂七杂八/mac/',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/mac/index.html',
        '/杂七杂八/mac/README.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/mac/README.md'
      ]
    ],
    [
      'v-0dd559df',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/mac/mac%E6%8F%90%E7%A4%BAapp%E5%B7%B2%E6%8D%9F%E5%9D%8F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html',
      {
        d: 1697989125e3,
        c: ['杂记', 'mac'],
        e: '参考 解决 Mac 安装应用提示 xxx.app 已损坏，无法打开/打不开 xxx，因为它来自身份不明的开发者 (https://www.jianshu.com/p/f4c80e46f236) 终端输入以上命令+应用程序路径，绕过公证',
        r: { minutes: 0.27, words: 81 },
        y: 'a',
        t: 'mac提示app已损坏解决方法',
        O: 6
      },
      [
        '/杂七杂八/mac/mac提示app已损坏解决方法.html',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/mac/mac%E6%8F%90%E7%A4%BAapp%E5%B7%B2%E6%8D%9F%E5%9D%8F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95',
        '/杂七杂八/mac/mac提示app已损坏解决方法.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/mac/mac%E6%8F%90%E7%A4%BAapp%E5%B7%B2%E6%8D%9F%E5%9D%8F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.md'
      ]
    ],
    [
      'v-1a64708b',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/mac/mac%E8%BD%AF%E4%BB%B6.html',
      {
        d: 1697989125e3,
        c: ['杂记', 'mac'],
        e: 'app Store qq; 微信; Dynamic Wallpaper：动态壁纸; WPSOffice; 企业微信; 网易邮箱大师; Thor Launcher:应用快捷启动器; 官网 vscode：微软推出的轻量代码编辑器,写写 demo,用力扣插件刷刷算法还不错下载 (https://code.visualstudio.com/); 微信开发者工具...',
        r: { minutes: 1.85, words: 555 },
        y: 'a',
        t: 'mac软件',
        O: 5
      },
      [
        '/杂七杂八/mac/mac软件.html',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/mac/mac%E8%BD%AF%E4%BB%B6',
        '/杂七杂八/mac/mac软件.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/mac/mac%E8%BD%AF%E4%BB%B6.md'
      ]
    ],
    [
      'v-3af3a18d',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/switch/',
      {
        d: 1697989125e3,
        e: '此处展示我在游玩 swtich 时，所购买的游戏和相应的评价。 游戏墙 (/杂记/switch/游戏墙.html); 游戏评价 (/杂记/switch/游戏评价.html);',
        r: { minutes: 0.19, words: 58 },
        y: 'a',
        t: 'Switch',
        i: 'switch'
      },
      [
        '/杂七杂八/switch/',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/switch/index.html',
        '/杂七杂八/switch/README.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/switch/README.md'
      ]
    ],
    [
      'v-170a91f0',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/switch/%E6%B8%B8%E6%88%8F%E5%A2%99.html',
      {
        d: 1697989125e3,
        c: ['杂记', 'switch'],
        r: { minutes: 0.04, words: 11 },
        y: 'a',
        t: '游戏墙',
        O: 1
      },
      [
        '/杂七杂八/switch/游戏墙.html',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/switch/%E6%B8%B8%E6%88%8F%E5%A2%99',
        '/杂七杂八/switch/游戏墙.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/switch/%E6%B8%B8%E6%88%8F%E5%A2%99.md'
      ]
    ],
    [
      'v-f7cd8a78',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/switch/%E6%B8%B8%E6%88%8F%E8%AF%84%E4%BB%B7.html',
      {
        d: 1697989125e3,
        c: ['杂记', 'switch'],
        e: 'Hades 评分:🌟🌟🌟🌟🌟; 评语:横版过关游戏，睡前来一局很爽很解压; 游戏截图：; fifa23 HollowKnight 评分:🌟🌟🌟🌟; 评语:太难了!!!!; 游戏截图：; DoorKickers 评分:🌟🌟🌟🌟🌟; 评语:横版过关游戏，睡前来一局很爽很解压; 游戏截图：;',
        r: { minutes: 0.26, words: 78 },
        y: 'a',
        t: '游戏评价',
        O: 2
      },
      [
        '/杂七杂八/switch/游戏评价.html',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/switch/%E6%B8%B8%E6%88%8F%E8%AF%84%E4%BB%B7',
        '/杂七杂八/switch/游戏评价.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/switch/%E6%B8%B8%E6%88%8F%E8%AF%84%E4%BB%B7.md'
      ]
    ],
    [
      'v-1fe05178',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/IntelliJ%E7%B3%BB%E8%BD%AF%E4%BB%B6%E7%A0%B4%E8%A7%A3.html',
      {
        d: 1697989125e3,
        c: '杂记',
        e: '目前已知可破解版本 2022.3 /Applications/WebStorm.app/Contents/bin/webstorm.vmoptions 写入 IDEA code ::: details webstrom code :::',
        r: { minutes: 0.43, words: 130 },
        y: 'a',
        t: 'IntelliJ系软件破解',
        O: 4
      },
      [
        '/杂七杂八/开发工具/IntelliJ系软件破解.html',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/IntelliJ%E7%B3%BB%E8%BD%AF%E4%BB%B6%E7%A0%B4%E8%A7%A3',
        '/杂七杂八/开发工具/IntelliJ系软件破解.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/IntelliJ%E7%B3%BB%E8%BD%AF%E4%BB%B6%E7%A0%B4%E8%A7%A3.md'
      ]
    ],
    [
      'v-10b4f0b9',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/IntelliJ%E8%BD%AF%E4%BB%B6%E6%8F%92%E4%BB%B6.html',
      {
        d: 1697989125e3,
        c: '杂记',
        e: 'Atom Material Icons:文件类型图标; AceJump:快速跳转; HighlightBracketPair：括号高亮; Material Theme UI：很漂亮的主题; wakaTime:代码编写时长统计;',
        r: { minutes: 0.16, words: 48 },
        y: 'a',
        t: 'IntelliJ软件插件',
        O: 3
      },
      [
        '/杂七杂八/开发工具/IntelliJ软件插件.html',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/IntelliJ%E8%BD%AF%E4%BB%B6%E6%8F%92%E4%BB%B6',
        '/杂七杂八/开发工具/IntelliJ软件插件.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/IntelliJ%E8%BD%AF%E4%BB%B6%E6%8F%92%E4%BB%B6.md'
      ]
    ],
    [
      'v-19f5ef16',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/',
      {
        d: 1697989125e3,
        r: { minutes: 0.04, words: 12 },
        y: 'a',
        t: '开发工具',
        i: 'gongju'
      },
      [
        '/杂七杂八/开发工具/',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/index.html',
        '/杂七杂八/开发工具/README.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/README.md'
      ]
    ],
    [
      'v-4b7687bc',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/git.html',
      {
        d: 1697989125e3,
        c: '开发工具',
        e: '参考文章 常用 Git 命令清单 (http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html) 如何将一个项目同时提交到GitHub和Gitee(码云)两个仓库 (https://blog.csdn.net/yilovexing/article/details/107226141) git忽...',
        r: { minutes: 3.94, words: 1182 },
        y: 'a',
        t: 'git'
      },
      [
        '/杂七杂八/开发工具/git.html',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/git',
        '/杂七杂八/开发工具/git.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/git.md'
      ]
    ],
    [
      'v-8f0ffe7a',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/homebrew.html',
      {
        d: 1697989125e3,
        c: '开发工具',
        e: 'Homebrew 是一款 Mac OS 平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。例如 homebrew 可以快速安装 git,nvm,mysql,mongodb 等开发工具 安装 homebrew使用脚本安装: 1. 2. 科学环境推...',
        r: { minutes: 5.85, words: 1754 },
        y: 'a',
        t: 'homebrew'
      },
      [
        '/杂七杂八/开发工具/homebrew.html',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/homebrew',
        '/杂七杂八/开发工具/homebrew.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/homebrew.md'
      ]
    ],
    [
      'v-a301ec1a',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/%E9%98%BF%E9%87%8C%E4%BA%91%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E5%9B%BE%E5%BA%8A%E6%90%AD%E5%BB%BA.html',
      {
        d: 1697989125e3,
        c: '杂记',
        e: 'picgo 配置 使用 npm 全局安装 picgo，终端输入 picgo -v 检查是否正确安装 到用户文件夹找到.picgo 文件夹下的 config.json,写入: typora 配置 设置-》图像-》上传服务器设定-》custom command-》命令：node 路径 + picgo 路径 + u 查看路径:终端输入where node &...',
        r: { minutes: 0.6, words: 181 },
        y: 'a',
        t: '阿里云对象存储图床搭建',
        O: 2
      },
      [
        '/杂七杂八/开发工具/阿里云对象存储图床搭建.html',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/%E9%98%BF%E9%87%8C%E4%BA%91%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E5%9B%BE%E5%BA%8A%E6%90%AD%E5%BB%BA',
        '/杂七杂八/开发工具/阿里云对象存储图床搭建.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/%E9%98%BF%E9%87%8C%E4%BA%91%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E5%9B%BE%E5%BA%8A%E6%90%AD%E5%BB%BA.md'
      ]
    ],
    [
      'v-a67cb7e4',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E6%80%BB%E7%BB%93/',
      {
        d: 1697989125e3,
        e: '菜鸟前端的 22 年总结 ();',
        r: { minutes: 0.07, words: 21 },
        y: 'a',
        t: '总结',
        i: 'zongjiehuibao'
      },
      [
        '/杂七杂八/总结/',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E6%80%BB%E7%BB%93/index.html',
        '/杂七杂八/总结/README.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E6%80%BB%E7%BB%93/README.md'
      ]
    ],
    [
      'v-c4f32fc8',
      '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E6%80%BB%E7%BB%93/%E8%8F%9C%E9%B8%9F%E5%89%8D%E7%AB%AF%E7%9A%8422%E5%B9%B4%E6%80%BB%E7%BB%93.html',
      {
        d: 1697989125e3,
        c: ['杂记', '总结'],
        g: '日常',
        e: '待 2022.12.31 启 2022 年 6 月底，我接到公司的通知于 7 月 19 日到公司报道，考虑到需要租房等事宜，于 9 号晚上抵达南京。 没来之前已经找好了一个带独卫的房子，没想到因为疫情的原因，房东怕我来不了，租给了别人，剩了一个 1000 块的单间给我，还好位置不错，步行去公司只需要 10 分钟左右，主要是没有单独卫生间，两个人用一个卫...',
        r: { minutes: 0.75, words: 224 },
        y: 'a',
        t: '菜鸟前端的22年总结',
        O: 7
      },
      [
        '/杂七杂八/总结/菜鸟前端的22年总结.html',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E6%80%BB%E7%BB%93/%E8%8F%9C%E9%B8%9F%E5%89%8D%E7%AB%AF%E7%9A%8422%E5%B9%B4%E6%80%BB%E7%BB%93',
        '/杂七杂八/总结/菜鸟前端的22年总结.md',
        '/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/%E6%80%BB%E7%BB%93/%E8%8F%9C%E9%B8%9F%E5%89%8D%E7%AB%AF%E7%9A%8422%E5%B9%B4%E6%80%BB%E7%BB%93.md'
      ]
    ],
    [
      'v-2d401c52',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/CSS%E5%9B%BE%E7%89%87%E5%BA%95%E4%BE%A7%E7%A9%BA%E7%99%BD%E7%BC%9D%E9%9A%99%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'CSS'],
        o: !0,
        e: '从下面的案例来看，图片是与文字的基线对齐的。这就是底部缝隙出现的原因 方案 1:vertical-align vertical-align 属性设置元素的垂直对齐方式 属性值 baseline：默认值，元素放置在父元素的基线上; top：把元素的顶端与行中最高元素的顶端对齐; middle：把此元素放置在父元素的中部; bottom：把元素的顶端与行中...',
        r: { minutes: 0.72, words: 216 },
        y: 'a',
        t: 'CSS图片底侧空白缝隙解决方案'
      },
      [
        '/开发日志/CSS/CSS图片底侧空白缝隙解决方案.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/CSS%E5%9B%BE%E7%89%87%E5%BA%95%E4%BE%A7%E7%A9%BA%E7%99%BD%E7%BC%9D%E9%9A%99%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88',
        '/开发日志/CSS/CSS图片底侧空白缝隙解决方案.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/CSS%E5%9B%BE%E7%89%87%E5%BA%95%E4%BE%A7%E7%A9%BA%E7%99%BD%E7%BC%9D%E9%9A%99%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.md'
      ]
    ],
    [
      'v-0762220d',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/CSS%E6%96%87%E6%9C%AC%E6%BA%A2%E5%87%BA%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'CSS'],
        e: '单行文本溢出省略号效果 指定 N 行文字溢出省略号效果（以 4 行为例） 因使用了 WebKit 的 CSS 扩展属性，适用于 WebKit 浏览器及移动端 ::: tip 提示 -webkit-line-clamp 用来限制在一个块元素显示的文本的行数。为了实现该效果，它需要组合其他的 WebKit 属性。 常见结合属性： display: -web...',
        r: { minutes: 0.65, words: 196 },
        y: 'a',
        t: 'CSS文本溢出处理方式',
        O: 1
      },
      [
        '/开发日志/CSS/CSS文本溢出处理方式.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/CSS%E6%96%87%E6%9C%AC%E6%BA%A2%E5%87%BA%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F',
        '/开发日志/CSS/CSS文本溢出处理方式.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/CSS%E6%96%87%E6%9C%AC%E6%BA%A2%E5%87%BA%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F.md'
      ]
    ],
    [
      'v-29397a28',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/',
      {
        d: 1697989125e3,
        e: '记录使用css遇到的各种问题和坑！',
        r: { minutes: 0.07, words: 20 },
        y: 'a',
        t: 'CSS',
        i: 'css'
      },
      [
        '/开发日志/CSS/',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/index.html',
        '/开发日志/CSS/README.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/README.md'
      ]
    ],
    [
      'v-e3451e9c',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/Web%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%80%82%E9%85%8D%E7%9A%84%E4%B8%80%E4%BA%9B%E6%80%9D%E8%80%83.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'CSS'],
        o: !0,
        e: '最近，看了之前写的移动端商城项目，看到了当时写的rem适配的代码，觉得有问题，查了些资料，输出一些我的思考。 这是当时的代码： rem是指相对于根元素的字体大小的单位。比如上面的代码我们设置html的字体大小为100px;那1rem=100px；12px=0.12rem；那实际上我们的html字体大小并不会随着设备的视口宽度自动变化，因为它永远是100...',
        r: { minutes: 1.24, words: 372 },
        y: 'a',
        t: 'Web移动端适配的一些思考'
      },
      [
        '/开发日志/CSS/Web移动端适配的一些思考.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/Web%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%80%82%E9%85%8D%E7%9A%84%E4%B8%80%E4%BA%9B%E6%80%9D%E8%80%83',
        '/开发日志/CSS/Web移动端适配的一些思考.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/Web%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%80%82%E9%85%8D%E7%9A%84%E4%B8%80%E4%BA%9B%E6%80%9D%E8%80%83.md'
      ]
    ],
    [
      'v-352cbdcb',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/%E5%88%A9%E7%94%A8calc%E5%87%BD%E6%95%B0%E8%BD%BB%E6%9D%BE%E5%AE%9E%E7%8E%B0%E5%90%84%E7%A7%8D%E5%AE%BD%E9%AB%98%E8%87%AA%E9%80%82%E5%BA%94.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'CSS'],
        e: '推荐阅读 你需要知道的 calc 和自定义属性！ (https://juejin.cn/post/7125595762733350920) CSS3 新增的函数中有一个非常好用的函数，就是calc()函数，CSS 的calc()函数可以实现属性值的计算 calc 函数不生效？ 运算符时两边必须要有空白字符： 实操',
        r: { minutes: 0.38, words: 114 },
        y: 'a',
        t: '利用calc函数轻松实现各种宽高自适应'
      },
      [
        '/开发日志/CSS/利用calc函数轻松实现各种宽高自适应.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/%E5%88%A9%E7%94%A8calc%E5%87%BD%E6%95%B0%E8%BD%BB%E6%9D%BE%E5%AE%9E%E7%8E%B0%E5%90%84%E7%A7%8D%E5%AE%BD%E9%AB%98%E8%87%AA%E9%80%82%E5%BA%94',
        '/开发日志/CSS/利用calc函数轻松实现各种宽高自适应.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/CSS/%E5%88%A9%E7%94%A8calc%E5%87%BD%E6%95%B0%E8%BD%BB%E6%9D%BE%E5%AE%9E%E7%8E%B0%E5%90%84%E7%A7%8D%E5%AE%BD%E9%AB%98%E8%87%AA%E9%80%82%E5%BA%94.md'
      ]
    ],
    [
      'v-b718a028',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/Array.prototype.slice.call()_Array.from()%E7%9A%84%E5%BA%94%E7%94%A8%E5%92%8C%E7%90%86%E8%A7%A3.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'JS'],
        e: 'Array.prototype.slice.call() 可将类数组(arguments,NodeList)，字符串(String)转换成数组。 Array.from() 可将类数组(arguments,NodeList)，可迭代对象(Set,Map)，字符串(String)转换成数组。 Array.prototype.slice.call() 的常用...',
        r: { minutes: 1.62, words: 487 },
        y: 'a',
        t: 'Array.prototype.slice.call()&Array.from()的应用和理解'
      },
      [
        '/开发日志/JS/Array.prototype.slice.call()_Array.from()的应用和理解.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/Array.prototype.slice.call()_Array.from()%E7%9A%84%E5%BA%94%E7%94%A8%E5%92%8C%E7%90%86%E8%A7%A3',
        '/开发日志/JS/Array.prototype.slice.call()&Array.from()的应用和理解.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/Array.prototype.slice.call()&Array.from()%E7%9A%84%E5%BA%94%E7%94%A8%E5%92%8C%E7%90%86%E8%A7%A3.html',
        '/开发日志/JS/Array.prototype.slice.call()&Array.from()的应用和理解.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/Array.prototype.slice.call()&Array.from()%E7%9A%84%E5%BA%94%E7%94%A8%E5%92%8C%E7%90%86%E8%A7%A3.md'
      ]
    ],
    [
      'v-63737a94',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/js%E7%9A%84%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'JS'],
        g: ['严格模式'],
        e: 'JavaScript 中除了正常运行模式（非严格模式），还有一种严格模式（strict mode），顾名思义，这种模式使得 JavaScript 在更严格的模式下运行 严格模式消除了 JavaScript 语法的一些不合理、不严谨之处，减少一些怪异行为。 消除代码运行一些不安全之处，保证代码运行的安全。 提高代码编译效率，增加运行速度。 为未来新版本的...',
        r: { minutes: 1.43, words: 430 },
        y: 'a',
        t: 'js的严格模式'
      },
      [
        '/开发日志/JS/js的严格模式.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/js%E7%9A%84%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F',
        '/开发日志/JS/js的严格模式.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/js%E7%9A%84%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F.md'
      ]
    ],
    [
      'v-74875426',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E5%85%B3%E4%BA%8Easync%E5%92%8Cawait.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'JS'],
        e: '发现问题 某天在牛客上刷到这样一道题： 问输出结果是什么？我想这也太简单了，肯定是返回一个成功状态的 Promise 啊，一看答案我傻了，居然是一个未解决的 Promise. 最后我好好想了想，之前的理解一直是错的。看了几篇大牛的文章，我学废了 问题分析 看回上面那段代码，async 函数返回一个 Promise 对象，可以使用 then 方法添加回调...',
        r: { minutes: 2.92, words: 875 },
        y: 'a',
        t: '关于async和await'
      },
      [
        '/开发日志/JS/关于async和await.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E5%85%B3%E4%BA%8Easync%E5%92%8Cawait',
        '/开发日志/JS/关于async和await.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E5%85%B3%E4%BA%8Easync%E5%92%8Cawait.md'
      ]
    ],
    [
      'v-36b1da14',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E5%8A%A8%E6%80%81%E4%BF%AE%E6%94%B9favicon%E7%BD%91%E7%AB%99%E5%9B%BE%E6%A0%87%E5%9C%B0%E5%9D%80.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'JS'],
        e: '最近开发的项目中有个需要是系统配置修改了logo，要同步到favicon。 直接上代码： 其他的逻辑根据业务的实际去写。',
        r: { minutes: 0.23, words: 69 },
        y: 'a',
        t: '动态修改favicon网站图标地址'
      },
      [
        '/开发日志/JS/动态修改favicon网站图标地址.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E5%8A%A8%E6%80%81%E4%BF%AE%E6%94%B9favicon%E7%BD%91%E7%AB%99%E5%9B%BE%E6%A0%87%E5%9C%B0%E5%9D%80',
        '/开发日志/JS/动态修改favicon网站图标地址.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E5%8A%A8%E6%80%81%E4%BF%AE%E6%94%B9favicon%E7%BD%91%E7%AB%99%E5%9B%BE%E6%A0%87%E5%9C%B0%E5%9D%80.md'
      ]
    ],
    [
      'v-246bef6e',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E5%9C%A8%E8%BE%93%E5%85%A5%E6%A1%86%E7%9A%84%E5%85%89%E6%A0%87%E5%A4%84%E6%8F%92%E5%85%A5%E5%86%85%E5%AE%B9.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'JS'],
        e: '示例 说明 HTMLTextAreaElement (https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLTextAreaElement) selectionStart返回/设置所选文本开头的索引。如果未选择文本，则返回光标后面的字符的索引。; selectionEnd返回/设置所选文本结尾的索引。...',
        r: { minutes: 0.72, words: 216 },
        y: 'a',
        t: '在输入框的光标处插入内容'
      },
      [
        '/开发日志/JS/在输入框的光标处插入内容.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E5%9C%A8%E8%BE%93%E5%85%A5%E6%A1%86%E7%9A%84%E5%85%89%E6%A0%87%E5%A4%84%E6%8F%92%E5%85%A5%E5%86%85%E5%AE%B9',
        '/开发日志/JS/在输入框的光标处插入内容.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E5%9C%A8%E8%BE%93%E5%85%A5%E6%A1%86%E7%9A%84%E5%85%89%E6%A0%87%E5%A4%84%E6%8F%92%E5%85%A5%E5%86%85%E5%AE%B9.md'
      ]
    ],
    [
      'v-6e634088',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E6%95%B0%E7%BB%84delete%E5%85%83%E7%B4%A0.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'JS'],
        e: '使用 delete 删除指定索引号的数组元素后会发生什么？ 数组元素值消失; 通过索引号访问，得到 undefined; 数组长度不变;',
        r: { minutes: 0.27, words: 82 },
        y: 'a',
        t: '数组delete元素'
      },
      [
        '/开发日志/JS/数组delete元素.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E6%95%B0%E7%BB%84delete%E5%85%83%E7%B4%A0',
        '/开发日志/JS/数组delete元素.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E6%95%B0%E7%BB%84delete%E5%85%83%E7%B4%A0.md'
      ]
    ],
    [
      'v-3ead2f48',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%AF%B9%E6%AF%94%E6%89%BE%E5%87%BA%E5%B7%AE%E5%BC%82%E9%A1%B9.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'JS'],
        e: '写公司业务遇到了这个问题，需要对比两个对象数组找出差异项，这种场景普遍是两个数据对象是一个包含另一个的关系，也就是一个是另一个的子数组 自然想到了用forEach ，请注意如果数组在迭代时被修改了，则其他元素会被跳过 (https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/G...',
        r: { minutes: 1.12, words: 337 },
        y: 'a',
        t: '数组对象对比找出差异项',
        O: 1
      },
      [
        '/开发日志/JS/数组对象对比找出差异项.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%AF%B9%E6%AF%94%E6%89%BE%E5%87%BA%E5%B7%AE%E5%BC%82%E9%A1%B9',
        '/开发日志/JS/数组对象对比找出差异项.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E5%AF%B9%E6%AF%94%E6%89%BE%E5%87%BA%E5%B7%AE%E5%BC%82%E9%A1%B9.md'
      ]
    ],
    [
      'v-7bea55ce',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E6%A0%B9%E6%8D%AE%E5%AF%B9%E8%B1%A1%E4%B8%AD%E6%8C%87%E5%AE%9A%E7%9A%84%E5%B1%9E%E6%80%A7%E5%8E%BB%E9%87%8D.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'JS'],
        e: '只有对象重复排重比较符合实际业务，毕竟后端的数据都是数组对象，业务很可能会出现根据 ID 来排重 纯数组:数组去重 12 种方案（经典面试必问） (https://juejin.cn/post/6844903981311852557)',
        r: { minutes: 0.64, words: 193 },
        y: 'a',
        t: '数组对象根据对象中指定的属性去重'
      },
      [
        '/开发日志/JS/数组对象根据对象中指定的属性去重.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E6%A0%B9%E6%8D%AE%E5%AF%B9%E8%B1%A1%E4%B8%AD%E6%8C%87%E5%AE%9A%E7%9A%84%E5%B1%9E%E6%80%A7%E5%8E%BB%E9%87%8D',
        '/开发日志/JS/数组对象根据对象中指定的属性去重.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E6%A0%B9%E6%8D%AE%E5%AF%B9%E8%B1%A1%E4%B8%AD%E6%8C%87%E5%AE%9A%E7%9A%84%E5%B1%9E%E6%80%A7%E5%8E%BB%E9%87%8D.md'
      ]
    ],
    [
      'v-77271408',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E6%A0%B9%E6%8D%AE%E6%95%B0%E6%8D%AE%E9%A1%B9%E7%8A%B6%E6%80%81%E5%B1%9E%E6%80%A7%E5%A6%82%E4%BD%95%E7%AD%9B%E9%80%89%E6%95%B0%E6%8D%AE.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'JS'],
        e: '比如一个小功能:需要计算当前已完成的项的数量？ 这时我们就需要数组中每一项的某个状态属性值去筛选 在 vue 中往往使用计算属性去完成，这里使用数组三种不同的方法完成：',
        r: { minutes: 0.5, words: 150 },
        y: 'a',
        t: '数组对象根据数据项状态属性如何筛选数据'
      },
      [
        '/开发日志/JS/数组对象根据数据项状态属性如何筛选数据.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E6%A0%B9%E6%8D%AE%E6%95%B0%E6%8D%AE%E9%A1%B9%E7%8A%B6%E6%80%81%E5%B1%9E%E6%80%A7%E5%A6%82%E4%BD%95%E7%AD%9B%E9%80%89%E6%95%B0%E6%8D%AE',
        '/开发日志/JS/数组对象根据数据项状态属性如何筛选数据.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E6%A0%B9%E6%8D%AE%E6%95%B0%E6%8D%AE%E9%A1%B9%E7%8A%B6%E6%80%81%E5%B1%9E%E6%80%A7%E5%A6%82%E4%BD%95%E7%AD%9B%E9%80%89%E6%95%B0%E6%8D%AE.md'
      ]
    ],
    [
      'v-5f49510e',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E7%90%86%E8%A7%A3js%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'JS'],
        e: '这一次，彻底弄懂 JavaScript 执行机制 一次搞懂- JS 事件循环之宏任务和微任务 10 分钟理解 JS 引擎的执行机制 浏览器完整流程图 任务队列的执行过程是：先执行一个宏任务，执行过程中如果产出新的宏/微任务，就将他们推入相应的任务队列，之后在执行一队微任务，之后再执行宏任务，如此循环。以上不断重复的过程就叫做 Event Loop(事件...',
        r: { minutes: 0.86, words: 257 },
        y: 'a',
        t: '理解js事件循环'
      },
      [
        '/开发日志/JS/理解js事件循环.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E7%90%86%E8%A7%A3js%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF',
        '/开发日志/JS/理解js事件循环.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E7%90%86%E8%A7%A3js%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.md'
      ]
    ],
    [
      'v-e50f465a',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E9%87%8D%E6%96%B0%E7%90%86%E8%A7%A3%E9%97%AD%E5%8C%85.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'JS'],
        g: '闭包',
        e: '闭包确实很难理解，之前我是这样理解的： 闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。 再后来看到这样一段话： 在函数中被使用，但它既不是函数参数、也不是函数的局部变量，而是一个不属于当前作用域的变量，此时它相对于当前作用域来说，就是一个自由变量。而引用了自由变量的函数，就叫闭包。 比如说： 没错，这样就形成了一个闭包。a...',
        r: { minutes: 1.18, words: 355 },
        y: 'a',
        t: '重新理解闭包'
      },
      [
        '/开发日志/JS/重新理解闭包.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E9%87%8D%E6%96%B0%E7%90%86%E8%A7%A3%E9%97%AD%E5%8C%85',
        '/开发日志/JS/重新理解闭包.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/%E9%87%8D%E6%96%B0%E7%90%86%E8%A7%A3%E9%97%AD%E5%8C%85.md'
      ]
    ],
    [
      'v-58a8e13c',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/React/Hook%E5%AF%B9%E6%AF%94HOC%E5%92%8CrenderProps.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'React'],
        e: '在 React 开发中，Hook，HOC 和 renderProps 它们均可以完成组件状态逻辑的复用 从难易程度上来说 Hook 相对于其余两种方式写起来要容易的多 现在我以 React 官方文档 中的renderProps (https://zh-hans.reactjs.org/docs/render-props.html) 一节里的鼠标移动案例...',
        r: { minutes: 2.57, words: 770 },
        y: 'a',
        t: 'Hook对比HOC和renderProps'
      },
      [
        '/开发日志/React/Hook对比HOC和renderProps.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/React/Hook%E5%AF%B9%E6%AF%94HOC%E5%92%8CrenderProps',
        '/开发日志/React/Hook对比HOC和renderProps.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/React/Hook%E5%AF%B9%E6%AF%94HOC%E5%92%8CrenderProps.md'
      ]
    ],
    [
      'v-b0785230',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/CSS%E4%B8%96%E7%95%8C%E9%98%85%E8%AF%BB%E7%AC%94%E8%AE%B0/%E6%A6%82%E8%BF%B0.html',
      {
        d: 1697989125e3,
        c: ['前端图形', 'CSS世界阅读笔记'],
        e: '::: tip 写在开始 从本节开始，我将记录在阅读张鑫旭大佬的《css 世界》一书的过程。 推荐购买 正版 (https://item.jd.com/12262251.html) 未来计划阅读张鑫旭大佬的三本 css 著作：《css 世界》、《css 选择器世界》、《css 新世界》，希望能够学习到张鑫旭大佬在 css 上 10 余年的研究 :::',
        r: { minutes: 0.35, words: 105 },
        y: 'a',
        t: '概述'
      },
      [
        '/前端开发/前端图形/CSS世界阅读笔记/概述.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/CSS%E4%B8%96%E7%95%8C%E9%98%85%E8%AF%BB%E7%AC%94%E8%AE%B0/%E6%A6%82%E8%BF%B0',
        '/前端开发/前端图形/CSS世界阅读笔记/概述.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/CSS%E4%B8%96%E7%95%8C%E9%98%85%E8%AF%BB%E7%AC%94%E8%AE%B0/%E6%A6%82%E8%BF%B0.md'
      ]
    ],
    [
      'v-14634a24',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/Vue%20%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93.html',
      {
        d: 16343424e5,
        l: '2021年10月16日',
        c: ['开发日志'],
        g: ['项目总结', 'Vue'],
        e: '1.搜索历史纪录 使用 localStorage 解决 vuex 在页面刷新后数据被清除的问题; 使用逻辑 1.在 vuex 获取到用户信息时（例：state.userid =userinfo.user_id），同时把这个信息存入 localStorage; 2.定义一个 mutation 方法，再次把数据从 localStorage 传给 state...',
        r: { minutes: 14.7, words: 4411 },
        y: 'a',
        t: 'Vue 项目总结'
      },
      [
        '/开发日志/Vue/Vue 项目总结.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/Vue%20%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93',
        '/开发日志/Vue/Vue 项目总结.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/Vue%20%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93.md'
      ]
    ],
    [
      'v-6448b763',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E6%97%A5%E6%9C%9F%E9%80%89%E6%8B%A9%E5%99%A8%E7%A6%81%E6%AD%A2%E9%80%89%E6%8B%A9%E6%8C%87%E5%AE%9A%E6%97%A5%E6%9C%9F.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue'],
        o: !0,
        r: { minutes: 0.97, words: 290 },
        y: 'a',
        t: 'element-ui日期选择器禁止选择指定日期'
      },
      [
        '/开发日志/Vue/element-ui日期选择器禁止选择指定日期.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E6%97%A5%E6%9C%9F%E9%80%89%E6%8B%A9%E5%99%A8%E7%A6%81%E6%AD%A2%E9%80%89%E6%8B%A9%E6%8C%87%E5%AE%9A%E6%97%A5%E6%9C%9F',
        '/开发日志/Vue/element-ui日期选择器禁止选择指定日期.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E6%97%A5%E6%9C%9F%E9%80%89%E6%8B%A9%E5%99%A8%E7%A6%81%E6%AD%A2%E9%80%89%E6%8B%A9%E6%8C%87%E5%AE%9A%E6%97%A5%E6%9C%9F.md'
      ]
    ],
    [
      'v-539c1268',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E6%A0%91%E6%8E%A7%E4%BB%B6%E8%87%AA%E5%8A%A8%E5%AE%9A%E4%BD%8D%E5%88%B0%E5%BD%93%E5%89%8D%E9%80%89%E6%8B%A9%E9%A1%B9.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue'],
        g: ['elementUI', 'vue2'],
        o: !0,
        e: '需求 做业务遇到了需要在树空间中回显示当前操作的的数据项，因为树空间的高度有限，如果当前选择项是比较靠后的，就无法出现在树的滚动视窗范围之内。 所以就要在树展示的时候自动滚动到当前的选择项，好在Element (https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 接口提供了这样一个 scr...',
        r: { minutes: 1.48, words: 445 },
        y: 'a',
        t: 'element-ui树控件自动定位到当前选择项'
      },
      [
        '/开发日志/Vue/element-ui树控件自动定位到当前选择项.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E6%A0%91%E6%8E%A7%E4%BB%B6%E8%87%AA%E5%8A%A8%E5%AE%9A%E4%BD%8D%E5%88%B0%E5%BD%93%E5%89%8D%E9%80%89%E6%8B%A9%E9%A1%B9',
        '/开发日志/Vue/element-ui树控件自动定位到当前选择项.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E6%A0%91%E6%8E%A7%E4%BB%B6%E8%87%AA%E5%8A%A8%E5%AE%9A%E4%BD%8D%E5%88%B0%E5%BD%93%E5%89%8D%E9%80%89%E6%8B%A9%E9%A1%B9.md'
      ]
    ],
    [
      'v-619f771c',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E6%B8%85%E9%99%A4%E8%A1%A8%E5%8D%95%E7%9A%84%E5%A5%87%E6%80%AA%E7%8E%B0%E8%B1%A1.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue'],
        g: ['elementUI', 'vue2'],
        o: !0,
        e: "element-ui 中` form 中有个清空表单的方法，即假如给表单一个 ref='form', 则清空表单的方法为 this.$refs.form.resetFields() 可当在 dialog 组件中用这个方法的时候，这就出现问题了，居然清空不了 问题的本质是因为你第一次打开 dialog 的时候给表单绑定的 form 赋值了，这时候这个 f...",
        r: { minutes: 1.2, words: 360 },
        y: 'a',
        t: 'element-ui清除表单的奇怪现象'
      },
      [
        '/开发日志/Vue/element-ui清除表单的奇怪现象.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E6%B8%85%E9%99%A4%E8%A1%A8%E5%8D%95%E7%9A%84%E5%A5%87%E6%80%AA%E7%8E%B0%E8%B1%A1',
        '/开发日志/Vue/element-ui清除表单的奇怪现象.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E6%B8%85%E9%99%A4%E8%A1%A8%E5%8D%95%E7%9A%84%E5%A5%87%E6%80%AA%E7%8E%B0%E8%B1%A1.md'
      ]
    ],
    [
      'v-f61a2544',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E8%A1%A8%E6%A0%BC%E4%B8%AD%E4%BF%AE%E6%94%B9switch%E5%BC%80%E5%85%B3%E7%8A%B6%E6%80%81%E7%9A%84%E4%BA%8C%E7%A7%8D%E6%96%B9%E6%B3%95.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue'],
        g: ['elementUI', 'vue2'],
        o: !0,
        e: 'Swich 默认是 boolean 类型，如果后台传值为 number 类型，这个时候我们想用 number 来取代 boolean 类型 这里有个问题需要注意：当你点击修改状态时，弹出提示框，点击取消关闭时，switch 的状态依旧改变了: 这是因为 v-model 双向绑定原理，点击开关时会实时改变状态，只需要把 v-model 改为:value=...',
        r: { minutes: 1.59, words: 477 },
        y: 'a',
        t: 'element-ui表格中修改switch开关状态的二种方法'
      },
      [
        '/开发日志/Vue/element-ui表格中修改switch开关状态的二种方法.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E8%A1%A8%E6%A0%BC%E4%B8%AD%E4%BF%AE%E6%94%B9switch%E5%BC%80%E5%85%B3%E7%8A%B6%E6%80%81%E7%9A%84%E4%BA%8C%E7%A7%8D%E6%96%B9%E6%B3%95',
        '/开发日志/Vue/element-ui表格中修改switch开关状态的二种方法.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E8%A1%A8%E6%A0%BC%E4%B8%AD%E4%BF%AE%E6%94%B9switch%E5%BC%80%E5%85%B3%E7%8A%B6%E6%80%81%E7%9A%84%E4%BA%8C%E7%A7%8D%E6%96%B9%E6%B3%95.md'
      ]
    ],
    [
      'v-0c2e89ed',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/v-modelSync%E4%BF%AE%E9%A5%B0%E7%AC%A6%E4%BD%BF%E7%94%A8%E5%92%8C%E5%8E%9F%E7%90%86.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue'],
        g: ['vue2', 'vue3', '原理'],
        o: !0,
        e: 'v-model 原理 v-model是`vue中常用的语法糖，它的本质其实是v-bind一个叫value的变量，利用v-on绑定原生input事件实现： v-model 作用在组件上的原理 在组件上使用v-model，实际上是给该组件传入了一个名为value的prop,并绑定了一个名为input的自定义事件。 prop是不能修改,我们可以利用计算属性或...',
        r: { minutes: 2.59, words: 778 },
        y: 'a',
        t: 'v-model,Sync修饰符使用和原理'
      },
      [
        '/开发日志/Vue/v-modelSync修饰符使用和原理.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/v-modelSync%E4%BF%AE%E9%A5%B0%E7%AC%A6%E4%BD%BF%E7%94%A8%E5%92%8C%E5%8E%9F%E7%90%86',
        '/开发日志/Vue/v-modelSync修饰符使用和原理.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/v-modelSync%E4%BF%AE%E9%A5%B0%E7%AC%A6%E4%BD%BF%E7%94%A8%E5%92%8C%E5%8E%9F%E7%90%86.md'
      ]
    ],
    [
      'v-a1d83b16',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2echarts%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8%E9%A1%B9%E7%9B%AE%E5%AD%A6%E4%B9%A0%E5%BF%83%E5%BE%97.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue'],
        g: ['echarts', 'vue2'],
        o: !0,
        e: '项目演示地址 演示地址 (https://datav.zfhblog.top/) echarts 在 vue 的使用 echarts 4.x 文档 (https://echarts.apache.org/v4/zh/option.html#title) 定义; 消费; 使用 vue-echarts 简化配置 官方文档 vue2.x,echarts4 (...',
        r: { minutes: 1.69, words: 506 },
        y: 'a',
        t: 'vue2+echarts数据报表项目学习心得'
      },
      [
        '/开发日志/Vue/vue2echarts数据报表项目学习心得.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2echarts%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8%E9%A1%B9%E7%9B%AE%E5%AD%A6%E4%B9%A0%E5%BF%83%E5%BE%97',
        '/开发日志/Vue/vue2echarts数据报表项目学习心得.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2echarts%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8%E9%A1%B9%E7%9B%AE%E5%AD%A6%E4%B9%A0%E5%BF%83%E5%BE%97.md'
      ]
    ],
    [
      'v-4d15f9ed',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E4%B8%AD%E4%BD%BF%E7%94%A8lodash%E5%AE%9E%E7%8E%B0%E8%8A%82%E6%B5%81%E9%98%B2%E6%8A%96.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue2'],
        g: ['lodash', 'vue2'],
        o: !0,
        e: '说说节流和防抖 这两个概念在前端开发中是老生常谈，对于我来说这两个概念记了又忘，忘了又看。过的时间又忘记。写业务需要优化一些功能，这两个概念又被提了出来，这次就好好梳理一下 解释 打个比方 防抖就类似回城，打断就得重新回。 节流就类似技能需要冷却时间到了才能用。 防抖:在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。; 节流:规定在一...',
        r: { minutes: 2.04, words: 612 },
        y: 'a',
        t: 'vue2中使用lodash实现节流防抖'
      },
      [
        '/开发日志/Vue/vue2中使用lodash实现节流防抖.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E4%B8%AD%E4%BD%BF%E7%94%A8lodash%E5%AE%9E%E7%8E%B0%E8%8A%82%E6%B5%81%E9%98%B2%E6%8A%96',
        '/开发日志/Vue/vue2中使用lodash实现节流防抖.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E4%B8%AD%E4%BD%BF%E7%94%A8lodash%E5%AE%9E%E7%8E%B0%E8%8A%82%E6%B5%81%E9%98%B2%E6%8A%96.md'
      ]
    ],
    [
      'v-62d8b48e',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E4%B8%AD%E7%9A%84css%E6%B7%B1%E5%BA%A6%E9%80%89%E6%8B%A9%E5%99%A8.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue'],
        g: ['vue2'],
        o: !0,
        e: '当 标签有 scoped 属性时，它的 CSS 只作用于当前组件中的元素，父组件的样式将不会渗透到子组件。 如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用深度选择器。 使用较多的场景是去定制 elementUI 等组件库的样式 写法 像/deep/，`>>>，::v-deep`已被弃用，下面这种方式 vue2...',
        r: { minutes: 0.52, words: 157 },
        y: 'a',
        t: 'vue2中的css深度选择器'
      },
      [
        '/开发日志/Vue/vue2中的css深度选择器.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E4%B8%AD%E7%9A%84css%E6%B7%B1%E5%BA%A6%E9%80%89%E6%8B%A9%E5%99%A8',
        '/开发日志/Vue/vue2中的css深度选择器.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E4%B8%AD%E7%9A%84css%E6%B7%B1%E5%BA%A6%E9%80%89%E6%8B%A9%E5%99%A8.md'
      ]
    ],
    [
      'v-3fffe92b',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E5%92%8Cvue3%E7%9A%84v-if%E4%B8%8Ev-for%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7%E5%B7%AE%E5%BC%82.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue'],
        e: '最近在使用vue3写一个公共表格组件，操作列需要利用v-if判断是否渲染这个操作按钮。居然提示：属性 button 此时没有在该实例上定义。这是原本的代码： 查了vue2和`vue3的文档发现了一个问题： Vue2:当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。当你只想为部分项...',
        r: { minutes: 1.36, words: 409 },
        y: 'a',
        t: 'vue2和vue3的v-if与v-for的优先级差异'
      },
      [
        '/开发日志/Vue/vue2和vue3的v-if与v-for的优先级差异.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E5%92%8Cvue3%E7%9A%84v-if%E4%B8%8Ev-for%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7%E5%B7%AE%E5%BC%82',
        '/开发日志/Vue/vue2和vue3的v-if与v-for的优先级差异.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E5%92%8Cvue3%E7%9A%84v-if%E4%B8%8Ev-for%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7%E5%B7%AE%E5%BC%82.md'
      ]
    ],
    [
      'v-cbf738c2',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%95%8C%E9%9D%A2%E5%88%B7%E6%96%B0.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue2'],
        o: !0,
        e: '1. 原始方法： location.reload(); 2. vue 自带的路由跳转: this.$router.go(0); 前两者都是强制刷新页面，会出现短暂的闪烁，用户体验效果不好。所以，我们选择第三种方式 首先在 App 里面写下如下代码： 接下来，我们就可以在需要刷新页面的组件里这样写： 在需要刷新页面的代码中使用：',
        r: { minutes: 0.75, words: 224 },
        y: 'a',
        t: 'vue2如何实现界面刷新',
        O: 1
      },
      [
        '/开发日志/Vue/vue2如何实现界面刷新.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%95%8C%E9%9D%A2%E5%88%B7%E6%96%B0',
        '/开发日志/Vue/vue2如何实现界面刷新.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%95%8C%E9%9D%A2%E5%88%B7%E6%96%B0.md'
      ]
    ],
    [
      'v-51dc1186',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E5%AE%9E%E7%8E%B0%E6%BB%9A%E5%8A%A8%E7%AA%97%E5%8F%A3%E5%90%8C%E6%AD%A5%E6%BB%9A%E5%8A%A8.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue2'],
        g: ['vue2'],
        o: !0,
        e: '项目开发中，遇到一个比较两个表单差异的需求，但当item过多就需要滚动条，这里就用到了滚动条同步的地方。 这是实现效果： 虽然demo中是表格但是实现起来是一样的，其实主要是通过ref属性来操控两个div的`scrollTop属性 因为对两个 div 都添加了scroll方法，一个区域滚动会改变另外一个区域的scrollTop,但是同时触发了另外一个区...',
        r: { minutes: 1, words: 301 },
        y: 'a',
        t: 'vue2实现滚动窗口同步滚动'
      },
      [
        '/开发日志/Vue/vue2实现滚动窗口同步滚动.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E5%AE%9E%E7%8E%B0%E6%BB%9A%E5%8A%A8%E7%AA%97%E5%8F%A3%E5%90%8C%E6%AD%A5%E6%BB%9A%E5%8A%A8',
        '/开发日志/Vue/vue2实现滚动窗口同步滚动.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E5%AE%9E%E7%8E%B0%E6%BB%9A%E5%8A%A8%E7%AA%97%E5%8F%A3%E5%90%8C%E6%AD%A5%E6%BB%9A%E5%8A%A8.md'
      ]
    ],
    [
      'v-a41a7cf8',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8%E5%AE%9E%E7%8E%B0.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue2'],
        g: ['vue2'],
        o: !0,
        e: '官方文档 v-list (https://vlist.zfhblog.top) 分析 // TODO 实现 作为 vue 插件，发布 npm',
        r: { minutes: 0.19, words: 58 },
        y: 'a',
        t: 'vue2虚拟列表实现'
      },
      [
        '/开发日志/Vue/vue2虚拟列表实现.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8%E5%AE%9E%E7%8E%B0',
        '/开发日志/Vue/vue2虚拟列表实现.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue2%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8%E5%AE%9E%E7%8E%B0.md'
      ]
    ],
    [
      'v-6e32e664',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue3vite3.0%E9%A1%B9%E7%9B%AE%E6%94%AF%E6%8C%81%E8%B7%AF%E5%BE%84%E5%88%AB%E5%90%8D.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue'],
        g: ['vite3', 'vue3'],
        o: !0,
        e: '让编辑器认识@ 修改 jsconfig.json 让 vite 认识@ 注意事项 1. 不能在 vite.config.js 使用@导入文件 2. 使用 commonjs 语法导入 path 模块会报错，使用 import 语法导入，又会报__dirname is not defined in ES module scope,在 vue2+webpac...',
        r: { minutes: 0.51, words: 153 },
        y: 'a',
        t: 'vue3+vite3.0项目支持路径别名'
      },
      [
        '/开发日志/Vue/vue3vite3.0项目支持路径别名.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue3vite3.0%E9%A1%B9%E7%9B%AE%E6%94%AF%E6%8C%81%E8%B7%AF%E5%BE%84%E5%88%AB%E5%90%8D',
        '/开发日志/Vue/vue3vite3.0项目支持路径别名.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue3vite3.0%E9%A1%B9%E7%9B%AE%E6%94%AF%E6%8C%81%E8%B7%AF%E5%BE%84%E5%88%AB%E5%90%8D.md'
      ]
    ],
    [
      'v-9710e106',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue3%E5%BC%80%E5%8F%91RABC%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue'],
        g: [
          'vue3',
          'Pinia',
          'ElementPlus',
          'vite',
          'Vue-Router',
          'RABC后台管理系统'
        ],
        o: !0,
        e: 'vite 环境变量 环境变量和模式 (https://cn.vitejs.dev/guide/env-and-mode.html#env-variables) axios 的使用 二次封装 组件中使用 不同页面的 api 请求放在不同的 js 文件中，如登陆相关的接口放在/api/login.js下,引入我们定义好的 axios 实例 在组件中使用： ...',
        r: { minutes: 9.37, words: 2812 },
        y: 'a',
        t: 'vue3开发RABC权限管理系统'
      },
      [
        '/开发日志/Vue/vue3开发RABC权限管理系统.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue3%E5%BC%80%E5%8F%91RABC%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F',
        '/开发日志/Vue/vue3开发RABC权限管理系统.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue3%E5%BC%80%E5%8F%91RABC%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.md'
      ]
    ],
    [
      'v-2c119a0c',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE%E5%BA%93.html',
      {
        d: 16343424e5,
        l: '2021年10月16日',
        c: ['开发日志'],
        g: ['项目总结', 'Vue'],
        e: 'UI 组件; 开发框架; 实用库; 服务端; 辅助工具; 应用实例; Demo 示例; UI 组件 !element (https://link.jianshu.com?t=https://github.com/ElemeFE/element) ★13489 - 饿了么出品的 Vue2 的 web UI 工具套件 !Vux (https://link....',
        r: { minutes: 28.4, words: 8520 },
        y: 'a',
        t: 'vue开源项目库'
      },
      [
        '/开发日志/Vue/vue开源项目库.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE%E5%BA%93',
        '/开发日志/Vue/vue开源项目库.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/vue%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE%E5%BA%93.md'
      ]
    ],
    [
      'v-605eaf1c',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/%E5%88%A9%E7%94%A8tooltip%E5%AE%9E%E7%8E%B0%E6%96%87%E6%9C%AC%E8%B6%85%E5%87%BA%E6%8F%90%E7%A4%BA.html',
      {
        d: 1697989125e3,
        c: ['开发笔记', 'Vue'],
        g: ['elementUI', 'vue2'],
        o: !0,
        e: '开始之前... 以下概念均不包括margin,因为它不是元素的一部分 offsetWidth/offsetHeight:它们提供了元素的“外部” width/height。或者，换句话说，它的完整大小（包括边框） scrollWidth/scrollHeight这些属性就像 clientWidth/clientHeight，但它们还包括滚动出（隐藏）的...',
        r: { minutes: 0.99, words: 296 },
        y: 'a',
        t: '利用tooltip实现文本超出提示'
      },
      [
        '/开发日志/Vue/利用tooltip实现文本超出提示.html',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/%E5%88%A9%E7%94%A8tooltip%E5%AE%9E%E7%8E%B0%E6%96%87%E6%9C%AC%E8%B6%85%E5%87%BA%E6%8F%90%E7%A4%BA',
        '/开发日志/Vue/利用tooltip实现文本超出提示.md',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/%E5%88%A9%E7%94%A8tooltip%E5%AE%9E%E7%8E%B0%E6%96%87%E6%9C%AC%E8%B6%85%E5%87%BA%E6%8F%90%E7%A4%BA.md'
      ]
    ],
    [
      'v-624dbca4',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/PBR%E6%9D%90%E8%B4%A8%E7%BA%B9%E7%90%86.html',
      {
        d: 1697989125e3,
        c: '前端开发 - 前端图形 - Three.js',
        e: 'PBR 物理渲染 什么是 PBR？ 参考 什么是 PBR？ (https://zhuanlan.zhihu.com/p/342484575) 基于物理渲染 以前的渲染在模仿灯光的外观 现在是在模仿光的实际行为 使图形看起来跟真实 标准网格材质与光照物理效果 环境光AmbientLight环境光会均匀的照亮场景中的所有物体。环境光不能用来投射阴影，因为它...',
        r: { minutes: 1.57, words: 470 },
        y: 'a',
        t: 'PBR材质纹理',
        O: 5
      },
      [
        '/前端开发/前端图形/Three.js/PBR材质纹理.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/PBR%E6%9D%90%E8%B4%A8%E7%BA%B9%E7%90%86',
        '/前端开发/前端图形/Three.js/PBR材质纹理.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/PBR%E6%9D%90%E8%B4%A8%E7%BA%B9%E7%90%86.md'
      ]
    ],
    [
      'v-c5f1abc2',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/',
      {
        d: 1697989125e3,
        r: { minutes: 0.03, words: 9 },
        y: 'a',
        t: 'three.js',
        i: 'three'
      },
      [
        '/前端开发/前端图形/Three.js/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/index.html',
        '/前端开发/前端图形/Three.js/README.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/README.md'
      ]
    ],
    [
      'v-0f704b9a',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/Threejs%E7%89%A9%E4%BD%93.html',
      {
        d: 1697989125e3,
        c: '前端开发 - 前端图形 - Three.js',
        e: '几何体顶点 attributes.position 代表顶点的位置 控制台输出物体的 attributes.position 属性发现一个四面体有 24 个顶点 四面体不是只有 8 个顶点吗？ 在 threejs 中顶点代表的是组成一个面的两个三角形的顶点，一个三角形有 3 个顶点，所以一个面有 6 个顶点 uv 三维建模中的"UV"可理解为立体模型的...',
        r: { minutes: 2.33, words: 700 },
        y: 'a',
        t: 'Threejs物体',
        O: 3
      },
      [
        '/前端开发/前端图形/Three.js/Threejs物体.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/Threejs%E7%89%A9%E4%BD%93',
        '/前端开发/前端图形/Three.js/Threejs物体.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/Threejs%E7%89%A9%E4%BD%93.md'
      ]
    ],
    [
      'v-a038728c',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/Three%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8%E4%B8%8E%E8%B0%83%E8%AF%95%E8%AE%BE%E7%BD%AE.html',
      {
        d: 1697989125e3,
        c: '前端开发 - 前端图形 - Three.js',
        e: '创建第一个场景 一个场景能被渲染出来需要：场景、相机和渲染器 透视相机（PerspectiveCamera）示意图 这一投影模式被用来模拟人眼所看到的景象，它是 3D 场景的渲染中使用得最普遍的投影模式。 透视相机示意图 1. 摄像机视锥体垂直视野角度 也就是图中的 「a」 2. 摄像机视锥体近端面 也就是图中的 「near plane」 3. 摄像机...',
        r: { minutes: 5.58, words: 1674 },
        y: 'a',
        t: 'Three开发入门与调试设置',
        O: 2
      },
      [
        '/前端开发/前端图形/Three.js/Three开发入门与调试设置.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/Three%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8%E4%B8%8E%E8%B0%83%E8%AF%95%E8%AE%BE%E7%BD%AE',
        '/前端开发/前端图形/Three.js/Three开发入门与调试设置.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/Three%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8%E4%B8%8E%E8%B0%83%E8%AF%95%E8%AE%BE%E7%BD%AE.md'
      ]
    ],
    [
      'v-310bd976',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.html',
      {
        d: 1697989125e3,
        c: '前端开发 - 前端图形 - Three.js',
        e: '使用vite作为构建工具 1. npm init 2. npm install vite -D 3. npm install three 4. 新建src存放js，`css代码，创建main.js为vite入口文件，新建index.html引入main.js`',
        r: { minutes: 0.44, words: 132 },
        y: 'a',
        t: '开发环境搭建',
        O: 1
      },
      [
        '/前端开发/前端图形/Three.js/开发环境搭建.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA',
        '/前端开发/前端图形/Three.js/开发环境搭建.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.md'
      ]
    ],
    [
      'v-3913334e',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/%E6%9D%90%E8%B4%A8%E4%B8%8E%E7%BA%B9%E7%90%86.html',
      {
        d: 1697989125e3,
        c: '前端开发 - 前端图形 - Three.js',
        e: '使用纹理 纹理常用属性 偏移 取值：0.1 ～ 1.0 旋转 旋转中心点为(0.5, 0.5)对应纹理的正中心。默认值为(0,0)，即左下角 重复 wrapS这个值定义了纹理贴图在水平方向上将如何包裹，在 UV 映射中对应于U。 默认值是THREE.ClampToEdgeWrapping，即纹理边缘将被推到外部边缘的纹素（纹理元素）。 其它的两个选项分...',
        r: { minutes: 2.42, words: 725 },
        y: 'a',
        t: '材质与纹理',
        O: 4
      },
      [
        '/前端开发/前端图形/Three.js/材质与纹理.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/%E6%9D%90%E8%B4%A8%E4%B8%8E%E7%BA%B9%E7%90%86',
        '/前端开发/前端图形/Three.js/材质与纹理.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/%E6%9D%90%E8%B4%A8%E4%B8%8E%E7%BA%B9%E7%90%86.md'
      ]
    ],
    [
      'v-88684426',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/%E7%81%AF%E5%85%89%E4%B8%8E%E9%98%B4%E5%BD%B1.html',
      {
        d: 1697989125e3,
        c: '前端开发 - 前端图形 - Three.js',
        r: { minutes: 0.06, words: 18 },
        y: 'a',
        t: '灯光与阴影',
        O: 6
      },
      [
        '/前端开发/前端图形/Three.js/灯光与阴影.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/%E7%81%AF%E5%85%89%E4%B8%8E%E9%98%B4%E5%BD%B1',
        '/前端开发/前端图形/Three.js/灯光与阴影.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/%E7%81%AF%E5%85%89%E4%B8%8E%E9%98%B4%E5%BD%B1.md'
      ]
    ],
    [
      'v-e0cbd8ee',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/canvas/canvas%E5%9F%BA%E7%A1%80.html',
      {
        d: 1697989125e3,
        c: ['前端图形', 'Canvas'],
        g: 'Canvas基础',
        e: '参考 MDN 慕课网:炫丽的倒计时效果 Canvas 绘图与动画基础 创建 canvas 通过 DOM 指定宽度高度 渲染上下文 Canvas 公开了一个或多个渲染上下文，其可以用来绘制和处理要展示的内容。我们将会将注意力放在 2D 渲染上下文中。js 要找到渲染上下文，然后在它的上面绘制。getContext是用来获得渲染上下文和它的绘画功能。 检查支持性',
        r: { minutes: 0.65, words: 195 },
        y: 'a',
        t: 'Canvas基础'
      },
      [
        '/前端开发/前端图形/canvas/canvas基础.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/canvas/canvas%E5%9F%BA%E7%A1%80',
        '/前端开发/前端图形/canvas/canvas基础.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/canvas/canvas%E5%9F%BA%E7%A1%80.md'
      ]
    ],
    [
      'v-de5de07e',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/%E7%8E%A9%E8%BD%ACCSS%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/%E5%9B%9E%E6%B5%81%E9%87%8D%E7%BB%98.html',
      {
        a: 'JowayYoung',
        d: 1697989125e3,
        c: ['前端图形 - 玩转CSS艺术之美'],
        e: '回流 回流又名重排，指改变几何属性的渲染。但感觉回流这个词较高大上，后续统称回流吧。 可理解为将整个网页填白，对内容重新渲染一次。只不过以人眼的感官速度去看浏览器回流是不会有任何变化的，若你拥有闪电侠的感官速度去看浏览器回流(实质是将时间调慢)，就会发现每次回流都会将页面清空，再从左上角第一个像素点从左到右从上到下这样一点一点渲染，直至右下角最后一个像...',
        r: { minutes: 8.05, words: 2415 },
        y: 'a',
        t: '回流重绘',
        O: 2
      },
      [
        '/前端开发/前端图形/玩转CSS艺术之美/回流重绘.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/%E7%8E%A9%E8%BD%ACCSS%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/%E5%9B%9E%E6%B5%81%E9%87%8D%E7%BB%98',
        '/前端开发/前端图形/玩转CSS艺术之美/回流重绘.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/%E7%8E%A9%E8%BD%ACCSS%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/%E5%9B%9E%E6%B5%81%E9%87%8D%E7%BB%98.md'
      ]
    ],
    [
      'v-0583f47c',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/%E7%8E%A9%E8%BD%ACCSS%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/%E6%B5%8F%E8%A7%88%E5%99%A8.html',
      {
        a: 'JowayYoung',
        d: 1697989125e3,
        c: ['前端图形', '玩转CSS艺术之美'],
        e: '渲染引擎 渲染引擎又名浏览器内核，指负责对网页语法解析并渲染成一张可视化页面的解析器。它是浏览器最核心最重要的部位，不同内核对网页语法的解析也有不同，因此同一网页语法在不同内核的浏览器中的渲染效果也可能不同，这就是常说的浏览器差异性 上述提到的世界五大浏览器，在自身的发展过程中都使用了一种或多种浏览器内核作为自身的渲染引擎。 Google Chrome...',
        r: { minutes: 10.79, words: 3238 },
        y: 'a',
        t: '浏览器',
        O: 1
      },
      [
        '/前端开发/前端图形/玩转CSS艺术之美/浏览器.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/%E7%8E%A9%E8%BD%ACCSS%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/%E6%B5%8F%E8%A7%88%E5%99%A8',
        '/前端开发/前端图形/玩转CSS艺术之美/浏览器.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/%E7%8E%A9%E8%BD%ACCSS%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/%E6%B5%8F%E8%A7%88%E5%99%A8.md'
      ]
    ],
    [
      'v-5bfdfb20',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/20_%20css%E9%AB%98%E9%A2%91%E5%AE%9E%E7%94%A8%E7%89%87%E6%AE%B5.html',
      {
        d: 16337376e5,
        l: '2021年10月9日',
        c: ['前端基石'],
        g: 'CSS3',
        e: '前言 修改input placeholder样式、`多行文本溢出、隐藏滚动条、修改光标颜色、水平垂直居中...多么熟悉的功能呀！前端童鞋几乎每天都会和他们打交道，一起来总结我们的 css 幸福小片段吧！下次不用百度、不用谷歌，这里就是你的港湾。 点击查看源码地址”持续更新中“ (https://link.juejin.cn?target=https%3...',
        r: { minutes: 9.22, words: 2767 },
        y: 'a',
        t: '20+ css高频实用片段'
      },
      [
        '/前端开发/前端基石/CSS3/20_ css高频实用片段.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/20_%20css%E9%AB%98%E9%A2%91%E5%AE%9E%E7%94%A8%E7%89%87%E6%AE%B5',
        '/前端开发/前端基石/CSS3/20+ css高频实用片段.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/20+%20css%E9%AB%98%E9%A2%91%E5%AE%9E%E7%94%A8%E7%89%87%E6%AE%B5.html',
        '/前端开发/前端基石/CSS3/20+ css高频实用片段.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/20+%20css%E9%AB%98%E9%A2%91%E5%AE%9E%E7%94%A8%E7%89%87%E6%AE%B5.md'
      ]
    ],
    [
      'v-b4a0489a',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/2D%E4%B8%8E3D%E8%BD%AC%E6%8D%A2.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'CSS3'],
        e: 'css 3d 空间坐标轴 css3d空间坐标轴 2d 变形 旋转变形 将 transform 属性的值设置为 rotate()，即可实现旋转变形; rotate()本质上是将图形围绕 z 轴进行旋转; 那么rotateX()、`rotateY()就很好理解了; 若角度为正，则顺时针方向旋转，否则逆时针方向旋转; transform-origin 属性 ...',
        r: { minutes: 1.62, words: 485 },
        y: 'a',
        t: '2D与3D转换',
        O: 6
      },
      [
        '/前端开发/前端基石/CSS3/2D与3D转换.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/2D%E4%B8%8E3D%E8%BD%AC%E6%8D%A2',
        '/前端开发/前端基石/CSS3/2D与3D转换.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/2D%E4%B8%8E3D%E8%BD%AC%E6%8D%A2.md'
      ]
    ],
    [
      'v-9c47fa7e',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/CSS%E5%85%AB%E7%A7%8D%E8%AE%A9%E4%BA%BA%E7%9C%BC%E5%89%8D%E4%B8%80%E4%BA%AE%E7%9A%84HOVER%E6%95%88%E6%9E%9C.html',
      {
        d: 15977952e5,
        l: '2020年8月19日',
        c: ['前端基石'],
        g: 'CSS3',
        e: '一.发送效果 HTML // 这里是一个svg的占位 Send 复制代码 CSS #send-btn{ display: flex; align-items: center; justify-content: center; height: 100vh; } button { background: #5f55af; border: 0; border...',
        r: { minutes: 4.12, words: 1237 },
        y: 'a',
        t: 'CSS八种让人眼前一亮的HOVER效果'
      },
      [
        '/前端开发/前端基石/CSS3/CSS八种让人眼前一亮的HOVER效果.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/CSS%E5%85%AB%E7%A7%8D%E8%AE%A9%E4%BA%BA%E7%9C%BC%E5%89%8D%E4%B8%80%E4%BA%AE%E7%9A%84HOVER%E6%95%88%E6%9E%9C',
        '/前端开发/前端基石/CSS3/CSS八种让人眼前一亮的HOVER效果.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/CSS%E5%85%AB%E7%A7%8D%E8%AE%A9%E4%BA%BA%E7%9C%BC%E5%89%8D%E4%B8%80%E4%BA%AE%E7%9A%84HOVER%E6%95%88%E6%9E%9C.md'
      ]
    ],
    [
      'v-15fc8bce',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/less.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['前端基石'],
        g: 'CSS3',
        e: '1.定义变量 2.嵌套语法 3.mixin 混入 注意：这种方式必须在http协议下运行，因为本质上less.js是通过ajax请求了less文件，进行编译。 缺点： 1. 需要多引入一个less.js文件 2. 需要多一次http请求，file协议打开无效 3. 如果浏览器禁用了js，那么无法生效 4. 线上编译，可能出现短暂的css混乱',
        r: { minutes: 4.61, words: 1383 },
        y: 'a',
        t: 'less'
      },
      [
        '/前端开发/前端基石/CSS3/less.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/less',
        '/前端开发/前端基石/CSS3/less.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/less.md'
      ]
    ],
    [
      'v-0e03c0ba',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E5%9F%BA%E7%A1%80%E4%B8%8E%E7%9B%92%E6%A8%A1%E5%9E%8B.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'CSS3'],
        e: 'css3 简介 CSS(`cascading style sheet，层叠样式表)是用来给 HTML 标签添加样式的语言; CSS3 是 CSS 的最新版本，增加了大量的样式、动画、3D 特效和移动端特性等; css3 书写位置 内嵌式 在 head 标签对中，添加 style 标签对，然后在里面书写 css 样式 外链式 单独创建 css 文件，在h...',
        r: { minutes: 16.98, words: 5093 },
        y: 'a',
        t: '基础与盒模型',
        O: 1
      },
      [
        '/前端开发/前端基石/CSS3/基础与盒模型.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E5%9F%BA%E7%A1%80%E4%B8%8E%E7%9B%92%E6%A8%A1%E5%9E%8B',
        '/前端开发/前端基石/CSS3/基础与盒模型.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E5%9F%BA%E7%A1%80%E4%B8%8E%E7%9B%92%E6%A8%A1%E5%9E%8B.md'
      ]
    ],
    [
      'v-5e7cbd2c',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E6%B5%AE%E5%8A%A8%E4%B8%8E%E5%AE%9A%E4%BD%8D.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'CSS3'],
        e: '浮动 最本质功能：实现并排 浮动使用的要点 要浮动，并排的盒子都要设置浮动; 父盒子要有足够的宽度，否则子盒子会掉下去; 浮动的顺序贴靠特性 子盒子会按顺序进行贴靠，如果没有足够空间，则会寻找再前一个兄弟元素 浮动顺序贴靠性 浮动的元素一定能设置宽高 浮动的元素不再区分块级元素、行内元素，已经脱离了标准文档流，一律能够设置宽度和高度，即使它是 span...',
        r: { minutes: 5.86, words: 1758 },
        y: 'a',
        t: '浮动与定位',
        O: 2
      },
      [
        '/前端开发/前端基石/CSS3/浮动与定位.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E6%B5%AE%E5%8A%A8%E4%B8%8E%E5%AE%9A%E4%BD%8D',
        '/前端开发/前端基石/CSS3/浮动与定位.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E6%B5%AE%E5%8A%A8%E4%B8%8E%E5%AE%9A%E4%BD%8D.md'
      ]
    ],
    [
      'v-0999edd9',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%83%8C%E6%99%AF%E4%B8%8E%E6%B8%90%E5%8F%98.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'CSS3'],
        e: '背景 bgckground-color 表示背景颜色; 可以用十六进制，rgb(),rgba(); padding 区域是有背景颜色的; background-image 用来设置背景图片，图片路径要写到 ur1()圆括号中，可以是相对路径，也可以是 http://开头的绝对路径 background-repeat 用来设置背景的重复模式 repeat...',
        r: { minutes: 3.15, words: 945 },
        y: 'a',
        t: '背景与渐变',
        O: 5
      },
      [
        '/前端开发/前端基石/CSS3/背景与渐变.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%83%8C%E6%99%AF%E4%B8%8E%E6%B8%90%E5%8F%98',
        '/前端开发/前端基石/CSS3/背景与渐变.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%83%8C%E6%99%AF%E4%B8%8E%E6%B8%90%E5%8F%98.md'
      ]
    ],
    [
      'v-71430068',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%B8%A9%E9%9B%B7css.html',
      {
        d: 15921792e5,
        l: '2020年6月15日',
        c: ['前端基石'],
        g: 'CSS3',
        e: '1.🤨 标准的 CSS 盒子模型及其和低版本的 IE 盒子模型的区别？ 标准（W3C）盒子模型：width = 内容宽度（content） + border + padding + margin 低版本 IE 盒子模型： width = 内容宽度（content + border + padding）+ margin 图片展示: 区别： 标准盒子模型...',
        r: { minutes: 48.33, words: 14498 },
        y: 'a',
        t: '踩雷css'
      },
      [
        '/前端开发/前端基石/CSS3/踩雷css.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%B8%A9%E9%9B%B7css',
        '/前端开发/前端基石/CSS3/踩雷css.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%B8%A9%E9%9B%B7css.md'
      ]
    ],
    [
      'v-386957f2',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%BE%B9%E6%A1%86%E5%9C%86%E8%A7%92%E4%B8%8E%E7%9B%92%E5%AD%90%E9%98%B4%E5%BD%B1.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'CSS3'],
        e: '边框 边框的三要素 border 属性; 线型; 1. solid 实线 2. dashed 虚线 3. dotted 点状线 边框的三要素可以拆分为小属性; 1. border-width 线宽 2. border-style 线型 3. border-color 线颜色 四个方向的边框 同样，四个方向边框的三要素也可以拆分为小属性; 去掉边框; 利...',
        r: { minutes: 1.51, words: 452 },
        y: 'a',
        t: '边框圆角与盒子阴影',
        O: 3
      },
      [
        '/前端开发/前端基石/CSS3/边框圆角与盒子阴影.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%BE%B9%E6%A1%86%E5%9C%86%E8%A7%92%E4%B8%8E%E7%9B%92%E5%AD%90%E9%98%B4%E5%BD%B1',
        '/前端开发/前端基石/CSS3/边框圆角与盒子阴影.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%BE%B9%E6%A1%86%E5%9C%86%E8%A7%92%E4%B8%8E%E7%9B%92%E5%AD%90%E9%98%B4%E5%BD%B1.md'
      ]
    ],
    [
      'v-f28bccce',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%BF%87%E6%B8%A1%E4%B8%8E%E5%8A%A8%E7%94%BB.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'CSS3'],
        e: '过渡 transition 过渡属性是 CSS3 浓墨重彩的特性，过渡可以为一个元素在不同样式之间变化自动添加“补间动画" 兼容性 过渡从 IE10 开始兼容，移动端兼容良好; 曾几何时，网页上的动画特效基本都是由 Javascript 定时器实现的，现在逐步改为使用 CSS3 过渡; 优点：动画更细腻，内存开销小; 基本使用 参数 1:什么属性要过渡...',
        r: { minutes: 4.18, words: 1255 },
        y: 'a',
        t: '过渡与动画',
        O: 4
      },
      [
        '/前端开发/前端基石/CSS3/过渡与动画.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%BF%87%E6%B8%A1%E4%B8%8E%E5%8A%A8%E7%94%BB',
        '/前端开发/前端基石/CSS3/过渡与动画.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%BF%87%E6%B8%A1%E4%B8%8E%E5%8A%A8%E7%94%BB.md'
      ]
    ],
    [
      'v-f47c39e8',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/H5C3%E6%80%BB%E7%BB%93.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['前端基石'],
        g: 'HTML5',
        e: '1，怎么让一个不定宽高的 Div，垂直水平居中 1）使用 css 方法: 父盒子设置： display：table-cell; text-align:center; vertical-align:middle; Div设置： display:inlie-block; vertical-align:middle; 2）使用 css3 transform ...',
        r: { minutes: 19.28, words: 5785 },
        y: 'a',
        t: 'H5C3总结'
      },
      [
        '/前端开发/前端基石/HTML5/H5C3总结.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/H5C3%E6%80%BB%E7%BB%93',
        '/前端开发/前端基石/HTML5/H5C3总结.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/H5C3%E6%80%BB%E7%BB%93.md'
      ]
    ],
    [
      'v-43dbda5f',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/H5CSS3.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: '前端基石',
        g: 'HTML5',
        e: '过渡 特点：当前元素只要有“属性”发生变化时，可以平滑的进行过渡，并不仅仅局限于 hover 状态。 transition-property 设置过渡属性 transition-duration 设置过渡时间 transition-timing-function 设置过渡动画效果 transition-delay 设置过渡延时 以上四属性重在理解 伸缩...',
        r: { minutes: 28.95, words: 8684 },
        y: 'a',
        t: 'H5CSS3'
      },
      [
        '/前端开发/前端基石/HTML5/H5CSS3.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/H5CSS3',
        '/前端开发/前端基石/HTML5/H5CSS3.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/H5CSS3.md'
      ]
    ],
    [
      'v-06f83f68',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/HTML5.html',
      {
        d: 1697989125e3,
        c: '前端基石',
        g: 'HTML5',
        e: '修订进度 ![ ] 2021.9.30 meta的具体功能 html5 骨架 注意 请始终向 HTML 文档添加 声明，这样浏览器才能获知文档类型。 声明必须是 HTML文档的第一行，位于 html标签之前。; 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。; 在 HTML 4.01中，声明引用 DT...',
        r: { minutes: 12.88, words: 3863 },
        y: 'a',
        t: 'HTML5'
      },
      [
        '/前端开发/前端基石/HTML5/HTML5.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/HTML5',
        '/前端开发/前端基石/HTML5/HTML5.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/HTML5.md'
      ]
    ],
    [
      'v-74457929',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/HTML5%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91UI%E6%A1%86%E6%9E%B6.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['前端基石'],
        g: ['HTML5'],
        e: 'Vue.js 生态圈 Element 和 iView 是两个最受欢迎的 UI 组件工具包，专注于左面端 UI 界面的快速开发。; 而 MintUI 与 vux 则相反，是移动端最受欢迎的 UI 工具包。; Vuetify 是一款功能最完善的能同时适用于移动端和桌面端的框架，内置了服务端渲染、PWA、CLI 模板支持等诸多特性。; Nuxt 则是一款基于...',
        r: { minutes: 8.5, words: 2551 },
        y: 'a',
        t: 'HTML5移动开发UI框架'
      },
      [
        '/前端开发/前端基石/HTML5/HTML5移动开发UI框架.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/HTML5%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91UI%E6%A1%86%E6%9E%B6',
        '/前端开发/前端基石/HTML5/HTML5移动开发UI框架.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/HTML5%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91UI%E6%A1%86%E6%9E%B6.md'
      ]
    ],
    [
      'v-d3697fb0',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/%E5%89%8D%E7%AB%AF%E5%8A%A8%E7%94%BB.html',
      {
        d: 15343776e5,
        l: '2018年8月16日',
        c: '前端基石',
        g: 'HTML5',
        e: '我们在显示器上看到的动画，每一帧变化都是系统绘制出来的（GPU 或者 CPU）。它的最高绘制频率受限于显示器的刷新频率（而非显卡，大多数是 60Hz 或者 75Hz）。 帧频越高，屏幕上图片闪烁感就越小，稳定性也就越高。人的眼睛不容易察觉 75Hz 以上刷新频率带来的闪烁感。 实现方式 通常我们在前端实现动画效果的几种主要实现方式如下： JavaScr...',
        r: { minutes: 6.47, words: 1940 },
        y: 'a',
        t: '前端动画'
      },
      [
        '/前端开发/前端基石/HTML5/前端动画.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/%E5%89%8D%E7%AB%AF%E5%8A%A8%E7%94%BB',
        '/前端开发/前端基石/HTML5/前端动画.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/%E5%89%8D%E7%AB%AF%E5%8A%A8%E7%94%BB.md'
      ]
    ],
    [
      'v-538d677a',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/Ajax.html',
      {
        d: 1527552e6,
        l: '2018年5月29日',
        c: ['前端基石'],
        g: 'JS基础',
        e: '一、AJAX 1.概念： （1）ajax 不是一个新的语言，本质上还是 js，综合运用了很多的奇数; （2）本质上 ajax 进行数据传输，基于 http 协议（get/post）; ###### js 是一个单线程的语言，代码从上往下顺序执行，有一个时间队列 event loop；js 遇到异步事件，将异步事件扔到事件队列中，不会阻塞主线程的执行；等...',
        r: { minutes: 12.2, words: 3659 },
        y: 'a',
        t: 'Ajax'
      },
      [
        '/前端开发/前端基石/JS基础/Ajax.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/Ajax',
        '/前端开发/前端基石/JS基础/Ajax.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/Ajax.md'
      ]
    ],
    [
      'v-59921c4f',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/BOM.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'JS基础'],
        g: 'BOM',
        e: '简介 BOM（ Browser Object Model，浏览器对象模型）是 Js 与浏览器窗口交互的接口 window 对象 window 对象是当前 JS 脚本运行所处的窗口，而这个窗口中包含 DOM 结构， window.document 属性就是 document 对象 在有标签页功能的浏览器中，每个标签都拥有自己的 window 对象；也就是...',
        r: { minutes: 4.19, words: 1258 },
        y: 'a',
        t: 'BOM'
      },
      [
        '/前端开发/前端基石/JS基础/BOM.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/BOM',
        '/前端开发/前端基石/JS基础/BOM.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/BOM.md'
      ]
    ],
    [
      'v-10c9918b',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/Canvas.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['前端基石'],
        g: 'JS基础',
        e: "Canvas 简介 canvas 是一个标签，作用：展示内容，本身不具备绘图功能; 通过 js 绘图 API(canvas 对象.getContext('2d'或‘webgl’))来绘画图形（canvas 2D 或 webgl（3d）） canvas 的基本使用步骤 1，创建一个 canvas 标签 默认宽高 300\\*150 给 canvas 设置宽...",
        r: { minutes: 7.24, words: 2173 },
        y: 'a',
        t: 'Canvas'
      },
      [
        '/前端开发/前端基石/JS基础/Canvas.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/Canvas',
        '/前端开发/前端基石/JS基础/Canvas.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/Canvas.md'
      ]
    ],
    [
      'v-2954760d',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/DOM.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'JS基础'],
        g: 'DOM',
        e: 'DOM 接口 (https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentObjectModel) // TODO: 2022.10.23 改。 "DOM 是 JS 操控 HTML 和 CSS 的桥梁" DOM 简介 DOM（ Document Object Model，文档对象模型）是 Java...',
        r: { minutes: 20.81, words: 6244 },
        y: 'a',
        t: 'DOM'
      },
      [
        '/前端开发/前端基石/JS基础/DOM.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/DOM',
        '/前端开发/前端基石/JS基础/DOM.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/DOM.md'
      ]
    ],
    [
      'v-ff563d60',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/JavaScript23%E7%A7%8D%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html',
      {
        d: 15430176e5,
        l: '2018年11月24日',
        c: ['前端基石'],
        g: 'JS基础',
        e: '总体来说设计模式分为三大类： ① 创建型模式 共五种：工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。; ② 结构型模式，共七种：适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式。; ③ 行为型模式，共十一种：策略模式、模板方法模式、观察者模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介...',
        r: { minutes: 3.59, words: 1078 },
        y: 'a',
        t: 'JavaScript23种设计模式'
      },
      [
        '/前端开发/前端基石/JS基础/JavaScript23种设计模式.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/JavaScript23%E7%A7%8D%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F',
        '/前端开发/前端基石/JS基础/JavaScript23种设计模式.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/JavaScript23%E7%A7%8D%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.md'
      ]
    ],
    [
      'v-5892f4fc',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/JavaScript%E5%87%BD%E6%95%B0%E5%BA%93.html',
      {
        d: 15373152e5,
        l: '2018年9月19日',
        c: ['前端基石'],
        g: 'JS基础',
        e: '1.JavaSript 中数组方法是否对原数组产生影响 产生影响 栈方法 push push()方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。; pop pop()方法会删除数组最后一项，并将该项返回。; 队列方法 shift shift()方法会删除数组的第一项，并将该项返回。; unshift unshift()方法...',
        r: { minutes: 30.36, words: 9109 },
        y: 'a',
        t: 'JavaScript函数库'
      },
      [
        '/前端开发/前端基石/JS基础/JavaScript函数库.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/JavaScript%E5%87%BD%E6%95%B0%E5%BA%93',
        '/前端开发/前端基石/JS基础/JavaScript函数库.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/JavaScript%E5%87%BD%E6%95%B0%E5%BA%93.md'
      ]
    ],
    [
      'v-d5fc2992',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/Javascript%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E7%9A%844%E7%A7%8D%E6%96%B9%E6%B3%95.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['前端基石'],
        g: 'JS基础',
        e: 'Javascript 语言的执行环境是"单线程"（single thread）。 所谓"单线程"，就是指一次只能完成一件任务。如果有多个任务，就必须排队，前面一个任务完成，再执行后面一个任务，以此类推。; 这种模式的好处是实现起来比较简单，执行环境相对单纯；坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。; 常见的浏览器无...',
        r: { minutes: 3.92, words: 1175 },
        y: 'a',
        t: 'Javascript异步编程的4种方法'
      },
      [
        '/前端开发/前端基石/JS基础/Javascript异步编程的4种方法.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/Javascript%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E7%9A%844%E7%A7%8D%E6%96%B9%E6%B3%95',
        '/前端开发/前端基石/JS基础/Javascript异步编程的4种方法.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/Javascript%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E7%9A%844%E7%A7%8D%E6%96%B9%E6%B3%95.md'
      ]
    ],
    [
      'v-a0f6ed6e',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/Ts%E6%A0%B8%E5%BF%83%E7%9F%A5%E8%AF%86%E7%82%B9%E6%80%BB%E7%BB%93.html',
      {
        d: 16085088e5,
        l: '2020年12月21日',
        c: ['前端基石'],
        g: 'JS基础',
        e: '核心知识点 1. 基础类型 TypeScript 支持与 JavaScript 几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。接下来我们简单介绍一下这几种类型的用法. 以上是 typescript 中常用的几种类型, 也是我们必须掌握的基本知识. 这里值得补充的是 typescript 的类型断言, 也是解决 ts 警告的利器,比如我们确...',
        r: { minutes: 10.8, words: 3239 },
        y: 'a',
        t: 'Ts核心知识点总结'
      },
      [
        '/前端开发/前端基石/JS基础/Ts核心知识点总结.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/Ts%E6%A0%B8%E5%BF%83%E7%9F%A5%E8%AF%86%E7%82%B9%E6%80%BB%E7%BB%93',
        '/前端开发/前端基石/JS基础/Ts核心知识点总结.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/Ts%E6%A0%B8%E5%BF%83%E7%9F%A5%E8%AF%86%E7%82%B9%E6%80%BB%E7%BB%93.md'
      ]
    ],
    [
      'v-3118468a',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/js%E6%96%B9%E6%B3%95%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0.html',
      {
        d: 15602976e5,
        l: '2019年6月12日',
        c: ['前端基石'],
        g: 'JS基础',
        e: 'js 方法手动实现 1.实现 Object.assign(target,obj,obj1) Object.assign 是浅拷贝,对于值是引用类型的属性,拷贝仍旧的是它的引用; 可以拷贝 Symbol 属性; 不能拷贝不可枚举的属性; Object.assign 保证 target 始终是一个对象,如果传入一个基本类型,会转为基本包装类型,null/u...',
        r: { minutes: 8.66, words: 2597 },
        y: 'a',
        t: 'js方法手动实现'
      },
      [
        '/前端开发/前端基石/JS基础/js方法手动实现.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/js%E6%96%B9%E6%B3%95%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0',
        '/前端开发/前端基石/JS基础/js方法手动实现.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/js%E6%96%B9%E6%B3%95%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0.md'
      ]
    ],
    [
      'v-e12f83da',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E5%87%BD%E6%95%B0.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'JS基础'],
        g: '函数',
        e: '定义 和变量类似，函数必须先定义然后才能使用 使用 function 关键字定义函数， function 是“功能”的意思 函数表达式 函数的调用 执行函数体中的所有语句，就称为“调用函数" 调用函数非常简单，只需在函数名字后书写圆括号对即可:fun() 函数声明的提升 和变量声明提升类似，函数声明也可以被提升 如果函数是用函数表达式的写法定义的，则没...',
        r: { minutes: 4.94, words: 1483 },
        y: 'a',
        t: '函数'
      },
      [
        '/前端开发/前端基石/JS基础/函数.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E5%87%BD%E6%95%B0',
        '/前端开发/前端基石/JS基础/函数.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E5%87%BD%E6%95%B0.md'
      ]
    ],
    [
      'v-0a9e9975',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E5%8F%98%E9%87%8F%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'JS基础'],
        g: ['变量', '数据类型'],
        e: '变量 变量的默认值 1. 一个变量只定义，但没有赋初值，默认值是 undefined 2. 一个变量只有被 var 定义，并赋初值之后，才算正式初始化完成 变量的常见错误 注意 虽然可以通过省略 var 操作符定义全局变量，但不推荐这么做。在局部作用域中定义的全局变量很难维护，也会造成困惑。这是因为不能一下子断定省略 var 是不是有意而为之。在严格模...',
        r: { minutes: 14.78, words: 4434 },
        y: 'a',
        t: '变量与数据类型'
      },
      [
        '/前端开发/前端基石/JS基础/变量与数据类型.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E5%8F%98%E9%87%8F%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B',
        '/前端开发/前端基石/JS基础/变量与数据类型.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E5%8F%98%E9%87%8F%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md'
      ]
    ],
    [
      'v-6b45e24e',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E6%93%8D%E4%BD%9C%E7%AC%A6.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'JS基础'],
        g: '操作符',
        e: '基础概念 操作符：也叫运算符，是一种符号。通过操作符可以对一个或多个值进行运算，并获取运算结果; 表达式：由数字、运算符、变量的组成的式子，一个表达式往往会产生一个值; 一元操作符 只操作一个值的操作符叫一元操作符 递增/递减操作符 ++是递增操作符，表示在自身基础上加 1 a++先用再加，++a 先加再用 递减操作符同理，不做赘述 另外，这 4 个操...',
        r: { minutes: 8.67, words: 2600 },
        y: 'a',
        t: '操作符'
      },
      [
        '/前端开发/前端基石/JS基础/操作符.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E6%93%8D%E4%BD%9C%E7%AC%A6',
        '/前端开发/前端基石/JS基础/操作符.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E6%93%8D%E4%BD%9C%E7%AC%A6.md'
      ]
    ],
    [
      'v-120e4f10',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E6%95%B0%E7%BB%84.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'JS基础'],
        g: ['数组', '数组方法'],
        e: '数组简介和基本使用 简介 数组（Array），顾名思义，用来存储组相关的值，从而方便进行求和、计算平均数、逐项遍历等操作。 定义方法 1. var arr=[1,2,3] 2. var arr=new Array(1,2,3) //包装类 3. var arr=new Array(3) // 长度为 3 的数字，每一项都是 undefined 访问数组...',
        r: { minutes: 11.42, words: 3427 },
        y: 'a',
        t: '数组'
      },
      [
        '/前端开发/前端基石/JS基础/数组.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E6%95%B0%E7%BB%84',
        '/前端开发/前端基石/JS基础/数组.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E6%95%B0%E7%BB%84.md'
      ]
    ],
    [
      'v-835caad4',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'JS基础'],
        g: '正则表达式',
        e: '// TODO 重新学习 正则表达式(regular expression)描述了字符串的“构成模式”，经常被用于检查字符串是否符合预定的格式要求 正则表达式“按位”描述规则，是指它是一位一位的描述字符串的构成形式 正则表达式可以调用 test()方法，检查某字符串是否符合正则表达式规定的规则 正则表达式的创建 使用/内容/的语法形式，可以快速创建正则...',
        r: { minutes: 6.78, words: 2034 },
        y: 'a',
        t: '正则表达式'
      },
      [
        '/前端开发/前端基石/JS基础/正则表达式.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F',
        '/前端开发/前端基石/JS基础/正则表达式.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.md'
      ]
    ],
    [
      'v-0f51c0e6',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'JS基础'],
        g: '流程控制',
        e: '条件语句 if 语句(一般和 else 一起使用) 表示如果...就...否则...; 在 if 语句中，else 是可以省略的; 如果 if 语句体中只有一行语句，可以省略大括号和换行; if...else...if 多条件分支 if 语句的嵌套 某游乐园的门票价格如下表所示。请用户输入年龄和星期几，弹出对话框显示门票价格。星期几用阿拉伯数字0、1、...',
        r: { minutes: 9.42, words: 2825 },
        y: 'a',
        t: '流程控制语句'
      },
      [
        '/前端开发/前端基石/JS基础/流程控制语句.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5',
        '/前端开发/前端基石/JS基础/流程控制语句.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5.md'
      ]
    ],
    [
      'v-45706c20',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E9%9A%BE%E7%82%B9%E6%80%BB%E7%BB%93.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['前端基石'],
        g: 'JS基础',
        e: '前端五大模块 h5CSS3; ajax; 原生 js; 流行框架(vue，rect，augular 等); git/svn; 1.字符串拼串的时候记得两边有空格 uls[i].style.transition=" all 1s "+i*0.1+"s"; 2.decodeUrI()对地址栏参数进行解码 3.数组的内置方法 slice（begin，end）...',
        r: { minutes: 23.41, words: 7023 },
        y: 'a',
        t: '难点总结'
      },
      [
        '/前端开发/前端基石/JS基础/难点总结.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E9%9A%BE%E7%82%B9%E6%80%BB%E7%BB%93',
        '/前端开发/前端基石/JS基础/难点总结.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E9%9A%BE%E7%82%B9%E6%80%BB%E7%BB%93.md'
      ]
    ],
    [
      'v-5a1eb93a',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html',
      {
        d: 1697989125e3,
        c: ['前端基石', 'JS基础'],
        g: ['对象', '原型', '原型链'],
        e: '对象 对象（ object）是“键值对”的集合，表示属性和值的映射关系; 如果对象的属性键名不符合标识符命名规范，则这个键名必须用引号包裹; 属性的访问 in 运算符 检查属性是否存在的操作符 "in"。 语法是："key" in object 例如： 普通属性名使用点语法来访问; 如果属性名不符合标识符命名规范，则必须用方括号的写法来访问; 如果属性...',
        r: { minutes: 23.79, words: 7137 },
        y: 'a',
        t: '面向对象'
      },
      [
        '/前端开发/前端基石/JS基础/面向对象.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1',
        '/前端开发/前端基石/JS基础/面向对象.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.md'
      ]
    ],
    [
      'v-d029f7dc',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/JSX%E6%A0%B8%E5%BF%83%E8%AF%AD%E6%B3%95.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'React'],
        e: '修订记录 📝 2022.11.30 开始更新文档内容至React 18,移除弃用的API,添加新特性，全面拥抱hook 认识 JSX JSX 是 JavaScript 的语法扩展，JSX 使得我们可以以类似于 HTML 的形式去使用 JS。`JSX便是React中声明式编程的体现方式。使用JSX将我们所期望的网页结构编写出来，然后React再根据JS...',
        r: { minutes: 5.77, words: 1731 },
        y: 'a',
        t: 'JSX核心语法',
        i: 'jsx-',
        O: 1
      },
      [
        '/前端开发/前端框架/React/JSX核心语法.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/JSX%E6%A0%B8%E5%BF%83%E8%AF%AD%E6%B3%95',
        '/前端开发/前端框架/React/JSX核心语法.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/JSX%E6%A0%B8%E5%BF%83%E8%AF%AD%E6%B3%95.md'
      ]
    ],
    [
      'v-2aea1902',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/',
      {
        d: 1697989125e3,
        r: { minutes: 0.02, words: 6 },
        y: 'a',
        t: 'React',
        i: 'react'
      },
      [
        '/前端开发/前端框架/React/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/index.html',
        '/前端开发/前端框架/React/README.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/README.md'
      ]
    ],
    [
      'v-3396cd48',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['前端框架'],
        g: 'React',
        e: 'React 1.什么是 React 用来构建 UI 的 JavaScript 库; React 不是一个 MVC 框架，仅仅是视图（V）层的库; React 官网 React 中文文档 2.特点 1 使用 JSX 语法 创建组件，实现组件化开发，为函数式的 UI 编程方式打开了大门; 2 性能高的让人称赞：通过 diff算法 和 虚拟DOM 实现视图的...',
        r: { minutes: 27.11, words: 8134 },
        y: 'a',
        t: 'React'
      },
      [
        '/前端开发/前端框架/React/React.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React',
        '/前端开发/前端框架/React/React.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React.md'
      ]
    ],
    [
      'v-176aef0e',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/ReactHook.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'React'],
        e: '// TODO 待修改 Class 组件存在的问题 1. 复杂组件变得难以理解： 我们在最初编写一个 class 组件时，往往逻辑比较简单，并不会非常复杂。但是随着业务的增多，我们的 class 组件会变得越来越复杂 比如 componentDidMount 中，可能就会包含大量的逻辑代码：包括网络请求、一些事件的监听（还需要在 componentWi...',
        r: { minutes: 14.29, words: 4286 },
        y: 'a',
        t: 'React Hook',
        i: 'hook',
        O: 8
      },
      [
        '/前端开发/前端框架/React/ReactHook.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/ReactHook',
        '/前端开发/前端框架/React/ReactHook.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/ReactHook.md'
      ]
    ],
    [
      'v-67e92153',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/ReactRouter.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'React'],
        e: '路由的由来 路由（routing）就是通过互联的网络把信息从源地址传输到目的地址的活动 --- 维基百科 路由中有一个非常重要的概念叫路由表.路由表本质上就是一个映射表, 决定了数据包的指向 路由的概念出现最早是在后端路由中实现的，原因是 web 的发展主要经历了这样一些阶段： 后端路由阶段; 前后端分离阶段; 单页面富应用（SPA）; 阶段一：后端路...',
        r: { minutes: 20.62, words: 6185 },
        y: 'a',
        t: 'ReactRouter',
        i: 'luyou',
        O: 4
      },
      [
        '/前端开发/前端框架/React/ReactRouter.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/ReactRouter',
        '/前端开发/前端框架/React/ReactRouter.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/ReactRouter.md'
      ]
    ],
    [
      'v-74948506',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E4%B8%8ETypeScript.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'React'],
        e: '创建 react-ts 项目 ::: code-tabs tab create-react-app tab vite :::',
        r: { minutes: 0.16, words: 47 },
        y: 'a',
        t: 'React与TypeScript',
        i: 'typescript',
        O: 8
      },
      [
        '/前端开发/前端框架/React/React与TypeScript.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E4%B8%8ETypeScript',
        '/前端开发/前端框架/React/React与TypeScript.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E4%B8%8ETypeScript.md'
      ]
    ],
    [
      'v-8f032ab2',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E4%B8%ADaxios.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'React'],
        e: '// TODO： 待整理 官方文档 (https://www.axios-http.cn/) React 系列十三 - axios 库的使用 (https://mp.weixin.qq.com/s/MTj0Or-QFmv9a7BugO6--A) 为什么不是...? 1. Jquery-ajax:没什么好说的 2. Fetch API：Fetch 是一个...',
        r: { minutes: 2.97, words: 890 },
        y: 'a',
        t: 'React中axios',
        i: 'wangluo',
        O: 6
      },
      [
        '/前端开发/前端框架/React/React中axios.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E4%B8%ADaxios',
        '/前端开发/前端框架/React/React中axios.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E4%B8%ADaxios.md'
      ]
    ],
    [
      'v-0f86a3bd',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E4%B8%AD%E7%9A%84CSS.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'React'],
        e: '事实上，css 一直是 React 的痛点， 在这一点上，Vue 做的要确实要好于 React，`React 官方并没有给出在 React 中统一的样式风格，以下介绍几种 React 中的 CSS 解决方案 内联样式 内联样式是官方推荐的一种 css 样式的写法： style 接受一个采用小驼峰命名属性的 JavaScript 对象; 并且可以引用 s...',
        r: { minutes: 4.03, words: 1210 },
        y: 'a',
        t: 'React中的CSS',
        i: 'css',
        O: 2
      },
      [
        '/前端开发/前端框架/React/React中的CSS.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E4%B8%AD%E7%9A%84CSS',
        '/前端开发/前端框架/React/React中的CSS.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E4%B8%AD%E7%9A%84CSS.md'
      ]
    ],
    [
      'v-4f772ce9',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E6%80%BB%E7%BB%93.html',
      {
        d: 1534896e6,
        l: '2018年8月22日',
        c: ['前端框架'],
        g: 'React',
        e: '1.关于事件中的 this 如果没有用 bind 把实例方法绑定到当前实例，方法中调用 this，会显示 null 或 undefined，因为此时 this 指向的是实例方法 2.create-react-app 打包 css 路径报错 在 package.json 里加 "homepage":"." 3.组件两种写法 没有 state 的组件叫无状...',
        r: { minutes: 1.42, words: 426 },
        y: 'a',
        t: 'React总结'
      },
      [
        '/前端开发/前端框架/React/React总结.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E6%80%BB%E7%BB%93',
        '/前端开发/前端框架/React/React总结.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E6%80%BB%E7%BB%93.md'
      ]
    ],
    [
      'v-0cc32b96',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E7%9A%84%E8%BF%87%E6%B8%A1%E5%8A%A8%E7%94%BB.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'React'],
        e: '官方文档 (https://reactcommunity.org/react-transition-group/) react-transition-group react-transition-group可以帮助我们方便的实现组件的 入场 和 离场 动画，使用时需要进行额外的安装： tab npm tab yarn CSSTransition CSS...',
        r: { minutes: 3.48, words: 1044 },
        y: 'a',
        t: 'React的过渡动画',
        i: 'donghua',
        O: 7
      },
      [
        '/前端开发/前端框架/React/React的过渡动画.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E7%9A%84%E8%BF%87%E6%B8%A1%E5%8A%A8%E7%94%BB',
        '/前端开发/前端框架/React/React的过渡动画.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E7%9A%84%E8%BF%87%E6%B8%A1%E5%8A%A8%E7%94%BB.md'
      ]
    ],
    [
      'v-26da8c91',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E7%BB%84%E4%BB%B6%E5%8C%96%E5%BC%80%E5%8F%91.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'React'],
        e: 'React 的组件化 类组件 类组件的定义有如下要求： 组件的名称是大写字符开头（无论类组件还是函数组件）; 类组件需要继承自 React.Component; 类组件必须实现 render 函数; super(props),super()以及不写 super 的区别 如果用到了 constructor 就必须写 super(),是用来初始化 this...',
        r: { minutes: 25.04, words: 7511 },
        y: 'a',
        t: 'React组件化开发',
        i: 'zujian',
        O: 3
      },
      [
        '/前端开发/前端框架/React/React组件化开发.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E7%BB%84%E4%BB%B6%E5%8C%96%E5%BC%80%E5%8F%91',
        '/前端开发/前端框架/React/React组件化开发.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E7%BB%84%E4%BB%B6%E5%8C%96%E5%BC%80%E5%8F%91.md'
      ]
    ],
    [
      'v-4648a5f2',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/Redux.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'React'],
        e: '推荐阅读 Redux 入门教程（一）：基本用法 (https://www.ruanyifeng.com/blog/2016/09/reduxtutorialpartonebasic_usages.html) redux (https://redux.js.org/) redux-toolkit (https://redux-toolkit.js.org...',
        r: { minutes: 9.33, words: 2800 },
        y: 'a',
        t: 'Redux',
        i: 'redux',
        O: 5
      },
      [
        '/前端开发/前端框架/React/Redux.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/Redux',
        '/前端开发/前端框架/React/Redux.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/Redux.md'
      ]
    ],
    [
      'v-694e6903',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/react%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF.html',
      {
        d: 16527456e5,
        l: '2022年5月17日',
        c: ['前端框架'],
        g: 'React',
        e: '1\\. 安装 1.安装.png 2\\. 核心概念 JSX 简介 2.1JSX 简介.png 2.2 元素渲染 2.2元素渲染.png 2.3 组件 & Props 2.3组件 & Props.png 2.4.1State & 生命周期 2.4.1State & 生命周期.png 2.4.2 数据流和正确使用 State 2.4.2数据流和正确使用Sta...',
        r: { minutes: 8.03, words: 2409 },
        y: 'a',
        t: 'react学习路线'
      },
      [
        '/前端开发/前端框架/React/react学习路线.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/react%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF',
        '/前端开发/前端框架/React/react学习路线.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/react%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF.md'
      ]
    ],
    [
      'v-02dff447',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Pinia.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'Vue'],
        e: 'Pinia (https://pinia.vuejs.org/zh/) 是 Vue 的存储库，它允许您跨组件/页面共享状态。它被认为是vuex 5.0 Pinia (https://pinia.vuejs.org/zh/) 同时支持Vue 2 和 Vue 3 本文示例使用 vue3 和组合式 api 安装 main.js Store Store 是使用...',
        r: { minutes: 1.19, words: 356 },
        y: 'a',
        t: 'Pinia',
        i: 'vue',
        O: 6
      },
      [
        '/前端开发/前端框架/Vue/Pinia.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Pinia',
        '/前端开发/前端框架/Vue/Pinia.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Pinia.md'
      ]
    ],
    [
      'v-34a3c34a',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/',
      {
        d: 1697989125e3,
        r: { minutes: 0.02, words: 6 },
        y: 'a',
        t: 'Vue',
        i: 'vue'
      },
      [
        '/前端开发/前端框架/Vue/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/index.html',
        '/前端开发/前端框架/Vue/README.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/README.md'
      ]
    ],
    [
      'v-055d5656',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Vue3.0%E6%96%B0%E7%89%B9%E6%80%A7.html',
      {
        d: 16181856e5,
        l: '2021年4月12日',
        c: ['前端框架'],
        g: 'Vue',
        e: 'Vue3.0 新特性 Vue 中性能优化 路由懒加载 异步组件 keep-alive 缓存页面 使用 v-show 复用 DOM v-for 遍历避免同时使用 v-if 长列表性能优化 如果列表是纯粹的数据展示，不会有任何改变，就不需要做响应化; 利用 Object.freeze 冻结对象，保护不被修改; 如果是大数据长列表，可采用虚拟滚动，只渲染少部...',
        r: { minutes: 17.28, words: 5184 },
        y: 'a',
        t: 'Vue3.0新特性'
      },
      [
        '/前端开发/前端框架/Vue/Vue3.0新特性.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Vue3.0%E6%96%B0%E7%89%B9%E6%80%A7',
        '/前端开发/前端框架/Vue/Vue3.0新特性.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Vue3.0%E6%96%B0%E7%89%B9%E6%80%A7.md'
      ]
    ],
    [
      'v-de29251e',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Vue3.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'Vue'],
        e: "注意 vue3 向下兼容 vue2 使用 vite 创建 Vue3.0 工程 警告 在 vite 项目中，引入组件时，.vue 不能省略 import xxx from './xxx.vue' vite 官网 (https://cn.vitejs.dev/) Composition API Composition API (https://v3.cn....",
        r: { minutes: 6.57, words: 1971 },
        y: 'a',
        t: 'Vue3',
        i: 'vue',
        O: 5
      },
      [
        '/前端开发/前端框架/Vue/Vue3.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Vue3',
        '/前端开发/前端框架/Vue/Vue3.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Vue3.md'
      ]
    ],
    [
      'v-0699cd05',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/VueRouter.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'Vue'],
        e: '注意 版本：Vue Router 3.x 可能比文档还详细--VueRouter 完全指北 (https://juejin.cn/post/6844903665388486664) 简介 vue-router和`vue是深度集成的,用于单页面应用 传统的路由是用一些超链接来实现页面切换和跳转,而vue-router在单页面应用(SPA)中,则是组件之间...',
        r: { minutes: 13.41, words: 4024 },
        y: 'a',
        t: 'VueRouter',
        i: 'vue',
        O: 3
      },
      [
        '/前端开发/前端框架/Vue/VueRouter.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/VueRouter',
        '/前端开发/前端框架/Vue/VueRouter.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/VueRouter.md'
      ]
    ],
    [
      'v-5fe28728',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/VueX.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'Vue'],
        e: '概念 在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件，对 vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。 何时使用 多个组件需要共享数据时 VueX 工作原理 vuex 搭建 vuex 环境 1. 创建文件：src/store/index.js 2. 在main.js中创建 ...',
        r: { minutes: 4.77, words: 1432 },
        y: 'a',
        t: 'VueX',
        i: 'vue',
        O: 4
      },
      [
        '/前端开发/前端框架/Vue/VueX.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/VueX',
        '/前端开发/前端框架/Vue/VueX.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/VueX.md'
      ]
    ],
    [
      'v-f0654642',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Vue%E6%A0%B8%E5%BF%83.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'Vue'],
        e: 'vue 简介 一套用于构建用户界面的渐进式 JavaScript框架 Vue可以自底向上逐层的应用 简单应用：只需一个轻量小巧的核心库; 复杂应用：可以引入各式各样的Vue插件 vue-router,`vuex.....; vue 的特点 ⭐ 组件化，提高代码复用率。且让代码更好维护 ⭐ 声明式编码,无需直接操作DOM(命令式编码关心的是how to ...',
        r: { minutes: 20.59, words: 6177 },
        y: 'a',
        t: 'Vue核心',
        i: 'vue',
        O: 1
      },
      [
        '/前端开发/前端框架/Vue/Vue核心.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Vue%E6%A0%B8%E5%BF%83',
        '/前端开发/前端框架/Vue/Vue核心.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Vue%E6%A0%B8%E5%BF%83.md'
      ]
    ],
    [
      'v-7d1f9d1b',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Vue%E7%BB%84%E4%BB%B6%E5%8C%96%E7%BC%96%E7%A8%8B.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'Vue'],
        e: '传统方式的缺点 传统方式编写应用，依赖关系混乱，代码复用率不高 几个概念 模块 向外提供特定功能的 js 程序，一般就是一个 js 文件 为什么？js 文件很多很复杂。 作用：可以复用 js，简化 js 的编写，提高 js 的运行效率 组件 实现应用中局部功能的代码（(html,css,js)和资源(mp3,mp4,字体....)的集合 为什么？一个界...',
        r: { minutes: 19.79, words: 5936 },
        y: 'a',
        t: 'Vue组件化编程',
        i: 'vue',
        O: 2
      },
      [
        '/前端开发/前端框架/Vue/Vue组件化编程.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Vue%E7%BB%84%E4%BB%B6%E5%8C%96%E7%BC%96%E7%A8%8B',
        '/前端开发/前端框架/Vue/Vue组件化编程.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue/Vue%E7%BB%84%E4%BB%B6%E5%8C%96%E7%BC%96%E7%A8%8B.md'
      ]
    ],
    [
      'v-7badcaf4',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/JS%E9%AB%98%E7%BA%A7/',
      {
        d: 1697989125e3,
        r: { minutes: 0.04, words: 11 },
        y: 'a',
        t: 'JS高级',
        i: 'javascript'
      },
      [
        '/前端开发/前端进阶/JS高级/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/JS%E9%AB%98%E7%BA%A7/index.html',
        '/前端开发/前端进阶/JS高级/README.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/JS%E9%AB%98%E7%BA%A7/README.md'
      ]
    ],
    [
      'v-48df62da',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/JS%E9%AB%98%E7%BA%A7/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85.html',
      {
        a: '王福朋',
        d: 1697989125e3,
        c: '前端开发 - 前端进阶 - JS高级',
        e: '一切都是对象 “一切都是对象”这句话的重点在于如何去理解“对象”这个概念。 ——当然，也不是所有的都是对象，值类型就不是对象。 首先咱们还是先看看 javascript 中一个常用的运算符——typeof。typeof 应该算是咱们的老朋友，还有谁没用过它？ typeof 函数输出的一共有几种类型，在此列出： 以上代码列出了 typeof 输出的结果，...',
        r: { minutes: 41.37, words: 12412 },
        y: 'a',
        t: '深入理解javascript原型和闭包',
        i: 'javascript'
      },
      [
        '/前端开发/前端进阶/JS高级/深入理解javascript原型和闭包.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/JS%E9%AB%98%E7%BA%A7/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85',
        '/前端开发/前端进阶/JS高级/深入理解javascript原型和闭包.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/JS%E9%AB%98%E7%BA%A7/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85.md'
      ]
    ],
    [
      'v-6b521627',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Class%E7%B1%BB.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: 'Class',
        e: '// TODO: 2022.5.23 基于 ES6 入门 class 章节重新梳理 Class 基本用法 类名一般首字母大写 属性与方法 实例属性、静态方法和静态属性 1. 实例属性 2. 静态方法(类的方法) 3. 静态属性(类的属性) 私有属性和方法 新提案 这是一个最近添加到 JavaScript 的特性，它为私有属性和方法提供语言级支持。 私有...',
        r: { minutes: 4.21, words: 1264 },
        y: 'a',
        t: 'Class类'
      },
      [
        '/前端开发/前端进阶/ES6/Class类.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Class%E7%B1%BB',
        '/前端开发/前端进阶/ES6/Class类.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Class%E7%B1%BB.md'
      ]
    ],
    [
      'v-09af57da',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/ES6%E7%9A%84%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: 'ES6新增方法',
        e: '字符串新增方法 includes() 判断字符串中是否含有某些字符 1.基本用法; 2. 第二个参数 表示开始搜索的位置，默认为 0 3. 应用:query 的拼接 padStart()和 padEnd() 1. 基本用法 补全字符串 2. 注意事项 原字符串的长度，等于或大于最大长度，不会消减原字符串，字符串补全不生效，返回原字符串; 用来补全的字符...',
        r: { minutes: 4.04, words: 1213 },
        y: 'a',
        t: 'ES6 的新增方法'
      },
      [
        '/前端开发/前端进阶/ES6/ES6的新增方法.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/ES6%E7%9A%84%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95',
        '/前端开发/前端进阶/ES6/ES6的新增方法.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/ES6%E7%9A%84%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95.md'
      ]
    ],
    [
      'v-080e7088',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Generator.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: 'Generator',
        e: 'Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。 Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的...',
        r: { minutes: 0.78, words: 234 },
        y: 'a',
        t: 'Generator'
      },
      [
        '/前端开发/前端进阶/ES6/Generator.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Generator',
        '/前端开发/前端进阶/ES6/Generator.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Generator.md'
      ]
    ],
    [
      'v-03fc2edc',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Module%E6%A8%A1%E5%9D%97.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: ['Module', 'export', 'export default'],
        e: 'ES6 入门教程:Module 的语法 (https://es6.ruanyifeng.com/#docs/module) Module 模块介绍 Module模块:一个一个的局部作用域的代码块; Module 解决的问题：; (1) 模块化的问题 (2) 消除全局变量 (3) 管理加载顺序 使用 script 标签加载模块:只要用到 import 或...',
        r: { minutes: 2.21, words: 664 },
        y: 'a',
        t: 'Module模块'
      },
      [
        '/前端开发/前端进阶/ES6/Module模块.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Module%E6%A8%A1%E5%9D%97',
        '/前端开发/前端进阶/ES6/Module模块.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Module%E6%A8%A1%E5%9D%97.md'
      ]
    ],
    [
      'v-724a3fc0',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Promise.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: ['Promise', '异步'],
        e: '初识 Promise promise是es6进行异步编程的新解决方案--- 旧方案指的是回调函数 从语法上来说，Promise 是一个构造函数 从功能上来说，Promise 对象用来封装一个异步操作并可以获取其成功或失败的结果值 为什么要使用 Promise? 1. 指定回调函数的方式更加灵活： 旧的：必须在启动异步任务前指定; promise：启动异...',
        r: { minutes: 12.54, words: 3763 },
        y: 'a',
        t: 'Promise'
      },
      [
        '/前端开发/前端进阶/ES6/Promise.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Promise',
        '/前端开发/前端进阶/ES6/Promise.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Promise.md'
      ]
    ],
    [
      'v-a4bf6a92',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Proxy%E5%92%8CReflect.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: ['Proxy', 'Reflect'],
        e: 'Proxy Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。 ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例 new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，...',
        r: { minutes: 3.44, words: 1032 },
        y: 'a',
        t: 'Proxy和Reflect'
      },
      [
        '/前端开发/前端进阶/ES6/Proxy和Reflect.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Proxy%E5%92%8CReflect',
        '/前端开发/前端进阶/ES6/Proxy和Reflect.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Proxy%E5%92%8CReflect.md'
      ]
    ],
    [
      'v-5357faee',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Set%E5%92%8CMap%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: ['Set', 'Map'],
        e: 'Set set 是什么 1. 什么是 Set Set 是一系列无序、没有重复值的数据集合 2. 理解 Set set 中不能有重复的成员; Set没有下标去标示每一个值，所以 Set 是无序的，也不能像数组那样通过下标去访问 Set 的成员; set 实例的方法和属性 1. 方法 add; 返回值：Set对象本身 has; delete ; 使用 de...',
        r: { minutes: 3.86, words: 1157 },
        y: 'a',
        t: 'Set和Map数据结构'
      },
      [
        '/前端开发/前端进阶/ES6/Set和Map数据结构.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Set%E5%92%8CMap%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84',
        '/前端开发/前端进阶/ES6/Set和Map数据结构.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/Set%E5%92%8CMap%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.md'
      ]
    ],
    [
      'v-43faf7f8',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/let%E5%92%8Cconst.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: ['let', 'const'],
        e: 'ES6 圣经 ECMAScipt 6 入门 (https://es6.ruanyifeng.com/) let 和 const let 声明变量,const 声明常量。 var,`let 声明的是变量，变量一旦初始化以后，还可以重新赋值。; const声明的是常量，常量一旦初始化，就不能重新赋值了，否则会报错。; let,const所声明的变量/常量，...',
        r: { minutes: 6.23, words: 1868 },
        y: 'a',
        t: 'let和const'
      },
      [
        '/前端开发/前端进阶/ES6/let和const.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/let%E5%92%8Cconst',
        '/前端开发/前端进阶/ES6/let和const.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/let%E5%92%8Cconst.md'
      ]
    ],
    [
      'v-94ff530a',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0%E4%B8%8E%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: ['剩余参数', '展开运算符'],
        e: '剩余参数 剩余参数是什么 剩余参数永远是个数组，即使没有值，也是空数组 剩余参数的注意事项 1. 箭头函数的剩余参数 箭头函数的参数部分即使只有剩余参数，也不能省略圆括号 2. 箭头函数可以使用剩余参数替代 arguments 获取实际参数 3. 剩余参数的位置：剩余参数只能是最后一个参数，之后不能再有其他参数，否则会报错。 与解构赋值结合使用 剩余参...',
        r: { minutes: 3.47, words: 1042 },
        y: 'a',
        t: '剩余参数与展开运算符'
      },
      [
        '/前端开发/前端进阶/ES6/剩余参数与展开运算符.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0%E4%B8%8E%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6',
        '/前端开发/前端进阶/ES6/剩余参数与展开运算符.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0%E4%B8%8E%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6.md'
      ]
    ],
    [
      'v-2d3fb87c',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F%E7%9A%84%E5%A2%9E%E5%BC%BA%E4%B8%8E%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: ['对象字面量', '函数参数默认值'],
        e: '对象字面量的增强 属性和方法的简介表示法 1. 对象字面量是什么？ 还可以通过实例化构造函数生成对象： 2. 属性的简洁表示法 键名和变量或常量一样的时候，可以只写一个 3.方法的简介表示法 方法可以省略冒号和 function 关键字,但不能使用箭头函数 方括号语法 1. 方括号语法的用法 增强：方括号语法可以写在对象字面量中 2. 方括号中可以放什...',
        r: { minutes: 2.45, words: 735 },
        y: 'a',
        t: '对象字面量的增强与函数参数的默认值'
      },
      [
        '/前端开发/前端进阶/ES6/对象字面量的增强与函数参数的默认值.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F%E7%9A%84%E5%A2%9E%E5%BC%BA%E4%B8%8E%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC',
        '/前端开发/前端进阶/ES6/对象字面量的增强与函数参数的默认值.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F%E7%9A%84%E5%A2%9E%E5%BC%BA%E4%B8%8E%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC.md'
      ]
    ],
    [
      'v-7f9cc112',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: ['模板字符串', '箭头函数'],
        e: '模板字符串 什么是模板字符串？ 模板字符串和一般字符串的区别 和其他东西一起使用的时候，使用模板字符串，方便注入。 模板字符串的注意事项 1. 输出多行字符串 模板字符串中，所有的空格，换行或缩进都会被保留正在输出之中。（怎么写就怎么输出） 2. 输出`和\\等特殊字符 使用转义字符 3. 模板字符串的注入 \\${} 只要最终能得到一个值的就能放在花括号...',
        r: { minutes: 3.39, words: 1016 },
        y: 'a',
        t: '模板字符串与箭头函数'
      },
      [
        '/前端开发/前端进阶/ES6/模板字符串与箭头函数.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0',
        '/前端开发/前端进阶/ES6/模板字符串与箭头函数.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0.md'
      ]
    ],
    [
      'v-4f3e6294',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: '解构赋值',
        e: '数组的解构赋值 解构赋值是什么？ 解析某一数据的结构，将我们想要的东西提取出来，赋值给变量或常量 数组解构赋值的原理 模式（结构）匹配; 索引值相同的完成赋值; 不取的，可以直接用逗号跳过; eg:我们要取 3 数组解构赋值的默认值 默认值的生效条件 ; 只有当一个数组成员严格等于（===）undefined 时，对应的默认值才会生效 默认值表达式 ;...',
        r: { minutes: 4.66, words: 1398 },
        y: 'a',
        t: '解构赋值'
      },
      [
        '/前端开发/前端进阶/ES6/解构赋值.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC',
        '/前端开发/前端进阶/ES6/解构赋值.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC.md'
      ]
    ],
    [
      'v-011b7805',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E9%81%8D%E5%8E%86%E5%99%A8%E4%B8%8Efor...of%E5%BE%AA%E7%8E%AF.html',
      {
        d: 1697989125e3,
        c: ['前端进阶', 'ES6'],
        g: ['遍历器', 'forof'],
        e: 'Iterator 是什么 1. Iterator(遍历器)的作用:它是用来遍历的 2. 使用 Iterator it:可遍历对象; Symbol.iterator：可遍历对象的生成方法; 3. 什么是 Iterator Symbol.iterator（可遍历对象的生成方法）->it（可遍历对象）-> it.next() ->it. next()->…(...',
        r: { minutes: 5.29, words: 1586 },
        y: 'a',
        t: '遍历器与for...of循环'
      },
      [
        '/前端开发/前端进阶/ES6/遍历器与for...of循环.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E9%81%8D%E5%8E%86%E5%99%A8%E4%B8%8Efor...of%E5%BE%AA%E7%8E%AF',
        '/前端开发/前端进阶/ES6/遍历器与for...of循环.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E9%81%8D%E5%8E%86%E5%99%A8%E4%B8%8Efor...of%E5%BE%AA%E7%8E%AF.md'
      ]
    ],
    [
      'v-59377d8f',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/TypeScript/',
      {
        d: 1697989125e3,
        e: '为什么学习 TS???? 程序更容易理解 函数或者方法输入输出的参数类型，外部条件？ 使用js需要手动调试（console.log....); 使用ts代码本身就可以回答上诉问题; 更高的效率 在不同的代码块和定义中进行跳转; 代码自动补全; 丰富的接口提示; 更少的错误 编译期间能够发现大部分错误; 杜绝一些常见的错误; 非常好的包容性 完全兼容js...',
        r: { minutes: 0.71, words: 212 },
        y: 'a',
        t: 'TypeScript',
        i: 'typescript'
      },
      [
        '/前端开发/前端进阶/TypeScript/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/TypeScript/index.html',
        '/前端开发/前端进阶/TypeScript/README.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/TypeScript/README.md'
      ]
    ],
    [
      'v-f2525b1a',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/TypeScript/TS%E5%9F%BA%E7%A1%80.html',
      {
        d: 1697989125e3,
        c: '前端开发 - 前端进阶 - TypeScript',
        e: 'TypeScript Environment 1. 安装 ts:npm i -g typescript,编译 ts: tsc xxx.ts,得到 js 文件执行 2. 直接使用 ts-node 运行 ts 文件: npm i ts-node -g; npm i typescript -g; ts-node xxx.ts; boolean number ...',
        r: { minutes: 5.46, words: 1638 },
        y: 'a',
        t: 'TS基础',
        i: 'typescript',
        O: 2
      },
      [
        '/前端开发/前端进阶/TypeScript/TS基础.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/TypeScript/TS%E5%9F%BA%E7%A1%80',
        '/前端开发/前端进阶/TypeScript/TS基础.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/TypeScript/TS%E5%9F%BA%E7%A1%80.md'
      ]
    ],
    [
      'v-2ce8218c',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/TypeScript/TS%E8%BF%9B%E9%98%B6.html',
      {
        d: 1697989125e3,
        c: '前端开发 - 前端进阶 - TypeScript',
        e: '类型收窄 类型收窄 (https://yayujs.com/handbook/Narrowing.html) Generics 泛型 泛型Generics是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。 简单的例子 首先，我们来实现一个函数 createArray，它可以创建一个指定长度的数组，同时将每一项都填...',
        r: { minutes: 15.28, words: 4583 },
        y: 'a',
        t: 'TS进阶',
        i: 'typescript',
        O: 3
      },
      [
        '/前端开发/前端进阶/TypeScript/TS进阶.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/TypeScript/TS%E8%BF%9B%E9%98%B6',
        '/前端开发/前端进阶/TypeScript/TS进阶.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/TypeScript/TS%E8%BF%9B%E9%98%B6.md'
      ]
    ],
    [
      'v-25d50e6e',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/',
      {
        d: 1697989125e3,
        e: '开始之前... 在前端工程师中，常常有一种声音：“我为什么要学习数据结构与算法？没有数据结构与 算法，我一样很好地完成了工作？” 实际上，算法是一个十分宽泛的概念，我们写的任何程序都可称为算法，甚至往冰箱里面 放一头大象，也要经过开门、放入、关门这样的规划，这也可以视为一种简单的算法。可 以说，简单的算法是人类的本能。而算法知识的学习则是吸取前人的经验...',
        r: { minutes: 1.79, words: 537 },
        y: 'a',
        t: '数据结构算法',
        i: 'suanfa'
      },
      [
        '/前端开发/前端进阶/数据结构算法/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/index.html',
        '/前端开发/前端进阶/数据结构算法/README.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/README.md'
      ]
    ],
    [
      'v-13fb1133',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E5%9B%BE.html',
      {
        d: 1697989125e3,
        c: '数据结构与算法',
        g: '图',
        e: '简介 图是网络结构的抽象模型，是一组由边连接的节点 图可以表示任何二元关系,比如道路航班...... JS 中没有图，但是可以用 Object和 Array 构建图 图的表示法：邻接矩阵、邻接表、关联矩阵...... 邻接矩阵; 邻接矩阵 邻接表; 邻接表 图的深度广度优先遍历',
        r: { minutes: 0.48, words: 145 },
        y: 'a',
        t: '图'
      },
      [
        '/前端开发/前端进阶/数据结构算法/图.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E5%9B%BE',
        '/前端开发/前端进阶/数据结构算法/图.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E5%9B%BE.md'
      ]
    ],
    [
      'v-aae17a9c',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E5%AD%97%E5%85%B8.html',
      {
        d: 1697989125e3,
        c: '算法',
        g: '字典',
        e: '简介 与集合类似，字典也是一种存储唯一值的数据结构，但它是以键值对的形式来存储。 ES6 中有字典，名为Map 字典的常用操作：键值对的增删改查 LeetCode：349. 两个数组的交集 LeetCode：349. 两个数组的交集 (https://leetcode-cn.com/problems/intersection-of-two-arrays...',
        r: { minutes: 3.87, words: 1162 },
        y: 'a',
        t: '字典'
      },
      [
        '/前端开发/前端进阶/数据结构算法/字典.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E5%AD%97%E5%85%B8',
        '/前端开发/前端进阶/数据结构算法/字典.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E5%AD%97%E5%85%B8.md'
      ]
    ],
    [
      'v-4bf7c004',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E6%97%B6%E9%97%B4%E7%A9%BA%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6.html',
      {
        d: 1697989125e3,
        c: '数据结构算法',
        g: ['时间复杂度', '空间复杂度'],
        e: '时间复杂度 一个函数，用大 O 表示，比如 O(1),O(n),O(logN)... 定性描述该算法的运行时间 它不会具体描述算法执行用了多少秒，只是描述算法大概运行时间的趋势 时间复杂度 O(1) O(n) O(1)+O(n)=O(n) O(n)\\*O(n)=O(n^2) O(logN) 算法复杂度中的 O(logN)底数是多少 (https://w...',
        r: { minutes: 1.04, words: 312 },
        y: 'a',
        t: '时间空间复杂度',
        O: 2
      },
      [
        '/前端开发/前端进阶/数据结构算法/时间空间复杂度.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E6%97%B6%E9%97%B4%E7%A9%BA%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6',
        '/前端开发/前端进阶/数据结构算法/时间空间复杂度.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E6%97%B6%E9%97%B4%E7%A9%BA%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6.md'
      ]
    ],
    [
      'v-29fb20db',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E6%A0%88.html',
      {
        d: 1697989125e3,
        c: '数据结构与算法',
        g: '栈',
        e: '简介 一个后进先出的数据结构; javaScript中没有栈，但可以用 Array 实现栈的所有功能; 应用场景 需要后进先出的场景 十进制转二级制 除2取余，逆序排列 后出来的余数反而要排到前面 把余数依次入栈，然后再出栈，就可以实现余数倒序输出 tab JS tab TS 个人思路：不用栈，直接把字符串反转 (https://www.cnblogs...',
        r: { minutes: 2.85, words: 855 },
        y: 'a',
        t: '栈',
        O: 3
      },
      [
        '/前端开发/前端进阶/数据结构算法/栈.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E6%A0%88',
        '/前端开发/前端进阶/数据结构算法/栈.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E6%A0%88.md'
      ]
    ],
    [
      'v-52ef6fc3',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E6%A0%91.html',
      {
        d: 1697989125e3,
        c: '数据结构与算法',
        g: '树',
        e: '简介 一种分层数据的抽象模型 js 中没有树，但是可以用Object和`Array构建树 树的常用操作：深度/广度优先遍历,先中后序遍历 深度与广度优先遍历 深度优先遍历 尽可能深的搜索树的分支 深度优先遍历 深度优先遍历算法口诀： 访问根节点 对根节点的children挨个进行深度优先遍历。 深度优先遍历 dfs 广度优先遍历 先访问离根节点最近的节...',
        r: { minutes: 8.33, words: 2499 },
        y: 'a',
        t: '树'
      },
      [
        '/前端开发/前端进阶/数据结构算法/树.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E6%A0%91',
        '/前端开发/前端进阶/数据结构算法/树.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E6%A0%91.md'
      ]
    ],
    [
      'v-61c295f3',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E9%93%BE%E8%A1%A8.html',
      {
        d: 1697989125e3,
        c: '数据结构与算法',
        g: '链表',
        e: '简介 注意 链表头就是一个链表，因为链表是一个串，你拿起来头，自然拿起来一串 多个元素组成的列表。 元素存储不连续，用 next 指针连在一起。 链表1 在数组中增删非首尾元素时往往需要移动元素，链表在增删非首尾元素，不需要移动元素，只需要更改 next 的指向即可。 js 中没有链表，需要用 Object 模拟: LeetCode：237.删除链表中...',
        r: { minutes: 6.33, words: 1900 },
        y: 'a',
        t: '链表'
      },
      [
        '/前端开发/前端进阶/数据结构算法/链表.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E9%93%BE%E8%A1%A8',
        '/前端开发/前端进阶/数据结构算法/链表.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E9%93%BE%E8%A1%A8.md'
      ]
    ],
    [
      'v-5ba50a24',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E9%98%9F%E5%88%97.html',
      {
        d: 1697989125e3,
        c: '数据结构与算法',
        g: '队列',
        e: '简介 一个先进先出的数据结构; JavaScript 中没有队列，但可以用 Array 实现队列的所有功能。; 应用场景 需要先进先出的场景，比如：食堂排队打饭、JS 异步中的任务队列、计算最近请求次数。 最近的请求次数 LeetCode：933. 最近的请求次数 (https://leetcode-cn.com/problems/number-of-...',
        r: { minutes: 1.43, words: 429 },
        y: 'a',
        t: '队列'
      },
      [
        '/前端开发/前端进阶/数据结构算法/队列.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E9%98%9F%E5%88%97',
        '/前端开发/前端进阶/数据结构算法/队列.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E9%98%9F%E5%88%97.md'
      ]
    ],
    [
      'v-adf81840',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E9%9B%86%E5%90%88.html',
      {
        d: 1697989125e3,
        c: '数据结构与算法',
        g: '集合',
        e: '简介 一种无序且唯一的数据结构 ES6中有集合，名为Set 集合的常用操作：去重、判断某元素是否在集合中、求交集 LeetCode：349. 两个数组的交集 [349. 两个数组的交集 (https://leetcode-cn.com/problems/intersection-of-two-arrays/)](https://leetcode-cn....',
        r: { minutes: 1.34, words: 401 },
        y: 'a',
        t: '集合'
      },
      [
        '/前端开发/前端进阶/数据结构算法/集合.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E9%9B%86%E5%90%88',
        '/前端开发/前端进阶/数据结构算法/集合.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/%E9%9B%86%E5%90%88.md'
      ]
    ],
    [
      'v-3cbc3bf2',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E7%9A%84%E4%BD%BF%E7%94%A8vue_Dcloud%EF%BC%88Hbuild%EF%BC%89%E5%BC%80%E5%8F%91%E6%B7%B7%E5%90%88app.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['前端进阶'],
        g: '移动开发',
        e: 'webpack-dev-middleware-hard-disk 插件 可以利用这个插件在运行 dev 的时候生成物理文件。 ##### 首先现在项目中安装一下该插件，npm i --save-dev webpack-dev-middleware-hard-disk。然后只需要在项目 build/webpack.dev.conf.js 中添加下面这段代...',
        r: { minutes: 9.43, words: 2828 },
        y: 'a',
        t: '如何优雅的使用vue+Dcloud（Hbuild）开发混合app'
      },
      [
        '/前端开发/前端进阶/移动开发/如何优雅的使用vue_Dcloud（Hbuild）开发混合app.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E7%9A%84%E4%BD%BF%E7%94%A8vue_Dcloud%EF%BC%88Hbuild%EF%BC%89%E5%BC%80%E5%8F%91%E6%B7%B7%E5%90%88app',
        '/前端开发/前端进阶/移动开发/如何优雅的使用vue+Dcloud（Hbuild）开发混合app.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E7%9A%84%E4%BD%BF%E7%94%A8vue+Dcloud%EF%BC%88Hbuild%EF%BC%89%E5%BC%80%E5%8F%91%E6%B7%B7%E5%90%88app.html',
        '/前端开发/前端进阶/移动开发/如何优雅的使用vue+Dcloud（Hbuild）开发混合app.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E7%9A%84%E4%BD%BF%E7%94%A8vue+Dcloud%EF%BC%88Hbuild%EF%BC%89%E5%BC%80%E5%8F%91%E6%B7%B7%E5%90%88app.md'
      ]
    ],
    [
      'v-8624ebe2',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E6%89%93%E5%8C%85app.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['前端进阶'],
        g: '移动开发',
        e: '1.hbuilder 如果使用苹果证书，这里推荐一个申请 iOS 证书的工具 Appuploader。免苹果付费开发者账号，直接使用普通苹果 id，就能使用 Appuploader 申请 ios 测试证书，打包 ipa 安装到非越狱设备。 工具的安装网址：Appuploader 安装 (http://www.applicationloader.net/...',
        r: { minutes: 2.26, words: 678 },
        y: 'a',
        t: '打包app'
      },
      [
        '/前端开发/前端进阶/移动开发/打包app.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E6%89%93%E5%8C%85app',
        '/前端开发/前端进阶/移动开发/打包app.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E6%89%93%E5%8C%85app.md'
      ]
    ],
    [
      'v-1d357774',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E7%A7%BB%E5%8A%A8Web.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['前端进阶'],
        g: '移动开发',
        e: '一个标准流的盒子，如果不写 width，添加 padding margin border 不会撑大盒子 1.视口属性说明 属性 参数 说明 ------------- --------------------------- -------------------------- width device-width 设备的宽度 设置视口的大小 initi...',
        r: { minutes: 29.62, words: 8885 },
        y: 'a',
        t: '移动Web'
      },
      [
        '/前端开发/前端进阶/移动开发/移动Web.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E7%A7%BB%E5%8A%A8Web',
        '/前端开发/前端进阶/移动开发/移动Web.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E7%A7%BB%E5%8A%A8Web.md'
      ]
    ],
    [
      'v-6bf2c5ad',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E7%A7%BB%E5%8A%A8Web%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.html',
      {
        d: 1697989125e3,
        c: ['移动开发'],
        g: '移动Web',
        e: '参考文章 作为前端，你应该了解的分辨率/逻辑像素/物理像素/retina 屏知识 🧐 (https://juejin.cn/post/6918323869824909319) 移动 Web 开发基础知识 基本概念 分辨率 分类 设备分辨率：适用于电子屏幕,设备分辨率反映了硬件设备处理图像时的效果是否细腻（别名：显示器分辨率，`屏幕分辨率，物理分辨率）...',
        r: { minutes: 5.95, words: 1785 },
        y: 'a',
        t: '移动Web开发入门'
      },
      [
        '/前端开发/前端进阶/移动开发/移动Web开发入门.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E7%A7%BB%E5%8A%A8Web%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8',
        '/前端开发/前端进阶/移动开发/移动Web开发入门.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E7%A7%BB%E5%8A%A8Web%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.md'
      ]
    ],
    [
      'v-7da81af2',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E7%9C%9F%E6%9C%BA%E8%B0%83%E8%AF%95spy-debugger.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: ['前端进阶'],
        g: '移动开发',
        e: '1.安装 Windows 下 npm install spy-debugger -g Mac 下 sudo npm install spy-debugger -g 2.使用 第一步：手机和 PC 保持在同一网络下（比如同时连到一个 Wi-Fi 下）; 第二步：命令行输入 spy-debugger，按命令行提示用浏览器打开相应地址。; 第三步：设置手机的...',
        r: { minutes: 1.49, words: 448 },
        y: 'a',
        t: '移动端真机调试spy-debugger'
      },
      [
        '/前端开发/前端进阶/移动开发/移动端真机调试spy-debugger.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E7%9C%9F%E6%9C%BA%E8%B0%83%E8%AF%95spy-debugger',
        '/前端开发/前端进阶/移动开发/移动端真机调试spy-debugger.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E7%9C%9F%E6%9C%BA%E8%B0%83%E8%AF%95spy-debugger.md'
      ]
    ],
    [
      'v-7520a2b4',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E9%87%8D%E5%AD%A6%E5%89%8D%E7%AB%AF/JavaScript.html',
      {
        d: 1697989125e3,
        c: ['重学前端'],
        g: 'JavaScript',
        e: '文档正在编辑中......',
        r: { minutes: 0.06, words: 17 },
        y: 'a',
        t: 'JavaScript'
      },
      [
        '/前端开发/前端进阶/重学前端/JavaScript.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E9%87%8D%E5%AD%A6%E5%89%8D%E7%AB%AF/JavaScript',
        '/前端开发/前端进阶/重学前端/JavaScript.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E9%87%8D%E5%AD%A6%E5%89%8D%E7%AB%AF/JavaScript.md'
      ]
    ],
    [
      'v-4c4a259d',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/nest/',
      {
        d: 1697989125e3,
        r: { minutes: 0.02, words: 6 },
        y: 'a',
        t: 'Nest',
        i: 'nest'
      },
      [
        '/后端开发/node/nest/',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/nest/index.html',
        '/后端开发/node/nest/README.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/nest/README.md'
      ]
    ],
    [
      'v-15875df2',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/nest/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.html',
      {
        d: 1697989125e3,
        c: ['node技术栈', 'nest'],
        e: '官方文档 nestjsV9 (https://docs.nestjs.cn/9/introduction) 全局安装 nest 脚手架 当前版本:9.1.5 创建 nest 项目 常用终端命令',
        r: { minutes: 0.19, words: 57 },
        y: 'a',
        t: '开发环境搭建',
        O: 1
      },
      [
        '/后端开发/node/nest/开发环境搭建.html',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/nest/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA',
        '/后端开发/node/nest/开发环境搭建.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/nest/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.md'
      ]
    ],
    [
      'v-5363f5e2',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/nest/%E7%BC%96%E7%A8%8B%E6%80%9D%E6%83%B3.html',
      {
        d: 1697989125e3,
        c: ['node技术栈', 'nest'],
        e: 'OOP OOP面向对象编程 抽象事物特征；高内聚低耦合 特点：封装、继承、多态 FP FP函数式编程 (https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/) 特点：确定的输入、输出；没有副作用，相对独立（vue、react开发思想） FRP FRP函数响应式编程 适合...',
        r: { minutes: 1.46, words: 439 },
        y: 'a',
        t: '编程思想',
        O: 2
      },
      [
        '/后端开发/node/nest/编程思想.html',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/nest/%E7%BC%96%E7%A8%8B%E6%80%9D%E6%83%B3',
        '/后端开发/node/nest/编程思想.md',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/node/nest/%E7%BC%96%E7%A8%8B%E6%80%9D%E6%83%B3.md'
      ]
    ],
    [
      'v-5e0c8ca6',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/Next.js/',
      {
        d: 1697989125e3,
        e: '123',
        r: { minutes: 0.03, words: 10 },
        y: 'a',
        t: 'Next.js',
        i: 'vercel'
      },
      [
        '/前端开发/前端框架/React/Next.js/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/Next.js/index.html',
        '/前端开发/前端框架/React/Next.js/README.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/Next.js/README.md'
      ]
    ],
    [
      'v-1a302d61',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/Next.js/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'Next.js'],
        e: '[[toc]] 开始 (https://nextjs.org/learn/basics/create-nextjs-app) 服务器渲染 客户端渲染 预渲染',
        r: { minutes: 0.11, words: 33 },
        y: 'a',
        t: '基础知识',
        O: 1
      },
      [
        '/前端开发/前端框架/React/Next.js/基础知识.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/Next.js/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86',
        '/前端开发/前端框架/React/Next.js/基础知识.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/Next.js/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md'
      ]
    ],
    [
      'v-744d79a4',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/Next.js/%E5%AE%98%E7%BD%91%E5%8D%9A%E5%AE%A2%E6%A1%88%E4%BE%8B%E5%AE%9E%E7%8E%B0.html',
      {
        d: 1697989125e3,
        c: ['前端框架', 'Next.js'],
        r: { minutes: 0.06, words: 17 },
        y: 'a',
        t: '官网博客案例实现',
        O: 2
      },
      [
        '/前端开发/前端框架/React/Next.js/官网博客案例实现.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/Next.js/%E5%AE%98%E7%BD%91%E5%8D%9A%E5%AE%A2%E6%A1%88%E4%BE%8B%E5%AE%9E%E7%8E%B0',
        '/前端开发/前端框架/React/Next.js/官网博客案例实现.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/Next.js/%E5%AE%98%E7%BD%91%E5%8D%9A%E5%AE%A2%E6%A1%88%E4%BE%8B%E5%AE%9E%E7%8E%B0.md'
      ]
    ],
    [
      'v-346dd858',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/ReactNative/',
      {
        d: 1697989125e3,
        r: { minutes: 0.02, words: 7 },
        y: 'a',
        t: 'React Native',
        i: 'react'
      },
      [
        '/前端开发/前端进阶/移动开发/ReactNative/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/ReactNative/index.html',
        '/前端开发/前端进阶/移动开发/ReactNative/README.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/ReactNative/README.md'
      ]
    ],
    [
      'v-a6a85388',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/ReactNative/React-Native.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: '前端进阶',
        g: ['移动开发', 'ReactNative'],
        e: '谁在用 React Native 学习资源 移动 App 移动 App 开发：开发能够运行在移动终端（手机、pad、watch 等便携移动设备）中的应用程序(Application); 主流移动设备操作系统：Android、iOS（其他：塞班、WindowPhone、黑莓）; 背景介绍 Wap：早期手机浏览的网站（浏览器），因为手机屏幕小，处理能力小，...',
        r: { minutes: 45.42, words: 13626 },
        y: 'a',
        t: 'React-Native'
      },
      [
        '/前端开发/前端进阶/移动开发/ReactNative/React-Native.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/ReactNative/React-Native',
        '/前端开发/前端进阶/移动开发/ReactNative/React-Native.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/ReactNative/React-Native.md'
      ]
    ],
    [
      'v-2ba61c6e',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/ReactNative/React-Native%E6%80%BB%E7%BB%93.html',
      {
        d: 15336864e5,
        l: '2018年8月8日',
        c: '前端进阶',
        g: ['移动开发', 'ReactNative'],
        e: "1.windows-bug 启动不成功--清除 andriod 残余文件 cd android; gradlew clean; 2.View Style 支持 Flexbox、ShadowPropTypesIOS、Transforms 属性。 背面可见性 backfaceVisibility enum('visible', 'hidden'); 背景颜...",
        r: { minutes: 4.03, words: 1208 },
        y: 'a',
        t: 'React-Native总结'
      },
      [
        '/前端开发/前端进阶/移动开发/ReactNative/React-Native总结.html',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/ReactNative/React-Native%E6%80%BB%E7%BB%93',
        '/前端开发/前端进阶/移动开发/ReactNative/React-Native总结.md',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/ReactNative/React-Native%E6%80%BB%E7%BB%93.md'
      ]
    ],
    ['v-3706649a', '/404.html', { y: 'p', t: '' }, ['/404']],
    [
      'v-27b49013',
      '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/',
      { y: 'p', t: '面经指南' },
      ['/面经指南/', '/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/index.html']
    ],
    [
      'v-c27f24fc',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/',
      { y: 'p', t: '代码规范' },
      [
        '/前端开发/代码规范/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/index.html'
      ]
    ],
    [
      'v-9fb81952',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/',
      { y: 'p', t: '前端图形' },
      [
        '/前端开发/前端图形/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/index.html'
      ]
    ],
    [
      'v-57b1bfc1',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/',
      { y: 'p', t: '前端工程化' },
      [
        '/前端开发/前端工程化/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/index.html'
      ]
    ],
    [
      'v-443af0ca',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/',
      { y: 'p', t: '前端进阶' },
      [
        '/前端开发/前端进阶/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/index.html'
      ]
    ],
    [
      'v-60a386e7',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/',
      { y: 'p', t: '转载' },
      [
        '/前端开发/转载/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/index.html'
      ]
    ],
    [
      'v-2c9f8eac',
      '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/',
      { y: 'p', t: '浏览器工作原理与实践' },
      [
        '/基础知识/浏览器工作原理与实践/',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/index.html'
      ]
    ],
    [
      'v-aab4ee98',
      '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%AE%97%E6%B3%95/',
      { y: 'p', t: '算法' },
      [
        '/基础知识/算法/',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%AE%97%E6%B3%95/index.html'
      ]
    ],
    [
      'v-f5b080b0',
      '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/',
      { y: 'p', t: '计算机网络' },
      [
        '/基础知识/计算机网络/',
        '/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/index.html'
      ]
    ],
    [
      'v-4bc3fec0',
      '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/python/',
      { y: 'p', t: 'Python' },
      [
        '/后端开发/python/',
        '/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/python/index.html'
      ]
    ],
    [
      'v-d809e874',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/',
      { y: 'p', t: 'J S' },
      ['/开发日志/JS/', '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/JS/index.html']
    ],
    [
      'v-8b888220',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/React/',
      { y: 'p', t: 'React' },
      [
        '/开发日志/React/',
        '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/React/index.html'
      ]
    ],
    [
      'v-586910ec',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/CSS%E4%B8%96%E7%95%8C%E9%98%85%E8%AF%BB%E7%AC%94%E8%AE%B0/',
      { y: 'p', t: 'C S S世界阅读笔记' },
      [
        '/前端开发/前端图形/CSS世界阅读笔记/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/CSS%E4%B8%96%E7%95%8C%E9%98%85%E8%AF%BB%E7%AC%94%E8%AE%B0/index.html'
      ]
    ],
    [
      'v-2927306e',
      '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/',
      { y: 'p', t: 'Vue' },
      ['/开发日志/Vue/', '/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/index.html']
    ],
    [
      'v-c321bac0',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/canvas/',
      { y: 'p', t: 'Canvas' },
      [
        '/前端开发/前端图形/canvas/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/canvas/index.html'
      ]
    ],
    [
      'v-9d672a38',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/%E7%8E%A9%E8%BD%ACCSS%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/',
      { y: 'p', t: '玩转 C S S艺术之美' },
      [
        '/前端开发/前端图形/玩转CSS艺术之美/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/%E7%8E%A9%E8%BD%ACCSS%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/index.html'
      ]
    ],
    [
      'v-0660c8a7',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/',
      { y: 'p', t: 'C S S3' },
      [
        '/前端开发/前端基石/CSS3/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/index.html'
      ]
    ],
    [
      'v-b6e98450',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/',
      { y: 'p', t: '前端基石' },
      [
        '/前端开发/前端基石/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/index.html'
      ]
    ],
    [
      'v-63677946',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/',
      { y: 'p', t: 'H T M L5' },
      [
        '/前端开发/前端基石/HTML5/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/HTML5/index.html'
      ]
    ],
    [
      'v-03374f16',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/',
      { y: 'p', t: 'J S基础' },
      [
        '/前端开发/前端基石/JS基础/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/index.html'
      ]
    ],
    [
      'v-d82043fc',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/',
      { y: 'p', t: 'E S6' },
      [
        '/前端开发/前端进阶/ES6/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/index.html'
      ]
    ],
    [
      'v-5ecb563f',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/',
      { y: 'p', t: '移动开发' },
      [
        '/前端开发/前端进阶/移动开发/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/index.html'
      ]
    ],
    [
      'v-22af1d98',
      '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E9%87%8D%E5%AD%A6%E5%89%8D%E7%AB%AF/',
      { y: 'p', t: '重学前端' },
      [
        '/前端开发/前端进阶/重学前端/',
        '/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E9%87%8D%E5%AD%A6%E5%89%8D%E7%AB%AF/index.html'
      ]
    ],
    [
      'v-5bc93818',
      '/category/',
      { y: 'p', t: '分类', I: 0 },
      ['/category/index.html']
    ],
    ['v-744d024e', '/tag/', { y: 'p', t: '标签', I: 0 }, ['/tag/index.html']],
    [
      'v-e52c881c',
      '/article/',
      { y: 'p', t: '文章', I: 0 },
      ['/article/index.html']
    ],
    ['v-154dc4c4', '/star/', { y: 'p', t: '收藏', I: 0 }, ['/star/index.html']],
    [
      'v-01560935',
      '/timeline/',
      { y: 'p', t: '时间轴', I: 0 },
      ['/timeline/index.html']
    ],
    [
      'v-3fe1292c',
      '/category/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/',
      { y: 'p', t: '基础知识 分类', I: 0 },
      [
        '/category/基础知识/',
        '/category/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/index.html'
      ]
    ],
    [
      'v-288e4719',
      '/tag/http/',
      { y: 'p', t: 'HTTP 标签', I: 0 },
      ['/tag/http/index.html']
    ],
    [
      'v-926502fe',
      '/category/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/',
      { y: 'p', t: '开发日志 分类', I: 0 },
      [
        '/category/开发日志/',
        '/category/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/index.html'
      ]
    ],
    [
      'v-2826d081',
      '/tag/ajax/',
      { y: 'p', t: 'Ajax 标签', I: 0 },
      ['/tag/ajax/index.html']
    ],
    [
      'v-7d0e6254',
      '/category/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/',
      { y: 'p', t: '面经指南 分类', I: 0 },
      [
        '/category/面经指南/',
        '/category/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/index.html'
      ]
    ],
    [
      'v-4507db72',
      '/tag/axios/',
      { y: 'p', t: 'axios 标签', I: 0 },
      ['/tag/axios/index.html']
    ],
    [
      'v-006f9769',
      '/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/',
      { y: 'p', t: '前端开发 分类', I: 0 },
      [
        '/category/前端开发/',
        '/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/index.html'
      ]
    ],
    [
      'v-2cc9ac3d',
      '/tag/cookie/',
      { y: 'p', t: 'Cookie 标签', I: 0 },
      ['/tag/cookie/index.html']
    ],
    [
      'v-eafad332',
      '/category/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/',
      { y: 'p', t: '前端图形 分类', I: 0 },
      [
        '/category/前端图形/',
        '/category/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/index.html'
      ]
    ],
    [
      'v-4ac2fdf1',
      '/tag/localstorage/',
      { y: 'p', t: 'localStorage 标签', I: 0 },
      ['/tag/localstorage/index.html']
    ],
    [
      'v-8f7daaaa',
      '/category/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/',
      { y: 'p', t: '前端进阶 分类', I: 0 },
      [
        '/category/前端进阶/',
        '/category/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/index.html'
      ]
    ],
    [
      'v-59401cc8',
      '/tag/sessionstorage/',
      { y: 'p', t: 'sessionStorage 标签', I: 0 },
      ['/tag/sessionstorage/index.html']
    ],
    [
      'v-63806412',
      '/category/%E8%BD%AC%E8%BD%BD/',
      { y: 'p', t: '转载 分类', I: 0 },
      ['/category/转载/', '/category/%E8%BD%AC%E8%BD%BD/index.html']
    ],
    [
      'v-97aefb08',
      '/tag/%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/',
      { y: 'p', t: '项目总结 标签', I: 0 },
      ['/tag/项目总结/', '/tag/%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/index.html']
    ],
    [
      'v-4088415f',
      '/category/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/',
      { y: 'p', t: '浏览器工作原理与实践 分类', I: 0 },
      [
        '/category/浏览器工作原理与实践/',
        '/category/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/index.html'
      ]
    ],
    [
      'v-b302da92',
      '/tag/vue/',
      { y: 'p', t: 'Vue 标签', I: 0 },
      ['/tag/vue/index.html']
    ],
    [
      'v-227ecbd6',
      '/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/',
      { y: 'p', t: '计算机网络 分类', I: 0 },
      [
        '/category/计算机网络/',
        '/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/index.html'
      ]
    ],
    [
      'v-3d7e901c',
      '/tag/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/',
      { y: 'p', t: '代码规范 标签', I: 0 },
      ['/tag/代码规范/', '/tag/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/index.html']
    ],
    [
      'v-44360dd8',
      '/category/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/',
      { y: 'p', t: '后端开发 分类', I: 0 },
      [
        '/category/后端开发/',
        '/category/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/index.html'
      ]
    ],
    [
      'v-286e3dc8',
      '/tag/flex/',
      { y: 'p', t: 'Flex 标签', I: 0 },
      ['/tag/flex/index.html']
    ],
    [
      'v-4d852ace',
      '/category/node%E6%8A%80%E6%9C%AF%E6%A0%88/',
      { y: 'p', t: 'node技术栈 分类', I: 0 },
      [
        '/category/node技术栈/',
        '/category/node%E6%8A%80%E6%9C%AF%E6%A0%88/index.html'
      ]
    ],
    [
      'v-2920a333',
      '/tag/sass/',
      { y: 'p', t: 'Sass 标签', I: 0 },
      ['/tag/sass/index.html']
    ],
    [
      'v-5e0b61bd',
      '/category/%E6%95%B0%E6%8D%AE%E5%BA%93/',
      { y: 'p', t: '数据库 分类', I: 0 },
      ['/category/数据库/', '/category/%E6%95%B0%E6%8D%AE%E5%BA%93/index.html']
    ],
    [
      'v-23e7ea67',
      '/tag/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/',
      { y: 'p', t: '前端工程化 标签', I: 0 },
      [
        '/tag/前端工程化/',
        '/tag/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/index.html'
      ]
    ],
    [
      'v-4bc03a0c',
      '/category/%E6%9D%82%E8%AE%B0/',
      { y: 'p', t: '杂记 分类', I: 0 },
      ['/category/杂记/', '/category/%E6%9D%82%E8%AE%B0/index.html']
    ],
    [
      'v-eb686fe0',
      '/tag/%E9%9A%8F%E7%AC%94/',
      { y: 'p', t: '随笔 标签', I: 0 },
      ['/tag/随笔/', '/tag/%E9%9A%8F%E7%AC%94/index.html']
    ],
    [
      'v-65f270d8',
      '/category/mac/',
      { y: 'p', t: 'mac 分类', I: 0 },
      ['/category/mac/index.html']
    ],
    [
      'v-37fc715f',
      '/tag/chrome%E6%9E%B6%E6%9E%84/',
      { y: 'p', t: 'chrome架构 标签', I: 0 },
      ['/tag/chrome架构/', '/tag/chrome%E6%9E%B6%E6%9E%84/index.html']
    ],
    [
      'v-137f2c63',
      '/category/switch/',
      { y: 'p', t: 'switch 分类', I: 0 },
      ['/category/switch/index.html']
    ],
    [
      'v-2687e471',
      '/tag/%E7%AE%97%E6%B3%95/',
      { y: 'p', t: '算法 标签', I: 0 },
      ['/tag/算法/', '/tag/%E7%AE%97%E6%B3%95/index.html']
    ],
    [
      'v-7cda78cb',
      '/category/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/',
      { y: 'p', t: '开发工具 分类', I: 0 },
      [
        '/category/开发工具/',
        '/category/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/index.html'
      ]
    ],
    [
      'v-28e050df',
      '/tag/node/',
      { y: 'p', t: 'node 标签', I: 0 },
      ['/tag/node/index.html']
    ],
    [
      'v-0fd59de4',
      '/category/%E6%80%BB%E7%BB%93/',
      { y: 'p', t: '总结 分类', I: 0 },
      ['/category/总结/', '/category/%E6%80%BB%E7%BB%93/index.html']
    ],
    [
      'v-b30a441c',
      '/tag/npm/',
      { y: 'p', t: 'npm 标签', I: 0 },
      ['/tag/npm/index.html']
    ],
    [
      'v-5fb2089c',
      '/category/%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0/',
      { y: 'p', t: '开发笔记 分类', I: 0 },
      [
        '/category/开发笔记/',
        '/category/%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0/index.html'
      ]
    ],
    [
      'v-29752bdd',
      '/tag/yarn/',
      { y: 'p', t: 'yarn 标签', I: 0 },
      ['/tag/yarn/index.html']
    ],
    [
      'v-65ee2aa4',
      '/category/css/',
      { y: 'p', t: 'CSS 分类', I: 0 },
      ['/category/css/index.html']
    ],
    [
      'v-89f348a6',
      '/tag/commonjs/',
      { y: 'p', t: 'commonJs 标签', I: 0 },
      ['/tag/commonjs/index.html']
    ],
    [
      'v-3d184cee',
      '/category/js/',
      { y: 'p', t: 'JS 分类', I: 0 },
      ['/category/js/index.html']
    ],
    [
      'v-b30a3518',
      '/tag/nrm/',
      { y: 'p', t: 'nrm 标签', I: 0 },
      ['/tag/nrm/index.html']
    ],
    [
      'v-884bc6b0',
      '/category/react/',
      { y: 'p', t: 'React 分类', I: 0 },
      ['/category/react/index.html']
    ],
    [
      'v-b30a1710',
      '/tag/nvm/',
      { y: 'p', t: 'nvm 标签', I: 0 },
      ['/tag/nvm/index.html']
    ],
    [
      'v-119178eb',
      '/category/css%E4%B8%96%E7%95%8C%E9%98%85%E8%AF%BB%E7%AC%94%E8%AE%B0/',
      { y: 'p', t: 'CSS世界阅读笔记 分类', I: 0 },
      [
        '/category/css世界阅读笔记/',
        '/category/css%E4%B8%96%E7%95%8C%E9%98%85%E8%AF%BB%E7%AC%94%E8%AE%B0/index.html'
      ]
    ],
    [
      'v-245f5676',
      '/tag/python/',
      { y: 'p', t: 'python 标签', I: 0 },
      ['/tag/python/index.html']
    ],
    [
      'v-65f6d381',
      '/category/vue/',
      { y: 'p', t: 'Vue 分类', I: 0 },
      ['/category/vue/index.html']
    ],
    [
      'v-794d224b',
      '/tag/mongodb/',
      { y: 'p', t: 'MongoDB 标签', I: 0 },
      ['/tag/mongodb/index.html']
    ],
    [
      'v-58e39d2b',
      '/category/vue2/',
      { y: 'p', t: 'Vue2 分类', I: 0 },
      ['/category/vue2/index.html']
    ],
    [
      'v-9f472498',
      '/tag/mongoose/',
      { y: 'p', t: 'mongoose 标签', I: 0 },
      ['/tag/mongoose/index.html']
    ],
    [
      'v-442fcfc0',
      '/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91---%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2---three.js/',
      { y: 'p', t: '前端开发 - 前端图形 - Three.js 分类', I: 0 },
      [
        '/category/前端开发---前端图形---three.js/',
        '/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91---%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2---three.js/index.html'
      ]
    ],
    [
      'v-1bee38ca',
      '/tag/mysql/',
      { y: 'p', t: 'mysql 标签', I: 0 },
      ['/tag/mysql/index.html']
    ],
    [
      'v-c04f9a82',
      '/category/canvas/',
      { y: 'p', t: 'Canvas 分类', I: 0 },
      ['/category/canvas/index.html']
    ],
    [
      'v-788be0b2',
      '/category/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2---%E7%8E%A9%E8%BD%ACcss%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/',
      { y: 'p', t: '前端图形 - 玩转CSS艺术之美 分类', I: 0 },
      [
        '/category/前端图形---玩转css艺术之美/',
        '/category/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2---%E7%8E%A9%E8%BD%ACcss%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/index.html'
      ]
    ],
    [
      'v-590addf8',
      '/tag/%E6%97%A5%E5%B8%B8/',
      { y: 'p', t: '日常 标签', I: 0 },
      ['/tag/日常/', '/tag/%E6%97%A5%E5%B8%B8/index.html']
    ],
    [
      'v-b356b776',
      '/category/%E7%8E%A9%E8%BD%ACcss%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/',
      { y: 'p', t: '玩转CSS艺术之美 分类', I: 0 },
      [
        '/category/玩转css艺术之美/',
        '/category/%E7%8E%A9%E8%BD%ACcss%E8%89%BA%E6%9C%AF%E4%B9%8B%E7%BE%8E/index.html'
      ]
    ],
    [
      'v-b7762ed0',
      '/tag/%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F/',
      { y: 'p', t: '严格模式 标签', I: 0 },
      ['/tag/严格模式/', '/tag/%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F/index.html']
    ],
    [
      'v-7ee9e0e8',
      '/category/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/',
      { y: 'p', t: '前端基石 分类', I: 0 },
      [
        '/category/前端基石/',
        '/category/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/index.html'
      ]
    ],
    [
      'v-180d5090',
      '/tag/%E9%97%AD%E5%8C%85/',
      { y: 'p', t: '闭包 标签', I: 0 },
      ['/tag/闭包/', '/tag/%E9%97%AD%E5%8C%85/index.html']
    ],
    [
      'v-57d72a87',
      '/category/css3/',
      { y: 'p', t: 'CSS3 分类', I: 0 },
      ['/category/css3/index.html']
    ],
    [
      'v-fd152726',
      '/tag/elementui/',
      { y: 'p', t: 'elementUI 标签', I: 0 },
      ['/tag/elementui/index.html']
    ],
    [
      'v-35bc8e54',
      '/category/js%E5%9F%BA%E7%A1%80/',
      { y: 'p', t: 'JS基础 分类', I: 0 },
      ['/category/js基础/', '/category/js%E5%9F%BA%E7%A1%80/index.html']
    ],
    [
      'v-2953c4b5',
      '/tag/vue2/',
      { y: 'p', t: 'vue2 标签', I: 0 },
      ['/tag/vue2/index.html']
    ],
    [
      'v-06ebc23c',
      '/category/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/',
      { y: 'p', t: '前端框架 分类', I: 0 },
      [
        '/category/前端框架/',
        '/category/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/index.html'
      ]
    ],
    [
      'v-2953c4d4',
      '/tag/vue3/',
      { y: 'p', t: 'vue3 标签', I: 0 },
      ['/tag/vue3/index.html']
    ],
    [
      'v-bc7b9816',
      '/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91---%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6---js%E9%AB%98%E7%BA%A7/',
      { y: 'p', t: '前端开发 - 前端进阶 - JS高级 分类', I: 0 },
      [
        '/category/前端开发---前端进阶---js高级/',
        '/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91---%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6---js%E9%AB%98%E7%BA%A7/index.html'
      ]
    ],
    [
      'v-6e3f2a98',
      '/tag/%E5%8E%9F%E7%90%86/',
      { y: 'p', t: '原理 标签', I: 0 },
      ['/tag/原理/', '/tag/%E5%8E%9F%E7%90%86/index.html']
    ],
    [
      'v-65ef0bff',
      '/category/es6/',
      { y: 'p', t: 'ES6 分类', I: 0 },
      ['/category/es6/index.html']
    ],
    [
      'v-962e227a',
      '/tag/echarts/',
      { y: 'p', t: 'echarts 标签', I: 0 },
      ['/tag/echarts/index.html']
    ],
    [
      'v-15c34810',
      '/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91---%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6---typescript/',
      { y: 'p', t: '前端开发 - 前端进阶 - TypeScript 分类', I: 0 },
      [
        '/category/前端开发---前端进阶---typescript/',
        '/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91---%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6---typescript/index.html'
      ]
    ],
    [
      'v-0842592c',
      '/tag/lodash/',
      { y: 'p', t: 'lodash 标签', I: 0 },
      ['/tag/lodash/index.html']
    ],
    [
      'v-5c5af6a7',
      '/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/',
      { y: 'p', t: '数据结构与算法 分类', I: 0 },
      [
        '/category/数据结构与算法/',
        '/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/index.html'
      ]
    ],
    [
      'v-0083498e',
      '/tag/vite3/',
      { y: 'p', t: 'vite3 标签', I: 0 },
      ['/tag/vite3/index.html']
    ],
    [
      'v-06be9332',
      '/category/%E7%AE%97%E6%B3%95/',
      { y: 'p', t: '算法 分类', I: 0 },
      ['/category/算法/', '/category/%E7%AE%97%E6%B3%95/index.html']
    ],
    [
      'v-1378dfa0',
      '/tag/pinia/',
      { y: 'p', t: 'Pinia 标签', I: 0 },
      ['/tag/pinia/index.html']
    ],
    [
      'v-34ef3fac',
      '/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/',
      { y: 'p', t: '数据结构算法 分类', I: 0 },
      [
        '/category/数据结构算法/',
        '/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95/index.html'
      ]
    ],
    [
      'v-0ceffcb2',
      '/tag/elementplus/',
      { y: 'p', t: 'ElementPlus 标签', I: 0 },
      ['/tag/elementplus/index.html']
    ],
    [
      'v-09a91fe2',
      '/category/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/',
      { y: 'p', t: '移动开发 分类', I: 0 },
      [
        '/category/移动开发/',
        '/category/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/index.html'
      ]
    ],
    [
      'v-294e8ebd',
      '/tag/vite/',
      { y: 'p', t: 'vite 标签', I: 0 },
      ['/tag/vite/index.html']
    ],
    [
      'v-64e6318a',
      '/category/%E9%87%8D%E5%AD%A6%E5%89%8D%E7%AB%AF/',
      { y: 'p', t: '重学前端 分类', I: 0 },
      [
        '/category/重学前端/',
        '/category/%E9%87%8D%E5%AD%A6%E5%89%8D%E7%AB%AF/index.html'
      ]
    ],
    [
      'v-3fb58c9e',
      '/tag/vue-router/',
      { y: 'p', t: 'Vue-Router 标签', I: 0 },
      ['/tag/vue-router/index.html']
    ],
    [
      'v-586bd7bf',
      '/category/nest/',
      { y: 'p', t: 'nest 分类', I: 0 },
      ['/category/nest/index.html']
    ],
    [
      'v-0dc7daa4',
      '/tag/rabc%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/',
      { y: 'p', t: 'RABC后台管理系统 标签', I: 0 },
      [
        '/tag/rabc后台管理系统/',
        '/tag/rabc%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/index.html'
      ]
    ],
    [
      'v-935e02ba',
      '/category/next.js/',
      { y: 'p', t: 'Next.js 分类', I: 0 },
      ['/category/next.js/index.html']
    ],
    [
      'v-57f72af1',
      '/tag/canvas%E5%9F%BA%E7%A1%80/',
      { y: 'p', t: 'Canvas基础 标签', I: 0 },
      ['/tag/canvas基础/', '/tag/canvas%E5%9F%BA%E7%A1%80/index.html']
    ],
    [
      'v-28475211',
      '/tag/css3/',
      { y: 'p', t: 'CSS3 标签', I: 0 },
      ['/tag/css3/index.html']
    ],
    [
      'v-2d91415a',
      '/tag/html5/',
      { y: 'p', t: 'HTML5 标签', I: 0 },
      ['/tag/html5/index.html']
    ],
    [
      'v-31f58c60',
      '/tag/js%E5%9F%BA%E7%A1%80/',
      { y: 'p', t: 'JS基础 标签', I: 0 },
      ['/tag/js基础/', '/tag/js%E5%9F%BA%E7%A1%80/index.html']
    ],
    [
      'v-b3153486',
      '/tag/bom/',
      { y: 'p', t: 'BOM 标签', I: 0 },
      ['/tag/bom/index.html']
    ],
    [
      'v-b313630a',
      '/tag/dom/',
      { y: 'p', t: 'DOM 标签', I: 0 },
      ['/tag/dom/index.html']
    ],
    [
      'v-700e079e',
      '/tag/%E5%87%BD%E6%95%B0/',
      { y: 'p', t: '函数 标签', I: 0 },
      ['/tag/函数/', '/tag/%E5%87%BD%E6%95%B0/index.html']
    ],
    [
      'v-0be95582',
      '/tag/%E5%8F%98%E9%87%8F/',
      { y: 'p', t: '变量 标签', I: 0 },
      ['/tag/变量/', '/tag/%E5%8F%98%E9%87%8F/index.html']
    ],
    [
      'v-aafe73e0',
      '/tag/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/',
      { y: 'p', t: '数据类型 标签', I: 0 },
      ['/tag/数据类型/', '/tag/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/index.html']
    ],
    [
      'v-738ffd67',
      '/tag/%E6%93%8D%E4%BD%9C%E7%AC%A6/',
      { y: 'p', t: '操作符 标签', I: 0 },
      ['/tag/操作符/', '/tag/%E6%93%8D%E4%BD%9C%E7%AC%A6/index.html']
    ],
    [
      'v-f64eddd4',
      '/tag/%E6%95%B0%E7%BB%84/',
      { y: 'p', t: '数组 标签', I: 0 },
      ['/tag/数组/', '/tag/%E6%95%B0%E7%BB%84/index.html']
    ],
    [
      'v-470fd025',
      '/tag/%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95/',
      { y: 'p', t: '数组方法 标签', I: 0 },
      ['/tag/数组方法/', '/tag/%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95/index.html']
    ],
    [
      'v-66f1a1a4',
      '/tag/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/',
      { y: 'p', t: '正则表达式 标签', I: 0 },
      [
        '/tag/正则表达式/',
        '/tag/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/index.html'
      ]
    ],
    [
      'v-51c7cc6e',
      '/tag/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/',
      { y: 'p', t: '流程控制 标签', I: 0 },
      ['/tag/流程控制/', '/tag/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/index.html']
    ],
    [
      'v-b47f1fa2',
      '/tag/%E5%AF%B9%E8%B1%A1/',
      { y: 'p', t: '对象 标签', I: 0 },
      ['/tag/对象/', '/tag/%E5%AF%B9%E8%B1%A1/index.html']
    ],
    [
      'v-c0b6803a',
      '/tag/%E5%8E%9F%E5%9E%8B/',
      { y: 'p', t: '原型 标签', I: 0 },
      ['/tag/原型/', '/tag/%E5%8E%9F%E5%9E%8B/index.html']
    ],
    [
      'v-90f98c8e',
      '/tag/%E5%8E%9F%E5%9E%8B%E9%93%BE/',
      { y: 'p', t: '原型链 标签', I: 0 },
      ['/tag/原型链/', '/tag/%E5%8E%9F%E5%9E%8B%E9%93%BE/index.html']
    ],
    [
      'v-0d223344',
      '/tag/react/',
      { y: 'p', t: 'React 标签', I: 0 },
      ['/tag/react/index.html']
    ],
    [
      'v-3f8dd4f6',
      '/tag/class/',
      { y: 'p', t: 'Class 标签', I: 0 },
      ['/tag/class/index.html']
    ],
    [
      'v-56a27b8a',
      '/tag/es6%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95/',
      { y: 'p', t: 'ES6新增方法 标签', I: 0 },
      [
        '/tag/es6新增方法/',
        '/tag/es6%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95/index.html'
      ]
    ],
    [
      'v-7159b88a',
      '/tag/generator/',
      { y: 'p', t: 'Generator 标签', I: 0 },
      ['/tag/generator/index.html']
    ],
    [
      'v-3d319135',
      '/tag/module/',
      { y: 'p', t: 'Module 标签', I: 0 },
      ['/tag/module/index.html']
    ],
    [
      'v-b3fc6626',
      '/tag/export/',
      { y: 'p', t: 'export 标签', I: 0 },
      ['/tag/export/index.html']
    ],
    [
      'v-42a2b80e',
      '/tag/export-default/',
      { y: 'p', t: 'export default 标签', I: 0 },
      ['/tag/export-default/index.html']
    ],
    [
      'v-51aa3ec2',
      '/tag/promise/',
      { y: 'p', t: 'Promise 标签', I: 0 },
      ['/tag/promise/index.html']
    ],
    [
      'v-2a65b148',
      '/tag/%E5%BC%82%E6%AD%A5/',
      { y: 'p', t: '异步 标签', I: 0 },
      ['/tag/异步/', '/tag/%E5%BC%82%E6%AD%A5/index.html']
    ],
    [
      'v-1279d962',
      '/tag/proxy/',
      { y: 'p', t: 'Proxy 标签', I: 0 },
      ['/tag/proxy/index.html']
    ],
    [
      'v-624fd560',
      '/tag/reflect/',
      { y: 'p', t: 'Reflect 标签', I: 0 },
      ['/tag/reflect/index.html']
    ],
    [
      'v-b306094a',
      '/tag/set/',
      { y: 'p', t: 'Set 标签', I: 0 },
      ['/tag/set/index.html']
    ],
    [
      'v-b30b9cbe',
      '/tag/map/',
      { y: 'p', t: 'Map 标签', I: 0 },
      ['/tag/map/index.html']
    ],
    [
      'v-b30c667c',
      '/tag/let/',
      { y: 'p', t: 'let 标签', I: 0 },
      ['/tag/let/index.html']
    ],
    [
      'v-3f2d760c',
      '/tag/const/',
      { y: 'p', t: 'const 标签', I: 0 },
      ['/tag/const/index.html']
    ],
    [
      'v-1cc2ba94',
      '/tag/%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0/',
      { y: 'p', t: '剩余参数 标签', I: 0 },
      ['/tag/剩余参数/', '/tag/%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0/index.html']
    ],
    [
      'v-302da203',
      '/tag/%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6/',
      { y: 'p', t: '展开运算符 标签', I: 0 },
      [
        '/tag/展开运算符/',
        '/tag/%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6/index.html'
      ]
    ],
    [
      'v-449e8fd4',
      '/tag/%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F/',
      { y: 'p', t: '对象字面量 标签', I: 0 },
      [
        '/tag/对象字面量/',
        '/tag/%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F/index.html'
      ]
    ],
    [
      'v-4e91f925',
      '/tag/%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E9%BB%98%E8%AE%A4%E5%80%BC/',
      { y: 'p', t: '函数参数默认值 标签', I: 0 },
      [
        '/tag/函数参数默认值/',
        '/tag/%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E9%BB%98%E8%AE%A4%E5%80%BC/index.html'
      ]
    ],
    [
      'v-0ac25f49',
      '/tag/%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2/',
      { y: 'p', t: '模板字符串 标签', I: 0 },
      [
        '/tag/模板字符串/',
        '/tag/%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2/index.html'
      ]
    ],
    [
      'v-56b77ef3',
      '/tag/%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0/',
      { y: 'p', t: '箭头函数 标签', I: 0 },
      ['/tag/箭头函数/', '/tag/%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0/index.html']
    ],
    [
      'v-240a4080',
      '/tag/%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC/',
      { y: 'p', t: '解构赋值 标签', I: 0 },
      ['/tag/解构赋值/', '/tag/%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC/index.html']
    ],
    [
      'v-2367f3cb',
      '/tag/%E9%81%8D%E5%8E%86%E5%99%A8/',
      { y: 'p', t: '遍历器 标签', I: 0 },
      ['/tag/遍历器/', '/tag/%E9%81%8D%E5%8E%86%E5%99%A8/index.html']
    ],
    [
      'v-34ece0c6',
      '/tag/forof/',
      { y: 'p', t: 'forof 标签', I: 0 },
      ['/tag/forof/index.html']
    ],
    [
      'v-300d34ce',
      '/tag/%E5%9B%BE/',
      { y: 'p', t: '图 标签', I: 0 },
      ['/tag/图/', '/tag/%E5%9B%BE/index.html']
    ],
    [
      'v-2a810ce3',
      '/tag/%E5%AD%97%E5%85%B8/',
      { y: 'p', t: '字典 标签', I: 0 },
      ['/tag/字典/', '/tag/%E5%AD%97%E5%85%B8/index.html']
    ],
    [
      'v-0b0853ac',
      '/tag/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6/',
      { y: 'p', t: '时间复杂度 标签', I: 0 },
      [
        '/tag/时间复杂度/',
        '/tag/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6/index.html'
      ]
    ],
    [
      'v-405ef958',
      '/tag/%E7%A9%BA%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6/',
      { y: 'p', t: '空间复杂度 标签', I: 0 },
      [
        '/tag/空间复杂度/',
        '/tag/%E7%A9%BA%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6/index.html'
      ]
    ],
    [
      'v-b6d14f14',
      '/tag/%E6%A0%88/',
      { y: 'p', t: '栈 标签', I: 0 },
      ['/tag/栈/', '/tag/%E6%A0%88/index.html']
    ],
    [
      'v-b6d14944',
      '/tag/%E6%A0%91/',
      { y: 'p', t: '树 标签', I: 0 },
      ['/tag/树/', '/tag/%E6%A0%91/index.html']
    ],
    [
      'v-4f1a28a4',
      '/tag/%E9%93%BE%E8%A1%A8/',
      { y: 'p', t: '链表 标签', I: 0 },
      ['/tag/链表/', '/tag/%E9%93%BE%E8%A1%A8/index.html']
    ],
    [
      'v-7d0f4556',
      '/tag/%E9%98%9F%E5%88%97/',
      { y: 'p', t: '队列 标签', I: 0 },
      ['/tag/队列/', '/tag/%E9%98%9F%E5%88%97/index.html']
    ],
    [
      'v-3f698511',
      '/tag/%E9%9B%86%E5%90%88/',
      { y: 'p', t: '集合 标签', I: 0 },
      ['/tag/集合/', '/tag/%E9%9B%86%E5%90%88/index.html']
    ],
    [
      'v-63eec128',
      '/tag/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/',
      { y: 'p', t: '移动开发 标签', I: 0 },
      ['/tag/移动开发/', '/tag/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/index.html']
    ],
    [
      'v-9ed0166a',
      '/tag/%E7%A7%BB%E5%8A%A8web/',
      { y: 'p', t: '移动Web 标签', I: 0 },
      ['/tag/移动web/', '/tag/%E7%A7%BB%E5%8A%A8web/index.html']
    ],
    [
      'v-3b951558',
      '/tag/javascript/',
      { y: 'p', t: 'JavaScript 标签', I: 0 },
      ['/tag/javascript/index.html']
    ],
    [
      'v-b5120c32',
      '/tag/reactnative/',
      { y: 'p', t: 'ReactNative 标签', I: 0 },
      ['/tag/reactnative/index.html']
    ]
  ]
var bl = M({
    name: 'Vuepress',
    setup() {
      const e = z1()
      return () => u(e.value)
    }
  }),
  cv = () =>
    sv.reduce(
      (e, [t, r, n, E]) => (
        e.push(
          { name: t, path: r, component: bl, meta: n },
          ...E.map(o => ({ path: o, redirect: r }))
        ),
        e
      ),
      [{ name: '404', path: '/:catchAll(.*)', component: bl }]
    ),
  uv = d7,
  dv = () => {
    const e = G7({
      history: uv(s8('/')),
      routes: cv(),
      scrollBehavior: (t, r, n) => n || (t.hash ? { el: t.hash } : { top: 0 })
    })
    return (
      e.beforeResolve(async (t, r) => {
        var n
        ;(t.path !== r.path || r === jt) &&
          ([ar.value] = await Promise.all([
            $t.resolvePageData(t.name),
            (n = Gs[t.name]) == null ? void 0 : n.__asyncLoader()
          ]))
      }),
      e
    )
  },
  Av = e => {
    e.component('ClientOnly', co), e.component('Content', n5)
  },
  Bv = (e, t, r) => {
    const n = U(t.currentRoute.value.path)
    ae(
      () => t.currentRoute.value.path,
      B => (n.value = B)
    )
    const E = y(() => $t.resolveLayouts(r)),
      o = y(() => $t.resolveRouteLocale(qr.value.locales, n.value)),
      a = y(() => $t.resolveSiteLocaleData(qr.value, o.value)),
      l = y(() => $t.resolvePageFrontmatter(ar.value)),
      s = y(() => $t.resolvePageHeadTitle(ar.value, a.value)),
      c = y(() => $t.resolvePageHead(s.value, l.value, a.value)),
      d = y(() => $t.resolvePageLang(ar.value)),
      A = y(() => $t.resolvePageLayout(ar.value, E.value))
    return (
      e.provide(j1, E),
      e.provide(Ys, l),
      e.provide(J1, s),
      e.provide(Qs, c),
      e.provide(Zs, d),
      e.provide(e5, A),
      e.provide(c8, o),
      e.provide(r5, a),
      Object.defineProperties(e.config.globalProperties, {
        $frontmatter: { get: () => l.value },
        $head: { get: () => c.value },
        $headTitle: { get: () => s.value },
        $lang: { get: () => d.value },
        $page: { get: () => ar.value },
        $routeLocale: { get: () => o.value },
        $site: { get: () => qr.value },
        $siteLocale: { get: () => a.value },
        $withBase: { get: () => Se }
      }),
      {
        layouts: E,
        pageData: ar,
        pageFrontmatter: l,
        pageHead: c,
        pageHeadTitle: s,
        pageLang: d,
        pageLayout: A,
        routeLocale: o,
        siteData: qr,
        siteLocaleData: a
      }
    )
  },
  vv = () => {
    const e = H1(),
      t = so(),
      r = U([]),
      n = () => {
        e.value.forEach(o => {
          const a = pv(o)
          a && r.value.push(a)
        })
      },
      E = () => {
        ;(document.documentElement.lang = t.value),
          r.value.forEach(o => {
            o.parentNode === document.head && document.head.removeChild(o)
          }),
          r.value.splice(0, r.value.length),
          e.value.forEach(o => {
            const a = fv(o)
            a !== null && (document.head.appendChild(a), r.value.push(a))
          })
      }
    Dt(U1, E),
      se(() => {
        n(),
          E(),
          ae(
            () => e.value,
            () => E()
          )
      })
  },
  pv = ([e, t, r = '']) => {
    const n = Object.entries(t)
        .map(([l, s]) =>
          Ee(s) ? `[${l}=${JSON.stringify(s)}]` : s === !0 ? `[${l}]` : ''
        )
        .join(''),
      E = `head > ${e}${n}`
    return (
      Array.from(document.querySelectorAll(E)).find(l => l.innerText === r) ||
      null
    )
  },
  fv = ([e, t, r]) => {
    if (!Ee(e)) return null
    const n = document.createElement(e)
    return (
      EE(t) &&
        Object.entries(t).forEach(([E, o]) => {
          Ee(o) ? n.setAttribute(E, o) : o === !0 && n.setAttribute(E, '')
        }),
      Ee(r) && n.appendChild(document.createTextNode(r)),
      n
    )
  },
  mv = I1,
  hv = async () => {
    var r
    const e = mv({
        name: 'VuepressApp',
        setup() {
          var n
          vv()
          for (const E of PE) (n = E.setup) == null || n.call(E)
          return () => [
            u(B5),
            ...PE.flatMap(({ rootComponents: E = [] }) => E.map(o => u(o)))
          ]
        }
      }),
      t = dv()
    Av(e), Bv(e, t, PE)
    for (const n of PE)
      await ((r = n.enhance) == null
        ? void 0
        : r.call(n, { app: e, router: t, siteData: qr }))
    return e.use(t), { app: e, router: t }
  }
hv().then(({ app: e, router: t }) => {
  t.isReady().then(() => {
    e.mount('#app')
  })
})
export {
  Nv as $,
  Bn as A,
  nu as B,
  Ge as C,
  qt as D,
  ka as E,
  Je as F,
  c3 as G,
  y as H,
  p3 as I,
  n3 as J,
  Iv as K,
  wu as L,
  Xv as M,
  Ru as N,
  I1 as O,
  Vv as P,
  ql as Q,
  Rr as R,
  Yr as S,
  Zv as T,
  v as U,
  l8 as V,
  M as W,
  v1 as X,
  $v as Y,
  jv as Z,
  Jv as _,
  we as a,
  r0 as a$,
  Mv as a0,
  u3 as a1,
  Hv as a2,
  Fn as a3,
  t0 as a4,
  Q9 as a5,
  ct as a6,
  Ma as a7,
  Ya as a8,
  xu as a9,
  Au as aA,
  du as aB,
  uu as aC,
  Pl as aD,
  cu as aE,
  fn as aF,
  Qa as aG,
  Dt as aH,
  qa as aI,
  Zo as aJ,
  vn as aK,
  Kt as aL,
  E3 as aM,
  Ri as aN,
  xv as aO,
  Pv as aP,
  Lv as aQ,
  s3 as aR,
  qn as aS,
  ci as aT,
  N0 as aU,
  rn as aV,
  Ha as aW,
  D0 as aX,
  je as aY,
  Ju as aZ,
  l3 as a_,
  pn as aa,
  Qv as ab,
  w1 as ac,
  a3 as ad,
  f3 as ae,
  me as af,
  Uu as ag,
  Ja as ah,
  Cr as ai,
  wr as aj,
  Ie as ak,
  o3 as al,
  jn as am,
  Lr as an,
  za as ao,
  Kv as ap,
  Gv as aq,
  ku as ar,
  Gt as as,
  Zn as at,
  P9 as au,
  Qn as av,
  ou as aw,
  lu as ax,
  su as ay,
  au as az,
  bs as b,
  Rn as b0,
  kv as b1,
  le as b2,
  Mr as b3,
  R0 as b4,
  C0 as b5,
  t3 as b6,
  y0 as b7,
  at as b8,
  qv as b9,
  Fv as bA,
  h3 as bB,
  hn as bC,
  a6 as bD,
  _3 as bE,
  Md as bF,
  Z6 as bG,
  d3 as ba,
  A3 as bb,
  Wv as bc,
  zu as bd,
  Uv as be,
  ns as bf,
  Ms as bg,
  y1 as bh,
  $s as bi,
  b1 as bj,
  da as bk,
  e1 as bl,
  qu as bm,
  Dv as bn,
  ae as bo,
  Z0 as bp,
  eu as bq,
  Rv as br,
  Yv as bs,
  zv as bt,
  wv as bu,
  v3 as bv,
  i3 as bw,
  B3 as bx,
  Sv as by,
  gv as bz,
  e3 as c,
  hv as createVueApp,
  ys as d,
  r3 as e,
  Cv as f,
  Fs as g,
  U as h,
  se as i,
  ao as j,
  u as k,
  Ov as l,
  Es as m,
  Tv as n,
  E8 as o,
  yv as p,
  nn as q,
  lt as r,
  Ar as s,
  Y9 as t,
  m1 as u,
  bv as v,
  Zl as w,
  pt as x,
  sr as y,
  Ue as z
}
