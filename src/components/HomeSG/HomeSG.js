import React from 'react'
import { Button } from 'react-bootstrap';
import logo from './logo14.png'; // Reemplaza 'logo.svg' con el nombre de tu archivo de imagen

export const HomeSG = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">

  <div class="container-fluid">
    
    <button
      data-mdb-collapse-init
      class="navbar-toggler"
      type="button"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    
    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >
    
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
        <li class="nav-item dropdown">
          <a
            data-mdb-dropdown-init
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            aria-expanded="false"
          >
            Dropdown
          </a>
        
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#">Action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled"
            >Disabled</a
          >
        </li>
      </ul>
    </div>
      </div>
  
</nav>
    )
}

export default HomeSG