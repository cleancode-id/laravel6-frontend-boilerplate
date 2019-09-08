import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'Card Title'
    const wrapper = shallowMount(Card, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })

  it('renders with padding', () => {
    const wrapper = shallowMount(Card, {
      propsData: { isPadding: true }
    })

    const div = wrapper.find('.card-body')
    expect(div.classes()).not.toContain('no-padding')
  })

  it('renders with no padding', () => {
    const wrapper = shallowMount(Card, {
      propsData: { isPadding: false }
    })

    const div = wrapper.find('.card-body')
    expect(div.classes()).toContain('no-padding')
  })
})
