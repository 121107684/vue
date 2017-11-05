<template>
    <header id="header" class="media">
        <a @click="showeilder" id="menu-toggle"></a>
        <a class="logo pull-left" href="index.html">SUPER ADMIN 1.0</a>

        <div class="media-body">
            <div class="media" id="top-menu">
                <div class="pull-left tm-icon">
                    <a data-drawer="messages" class="drawer-toggle" href="">
                        <i class="sa-top-message"></i>
                        <i class="n-count animated">5</i>
                        <span>Messages</span>
                    </a>
                </div>
                <div class="pull-left tm-icon">
                    <a data-drawer="notifications" class="drawer-toggle" href="">
                        <i class="sa-top-updates"></i>
                        <i class="n-count animated">9</i>
                        <span>Updates</span>
                    </a>
                </div>
                <div id="time" class="pull-right">
                    <span id="hours"></span>
                    :
                    <span id="min"></span>
                    :
                    <span id="sec"></span>
                </div>

                <div class="media-body">
                    <input type="text" class="main-search">
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'header',
    data:function(){
        return{
            scopeshow:this.$props.scopeshow
        }    
    },
    methods:{
        showeilder(){
            this.scopeshow =!this.scopeshow
            this.$emit('sidebaremit', this.scopeshow);
        }
    },
    props:{
        sideShow:Boolean
    }
}
</script>