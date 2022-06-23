import { useState } from "react"

export default function CarForm({submitHandler, initialForm}) {
    const [form, setForm]=useState(initialForm)
    
    return(
        <form 
        onSubmit={e => submitHandler(e, form, setForm)}
        style={{ display:'grid', gridTemplateColumns:'2', width:'20rem' }}
        >
            <label htmlFor="make">Make:</label>
            <input
                type='text'
                id='make'
                value={form.make}
                onChange={e => setForm({...form, make: e.target.value})}
                style={{gridColumnStart:2}}
            />

            <label htmlFor="model">Model:</label>
            <input
                type='text'
                id='model'
                value={form.model}
                onChange={e => setForm({...form, model: e.target.value})}
            />

            <label htmlFor="trim">Trim:</label>
            <input
                type='text'
                id='trim'
                value={form.trim}
                onChange={e => setForm({...form, trim: e.target.value})}
            />

            <label htmlFor="price">Price:</label>
            <input
                type='number'
                id='price'
                value={form.price}
                onChange={e => setForm({...form, price: e.target.value})}
            />

            <label htmlFor="hp">Horsepower:</label>
            <input
                type='number'
                id='hp'
                value={form.hp}
                onChange={e => setForm({...form, hp: e.target.value})}
            />


            <button type="submit">Add</button>
        </form>
    )
}