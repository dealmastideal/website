// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    template_template = marko_loadTemplate(require.resolve("../../layouts/app-header/template.marko")),
    template_template2 = marko_loadTemplate(require.resolve("../../layouts/navigation/template.marko")),
    template_template3 = marko_loadTemplate(require.resolve("../../layouts/app-footer/template.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: template_template
    }, out);

  out.w("<div class=\"container\">");

  include_tag({
      _target: template_template2
    }, out);

  out.w("<div id=\"carouselExampleIndicators\" class=\"carousel slide my-4 mx-auto\" data-ride=\"carousel\" style=\" width:400px; height: 150px !important;\"><ol class=\"carousel-indicators\"><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\" role=\"listbox\" style=\" width:400px; height: 150px !important;\"><div class=\"carousel-item active\"><img class=\"d-block img-fluid\" src=\"/static/ebay_tm_rgb.jpg\" alt=\"First slide\"></div> </div><a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div><div class=\"row text-center\" id=\"dealsContent\">");

  marko_forEach(input.items, function(item) {
    out.w("<div class=\"col-lg-3 col-md-6 mb-4\"><div class=\"card\"><img src=\"" +
      marko_escapeXmlAttr(item.imageUrl) +
      "\" alt=\"\"><div class=\"card-body\"><h4 class=\"card-title\">$" +
      marko_escapeXml(item.price) +
      "</h4><s class=\"card-title\">" +
      marko_escapeXml(item.originalPrice) +
      "</s><p class=\"card-text\">" +
      marko_escapeXml(item.title) +
      "</p></div><div class=\"card-footer\"><a href=\"/getdeal?rurl=" +
      marko_escapeXmlAttr(item.encodedurl) +
      "\" class=\"btn btn-primary\">Get Deal</a></div></div></div>");
  });

  out.w(" </div></div>");

  include_tag({
      _target: template_template3
    }, out);

  out.w("<script src=\"/static/js/infinitescroll.js\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../../layouts/app-header/template.marko",
      "../../layouts/navigation/template.marko",
      "../../layouts/app-footer/template.marko",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
