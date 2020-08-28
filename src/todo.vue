<template>
  <div>
    <ul>
      <singletodo :item="item"  v-bind:key="item.id" v-for="item in list"  v-on:toggle="click"></singletodo>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import singletodo from './singletodo'
export default {
  name: 'todo',
  components: { singletodo },
  props: {
    whatToDisplay:String
    },
  data () {
    return {
      list: []
    }
  },
  mounted: function (){
      axios.get('http://localhost:3000/todo').then(Response => {
        if (condition) {

        } else {

        }
      } ).catch(error => this.list = [{title: "Erreur de chargement"}])
    } ,
  methods: {
    click: function (params) {
      this.list.forEach((element) => {
        if (element.id === params) {
          element.todo = !element.todo
        }})
      axios.put(`http://localhost:3000/todo/${parseInt(params)}`).catch(error => this.list = [{title: "Erreur de chargement"}])}

  }

}
</script>
