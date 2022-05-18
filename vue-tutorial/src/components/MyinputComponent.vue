<template>
  <div class="margin-input">
    <input type="text" class="form-control" :v-model="modelValue" @input="getValue">
  </div>
</template>
<script>
  export default {
    name:'my-input',
    props:{
      modelValue:[String, Number],
    },
    methods:{
      getValue(event){
        this.$emit('update:modelValue', event.target.value)
      },
    }
  }
</script>
<style scoped>
  .form-control{
    width: 184px;
    height: 24px;
    border-radius: 4px;
  }
  .margin-input{
    margin-bottom: 4px;
  }
</style>