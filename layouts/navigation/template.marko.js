// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename);

function render(input, out) {
  var data = input;

  out.w("<div class=\"masthead\"><h3 class=\"text-muted\"><img src=\"/static/images/logo.jpeg\" style=\" width:90px; height: 55px !important;\"> DealMastiDeal.com</h3><nav class=\"navbar navbar-expand-md navbar-light bg-light rounded mb-3\"><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarCollapse\"><ul class=\"navbar-nav text-md-center nav-justified w-100\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/topdeals\">Top Deals</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/coupons\">Coupons</a></li> <li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">More</a><div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\"><a class=\"dropdown-item\" href=\"#\">About</a><a class=\"dropdown-item\" href=\"/contactus\">Contact Us</a></div></li></ul></div></nav></div>");
}

marko_template._ = render;

marko_template.meta = {};