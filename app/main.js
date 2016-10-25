import $ from "jquery";

import {AppView} from "./components/app-view";

$(function () {
  let appView = new AppView();
  $('.js-main').html(appView.$el);
  appView.render();
});