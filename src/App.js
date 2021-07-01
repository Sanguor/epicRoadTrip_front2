import './App.css';
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


function App() {
  return (
    <div class="centered">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicDestination">
          <Form.Label>Destination</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Enter Destination" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control size="lg" type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicActivities">
          <Form.Label>Activities</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Select Activities" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicActivities">
          <Form.Label>Number of People</Form.Label>
          <Form.Control  size="lg"type="text" placeholder="Select Number" />
        </Form.Group>
        
        <br></br>

        <div class="button">
          <Button variant="secondary" size="lg">
            Submit
          </Button>
        </div>

      </Form>
    </div>
  );
}

export default App;
