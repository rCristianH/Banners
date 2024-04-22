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
    h("span.header--title--career", "Software Developer"),
  ]),
]);

const main = h("main.main-content", [
  h("ul.main-content--links", [
    h("li.main-content--link-item", h("a.link-item--a", { href: "/" }), "one"),
    h("li.main-content--link-item", "two"),
    h("li.main-content--link-item", "three"),
    h("li.main-content--link-item", "four"),
  ]),
]);

app.appendChild(ht);
app.appendChild(main);
