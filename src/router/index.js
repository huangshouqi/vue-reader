import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home'
import Category from 'pages/Category'
import BookDetail from 'pages/BookDetail'
import Reader from 'pages/Reader'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/bookdetail/:id',
      component: BookDetail
    },
    {
      path: '/reader/:id',
      component: Reader
    }
  ]
})
