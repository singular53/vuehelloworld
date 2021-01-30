<template>
	<el-row class="element">
		<el-container>
			<el-header><i class="el-icon-moon-night"></i></el-header>
			<el-container>
				<el-aside width="300px">
					<el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
					</el-switch>
					<div class="block">
						<span class="demonstration">默认</span>
						<el-slider v-model="value1"></el-slider>
					</div>
					<el-button plain @click="open1">
						可自动关闭
					</el-button>
				</el-aside>
				<el-container>
					<el-main>
						<el-row>
							<el-button>默认按钮</el-button>
							<el-button type="primary">主要按钮</el-button>
							<el-button type="success">成功按钮</el-button>
							<el-button type="info">信息按钮</el-button>
							<el-button type="warning">警告按钮</el-button>
							<el-button type="danger">危险按钮</el-button>
						</el-row>

						<el-row>
							<el-button plain>朴素按钮</el-button>
							<el-button type="primary" plain>主要按钮</el-button>
							<el-button type="success" plain>成功按钮</el-button>
							<el-button type="info" plain>信息按钮</el-button>
							<el-button type="warning" plain>警告按钮</el-button>
							<el-button type="danger" plain>危险按钮</el-button>
						</el-row>

						<el-row>
							<el-button round>圆角按钮</el-button>
							<el-button type="primary" round>主要按钮</el-button>
							<el-button type="success" round>成功按钮</el-button>
							<el-button type="info" round>信息按钮</el-button>
							<el-button type="warning" round>警告按钮</el-button>
							<el-button type="danger" round>危险按钮</el-button>
						</el-row>

						<el-row>
							<el-button icon="el-icon-search" circle></el-button>
							<el-button type="primary" icon="el-icon-edit" circle></el-button>
							<el-button type="success" icon="el-icon-check" circle></el-button>
							<el-button type="info" icon="el-icon-message" circle></el-button>
							<el-button type="warning" icon="el-icon-star-off" circle></el-button>
							<el-button type="danger" icon="el-icon-delete" circle></el-button>
						</el-row>
						<template>
							<el-input-number v-model="num" @change="handleChange" :step="2" controls-position="right" label="描述文字"></el-input-number>
						</template>
						<div class="block">
							<span class="demonstration">默认 Hover 指示器触发</span>
							<el-carousel height="150px">
								<el-carousel-item v-for="item in img" :key="item">
									<img :src="item" alt="">
								</el-carousel-item>
							</el-carousel>
						</div>
					</el-main>
					<el-footer>
						<el-button type="primary" :loading="true">加载中</el-button>
					</el-footer>
				</el-container>
			</el-container>
		</el-container>
	</el-row>
</template>

<script>
	export default {
		name: 'Element',
		components: {

		},
		data() {
			return {
				num: 1,
				value: true,
				img: [
					require("../assets/l1.jpg"),
					require("../assets/l2.jpg")
				]
			}
		},
		methods: {
			handleChange(value) {
				console.log(value)
			},
			open1() {
				const h = this.$createElement;

				this.$notify({
					title: '标题名称',
					message: h('i', {
						style: 'color: teal'
					}, '这是提示文案')
				});
			},
		}

	}
</script>

<style>
	.el-row {
		margin-bottom: 20px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		/* line-height: 160px; */
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item img {
		width: 500px;
		height: 360px;
	}

	/* .el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	} */
</style>
