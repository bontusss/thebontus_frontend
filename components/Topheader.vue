<template>

      <div id="coinmarketcap-widget-marquee" coins="1,1027,825,1839,5426,2010,52" currency="NGN" theme="dark" transparent="false" show-symbol-logo="true"></div>  
  
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://files.coinmarketcap.com/static/widget/coinMarquee.js"
        }
      ]
    }
  },
};
</script>

<style lang="css" scoped></style>
