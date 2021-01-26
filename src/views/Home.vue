<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
		<HiWorld :num="20" @infos='send'></HiWorld>
	</div>
  </div>
    
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    
  },
  methods:{
	send(e){
		console.log('Home',e)
	}
  }
}
</script>
