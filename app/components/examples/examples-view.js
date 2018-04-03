import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./examples-view.template.html!text";
import { HelloWorldView } from "./hello-world/hello-world-view";
import { EventsExampleView } from "./events-example/events-example-view";
import { User } from "./two-way-binding-example/user-model";
import { TwoWayBindingExampleView } from "./two-way-binding-example/two-way-binding-example-view";

export const ExamplesView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  render() {
    const htmlContent = this.template();
    this.$el.html(htmlContent);
    const $cont = this.$el.find(".js-cont");

    // const helloWorldView = new HelloWorldView();
    // helloWorldView.render();
    // $cont.append(helloWorldView.$el);
    //
    // const eventsExampleView = new EventsExampleView();
    // eventsExampleView.render();
    // $cont.append(eventsExampleView.$el);
    //
    // const user = new User({ name: "Bob!" });
    // const twoWayBindingExampleView = new TwoWayBindingExampleView({
    //   model: user
    // });
    // twoWayBindingExampleView.render();
    // $cont.append(twoWayBindingExampleView.$el);
  }

});
