<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <span class="count">{{count}}</span><br>
    <button class="button_inscrease" @click="increase">+</button>
    <button class="button_inscrease" v-on:click="decrease">-</button>
  </div>
  <item-component/>
</template>
<script>
  import ItemComponent from "@/components/ItemComponent";
  export default {
    components: {ItemComponent},
    data(){
      return{
        count:0,
        comments:[
          {name:'Elyor', surname:'Ernazarov', age:27, email: 'elyor1004@mail.ru'},
          {name:'Ali', surname:'Samariddinov', age:27, email: 'ali@mail.ru'},
          {name:'Vali', surname:'Mohirov', age:27, email: 'vali@mail.ru'},
          {name:'Mohinur', surname:'Sayraqulov', age:27, email: 'mohinur@mail.ru'},
        ]
      }
    },
    methods:{
      increase(){
        this.count +=1
      },
      decrease(){
        this.count -=1
      }
    }
  }
</script>
<style>
  .button_inscrease{
    width: 100px;
    font-size: 20px;
    margin: 0 14px;
    background-color: green;
  }
  .count{
    font-size: 24px;
  }
</style>
