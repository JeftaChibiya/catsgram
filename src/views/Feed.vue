<template>
  <div class="home px-24">
    <navbar></navbar>
    
    <div class="container flex px-24">
      <div class="flex flex-col">
        <!-- filters -->
        <div class="flex flex-wrap items-stretch w-full font-bold mb-4">                
            <div active-class="text-blue-400 border-blue-400" 
                 class="mr-2 mb-2 p-2 slow-transition border border-gray-500 rounded-full text-xs text-gray-600 font-medium"
                 v-for="(category, key) in categories" :key="key">
              <a>{{ category.name }}</a>
            </div>                                     
        </div>

        <!-- content -->
      <div class="flex flex-wrap border h-auto">
        <div class="flex-shrink p-2" v-for="(cat, key) in cats" :key="key">
          <img class="w-56" :src="cat.url" alt="">
        </div>        
      </div>
        </div>       
    </div>  
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import axios from 'axios'

export default {
  name: 'CatsFeed',
  data () {
    return {
      cats: this.$store.state.cats,      
      categories: this.$store.state.categories
    }
  },  
  components: {
    Navbar
  },
  created() {
    axios
      .get('https://api.thecatapi.com/v1/categories')
      .then(response => (
        this.$store.dispatch('getCategories', response.data)        
      ))

    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc')
      .then(response => (
        this.$store.dispatch('getAll', response.data)        
      ))      
  }
}
</script>