<script lang="ts" setup>
  definePageMeta({
    layout: 'private',
  });

  await navigateTo('/dashboard');
</script>

<style lang="css" scoped>
  body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
  }
  .dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
  }
  .sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
  }
</style>
