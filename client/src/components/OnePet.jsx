import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OnePet = (props) => {

    const navigate = useNavigate();

    const [pet, setPet] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/findPet/${id}`)
            .then((res) => {
                console.log(res);
                setPet(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/deletePet/${id}`)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className='d-flex justify-content-between p-3'>
                <h2>Deatils About: {pet.petName}</h2>
                <button className='btn btn-danger' onClick={() => deleteHandler(pet._id)}>Adopt {pet.petName}</button>
            </div>
            <div className='border border-dark'>
                <div className='d-flex justify-content-around mt-5'>
                    <h2>Pet Type:</h2>
                    <h2>{pet.petType}</h2>
                </div>
                <div className='d-flex justify-content-around mt-5'>
                    <h2>Description:</h2>
                    <h2>{pet.petDescription}</h2>
                </div>
                <div className='d-flex justify-content-around mt-5'>
                    <h2>Skills:</h2>
                    <h2>{pet.skill1} <br /> {pet.skill2} <br /> {pet.skill3}</h2>
                </div>
            </div>
        </div>
    );
}

export default OnePet;
