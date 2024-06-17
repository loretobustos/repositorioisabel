<template>
  <div id="app" class="container">
<h1>Convertidor de Temperaturas!!!</h1>
<h2>Hol chicos </h2>
<form @submit.prevent="convertTemperature">
<div class="formGroup">
  <label for="celsius"> Temperatura en °C:</label>
  <input type="number" v-model="celsius" id="celsius" class="fomr">
</div>
<button type="submil" class="button"> Convertir en grados °F</button>
</form>

<div v-if="fahrenheit !== null" class="result">
<h2>Temperatura en °F: {{ fahrenheit }}</h2>
</div>
  </div>

</template>

<script>
export default {
data() {
  return {
    celsius: '',
    fahrenheit: null
  };
},
methods: {
  convertTemperature() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
  }
}
};
</script>

<style>
.container{
  background-color: brown;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.formGroup{
  margin-bottom: 20px;
}
.form{
  padding: 10px;
  width: 100px;
  font-size: 20px;
}
.button{
  background-color: blue;
  color: aliceblue;
}
.result{
  margin-top: 20px;
}
</style>