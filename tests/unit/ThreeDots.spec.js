import { shallowMount } from "@vue/test-utils";
import ThreeDots from "@/components/ThreeDots.vue";

describe("ThreeDots.vue", () => {
  it("renders props when passed", () => {
    const width = 64;
    const height = 64;
    const fill = "red";
    const wrapper = shallowMount(ThreeDots, {
      propsData: { width, height, fill }
    });
    expect(wrapper.props().width).toBe(width);
    expect(wrapper.props().height).toBe(height);
    expect(wrapper.props().fill).toBe(fill);
  });
});
