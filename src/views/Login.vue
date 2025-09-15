<style scoped>

</style>

<template>

</template>


<script setup>
import {reactive, ref} from "vue";
import {axiosPost} from "@/util/axiosApi.js";
import router from "@/router/router.js";

	let {userName, password} = reactive({userName: '', password: ''});
	const login = async ()=>{
		console.log('开始调用axiosPost');

		const {responseData, errorData} = await axiosPost('/user/login', {userName, password});
		console.log('结束调用axiosPost');
		if (!responseData.value.err) {
			//写入token
			sessionStorage.setItem("token", responseData.value.token);
			//设定已登录

			console.log(responseData.value.msg);
			router.push('/mainHtmlBody');
		} else {
			console.log(responseData.value.msg);
		}

	}

</script>