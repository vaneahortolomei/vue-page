<template>
  <div class="product-card">
    <img :src="imgUrl" class="product-card__img">
    <h2 class="product-card__name">{{title}}</h2>
    <span class="product-card__price">Price: {{price}}$</span>
    <p>{{count}}</p>
    <p class="product-card__info">{{info}}</p>
    <button @click="addToBasket">buy</button>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'No name'
      },
      price: {
        type: Number,
        default: 0
      },
      imgUrl: {
        type: String,
        default: 'No image...'
      },
      count: {
        type: Number,
        default: 0
      },
      info: {
        type: String,
        default: 'No info...'
      }
    },
    name: "productCard",
   methods: {
     addToBasket(){
       this.$emit('addToBasket')
     }
   }
  }
</script>

<style scoped>
  .product-card {
    border: 1px solid black;
    width: 300px;
    height: auto;
    padding: 20px;
  }

  .product-card__img {
    max-width: 100%;
  }
</style>
