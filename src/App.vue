<template>
  <div class="container">
    <user-page/>
  </div>
</template>

<script>


  import UserPage from "./components/ModalComponent/UserPage";
  export default {
    name: 'App',
    components: {UserPage},
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .container {
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
  }

  .btn {
    background: royalblue;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid transparent;
    cursor: pointer;
  }
  .btn:active {
    border: 1px solid red;
  }


</style>
