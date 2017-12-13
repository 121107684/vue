<template>
  <div id="fullscreen-xo" v-bind:class="{'menu-active':sidebarShow}">
    <app-header :sidebarShow="sidebarShow"></app-header>
     <div class="clearfix"></div>
     
     <section id="main" class="p-relative" role="main">
      <side-Bar :sidebarShow="sidebarShow"></side-Bar>
      <section id="content" class="container">
        <transition name="component-fade" mode="out-in">
        <router-view/>
        </transition>
      </section>
    </section>
  </div>
</template>

<script>
import AppHeader from "../components/publicmodel/header";
import SideBar from "../components/publicmodel/sidebar";
import footers from "../components/publicmodel/footers";

export default {
  name: "index",
  data: function() {
    return {
      sidebarShow: false
    };
  },
  components: {
    AppHeader,
    SideBar,
    footers
  },
  methods: {
    sideshow: function(ttt) {
      this.sidebarShow = ttt;
    }
  }
};
</script>
<style scope>
#fullscreen-xo {
  position: relative;
  height: 100%;
}
#main {
  height: -moz-calc(100% - 50px);
  height: -webkit-calc(100% - 50px);
  height: calc(100% - 50px);
}
.container {
  overflow-y: auto;
  height: -moz-calc(100% - 50px);
  height: -webkit-calc(100% - 50px);
  height: calc(100% - 50px);
  transition: all 0.3s;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.5s ease;
  top: 0;
  left: 0;
}
.component-fade-enter,
.component-fade-leave-to {
  left: 400px;
  opacity: 0;
  position: absolute;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

