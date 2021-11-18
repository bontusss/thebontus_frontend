<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="d-flex justify-content-around align-items-center navbar-top">
      <ul class="navbar-left">
        <li>{{ date }}</li>
        <li>30°C,London</li>
      </ul>
      <div>
        <a class="navbar-brand" href="#">
          <!-- <img src="~/assets/images/logo.png" alt="" -->
          <p class="title text-secondary">The_Bontus</p>
          /></a
        >
      </div>
      <div class="d-flex">
        <ul class="navbar-right">
          <li>
            <a href="#">ENGLISH</a>
          </li>
          <li>
            <a href="#">ESPAÑOL</a>
          </li>
        </ul>
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
    <div class="navbar-bottom-menu">
      <button
        class="navbar-toggler"
        type="button"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="navbar-collapse justify-content-center collapse"
        id="navbarSupportedContent"
      >
        <ul
          class="
            navbar-nav
            d-lg-flex
            justify-content-between
            align-items-center
          "
        >
          <li>
            <button class="navbar-close">
              <i class="mdi mdi-close"></i>
            </button>
          </li>
          <li class="nav-item active">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/newspapers">Newspapers</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/sports">Sports</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/entertainment"
              >Entertainment</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/crypto">Crypto</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/tech">Tech</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/business">Business</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/blogs">Blogs</NuxtLink>
          </li>
          <!-- <li class="nav-item">
            <NuxtLink class="nav-link" to="/covid">Covid-19</NuxtLink>
          </li> -->
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/world">World</NuxtLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="mdi mdi-magnify"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      date: moment().format("MMMM Do YYYY"),
    };
  },
};
</script>

<style>
@import "~/assets/vendors/mdi/css/materialdesignicons.min.css";
.title {
  font-family: cursive;
  font-size: 30px;
}
</style>
