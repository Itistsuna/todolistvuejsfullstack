<template>
  <div>
    <ul>
      <singletodo :item="item" :key="item.id" v-for="item in list" v-on:toggle="click" v-on:updated="updated"></singletodo>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import singletodo from "./singletodo";
export default {
  name: "todo",
  components: { singletodo },
  props: {
    whatToDisplay: String,
  },
  data() {
    return {
      list: [],
      updated: true
    };
  },
  mounted: function () {
    axios
      .get("http://localhost:3000/todo")
      .then((Response) => {
        this.liste = Response.data;
        if (this.whatToDisplay === "done") {
          this.list = this.liste.filter(function (item, key) {
            if (item.todo === false) {
              return true;
            }
          });
        } else if (this.whatToDisplay === "todo") {
          this.list = this.liste.filter(function (item,key) {
            if (item.todo === true) {
              return true;
            }
          });
        } else if ( this.whatToDisplay === "all"){
          this.list = Response.data
        }
      })
      .catch((error) => (console.log(error), this.list = [{ name: "Erreur de chargement" }]));
  },
  methods: {
    click: function (params) {
      this.list.forEach((element) => {
        if (element.id === params) {
          element.todo = !element.todo;
        }
      });
      axios
        .put(`http://localhost:3000/todo/${parseInt(params)}`)
        .catch((error) => (this.list = [{ name: "Erreur de chargement" }]));
    },
    uptaded: function () {
    axios
      .get("http://localhost:3000/todo")
      .then((Response) => {
        this.liste = Response.data;
        if (this.whatToDisplay === "done") {
          this.list = this.liste.filter(function (item, key) {
            if (item.todo === false) {
              return true;
            }
          });
        } else if (this.whatToDisplay === "todo") {
          this.list = this.liste.filter(function (item,key) {
            if (item.todo === true) {
              return true;
            }
          });
        } else if ( this.whatToDisplay === "all"){
          this.list = Response.data
        }
      })
      .catch((error) => (console.log(error), this.list = [{ name: "Erreur de chargement" }]));
  }
  },
  watch: {
    whatToDisplay: function(){
      this.uptaded() 
    }
  }
};
</script>
