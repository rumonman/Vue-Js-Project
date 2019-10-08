<template>
    <div class="hook">
        <h1>Our Posts</h1> <hr>
        <input type="text" placeholder="surch" v-model="suchterm">
        <div v-for="post in filtersuch" :key="post.id">
            <h2>{{post.name}}</h2>
            <h3>{{post.email}}</h3>
            <p>{{post.body | rumon}}</p>
        </div>
        <div>


        </div>
        </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'hook',
    data(){
        return{
           posts:[],
           suchterm:''
        }
    },
    computed:{
      filtersuch(){
        return this.posts.filter(post=>{
              return post.name.match(this.suchterm)
          })
      }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response=>{
            this.posts = response.data
        })
        .eatch(error=>{
            this.posts= error.data
        })
    }
}
</script>
<style>
div h1{
    color: red;
    text-align:center;
    }
</style>