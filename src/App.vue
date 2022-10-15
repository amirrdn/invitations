<template>
  <div id="sakura">
    <div class="page-content container">
      <Sampul @overlays="overlaysd" v-if="currentUser == null || currentUser == 404">
      </Sampul>
      <div class="div" v-if="currentUser !== null && currentUser !== 404">
        <router-view />
      </div>
      <!--
      <Sampul @overlays="overlaysd" v-if="!istruelay"> </Sampul>
      <div class="div" v-if="istruelay">
        <router-view />
      </div>
      -->
    </div>
  </div>
</template>
<script>
import Sampul from "./Sampul.vue";
export default {
  components: {
    Sampul,
  },
  data() {
    return {
      soundfile: "/assets/mp3/moca.mp3",
      istruelay: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    isoveroflay() {
      return this.$store.state;
    },
  },
  mounted() {
    $("title").text("Amir & Midah | Wedding");
    //var audio = new Audio(require("./assets/mp3/moca.mp3"));
    //audio.play();
    /*
    if (this.currentUser !== null) {
      this.istruelay = true;
    }
    */
    setTimeout(() => {
      if (this.currentUser == null || this.currentUser == 400 || this.currentUser.msg) {
        this.$store.dispatch("auth/logout");
        this.istruelay = !this.istruelay;
      }
    }, 500);
  },
  methods: {
    overlaysd() {
      if (this.currentUser == null || this.currentUser == 400 || this.currentUser.msg) {
        this.istruelay = false;
      } else {
        this.istruelay = true;
      }
    },
  },
};
</script>
