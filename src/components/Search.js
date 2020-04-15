import React, { useState } from "react";

const Search = () => {
    let [responseObj, setResponseObj] = useState({});
    function getSearch() {
        // data fetch function 

        fetch("https://www.goodreads.com/search/index.xml?q=alchemist&key=hEfUG8f0scotczEDsvTvQ",{
            "method":"GET",
            "headers":{
                "host":"www.goodreads.com",
                "api-key":"hEfUG8f0scotczEDsvTvQ"
            }
        })
        .then(response => response.json()).then(response => {
            setResponseObj(response)
        })
        .catch(err => {
            console.log(err);
        });
     }
     return (
         // JSX code
         <div>
           <h2>Find Information about books</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getSearch}>Search</button>
       </div>
     )

}
export default Search;