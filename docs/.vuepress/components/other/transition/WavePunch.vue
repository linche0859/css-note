<template>
  <div class="wavePunch"></div>
</template>

<script>
export default {
  // transition 的波動拳範例
  name: 'WavePunch',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.wavePunch {
  margin: 0 auto;
  width: 130px;
  height: 100px;
  background: url(~@image/other/transition/wave-punch.png) left bottom no-repeat;
  cursor: pointer;
  transition: background 1s;
  transition-timing-function: steps(13, end);
  &:hover {
    background-position: right bottom;
  }
}
</style>
