<script setup>
import { ref } from "vue";

const count = ref(1);

function addCount() {
  count.value++;
}
</script>

<template>
  <img src="../../assets/vue.svg" />
  <button class="but-color" @click="addCount">test{{ count }}</button>
</template>

<style scoped lang="less">
.but-color {
  background-color: chartreuse;
}
</style>
