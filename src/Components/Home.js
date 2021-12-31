import React from "react";
import Wallpaper from './Wallpaper';
import QuickSearch from './QuickSearch';
import axios from 'axios';

class Home extends React.Component {
 constructor(){
     super();
     this.state = {
        locations:[],
         mealtypes:[]
     }
 }


componentDidMount(){
     sessionStorage.clear();
    sessionStorage.setItem('area', undefined);
    sessionStorage.setItem('city', undefined);

    axios({
        method: 'GET',
        url: 'http://localhost:5050/locations',
        headers: { 'Content-Type': 'application/json' }
    }).then(res => this.setState({ locations: res.data.Locations }))
        .catch(err => console.log(err))




        axios({
            method: 'GET',
            url: 'http://localhost:5050/mealtypes',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => this.setState({ mealtypes: res .data.mealtypes }))
            .catch(err => console.log(err))

    


}    


            
   



render(){
    const { locations, mealtypes}= this.state;
        return(
            <React.Fragment>
            <Wallpaper  LoctionData = {locations} />
             <QuickSearch   mealtypedata={mealtypes} />
             </React.Fragment>            
     
        )

    }
}


export default Home;