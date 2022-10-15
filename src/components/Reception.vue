<template>
  <div class="ww-section bg-light" id="events">
    <div class="container ww-wedding-event">
      <h2
        class="h1 text-center pb-3 ww-title"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        style="font-weight: 600; font-family: Great Vibes; color: rgb(230, 152, 150)"
      >
        Wedding Events
      </h2>
      <div class="row spaces">
        <div class="col-sm-6 spaces" data-aos="zoom-in-out" data-aos-duration="1000">
          <img src="images/01.png" class="rounded-circle mx-auto d-block" alt="png" />
          <h5 class="text-center">Akad Nikah</h5>
          <h6 class="text-center"><span class="color-a">09:00 WIB</span></h6>
        </div>
        <div class="col-sm-6" data-aos="zoom-in-down" data-aos-duration="1000">
          <img src="images/02.png" class="rounded-circle mx-auto d-block" alt="png" />
          <h5 class="text-center">Resepsi</h5>
          <h6 class="text-center"><span class="color-a">10:00 WIB s/d Selesai </span></h6>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="my-3">
            <div
              class="h4 text-center"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              style="
                font-weight: 600;
                font-family: Great Vibes;
                color: rgb(230, 152, 150);
              "
            >
              Wedding Party
            </div>
            <ul>
              <li
                class="text-center"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                style="color: rgb(230, 152, 150)"
              >
                <i
                  class="text-muted fas fa-map-marker-alt"
                  style="color: rgb(230, 152, 150) !important"
                ></i
                ><span
                  class="pl-2 text-muted"
                  style="color: rgb(230, 152, 150) !important"
                  >Jl. Pasir Randu, Sukasari, Kec. Serang Baru, Kabupaten Bekasi, Jawa
                  Barat 17330</span
                >
              </li>
              <li
                class="pt-2 text-center"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
              >
                <i
                  class="text-muted far fa-calendar-alt"
                  style="color: rgb(230, 152, 150) !important"
                ></i
                ><span
                  class="pl-2 text-muted"
                  style="color: rgb(230, 152, 150) !important"
                  >02 Nov 2022, 9AM - end</span
                >
              </li>
            </ul>
            <div
              id="googleMap"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              style="width: 100%; height: 380px"
            ></div>
          </div>
          <div class="mb-3">
            <div class="position-relative">
              <div class="position-absolute top-0 start-50 translate-middle">
                <a
                  target="_blank"
                  href="https://www.google.com/maps?q=-6.3866595,107.1022039&z=17&hl=id"
                  class="btn btn-sm btn-info"
                  ><i class="fas fa-directions"></i> Direction</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: {
    GoogleMap,
    Marker,
  },
  data() {
    return {
      center: {
        lat: 107.102204,
        lng: -6.386659,
      },
    };
  },
  mounted() {
    google.maps.event.addDomListener(window, "load", this.initialize());
  },
  methods: {
    initialize() {
      const icon = {
        url: "/images/maps1.png", // url
        scaledSize: new google.maps.Size(90, 90), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0), // anchor
      };
      var propertiPeta = {
        center: new google.maps.LatLng(-6.386659, 107.102204),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };
      var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-6.386659, 107.102204),
        map: peta,
        icon: icon,
      });
    },

    // event jendela di-load
  },
};
</script>
