export default function CarDetails({car}) {
    return(
        <div>
            <article>

            <h2>{car.make} {car.model}</h2>
            

            <h3>Trim: {car.trim}</h3>

            <h3>Price: {car.price}</h3>

            <h2>Horsepower: {car.hp}</h2>
            </article>

        </div>
    )
}