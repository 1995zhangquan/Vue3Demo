<style scoped>.pagination {
	display: flex;
	padding-left: 0;
	list-style: none;
}

.page-item {
	margin: 0 2px;
}

.page-link {
	position: relative;
	display: block;
	padding: 0.5rem 0.75rem;
	margin-left: -1px;
	line-height: 1.25;
	color: #007bff;
	background-color: #fff;
	border: 1px solid #dee2e6;
	text-decoration: none;
}

.page-link:hover {
	z-index: 2;
	color: #0056b3;
	background-color: #e9ecef;
	border-color: #adb5bd;
}

.page-item.active .page-link {
	z-index: 3;
	color: #fff;
	background-color: #007bff;
	border-color: #007bff;
}

.page-item.disabled .page-link {
	color: #6c757d;
	pointer-events: none;
	cursor: auto;
	background-color: #fff;
	border-color: #dee2e6;
}

.dataTables_info {
	padding-top: 0.85em;
	padding-bottom: 0.85em;
}
</style>

<template>
	<div class="row">
		<div class="col-sm-12 col-md-5">
			<div class="dataTables_info" id="zero_config_info" role="status" aria-live="polite">
				{{ infoText }}
			</div>
		</div>
		<div class="col-sm-12 col-md-7">
			<div class="dataTables_paginate paging_simple_numbers" id="zero_config_paginate">
				<ul class="pagination">
					<!-- 上一页按钮 -->
					<li class="paginate_button page-item previous" :class="{ disabled: currentPage <= 1 }" id="zero_config_previous">
						<a href="#" aria-controls="zero_config" data-dt-idx="0" tabindex="0" class="page-link" @click.prevent="goToPrevious">
							上一页
						</a>
					</li>

					<!-- 页码按钮 -->
					<li v-for="page in visiblePages" :key="page" class="paginate_button page-item" :class="{ active: page === currentPage }">
						<a href="#" :aria-controls="`zero_config`" :data-dt-idx="page" :tabindex="0" class="page-link" @click.prevent="goToPage(page)">{{ page }}</a>
					</li>

					<!-- 下一页按钮 -->
					<li class="paginate_button page-item next" :class="{ disabled: currentPage >= totalPages }" id="zero_config_next">
						<a href="#" aria-controls="zero_config" :data-dt-idx="totalPages + 1" tabindex="0" class="page-link" @click.prevent="goToNext">
							下一页
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

import {computed} from "vue";

interface Props {
	currentPage?: number
	totalItems?: number
	itemsPerPage?: number
	maxVisibleButtons?: number
}

const props = withDefaults(defineProps<Props>(), {
	currentPage: 1,
	totalItems: 1,
	itemsPerPage: 1,
	maxVisibleButtons: 1
})

// 定义事件
const emit = defineEmits<{
	(e: 'page-changed', page: number): void
}>()

// 计算总页数
const totalPages = computed(() => {
	return Math.ceil(props.totalItems / props.itemsPerPage)
})

// 计算可见的页码按钮
const visiblePages = computed(() => {
	const pages = []
	const half = Math.floor(props.maxVisibleButtons / 2)

	let start = Math.max(1, props.currentPage - half)
	let end = Math.min(totalPages.value, start + props.maxVisibleButtons - 1)

	// 调整起始页，确保显示足够的按钮
	if (end - start + 1 < props.maxVisibleButtons) {
		start = Math.max(1, end - props.maxVisibleButtons + 1)
	}

	for (let i = start; i <= end; i++) {
		pages.push(i)
	}

	return pages
})

// 显示信息文本
const infoText = computed(() => {
	const start = (props.currentPage - 1) * props.itemsPerPage + 1
	const end = Math.min(props.currentPage * props.itemsPerPage, props.totalItems)
	return `Showing ${start} to ${end} of ${props.totalItems} entries`
})

// 处理页码变化
const goToPage = (page: number) => {
	if (page >= 1 && page <= totalPages.value && page !== props.currentPage) {
		emit('page-changed', page)
	}
}

const goToPrevious = () => {
	if (props.currentPage > 1) {
		goToPage(props.currentPage - 1)
	}
}

const goToNext = () => {
	if (props.currentPage < totalPages.value) {
		goToPage(props.currentPage + 1)
	}
}
</script>
