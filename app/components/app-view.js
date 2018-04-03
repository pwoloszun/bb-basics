import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./app-view.template.html!text";
import { ExamplesView } from "./examples/examples-view";
import { TasksView } from "./tasks/tasks-view";

export const AppView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  render() {
    const htmlContent = this.template();
    this.$el.html(htmlContent);
    const $cont = this.$el.find(".js-cont");

    const examplesView = new ExamplesView();
    examplesView.render();
    $cont.append(examplesView.$el);

    const tasksView = new TasksView();
    tasksView.render();
    $cont.append(tasksView.$el);
  }

});
