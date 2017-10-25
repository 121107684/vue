<template>
  <section id="login">
    <!-- Register -->
    <form class="box animated tile active" id="box-register">
      <h2 class="m-t-0 m-b-15">用户注册</h2>
      <input type="text" class="login-control m-b-10" placeholder="姓名全称">
      <input type="email" class="login-control m-b-10" placeholder="邮件地址（用于找回密码）">
      <input type="password" class="login-control m-b-10" placeholder="密码">
      <input type="password" class="login-control m-b-20" placeholder="再次输入密码">

      <button class="btn btn-sm m-r-5">用户注册</button>

      <small>
        <router-link to="/login">
          <a class="box-switcher">已经拥有一个账户?</a>
        </router-link>
      </small>
    </form>
  </section>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App 1'
    }
  }
}
</script>
 
<style scoped>
#login .box {
  display: block;
}
</style>