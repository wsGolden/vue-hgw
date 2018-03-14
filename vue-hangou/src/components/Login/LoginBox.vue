<template>
	<div class="login-box">
		<div class="nctouch-inp-con">
		    <form action="" method="">
			    <ul class="form-box">
			        <li class="form-item">
			            <h4>账　户</h4>
			            <div class="input-box">
			            	<input type="text" placeholder="请输入用户名/已验证手机" class="inp" name="username" id="username" oninput="writeClear($(this));">
			            	<span class="input-del"></span> 
			            </div>
			        </li>
			        <li class="form-item">
			            <h4>密　码</h4>
			            <div class="input-box">
				            <input type="password" placeholder="请输入登录密码" class="inp" name="pwd" id="userpwd" oninput="writeClear($(this));">
				            <span class="input-del"></span> 
			            </div>
			        </li>
			    </ul>
			    <div class="remember-form">
			        <input id="checkbox" type="checkbox" checked="" class="checkbox">
			        <label for="checkbox">七天自动登录</label>
			        <a class="forgot-password" href="find_password.html">忘记密码？</a> 
			    </div>
			    <div class="error-tips"></div>
			    <div class="form-btn">
			    	<a href="javascript:void(0);" class="btn" id="loginbtn">登录</a>
			    </div>
		    </form>
		</div>
		<div class="joint-login">
		    <h2><span>合作账号登录</span></h2>
		    <ul>
		      <!--<li><a class="weibo" href="javascript: void(0);"></a></li>-->
		        <li>
		        	<a class="qq" href="javascript: void(0);"></a>
		        </li>
		    </ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'login-box'
	}
</script>

<style lang="scss" scoped>
	.login-box{
		display: block;
	    margin-top: 2rem;
	    background-color: #F5F5F5;
	    .nctouch-inp-con{
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
					    input{
					    	width: 100%;
						    min-height: 0.95rem;
						    padding: 0.5rem 0;
						    border: 0 none;
						    font-size: 0.6rem;
						    line-height: 0.95rem;
						    color: #000;
					    }
					    /*span{
					    	position: absolute;
						    z-index: 1;
						    top: 0.5rem;
						    right: 0.5rem;
						    display: none;
						    width: 0.975rem;
						    height: 0.975rem;
						    background-image: url(../images/cancel_b.png);
						    background-repeat: no-repeat;
						    background-position: 50% 50%;
						    background-size: 60%;
						    opacity: 0.4;
					    }*/
				    }
    			}
    		}
    		.remember-form{
    			height: 0.9rem;
			    margin: 1rem 2rem 0 2rem;
			    position: relative;
			    input[type="checkbox"] {
				    position: relative;
				    width: 0.75rem;
				    height: 0.75rem;
				    background-color: #F5F5F5;
				    border: 0.05rem solid #CCC;
				    -webkit-border-radius: 50%;
				    border-radius: 50%;
				    vertical-align: middle;
				    margin-top:-0.4rem;
				}
				input[type="checkbox"]:checked {
				    border-color: #48CFAE;
				    background-color: #48CFAE;
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
			    	position: absolute;
				    right: 0;
				    top: 0;
				    line-height: 0.9rem;
				    font-size: 0.6rem;
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
	    }
	    .joint-login{
	    	left: 0;
		    right: 0;
		    text-align: center;
		    h2{
		    	height: 1.1rem;
    			border-bottom: solid #CCC 0.05rem;
    			span{
    				display: inline-block;
				    height: 0.9rem;
				    line-height: 0.9rem;
				    padding: 0 1rem;
				    background-color: #f5f5f5;
				    color: #666;
				    font-size: 0.55rem;
				    transform: translate3d(0, 50%, 0);
    			}
		    }
		    ul{
		    	display: inline-block;
			    width: 10rem;
			    height: 2rem;
			    margin: 1rem auto 0;
			    font-size: 0;
			    li{
			    	text-align: center;
			    	.qq{
			    		display: inline-block;
					    width: 1.85rem;
					    height: 1.85rem;
					    background-color: #FFF;
					    background-position: 50% 50%;
					    background-repeat: no-repeat;
					    background-size: 70%;
					    border: solid 0.05rem #4FC0E8;
					    -webkit-border-radius: 50%;
					    border-radius: 50%;
					    background-image: url(../../../static/images/qq.png);
			    	}
			    }
		    }
	    }
	}
</style>