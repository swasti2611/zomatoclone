import React from "react";
import {withRouter} from "react-router-dom"

class QuickSearchData extends React.Component{
    handleNavigate = (mealtypeId)=>{
        const locationId =sessionStorage.getItem('locationId');
        if (locationId){
            this.props.history.push(`/filter?mealtype=${mealtypeId}&location=${locationId}`);
        }
        else{
            this.props.history.push(`/filter?mealtype=${mealtypeId}`);
        }
    }
    render(){
        const {item}=this.props;

        return(   
            
                <div onClick={()=>this.handleNavigate (item.meal_type)} className=" col-lg-4 col-md-6 col-sm-12 rect">
            <div className="image-1" className="left">
                <img src={`./${item.image}`} height="140" width="150"/>
            </div>
             <div name="right">
                <div className="item-1">{item.name}</div>
                <div className="item-2"> {item.content}</div>
             </div>
             </div>
             
            
            
          
          
          
          
        )
    }
}
export default withRouter( QuickSearchData);