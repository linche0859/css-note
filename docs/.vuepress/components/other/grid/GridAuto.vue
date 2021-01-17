<template>
  <div class="gridAuto">
    <button class="btn-success mb-4" @click="clickHandler">轉為 {{ flow }}</button>
    <ul 
      class="grid auto-cols-auto gap-2 m-0 p-0 list-none" 
      :class="[{'grid-flow-row': flow === 'column'}, {'grid-flow-col': flow === 'row'}]">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GridAuto',
  components: {},
  props: {},
  data() {
    return {
      flow: 'row'
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
  },
  methods: {
    clickHandler() {
      this.flow = this.flow === 'row' ? 'column' : 'row';
    }
  },
};
</script>

<style lang="scss" scoped>
.gridAuto{
  .grid {
    height: 240px;
    li {
      background-color: #f00;
    }
  }
}
</style>
