// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
// // import './AdminAddHotel.css'; // Import custom CSS for additional styling

// // const AdminAddHotel = () => {
// //     const [hotel, setHotel] = useState({
// //         ownername: '',
// //         hotelname: '',
// //         cityCode: '',
// //         stateCode: ''
// //     });
// //     const [error, setError] = useState(null);
// //     const [success, setSuccess] = useState(null);

// //     // Hardcoded cities and states
// //     const cities = [
// //         { code: 'PUN', name: 'Pune' },
// //         { code: 'BLR', name: 'Bangalore' },
// //         { code: 'CHE', name: 'Chennai' },
// //         { code: 'NDL', name: 'New Delhi' }
// //     ];

// //     const states = [
// //         { code: 'MH', name: 'Maharashtra' },
// //         { code: 'KA', name: 'Karnataka' },
// //         { code: 'TN', name: 'Tamil Nadu' },
// //         { code: 'DL', name: 'Delhi' }
// //     ];

// //     const handleChange = (e) => {
// //         setHotel({ ...hotel, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         axios.post('http://localhost:8080/admin/addhotel', hotel)
// //             .then(response => {
// //                 setSuccess('Hotel added successfully');
// //                 setError(null);
// //                 setHotel({
// //                     ownername: '',
// //                     hotelname: '',
// //                     cityCode: '',
// //                     stateCode: ''
// //                 });
// //             })
// //             .catch(error => setError('Failed to add hotel'));
// //     };

// //     return (
// //         <Container className="mt-5">
// //             <h2 className="mb-4 text-center">Add New Hotel</h2>
// //             {error && <Alert variant="danger">{error}</Alert>}
// //             {success && <Alert variant="success">{success}</Alert>}
// //             <Form onSubmit={handleSubmit} className="shadow-lg p-4 rounded form-border">
// //                 <Row className="mb-3">
// //                     <Form.Group as={Col} controlId="formOwnerName">
// //                         <Form.Label>Owner Name</Form.Label>
// //                         <Form.Control
// //                             type="text"
// //                             name="ownername"
// //                             placeholder="Enter the owner's name"
// //                             value={hotel.ownername}
// //                             onChange={handleChange}
// //                         />
// //                     </Form.Group>
// //                 </Row>
// //                 <Row className="mb-3">
// //                     <Form.Group as={Col} controlId="formHotelName">
// //                         <Form.Label>Hotel Name</Form.Label>
// //                         <Form.Control
// //                             type="text"
// //                             name="hotelname"
// //                             placeholder="Enter the hotel name"
// //                             value={hotel.hotelname}
// //                             onChange={handleChange}
// //                         />
// //                     </Form.Group>
// //                 </Row>
// //                 <Row className="mb-3">
// //                     <Form.Group as={Col} controlId="formCity">
// //                         <Form.Label>City</Form.Label>
// //                         <Form.Control
// //                             as="select"
// //                             name="cityCode"
// //                             value={hotel.cityCode}
// //                             onChange={handleChange}
// //                         >
// //                             <option value="">Select City</option>
// //                             {cities.map(city => (
// //                                 <option key={city.code} value={city.code}>
// //                                     {city.name}
// //                                 </option>
// //                             ))}
// //                         </Form.Control>
// //                     </Form.Group>
// //                 </Row>
// //                 <Row className="mb-4">
// //                     <Form.Group as={Col} controlId="formState">
// //                         <Form.Label>State</Form.Label>
// //                         <Form.Control
// //                             as="select"
// //                             name="stateCode"
// //                             value={hotel.stateCode}
// //                             onChange={handleChange}
// //                         >
// //                             <option value="">Select State</option>
// //                             {states.map(state => (
// //                                 <option key={state.code} value={state.code}>
// //                                     {state.name}
// //                                 </option>
// //                             ))}
// //                         </Form.Control>
// //                     </Form.Group>
// //                 </Row>
// //                 <Button variant="success" type="submit" className="w-100">Add Hotel</Button>
// //             </Form>
// //         </Container>
// //     );
// // };

// // export default AdminAddHotel;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
// import './AdminAddHotel.css'; // Import custom CSS for additional styling

// const AdminAddHotel = () => {
//     const [hotel, setHotel] = useState({
//         ownername: '',
//         hotelname: '',
//         cityCode: '',
//         stateCode: ''
//     });
//     const [hotelIdToDelete, setHotelIdToDelete] = useState(''); // State to store the ID of the hotel to delete
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(null);

//     // Hardcoded cities and states
//     const cities = [
//         { code: 'PUN', name: 'Pune' },
//         { code: 'BLR', name: 'Bangalore' },
//         { code: 'CHE', name: 'Chennai' },
//         { code: 'NDL', name: 'New Delhi' }
//     ];

//     const states = [
//         { code: 'MH', name: 'Maharashtra' },
//         { code: 'KA', name: 'Karnataka' },
//         { code: 'TN', name: 'Tamil Nadu' },
//         { code: 'DL', name: 'Delhi' }
//     ];

//     const handleChange = (e) => {
//         setHotel({ ...hotel, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:8080/admin/addhotel', hotel)
//             .then(response => {
//                 setSuccess('Hotel added successfully');
//                 setError(null);
//                 setHotel({
//                     ownername: '',
//                     hotelname: '',
//                     cityCode: '',
//                     stateCode: ''
//                 });
//             })
//             .catch(error => setError('Failed to add hotel'));
//     };

//     const handleDelete = (e) => {
//         e.preventDefault();
//         axios.delete(`http://localhost:8080/admin/delhotel/${hotelIdToDelete}`)
//             .then(response => {
//                 setSuccess('Hotel deleted successfully');
//                 setError(null);
//                 setHotelIdToDelete('');
//             })
//             .catch(error => setError('Failed to delete hotel'));
//     };

//     return (
//         <Container className="mt-5">
//             <h2 className="mb-4 text-center">Add New Hotel</h2>
//             {error && <Alert variant="danger">{error}</Alert>}
//             {success && <Alert variant="success">{success}</Alert>}
            
//             {/* Add Hotel Form */}
//             <Form onSubmit={handleSubmit} className="shadow-lg p-4 rounded form-border mb-4">
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formOwnerName">
//                         <Form.Label>Owner Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="ownername"
//                             placeholder="Enter the owner's name"
//                             value={hotel.ownername}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formHotelName">
//                         <Form.Label>Hotel Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="hotelname"
//                             placeholder="Enter the hotel name"
//                             value={hotel.hotelname}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formCity">
//                         <Form.Label>City</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="cityCode"
//                             value={hotel.cityCode}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select City</option>
//                             {cities.map(city => (
//                                 <option key={city.code} value={city.code}>
//                                     {city.name}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-4">
//                     <Form.Group as={Col} controlId="formState">
//                         <Form.Label>State</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="stateCode"
//                             value={hotel.stateCode}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select State</option>
//                             {states.map(state => (
//                                 <option key={state.code} value={state.code}>
//                                     {state.name}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Row>
//                 <Button variant="success" type="submit" className="w-100">Add Hotel</Button>
//             </Form>

//             {/* Delete Hotel Form */}
//             <Form onSubmit={handleDelete} className="shadow-lg p-4 rounded form-border">
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formHotelId">
//                         <Form.Label>Hotel ID</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="hotelIdToDelete"
//                             placeholder="Enter the hotel ID to delete"
//                             value={hotelIdToDelete}
//                             onChange={(e) => setHotelIdToDelete(e.target.value)}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Button variant="danger" type="submit" className="w-100">Delete Hotel</Button>
//             </Form>
//         </Container>
//     );
// };

// export default AdminAddHotel;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
// import './AdminAddHotel.css'; // Import custom CSS for additional styling

// const AdminAddHotel = () => {
//     const [hotel, setHotel] = useState({
//         ownername: '',
//         hotelname: '',
//         cityCode: '',
//         stateCode: ''
//     });
//     const [hotelIdToDelete, setHotelIdToDelete] = useState(''); // State to store the ID of the hotel to delete
//     const [hotelIdToUpdate, setHotelIdToUpdate] = useState(''); // State to store the ID of the hotel to update
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(null);

//     // Hardcoded cities and states
//     const cities = [
//         { code: 'PUN', name: 'Pune' },
//         { code: 'BLR', name: 'Bangalore' },
//         { code: 'CHE', name: 'Chennai' },
//         { code: 'NDL', name: 'New Delhi' }
//     ];

//     const states = [
//         { code: 'MH', name: 'Maharashtra' },
//         { code: 'KA', name: 'Karnataka' },
//         { code: 'TN', name: 'Tamil Nadu' },
//         { code: 'DL', name: 'Delhi' }
//     ];

//     const handleChange = (e) => {
//         setHotel({ ...hotel, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:8080/admin/addhotel', hotel)
//             .then(response => {
//                 setSuccess('Hotel added successfully');
//                 setError(null);
//                 setHotel({
//                     ownername: '',
//                     hotelname: '',
//                     cityCode: '',
//                     stateCode: ''
//                 });
//             })
//             .catch(error => setError('Failed to add hotel'));
//     };

//     const handleDelete = (e) => {
//         e.preventDefault();
//         axios.delete(`http://localhost:8080/admin/delhotel/${hotelIdToDelete}`)
//             .then(response => {
//                 setSuccess('Hotel deleted successfully');
//                 setError(null);
//                 setHotelIdToDelete('');
//             })
//             .catch(error => setError('Failed to delete hotel'));
//     };

//     const handleUpdate = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:8080/admin/updhotel/${hotelIdToUpdate}`, hotel)
//             .then(response => {
//                 setSuccess('Hotel updated successfully');
//                 setError(null);
//                 setHotel({
//                     ownername: '',
//                     hotelname: '',
//                     cityCode: '',
//                     stateCode: ''
//                 });
//                 setHotelIdToUpdate('');
//             })
//             .catch(error => setError('Failed to update hotel'));
//     };

//     return (
//         <Container className="mt-5">
//             <h2 className="mb-4 text-center">Manage Hotels</h2>
//             {error && <Alert variant="danger">{error}</Alert>}
//             {success && <Alert variant="success">{success}</Alert>}
            
//             {/* Add Hotel Form */}
//             <Form onSubmit={handleSubmit} className="shadow-lg p-4 rounded form-border mb-4">
//                 <h3>Add New Hotel</h3>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formOwnerName">
//                         <Form.Label>Owner Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="ownername"
//                             placeholder="Enter the owner's name"
//                             value={hotel.ownername}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formHotelName">
//                         <Form.Label>Hotel Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="hotelname"
//                             placeholder="Enter the hotel name"
//                             value={hotel.hotelname}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formCity">
//                         <Form.Label>City</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="cityCode"
//                             value={hotel.cityCode}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select City</option>
//                             {cities.map(city => (
//                                 <option key={city.code} value={city.code}>
//                                     {city.name}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-4">
//                     <Form.Group as={Col} controlId="formState">
//                         <Form.Label>State</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="stateCode"
//                             value={hotel.stateCode}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select State</option>
//                             {states.map(state => (
//                                 <option key={state.code} value={state.code}>
//                                     {state.name}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Row>
//                 <Button variant="success" type="submit" className="w-100">Add Hotel</Button>
//             </Form>

//             {/* Delete Hotel Form */}
//             <Form onSubmit={handleDelete} className="shadow-lg p-4 rounded form-border mb-4">
//                 <h3>Delete Hotel</h3>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formHotelId">
//                         <Form.Label>Hotel ID</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="hotelIdToDelete"
//                             placeholder="Enter the hotel ID to delete"
//                             value={hotelIdToDelete}
//                             onChange={(e) => setHotelIdToDelete(e.target.value)}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Button variant="danger" type="submit" className="w-100">Delete Hotel</Button>
//             </Form>

//             {/* Update Hotel Form */}
//             <Form onSubmit={handleUpdate} className="shadow-lg p-4 rounded form-border">
//                 <h3>Update Hotel</h3>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formHotelIdToUpdate">
//                         <Form.Label>Hotel ID</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="hotelIdToUpdate"
//                             placeholder="Enter the hotel ID to update"
//                             value={hotelIdToUpdate}
//                             onChange={(e) => setHotelIdToUpdate(e.target.value)}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formOwnerNameUpdate">
//                         <Form.Label>Owner Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="ownername"
//                             placeholder="Enter the owner's name"
//                             value={hotel.ownername}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formHotelNameUpdate">
//                         <Form.Label>Hotel Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="hotelname"
//                             placeholder="Enter the hotel name"
//                             value={hotel.hotelname}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formCityUpdate">
//                         <Form.Label>City</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="cityCode"
//                             value={hotel.cityCode}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select City</option>
//                             {cities.map(city => (
//                                 <option key={city.code} value={city.code}>
//                                     {city.name}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-4">
//                     <Form.Group as={Col} controlId="formStateUpdate">
//                         <Form.Label>State</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="stateCode"
//                             value={hotel.stateCode}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select State</option>
//                             {states.map(state => (
//                                 <option key={state.code} value={state.code}>
//                                     {state.name}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Row>
//                 <Button variant="warning" type="submit" className="w-100">Update Hotel</Button>
//             </Form>
//         </Container>
//     );
// };

// export default AdminAddHotel;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
// import './AdminAddHotel.css'; // Import custom CSS for additional styling

// const AdminAddHotel = () => {
//     const [hotel, setHotel] = useState({
//         ownername: '',
//         hotelname: '',
//         cityCode: '',
//         stateCode: ''
//     });
//     const [hotelIdToDelete, setHotelIdToDelete] = useState(''); // State to store the ID of the hotel to delete
//     const [hotelIdToUpdate, setHotelIdToUpdate] = useState(''); // State to store the ID of the hotel to update
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(null);

//     // Hardcoded cities and states
//     const cities = [
//         { code: 'PUN', name: 'Pune' },
//         { code: 'BLR', name: 'Bangalore' },
//         { code: 'CHE', name: 'Chennai' },
//         { code: 'NDL', name: 'New Delhi' }
//     ];

//     const states = [
//         { code: 'MH', name: 'Maharashtra' },
//         { code: 'KA', name: 'Karnataka' },
//         { code: 'TN', name: 'Tamil Nadu' },
//         { code: 'DL', name: 'Delhi' }
//     ];

//     const handleChange = (e) => {
//         setHotel({ ...hotel, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:8080/admin/addhotel', hotel)
//             .then(response => {
//                 setSuccess('Hotel added successfully');
//                 setError(null);
//                 setHotel({
//                     ownername: '',
//                     hotelname: '',
//                     cityCode: '',
//                     stateCode: ''
//                 });
//             })
//             .catch(error => setError('Failed to add hotel'));
//     };

//     const handleDelete = (e) => {
//         e.preventDefault();
//         axios.delete(`http://localhost:8080/admin/delhotel/${hotelIdToDelete}`)
//             .then(response => {
//                 setSuccess('Hotel deleted successfully');
//                 setError(null);
//                 setHotelIdToDelete('');
//             })
//             .catch(error => setError('Failed to delete hotel'));
//     };

//     const handleUpdate = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:8080/admin/updhotel/${hotelIdToUpdate}`, hotel)
//             .then(response => {
//                 setSuccess('Hotel updated successfully');
//                 setError(null);
//                 setHotel({
//                     ownername: '',
//                     hotelname: '',
//                     cityCode: '',
//                     stateCode: ''
//                 });
//                 setHotelIdToUpdate('');
//             })
//             .catch(error => setError('Failed to update hotel'));
//     };

//     return (
//         <Container className="mt-5">
//             <h2 className="mb-4 text-center">Manage Hotels</h2>
//             {error && <Alert variant="danger">{error}</Alert>}
//             {success && <Alert variant="success">{success}</Alert>}
            
//             {/* Add Hotel Form */}
//             <Form onSubmit={handleSubmit} className="shadow-lg p-4 rounded form-border mb-4">
//                 <h3>Add New Hotel</h3>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formOwnerName">
//                         <Form.Label>Owner Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="ownername"
//                             placeholder="Enter the owner's name"
//                             value={hotel.ownername}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formHotelName">
//                         <Form.Label>Hotel Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="hotelname"
//                             placeholder="Enter the hotel name"
//                             value={hotel.hotelname}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formCity">
//                         <Form.Label>City</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="cityCode"
//                             value={hotel.cityCode}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select City</option>
//                             {cities.map(city => (
//                                 <option key={city.code} value={city.code}>
//                                     {city.name}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-4">
//                     <Form.Group as={Col} controlId="formState">
//                         <Form.Label>State</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="stateCode"
//                             value={hotel.stateCode}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select State</option>
//                             {states.map(state => (
//                                 <option key={state.code} value={state.code}>
//                                     {state.name}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Row>
//                 <Button variant="success" type="submit" className="w-100">Add Hotel</Button>
//             </Form>

//             {/* Delete Hotel Form */}
//             <Form onSubmit={handleDelete} className="shadow-lg p-4 rounded form-border mb-4">
//                 <h3>Delete Hotel</h3>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formHotelId">
//                         <Form.Label>Hotel ID</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Enter the hotel ID to delete"
//                             value={hotelIdToDelete}
//                             onChange={(e) => setHotelIdToDelete(e.target.value)}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Button variant="danger" type="submit" className="w-100">Delete Hotel</Button>
//             </Form>

//             {/* Update Hotel Form */}
//             <Form onSubmit={handleUpdate} className="shadow-lg p-4 rounded form-border">
//                 <h3>Update Hotel</h3>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formHotelIdToUpdate">
//                         <Form.Label>Hotel ID</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Enter the hotel ID to update"
//                             value={hotelIdToUpdate}
//                             onChange={(e) => setHotelIdToUpdate(e.target.value)}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formOwnerNameUpdate">
//                         <Form.Label>Owner Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="ownername"
//                             placeholder="Enter the owner's name"
//                             value={hotel.ownername}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formHotelNameUpdate">
//                         <Form.Label>Hotel Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="hotelname"
//                             placeholder="Enter the hotel name"
//                             value={hotel.hotelname}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formCityUpdate">
//                         <Form.Label>City</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="cityCode"
//                             value={hotel.cityCode}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select City</option>
//                             {cities.map(city => (
//                                 <option key={city.code} value={city.code}>
//                                     {city.name}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-4">
//                     <Form.Group as={Col} controlId="formStateUpdate">
//                         <Form.Label>State</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="stateCode"
//                             value={hotel.stateCode}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select State</option>
//                             {states.map(state => (
//                                 <option key={state.code} value={state.code}>
//                                     {state.name}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Row>
//                 <Button variant="warning" type="submit" className="w-100">Update Hotel</Button>
//             </Form>
//         </Container>
//     );
// };

// export default AdminAddHotel;

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import './AdminAddHotel.css'; // Import custom CSS for additional styling

const AdminAddHotel = () => {
    const [hotel, setHotel] = useState({
        ownername: '',
        hotelname: '',
        cityCode: '',
        stateCode: ''
    });
    const [hotelIdToDelete, setHotelIdToDelete] = useState('');
    const [hotelIdToUpdate, setHotelIdToUpdate] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Hardcoded cities and states
    const cities = [
        { code: 'PUN', name: 'Pune' },
        { code: 'BLR', name: 'Bangalore' },
        { code: 'CHE', name: 'Chennai' },
        { code: 'NDL', name: 'New Delhi' }
    ];

    const states = [
        { code: 'MH', name: 'Maharashtra' },
        { code: 'KA', name: 'Karnataka' },
        { code: 'TN', name: 'Tamil Nadu' },
        { code: 'DL', name: 'Delhi' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotel(prevHotel => ({ ...prevHotel, [name]: value }));
        console.log(`Updated ${name}: ${value}`); // Debug log
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/admin/addhotel', hotel)
            .then(response => {
                setSuccess('Hotel added successfully');
                setError(null);
                setHotel({
                    ownername: '',
                    hotelname: '',
                    cityCode: '',
                    stateCode: ''
                });
            })
            .catch(error => setError('Failed to add hotel'));
    };

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/admin/delhotel/${hotelIdToDelete}`)
            .then(response => {
                setSuccess('Hotel deleted successfully');
                setError(null);
                setHotelIdToDelete('');
            })
            .catch(error => setError('Failed to delete hotel'));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('Updating hotel with ID:', hotelIdToUpdate); // Debug log
        console.log('Update data:', hotel); // Debug log
        axios.put(`http://localhost:8080/admin/updhotel/${hotelIdToUpdate}`, hotel)
            .then(response => {
                setSuccess('Hotel updated successfully');
                setError(null);
                setHotel({
                    ownername: '',
                    hotelname: '',
                    cityCode: '',
                    stateCode: ''
                });
                setHotelIdToUpdate('');
            })
            .catch(error => setError('Failed to update hotel'));
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4 text-center">Manage Hotels</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            
            {/* Add Hotel Form */}
            <Form onSubmit={handleSubmit} className="shadow-lg p-4 rounded form-border mb-4">
                <h3>Add New Hotel</h3>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formOwnerName">
                        <Form.Label>Owner Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="ownername"
                            placeholder="Enter the owner's name"
                            value={hotel.ownername}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formHotelName">
                        <Form.Label>Hotel Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="hotelname"
                            placeholder="Enter the hotel name"
                            value={hotel.hotelname}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            as="select"
                            name="cityCode"
                            value={hotel.cityCode}
                            onChange={handleChange}
                        >
                            <option value="">Select City</option>
                            {cities.map(city => (
                                <option key={city.code} value={city.code}>
                                    {city.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            as="select"
                            name="stateCode"
                            value={hotel.stateCode}
                            onChange={handleChange}
                        >
                            <option value="">Select State</option>
                            {states.map(state => (
                                <option key={state.code} value={state.code}>
                                    {state.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Row>
                <Button variant="success" type="submit" className="w-100">Add Hotel</Button>
            </Form>

            {/* Delete Hotel Form */}
            <Form onSubmit={handleDelete} className="shadow-lg p-4 rounded form-border mb-4">
                <h3>Delete Hotel</h3>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formHotelId">
                        <Form.Label>Hotel ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the hotel ID to delete"
                            value={hotelIdToDelete}
                            onChange={(e) => setHotelIdToDelete(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Button variant="danger" type="submit" className="w-100">Delete Hotel</Button>
            </Form>

            {/* Update Hotel Form */}
            <Form onSubmit={handleUpdate} className="shadow-lg p-4 rounded form-border">
                <h3>Update Hotel</h3>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formHotelIdToUpdate">
                        <Form.Label>Hotel ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the hotel ID to update"
                            value={hotelIdToUpdate}
                            onChange={(e) => setHotelIdToUpdate(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formOwnerNameUpdate">
                        <Form.Label>Owner Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="ownername"
                            placeholder="Enter the owner's name"
                            value={hotel.ownername}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formHotelNameUpdate">
                        <Form.Label>Hotel Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="hotelname"
                            placeholder="Enter the hotel name"
                            value={hotel.hotelname}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formCityUpdate">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            as="select"
                            name="cityCode"
                            value={hotel.city_code}
                            onChange={handleChange}
                        >
                            <option value="">Select City</option>
                            {cities.map(city => (
                                <option key={city.code} value={city.code}>
                                    {city.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formStateUpdate">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            as="select"
                            name="stateCode"
                            value={hotel.state_code}
                            onChange={handleChange}
                        >
                            <option value="">Select State</option>
                            {states.map(state => (
                                <option key={state.code} value={state.code}>
                                    {state.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Row>
                <Button variant="warning" type="submit" className="w-100">Update Hotel</Button>
            </Form>
        </Container>
    );
};

export default AdminAddHotel;

