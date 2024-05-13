import React from 'react';
import './homeAdmin.css';

function AdministratorHomepage() {


  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 border-end bg-gray-100 p-0">
            <div class="d-flex flex-column h-100 gap-2">
              <div class="d-flex align-items-center border-bottom px-3 h-100">
                <a href="#" class="d-flex align-items-center gap-2 font-semibold text-decoration-none">
                  <i class="bi bi-speedometer2"></i>
                  <span class="">Admin Dashboard</span>
                </a>
                <button class="ms-auto btn btn-outline-secondary">
                  <i class="bi bi-bell"></i>
                  <span class="visually-hidden">Toggle notifications</span>
                </button>
              </div>
              <div class="flex-grow-1 py-2">
                <nav class="nav flex-column">
                  <a class="nav-link rounded-lg bg-gray-100 px-3 py-2 text-dark" href="#">
                    <i class="bi bi-house-door"></i>
                    Dashboard
                  </a>
                  <a class="nav-link rounded-lg px-3 py-2 text-dark" href="#">
                    <i class="bi bi-people"></i>
                    Users
                  </a>
                  <a class="nav-link rounded-lg px-3 py-2 text-dark" href="#">
                    <i class="bi bi-calendar"></i>
                    Shifts
                  </a>
                  <a class="nav-link rounded-lg px-3 py-2 text-dark" href="#">
                    <i class="bi bi-gear"></i>
                    Settings
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <header class="d-flex align-items-center gap-4 border-bottom bg-gray-100 p-3">
              <a href="#" class="d-lg-none">
                <i class="bi bi-speedometer2"></i>
                <span class="visually-hidden">Home</span>
              </a>
              <div class="flex-grow-1">
                <form>
                  <div class="position-relative">
                    <i class="bi bi-search position-absolute start-0 top-50 translate-middle-y text-secondary"></i>
                    <input class="form-control bg-white shadow-none pl-5" placeholder="Search users..." type="search" />
                  </div>
                </form>
              </div>
              <div class="dropdown">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="userMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  <img alt="Avatar" class="rounded-circle" height="32" src="/placeholder.svg" style={{ objectFit: "cover" }} width="32" />
                  <span class="visually-hidden">Toggle user menu</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userMenuButton">
                  <li><span class="dropdown-item-text">My Account</span></li>
                  <hr class="dropdown-divider" />
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><a class="dropdown-item" href="#">Support</a></li>
                  <hr class="dropdown-divider" />
                  <li><a class="dropdown-item" href="#">Logout</a></li>
                </ul>
              </div>
            </header>
            <main class="flex-grow-1 gap-4 p-4">
              <div class="d-flex align-items-center">
                <h1 class="font-weight-bold fs-5">Users</h1>
                <button class="ms-auto btn btn-sm btn-primary">Create Shift</button>
              </div>
              <div class="border shadow-sm rounded">
                {/* Table content */}
              </div>
            </main>
          </div>
        </div>
        <div class="fixed-bottom fixed-lg-end m-3">
          <button class="btn btn-outline-primary d-lg-none">
            <i class="bi bi-plus"></i>
            <span class="visually-hidden">Create Shift</span>
          </button>
          {/* Drawer content */}
        </div>
      </div>
    </div>

  );
}

export default AdministratorHomepage;