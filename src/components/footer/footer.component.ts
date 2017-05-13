
export class FooterComponentController {
  constructor() { }

}

export let FooterComponent = {
  bindings: {
    url: '<'
  },
  template: `
    <div class="row">
      <div class="col-md-12">
          <div class="text-center">
              <h2>Footer</h2>
          </div>
      </div>
    </div>
  `,
  controller: FooterComponentController
}
