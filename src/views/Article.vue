<template>
	<div class="article">
		{{article.content}}
		<br>
		<router-link :to="{name:'Book',params:{pk:article.bookid}}">返回章节</router-link>
	</div>
</template>

<script>
	import {articles} from '../data/bookdata.js'
	export default {
		data() {
			return {
				article: null
			}
		},
		created() {
			this.article = articles.filter((item) => {
				return item.id == this.$route.params.pk;
			})[0]
		}
	}
</script>

<style>
</style>
