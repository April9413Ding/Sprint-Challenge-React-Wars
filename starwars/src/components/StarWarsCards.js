import React,{useState,useEffect} from 'react';
import axios from "axios";
import ImgCard from './ImgCard';
import { Container, Row, Col } from 'reactstrap';
import NextBtns from './NextBtns';

const StarWarsCards = () =>{
    const [people,setPeople] = useState([]);
    const [page,setPage] = useState(1);

    useEffect(()=>{
        axios.get(`https://swapi.co/api/people/?page=${page}`).then(response =>{
            console.log(response.data);
            setPeople(response.data.results);
        })
    },[page])

    return(
        <div>
            <NextBtns page={page} setPage={setPage}/>
            <Row>
            
        {people.map(item=>{
            return <Col xs="12" md="6" lg="4" xl="3" className="rowSpacing"><ImgCard key={item.url} title={item.name} gender={item.gender} height={item.height} mass={item.mass}/></Col>
            
        })}</Row>
            <NextBtns page={page} setPage={setPage}/>
        </div>
    )
}

export default StarWarsCards;