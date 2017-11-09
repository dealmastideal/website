// Compiled using marko@4.5.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/dealmastideal$1.0.0/src/coupons/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    template_template = marko_loadTemplate(require.resolve("../../layouts/app-header/template.marko")),
    template_template2 = marko_loadTemplate(require.resolve("../../layouts/navigation/template.marko")),
    template_template3 = marko_loadTemplate(require.resolve("../../layouts/app-footer/template.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: template_template,
      title: {
          renderBody: function renderBody(out) {
            out.w("Coupons - Unique eBay Deals, Amazon Deals, Black Friday Deals, Upto 75% Off | DealMastiDeal.com");
          }
        },
      description: {
          renderBody: function renderBody(out) {
            out.w("<meta name=\"description\" content=\"Coupons - Unique eBay Deals, Amazon Deals, Black Friday Deals, Upto 75% Off | DealMastiDeal.com\">");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "2");

  out.w("<div class=\"container\">");

  include_tag({
      _target: template_template2,
      _arg: {
          currentPage: "coupons"
        }
    }, out, __component, "7");

  out.w(" <div id=\"carouselExampleIndicators\" class=\"carousel slide my-4 mx-auto\" data-ride=\"carousel\" style=\" width:900px; height: 350px !important;\"><ol class=\"carousel-indicators\"><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\" role=\"listbox\" style=\" width:900px; height: 350px !important;\"><div class=\"carousel-item active\"><img class=\"d-block img-fluid\" src=\"/static/ebay_tm_rgb.jpg\" alt=\"First slide\"></div> </div><a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div><div class=\"row text-center\"><div class=\"col-lg-3 col-md-6 mb-4\"><div class=\"card\"><img src=\"http://placehold.it/500x325\" alt=\"\"><div class=\"card-body\"><h4 class=\"card-title\">Card title</h4><p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p></div><div class=\"card-footer\"><a href=\"#\" class=\"btn btn-primary\">Find Out More!</a></div></div></div><div class=\"col-lg-3 col-md-6 mb-4\"><div class=\"card\"><img src=\"http://placehold.it/500x325\" alt=\"\"><div class=\"card-body\"><h4 class=\"card-title\">Card title</h4><p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p></div><div class=\"card-footer\"><a href=\"#\" class=\"btn btn-primary\">Find Out More!</a></div></div></div><div class=\"col-lg-3 col-md-6 mb-4\"><div class=\"card\"><img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\"><div class=\"card-body\"><h4 class=\"card-title\">Card title</h4><p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p></div><div class=\"card-footer\"><a href=\"#\" class=\"btn btn-primary\">Find Out More!</a></div></div></div><div class=\"col-lg-3 col-md-6 mb-4\"><div class=\"card\"><img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\"><div class=\"card-body\"><h4 class=\"card-title\">Card title</h4><p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p></div><div class=\"card-footer\"><a href=\"#\" class=\"btn btn-primary\">Find Out More!</a></div></div></div></div></div>");

  include_tag({
      _target: template_template3
    }, out, __component, "55");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "56");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

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
