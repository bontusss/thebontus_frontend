<template>
  <div class="container-scroller">
    <div class="main-panel">
      <div class="container">
        <!-- <Slider /> -->
        <div class="cat_header">
          <h2>Nigeria</h2>
          <RandomNewspaperColumn />
        </div>
        <div class="cat_header">
          <h2>World</h2>
          <RandomNewspaperColumn />
        </div>
        <div class="cat_header">
          <h2>Sports</h2>
          <RandomNewspaperColumn />
        </div>
        <div class="cat_header">
          <h2>Entertainment</h2>

          <RandomNewspaperColumn />
        </div>
        <div class="cat_header">
          <h2>Crypto</h2>

          <RandomNewspaperColumn />
        </div>
        <div class="cat_header">
          <h2>Technology</h2>

          <RandomNewspaperColumn />
        </div>
        <div>
          <h2 class="cat_header">Business</h2>

          <RandomNewspaperColumn />
        </div>
        <div class="cat_header">
          <h2>Blogs</h2>

          <RandomNewspaperColumn />
        </div>
        <div class="cat_header">
          <h2>Covid-19</h2>

          <RandomNewspaperColumn />
        </div>
      </div>
      <!-- main-panel ends -->
      <!-- container-scroller ends -->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 10000);
    });
  },
};
</script>

<style lang="css" scoped>
.cat_header {
  margin-top: 30px;
}

.cat_header > h2 {
  font-weight: bold;
}
</style>
