<template>
	<div class="step">
		<button @click="num--">-</button>
		<span>{{num}}</span>
		<button @click="num++">+</button>
	</div>
</template>

<script>
	export default{
		name:'Step'
		data(){
			return{
				num:0,
				myInterval:null
			}
		},
		methods:{
			myfun(){
				
			}
		},
		beforeCreate(){
			console.log('创建前',this.num,this.myfu)
		},
		created(){
			console.log('创建后',this.num,this.myfu,this.$el)
			this.myInterval = setInterval(function(){
				console.log("++")
			},2000)
		},
		beforeDestroy() {
			console.log('删除前')
			clearInterval(this.myInterval)
		},
		destroyed() {
			console.log('删除后')
		},
		beforeMount() {
			console.log('渲染前',this.$el)
		},
		mounted() {
			console.log('渲染后',this.$el)
		},
		beforeUpdate() {
			console.log('更新前',this.num,this.$el.innerText)
		},
		updated() {
			console.log('更新后',this.num,this.$el.innerText)
		}
	}
</script>

<style>
</style>
