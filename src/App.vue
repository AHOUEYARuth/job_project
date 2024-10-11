<template>
  <div class="body">
    <div class="container">
      <div class="content header">
        <div class="menu">
          <a href="/"><div class="logo">R</div></a>
          <router-link to="/">Home</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/album">Album</router-link>
          <router-link to="/todo">Todo</router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script setup lang="ts">

</script>

<style scoped>
  .container{
    max-width: 1044px;
    margin: 0 auto;
  } 
  .content{
    padding: 30px 0;
    /* display: flex; */
    /* justify-content: space-between; */
  }
  .body{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .menu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  .logo{
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background-color: #1560BD;
    color: #fff;
  }

</style>
