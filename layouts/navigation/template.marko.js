// Compiled using marko@4.5.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/dealmastideal$1.0.0/layouts/navigation/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"masthead\"><nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\"><a class=\"navbar-brand\" href=\"/\"> DealMastiDeal.com</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\"><ul class=\"navbar-nav mr-auto\">");

  if (input.currentPage === "home") {
    out.w("<li class=\"nav-item active\"><a class=\"nav-link\" href=\"/\">Home ");

    if (input.currentPage === "home") {
      out.w("<span class=\"sr-only\">(current)</span>");
    }

    out.w("</a></li>");
  } else {
    out.w("<li class=\"nav-item\"><a class=\"nav-link\" href=\"/\">Home ");

    if (input.currentPage === "home") {
      out.w("<span class=\"sr-only\">(current)</span>");
    }

    out.w("</a></li>");
  }

  if (input.currentPage === "deals") {
    out.w("<li class=\"nav-item active\"><a class=\"nav-link\" href=\"/topdeals\">Top Deals</a></li>");
  } else {
    out.w("<li class=\"nav-item\"><a class=\"nav-link\" href=\"/topdeals\">Top Deals</a></li>");
  }

  if (input.currentPage === "coupons") {
    out.w("<li class=\"nav-item active\"><a class=\"nav-link\" href=\"/coupons\">Coupons</a></li>");
  } else {
    out.w("<li class=\"nav-item\"><a class=\"nav-link\" href=\"/coupons\">Coupons</a></li>");
  }

  if ((input.currentPage === "about") || (input.currentPage === "contactus")) {
    out.w("<li class=\"nav-item active dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">More ");

    if ((input.currentPage === "about") || (input.currentPage === "contactus")) {
      out.w("<span class=\"sr-only\">(current)</span>");
    }

    out.w("</a><div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\"><a class=\"dropdown-item\" href=\"#\">About</a><a class=\"dropdown-item\" href=\"/contactus\">Contact Us</a></div></li>");
  } else {
    out.w("<li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">More ");

    if ((input.currentPage === "about") || (input.currentPage === "contactus")) {
      out.w("<span class=\"sr-only\">(current)</span>");
    }

    out.w("</a><div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\"><a class=\"dropdown-item\" href=\"#\">About</a><a class=\"dropdown-item\" href=\"/contactus\">Contact Us</a></div></li>");
  }

  out.w("</ul><form class=\"form-inline my-2 my-lg-0\" id=\"searchform\" action=\"/search\" method=\"GET\"><input name=\"q\" id=\"q\" class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search Deals\" aria-label=\"Search Deals\"> </form></div></nav></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {};
