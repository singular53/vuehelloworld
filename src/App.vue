<template>
	<div id="app">
		<el-container>
			<el-header>
				<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
				background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item index="1">
						<router-link :to="{name:'Home'}">首页</router-link>
					</el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的</template>
						<el-menu-item index="2-1">
							<router-link style="color: rgb(255, 255, 255);text-decoration: none;" :to="{name:'Collect'}">收藏</router-link>
						</el-menu-item>
					</el-submenu>

					<template v-if="user">
						<el-menu-item index="4" class="rt" @click="logout">退出</el-menu-item>
						<el-menu-item index="3" class="rt">
							<router-link :to="{name:'Center'}">{{ user }}</router-link>
						</el-menu-item>
						
					</template>
					<template v-else>
						<el-menu-item index="4" class="rt"><router-link :to="{name:'Regist'}">注册</router-link></el-menu-item>
						<el-menu-item index="3" class="rt">
							<router-link :to="{name:'Login'}">登录</router-link>
						</el-menu-item>
						
					</template>

				</el-menu>
			</el-header>
			<el-main>
				<router-view />
			</el-main>
			<el-footer>
				Footer
			</el-footer>
		</el-container>

	</div>
</template>

<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		.rt {
			float: right;
		}

		.el-header {
			padding: 0;
		}

		.el-main {
			padding: 40px;
			background-color: lightcyan;
		}

		.el-footer {
			background-color: #B3C0D1;
		}

		a {
			&.router-link-exact-active {
				text-decoration: none;
			}
		}
	}
</style>
<script>
	export default {
		data() {
			return {
				user: null,
				activeIndex2: '1'
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			logout() {
				if (this.$route.name != "Home") {
					this.$router.push({
						name: "Home"
					});
				}
				this.user = null;
				this.$jsCookie.remove('user')
			}
		},
		created() {
			this.$bus.$on("userlogin", _u => {
				this.user = _u
				})

			let user = this.$jsCookie.get('user')
			if (user) {
				this.user = user;
			}
		},
		beforeDestroy() {
			this.$bus.$off("userlogin")
		}
	}
</script>
