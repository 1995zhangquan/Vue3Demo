<style scoped>
</style>
<template>
	<div class="page-breadcrumb">
		<div class="row">
			<div class="col-7 align-self-center">
				<h4 class="page-title text-truncate text-dark font-weight-medium mb-1">Basic Initialisation</h4>
				<div class="d-flex align-items-center">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb m-0 p-0">
							<li class="breadcrumb-item"><router-link :to="{path:'/'}"  class="text-muted">首页</router-link></li>
							<li class="breadcrumb-item text-muted active" aria-current="page">
								{{$router.currentRoute.value.name}}
							</li>
						</ol>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import router from "../../router/router.js";
</script>