<template>
  <div class="container-fluid">
    <Input />
    <Player />
    <Words />
  </div>
</template>

<script>
import Input from '../components/Input'
import Player from '../components/Player'
import Words from '../components/Words'
export default {
  components: {
    Input,
    Player,
    Words
  }
}
</script>
