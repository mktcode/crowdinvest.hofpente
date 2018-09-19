<template>
  <div class="pb-4 funding-item">
    <h3 class="text-center mb-0">{{ item.title }}</h3>
    <h4 class="text-center text-muted-light">{{ item.subtitle }}</h4>
    <div class="progress" style="height: 35px;">
      <div class="progress-bar progress-bar-striped bg-brand" role="progressbar" :style="'width: ' + item.percentage + '%'" :aria-valuenow="item.percentage" aria-valuemin="0" aria-valuemax="100">{{ item.percentage }}%</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="sass">
  .funding-item
    &:last-child
      padding-bottom: 0 !important
    .progress
      box-shadow: 1px 2px 5px rgba(0, 0, 0, .2);
</style>
