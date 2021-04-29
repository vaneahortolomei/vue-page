<template>
  <div>
    <div
        :style="imgStyles"
        class="box">
      <p v-if="isShow">show</p>
      <p v-else>hide</p>
    </div>
    <button @click="isShow = !isShow">Hide/Show</button>
    <label>
      shirina {{sizes.currentWidth}}
      <input
          :min="sizes.minWidth"
          :max="sizes.maxWidth"
          :value="sizes.currentWidth"
          @input="sizes.currentWidth = $event.target.value"
          type="range"/>
    </label>
    <label>
      visota {{sizes.currentHeight}}
      <input
          :min="sizes.minHeight"
          :max="sizes.maxHeight"
          :value="sizes.currentHeight"
          @input="sizes.currentHeight = $event.target.value"
          type="range"/>
    </label>
  </div>
</template>

<script>
  export default {
    name: "elseIf",
    data() {
      return {
        isShow: true,
        sizes: {
          maxWidth: 500,
          maxHeight: 300,
          currentWidth: 500,
          currentHeight: 300
        }
      }
    },
    computed: {
      imgStyles(){
        return {
          width: `${this.sizes.currentWidth}px`,
          height: `${this.sizes.currentHeight}px`
        }
      }
    }
  }
</script>

<style scoped>
  .box {
    position: absolute;
    border: 1px solid black;
    width: 500px;
    height: 300px;
    background: orange;
  }
</style>
