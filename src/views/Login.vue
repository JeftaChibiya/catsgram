<template>
  <div class="full-height flex flex-col items-center py-16">
    <div class="flex justify-center text-gray-900 text-center text-3xl font-bold px-4 py-8 m-2">
      Catsgram
    </div>
    <div class="flex flex-col bg-white text-gray-700 rounded-md w-1/3 p-12 m-2">
      <p class="text-2xl font-bold text-left text-black mb-10">Welcome Back</p>

      <form class="w-full max-w-sm">
        <p class="text-lg font-medium text-gray-700 text-left mb-1">Email address</p>         
        <div class="flex mb-6 items-center border-b border-blue-400 py-2">
          <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name">
        </div>

        <p class="text-lg font-medium text-gray-700 text-left mb-1">Password</p> 
        <div class="flex items-center border-b border-blue-400 py-2 mb-8">
          <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name">
        </div>   

        <div class="flex flex-row-reverse">
          <router-link to="feed" tag="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            Continue
          </router-link>  
        </div>           
      </form>                 
    </div>
  </div>

</template>

<style lang="scss" scoped>
.full-height{
  height: 100vh;  
  background-image: url('../assets/images/bg.jpg');
  @apply bg-no-repeat bg-left bg-gray-100 bg-gray-400 bg-cover;
}
</style>