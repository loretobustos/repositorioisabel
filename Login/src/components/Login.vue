<template>
  <div>
    <h1>Componente Login</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username"> UserName: </label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password"> Password: </label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label>
            <input type="checkbox" v-model="rememberMe" />
            Remember Me
        </label>
      </div>
      <div>
        <label>
            <input type="radio" value="admin" v-model="role" />
            Admin
        </label>
      </div>
      <button type="submit"> Login </button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            rememberMe: false,
            role: 'user'
        }
    },
    methods: {
        handleSubmit(){
            console.log('Username:', this.username);
            console.log('Password:', this.password);
            console.log('Remember Me:', this.rememberMe);
            console.log('Role:', this.role);
        }
    }
}
</script>

<style>
form{
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    background-color: aqua;
}
div{
    margin-bottom: 10px;
}
button{
    width: 100px;
    padding: 5px;
}
</style>