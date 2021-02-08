import { Component } from "react";
import "./forclass.css"; 

class ByClass extends Component
{
    state =
    {
        my_name:"I Am Nishant",
        my_age:"23",
        my_mobno:"9856412312"
    }
    onChange = () =>
    {
        
        this.setState(
        {
 my_name:"I Am chetan",
 my_age:"24",
 my_mobno:"7946521345"

        })
        alert("Hello Everyone");
    }
    render()
    {
        return(
            <center>
            <h2 style={{border:"3px solid black"}}>This is ByClass.js Page</h2>
            <div className="for"><h1 style={{color:"black"}}>{this.state.my_name}</h1>
            <h1 style={{color:"black"}}>{this.state.my_age}</h1>
            <h1 style={{color:"black"}}>{this.state.my_mobno}</h1>
                
            <button style={{backgroundColor:"darkorange"}} onClick={this.onChange} >Change</button>
            
            </div>
            </center>




        );
    }
}
export default  ByClass;