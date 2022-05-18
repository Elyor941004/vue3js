<template>
  <select class="optionComment" >
    <option value="" disabled>category</option>
    <option value="" v-for="comment in comments" v-bind:key="comment.id" :value="comment.body">{{comment.name}}</option>
  </select>
</template>
<script>
  export default {
    name:'my-select',
    props:{
      comments:{
        type:Array,
      }
    },
    data(){

    },
    methods:{

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