<template>
  <div class="block" :class="[showBlock ? 'green' : 'red']" @click="stopTimer">
    {{ showBlock ? "click me!" : "" }}
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      if (!this.showBlock) {
        this.reactionTime = -1;
      }
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}

.red {
  background: crimson;
}

.green {
  background: #0faf87;
}
</style>
