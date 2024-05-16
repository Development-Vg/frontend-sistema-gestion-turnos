import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

function Dependence() {
    
  const [showCreateShift, setShowCreateShift] = useState(false);
  const [showConfirmShift, setShowConfirmShift] = useState(false);
  const [showShiftCreated, setShowShiftCreated] = useState(false);

  const handleCloseCreateShift = () => setShowCreateShift(false);
  const handleShowCreateShift = () => setShowCreateShift(true);

  const handleCloseConfirmShift = () => setShowConfirmShift(false);
  const handleShowConfirmShift = () => setShowConfirmShift(true);

  const handleCloseShiftCreated = () => setShowShiftCreated(false);
  const handleShowShiftCreated = () => setShowShiftCreated(true);

  return (
    <>
      <div className="fixed-top">
        <Modal show={showCreateShift} onHide={handleCloseCreateShift}>
          <Modal.Header closeButton>
            <Modal.Title>Create Shift</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="clerk" className="form-label">Select Clerk</label>
              <select id="clerk" className="form-select">
                <option defaultValue>Select Clerk</option>
                <option value="john">John Doe</option>
                <option value="jane">Jane Smith</option>
                <option value="bob">Bob Johnson</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Select Date</label>
              <div className="input-group">
                <input type="text" id="date" className="form-control" placeholder="Pick a date" readOnly />
                <button className="btn btn-outline-secondary" type="button"><CalendarDaysIcon /></button>
              </div>
            </div>
            <div className="row g-2">
              <div className="col">
                <label htmlFor="start-time" className="form-label">Start Time</label>
                <select id="start-time" className="form-select">
                  <option defaultValue>Start Time</option>
                  <option value="9:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="end-time" className="form-label">End Time</label>
                <select id="end-time" className="form-select">
                  <option defaultValue>End Time</option>
                  <option value="9:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseCreateShift}>Close</Button>
            <Button variant="primary">Confirm</Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="fixed-top">
        <Modal show={showConfirmShift} onHide={handleCloseConfirmShift}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Shift</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Clerk: John Doe</p>
            <p>Date: May 15, 2024</p>
            <p>Time: 9:00 AM - 5:00 PM</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseConfirmShift}>Close</Button>
            <Button variant="primary">Confirm</Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="fixed-top">
        <Modal show={showShiftCreated} onHide={handleCloseShiftCreated}>
          <Modal.Header closeButton>
            <Modal.Title>Shift Created</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Shift #: 12345</p>
            <p>Clerk: John Doe</p>
            <p>Date: May 15, 2024</p>
            <p>Time: 9:00 AM - 5:00 PM</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseShiftCreated}>Close</Button>
            <Button variant="primary">Print Shift</Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="d-flex h-100 justify-content-center align-items-center">
        <Button variant="primary" onClick={handleShowCreateShift}>Create Shift</Button>
      </div>
    </>
  );
}

function CalendarDaysIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm14 2H2v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4zm-2-1V2H4v1h8z"/>
    </svg>
  );
}

export default Dependence;
