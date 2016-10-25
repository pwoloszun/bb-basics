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

  render: function () {
    let json = this.model.toJSON();
    const htmlContent = this.template(json);
    this.$el.html(htmlContent);
  },

  onNameChange: function (event) {
    this.model.set("name", event.target.value);
  },

  updateName: function (model, newName) {
    this.$el.find(".js-name").html(newName);
  }

});
