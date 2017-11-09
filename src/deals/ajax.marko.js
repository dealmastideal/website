// Compiled using marko@4.5.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/dealmastideal$1.0.0/src/deals/ajax.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  marko_forEach(input.items, function(item) {
    out.w("<div class=\"col-lg-3 col-md-6 mb-4\"><div class=\"card\"><div class=\"text-center\"> <img src=\"" +
      marko_escapeXmlAttr(item.imageUrl) +
      "\" alt=\"\" style=\"width:70%; important!\"> </div><div class=\"card-body\"><h4 class=\"card-title\">$" +
      marko_escapeXml(item.price) +
      "</h4><s class=\"card-title\">" +
      marko_escapeXml(item.originalPrice) +
      "</s><p class=\"card-text\">" +
      marko_escapeXml(item.title) +
      "</p></div><div class=\"card-footer\"><a href=\"/" +
      marko_escapeXmlAttr(item.encodedtitle) +
      "/" +
      marko_escapeXmlAttr(item.id) +
      "\" class=\"btn btn-primary\">Get Deal</a></div></div></div>");
  });

  out.w(" ");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {};
