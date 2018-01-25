<!-- 数据加载指示器 -->
<template>
  <div class="loading-holder">
    <slot v-if="value"></slot>
    <div v-else class="holder"></div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'loading-indicator',
    props: ['value']
  }
</script>
<style scoped>
  .holder {
    width: 100%;
    min-height: 20px;
    background-color: rgba(233, 203, 203, 0.5);
    border-radius: 2px;
  }
</style>