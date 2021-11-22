<template>
  <div>
    <div class="editors-news">
      <div class="row">
        <div class="col-lg-3 d-flex">
          <div class="position-relative float-left">
            <h3 class="section-title">From Punch Newspapers</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- <Loader v-if="isLoading" /> -->
        <div
          class="col-6 col-lg-3 mb-5 mb-sm-2"
          v-for="item in data.slice(0, 4)"
          :key="item.id"
        >
          <a class="text-dark" :href="item.url">
            <h5 class="i_title mt-3">
              {{ item.title }}
            </h5>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      data: [],
    };
  },
  methods: {
    async getNews() {
      this.isLoading = true;
      let res = await this.$store.dispatch("fromPunch");
      this.data = res.data;
      this.isLoading = false;
    },
  },

  mounted() {
    this.getNews();
  },
};
</script>
