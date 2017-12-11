<template>
  <div class="six wide column">
    <div class="ui vertical steps">
      <div
      class="step"
      v-for="index in length"
      v-bind:class="{ active: index === (current + 1), completed: index < (current + 1) }"
      >
      <i class="question icon"></i>
      <div class="content">
        <div class="title">
          Question {{ index }}
        </div>
        <div class="description">
          Question for {{ index * 100 }} $
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['length', 'current']
}
</script>