<template>
  <div class="about">
    <h1>This is an about page</h1>
	<div>
		<button @click="reduce">-</button>
		<span>{{num}}</span>
		<button @click="add">+</button>
		<p>{{ordinary()}}</p>
		<p>{{comput1}}</p>
		
	</div>
	<HiWorld msg='尨' :num="10" @infos='send'></HiWorld>
  </div>
</template>

<script>
export default {
	data(){
		return{
			num:0
		}
	},
	methods:{
		send(e){
			console.log('About',e)
		},
		ordinary(){
			console.log('普通法执行了')
		},
		reduce(){
			this.num--;
		},
		add(){
			this.num++;
		}
	},
	computed:{
		comput1(){
			console.log('计算方法执行了')
			return'计算方法执行了'+this.num
		}
	},
	watch:{
		num(newValue,oldValue){
			console.log('检测到num的变化',newValue,oldValue)
		}
	}
	
}
	
</script>