<template>
  <div class="ww-section" id="bonus">
    <div class="container">
      <h5 class="text-center first" data-aos="zoom-in-down" data-aos-duration="1000">
        <i class="fas fa-gift"></i><br />
        Send Gifts
      </h5>
      <p class="text-center" data-aos="zoom-out-down" data-aos-duration="1000">
        Your blessing is a very meaningful gift to us. But if you give is an expression of
        your love, you can give gifts cashless.
      </p>
      <div class="row">
        <div class="col-lg-6">
          <div class="card card-margin">
            <div class="card-header no-border">
              <h5
                class="card-title text-center"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
              >
                BCA
              </h5>
            </div>
            <div class="card-body pt-0">
              <div class="widget-49">
                <div class="widget-49-title-wrapper">
                  <div
                    class="widget-49-date-primary"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                  >
                    <span class="widget-49-date-day"><img src="/images/bca.png" /></span>
                    <span class="widget-49-date-month"></span>
                  </div>
                  <div class="widget-49-meeting-info" id="textToBecopied">
                    <span
                      class="widget-49-pro-title"
                      data-aos="zoom-in-down"
                      data-aos-duration="1000"
                      >a.n Amirudin</span
                    >
                    <span
                      class="widget-49-meeting-time"
                      data-aos="zoom-in-down"
                      data-aos-duration="1000"
                      >578-048-5860</span
                    >
                  </div>
                </div>
                <div class="widget-49-meeting-action">
                  <a
                    href="javascript:void(0)"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                    class="btn btn-sm btn-flash-border-primary"
                    @click="copyToClipboard('98374632762')"
                    >Copy</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card card-margin">
            <div class="card-header no-border">
              <h5
                class="card-title text-center"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
              >
                BCA
              </h5>
            </div>
            <div class="card-body pt-0">
              <div class="widget-49">
                <div class="widget-49-title-wrapper">
                  <div
                    class="widget-49-date-primary"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                  >
                    <span class="widget-49-date-day"><img src="/images/bca.png" /></span>
                    <span class="widget-49-date-month"></span>
                  </div>
                  <div class="widget-49-meeting-info" id="textToBecopied">
                    <span
                      class="widget-49-pro-title"
                      data-aos="zoom-in-down"
                      data-aos-duration="1000"
                      >a.n Eneng Hamidah</span
                    >
                    <span
                      data-aos="zoom-in-down"
                      data-aos-duration="1000"
                      class="widget-49-meeting-time"
                      >221-011-0324</span
                    >
                  </div>
                </div>
                <div class="widget-49-meeting-action">
                  <a
                    href="javascript:void(0)"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                    class="btn btn-sm btn-flash-border-primary"
                    @click="copyToClipboard('98374632762')"
                    >Copy</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="footer">
            <strong
              >Copyright © 2022
              <a target="_blank" href="https://id.linkedin.com/in/amirmatahati"
                >Amir Rudin</a
              >.</strong
            >
          </div>
        </div>
      </div>
    </div>
    <Toast />
  </div>
</template>
<script>
import Toast from "primevue/toast";
export default {
  components: {
    Toast,
  },
  methods: {
    copyToClipboard(textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      this.$toast.add({
        severity: "success",
        summary: "Info",
        detail: "Success copy",
        life: 3000,
      });
    },
  },
};
</script>
