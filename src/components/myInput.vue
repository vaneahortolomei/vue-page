<template>
  <input type="text" @input="$emit('input', $event.target.value)"/>
</template>

<script>
  export default {
    name: "myInput",
    model: {
      prop: 'value',
      event: 'input'
    }
  }
</script>

<style scoped>

</style>
