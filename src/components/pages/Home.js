import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import CarForm from "../CarForm"

export default function Home() {
    const url = process.env.REACT_APP_SERVER_URL
    //cars form the backend
    const [cars, setCars] = useState([])
    //error msg state
    const [err, setErr]=useState('')

    useEffect(()=>{
        const fetchCars = async () =>{
            try {
               const response = await axios.get(`${url}/cars`) 
               setCars(response.data)
               console.log(response.data)
            } catch (error) {
                console.warn(error)
            }
        }
        fetchCars()
    }, []) //get all cars when page loads

        // submit handler func
        const handleSubmit = async (e, form, setForm) =>{
            e.preventDefault()
            //axios to post a new car using form state
            console.log('the form data is:', form)
            try {
                //post to the backend
                // axios.post(url, req body/form data, options)
                const response = await axios.post(`${url}/cars`, form)
                //update state w new data
                // opt 1 -- add this new car into state
                setCars([...cars, response.data])
                // opt 2 -- get all the cars from backend and set in state
                // const carsResponse = await axios.get(`${url}/cars`) 
                // setCars(carsResponse.data)
    
                // console.log(response)
                //clear the form -- ???
                // form has submitted correctly -- clear it
                setForm({
                    make: '',
                    model: '',
                    trim: '',
                    price: 1000,
                    hp: 1,
                })
                //clear error
                setErr('')
            } catch (error) {
                console.warn('submit error:', error)
                if(error.response){
                    if(error.response.status === 400){
                        //this error is a validation error from backend
                        setErr(error.response.data.msg)
                    }
                }
            }
        }
        //form change handler funct

    const carLinks = cars.map((car, i)=>{
        return(
            <div key={`carlink${i}`}>
                <Link to={`/cars/${car._id}`}>{car.make} {car.model}</Link>
            </div>
        )
    })
    return (
        <div>
            <h1>Cars I want to drive:</h1>

            {carLinks}
            
            <h1>Add a new car you want to drive:</h1>
            <p>{err}</p>
            <CarForm
                submitHandler={handleSubmit}
                initialForm={{
                    make: '',
                    model: '',
                    trim: '',
                    price: 1000,
                    hp: 1,
                }}
            />

        </div>
    )
}