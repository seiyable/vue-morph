# vue-morph
A Vue.js plugin that allows you to have a html element morphed into another html element using a custom directive 'v-morph'. No jQuery required.

A component that has 'v-morph' directive transforms into another target element when you fire the event. You can define what is the target element, when to trigger the event, what css parameters you want to animate, how the animation looks like, and what happens once the animation is done.

### Installation:
```sh
$ npm install vue-morph
```

### Usage:
First of all, declare that you use this plugin in your Vue's main file.
See available options in the later section.
```javascript
import VueMorph from 'vue-morph'
Vue.use(VueMorph)
```

Next, add a morphing-layer component where morphing animation happens in your root component.
```html
<div id="app">
  <morphing-layer ref="morphing-layer" />
  ...
</div>
```

Then, add 'v-morph' directive in your component that you want to animate.
```html
<div v-morph id="origin-div" @click="clicked"></div>
```

Prepare a morphing option object somewhere in your code. If you want to make it reactive, define it as a computed property.
See available options in the later section.
```javascript
let morphingOption = {
  targetElementId: 'target-div',
  params: {
    'background-color': false,
    'border-radius': true
  },
  easing: 'easeOutQuint',
  duration: 500,
  className: 'morphing-div',
  callback: function () {
    console.log('morphing animation is done!')
  }
}
```

To trigger the morphing, dispatch a custom event on the element with the option as a custom argument (it has to be a value of key 'detail').
```javascript
clicked () {
  let el = document.getElementById('origin-div')
  el.dispatchEvent(new CustomEvent('morph', {'detail': morphingOption}))
}
```

### Available global options at installation:
| key | type | description | default | necessity |
| ------ | ------ | ------ | ------ | ------ |
| defaultEventType | string | default event type name that you need to fire | 'morph' | optional |
| morphingLayerName | string | name of the morphing layer. If you change this, you need to change the tag name and ref attribute of the morphing layer in your root component | 'morphing-layer' | optional |
| defaultEasing | string | default easing type | 'linear' | optional |
| defaultDuration | number | default easing duration in milliseconds | 1000 | optional |
| defaultClassName | string | default class name attached while it's animated | 'morphing-div' | optional |

### Available options for a morphing animation:
| key | type | description | default | necessity |
| ------ | ------ | ------ | ------ | ------ |
| targetElementId | string | target element's id | | required |
| params | object | what css parameters you want to animate. See detail below this chart | | optional |
| easing | string | easing type. See detail below this chart | 'linear' | optional |
| duration | number | easing duration in milliseconds | 1000 | optional |
| className | string | class name attached while it's animated | 'morphing-div' | optional |
| callback | function | callback function called after animation is done | | optional |

### Available CSS parameters you can animate
You need to pass boolean value with a css parameter. If you want to animate it from the origin element's value to the target element's value, pass true. If you don't want to animate it and just keep the origin element's value in the animation, pass false.
- backgroundColor
- borderColor
- borderRadius
- opacity

### Available Easing Types
This plugin uses an animation library called [anime.js](http://animejs.com/), so you can assign any easing types available in the library.

### Todo:
- add demo
- simplify the usage
