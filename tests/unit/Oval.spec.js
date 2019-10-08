import { shallowMount } from "@vue/test-utils";
import Oval from "@/components/Oval.vue";

describe("Oval.vue", () => {
  it("renders props when passed", () => {
    const width = 64;
    const height = 64;
    const fill = "red";
    const wrapper = shallowMount(Oval, {
      propsData: { width, height, fill }
    });
    expect(wrapper.props().width).toBe(width);
    expect(wrapper.props().height).toBe(height);
    expect(wrapper.props().fill).toBe(fill);
  });
});
