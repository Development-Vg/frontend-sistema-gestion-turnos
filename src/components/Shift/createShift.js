import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import './Shift.css';
import { Button, Modal } from 'react-bootstrap';
import { format } from 'date-fns';


function CreateShift() {


    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedDependence, setSelectedDependence] = useState(null);

    const [showCreateShift, setShowCreateShift] = useState(false);
    const [showConfirmShift, setShowConfirmShift] = useState(false);
    const [showShiftCreated, setShowShiftCreated] = useState(false);

    const handleCloseCreateShift = () => {
        setSelectedUser(null);
        setSelectedDependence(null)
        setShowCreateShift(false);
    };

    const handleShowCreateShift = (userId, dependence) => {
        setSelectedUser(userId);
        setSelectedDependence(dependence)
        setShowCreateShift(true);
    };

    function handleDependenceSelect(dependence) {
        setSelectedDependence(dependence);
    }
    useEffect(() => {
        console.log(selectedUser);
        console.log(selectedDependence);
    }, [selectedUser, selectedDependence]);

    const handleCloseConfirmShift = () => setShowConfirmShift(false);
    const handleShowConfirmShift = () => setShowConfirmShift(true);

    const handleCloseShiftCreated = () => setShowShiftCreated(false);
    const handleShowShiftCreated = () => setShowShiftCreated(true);

   


    useEffect(() => {
        const fetchData = async () => {
          const backendUrl = process.env.REACT_APP_BCKEND_USERS_QUERY;
          if (!backendUrl) {
            console.error('REACT_APP_BCKEND está indefinido');
            return;
          }
    
          try {
            const response = await axios.get(`${backendUrl}/list/listAll`);
            setData(response.data);
          } catch (error) {
            console.error('Error al cargar los datos', error);
          }
        };
    
        fetchData();
      }, []);

    async function handleConfirmShiftClick() {
        // Asegúrate de tener todos los datos necesarios
        if (!selectedUser || !selectedDependence) {
            alert('Por favor selecciona una dependencia');
            return;
        }
        const backendUrl = process.env.REACT_APP_BCKEND_SHIFT_COMAND;
        const currentDate = new Date(); // Obtén la fecha actual
        const formattedDate = format(currentDate, 'yyyy-MM-ddHH:mm');
        // Crea el objeto con los datos para la petición
        const data = {
            userId: selectedUser,
            dependence: selectedDependence,
            date: formattedDate
        };
    
        console.log(data);
    
        // Haz la petición POST
        try {
            const response = await axios.post(`${backendUrl}/turnos/create`);
            // Maneja la respuesta
            console.log(response);
            handleShowShiftCreated();
        } catch (error) {
            // Maneja el error
            console.error(error);
        }
    }


    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950" style={{ marginTop: '20px' }}>
            <div className="max-w-6xl w-full space-y-6 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="space-y-2">
                    <h1 class="font-weight-bold fs-5 text-center titlle">Crear Turno</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-center">Buscar y selecciona Usuario.</p>
                </div>
                <div className="space-y-4">
                    <header class="d-flex align-items-center justify-content-center gap-4 border-bottom bg-gray-100 p-3" >
                        <div class="flex-grow-1 " style={{ maxWidth: '50%' }}>
                            <form>
                                <div class="position-relative" style={{ maxWidth: '100%' }}>
                                    <i class="bi bi-search position-absolute start-0 top-50 translate-middle-y text-secondary"></i>
                                    <input class="form-control bg-white shadow-none pl-5"
                                        placeholder="Buscar usuarios por nombre, apellido, N docuemto"
                                        type="search"
                                        value={searchValue}
                                        onChange={e => setSearchValue(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                <FontAwesomeIcon icon={faFilter} style={{ marginRight: '10px' }} />
                                Filtros
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="right">
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-1">Configuración</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"  >Cerrar Sesión</Dropdown.Item>
                                <Dropdown.Divider />

                            </Dropdown.Menu>
                        </Dropdown>

                    </header>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="border rounded-lg overflow-auto inline-block" style={{ marginTop: '20px' }}>
                            <table class="table" style={{ width: '620px' }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido</th>
                                        <th scope="col">N documento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.filter(item => {
                                        return item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                                            item.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
                                            item.document.toString().toLowerCase().includes(searchValue.toLowerCase());
                                    }).map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.document}</td>
                                            <td>
                                                <button className="myButton" onClick={() => handleShowCreateShift(item.id)}>Crear Turno</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="fixed-top">
                    <Modal show={showCreateShift} onHide={handleCloseCreateShift}>
                        <Modal.Header closeButton >
                            <Modal.Title >Crear Turno</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-3 justify-content-center" >
                                <label htmlFor="clerk" className="form-label">Seleccionar Dependencia</label>
                                <select id="clerk" className="form-select" onChange={(e) => handleDependenceSelect(e.target.value)}>
                                    <option defaultValue value="Atención al Cliente">Atención al Cliente</option>
                                    <option value="Caja">Caja</option>
                                    <option value="Créditos y Préstamos">Créditos y Préstamos</option>
                                    <option value="Asesoría Financiera">Asesoría Financiera</option>
                                </select>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="justify-content-center">
                            <Button variant="secondary" onClick={handleCloseCreateShift}>Cerrar</Button>
                            <Button variant="primary" onClick={handleConfirmShiftClick} >Confirmar</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="fixed-top">
                    <Modal show={showShiftCreated} onHide={handleCloseShiftCreated}>
                        <Modal.Header closeButton>
                            <Modal.Title>Crear Turno</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Shift #: 12345</p>
                            <p>Clerk: John Doe</p>
                            <p>Date: May 15, 2024</p>
                            <p>Time: 9:00 AM - 5:00 PM</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseCreateShift}>Cerrar</Button>
                            
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>

    );
}


export default CreateShift;
