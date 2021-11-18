<template>
  <div class="container-scroller">
    <div class="main-panel">
      <navbar />
      <!-- start -->
      <div class="container">
        <div class="editors-news">
          <div class="row">
            <Loader v-if="isLoading" />
            <div class="col-6 col-lg-3 mb-5 mb-sm-2" v-for="item in shuffled.slice(0, 12)" :key="item.id">
              <a class="text-dark" :href="item.url">
                <h5 class="i_title mt-3">
                  {{ item.title }}
                </h5>
              </a>
              <p>{{item.newspaper}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- end -->
      <pagefooter />
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isLoading: true,
        data: [],
      };
    },

    methods: {
      async getNews() {
        let res = await this.$store.dispatch("allSports");
        this.data = res.data;
        this.isLoading = false;
      },
    },

    mounted() {
      this.getNews();
    },

    computed: {
      shuffled() {
        return this.data.sort(() => Math.random() - 0.5);
      },
    },
  }
</script>
<style scoped>
  p {
    font-size: 10px;
    float: right;
  }
</style>
