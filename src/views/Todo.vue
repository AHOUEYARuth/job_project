<template>
    <div class="container">
        <div class="content">
            <div class="todo_list">
                <input type="text" placeholder="saisir une tâche">
                <ul>
                    <li v-for="todo in todos">
                        <div class="div" v-if="todo.completed == true"><img src="/src/assets/sma.png" alt="" style="width: 25px;"></div>
                        <div class="div" v-else></div>
                        <span>{{ todo.title }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted } from "vue";
import { $http } from "../libs/axios";
const todos = ref([])
onMounted( async() =>{
    const result = await $http.get('/todos')
    todos.value = result.data
    console.log(todos.value);
        
})

</script>

<style scoped>
    .todo_list{
        padding-top: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    .div{
        height: 20px;
        width: 20px;
        border: 1px solid grey;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
    }
    ul li{
        list-style: none;
        display: flex;
        align-items: center;
        gap: 10px;
        /* margin: 10px 0; */
    }
</style>