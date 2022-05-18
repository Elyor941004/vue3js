<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <span class="count">{{count}}</span><br>
    <my-button class="button_inscrease" @click="increase">+</my-button>
    <my-button class="button_inscrease" v-on:click="decrease">-</my-button>
    <my-button class="button_inscrease"  @click="showModel" >Add new comment</my-button>
  </div>
  <my-modal class="formComment" v-model:show="modelVisible">
    <my-form :comments="comments" @addComment="createComment" @hideModel="hideModel"/>
  </my-modal>
  <div><my-select :comments = "comments"/></div>
  <div v-if="comments.length!==0">
    <item-component :comments = "comments" @remove="removeComment"/>
  </div>
  <div v-else class="commentMargin">
    <span>no comments</span>
  </div>
  <my-button @click="fetchComment">comments</my-button>
</template>
<script>
  import ItemComponent from "@/components/ItemComponent";
  import MyButton from "@/components/MyButton";
  import MyModal from "@/components/MyModal";
  import axios from "axios";
  import MySelect from "@/components/SelectComponent";
  export default {
    components: {MySelect, MyModal, MyButton, ItemComponent},
    data(){
      return{
        count:0,
        modelVisible:false,
        comments:[
          {id:1, name:'Elyor', body:'Ernazarov', email: 'elyor1004@mail.ru'},
          {id:2, name:'Ali', body:'Samariddinov', email: 'ali@mail.ru'},
          {id:3, name:'Vali', body:'Mohirov', email: 'vali@mail.ru'},
          {id:4, name:'Mohinur', body:'Sayraqulov', email: 'mohinur@mail.ru'},
        ],
      }
    },
    methods:{
      increase(){
        this.count +=1
      },
      decrease(){
        this.count -=1
      },
      createComment(comment){
        this.comments.push(comment)
      },
      showModel(){
        this.modelVisible = true
      },
      hideModel(hide){
        this.modelVisible = hide
      },
      removeComment(comment){
        function filterComment(comments){
          return comments.id !==comment.id;
        }
        this.comments = this.comments.filter(filterComment)
      },
      async fetchComment(){
        try{
          const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=15')
          this.comments = response.data
        }catch (e) {
          console.log(e)
        }
      }
    },
    watch:{
      async fetchComment(){
        try{
          const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=15')
          this.comments = response.data
        }catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>
<style>
  .button_inscrease{
    width: 184px;
    font-size: 20px;
    margin: 0 14px;
    background-color: green;
  }
  .count{
    font-size: 24px;
  }
  .commentMargin{
    margin: 14px 0px 14px;
    color: red;
    font-size: 17px;
  }
  .formComment{
    margin: 14px 0px 14px;
  }
</style>
