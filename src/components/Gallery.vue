<template>
  <div class="ww-section bg-light" id="gallery">
    <div class="ww-photo-gallery">
      <div class="container">
        <h2
          class="h1 text-center pb-3 ww-title"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          Photo Gallery
        </h2>
        <div class="col-md-12 text-center ww-category-filter mb-4">
          <a class="btn btn-outline-primary ww-filter-button" href="#" data-filter="all"
            >All</a
          ><a
            class="btn btn-outline-primary ww-filter-button"
            href="#"
            data-filter="vacation"
            >Our Vacation</a
          ><a
            class="btn btn-outline-primary ww-filter-button"
            href="#"
            data-filter="party"
            >Party</a
          ><a
            class="btn btn-outline-primary ww-filter-button"
            href="#"
            data-filter="ceremony"
            >Ceremony</a
          ><a
            class="btn btn-outline-primary ww-filter-button"
            href="#"
            data-filter="wedding"
            >Wedding</a
          >
        </div>
        <div
          class="ww-gallery"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          <div class="card-columns">
            <div class="card" data-groups='["vacation","ceremony"]'>
              <a
                href="../assets/adm/images/gallery-pic-1.jpg"
                data-toggle="lightbox"
                data-gallery="ww-gallery"
                ><img
                  class="img-fluid"
                  src="../assets/adm/images/gallery-pic-1.jpg"
                  alt="Gallery Pic 1"
              /></a>
            </div>
            <div class="card" data-groups='["party","wedding"]'>
              <a
                href="../assets/adm/images/gallery-pic-2.jpg"
                data-toggle="lightbox"
                data-gallery="ww-gallery"
                ><img
                  class="img-fluid"
                  src="../assets/adm/images/gallery-pic-2.jpg"
                  alt="Gallery Pic 2"
              /></a>
            </div>
            <div class="card" data-groups='["vacation"]'>
              <a
                href="../assets/adm/images/gallery-pic-3.jpg"
                data-toggle="lightbox"
                data-gallery="ww-gallery"
                ><img
                  class="img-fluid"
                  src="../assets/adm/images/gallery-pic-3.jpg"
                  alt="Gallery Pic 3"
              /></a>
            </div>
            <div class="card" data-groups='["party","vacation"]'>
              <a
                href="../assets/adm/images/gallery-pic-4.jpg"
                data-toggle="lightbox"
                data-gallery="ww-gallery"
                ><img
                  class="img-fluid"
                  src="../assets/adm/images/gallery-pic-4.jpg"
                  alt="Gallery Pic 4"
              /></a>
            </div>
            <div class="card" data-groups='["vacation"]'>
              <a
                href="../assets/adm/images/gallery-pic-5.jpg"
                data-toggle="lightbox"
                data-gallery="ww-gallery"
                ><img
                  class="img-fluid"
                  src="../assets/adm/images/gallery-pic-5.jpg"
                  alt="Gallery Pic 5"
              /></a>
            </div>
            <div class="card" data-groups='["wedding","ceremony","party"]'>
              <a
                href="../assets/adm/images/gallery-pic-6.jpg"
                data-toggle="lightbox"
                data-gallery="ww-gallery"
                ><img
                  class="img-fluid"
                  src="../assets/adm/images/gallery-pic-6.jpg"
                  alt="Gallery Pic 6"
              /></a>
            </div>
            <div class="card" data-groups='["vacation"]'>
              <a
                href="../assets/adm/images/gallery-pic-7.jpg"
                data-toggle="lightbox"
                data-gallery="ww-gallery"
                ><img
                  class="img-fluid"
                  src="../assets/adm/images/gallery-pic-7.jpg"
                  alt="Gallery Pic 7"
              /></a>
            </div>
            <div class="card" data-groups='["wedding","party"]'>
              <a
                href="../assets/adm/images/gallery-pic-8.jpg"
                data-toggle="lightbox"
                data-gallery="ww-gallery"
                ><img
                  class="img-fluid"
                  src="../assets/adm/images/gallery-pic-8.jpg"
                  alt="Gallery Pic 8"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
