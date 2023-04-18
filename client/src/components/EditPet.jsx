import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const EditPet = (props) => {

    const navigate = useNavigate();

    const {id} = useParams()

    const [pet, setPet] = useState({
        petName: '',
        petType: '',
        petDescription: '',
        skill1: '',
        skill2: '',
        skill3: ''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setPet({ ...pet, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/findPet/${id}`)
            .then((response) => {
                console.log(response);
                setPet(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/updatePet/${id}`, pet)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <h2>Edit {pet.petName}</h2>
            <form className='border border-dark p-3' onSubmit={submitHandler} >
                <div className='d-flex justify-content-around'>
                    <div>
                        <div className='p-3'>
                            <label>Pet Name:</label>
                            <br />
                            <input type="text" name="petName" onChange={changeHandler} value={pet.petName} />
                            {
                                errors.petName ?
                                    <p className='text-danger'>{errors.petName.message}</p> :
                                    null
                            }
                        </div>
                        <div className='p-3'>
                            <label>Pet Type:</label>
                            <br />
                            <input onInput={(e) => e.target.value = ("" + e.target.value).charAt(0).toUpperCase() + ("" + e.target.value).slice(1)} type="text" name="petType" onChange={changeHandler} value={pet.petType} />
                            {
                                errors.petType ?
                                    <p className='text-danger'>{errors.petType.message}</p> :
                                    null
                            }
                        </div>
                        <div className='p-3'>
                            <label>Pet Description:</label>
                            <br />
                            <input type="text" name="petDescription" onChange={changeHandler} value={pet.petDescription} />
                            {
                                errors.petDescription ?
                                    <p className='text-danger'>{errors.petDescription.message}</p> :
                                    null
                            }
                        </div>
                    </div>
                    <div>
                        <h3>Skills (optional):</h3>
                        <div className='p-3'>
                            <label>Skills 1:</label>
                            <br />
                            <input type="text" name="skill1" onChange={changeHandler} value={pet.skill1} />
                        </div>
                        <div className='p-3'>
                            <label>Skills 2:</label>
                            <br />
                            <input type="text" name="skill2" onChange={changeHandler} value={pet.skill2} />
                        </div>
                        <div className='p-3'>
                            <label>Skills 3:</label>
                            <br />
                            <input type="text" name="skill3" onChange={changeHandler} value={pet.skill3} />
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary'>Edit Pet</button>
            </form>
        </div>
    );
}

export default EditPet;
