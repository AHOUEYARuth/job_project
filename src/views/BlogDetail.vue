<template>
    <div class="container">
        <div class="content">
            <div class="job_detail">
                <h2>{{ post?.title }}</h2>
                <p>{{ post?.body }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { $http } from '../libs/axios'

const route = useRoute()
const post = ref()
onMounted(async () => {
   const result = await $http.get(`/posts/${route.params.id}`)
   console.log(result.data)
   post.value = result.data
})
</script>


<style scoped>
    .job_detail{
        padding-top: 150px;
        
    }
</style>