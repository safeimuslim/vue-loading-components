import { shallowMount } from "@vue/test-utils";
import Bars from "@/components/Bars.vue";

describe("Bars.vue", () => {
  it("renders props when passed", () => {
    const width = 64;
    const height = 64;
    const fill = "red";
    const wrapper = shallowMount(Bars, {
      propsData: { width, height, fill }
    });
    expect(wrapper.props().width).toBe(width);
    expect(wrapper.props().height).toBe(height);
    expect(wrapper.props().fill).toBe(fill);
  });
});
