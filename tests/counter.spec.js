import { mount } from 'vue-test-utils'
import Counter from '../src/components/Counter.vue'

describe ('Counter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Counter)
  })

  /*TEST*/
  it ('defaults to a count of 0', () => {
    expect(wrapper.vm.count).toBe(0)
  })

  /*TEST*/
  it ('increments the count when the increment button is clicked', () => {
    expect(wrapper.vm.count).toBe(0)
    
    wrapper.find('.increment').trigger('click')

    expect(wrapper.vm.count).toBe(1)
  })

  /*TEST*/
  it ('decrements the count when the decrement button is clicked', () => {
    wrapper.setData({ count: 5 })

    wrapper.find('.decrement').trigger('click')
    expect(wrapper.vm.count).toBe(4)
  })

  /*TEST*/
  it ('never goes below zero', () => {
    expect(wrapper.vm.count).toBe(0)

    expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(true)
    
    expect(wrapper.find('.increment').trigger('click'))
    expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(false)
  }) 

  /*TEST*/
  it ('present the current count', () => {
    expect(wrapper.find('.count').html()).toContain(0)
  }) 
})