import Pena from '@privyid/pena'

document.addEventListener('DOMContentLoaded', () => {
  Pena.openDoc({
    container: '#app',
    url      : 'YOUR_DOCUMENT_URL',   // Document URL
    lang     : 'en',                  // Set language, 'en' or 'id'
    layout   : 'fit',                 // Set layout mode, 'fixed' or 'fit'
    signature: {
      x    : 100,
      y    : 200,
      page : 1,
      fixed: false,
    },
    onAfterAction: (data) => {
      // Do something after action (sign, review, etc) done
      if (data.action === 'sign') {
        window.alert('Signed')
      }
    },
  })
})
