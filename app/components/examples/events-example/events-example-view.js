import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./events-example-view.template.html!text";

export const EventsExampleView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  events: {
    "keyup .js-name-field": "onNameChange"
  },

  render() {
    const htmlContent = this.template();
    this.$el.html(htmlContent);
  },

  onNameChange(event) {
    console.log("name changed", event.target.value);
  }

});
