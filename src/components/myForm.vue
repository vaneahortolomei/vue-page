<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="login">Login</label>
      <input type="text"
             class="form-group__input"
             id="login"
             v-model.trim="form.login"
      />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-group__input" id="email" v-model.trim="form.email"/>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-group__input" id="password" v-model.trim="form.password"/>
    </div>
    <div class="form-group">
      <label for="countries">Countries</label>
      <select id="countries" v-model="form.country">
        <option v-for="(item, index) in form.countries"
                :key="index"
                :value="item.value"
        >{{item.label}}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="themes">Themes</label>
      <select id="themes" v-model="form.favoriteThemes" multiple>
        <option v-for="(item, index) in form.themes"
                :key="index"
                :value="item.value"
        >
          {{item.label}}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="vueNotification">Vue notification</label>
      <input type="checkbox" value='vue' id="vueNotification" v-model="form.isChecked"/>
    </div>
    <div class="form-group">
      <label for="reactNotification">React notification</label>
      <input type="checkbox" value='react' id="reactNotification" v-model="form.isChecked"/>
    </div>
    <div class="form-group">
      <label for="male">Male</label>
      <input type="radio" value="male" id="male" checked v-model="form.gender"/>
    </div>
    <div class="form-group">
      <label for="female">Female</label>
      <input type="radio" value="female" id="female" v-model="form.gender"/>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>


  export default {
    name: "myForm",
    data() {
      return {
        form: {
          login: '',
          email: '',
          password: '',
          country: 'Moldova',
          favoriteThemes: [],
          isChecked: [],
          gender: 'male',
          submitStatus: null,
          countries: [
            {
              label: 'Moldova',
              value: 'Moldova'
            },
            {
              label: 'usa',
              value: 'usa'
            },
            {
              label: 'brazil',
              value: 'brazil'
            }
          ],
          themes: [
            {
              label: 'Vue.js',
              value: 'vue'
            },
            {
              label: 'React.js',
              value: 'react'
            },
            {
              label: 'Angular.js',
              value: 'angular'
            }
          ],
        }
      }
    },
    methods: {
      submitForm() {
        const res = {
          date: Date.now(),
          login: this.form.login,
          email: this.form.email,
          password: this.form.password,
          country: this.form.country,
          themes: this.form.favoriteThemes,
          notification: this.form.isChecked,
          gender: this.form.gender,
        };
        console.log(res);
      }
    }
  }
</script>

<style scoped>
  form {
    max-width: 500px;
    margin: 0 auto;
    border-radius: 20px;
    background: burlywood;
    padding: 20px;
  }

  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }

  .form-group label {
    display: block;
  }

  .form-group select {
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    padding: 10px;
    border: none;
    cursor: pointer;
  }

  .form-group__input {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }

  .form-group__input .is-invalid {
    border: 1px solid red;
  }

  .form-group__error {
    color: red;
  }

  form button {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid transparent;
    cursor: pointer;
  }

  form button:active {
    border: 1px solid red;
  }

</style>
