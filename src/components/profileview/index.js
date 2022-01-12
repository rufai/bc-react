
const name = "MusTAphA"

function Profile(props) {
    if(name.toUpperCase() === "MUSTAPHA") {
        return <h1>{name}'s React Page</h1>;
    }
    else {
        return <h1>Just a React Page</h1>;

    }
}


export default Profile; // to allow other files to see this function