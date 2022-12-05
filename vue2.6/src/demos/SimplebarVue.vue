<template>
  <div>
    {{ { version } }}
    <simplebar class="test" data-simplebar-auto-hide="false" @scroll="onScroll">
      <div v-for="n in 10" :key="n">Example content</div>
    </simplebar>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';
import Vue from 'vue'
export default {
  name: 'app',
  components: {
    simplebar
  },
  data: () => ({
    version: Vue.version || Vue.default.version
  }),
  methods: {
    onScroll(e) {
      // eslint-disable-next-line
      console.log('onscroll', e)
    }
  }
}
</script>

<style>
.test {
  height: 100px;
}
</style>
