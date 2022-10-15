<template>
  <div class="ww-home-page" id="home">
    <div class="sakura-falling"></div>
    <img src="/images/t6ffnbn.png" alt="image-top-left" class="top-left-decoration" />
    <img src="/images/dGOOfnA.png" alt="image-top-right" class="top-right-decoration" />
    <section id="media"></section>
    <div class="wrap">
      <div class="title">
        <h1 data-aos="zoom-in-down" data-aos-duration="1000">Amir</h1>
        <h2 data-aos="zoom-in-down" data-aos-duration="1000">&</h2>
        <h1 data-aos="zoom-in-down" data-aos-duration="1000">Eneng Hamidah</h1>
        <h3 data-aos="zoom-in-down" data-aos-duration="1000">Are getting married</h3>
        <p data-aos="zoom-in-down" data-aos-duration="1000">
          on <span class="date">02 November 2022</span>, At
          <span class="place">Pasir Randu</span> Serang Baru, Cikarang
        </p>
      </div>
      <div
        class="img-circles position-relative"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        <img src="/images/bg2.jpg" />
      </div>
    </div>
    <div id="time">
      <div class="row" data-aos="zoom-out-down" data-aos-duration="1000">
        <Timers date="2022-11-03" />
      </div>
    </div>
  </div>
  <Closegive />
  <Couple />
  <Reception />
  <!--
  <Gallery />
  -->
  <Rsv />
  <Bonus />

  <av-circle
    :outline-width="0"
    :progress-width="5"
    :outline-meter-space="5"
    :playtime="true"
    :audioControls="false"
    :progressClockwise="true"
    :rotateGraph="true"
    :autoplay="true"
    ref="mediaplayer"
    playtime-font="18px Monaco"
    audio-src="/mp3/wedding1.mp3"
  ></av-circle>

  <nav class="mobile">
    <ul>
      <li>
        <a href="#home"><i class="fas fa-home"></i></a> <span>Home</span>
      </li>
      <li>
        <a href="#giveclose"><i class="fas fa-user-circle"></i></a> <span>profile</span>
      </li>
      <li>
        <a href="#events"><i class="fas fa-map-marker-alt"></i></a> <span>Location</span>
      </li>
      <li>
        <a href="#rsvp"><i class="fas fa-comments"></i></a> <span>Comment</span>
      </li>
    </ul>
  </nav>
</template>

<script>
// @ is an alias to /src
import Gallery from "@/components/Gallery.vue";
import Rsv from "@/components/Rsv.vue";
import Peoples from "@/components/People.vue";
import Reception from "@/components/Reception.vue";
import Couple from "@/components/Couple.vue";
import Bonus from "@/components/Bonus.vue";
import Timers from "./Timer.vue";
import Closegive from "@/components/Giveclose.vue";

export default {
  name: "HomeView",
  components: {
    Gallery,
    Rsv,
    Peoples,
    Reception,
    Couple,
    Bonus,
    Timers,
    Closegive,
  },
  mounted() {
    this.isPlay();
  },
  methods: {
    isPlay() {
      const plugin4 = document.createElement("script");
      plugin4.setAttribute("src", "/scripts/jquery.min.js?ver=1.1.0");
      plugin4.async = true;
      document.head.appendChild(plugin4);

      const plugin3 = document.createElement("script");
      plugin3.setAttribute("src", "/scripts/bootstrap.bundle.min.js?ver=1.1.0");
      plugin3.async = true;
      document.head.appendChild(plugin3);

      const plugin2 = document.createElement("script");
      plugin2.setAttribute("src", "/scripts/aos.js?ver=1.1.0");
      plugin2.async = true;
      document.head.appendChild(plugin2);

      const plugin1 = document.createElement("script");
      plugin1.setAttribute("src", "/scripts/ekko-lightbox.min.js?ver=1.1.0");
      plugin1.async = true;
      document.head.appendChild(plugin1);

      const plugin = document.createElement("script");
      plugin.setAttribute("src", "/scripts/main.js?ver=1.1.0");
      plugin.async = true;
      document.head.appendChild(plugin);

      var sakura = new Sakura(".div", {
        colors: [
          {
            gradientColorStart: "#dbb1b1",
            gradientColorEnd: "#dbb1b1",
            gradientColorDegree: 120,
          },
          {
            gradientColorStart: "#dbb1b1",
            gradientColorEnd: "#dbb1b1",
            gradientColorDegree: 120,
          },
          {
            gradientColorStart: "#dbb1b1",
            gradientColorEnd: "#dbb1b1",
            gradientColorDegree: 120,
          },
        ],
        delay: 350,
      });
      //this.$refs.mediaplayer.$data.audio.autoplay = true;
      this.$refs.mediaplayer.$data.audio.autoplay = true;
    },
  },
};
</script>
<style>
body {
  width: auto;
  height: auto;
  overflow: auto !important;
}
</style>
