import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          👩🏼‍🍳🧑🏽‍🍳👨🏿‍🍳
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Inicio
            </a>
            <a class="nav-item nav-link" href="#">
              Recetas Vegetarianas
            </a>
            <a class="nav-item nav-link" href="#">
              Postres
            </a>
            <a class="nav-item nav-link" href="#">
              Sobre mí
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
