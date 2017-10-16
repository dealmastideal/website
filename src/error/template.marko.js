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

  out.w("<div class=\"row text-center\" id=\"dealsContent\"><div class=\"alert alert-danger\" role=\"alert\">Sorry, the page you are looking for is Not Found.</div> </div></div>");

  include_tag({
      _target: template_template3
    }, out);

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
