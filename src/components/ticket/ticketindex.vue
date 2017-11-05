<template>
    <section id="content" class="container">
        <h4 class="page-title">问券项目</h4>
        <div class="block-area shortcut-area">
            <router-link to="/">
                <a class="shortcut tile">
                    <img src="../../assets/img/shortcuts/money.png" alt="">
                    <small class="t-overflow">答题统计</small>
                </a>
            </router-link>
            <router-link to="/editque">
            <a class="shortcut tile">
                <img src="../../assets/img/shortcuts/twitter.png" alt="">
                <small class="t-overflow">编辑问题</small>
            </a>
             </router-link>
             <router-link to="/settingque">
            <a class="shortcut tile">
                <img src="../../assets/img/shortcuts/calendar.png" alt="">
                <small class="t-overflow">问券设置</small>
            </a>
             </router-link>
             
        </div>
        <hr class="whiter" />
        <router-view/>
    </section>
</template>
