<style scoped>

</style>

<template>
	<div id="pcoded" class="pcoded iscollapsed" theme-layout="vertical" vertical-placement="left" vertical-layout="wide"
		 pcoded-device-type="desktop" vertical-nav-type="expanded" vertical-effect="shrink" vnavigation-view="view1"
		 nav-type="st2" fream-type="theme1" sidebar-img="false" sidebar-img-type="img1" layout-type="light">
		<div class="pcoded-overlay-box"></div>
		<div class="pcoded-container navbar-wrapper">
			<Top></Top>

			<div class="pcoded-main-container" style="margin-top: 56px;">
				<div class="pcoded-wrapper">
					<Left></Left>
					<div class="pcoded-content">
						<!-- Page-header start -->
						<MainTop></MainTop>
						<!-- Page-header end -->
						<MainContent></MainContent>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script setup>

	import Top from "@/components/Top.vue";
	import Left from "@/components/Left.vue";
	import MainTop from "@/components/MainTop.vue";
	import MainContent from "@/components/MainContent.vue";
</script>