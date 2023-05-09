<template>
  <div class="row">
    <div class="col">
      <Pena
        url="YOUR_DOCUMENT_URL"
        lang="en"
        layout="fit"
        :signature="{
          x    : 400,
          y    : 300,
          page : 8,
          fixed: false,
        }"
        @after-action="onAfterAction"
      />
    </div>
  </div>
</template>

<script>
import { Pena } from '@privyid/pena-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Pena },
  methods   : {
    onAfterAction (event) {
      // Do something after action (sign, review, etc) done
      // example: redirect to specific location after sign
      if (event.action === 'sign') {
        window.alert(event.action)
      }
    }
  },
})
</script>

<style>
.row {
  display: flex;
}

.col {
  width: 50%;
}
</style>
