import React, { useState, useRef, useEffect } from 'react';
export default function HomePage() {


  return (
    <div>
          <nav class="row text-center d-flex align-items-center p-4">
        <div class="col-md-3 col-6">
            <img src="https://www.siged.sep.gob.mx/SIGED/images/logo_sep.png" class="w-100" />
        </div>
        <div class="col-md-6 d-md-block d-none  app-titlte">
            <h1 class="app-titlte">Asignación Aspirantes a Secundaria</h1>
            <h1>en la ciudad de México 2024</h1>
        </div>
        <div class="col-md-3 col-6">
            <img src="https://www.siged.sep.gob.mx/SIGED/images/logo_sep.png" class="w-100" />
        </div>
        <div class="d-md-none d-block app-titlte">
            <h1>Asignación Aspirantes a Secundaria</h1>
            <h1>en la ciudad de México 2024</h1>
        </div>
    </nav>
    <div class="container px-4">
        <div class="d-flex justify-content-end row my-md-4 my-2">
            <div class="col-md-3">
                <div class="row d-flex justify-content-between">
                    <button class="col-5 btn btn-danger">
                        Restaurar
                    </button>
                    <button class="col-5 btn btn-success" disabled>
                        Concluir
                    </button>
                </div>
            </div>
        </div>
        <ul class="breadcrumbs my-2">
            <li class="first">
                <img src="https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png"
                    class="home-icon" width="50px" />
            </li>
            <li><a href="#" class="pe-md-5 ps-md-4 pe-2 ps-3">Incompleto</a></li>
            <li><a href="#" class="pe-md-5 ps-md-4 pe-2 ps-3">Proceso</a></li>
            <li><a href="#" class="pe-md-5 ps-md-4 pe-2 ps-3">Completado</a></li>
            <li class="last active "><a href="#" class="pe-md-5 ps-md-4 pe-2 ps-3">Cerrado</a></li>
        </ul>

        <div class=" row my-5 d-flex justify-content-around custom-text text-center">
            <div class="col-md-5 p-4">
                <div>
                    <div class="d-flex justify-content-between oferta-head p-3">
                        <span class="text-start rr-card">Oferta/Lugares disponibles</span>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-update-1779544-1513239.png"
                            width="40px" />
                    </div>
                    <div class="bg-light demanda-body">
                        <div class="row m-0 p-3  d-flex align-items-center">
                            <div class="izquierda pb-4">
                                <div class=" total-text custom-card bg-light">
                                    200
                                </div>
                                <div>
                                    Total
                                </div>
                            </div>
                            <div class="row   custom-card bg-light ">

                                <div class="col-md-6 custom-card bg-light    ">
                                    <div class=" available-text">
                                        120
                                    </div>
                                    <div>
                                        Disponibles
                                    </div>
                                </div>
                                <div class="col-md-6 custom-card bg-light  ">
                                    <div class="busy-text">
                                        80
                                    </div>
                                    <div>
                                        Ocupados
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6 p-4">
                <div>
                    <div class="d-flex justify-content-between demanda-head p-3">
                        <span class="text-start rr-card">Demanda/Aspirantes</span>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-update-1779544-1513239.png"
                            width="40px" />
                    </div>
                    <div class="bg-light demanda-body">
                        <div class="row m-0 p-3  d-flex align-items-center">
                            <div class="izquierda pb-4">
                                <div class=" total-text custom-card bg-light">
                                    200
                                </div>
                                <div>
                                    Total
                                </div>
                            </div>
                            <div class="row   custom-card bg-light ">

                                <div class="col-md-4 custom-card bg-light    ">
                                    <div class=" available-text">
                                        120
                                    </div>
                                    <div>
                                        Asignados
                                    </div>
                                </div>
                                <div class="col-md-4 custom-card bg-light  ">
                                    <div class="pending-text">
                                        80
                                    </div>
                                    <div>
                                        Sin asignar
                                    </div>
                                </div>
                                <div class="col-md-4 custom-card bg-light  ">
                                    <div class="busy-text">
                                        80
                                    </div>
                                    <div>
                                        Cancelados
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <button>
                Iniciar Asignación
            </button>
        </div>
    </div>
    <div class="team-info d-none">
        <p>Autores:</p>
        <p>Miguel Alejandro Flores Vera</p>
        <p>Daniel Hipolito Tolentino</p>
        <p>Fabián Mateos Chávez</p>
        <p>Gustavo Rafael Peña Berber</p>
        <p>Jorge Israel Serrano Carrera</p>
    </div>
  </div>
  );
}