import listBooks from './components/listBooks.vue'
import addBook from './components/addBook.vue'
const routes = [
    {path:'/books', component: listBooks, name: 'books'},
    {path:'/add-book', component: addBook, name: 'add_book'},
    
    
]
export default routes