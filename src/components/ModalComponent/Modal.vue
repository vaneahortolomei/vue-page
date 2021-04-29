<template>
  <div class="modal">
    <div class="modal__header">
      <h1>{{title}}</h1>
    </div>
    <button
        type="button"
        class="modal__close"
        aria-label="Close"
        @click="closeModal"
    >
      <span aria-hidden="true">x</span>
    </button>
    <div class="modal__body"
      @scroll="isScroll"
    >
      <slot name="body-text"></slot>
    </div>
    <div class="modal__footer">
      <button
          type="button"
          class="modal__btn"
          @click="saveInfo"
      >
        Save
      </button>
      <button
          type="button"
          class="modal__btn"
          @click="closeModal"
          :disabled="!isDisabled"
      >
        Agree
      </button>
    </div>
  </div>
</template>

<script>
  import scrollHandler from "../../mixins/scrollHandler";
  export default {
    props: {
      title: {
        type: String,
        default: 'Empty header'
      }
    },
    name: "Modal",
    mixins: [scrollHandler],
    data(){
      return {
        isDisabled: false,
      }
    },
    methods: {
      closeModal() {
        return this.$emit('close');
      },
      saveInfo(){
        alert('The info was saved!');
      },
      toEndScroll(){
        this.isDisabled = true;
      },
      toTopScroll(){
        this.isDisabled = false;
      }
    }
  }
</script>

<style scoped>
  .modal {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 15px;
  }
  .modal__close {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .modal__body {
    height: 300px;
    overflow-y: scroll;
    padding: 15px;
  }
  .modal__header {
    padding: 15px;
    border-bottom: 1px solid black;
  }
  .modal__footer {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-top: 1px solid black;
  }

  .modal__btn {
    background: royalblue;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid transparent;
  }
  .modal button {
    cursor: pointer;
  }
  .modal__btn:active {
    border: 1px solid red;
  }
  :disabled {
    background: #4169e14f;
  }

</style>
