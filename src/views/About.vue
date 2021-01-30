<template>
  <div class="about">
   <Heart @abo="js" :statepop="f"> <span slot="to">商品：</span> </Heart>
   <br>
   <Star @tellf='sp' :starnumprop='px'> <span slot="to">商品</span> </Star>
   <br>
   <br>
   <br>
   <span><Step v-if="des"></Step></span>
   <button @click="des=!des">注销</button>
  </div>
</template>

<script>
	import Heart from '@/components/Heart.vue'
	import Star from '@/components/Star.vue'
	import Step from '@/components/Step.vue'
export default {
	components:{
		Heart,
		Star,
		Step
	},
	methods:{
		js(e){
			console.log('商品接收',e.state)
		},
		sp(e){
			console.log('商品评星',e.starnum)
		}
	},
	data(){
		return{
			f:true,
			des:true,
			px:1
		}
	}
	
}
	
</script>