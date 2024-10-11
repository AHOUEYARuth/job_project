<template>
    <div class="container">
        <div class="content">
            <div class="album_list">
                <div class="album" v-for="album in albums">
                    <h2>{{ album.title }}</h2>
                    <RouterLink :to="`/album/${album.id}/photos`">Pictures</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted } from "vue";
import { $http } from "../libs/axios";
const albums = ref()

onMounted( async() =>{
    const result = await $http.get('/albums')
    albums.value = result.data
    console.log(albums.value);
        
})
</script>

<style scoped>
    .album_list{
        padding-top: 150px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .album{
        border: 1px solid #ffffff2a;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(128, 128, 128, 0);
        padding: 30px;
    }
    .album a{
        color: blue;
    }
</style>