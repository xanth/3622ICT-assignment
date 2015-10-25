const $ = require('jquery');
const _ = require('lodash');

import { Flickr } from './flickr.es6.js';
const flickr = new Flickr();

var figs;

let splashBtnWelcome  = $("#splash-btn-welcome");
let splashBtnBack     = $("#splash-btn-back");
let images            = $("#images");

splashBtnWelcome.click(() => {
  splashBtnWelcome.hide();
  images.show('slow');
});

splashBtnBack.click(() => {
  images.hide();
  splashBtnWelcome.show('slow');
});

$( document ).ready(() => {
  getInteresting((figs) => {
    if(figs){
      $('.main').html(figs);
      $(".noresults").hide();
    } else {
      $('.main').html("");
      $(".noresults").show();
    }
  })
});

$("#searchInput").keypress((e) => {
  if (e.which == 13) {
    e.preventDefault();
    getSearch(e.target.value, (figs) => {
      if(figs){
        $('.main').html(figs);
        $(".noresults").hide();
      } else {
        $('.main').html("");
        $(".noresults").show();
      }
    });
  }
});

document.getElementById('login').addEventListener("click", () => {
  alert("You cant do that bro");
});

function getInteresting(cb){
  flickr.get("interestingness", null, (images) => {
      cb(buildFigs(images.photos.photo));
  });
}

function getSearch(str, cb){
  flickr.get("search", str, (images) => {
      cb(buildFigs(images.photos.photo));
  });
}

function buildFigs(images) {
  return _(images).reduce((div, photo) => {
    flickr.get("getSizes", photo.id, (image) => {
        div.append(figure(image.sizes.size[image.sizes.size.length - 1].source, photo.title));
    });
    return div;
  }, $('<div/>'));
}

function figure(url, title){
  let figure = $('<figure/>')
    .addClass("picThumbnail");
  let a = $('<a/>')
    .attr("href", url)
    .attr("data-title", title)
    .attr("data-lightbox", "album")
    .addClass("thumbImg");
  let img = $('<img/>')
    .attr("src", url)
    .attr("alt", title)
    .addClass("thumbImg");
  let figcaption = $('<figcaption/>')
    .text(title);

  a.append(img);

  figure.append(a);
  figure.append(figcaption);

  return figure;
}
