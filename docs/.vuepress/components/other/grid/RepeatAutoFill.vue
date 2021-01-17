<template>
  <div class="repeatAutoFill">
    <p>可以試試延伸物件空間。</p>
    <div class="repeatAutoFill__resize">
      <div class="repeatAutoFill__parent">
        <div class="bg-red-500 rounded-lg"></div>
        <div class="bg-blue-500 rounded-lg"></div>
        <div class="bg-purple-500 rounded-lg"></div>
        <div class="bg-green-500 rounded-lg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepeatAutoFill',
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
.repeatAutoFill{
  &__resize {
    height: 240px;
    overflow: hidden;
    resize: both;
  }
  &__parent {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 1rem;
    height: 100%;
  }
}
</style>
