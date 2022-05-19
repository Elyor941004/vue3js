<template>
  <form action="" class="form-group">
    <my-input v-model="comment.name"/>
    <my-input v-model="comment.body"/>
    <my-input v-model="comment.email"/>
    <my-button @click="createComment">submit</my-button>
  </form>
</template>
<script>
import MyButton from "@/components/MyButton";
export default {
  name:'my-form',
  props:{
    comments:{
      Type:Array,
      required:true
    }
  },
  components: {
    MyButton

  },
  data(){
    return{
      hide: false,
      comment:{
        id:this.comments.length+1,
        name:'',
        body:'',
        email:''
      }
    }
  },
  methods:{
    createComment(e){
      e.preventDefault();
      this.$emit('addComment', this.comment)
      this.$emit('hideModel', this.hide)
    },

  }
}
</script>