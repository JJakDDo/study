<template>
  <p>반응 속도: {{ score }}ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 0) {
      this.rank = "예측하면 안되요";
    } else if (this.score < 250) {
      this.rank = "Faker급 반응속도!";
    } else if (this.score < 400) {
      this.rank = "준수하군요";
    } else {
      this.rank = "느려";
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
