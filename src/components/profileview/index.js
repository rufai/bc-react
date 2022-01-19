import { useState, useEffect } from 'react';
const name = "MusTAphA"

function Profile(props) {
    const [count, setCount] = useState(0)
    setCount(9)
    const [firstName, setFirstName] = useState("Donna");
    const [lastName, setLastName] = useState("Summer");
    const [middleName, setMiddleName] = useState(props.name);
    setFirstName("Ana")
    console.log(props)
    console.log(props.fname)
    console.log(props.blname)

    if(name.toUpperCase() === "MUSTAPHA") {
        return <h1>{props.fname}'s React Page</h1>;
    }
    else {
        return <h1>Just a React Page</h1>;

    }
}


export default Profile; // to allow other files to see this function