import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./tasks-view.template.html!text";

export const TasksView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  render() {
    const htmlContent = this.template();
    this.$el.html(htmlContent);

    // TODO: zippy

    // TODO: personal-data
    // const batman = {
    //   name: "Batman",
    //   age: 33,
    //   url: "https://m0vie.files.wordpress.com/2014/06/batman-courtofowls4.jpg"
    // };

    // shopping-list
  }

});
