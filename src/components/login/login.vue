<template>
    <section id="login">
        <div class="box tile animated active" id="box-login">
            <h2 class="m-t-0 m-b-15">登陆</h2>
            <input type="text" v-model="submit.username" class="login-control m-b-10" placeholder="用户名">
            <input type="password" class="login-control" v-model="submit.password" placeholder="密码">
            <div class="checkbox m-b-20">
                <label>
                    <input type="checkbox"> 记住我
                </label>
            </div>
            <button v-on:click="login" class="btn btn-sm m-r-5">登陆</button>

            <small>
                <router-link to="/register">
                    <a class="box-switcher">没有账号?</a>
                </router-link> or
                <router-link to="/resetpassword">
                    <a class="box-switcher">忘记密码?</a>
                </router-link>
            </small>
        </div>
        <!-- Forgot Password -->

    </section>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            submit:{
                username: 'baiyang',
                password: 123456
            }
        }
    },
    methods: {
        login() {
            console.log(this.submit)
        }
    }
}
</script>