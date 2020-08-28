<template>
  <b-jumbotron>
    <template v-slot:header>Todo List</template>
    <template v-slot:lead>New feature we will have to done for this project</template>
    <hr class="my-4" />
    <p>Easy to use we created this web app just for you !</p>
    <router-view/>
  </b-jumbotron>
</template>

<script>
import todo from './todo'
import addform from './Addform'
import sentence from './sentence'
export default {
  name: 'jumbotron',
  components: {todo, addform, sentence}

}
</script>
