import React from "react";
import '../Styles/Home.css';
import QuickSearchData from "./QuickSearchData";

class QuickSearch extends React .Component{
    render(){
      const { mealtypedata} = this.props
    return(
            <div>


              <div className=" col-12 quick-search"> quick serches </div>
      <div className=" col-12 meal"> Discover restaurants by type of meal</div>    

    <div className="container">

        <div className="row">
            <div className="content-2">

                 { mealtypedata.map((item) =>{
                   return <QuickSearchData item={item} />
                  
                 })}
             
                </div>
                </div>

           </div>                
    
</div>
        )
    }

}
export default QuickSearch;