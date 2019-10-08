<template>
   <div>
       <nav>
           <ul>
               <li><a href="">Home</a></li>
               <li><a href="">About</a></li>
               <li><a href="">Service</a></li>
               <li><a href="">Post</a></li>
               <li><a href="">Help</a></li>
          </ul>
       </nav>
       </div> 
</template>
<script>
export default {
name:'navber',
data(){
    return{

    }
}
}
</script>

<style scoped>
nav {
    text-align: center;
}
nav ul{
    padding: 0;
}
nav li{
    display: inline-block;
    padding: 8px;
    margin: 0;
    list-style-type: none;
}
</style>