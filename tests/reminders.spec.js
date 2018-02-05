// import { mount } from 'vue-test-utils'
// import Reminders from '../src/components/Reminders.vue'

// describe ('Reminders', () => {
//   let wrapper   

//   beforeEach(() => {
//     wrapper = mount(Reminders)
//   })

//   it ('hides the reminders list if there are none', () => {
//     expect(wrapper.contains('ul')).toBe(false)
//   }) 

//   it ('can add reminders', () => {
//     addReminder('Go to the store')
    
//     expect(remindersList()).toContain('Go to the store')
//   })

//   it ('can remove any one reminder', () => {
//     addReminder('Go to the store')
//     addReminder('Take Fritz to the dog park')

//     let deleteButton = wrapper.find('ul > li:first-child .remove')
    
//     deleteButton.trigger('click')

//     expect(remindersList()).not.toContain('Go to the store')
//     expect(remindersList()).toContain('Take Fritz to the dog park')
//   })

//   // helper functions
//   function addReminder (body) {
//     let newReminder = wrapper.find('.new-reminder')

//     newReminder.element.value = body
//     newReminder.trigger('input')

//     wrapper.find('button').trigger('click')
//   }

//   function remindersList () {
//     return wrapper.find('ul').text()
//   }
// }) 
  