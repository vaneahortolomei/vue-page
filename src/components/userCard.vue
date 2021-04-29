<template>
  <div class="user-card">
    <h2>{{showName}}</h2>
    <p>InfoWe have already created our very first Vue app! This looks pretty similar to rendering a string template, but
      Vue has done a lot of work under the hood. The data and the DOM are now linked, and everything is now reactive.
      How do we know? Take a look at the example below where</p>
    <span>Persons: {{persons.length}}</span>
    <ul>
      <li v-for="(person, index) in persons" :key="index">
        <span>{{index}}</span> {{getFullName(person)}}
      </li>
    </ul>
    <button @click="currentPage--">
      Previous
    </button>
    <button v-for="page in pages" :key="page" @click="currentPage = page">
      {{page}}
    </button>
    <button @click="currentPage++">
      Next
    </button>
    <p>Page {{currentPage}} from {{pages}}</p>
  </div>
</template>

<script>
  export default {
    name: "userCard",
    data() {
      return {
        name: 'John',
        lastName: 'Johnson',
        persons: [
          {
            name: 'Andy',
            age: 21
          },
          {
            name: 'Liza',
            age: 20
          },
          {
            name: 'Michael',
            age: 30
          },
          {
            name: 'Bill',
            age: 21
          },
          {
            name: 'Faruh',
            age: 20
          },
          {
            name: 'Ryan',
            age: 30
          },
          {
            name: 'Tom',
            age: 21
          },
          {
            name: 'Ben',
            age: 20
          },
          {
            name: 'Sandy',
            age: 30
          }
        ],
        currentPage: 1,
        pages: 3,
      }
    },
    computed: {
      showName() {
        return `${this.name} ${this.lastName}`.toUpperCase();
      },
    },
    methods: {
      getFullName(person) {
        return `${person.name} ${person.age}`
      }
    }
  }
</script>

<style scoped>

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    text-align: left;
    margin-bottom: 15px;
  }

  li span {
    margin-right: 20px;
    color: red;
  }
</style>
