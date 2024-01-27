import express from "express";
import { engine } from "express-handlebars";
import fs from "fs/promises";
import { loadMovie, loadMovies } from "./movies.js";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

const MENU = [
  {
    label: "Home page",
    link: "/",
  },
  {
    label: "About us",
    link: "/about",
  },
  {
    label: "Contact us",
    link: "/contact",
  },
  {
    label: "Tickets",
    link: "/tickets",
  },
  {
    label: "Age-limit",
    link: "/age-limit",
  },

  {
    label: "Films",
    link: "/films",
  },

  {
    label: "News",
    link: "/news",
  },

  {
    label: "QandA",
    link: "/QandA",
  },
];

async function renderPage(response, page) {
  const currentPath = page == "index" ? "/" : `/${page}`;

  response.render(page, {
    menuItems: MENU.map((item) => {
      return {
        active: currentPath == item.link,
        label: item.label,
        link: item.link,
      };
    }),
  });
}
/*app.get("/tickets", async (request, response) => {
  renderPage(response, "tickets");
});*/
app.get("/", async (request, response) => {
  renderPage(response, "index");
});

app.get("/about", async (request, response) => {
  renderPage(response, "about");
});

app.get("/age-limit", async (request, response) => {
  renderPage(response, "age-limit");
});

app.get("/contact", async (request, response) => {
  renderPage(response, "contact");
});

app.get("/films", async (request, response) => {
  renderPage(response, "films");
});

app.get("/news", async (request, response) => {
  renderPage(response, "news");
});

app.get("/QandA", async (request, response) => {
  renderPage(response, "QandA");
});


app.get("/tickets", async (request, response) => {
  const movies = await loadMovies();
  response.render("tickets", { movies });
});

app.get("/movies/:movieId", async (request, response) => {
  const movie = await loadMovie(request.params.movieId);
  response.render("movie", { movie });
});
app.use("/static", express.static("./static"));
export  default app;