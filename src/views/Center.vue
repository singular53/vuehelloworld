<template>
	<div class="center">
		{{user}}的个人中心
		<div>
			<router-view/>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user:this.$jsCookie.get('user')
			}
		}
	}
</script>

<style lang="less">
	.center{
		text-align: center;
	}
</style>
