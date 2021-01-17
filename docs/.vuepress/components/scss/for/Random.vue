<template>
  <div class="random">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
    <div class="box6"></div>
    <div class="box7"></div>
    <div class="box8"></div>
    <div class="box9"></div>
    <div class="box10"></div>
    <div class="box11"></div>
    <div class="box12"></div>
    <div class="box13"></div>
    <div class="box14"></div>
    <div class="box15"></div>
    <div class="box16"></div>
    <div class="box17"></div>
    <div class="box18"></div>
    <div class="box19"></div>
    <div class="box20"></div>
  </div>
</template>

<script>
export default {
  // 結合 @for 和 random() 的範例
  name: "Random",
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
.random {
  height: 300px;

  $boxes: 20;

  // animation mixin
  @mixin move($name, $duration: 3s) {
    animation-name: $name;
    animation-duration: $duration;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(
      #{random(1000) / 1000},
      #{random(1000) / 1000},
      #{random(1000) / 1000},
      #{random(1000) / 1000}
    );
  }

  @for $i from 1 through $boxes {
    $name: move#{$i};
    @keyframes move#{$i} {
      from {
        left: percentage(random(100) / 100);
        top: percentage(random(100) / 100);
      }
      to {
        left: percentage(random(100) / 100);
        top: percentage(random(100) / 100);
      }
    }
    .box#{$i} {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgb(random(255), random(255), random(255));
      color: #000;
      box-shadow: 5px 5px #000;
      @include move($name);
    }
  }
}
</style>
