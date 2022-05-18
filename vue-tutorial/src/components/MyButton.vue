<template>
  <button type="submit" class="my-button">
    <slot>

    </slot>
  </button>
</template>
<script>
export default {
  name: 'my-button'
}
</script>
<style>
  .my-button{
    width: 100px;
    height: 44px;
    background-color: #65B9B0;
    border-radius: 4px;
    border-color: #65B9B0;
    color: white;
    font-size: 18px;
  }
  .my-button:hover{
    background-color: #4B9F95;
    border-radius: 4px;
    border-color: #4B9F95;
    color: white;
    font-size: 18px;
  }
</style>