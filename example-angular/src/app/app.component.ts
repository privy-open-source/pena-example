import { Component } from '@angular/core'
import type { Placement, Payload } from '@privyid/pena'

@Component({
  selector: 'app-root',
  template: `
    <pena
      url="YOUR_DOCUMENT_URL"
      lang="en"
      layout="fit"
      [signature]="signature"
      (afterAction)="onAfterAction($event)"
    />
  `,
  styles: []
})
export class AppComponent {
  signature: Placement = {
    x    : 400,
    y    : 300,
    page : 8,
  }

  onAfterAction (event: Payload) {
    if (event.action === 'sign') {
      window.alert(event.action)
    }
  }
}
