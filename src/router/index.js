import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/book/:pk',
		name: 'Book',

		component: () => import( /* webpackChunkName: "book" */ '../views/Book.vue')
	},
	{
		path: '/article/:pk',
		name: 'Article',

		component: () => import( /* webpackChunkName: "book" */ '../views/Article.vue')
	},
	{
		path: '/login',
		name: 'Login',

		component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
	},
	{
		path: '/collect',
		name: 'Collect',
		meta: {
			auth: true
		},
		component: () => import( /* webpackChunkName: "collect" */ '../views/Collect.vue')
	},
	{
		path: '/center',
		name: 'Center',
		meta: {
			auth: true
		},
		component: () => import( /* webpackChunkName: "center" */ '../views/Center.vue'),
		redirect: {
			name: 'Userinfo'
		},
		children: [
			{
				path: 'userinfo',
				name: 'Userinfo',
				component: () => import( /* webpackChunkName: "userinfo" */ '../views/Userinfo.vue')
			},
			{
				path: 'sethead',
				name: 'Sethead',
				component: () => import( /* webpackChunkName: "sethead" */ '../views/Sethead.vue')
			},
			{
				path: 'setpassword',
				name: 'Setpassword',
				component: () => import( /* webpackChunkName: "setpassword" */ '../views/Setpassword.vue')
			},
		]
	},
	{
		path: '/element',
		name: 'Element',
		component: () => import( /* webpackChunkName: "about" */ '../views/Element.vue')
	},
	{
		path: '/regist',
		name: 'Regist',
	
		component: () => import( /* webpackChunkName: "regist" */ '../views/Regist.vue')
	},
]

const router = new VueRouter({
	routes
})

import Cookies from 'js-cookie'

// t去哪里 f从哪来 n 去哪里
router.beforeEach(function(t, f, n) {
	if (t.meta.auth) {
		let user = Cookies.get('user')
		if (user) {
			n()
		} else {
			n({
				name: "Login",
				query: {
					next: t.path
				}
			})
		}
	} else {
		n();
	}

})

export default router
