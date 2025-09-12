<style scoped>

</style>

<template>
	<section class="login-block">
		<!-- Container-fluid starts -->
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<!-- Authentication card start -->

					<form class="md-float-material form-material">
						<div class="text-center">
							<img src="@/assets/images/logo.png" alt="logo.png">
						</div>
						<div class="auth-box card">
							<div class="card-block">
								<div class="row m-b-20">
									<div class="col-md-12">
										<h3 class="text-center">登录</h3>
									</div>
								</div>
								<div class="form-group form-primary">
									<input type="text" name="userName" class="form-control" v-model="userName">
									<span class="form-bar"></span>
									<label class="float-label">登录名</label>
								</div>
								<div class="form-group form-primary">
									<input type="password" name="password" class="form-control" v-model="password">
									<span class="form-bar"></span>
									<label class="float-label">密码</label>
								</div>
								<div class="row m-t-25 text-left">
									<div class="col-12">
										<div class="checkbox-fade fade-in-primary d-">
											<label>
												<input type="checkbox">
												<span class="cr">
													<i class="cr-icon icofont icofont-ui-check txt-primary"></i>
												</span>
												<span class="text-inverse">记住我</span>
											</label>
										</div>
										<div class="forgot-phone text-right f-right">
											<a href="javaScript:void(0)" class="text-right f-w-600">忘记密码？</a>
										</div>
									</div>
								</div>
								<div class="row m-t-30">
									<div class="col-md-12">
										<button @click="login()" type="button" class="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20">登录</button>
									</div>
								</div>
								<hr>
								<div class="row">
									<div class="col-md-10">
										<p class="text-inverse text-left m-b-0">Thank you.</p>
										<p class="text-inverse text-left"><a href="/"><b>返回首页</b></a></p>
									</div>
									<div class="col-md-2">
										<img src="@/assets/images/auth/Logo-small-bottom.png" alt="small-logo.png">
									</div>
								</div>
							</div>
						</div>
					</form>
					<!-- end of form -->
				</div>
				<!-- end of col-sm-12 -->
			</div>
			<!-- end of row -->
		</div>
		<!-- end of container-fluid -->
	</section>
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