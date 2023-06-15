<script lang="ts">
  import Pena from '@privyid/pena-svelte'
</script>

<Pena
  url="YOUR_DOCUMENT_URL"
  layout="fit"
  lang="en"
  signature={{
    x    : 400,
    y    : 300,
    page : 8,
    fixed: false,
  }}
  on:afterAction={(event) => {
    // Do something after action (sign, review, etc) done
    // example: redirect to specific location after sign
    if (event.detail.action === 'sign') {
      window.alert(event.detail.action)
    }
  }}
/>
