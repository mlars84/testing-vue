<template>
  <div>
      <input v-model="newReminder" class="new-reminder" type="text">
      <button @click="addReminder">Add Reminder</button>

      <ul v-if="reminders.length">
        <li :key="reminder.id" v-for="reminder in reminders">
          {{ reminder }}
          <button @click="removeReminder(reminder)" class="remove">Remove</button>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data: function () {
      return {
        newReminder: '',
        reminders: []
      }
  },
  methods: {
    addReminder () {
      this.reminders.push(this.newReminder)

      this.newReminder = ''
    },
    removeReminder (reminder) {
      this.reminders.splice(reminder, 1)
    }
  }
}
</script>
