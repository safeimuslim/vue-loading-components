# vue-loading-components
Easy to use loading animations for React projects. Uses SVG animations from SamHerbert [SVG-Loaders](https://github.com/SamHerbert/SVG-Loaders) project.

## Installation

```
npm i vue-loading-components
```
or

```
yarn add vue-loading-components
```

## Demo

[DEMO](https://safeimuslim.github.io/react-loading-components-demo/)

## Loading Components
* Audio,
* BallTriangle,
* Bars,
* Circles,
* Grid,
* Hearts,
* Oval,
* Puff,
* Rings,
* SpinningCircles,
* TailSpin,
* ThreeDots

## Example

```javascript
<template>
  <Audio :fill="'yellow'" />
</template>

<script>
import { Audio } from 'vue-loading-components'

export default {
  name: 'HelloWorld',
  components: { Audio }
}
</script>
```

### Props

| Name | Type | Default Value |
|:------:|:------:|:---------------:|
| fill | String | `#ffffff` |
| height | Number or String | 64 (px) |
| width | Number or String | 64 (px) |

## License

MIT

