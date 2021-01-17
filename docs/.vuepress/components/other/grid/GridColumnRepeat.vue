<template>
  <div class="gridColumnRepeat">
        <div class="item1"></div>
    <div class="item2"></div>
    <div class="item3"></div>
    <div class="item4"></div>
    <div class="item5"></div>
  </div>
</template>

<script>
export default {
  name: 'GridColumnRepeat',
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
.gridColumnRepeat{
  display: grid;
  grid-template-columns: repeat(2, 1fr 2fr) 100px;
  height: 240px;
  .item1 {
    background-color: #faa;
  }
  .item2 {
    background-color: #faf;
  }
  .item3 {
    background-color: #ffa;
  }
  .item4 {
    background-color: #aaa;
  }
  .item5 {
    background-color: #aaaaff;
  }
}
</style>
