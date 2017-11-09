// Compiled using marko@4.5.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/dealmastideal$1.0.0/src/contactus/template.marko", function() {
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
            out.w("Contact Us - Unique eBay Deals, Amazon Deals, Black Friday Deals, Upto 75% Off | DealMastiDeal.com");
          }
        },
      description: {
          renderBody: function renderBody(out) {
            out.w("<meta name=\"description\" content=\"Contact Us - Unique eBay Deals, Amazon Deals, Black Friday Deals, Upto 75% Off | DealMastiDeal.com\">");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "2");

  out.w("<div class=\"container\">");

  include_tag({
      _target: template_template2,
      _arg: {
          currentPage: "contactus"
        }
    }, out, __component, "7");

  out.w(" <div class=\"row\"><div class=\"col-md-6 col-md-offset-3\"><div class=\"well well-sm\"><form class=\"form-horizontal\" action=\"\" method=\"post\"><fieldset><legend class=\"text-center\">Contact us</legend><div class=\"form-group\"><label class=\"col-md-3 control-label\" for=\"name\">Name</label><div class=\"col-md-9\"><input id=\"name\" name=\"name\" type=\"text\" placeholder=\"Your name\" class=\"form-control\"></div></div><div class=\"form-group\"><label class=\"col-md-3 control-label\" for=\"email\">Your E-mail</label><div class=\"col-md-9\"><input id=\"email\" name=\"email\" type=\"text\" placeholder=\"Your email\" class=\"form-control\"></div></div><div class=\"form-group\"><label class=\"col-md-3 control-label\" for=\"message\">Your message</label><div class=\"col-md-9\"><textarea class=\"form-control\" id=\"message\" name=\"message\" placeholder=\"Please enter your message here...\" rows=\"5\"></textarea></div></div><div class=\"form-group\"><div class=\"col-md-12 text-right\"><button type=\"submit\" class=\"btn btn-primary btn-lg\">Submit</button></div></div></fieldset></form></div></div></div></div>");

  include_tag({
      _target: template_template3
    }, out, __component, "29");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

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
