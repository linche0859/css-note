<template>
  <div
    class="triangle d-flex justify-content-between align-items-center flex-wrap"
  >
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
    <div class="box6"></div>
    <div class="box7"></div>
    <div class="box8"></div>
  </div>
</template>

<script>
export default {
  // 顯示個方向三角形範例
  name: 'Triangle',
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
.triangle {
  @mixin triangle($size, $color, $align: top, $type: 0.86666) {
    height: 0;
    width: 0;
    @if $align == top {
      border-bottom: ($size * $type) solid $color;
      border-left: ($size/2) solid transparent;
      border-right: ($size/2) solid transparent;
    } @else if $align == right {
      border-left: ($size * $type) solid $color;
      border-top: ($size/2) solid transparent;
      border-bottom: ($size/2) solid transparent;
    } @else if $align == bottom {
      border-top: ($size * $type) solid $color;
      border-left: ($size/2) solid transparent;
      border-right: ($size/2) solid transparent;
    } @else if $align == left {
      border-right: ($size * $type) solid $color;
      border-top: ($size/2) solid transparent;
      border-bottom: ($size/2) solid transparent;
    } @else if $align == right-top {
      border-right: $size solid $color;
      border-bottom: $size solid transparent;
    } @else if $align == left-top {
      border-left: $size solid $color;
      border-bottom: $size solid transparent;
    } @else if $align == right-bottom {
      border-right: $size solid $color;
      border-top: $size solid transparent;
    } @else if $align == left-bottom {
      border-left: $size solid $color;
      border-top: $size solid transparent;
    }
  }

  $align: top, right, bottom, left, 'right-top', 'left-top', 'right-bottom',
    'left-bottom';

  .container-fluid {
    display: flex;
    align-items: center;
  }

  @for $i from 1 through 8 {
    // class使用變數 : #{變數}
    .box#{$i} {
      @include triangle(50px, red, nth($align, $i));
    }
  }
}
</style>
