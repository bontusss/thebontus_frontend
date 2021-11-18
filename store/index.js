export const actions = {
  async allStories() {
    let res = await this.$axios.get("/newspapers");
    return res;
  },
  async allSports(){
    let res = await this.$axios.get('/sports')
    return res
  },
  async allEntertainment(){
    let res = await this.$axios.get('/entertainment')
    return res
  },
  async allBusiness(){
    let res = await this.$axios.get('/business')
    return res
  },
  async allCrypto(){
    let res = await this.$axios.get('/crypto')
    return res
  },
  async allBlogs(){
    let res = await this.$axios.get('/blogs')
    return res
  },
  async allTech(){
    let res = await this.$axios.get('/tech')
    return res
  },
  async world(){
    let res = await this.$axios.get('/world')
    return res
  },
  async fromPunch() {
    let res = await this.$axios.get("/punch");
    return res;
  },
  async fromLeadership() {
    let res = await this.$axios.get("/leadership");
    return res;
  },

};
