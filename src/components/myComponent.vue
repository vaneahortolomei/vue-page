<template>
  <div>
    <p>{{text}}</p>
    <form @submit.prevent=submitForm >
      <label for="name">
        Name
        <input id="name" v-model="name" type="text"/>
      </label>
      <label for="lastName">
        lastName
        <input id="lastName" v-model="lastName" type="text"/>
      </label>
      <button>Show in console</button>
    </form>

    <div>
      <p>{{name || "Your name"}}</p>
      <p>{{lastName || "Your lastName"}}</p>
    </div>

    <div>
      <button @click="decrement">-</button>
      <input type="number" v-model="number"/>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "myComponent",
    data() {
      return {
        text: 'Person Information',
        name: '',
        lastName: '',
        show: '',
        number: 0
      }
    },
    methods: {
      submitForm(){
        console.log(this.name, this.lastName);
      },
      increment(){
        return this.number >= 10 ? '' : this.number++;
      },
      decrement(){
        return this.number <= 0 ? '' : this.number--;
      }
    },
  }
</script>

<style scoped>

</style>
