<template>
  <select v-model="modelValue" @change="changeOption" class="optionComment" >
    <option disabled>category</option>
    <option v-for="comment in comments" v-bind:key="comment.id" :value="comment.value" >{{comment.text}}</option>
  </select>
</template>
<script>
  export default {
    name: 'my-select',
    props: {
      comments: {
        type: Array,
      }
    },
    data() {

    },
    methods: {
      changeOption(e) {
        this.$emit('update:modelValue', e.target.value)
      }
    }
  }

</script>
<style>
.optionComment{
  width: 144px;
  height: 44px;
  border-radius: 4px;
  margin: 14px 0px 14px 0px;
  font-size: 16px;
}
</style>