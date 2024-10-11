<template>
    <div class="container">
        <div class="content">
            <div class="picture_list">
                <div v-for="picture in pictures" class="picture">
                    <img :src="picture.url" alt="">
                    <h2>{{ picture.title }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { $http } from '../libs/axios'

const route = useRoute()
const pictures = ref([])

onMounted(async () => {
   const result = await $http.get(`/albums/${route.params.id}/photos`)
   console.log(result.data)
   pictures.value = result.data
})
</script>

<style scoped>
    .picture_list{
        padding-top: 150px;
        color: #fff;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .picture{
        font-size: 13px;
    }
    .picture img{
        width: 300px;
    }
</style>