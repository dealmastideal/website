// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Deal Masti Deal</title><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\" crossorigin=\"anonymous\"><link href=\"/static/css/custom.css\" rel=\"stylesheet\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><div class=\"masthead\"><h3 class=\"text-muted\">DealMastiDeal.com</h3><nav class=\"navbar navbar-expand-md navbar-light bg-light rounded mb-3\"><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarCollapse\"><ul class=\"navbar-nav text-md-center nav-justified w-100\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/topdeals\">Top Deals</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/coupons\">Coupons</a></li> <li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">More</a><div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\"><a class=\"dropdown-item\" href=\"#\">About</a><a class=\"dropdown-item\" href=\"/contactus\">Contact Us</a></div></li></ul></div></nav></div><div id=\"carouselExampleIndicators\" class=\"carousel slide my-4 mx-auto\" data-ride=\"carousel\" style=\" width:900px; height: 350px !important;\"><ol class=\"carousel-indicators\"><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\" role=\"listbox\" style=\" width:900px; height: 350px !important;\"><div class=\"carousel-item active\"><img class=\"d-block img-fluid\" src=\"static/ebay_tm_rgb.jpg\" alt=\"First slide\"></div><div class=\"carousel-item\"><img class=\"d-block img-fluid\" src=\"http://placehold.it/900x350\" alt=\"Second slide\"></div><div class=\"carousel-item\"><img class=\"d-block img-fluid\" src=\"http://placehold.it/900x350\" alt=\"Third slide\"></div></div><a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div><div class=\"row text-center\"><div class=\"col-lg-3 col-md-6 mb-4\"><div class=\"card\"><img src=\"http://placehold.it/500x325\" alt=\"\"><div class=\"card-body\"><h4 class=\"card-title\">Card title</h4><p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p></div><div class=\"card-footer\"><a href=\"#\" class=\"btn btn-primary\">Find Out More!</a></div></div></div><div class=\"col-lg-3 col-md-6 mb-4\"><div class=\"card\"><img src=\"http://placehold.it/500x325\" alt=\"\"><div class=\"card-body\"><h4 class=\"card-title\">Card title</h4><p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p></div><div class=\"card-footer\"><a href=\"#\" class=\"btn btn-primary\">Find Out More!</a></div></div></div><div class=\"col-lg-3 col-md-6 mb-4\"><div class=\"card\"><img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\"><div class=\"card-body\"><h4 class=\"card-title\">Card title</h4><p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p></div><div class=\"card-footer\"><a href=\"#\" class=\"btn btn-primary\">Find Out More!</a></div></div></div><div class=\"col-lg-3 col-md-6 mb-4\"><div class=\"card\"><img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\"><div class=\"card-body\"><h4 class=\"card-title\">Card title</h4><p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p></div><div class=\"card-footer\"><a href=\"#\" class=\"btn btn-primary\">Find Out More!</a></div></div></div></div></div><footer class=\"py-5 bg-dark\"><div class=\"container\"><p class=\"m-0 text-center text-white\">Copyright &copy; DealMastiDeal.com 2017</p></div></footer><script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js\" integrity=\"sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4\" crossorigin=\"anonymous\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js\" integrity=\"sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
