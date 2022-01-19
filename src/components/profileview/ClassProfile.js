import React from "react"

class ClassProfile extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            firstname : "Donna", //winter
            lastname : "Summer",
            middlename : props.mname
        }
    }

    render(){
        this.setState({
            lastname : "Winter",
            
        })

        this.state.firstname = "Rain"
        return <h1>{this.state.firstname} This is a class components</h1>
    }
}
export default ClassProfile;