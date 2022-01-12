const program = "Black Codher Bootcamp";

function Adverts(){
    return (
        <section className="">
            <h1> Adverts </h1>
            <h2> { program } React Page </h2>
            <form>
                <label htmlFor="usermail">Enter Your Email Address</label> 
                <input id="mail" name="usermail" type="email" />
            </form>
        </section>
    )
}
// properties (props), parameter
function addition(a,b){
    return a + b
}
addition(5,6) // 11
Greeting() // no parameter, no property, no prop
Greeting("Anna Tabi") // has parameter

function Greeting(props){
    // console.log(props.id)
    // if(name){
    //     return (<h1> {props.name} React page </h1>)
    // }
    return (<h1> Just a React Page </h1>)
}

export { Adverts, addition, Greeting };

// export { Adverts, addition, Greeting }; 
// export : to allow other files to see this function
// default : to say I'm exporting just one function or one component