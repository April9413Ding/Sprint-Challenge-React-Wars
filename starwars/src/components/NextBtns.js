import React from 'react';
import { Button } from 'reactstrap';

const NextBtns = ({page,setPage}) =>{

    const Disabledbtn = () =>{if(page === 1){
         return <Button outline color="primary" disabled>
        Previous Page</Button>;
    }else{
         return <Button onClick={()=>{setPage(page-1)}}
        outline color="primary">
        Previous Page</Button>;
    }
    }

    return(
        <div className="pagesBtn">
        
        {Disabledbtn()}

        <Button onClick={()=>{setPage(page+1)}}
        outline color="primary">
        Next Page</Button>
        </div>
    )
}

export default NextBtns;