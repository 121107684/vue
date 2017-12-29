<template>
    <div>
        <h4 class="page-title">程序员老黄历</h4>
         <div class="block-area shortcut-area">
            <router-link to="/programmerdate">
                <a class="shortcut tile">
                    <img src="../../assets/img/shortcuts/calendar.png" alt="">
                    <small class="t-overflow">统计</small>
                </a>
            </router-link>
            <router-link to="／programmerdate/position">
                <a class="shortcut tile">
                    <img src="../../assets/img/shortcuts/money.png" alt="">
                    <small class="t-overflow">方位</small>
                </a>
            </router-link>
            <router-link to="/ticketindex/editque">
                <a class="shortcut tile">
                    <img src="../../assets/img/shortcuts/twitter.png" alt="">
                    <small class="t-overflow">事件</small>
                </a>
            </router-link>
            <router-link to="/ticketindex/settingque">
                <a class="shortcut tile">
                    <img src="../../assets/img/shortcuts/calendar.png" alt="">
                    <small class="t-overflow">饮料</small>
                </a>
            </router-link>
            <router-link to="/ticketindex/settingque">
                <a class="shortcut tile">
                    <img src="../../assets/img/shortcuts/calendar.png" alt="">
                    <small class="t-overflow">工具</small>
                </a>
            </router-link>
            
        </div>
        <hr class="whiter" />
        <router-view/>
    
    
    </div>

</template>
<script>
    export default {
        name:''
    }
</script>