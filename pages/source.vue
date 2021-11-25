<template>
  <div>
    <div class="editors-news">
      <div class="row">
        <!-- <Loader v-if="isLoading" /> -->
        <div
          class="col-6 col-lg-3 mb-5 mb-sm-2"
          v-for="item in data"
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
      isLoading: true,
      data: [],
    };
  },

  methods: {
    async fromSource() {
      source = this.$router.params.source;
      let res = await this.$axios.get(`/source/${source}`);
      return res;
    },
  },

  mounted() {
    this.fromSource();
  },

  computed: {
    shuffled() {
      return this.data.sort(() => Math.random() - 0.5);
    },
  },
};
</script>
<style scoped></style>
