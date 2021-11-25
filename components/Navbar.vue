<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="d-flex justify-content-around align-items-center navbar-top">
      <ul class="navbar-left">
        <li>{{ date }}</li>
      </ul>
      <div>
        <a class="navbar-brand" href="#">
          <!-- <img src="~/assets/images/logo.png" alt="" -->
          <p class="title text-secondary font-weight-bold">Bontus</p></a
        >
      </div>
      <div class="d-flex">
        <ul class="navbar-right">
          <li>
            <p class="tweet">
              <i class="mdi mdi-twitter"></i
              ><a
                href="https://twitter.com/intent/tweet?text=Your%20one%20-%20stop%20-%20shop%20for%20news%20headlines%20https://thebontus.com%20(via%20@bontusss)"
                >Tweet</a
              >
            </p>
          </li>
          &nbsp;
          <li>
            <div
              class="fb-share-button"
              data-href="https://thebontus.com"
              data-layout="button_count"
            ></div>
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

<style scoped>
@import "~/assets/vendors/mdi/css/materialdesignicons.min.css";
@font-face {
  font-family: chomsky;
  src: url("~/static/fonts/Chomsky.woff");
}
.title {
  font-family: chomsky;
  font-size: 60px;
}

.tweet {
  border: 0px;
  background-color: #fff !important;
  color: black !important;
}

.tweet a {
  color: black !important;
  font-weight: bold;
  font-size: 25px;
}

.navbar-top {
  padding: 30px 0 10px 0;
}

@media (max-width: 999px) {
  .title {
    font-size: 50px;
    margin: -41px 0 0 10px;
  }

  .navbar-bottom-menu .navbar-toggler {
    top: 14px;
    margin-right: 10px;
  }

  .navbar-top {
    border: 0;
  }

  .navbar-bottom-menu {
    border-bottom: 0px !important;
  }

  .navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    background-color: white;
    height: 70px;
    display: flex;
  }
}
</style>
