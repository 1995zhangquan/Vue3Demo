<style scoped>

</style>

<template>

	<div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">

		<Top></Top>
		<Left></Left>
		<div class="page-wrapper" style="display: block;">
			<!--这里是导航-->
			<Nav></Nav>
			<!--导航结束-->
			<div class="container-fluid">
			<!--主体信息-->
				<RouterView></RouterView>
			</div>

			<Footer></Footer>
		</div>
	</div>
</template>


<script setup>
import Top from "@/components/layout/Top.vue";
import Left from "@/components/layout/Left.vue";
import Footer from "@/components/layout/Footer.vue";
import Nav from "@/components/layout/Nav.vue";
</script>