import BackBone from "backbone";
import Handlebars from "handlebars";

import templateHtml from "./examples-view.template.html!text";
import {HelloWorldView} from "./hello-world/hello-world-view";
import {EventsExampleView} from "./events-example/events-example-view";
import {User} from "./two-way-binding-example/user-model";
import {TwoWayBindingExampleView} from "./two-way-binding-example/two-way-binding-example-view";

export const ExamplesView = BackBone.View.extend({
  template: Handlebars.compile(templateHtml),

  render: function () {
    const htmlContent = this.template();
    this.$el.html(htmlContent);
    let $cont = this.$el.find(".js-cont");

    // let helloWorldView = new HelloWorldView();
    // helloWorldView.render();
    // $cont.append(helloWorldView.$el);
    //
    // let eventsExampleView = new EventsExampleView();
    // eventsExampleView.render();
    // $cont.append(eventsExampleView.$el);
    //
    // let user = new User({name: "Bob!"});
    // let twoWayBindingExampleView = new TwoWayBindingExampleView({
    //   model: user
    // });
    // twoWayBindingExampleView.render();
    // $cont.append(twoWayBindingExampleView.$el);
  }

});