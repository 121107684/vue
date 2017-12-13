<template>
  <div>
    <h4 class="page-title">基三啪啪啪</h4>
    <div class="block-area">
      <div class="row">
        <div class="col-md-9">
          <div class="carousel-wrap">
            <transition-group class='slide-ul' name="list">
              <div class="tile-light p-5 m-b-15" v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
                <div class="cover p-relative">
                  <img src="../../assets/img/cover-bg.jpg" class="w-100" alt="">
                  <img class="profile-pic" src="../../assets/img/profile-pic.jpg" alt="">
                  <div class="profile-btn">
                    <button class="btn btn-alt btn-sm" @click="cliee"><i class="icon-bubble"></i> <span>Message</span></button>
                    <button class="btn btn-alt btn-sm"><i class="icon-user-2"></i> <span>name</span></button>
                  </div>
                </div>
                <div class="p-5 m-t-15">
                  {{list.desc}}
                </div>
              </div>
            </transition-group>
          </div>
  
          <!-- Completed Projects -->
          <div class="tile m-t-15">
            <h2 class="tile-title m-b-5">发布列表</h2>
            <div class="tile-config dropdown">
              <a data-toggle="dropdown" href="" class="tooltips tile-menu" title="" data-original-title="Options"></a>
              <ul class="dropdown-menu pull-right text-right">
                <li><a href="">Edit</a></li>
                <li><a href="">Delete</a></li>
              </ul>
            </div>
  
            <div class="p-10 news">
              <div class="col-xs-2">
                <div class="tile p-5 m-b-10">
                  <a target="_blank" title="Medical-Pro Bootstrap Responsive Template" href="https://wrapbootstrap.com/theme/medical-pro-responsive-template-WB06421XL">
                    <img class="w-100" src="../../assets/img/projects/1.png" alt="">
                    <small class="t-overflow m-t-10">Medical-Pro Bootstrap Responsive</small>
                  </a>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-xs-2">
                <div class="tile p-5 m-b-10">
                  <a target="_blank" title="Black Pearl Responsive Admin Template" href="https://wrapbootstrap.com/theme/black-pearl-responsive-admin-template-WB040H333">
                    <img class="w-100" src="../../assets/img/projects/2.png" alt="">
                    <small class="t-overflow m-t-10">Black Pearl Responsive Admin Template</small>
                  </a>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-xs-2">
                <div class="tile p-5 m-b-10">
                  <a target="_blank" title="UNEKUE Single Page Portfolio Template" href="https://wrapbootstrap.com/theme/unekue-single-page-portfolio-template-WB04R2B18">
                    <img class="w-100" src="../../assets/img/projects/3.png" alt="">
                    <small class="t-overflow m-t-10">UNEKUE Single Page Portfolio Template</small>
                  </a>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
  
        </div>
  
        <div class="col-md-3">
          <div class="tile">
            <h2 class="tile-title">门派筛选</h2>
            <div class="tile-config dropdown">
              <a data-toggle="dropdown" href="" class="tooltips tile-menu" title="" data-original-title="Options"></a>
              <ul class="dropdown-menu pull-right text-right">
                <li><a href="">Edit</a></li>
                <li><a href="">Delete</a></li>
              </ul>
            </div>
  
            <div class="p-5 photos">
              <div class="col-xs-3">
                <img src="../../assets/img/profile-pics/1.jpg" alt="">
              </div>
              <div class="col-xs-3">
                <img src="../../assets/img/profile-pics/2.jpg" alt="">
              </div>
              <div class="col-xs-3">
                <img src="../../assets/img/profile-pics/3.jpg" alt="">
              </div>
              <div class="col-xs-3">
                <img src="../../assets/img/profile-pics/1.jpg" alt="">
              </div>
              <div class="col-xs-3">
                <img src="../../assets/img/profile-pics/2.jpg" alt="">
              </div>
              <div class="col-xs-3">
                <img src="../../assets/img/profile-pics/3.jpg" alt="">
              </div>
              <div class="col-xs-3">
                <img src="../../assets/img/profile-pics/1.jpg" alt="">
              </div>
              <div class="col-xs-3">
                <img src="../../assets/img/profile-pics/2.jpg" alt="">
              </div>
              <div class="col-xs-3">
                <img src="../../assets/img/profile-pics/4.jpg" alt="">
              </div>
              <div class="col-xs-3">
                <img src="../../assets/img/profile-pics/1.jpg" alt="">
              </div>
              <div class="col-xs-3">
                <img src="../../assets/img/profile-pics/2.jpg" alt="">
              </div>
              <div class="col-xs-3">
                <img src="../../assets/img/profile-pics/3.jpg" alt="">
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
  
  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data: () => {
      return {
        slideList: [{
            clickUrl: "#",
            desc: "aaaaaaaaaaaaaaa",
            image: "http://dummyimage.com/1745x492/f1d65b"
          },
          {
            clickUrl: "#",
            desc: "bbbbbbbbbbb",
            image: "http://dummyimage.com/1745x492/40b7ea"
          },
          {
            clickUrl: "#",
            desc: "cccccccccccc",
            image: "http://dummyimage.com/1745x492/e3c933"
          }
        ],
        currentIndex: 0,
        timer: ""
      };
    },
    methods: {
      cliee: function() {
        console.log(this._data);
      },
      go() {
        this.timer = setInterval(() => {
          this.autoPlay();
        }, 4000);
      },
      stop() {
        clearInterval(this.timer);
        this.timer = null;
      },
      change(index) {
        this.currentIndex = index;
      },
      autoPlay() {
        this.currentIndex++;
        if (this.currentIndex > this.slideList.length - 1) {
          this.currentIndex = 0;
        }
      }
    },
    created() {
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPlay();
        }, 4000);
      });
    }
  };
</script>

<style scope>
  .carousel-wrap {
    position: relative;
    height: 310px;
    width: 100%;
    overflow: hidden;
  }
  
  .slide-ul {
    width: 100%;
    height: 100%;
  }
  
  .slide-ul .tile-light {
    position: absolute;
  }
  
  .slide-ul .tile-light,
  .slide-ul img {
    width: 100%;
  }
  
  .list-enter-active {
    transition: all 1s ease;
    transform: translateX(0);
  }
  
  .list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%);
  }
  
  .list-enter {
    transform: translateX(100%);
  }
  
  .list-leave {
    transform: translateX(0);
  }
</style>

