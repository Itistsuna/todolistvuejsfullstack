<template>
  <div>
    <b-navbar-brand >
      <b-link class="mb-2"><router-link to="/">Home</router-link></b-link>
      <b-link><router-link to="/new" >New</router-link></b-link>
      <b-link><router-link to="/done" >Done</router-link></b-link>
      <b-link><router-link to="/todo" >To Do</router-link></b-link>
    </b-navbar-brand>
  </div>
</template>

<script>
export default {
  name: 'Myheader',
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
