<template>
    <aside id="sidebar" v-bind:class="{'toggled':sidebarShow}">
        <!-- Sidbar Widgets -->
        <div class="side-widgets overflow">
            <!-- Profile Menu -->
            <div class="text-center s-widget m-b-25 dropdown" id="profile-menu" v-bind:class="{'open':isopen}">
                <a class="block" @click="menuopen">
                    <img class="profile-pic animated" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509534543302&di=cb032c5f319726e6aeff3b924a82064d&imgtype=0&src=http%3A%2F%2Fdiy.qqjay.com%2Fu2%2F2014%2F1012%2F5c300407c746e414d779859e116915a6.jpg" alt="">
                </a>
                <ul class="dropdown-menu profile-menu">
                    <li>
                        <a href="">我的工程</a>
                        <i class="icon left">&#61903;</i>
                        <i class="icon right">&#61815;</i>
                    </li>
                    <li>
                        <a href="">消息</a>
                        <i class="icon left">&#61903;</i>
                        <i class="icon right">&#61815;</i>
                    </li>
                    <li>
                        <a href="">设置</a>
                        <i class="icon left">&#61903;</i>
                        <i class="icon right">&#61815;</i>
                    </li>
                    <li>
                        <a href="">登出</a>
                        <i class="icon left">&#61903;</i>
                        <i class="icon right">&#61815;</i>
                    </li>
                </ul>
                <h4 class="m-0">用户名</h4>
                昵称
            </div>

            <!-- Calendar -->
            <div class="s-widget m-b-25">
                <div id="sidebar-calendar"></div>
            </div>

            <!-- Feeds -->
            <div class="s-widget m-b-25">
                <h2 class="tile-title">
                    News Feeds
                </h2>

                <div class="s-widget-body">
                    <div id="news-feed"></div>
                </div>
            </div>

            <!-- Projects -->
            <div class="s-widget m-b-25">
                <h2 class="tile-title">
                    Projects on going
                </h2>

                <div class="s-widget-body">
                    <div class="side-border">
                        <small>Joomla Website</small>
                        <div class="progress progress-small">
                            <a href="#" data-toggle="tooltip" title="" class="progress-bar tooltips progress-bar-danger" style="width: 60%;" data-original-title="60%">
                                <span class="sr-only">60% Complete</span>
                            </a>
                        </div>
                    </div>
                    <div class="side-border">
                        <small>Opencart E-Commerce Website</small>
                        <div class="progress progress-small">
                            <a href="#" data-toggle="tooltip" title="" class="tooltips progress-bar progress-bar-info" style="width: 43%;" data-original-title="43%">
                                <span class="sr-only">43% Complete</span>
                            </a>
                        </div>
                    </div>
                    <div class="side-border">
                        <small>Social Media API</small>
                        <div class="progress progress-small">
                            <a href="#" data-toggle="tooltip" title="" class="tooltips progress-bar progress-bar-warning" style="width: 81%;" data-original-title="81%">
                                <span class="sr-only">81% Complete</span>
                            </a>
                        </div>
                    </div>
                    <div class="side-border">
                        <small>VB.Net Software Package</small>
                        <div class="progress progress-small">
                            <a href="#" data-toggle="tooltip" title="" class="tooltips progress-bar progress-bar-success" style="width: 10%;" data-original-title="10%">
                                <span class="sr-only">10% Complete</span>
                            </a>
                        </div>
                    </div>
                    <div class="side-border">
                        <small>Chrome Extension</small>
                        <div class="progress progress-small">
                            <a href="#" data-toggle="tooltip" title="" class="tooltips progress-bar progress-bar-success" style="width: 95%;" data-original-title="95%">
                                <span class="sr-only">95% Complete</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Side Menu -->
        <ul class="list-unstyled side-menu">
            <li class="active">
                <router-link class="sa-side-home" to="/ticketindex">
                    <span class="menu-item">管理首页</span>
                </router-link>
            </li>
            <li>
                <router-link class="sa-side-home" to="/jx3">
                    <span class="menu-item">基三啪啪啪</span>
                </router-link>
            </li>
            <li>
                <router-link class="sa-side-calendar" to="/programmerdate">
                    <span class="menu-item">程序员老黄历</span>
                </router-link>
            </li>
            <li>
                <a class="sa-side-table" href="tables.html">
                    <span class="menu-item">Tables</span>
                </a>
            </li>
            <li class="dropdown">
                <a class="sa-side-form" href="">
                    <span class="menu-item">Form</span>
                </a>
                <ul class="list-unstyled menu-item">
                    <li>
                        <a href="form-elements.html">Basic Form Elements</a>
                    </li>
                    <li>
                        <a href="form-components.html">Form Components</a>
                    </li>
                    <li>
                        <a href="form-examples.html">Form Examples</a>
                    </li>
                    <li>
                        <a href="form-validation.html">Form Validation</a>
                    </li>
                </ul>
            </li>
            <li class="dropdown">
                <a class="sa-side-ui" href="">
                    <span class="menu-item">User Interface</span>
                </a>
                <ul class="list-unstyled menu-item">
                    <li>
                        <a href="buttons.html">Buttons</a>
                    </li>
                    <li>
                        <a href="labels.html">Labels</a>
                    </li>
                    <li>
                        <a href="images-icons.html">Images &amp; Icons</a>
                    </li>
                    <li>
                        <a href="alerts.html">Alerts</a>
                    </li>
                    <li>
                        <a href="media.html">Media</a>
                    </li>
                    <li>
                        <a href="components.html">Components</a>
                    </li>
                    <li>
                        <a href="other-components.html">Others</a>
                    </li>
                </ul>
            </li>
            <li>
                <a class="sa-side-chart" href="charts.html">
                    <span class="menu-item">Charts</span>
                </a>
            </li>
            <li>
                <a class="sa-side-folder" href="file-manager.html">
                    <span class="menu-item">File Manager</span>
                </a>
            </li>
            <li>
                <a class="sa-side-calendar" href="calendar.html">
                    <span class="menu-item">Calendar</span>
                </a>
            </li>
            <li class="dropdown">
                <a class="sa-side-page" href="">
                    <span class="menu-item">Pages</span>
                </a>
                <ul class="list-unstyled menu-item">
                    <li>
                        <a href="list-view.html">List View</a>
                    </li>
                    <li>
                        <a href="profile-page.html">Profile Page</a>
                    </li>
                    <li>
                        <a href="messages.html">Messages</a>
                    </li>
                    <li>
                        <a href="login.html">Login</a>
                    </li>
                    <li>
                        <a href="404.html">404 Error</a>
                    </li>
                </ul>
            </li>
        </ul>

    </aside>
</template>
<script>
export default {
    name: "sidebar",
    data:function(){
        return{
           isopen:true
        }    
    },
    methods:{
        menuopen(){
            this.isopen = !this.isopen;
        }  
    },
    props:{
        sidebarShow:Boolean
    }
}
</script>
