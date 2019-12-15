<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/kanban">Kanban</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/atomic">Atomic</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavbarMenu',
};
</script>
