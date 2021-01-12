<template>
  <div class="gridTemplate">
    <div class="item1"></div>
    <div class="item2"></div>
    <div class="item3"></div>
    <div class="item4"></div>
  </div>
</template>

<script>
export default {
  name: 'GridTemplate',
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
.gridTemplate{
  display: grid;
  grid-template-columns: 40% 5% auto 5% 40%;
  grid-template-rows: 25% 100px auto;
  height: 240px;
  .item1, .item3 {
    grid-column: 1 / 2;
  }
  .item2, .item4 {
    grid-column: 2 / 6;
  }
  .item3, .item4 {
    grid-row: 2 / 4;
  }
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
    background-color: #aaaaaa;
  }
}
</style>
