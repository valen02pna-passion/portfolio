<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
</script>
