<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../organisms/Header.vue';

export default {
  name: 'MainTemplate',
  components: { Header },
  data: () => ({

  }),
  methods: {

  },
};
</script>

<style scoped>

</style>
