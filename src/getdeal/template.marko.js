// Compiled using marko@4.5.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/dealmastideal$1.0.0/src/getdeal/template.marko", function() {
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
    marko_escapeXml = marko_helpers.x,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_escapeXmlAttr = marko_helpers.xa,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag")),
    marko_escapeScript = marko_helpers.xs;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: template_template,
      title: {
          renderBody: function renderBody(out) {
            out.w(marko_escapeXml(input.ru) +
              " | DealMastiDeal.com");
          }
        },
      description: {
          renderBody: function renderBody(out) {
            out.w("<meta name=\"description\" content=\"" +
              marko_escapeXmlAttr(input.ru) +
              " | DealMastiDeal.com\">");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "2");

  out.w("<div class=\"container\">");

  include_tag({
      _target: template_template2,
      _arg: {
          currentPage: "home"
        }
    }, out, __component, "7");

  out.w(" <div class=\"row text-center\" id=\"dealsContent\"> You will be redirected in 1 sec.</div></div>");

  include_tag({
      _target: template_template3
    }, out, __component, "9");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "10");

  out.w("</body><script type=\"text/javascript\">\n    \n    function Redirect() {\n        window.location=\"" +
    marko_escapeScript(input.ru) +
    "\";\n    }\n    \n    setTimeout('Redirect()', 1000);\n    \n</script></html>");
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
