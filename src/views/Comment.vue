<template>
    <div class="container">
        <div class="content">
            <div class="comment_list">
                <div class="comment" v-for="comment in comments">
                    <h4>Name :  {{ comment.name }}</h4>
                    <p>E-mail : <span>{{ comment.email }}</span></p>
                    <p>{{ comment.body }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { $http } from '../libs/axios'


const comments = ref([])
const route = useRoute()

onMounted(async () => {
   const result = await $http.get(`/posts/${route.params.id}/comments`)
   console.log(result.data)
   comments.value = result.data
})
</script>

<style scoped>
    .comment_list{
        padding-top: 150px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    .comment{
        border: 1px solid grey;
        padding: 20px;
    }
    p span{
        color: blue;
    }
</style>