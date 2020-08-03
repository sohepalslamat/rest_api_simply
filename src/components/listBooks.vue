<template>
  <div>
      <ul>
        <div>
          <li v-for="book in books" :key="book.id">
            <h3>name: {{book.name}}</h3>
            <h4>price: {{book.price}}</h4>
            
          </li>
          
        </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'App',
  data(){
    return{
      books:[]    
    }
  },
  created(){
    axios.get('http://sohep91.pythonanywhere.com/books/').then((res)=>{
      this.books = res.data
    })
  }
  
}
</script>

<style>

</style>