<template>
  <div id="app">
    <Myheader></Myheader>
    <jumbotron/>
  </div>
</template>

<script>
import jumbotron from './jumbotron'
import Myheader from './Myheader'
export default {
  name: 'app',
  components: {jumbotron, Myheader}
}
</script>
