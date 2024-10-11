<template>
    <div class="container">
        <div class="content">
            <div class="job_list">
                <div v-for="post in posts" class="job">
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.body }}</p>
                    <div>
                        <RouterLink :to="`/blog/${post.id}`">Read more</RouterLink>
                        <RouterLink :to="`/blog/${post.id}/comments`">Comments</RouterLink>
                    </div>
                </div>          
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted } from "vue";
import { $http } from "../libs/axios";
const posts = ref([])
onMounted( async() =>{
    const result = await $http.get('/posts')
    posts.value = result.data
    /* console.log(posts.value); */
        
})
</script>

<style scoped>
    .job_list{
        padding-top: 150px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .job{
        border: 1px solid #ffffff2a;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(128, 128, 128, 0);
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .job a{
        color: blue;
        padding: 0 20px;
    }
</style>