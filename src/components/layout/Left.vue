<style scoped>

</style>

<template>
	<aside class="left-sidebar" data-sidebarbg="skin6">
		<!-- Sidebar scroll-->
		<div class="scroll-sidebar ps-container ps-theme-default ps-active-y" data-sidebarbg="skin6" data-ps-id="15fceb07-c5aa-3ea4-096b-3ad6b35a0281">
			<!-- Sidebar navigation-->
			<nav class="sidebar-nav">
				<ul id="sidebarnav" class="in">
					<li class="sidebar-item"><a class="sidebar-link sidebar-link" href="index.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home feather-icon"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg><span class="hide-menu">统计</span></a></li>
					<li class="list-divider"></li>
					<li class="nav-small-cap"><span class="hide-menu">用户管理</span></li>

					<li class="sidebar-item"> <RouterLink :to="{name:'UserList'}" class="sidebar-link"  aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag feather-icon"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line></svg><span class="hide-menu">用户列表</span></RouterLink></li>

					<li class="list-divider"></li>
					<li class="nav-small-cap"><span class="hide-menu">订单管理</span></li>
					<li class="sidebar-item"> <RouterLink :to="{name:'OrderList'}" class="sidebar-link"  aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag feather-icon"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line></svg><span class="hide-menu">用户列表</span></RouterLink></li>

				</ul>
			</nav>
			<!-- End Sidebar navigation -->
			<div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; height: 381px; right: 3px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 109px;"></div></div></div>
		<!-- End Sidebar scroll-->
	</aside>
</template>


<script setup>

</script>