import { useState, useEffect } from 'react'


// useState is to create a state
// useEffect is called after the component has rendered

// when you are fetching in a component, fetch the data in the useEffect

function BookCounter(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `${count} Book(s) counted`
    })
    return (
        <section>
            <h1> The Book Counter</h1>
            <button  onClick={() => setCount(count + 1)}> Increase The Number </button>
            <h2> {count} </h2>
        </section>
    )
}

export default BookCounter;