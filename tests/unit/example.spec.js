import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import AboutFR from '@/components/about/AboutFR.vue'

describe('AboutFR.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Version'
    const wrapper = shallowMount(AboutFR, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
