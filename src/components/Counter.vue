<template>
  <div> 
    <span class="count">{{ count }}</span>
    <button class="increment" @click="count++">Increment</button>
    <button class="decrement" @click="count > 0 && count--">Increment</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0
    }
  },
  methods:  { 
  }    
}
</script>

