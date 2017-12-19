import MorphingLayer from './MorphingLayer.js'

function isFunction (functionToCheck) {
  let getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}

/* validate payload */
function validate (payload) {
  let targetElementId = payload.targetElementId
  if (typeof targetElementId !== 'string') {
    console.error('targetElementId is not set or an invalid value.')
    return false
  }

  let params = payload.params
  if (params && typeof params !== 'object') {
    console.error('params is not an object.')
    return false
  }

  let easing = payload.easing
  if (easing && typeof easing !== 'string') {
    console.error('easing is not set or an invalid value.')
    return false
  }

  let duration = payload.duration
  if (duration && !Number.isInteger(duration)) {
    console.error('duration is not set or an invalid value.')
    return false
  }

  let callback = payload.callback
  if (callback && !isFunction(callback)) {
    console.error('callback is not a function.')
    return false
  }

  return true
}

let plugin = {
  install (Vue, options) {
    const eventType = options.defaultEventType || 'morph'
    const morphingLayerName = options.morphingLayerName || 'morphing-layer'

    Vue.directive('morph', {
      bind (el, binding, vnode) {
        // attach event listner to trigger morphing
        el.addEventListener(eventType, (event) => {
          // console.log(event)
          const payload = event.detail
          if (!validate(payload)) {
            return
          }

          // find a morpying layer component and call its medthod
          const MorphingLayerVM = vnode.context.$root.$children[0].$refs[morphingLayerName]
          MorphingLayerVM.startMorphing({
            originElement: el,
            targetElementId: payload.targetElementId,
            params: payload.params,
            easing: payload.easing || options.defaultEasing || 'linear',
            duration: payload.duration || options.defaultDuration || 1000,
            className: payload.className || options.defaultClassName || 'morphing-div',
            callback: payload.callback
          })
        })
      },
      unbind (el, binding, vnode) {
        // need to rewrite this
        // el.removeEventListener(eventType)
      }
    })

    // make the morphing-layer component available
    Vue.component(morphingLayerName, MorphingLayer)
  }
}

export default plugin
