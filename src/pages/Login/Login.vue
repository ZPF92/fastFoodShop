<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">麓谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on:loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button class="get_verification"
                      :disabled="sendCodeTime>0 || !isPhoneNumber"
                      :class="{right_phone_number:isPhoneNumber}"
                      @click.prevent="sendCode"
              >
                {{sendCodeTime ? `已发送${sendCodeTime}s` : '获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册麓谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input :type="showPwd ? 'tel' : 'password'" maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch_button" :class="showPwd ? 'on' : 'off'" @click="showPwd = !showPwd">
                  <div class="switch_circle" :class="{right:showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'on' : 'off'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:3000/captcha" alt="captcha" @click="updateCaptcha">
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
    <AlertTip
      v-show="isShowAlertTip"
      :alertText="alertText"
      @closeTip="closeTip"
    />
  </section>
</template>

<script>
	import './Login.styl'
  import { mapActions } from 'vuex'
  import { reqCode,loginSms } from '@/api'
  import AlertTip from '@/components/AlertTip/AlertTip.vue'
	export default {
	  name: 'Login',
    components:{
      AlertTip
    },
    data(){
	    return {
	      loginWay:true,
        code:'',
        phone:'',
        name:'',
        pwd:'',
        captcha:'',
        sendCodeTime:0,
        showPwd:false,
        isShowAlertTip:false,
        alertText:''
      };
    },
    computed:{
	    isPhoneNumber(){
	      return /^1\d{10}$/g.test(this.phone);
      }
    },
    methods:{
      ...mapActions(['saveUserInfo']),
	    async sendCode(){
        const { isPhoneNumber,phone,showAlert} = this;
        if(isPhoneNumber){
          this.sendCodeTime = 30;
          const timer = setInterval(() => {
            this.sendCodeTime--;
            if(this.sendCodeTime == 0){
              clearInterval(timer);
            }
          },1000);
          const result = await reqCode(phone);
          if(result.code === 1){
            showAlert(result.msg);
            this.sendCodeTime = 0;
            clearInterval(timer);
          }
        }
      },
      updateCaptcha(ev){
	      ev.target.src = `http://localhost:3000/captcha?t=${new Date().getTime()}`;
      },
      showAlert(text){
	      this.alertText = text;
	      this.isShowAlertTip = true;
      },
      async login(){
	      const { loginWay,showAlert,saveUserInfo } = this;
	      if(loginWay){
          const { phone,code,isPhoneNumber } = this;
          if(!isPhoneNumber){
            showAlert('手机号码不正确');
            return;
          }else if(!/\d{6}/g.test(code)){
            showAlert('验证码不正确');
            return;
          }else{
            const result = await loginSms({phone,code});
            if(result.code === 1){
              showAlert(result.msg);
            }else{
              const userInfo = result.data;
              saveUserInfo(userInfo);
              this.$router.replace({name:'Profile'});
            }
          }
        }else{
          const { name,pwd,captcha } = this;
          if(!name){
            showAlert('必须指定用户名');
            return;
          }else if(!pwd){
            showAlert('必须指定密码');
            return;
          }else if(!captcha){
            showAlert('必须指定验证码');
            return;
          }
        }
      },
      closeTip(){
	      this.isShowAlertTip = false;
	      this.alertText = '';
      }
    }
	}
</script>
