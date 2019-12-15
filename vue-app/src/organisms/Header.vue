<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">DevTech</router-link>

    <NavbarMenu />
    <KeywordSearch />
  </nav>
</template>

<script>
import NavbarMenu from '../molecules/NavbarMenu.vue';
import KeywordSearch from '../molecules/KeywordSearch.vue';

export default {
  name: 'Header',
  components: { NavbarMenu, KeywordSearch },
};
</script>
