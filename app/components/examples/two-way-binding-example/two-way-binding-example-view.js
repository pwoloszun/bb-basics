import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./two-way-binding-example-view.template.html!text";

export const TwoWayBindingExampleView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  events: {
    "keyup .js-name-field": "onNameChange"
  },

  initialize(params) {
    this.model.on("change:name", this.updateName.bind(this));
  },

  render() {
    const json = this.model.toJSON();
    const htmlContent = this.template(json);
    this.$el.html(htmlContent);
  },

  onNameChange(event) {
    this.model.set("name", event.target.value);
  },

  updateName(model, newName) {
    this.$el.find(".js-name").html(newName);
  }

});
