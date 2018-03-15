<template>
	<div class="general-register">
		<div class="nctouch-inp-con">
    		<form action="" method="">
		      	<ul class="form-box">
			        <li class="form-item">
				        <h4>用&nbsp;户&nbsp;名</h4>
				        <div class="input-box">
				            <input type="text" placeholder="请输入6-20个字符" class="inp" name="username" id="username" required pattern="^[a-z0-9]\w{6,20}$" v-model="username">
				            <span class="input-del"></span>
				        </div>
			        </li>
			        <li class="form-item">
			          	<h4>设置密码</h4>
			          	<div class="input-box">
				            <input type="password" placeholder="请输入6-20位密码" class="inp" name="pwd" id="userpwd" required pattern="^[a-z0-9]\w{6,20}$" v-model="pwd">
				            <span class="input-del"></span>
			          	</div>
			        </li>
			        <li class="form-item">
			          	<h4>确认密码</h4>
			          	<div class="input-box">
			            	<input type="password" placeholder="请再次输入密码" class="inp" name="password_confirm" id="password_confirm" required pattern="^[a-z0-9]\w{6,20}$" v-model="password_confirm">
			            	<span class="input-del"></span>
			          	</div>
			        </li>
			        <li class="form-item">
			          	<h4>邮　　箱</h4>
			          	<div class="input-box">
			            	<input type="email" placeholder="请输入常用邮箱地址" class="inp" name="email" id="email" required pattern="\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}" v-model="email">
			            	<span class="input-del"></span>
			          	</div>
			        </li>
		      	</ul>
		      	<div class="remember-form">
			        <input id="checkbox" type="checkbox" checked="" class="checkbox">
			        <label for="checkbox">同意</label>
		        	<a class="reg-cms" href="document.html" target="_blank">用户注册协议</a> 
		      	</div>
		      	<div class="error-tips"></div>
		      	<div class="form-btn">
		      		<input type="submit" @click="register(e)" class="btn" id="registerbtn" value="注册">
		      	</div>
		    </form>
		    <input type="hidden" name="referurl">
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'general-register',
		data(){
			return{
				username:'',
				pwd:'',
				password_confirm:'',
				email:'',
				userInfo:{}
			}
		},
		updated(){
			this.userInfo.username=this.username
			this.userInfo.pwd=this.pwd
			this.userInfo.email=this.email	
		},
		methods:{
			register(e){
				 e.preventDefault();
				 if(this.password_confirm === this.pwd){
				 	axios.post({
			            url:'/api/register',
			            type:'post',
			            dataType:'json',
			            data:{userInfo},
			            success(results){
			                console.log(results)
			            }
			        })
				 }else{
				 	alert('两次输入的密码不一致')
				 }
				 
			}
		}
	}
</script>

<style lang="scss" scoped>
.nctouch-inp-con {
    display: block;
    clear: both;
    .form-box{
    	background: #FFF;
    	li{
    		position: relative;
		    z-index: 1;
		    display: block;
		    min-height: 1.95rem;
		    margin-left: 0.5rem;
		    background-color: #FFF;
		    border-bottom: solid #EEE 0.05rem;
		    h4{
		    	position: absolute;
			    z-index: 1;
			    top: 0;
			    left: 0;
			    width: 3rem;
			    font-size: 0.6rem;
			    line-height: 1.95rem;
			    color: #444;
			    text-align: right;
		    }
		    .input-box{
	    	    display: block;
			    height: 1.95rem;
			    margin: 0 0.5rem 0 3.5rem;
			    position: relative;
			    z-index: 1;
			    .inp{
			    	width: 100%;
				    min-height: 0.95rem;
				    padding: 0.5rem 0;
				    border: 0 none;
				    font-size: 0.6rem;
				    line-height: 0.95rem;
				    color: #000;
			    }
		    }
    	}
    }
    .remember-form{
    	height: 0.9rem;
	    margin: 1rem 2rem 0 2rem;
	    position: relative;
	    input[type="checkbox"]:checked {
		    border-color: #48CFAE;
		    background-color: #48CFAE;
		}
		input[type="checkbox"]{
		    margin-top: -0.4rem;
		    position: relative;
		    width: 0.75rem;
		    height: 0.75rem;
		    border: 0.05rem solid #CCC;
		    border-radius: 50%;
		    vertical-align: middle;
		}
		label{
			display: inline-block;
		    height: 0.9rem;
		    line-height: 0.9rem;
		    font-size: 0.6rem;
		    color: #666;
		    vertical-align: top;
		}
		a{
			line-height: 0.9rem;
		    font-size: 0.6rem;
		    vertical-align: top;
		    display: inline-block;
		    height: 0.9rem;
		    color: #5D9CEC;
		}
    }
    .form-btn{
    	margin-top: 1rem;
    	input{
    		width: 90%;
		    height: 1.8rem;
		    padding: 0;
		    margin: 0 5%;
		    font-size: 0.8rem;
		    line-height: 1.8rem;
		    text-align: center;
		    color: #888;
		    background: #EEE;
		    border: none;
		    border-radius: 0.2rem;
    	}
    }
}
</style>