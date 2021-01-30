<template>
	<div>
		<!-- <h1>我是HiWorld组件</h1>
		<p>msg:{{msg}}</p>
		<p>num:{{num}}</p> -->
		<slot name="top"></slot>
		<button @click="info">按钮: <slot name="inner"></slot> </button>
	</div>
</template>

<script>
	export default{
		props:{
			msg:{
				type:String,
				default:'你好!'
			},
			num:{
				type:Number,
				required:true
			}
		},
		components:{
			
		},
		methods:{
			info(){
				this.$emit('infos',{'name':'lg'})
			}
		}
	}
</script>

<style>
</style>
