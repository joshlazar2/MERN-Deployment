import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Display = (props) => {

    const [petList, setPetList] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allPets')
            .then((res) => {
                console.log(res);
                setPetList(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    petList.sort((a, b) => (a.petType > b.petType) ? 1 : -1)

    return (
        <div>
            <h2>These Pets are looking for a home</h2>
            <Table striped bordered hover>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {
                    petList.map((pet) => (
                        <tr key={pet._id}>
                            <td>{pet.petName}</td>
                            <td>{pet.petType}</td>
                            <td><Link to={`/onePet/${pet._id}`}>Details</Link><Link to={`/editPet/${pet._id}`}>Edit</Link></td>
                        </tr>
                    ))
                }
            </Table>
        </div>
    );
}

export default Display;
