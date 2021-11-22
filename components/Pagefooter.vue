<template>
  <!-- partial:partials/_footer.html -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="border-top"></div>
        </div>
        <div class="col-sm-3 col-lg-3">
          <ul class="footer-vertical-nav">
            <li class="menu-title">
              <a href="pages/news-post.html">News</a>
            </li>
            <li><a href="index.html">Home</a></li>
            <li><a href="pages/world.html">World</a></li>
            <li><a href="pages/author.html">Magazine</a></li>
            <li><a href="pages/business.html">Business</a></li>
            <li><a href="pages/politics.html">Politics</a></li>
          </ul>
        </div>
        <div class="col-sm-3 col-lg-3">
          <ul class="footer-vertical-nav">
            <li class="menu-title"><a href="pages/world.html">World</a></li>
            <li><a href="pages/sports.html">Sports</a></li>
            <li><a href="pages/art.html">Crypto</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="pages/real-estate.html">Zikoko</a></li>
            <li><a href="pages/travel.html">Gists</a></li>
            <li><a href="pages/author.html">Author</a></li>
          </ul>
        </div>
        <div class="col-sm-3 col-lg-3">
          <ul class="footer-vertical-nav">
            <li class="menu-title"><a href="#">Features</a></li>
            <li><a href="#">Crime Reports</a></li>
            <li><a href="#">Weather</a></li>
            <li><a href="pages/news-post.html">Bontus Classified</a></li>
            <li><a href="#">Jobs</a></li>
            <!-- <li><a href="#">Stores</a></li>
            <li><a href="#">Jobs</a></li> -->
          </ul>
        </div>
        <div class="col-sm-3 col-lg-3">
          <ul class="footer-vertical-nav">
            <li class="menu-title"><a href="#">More</a></li>
            <li><a href="#">RSS</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">User Agreement</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="pages/aboutus.html">About us</a></li>
            <li><a href="pages/contactus.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="d-flex justify-content-between">
            <!-- <img src="~/assets/images/logo.png" class="footer-logo" alt="" /> -->
            <p class="title">The Bontus.</p>

            <div class="d-flex justify-content-end footer-social">
              <h5 class="m-0 font-weight-600 mr-3 d-none d-lg-flex">
                Follow on
              </h5>
              <ul class="social-media">
                <li>
                  <a href="#">
                    <i class="mdi mdi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="mdi mdi-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="mdi mdi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div
            class="
              d-lg-flex
              justify-content-between
              align-items-center
              border-top
              mt-5
              footer-bottom
            "
          >
            <ul class="footer-horizontal-menu">
              <li><a href="#">Terms of Use.</a></li>
              <li><a href="#">Privacy Policy.</a></li>
              <li><a href="#">Accessibility & CC.</a></li>
              <li><a href="#">AdChoices.</a></li>
              <li><a href="#">Advertise with us Transcripts.</a></li>
              <li><a href="#">License.</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
            <p class="font-weight-medium">
              © {{ year }}
              <a
                href="https://www.twitter.com/bontusss"
                target="_blank"
                class="text-dark"
                >@TheBontus</a
              >, Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
    <NewsTicker />
  </footer>

  <!-- partial -->
</template>

<script>
import moment from "moment";
import NewsTicker from "./NewsTicker.vue";
export default {
  components: { NewsTicker },
  data() {
    return {
      year: moment().format("YYYY"),
    };
  },
};
</script>
<style scoped>
@font-face {
  font-family: chomsky;
  src: url("~/static/fonts/Chomsky.woff");
}
.title {
  font-family: chomsky;
  font-size: 30px;
}
</style>
