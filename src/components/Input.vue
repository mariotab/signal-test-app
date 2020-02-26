<template>
  <div class="w100 d-flex justify-content-center mt-2">
    <div class="input-group mb-3 input-link">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Link:</span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Enter here your link"
        @input="newLink"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: () => ({
    link: null
  }),
  watch: {
    link () {
      console.log(this.link)
    }
  },
  methods: {
    newLink (event) {
      this.link = event.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-link {
    max-width: 300px;
  }
</style>
