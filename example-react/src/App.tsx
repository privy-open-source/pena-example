import Pena from '@privyid/pena-react'

export default function App () {
  return (
    <Pena
      url="YOUR_DOCUMENT_URL"
      privyId="AI7277"
      lang="en"
      layout="fit"
      signature={{
        x    : 400,
        y    : 300,
        page : 8,
        fixed: false,
      }}
      onAfterAction={(event) => {
        // Do something after action (sign, review, etc) done
        if (event.action === 'sign') {
          window.alert('Signed')
        }
      }}
    />
  )
}
