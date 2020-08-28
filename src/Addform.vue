<template>
  <div>
    <form @submit.prevent="postList">
        <div class="form">New Task</div>
        <input type="text" v-model="newTodo" name="name" placeholder="Todo name">
        <input type="submit" value="Add">
      </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        newTodo: null,
        list: []
      }
    },
    name: 'addform',
    mounted: function (){
        axios.get('http://localhost:3000/todo').then(Response => this.list = Response.data).catch(error => this.list = [{title: "Erreur de chargement"}])
      } ,
    methods: {
      postList: async function(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        let id = 0
        if (this.list.length) {
          id = this.list.length
        }
        await axios.post('http://localhost:3000/todo',{
          name: this.newTodo,
          id: id,
          createdAt: today,
          todo: true
        })
        this.newTodo = ""
      }
    },
}
</script>

<style>
form{
  margin: 10px 30%;
  display: flex;
  width: 100%;
  height: 40px;
  }
input[type=text]{
  box-shadow: 0 1px 2px 0 #666768;
  border: solid 0.5px #666768;
  text-align: center;
  width: 20%;
  height: 40px;
}
input[type=submit]{
  box-shadow: 0 1px 2px 0 #666768;
  border: solid 0.5px #666768;
  width: 10%;
  height: 40px;
}
.form{
  box-shadow: 0 1px 2px 0 #666768;
  border-radius: 2px;
  border: solid 0.5px #666768;
  padding: 5px;
  width: 10%;
  height: 40px;
}
</style>
