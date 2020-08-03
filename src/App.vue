<template>
  <div id="app">
    book id = {{book.id}}
    book name = {{book.name}}
    book price = {{book.price}} 
    <hr>
    <ul>
      <li v-for="book in books" :key="book.id">
        <h3>name: {{book.name}}</h3>
        <h4>price: {{book.price}}</h4>
      </li>
    </ul>
    
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'App',
  data(){
    return{
      books:[],
      book:{}
     
    }
  },
  created(){
    axios.get('http://sohep91.pythonanywhere.com/books/').then((res)=>{
      this.books = res.data
    })
    axios.get('http://sohep91.pythonanywhere.com/books/5/').then((res)=>{
      this.book = res.data
    })
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
