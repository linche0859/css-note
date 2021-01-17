<template>
  <div class="pancakeStack">
    <p>可以試試延伸物件空間。</p>
    <div class="pancakeStack__resize">
      <div class="pancakeStack__parent">
        <header class="bg-blue-500" contenteditable>Header</header>
        <main class="bg-yellow-500" contenteditable>Main</main>
        <footer class="bg-purple-500" contenteditable>Footer Content</footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PancakeStack',
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
.pancakeStack{
  &__resize {
    height: 240px;
    overflow: hidden;
    resize: both;
  }
  &__parent {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100%;
    font-size: 1.5rem;
    > * {
      display: grid;
      place-items: center;
    }
  }
}
</style>
