<template>
<div>
  <h1>Products list</h1>
  <my-input v-model="searchText"/>
  {{searchText}}
  <button>Find</button>
  <ul class="list">
    <li class="list__item" v-for="(product, index) in products"
        :key="index">
      <product-card
          :title="product.title"
          :price="product.price"
          :img-url="product.imgUrl"
          :count="product.count"
          :info="product.info"
          @addToBasket="addBasket(product.title)"
      />
    </li>
  </ul>
</div>
</template>

<script>
  import MyInput from "./myInput";
  import ProductCard from "./productCard";
  export default {
    name: "productList",
    components: {ProductCard, MyInput},
    data() {
      return {
        products: [
          {
            title: 'stol1',
            price: 100,
            imgUrl: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw9fc54f37/images/530000/533591.jpg',
            count: 30,
            info: 'The best stol1'
          },
          {
            title: 'stol2',
            price: 150,
            imgUrl: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwdc42820e/images/460000/466649.jpg',
            count: 10,
            info: 'The best stol2'
          },
          {
            title: 'stol3',
            price: 50,
            imgUrl: 'https://rnb.scene7.com/is/image/roomandboard/698884_wood_W?scl=1',
            count: 50,
            info: 'The best stol3'
          }
        ],
        searchText: '',
      }
    },
    methods: {
      addBasket(index){
        console.log(index);
      }
    }
  }
</script>

<style scoped>
  .list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
