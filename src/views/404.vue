<style scoped>
</style>
<template>
	<!-- Error -->
	<div class="container-xxl container-p-y">
		<div class="misc-wrapper">
			<h2 class="mb-2 mx-2">页面未找到 :(</h2>
			<p class="mb-4 mx-2"> 😖 在此服务器上找不到请求的URL！！！</p>
			<RouterLink :to="{path:'/'}" class="btn btn-primary">返回首页</RouterLink>
			<div class="mt-3">
				<img
						src="@/assets/lr/img/illustrations/page-misc-error-light.png"
						alt="page-misc-error-light"
						width="500"
						class="img-fluid"
						data-app-dark-img="illustrations/page-misc-error-dark.png"
						data-app-light-img="illustrations/page-misc-error-light.png"
				/>
			</div>
		</div>
	</div>
</template>
<script setup>
import '@/assets/lr/vendor/fonts/boxicons.css';
import '@/assets/lr/vendor/css/core.css';
import '@/assets/lr/vendor/css/theme-default.css';

import '@/assets/lr/css/demo.css';
import '@/assets//lr/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import '@/assets/lr/vendor/css/pages/page-misc.css';
import '@/assets/lr/vendor/css/pages/page-auth.css';

</script>