import { mount } from 'vue-test-utils'
import Counter from '../src/components/Counter.vue'

describe ('Counter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Counter)
  })

  it ('defaults to a count of 0', () => {
    expect(wrapper.vm.count).toBe(0)
  })

  it ('increments the count when the increment button is clicked', () => {
    expect(wrapper.vm.count).toBe(0)
    
    wrapper.find('.increment').trigger('click')

    expect(wrapper.vm.count).toBe(1)
  })

  it ('decrements the count when the decrement button is clicked', () => {
    expect(wrapper.vm.count).toBe(0)
    
    wrapper.setData({
      count: 5 
    })

    wrapper.find('.decrement').trigger('click')
    expect(wrapper.vm.count).toBe(4)
  })

  it ('never goes below zero', () => {
    expect(wrapper.vm.count).toBe(0)

    wrapper.find('.decrement').trigger('click')
    expect(wrapper.vm.count).toBe(0)
  }) 

  it ('present the current count', () => {
    expect(wrapper.find('.count').html()).toContain(0)
  }) 
})