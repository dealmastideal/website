// Compiled using marko@4.5.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/dealmastideal$1.0.0/layouts/app-footer/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<footer class=\"py-5 bg-dark\"><div class=\"container\"><p class=\"m-0 text-center text-white\">Copyright &copy; DealMastiDeal.com 2017</p></div></footer><script src=\"https://code.jquery.com/jquery-3.2.1.min.js\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js\" integrity=\"sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4\" crossorigin=\"anonymous\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js\" integrity=\"sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1\" crossorigin=\"anonymous\"></script><script>\n$(\"#searchform input\").keypress(function(event) {\n    if (event.which == 13) {\n        event.preventDefault();\n        if($(\"#q\").val() && $(\"#q\").val().trim()) {\n          $(\"#q\").val($(\"#q\").val().trim())\n          $(\"#searchform\").submit();\n        }          \n    }\n});\n</script><script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-108435649-1\"></script><script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-108435649-1');\n</script>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {};
