<template>
  <div id="fullscreen-xo">
    <app-header></app-header>
     <div class="clearfix"></div>
     <section id="main" class="p-relative" role="main">
      <side-Bar></side-Bar>
      <router-view/>
    </section>
  </div>
</template>

<script>
import AppHeader from '../components/publicmodel/header';
import SideBar from '../components/publicmodel/sidebar';
import footers from '../components/publicmodel/footers';

export default {
  name: 'index',
  components: {
    AppHeader, SideBar,footers
  }
}
</script>
<style scope>
#fullscreen-xo{
  position: relative;
  height: 100%;
}
#main {
  height: -moz-calc(100% - 50px);
  height: -webkit-calc(100% - 50px);
  height: calc(100% - 50px);
  overflow-y: auto;
  overflow-x: hidden
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

