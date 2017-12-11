<template>
  <div class="column">
    <div class="ui card one centered">
      <div class="content">
        <div class="header">Wrong Answer!</div>
      </div>
      <div class="image">
        <img :src="gif">
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <router-link to="/game" class="ui primary button">Play Again</router-link>
          <router-link to="/settings" class="ui primary button">Settings</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  created() {
    axios('https://yesno.wtf/api?force=no')
      .then(res => this.gif = res.data.image)
      .catch(err => console.error(err))
  },
  data() {
    return { gif: '' }
  },
}
</script>