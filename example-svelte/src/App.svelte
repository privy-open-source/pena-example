<script lang="ts">
  import Pena from '@privyid/pena-svelte'
</script>

<Pena
  url="https://sdk-sign-web.dev.privydev.id/doc/0ea9234570188aa40ab2b94bdcc0f3b92232034f593fd93ec60f99d92466f2f4"
  privyId="AI7277"
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
