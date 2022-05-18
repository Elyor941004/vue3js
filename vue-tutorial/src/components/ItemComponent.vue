<template>
  <div class="form-center">
    <table>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Body</th>
      <th>Email</th>
      <th>delete</th>
    </tr>
    <tr v-for="comment in comments" v-bind:key="comments.id">
      <td>{{comment.id}}</td>
      <td>{{comment.name}}</td>
      <td>{{comment.body}}</td>
      <td>{{comment.email}}</td>
      <td><my-button class="commentDelete" @click="$emit('remove', comment)">delete</my-button></td>
    </tr>
  </table>
  </div>
</template>
<script>
  import MyButton from "@/components/MyButton";
  export default {
    components: {MyButton},
    props:{
      comments:{
        Type: Array,
        required: true
      }
    },
    name: 'item-component'
  }
</script>
<style>
  .form-center{
    display: flex;
    justify-content: center;
    margin: 24px 0px 24px 0px;
  }
  .form-center table{
    width: 900px;
  }
  .commentDelete{
    background-color: red;
  }
</style>