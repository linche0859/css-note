<template>
  <div class="sidebarSays">
    <p>可以試試延伸物件空間。</p>
    <div class="sidebarSays__resize">
      <div class="sidebarSays__parent">
        <div class="bg-yellow-500" contenteditable>
        Min: 100px / Max: 25%
        </div>
        <div class="bg-purple-500" contenteditable>
          This element takes the second grid position (1fr), meaning
          it takes up the rest of the remaining space.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarSays',
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

<style lang="scss" scope>
.sidebarSays{
  &__resize {
    height: 240px;
    overflow: hidden;
    resize: both;
  }
  &__parent {
    display: grid;
    grid-template-columns: minmax(100px, 25%) 1fr;
    height: 100%;
    font-size: 1.125rem;
  }
}
</style>
