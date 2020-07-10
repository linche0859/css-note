<template>
  <div class="rate">
    <div class="box box1">ease</div>
    <div class="box box2">ease-in</div>
    <div class="box box3">ease-out</div>
    <div class="box box4">ease-in-out</div>
    <div class="box box5">linear</div>
    <div class="box box6">bezier</div>
    <div class="box box7">step-start</div>
    <div class="box box8">step-end</div>
    <div class="box box9">steps 4</div>
  </div>
</template>

<script>
export default {
  // transition 的速率範例
  name: 'Rate',
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
$function: ease, ease-in, ease-out, ease-in-out, linear,
  cubic-bezier(0.1, 0.7, 1, 0.1), step-start, step-end, steps(4, end);

@mixin marginLeftTransition(
  $function: linear,
  $property: 'margin-left',
  $duration: 3s,
  $delay: 0s
) {
  transition-timing-function: $function;
  transition-property: $property;
  transition-duration: $duration;
  transition-delay: $delay;
}
.rate {
  &:hover .box {
    margin-left: calc(100% - 50px);
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #ff0000;
    color: #ffffff;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  @for $i from 1 through 9 {
    // class使用變數 : #{變數}
    .box#{$i} {
      @include marginLeftTransition(nth($function, $i));
    }
  }
}
</style>
