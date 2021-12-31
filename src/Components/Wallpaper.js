import React from "react";
import '../Styles/Home.css';
import { withRouter } from "react-router";
import axios from "axios";
class Wallpaper extends React.Component{
    constructor(){
        super();
        this.state = {
                restaurants : [],
                searchText : undefined,
                suggestions:[]
        }
}
handleLocationChange=( event) =>{
        const locId = event.target.value;
        sessionStorage.setItem('locationId', locId);
     console.log( 'hi');


        axios({
            method: 'GET',
            url: `http://localhost:5050/restaurants/${locId}`,
            headers: { 'Content-Type': 'application/json' }
        }).then(res => this.setState({ restaurants: res.data.restaurants }))
            .catch(err => console.log(err))
}
handleInputChange  = (event)=>{
    const{ restaurants }=this.state;
    const searchText= event.target.value;

    let searchRestaurants = [];
if(searchText){
    searchRestaurants= restaurants.filter((item)=> item.name.toLowerCase().includes(searchText.toLowerCase()));
}
this.setState({  suggestions: searchRestaurants, searchText })  }

selectedText = (resitem) => {
this.props.history. push (`/details?restaurant=${resitem._id}`);
}

renderSuggestions = ()=>{
const { suggestions, searchText } =this.state;

if(suggestions.length === 0 && searchText){
  return <li>No items to display</li>;
}

return(
<ul>
{
suggestions.map((item,index)=> (<li key ={index} onClick ={()=> this.selectedText(item)}>{`${item.name} , ${item.city}`}</li> ))
}
</ul>
);
}


    render(){
        const { LoctionData}= this.props;
        return(
            <div>


                                 <img src="./Assets/background.jpg" height="450" width="100%" className="image"/>
                                     <div className="container-fluid">
                                         <div className="row text-center">
                                            <div  className="content-1 col-12" >
                                                      <div className="col-12 secondlogo">e!</div>
                
                                                         <div className="col-12 Find-the-best-restaurants-cafés-and-bars"> 
                                                         <b> Find the best restaurants cafés and bars</b>
                                                         </div>
                                                     <div className=" col-12 locationSelector ">
                                                        <select className="select" onChange={this.handleLocationChange}>
                                                                <option value="0"> select </option>
                                                                {LoctionData.map((item)=>{
                                                                    return  < option  value={item.location_id} > {`${item.name},${item.city}`} </option>
                                                                }) }
                                                                
                                                        
                                                            </select>
                                                            </div>
                                                            <div>
                            <span className="glyphicon glyphicon-search search"></span>
                            <div>
                                <input  className="dropdown" type="text" placeholder="Please Enter Restaurant Name" onChange={this.handleInputChange} />
                                {this.renderSuggestions()}
                            </div>
                        </div>
                        


                                                 </div>
                                         </div>
                                    </div>
                             </div>

                   


        
        )
    }
}
export default  withRouter( Wallpaper);