<template>
  <div class="user-page">
    <button
        type="button"
        class="user-page__btn btn"
        @click="openModal"
    >
      OpenModal
    </button>
    <modal
        v-if="isModalOpen"
        title="This is the modal"
        class="user-page__modal"
        @close="isModalOpen = false"
    >
      <template #body-text>
        <p>Пользовательские события могут быть использованы при создании графических компонентов. Например, корневой
          элемент нашего меню, реализованного при помощи JavaScript, может генерировать события, относящиеся к этому
          меню: open (меню раскрыто), select (выбран пункт меню) и т.п. А другой код может слушать эти события и
          узнавать, что происходит с меню.</p>
        <p>Пользовательские события могут быть использованы при создании графических компонентов. Например, корневой
          элемент нашего меню, реализованного при помощи JavaScript, может генерировать события, относящиеся к этому
          меню: open (меню раскрыто), select (выбран пункт меню) и т.п. А другой код может слушать эти события и
          узнавать, что происходит с меню.</p>
        <p>Пользовательские события могут быть использованы при создании графических компонентов. Например, корневой
          элемент нашего меню, реализованного при помощи JavaScript, может генерировать события, относящиеся к этому
          меню: open (меню раскрыто), select (выбран пункт меню) и т.п. А другой код может слушать эти события и
          узнавать, что происходит с меню.</p>
        <p>Пользовательские события могут быть использованы при создании графических компонентов. Например, корневой
          элемент нашего меню, реализованного при помощи JavaScript, может генерировать события, относящиеся к этому
          меню: open (меню раскрыто), select (выбран пункт меню) и т.п. А другой код может слушать эти события и
          узнавать, что происходит с меню.</p>
      </template>
    </modal>
  </div>
</template>

<script>
  import Modal from "./Modal";

  export default {
    name: "UserPage",
    components: {Modal},
    data() {
      return {
        isModalOpen: false,
      }
    },
    methods: {
      openModal() {
        return this.isModalOpen = true;
      }
    }
  }
</script>

<style scoped>
  .user-page__modal {
    margin-top: 30px;
  }
</style>
