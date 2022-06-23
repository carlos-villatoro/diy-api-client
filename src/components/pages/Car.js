import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import CarForm from "../CarForm"
import CarDetails from "../CarDetails"


export default function Car() {

    // state to get the car
    const [car, setCar]=useState({})
    // whether or not form is shown
    const [showForm, setShowForm]=useState(false)
    const { id }= useParams()
    const navigate = useNavigate()
    
    // retrieve car from server
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/cars/${id}`)
            .then(response =>{
                console.log(response.data)
                setCar(response.data)
            })
    }, [id])

    const handleSubmit = (e, form, setForm) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_SERVER_URL}/cars/${id}`, form)
            .then(response => {
                console.log(response.data)
                setCar(response.data) // add update to state
                setShowForm(false) //hide form
            })
            .catch(console.warn)
    }

    const handleDelete = ()=>{
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/cars/${id}`)
            .then(response =>{
                // navigate away from this page
                navigate('/')
            })
            .catch(console.warn)
    }
    return(
        <div>
            {
                showForm ?
                <CarForm initialForm={car} 
                submitHandler={handleSubmit}/> :
                <CarDetails
                    car={car}
                />
            }
            <button onClick={() => setShowForm(!showForm)}>
                { showForm ? 'cancel' : 'edit'}
            </button>

            {
                showForm ?
                <button class='error' onClick={handleDelete}>Delete</button> :
                ''
            }
        </div>
    )
}