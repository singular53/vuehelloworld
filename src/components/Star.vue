<template>
	<div class="star" >
		<span> <slot name="to"></slot> </span>
		<img v-for="(item,index) in 5" :key="index" :src="index<starnum?yimg:nimg" alt="item" @click="px(index+1)">
		<span>{{starnum}}星</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				starnum:0,
				nimg:require("../assets/star/star.png"),
				yimg:require("../assets/star/starsel.png")
			}
		},
		props:{
			starnumprop:{
				type:Number,
				required:true
			}
		},
		methods:{
			px(num){
				this.starnum=num
				this.$emit('tellf',{'starnum':this.starnum})
			}
		},
		created() {
			this.starnum=this.starnumprop
		}
	}
</script>

<style>
</style>
