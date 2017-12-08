<template>
  <div id="app">
    <Game></Game>
  </div>
</template>

<script>
import Game from './components/Game';

export default {
  name: 'app',
  components: {
    Game,
  }
}
</script>

<style>
#app {
  margin: 50px 0
}
</style>
