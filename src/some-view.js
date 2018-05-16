import { PolymerElement } from "@polymer/polymer";
import { html } from "@polymer/polymer/lib/utils/html-tag";



class SomeView extends PolymerElement {

    constructor(){
        super();
        this.owner = 'hcl';
    }

    static get template () {
        return html `<style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>New View</h1>
        <p>New view!</p>
        <b>{{owner}}</b>
      </div>`;
    }
}

window.customElements.define('some-view', SomeView);