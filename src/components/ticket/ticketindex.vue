<template>
   
        <div>
        <h4 class="page-title">问券项目</h4>
        <div class="block-area shortcut-area">
            <router-link to="/ticketindex">
                <a class="shortcut tile">
                    <img src="../../assets/img/shortcuts/money.png" alt="">
                    <small class="t-overflow">答题统计</small>
                </a>
            </router-link>
            <router-link to="/ticketindex/editque">
            <a class="shortcut tile">
                <img src="../../assets/img/shortcuts/twitter.png" alt="">
                <small class="t-overflow">编辑问题</small>
            </a>
             </router-link>
             <router-link to="/ticketindex/settingque">
            <a class="shortcut tile">
                <img src="../../assets/img/shortcuts/calendar.png" alt="">
                <small class="t-overflow">问券设置</small>
            </a>
             </router-link>
             
        </div>
        <hr class="whiter" />
        <router-view/></div>
   
</template>
<style>
.el-radio__inner {
    border-radius: 100% !important;
    background:transparent;  
}
.el-radio__input.is-checked .el-radio__inner{
    background: rgba(255,255,255,.5);
    border-color: rgba(255,255,255,.5)
}
.el-radio__label {
    text-shadow: none;
    color:#aaa
}
.el-radio__input.is-checked+.el-radio__label{
    color:#fff
}
</style>

