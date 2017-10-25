<template>
<div id="app" >
  <div id="skin-blur-violate">
    <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url(./assets/css/animate.css);
@import url(./assets/css/bootstrap.min.css);
@import url(./assets/css/calendar.css);
@import url(./assets/css/file-manager.css);
@import url(./assets/css/font-awesome.min.css);
@import url(./assets/css/form.css);
@import url(./assets/css/generics.css);
@import url(./assets/css/icons.css);
@import url(./assets/css/lightbox.css);
@import url(./assets/css/media-player.css);
@import url(./assets/css/style.css);
#app{
  height: 100%;
  position: relative;
}
#skin-blur-violate {
  height: 100%;
}
</style>
