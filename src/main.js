import h from "hyperscript";
import logo from "./assets/CR5.png";
import "./styles/style.css";

const app = document.getElementById("app");

const ht = h("header.header", [
  h(
    "figure.header--logo-container",
    h("img.header--logo", {
      alt: "Ir al inicio",
      src: logo,
    })
  ),
  h("h2.header--title", [
    h("span.header--title--name", "Cristian Ramirez"),
    h("span.header--title--career", "Software Developer in Crlabs."),
  ]),
]);

const main = h("main.main-content", [
  h("ul.main-content--links", [
    h("a.link-item--a a.link-item--a-1", [
      h(
        "li.main-content--link-item", "Demo"
      ),{ href: "https://rcristianh.github.io/AccountAssistant/" }
    ]),
    h("a.link-item--a a.link-item--a-2", [
      h(
        "li.main-content--link-item", "Blog"
      ),{ href: "https://rcristianh.github.io/myBlog/" }
    ]),
    h("a.link-item--a a.link-item--a-3", [
      h(
        "li.main-content--link-item", "Api"
      ),{ href: "https://rcristianh.github.io/api-rest-moviedb/" }
    ]),
    h("a.link-item--a a.link-item--a-4", [
      h(
        "li.main-content--link-item", "ToDo"
      ),{ href: "https://rcristianh.github.io/ToDo-s/" }
    ]),
  ]),
]);

app.appendChild(ht);
app.appendChild(main);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("../sw.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}