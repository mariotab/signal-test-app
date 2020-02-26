<template>
  <div class="player-wrapper container">
    <div ref="waveSurfer"></div>
    <!-- ---- MEDIA CONTROLERS --- -->
    <div class="media-controles d-flex justify-content-center">
      <button @click="playPause" class="btn btn-secondary btn-pause">
        <span v-if="isPlay">
          Pause
        </span>
        <span v-else>
          Play
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      waveSurfer: {},
      isPlay: false,
      time: 0
    }
  },
  methods: {
    ...mapMutations(['setTime']),
    playPause () {
      if (this.isPlay) {
        this.waveSurfer.pause()
        this.isPlay = false
      } else {
        this.waveSurfer.play()
        this.isPlay = true
      }
    },
    test (e) {
      console.log(e)
    }
  },
  mounted () {
    const options = this.options
    const wsOptions = Object.assign({ container: this.$refs.waveSurfer }, options)
    this.waveSurfer = WaveSurfer.create(wsOptions)
    this.waveSurfer.load('https://transcription-asr.s3-ap-southeast-1.amazonaws.com/GCjWdk8GZNmL04DS9hfzYM2dm2EtcOG3yMN63go6.mpga')
    this.waveSurfer.on('audioprocess', (e) => {
      const Time = e.toFixed(1)
      if (this.time !== Time) {
        this.time = Time
        this.setTime(Time)
      }
    })
  },
  beforeDestroy () {
    this.waveSurfer.destroy()
  }
}
</script>

<style lang="scss" scoped>
  #player-wrapper {
    position: relative;
  }
  .btn-pause {
    min-width: 200px;
    font-size: 20px;
  }
</style>
