import Audio from "./components/Audio.vue";
import BallTriangle from "./components/BallTriangle.vue";
import Bars from "./components/Bars.vue";
import Circles from "./components/Circles.vue";
import Grid from "./components/Grid.vue";
import Hearts from "./components/Hearts.vue";
import Oval from "./components/Oval.vue";
import Puff from "./components/Puff.vue";
import Rings from "./components/Rings.vue";
import SpinningCircles from "./components/SpinningCircles.vue";
import TailSpin from "./components/TailSpin.vue";
import ThreeDots from "./components/ThreeDots.vue";

const install = Vue => {
  if (install.installed) return;
  install.installed = true;
  Vue.component({
    Audio,
    BallTriangle,
    Bars,
    Circles,
    Grid,
    Hearts,
    Oval,
    Puff,
    Rings,
    SpinningCircles,
    TailSpin,
    ThreeDots
  });
};

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

export {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots
};
