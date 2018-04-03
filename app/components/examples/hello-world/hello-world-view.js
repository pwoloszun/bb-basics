import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./hello-world-view.template.html!text";

export const HelloWorldView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  render() {
    const json = { name: "BackBone" };
    const htmlContent = this.template(json);
    this.$el.html(htmlContent);
  }

});
