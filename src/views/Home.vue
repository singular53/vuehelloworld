<template>
	<div class="home">
		<div class="books">
			<el-row :gutter="20">
				<el-col :span="6" v-for="b in books" :key="b.id">
					<router-link :to="{name:'Book',params:{pk:b.id}}">
						<el-card :body-style="{ padding: '0px' }">
							<img :src="b.mainimg" class="image">
							<div style="padding: 14px;">
								<span>{{b.title}}</span>
							</div>
						</el-card>
					</router-link>
				</el-col>
			</el-row>
		</div>
	</div>



</template>

<style lang="less">
	.books{
		width: 80%;
		margin: 0 auto;
	}
</style>

<script>
	import {books} from '../data/bookdata.js'
	export default {
		name: 'Home',
		data() {
			return {
				books: books
			}
		},

	}
</script>
