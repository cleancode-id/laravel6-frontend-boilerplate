import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar.vue', () => {
  it('renders menu register and log in if not logged in', () => {
    const wrapper = shallowMount(Navbar, {
      stubs: ['router-link', 'router-view'],
      mocks: {
        $t: key => key
      },
      computed: {
        appName: () => 'Test',
        user: () => null
      }
    })
    expect(wrapper.find('li.nav-item-login').isVisible()).toBe(true)
    expect(wrapper.find('li.nav-item-register').isVisible()).toBe(true)
  })

  it('hides menu register and log in if logged in', () => {
    const wrapper = shallowMount(Navbar, {
      stubs: ['router-link', 'router-view'],
      mocks: {
        $t: key => key
      },
      computed: {
        appName: () => 'Test',
        user: () => {
          return {
            id: 1
          }
        }
      }
    })
    expect(wrapper.find('li.nav-item-login').exists()).toBe(false)
    expect(wrapper.find('li.nav-item-register').exists()).toBe(false)
  })
})
