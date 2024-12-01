<template>
  <header>
    <NuxtLink to="/">Главная</NuxtLink>
    <NuxtLink to="/about">О нас</NuxtLink>
    <NuxtLink to="/users">Пользователи</NuxtLink>
    <NuxtLink to="/users/123">Пользователь 123</NuxtLink>
  </header>

  <NuxtPage />
</template>

<script setup>
// Здесь можно добавить глобальную логику
</script>

<style>
.nuxt-loading-indicator {
  background: repeating-linear-gradient(to right,
      #00dc82 0%,
      #34cdfe 50%,
      #0047e1 100%);
}
</style>
