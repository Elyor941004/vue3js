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
  <my-modal class="formComment justify-content-center" v-model:show="modelVisible">
    <my-form :comments="comments" @addComment="createComment" @hideModel="hideModel"/>
  </my-modal>
  <div><my-select :comments = "sortOptions" v-model="sortSelected"/></div>
  <div v-if="!isLoading">
      <item-component :comments = "filteredComments" @remove="removeComment"/>
  </div>
  <div v-else class="commentMargin">
    <div class="spinner-border text-success"></div>
  </div>
  <div class="page_wrapper container">
    <div @click="changePage" class="btn btn-outline-primary mx-1" :class="{'btn btn-primary mx-1 colorwhite' : page === pageNum}" v-for="pageNum in totalPage" :key="pageNum.id">
      {{pageNum}}
    </div>
  </div>
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
        isLoading: false,
        comments:[],
        sortSelected:'',
        sortOptions:[
          {id:1, name:'filter by email', text:'filter by email', value: 'email'},
          {id:2, name:'filter by name', text:'filter by name', value: 'name'}
        ],
        page: 1,
        limit: 50,
        totalPage: 0,
        searchQuery: "",
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
          this.isLoading = true;
          setTimeout(async ()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
              params: {
                _limit: this.limit,
                _page: this.page
              }
            });
            this.totalPage = Math.ceil(response.headers['x-total-count']/this.limit);
            this.comments = response.data
          }, 1000);
        }catch (e) {
          alert('json url error')
        }
        finally {
          this.isLoading = false;
        }
      },

      changePage(){
        this.page = this.page+1;
        this.fetchComment();
      },
    },
    watch:{
      sortSelected(newValue) {
        this.comments.sort((comm1, comm2) => {
          if (newValue === "name") {
            return comm1.name.localeCompare(comm2.name);
          } else if (newValue === "email") {
            return comm1.email.localeCompare(comm2.body);
          }
        });
      },
    },
    computed:{
      filteredComments(){
        return [...this.comments].sort((a,b)=>{
          if(this.selectedSort === "name"){
            return a.name.localeCompare(b.name);
          }else if(this.selectedSort === "body"){
            return  a.email.localeCompare(b.body);
          }
        });
      }
    },
    mounted() {
      this.fetchComment();
    }
  }
</script>
<style scoped>
@import '../assets/css/bootstrap.min.css';
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
    display: flex;
    margin: 14px 0px 14px;
  }
</style>
