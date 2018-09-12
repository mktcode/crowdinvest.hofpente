<template>
  <div class="pb-4">
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
