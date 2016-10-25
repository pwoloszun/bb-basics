import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./app-view.template.html!text";
import {ExamplesView} from "./examples/examples-view";
import {TasksView} from "./tasks/tasks-view";

export const AppView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  render: function () {
    const htmlContent = this.template();
    this.$el.html(htmlContent);
    let $cont = this.$el.find(".js-cont");

    let examplesView = new ExamplesView();
    examplesView.render();
    $cont.append(examplesView.$el);

    let tasksView = new TasksView();
    tasksView.render();
    $cont.append(tasksView.$el);
  }

});