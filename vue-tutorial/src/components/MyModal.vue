<template>
  <div v-if="show">
    <slot>

    </slot>
  </div>
</template>
<script>
  export default {
    name:'my-modal',
    props:{
      show:{
        type:Boolean,
        default:false
      }
    },
  }
</script>