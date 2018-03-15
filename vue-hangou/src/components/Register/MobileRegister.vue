<template>
	<div class="mobile-register">
		<div class="nctouch-inp-con">
		    <form action="" method="">
		      	<ul class="form-box">
		        	<li class="form-item">
			          	<h4>手&nbsp;机&nbsp;号</h4>
			          	<div class="input-box">
			           		<input type="tel" placeholder="请输入手机号" class="inp" name="usermobile" id="usermobile" oninput="writeClear($(this));" maxlength="11">
			            	<span class="input-del"></span>
			          	</div>
			        </li>
			        <li class="form-item">
			          	<h4>验&nbsp;证&nbsp;码</h4>
			          	<div class="input-box">
			            	<input type="text" id="captcha" name="captcha" maxlength="4" size="10" class="inp" autocomplete="off" placeholder="输入4位验证码" oninput="writeClear($(this));">
			            	<span class="input-del code"></span>
			            	<a href="javascript:void(0)" id="refreshcode" class="code-img">
			            		<img border="0" id="codeimage" name="codeimage" src="http://www.hangowa.com/mo_bile/index.php?act=seccode&amp;op=makecode&amp;nchash=&amp;t=0.31782064485433525">
			            	</a>
			          	</div>
			        </li>
		      	</ul>
		     	<div class="remember-form">
			        <input id="checkbox" type="checkbox" checked="">
			        <label for="checkbox">同意</label>
			        <a class="reg-cms" href="document.html" target="_blank">用户注册协议</a> 
		     	</div>
		      	<div class="form-btn">
		      		<a href="javascript:void(0);" class="btn" id="refister_mobile_btn">获取验证码</a>
		      	</div>
		      	<p class="form-notes">绑定手机不收任何费用，一个手机只能绑定一个账号，若需修改或解除已绑定的手机，请登录商城PC端进行操作。</p>
		    </form>
		</div>
	</div>
</template>

<script>
	export default{
		name:'mobile-register'
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
			    .code-img{
			    	position: absolute;
				    right: 0.5rem;
				    top: 0.3rem;
				    z-index: 1;
				    width: 4rem;
				    height: 1.4rem;
				    img{
				    	width: 100%;
    					height: 100%;
				    }
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
    	a{
    		display: inline-block;
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
    .form-notes{
    	text-align: center;
	    font-size: 0.55rem;
	    line-height: 0.7rem;
	    color: #999;
	    margin: 1rem 1.5rem;
    }
}	    
</style>