import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import Album from './views/Album.vue';
import BlogDetail from './views/BlogDetail.vue';
import Picture from './views/Picture.vue';
import Todo from './views/Todo.vue';
import Comment from './views/Comment.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/blog',
        name: 'Blog',
        component: Blog 
    },

    {
        path: '/album',
        name: 'Album',
        component: Album ,
    },

    {
        path: '/blog/:id',
        component: BlogDetail 
    },

    {
        path: '/album/:id/photos',
        component: Picture 
    },

    {
        path: '/todo',
        name: 'Todo',
        component: Todo 
    },

    {
        path: '/blog/:id/comments',
        component: Comment 
    }

]

export default createRouter({
    history: createWebHistory(),
    routes
});