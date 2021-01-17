<template>
  <div class="holyGrail">
    <p>可以試試延伸物件空間。</p>
    <div class="holyGrail__resize">
      <div class="holyGrail__parent">
        <header class="bg-red-500">Header</header>
        <aside class="bg-blue-500">Left Side</aside>
        <main class="bg-yellow-500">Main</main>
        <aside class="bg-green-500">Right Side</aside>
        <footer class="bg-gray-500">Footer</footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HolyGrail',
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
.holyGrail{
  &__resize {
    height: 240px;
    overflow: hidden;
    resize: both;
  }
  &__parent {
    display: grid;
    grid-template: auto 1fr auto / auto 1fr auto;
    height: 100%;
    font-size: 1.25rem;
    > * {
      display: grid;
      place-items: center;
    }
    .bg-red-500 {
      grid-column: 1 / 4;
    }
    .bg-blue-500 {
      grid-column: 1 / 2;  
    }
    .bg-yellow-500 {
      grid-column: 2 / 3;  
    }
    .bg-green-500 {
      grid-column: 3 / 4;  
    }
    .bg-gray-500 {
      grid-column: 1 / 4;  
    }
  }
}
</style>
