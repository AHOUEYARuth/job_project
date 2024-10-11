<template>
    <div class="banner">
        <div class="container">
            <h1>welcome to our home</h1>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .banner{
        background-image: url(/src/assets/j.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .banner:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #00000044;
    }
    h1{
        color: #fff;
        font-weight: 700;
        font-size: 60px;
        filter: opacity(0.6);
    }
 /*    .container{
        background-color: aqua;
    } */
</style>