<template>
    <section id="login">
        <form class="box animated tile active" id="box-reset">
            <h2 class="m-t-0 m-b-15">重置 Password</h2>
            <p>找回密码功能，请查看邮箱</p>
            <input type="email" class="login-control m-b-20" placeholder="输入注册时的Email">
            <button class="btn btn-sm m-r-5">发送邮件重制密码</button>
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
    name: 'resetpassword'
}
</script>
 
<style scoped>
#login .box {
    display: block;
}
</style>
