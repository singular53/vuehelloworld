<template>
	<div class="heart" @click="dz">
		<slot name="to"></slot>
		<img :src="state?nimg:yimg" alt="">
		<span>{{ state?'点赞':'取消' }}</span>
	</div>
</template>

<script>
	export default{
		props:{
			statepop:{
				type:Boolean,
				required:true
			}
		},
		created(){
			this.state=this.statepop;
		},
		data(){
			return{
				state:true,
				nimg:require("../assets/heart/heart.png"),
				yimg:require("../assets/heart/heartsel.png")
			}
		},
		methods:{
			dz(){
				this.state=!this.state;
				this.$emit('abo',{'state':this.state})
			}
		}
	}
</script>

<style lang="less">
	.heart{
			display: inline-block;
			img{
				vertical-align: -10px;
			}
		}
</style>
