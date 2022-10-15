<template>
  <div
    class="elementor-element elementor-element-d945c58 wdp-sticky-section-no elementor-widget elementor-widget-weddingpress-wellcome"
    data-id="d945c58"
    data-element_type="widget"
    data-widget_type="weddingpress-wellcome.default"
  >
    <div class="elementor-widget-container">
      <div
        class="modalx"
        data-sampul="https://weddingkita.id/wp-content/uploads/2021/12/pexels-photo-265730.png"
        style="
          background-image: url('https://weddingkita.id/wp-content/uploads/2021/12/pexels-photo-265730.png');
        "
      >
        <div class="overlayy"></div>
        <div class="content-modalx">
          <div class="info_modalx">
            <div class="elementor-image img">
              <img src="/images/bg2.jpg" title="oke-11-1.png" alt="oke-11-1.png" />
            </div>

            <div class="wdp-mempelai">
              Amir &amp; Hamidah
              <div id="messages" v-if="msgvisible">
                Your mobile phone or code is wrong !
              </div>
            </div>

            <div class="wdp-dear">Kepada Bapak/Ibu/Saudara/i</div>
            <div class="wdp-mempelai">{{ name }}</div>
            <div class="wdp-text">
              Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.
            </div>
            <div class="wdp-button-wrapper">
              <a
                href="javascript:void(0)"
                type="button"
                class="elementor-button"
                @click="openDialog"
              >
                <span> <i aria-hidden="true" class="fas fa-book-open"></i> </span>
                &nbsp;Buka Undangan
              </a>
            </div>
            <!--
            <div class="wdp-button-wrapper">
              <a
                href="javascript:void(0)"
                type="button"
                class="elementor-button"
                @click="overlays"
              >
                <span> <i aria-hidden="true" class="fas fa-book-open"></i> </span>
                &nbsp;Buka Undangan
              </a>
            </div>
            -->
          </div>
        </div>
      </div>
    </div>

    <Dialog
      v-model:visible="display"
      :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
      :style="{ width: '28vw' }"
    >
      <template #header>
        <h5>Form</h5>
      </template>
      <div class="card no-border">
        <div class="card-body">
          <div class="mb-3 row">
            <input
              type="text"
              class="form-control"
              placeholder="mobile phone or code"
              v-model="user.mobile_no"
            />
            <p v-if="onlystring" class="p-message p-component p-message-error">
              Only Number
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <Button
          label="Submit"
          :loading="isloading"
          class="p-button-sm"
          @click="handleLogin()"
        />
      </template>
    </Dialog>
    <Toast />
  </div>
</template>
<script>
import User from "./models/user";
import axios from "axios";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";

const sampul = jQuery(".modalx").data("sampul");
jQuery(".modalx").css("background-image", "url(" + sampul + ")");
jQuery("body").css("overflow", "hidden");
jQuery(".wdp-button-wrapper button").on("click", function () {
  jQuery(".modalx").addClass("removeModals");
  jQuery("body").css("overflow", "auto");
  document.getElementById("song").play();
});
export default {
  emits: ["overlays"],
  components: {
    Dialog,
    Toast,
  },
  data() {
    return {
      user: new User("", ""),
      display: false,
      isloading: false,
      msgvisible: false,
      onlystring: false,
      name: null,
    };
  },
  computed: {
    errormsg() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    setTimeout(() => {
      this.name = this.$route.query.name;
    }, 500);
  },
  methods: {
    openDialog() {
      this.user.mobile_no = this.$route.query.code;
      setTimeout(() => {
        this.handleLogin();
      }, 500);
      //this.display = !this.display;
    },
    overlays() {
      this.$emit("overlays");
    },
    handleLogin() {
      if (this.user.mobile_no == null) {
        this.onlystring = true;
        return false;
      }
      this.isloading = true;
      const url = "https://ipinfo.io/json?token=e16fb98a1de251";
      axios.get(url).then((response) => {
        this.user.datalog = response.data;
        if (this.user.mobile_no) {
          this.$store
            .dispatch("auth/login", this.user, this.results)
            .then((response) => {
              if (response == 400 || this.errormsg == false) {
                this.msgvisible = true;
                this.isloading = false;
                this.$store.dispatch("auth/logout");
              }
              this.$store.dispatch("over/incrementIfOdd", true).then(() => {});
              this.isloading = false;
              setTimeout(() => {
                this.overlays();
                this.display = !this.display;
              }, 500);
            })
            .catch((error) => {
              this.isloading = false;
              this.$toast.add({
                severity: "success",
                summary: "Error Message",
                detail: "Order submitted",
                life: 663000,
              });
              if (error.message == "Request failed with status code 403") {
                this.$store.dispatch("auth/logout");
              }
              console.error(error);
            });
        }
      });
    },
    isNumber(n) {
      return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
    },
  },
};
</script>
