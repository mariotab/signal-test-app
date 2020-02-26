<template>
  <div class="container pt-5">
      <p v-for="item in words" :key="item.words[0].start_time">
        <span
          v-for="word in item.words"
          :key="word.end_time"
          class="word"
          :ref="word.end_time"
        >{{word.text}} </span>
      </p>
  </div>
</template>

<script>
import json from '../utils/example'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      words: json.sections,
      activeElements: ''
    }
  },
  computed: {
    ...mapState({
      time: state => state.time
    })
  },
  watch: {
    time () {
    const Time = parseFloat(this.time)
      this.words.forEach(element => {
        element.words.forEach(element2 => {
          if (element2.start_time < Time && element2.end_time > Time) {
            if (this.activeElements !== element2.text) {
              this.activeElements = element2.text
              this.$refs[element2.end_time][0].classList.add('active')
            }
          } else {
            this.$refs[element2.end_time][0].classList.remove('active')
          }
        })
      });
    }
  },
  created () {
    // console.log(this.words[0].words[1])
  }
}
</script>

<style lang="scss" scoped>
  .word {
    transition: color .3s;
  }
  .active {
    font-weight: 700;
    text-decoration: underline;
  }
</style>
