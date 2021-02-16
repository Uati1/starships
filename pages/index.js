// import Loader from '../components/loader'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,InputGroup, FormControl} from 'react-bootstrap'
import Layout from '../components/layout'
import { BsSearch } from 'react-icons/bs'
import { RiSpaceShipLine } from 'react-icons/ri'
import Link from 'next/link';
const Index = ({...props}) => {
  const ships = props.results;
  const films = [
    {index:1, title:'A New Hope', present:false},
    {index:2, title:'The Empire Strikes Back', present:false},
    {index:3, title:'Return of the Jedi', present:false},
    {index:4, title:'The Phantom Menace', present:false},
    {index:5, title:'Attack of the Clones', present:false},
    {index:6, title:'Revenge of the Sith', present:false}
  ]
  const [search, setSearch] = useState('');
  const [filteredShips, setfilteredShips] = useState(ships);
  const filmFilter = (nb) =>{
    setfilteredShips(ships.filter(ship => {
      return ship.films.includes(`http://swapi.dev/api/films/${nb}/`)
    }));
  }


  const handleChange = (e)=>{
    setSearch(e.target.value.toLowerCase())
  }

  useEffect(() => {
      setfilteredShips(ships.filter(ship=> ship.name.toLowerCase().includes(search))) 
  },[search]);

    return (
      <div>
        <Layout>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search ship by name"
              aria-label="search"
              aria-describedby="basic-addon2"
              onChange = {handleChange}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2"><BsSearch/></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <div >
            {filteredShips.map(ship=>{
              return ship.films.map(film=>{
                return films.map(movie => {
                  if(parseInt(film.substring(film.lastIndexOf('/') -2 ).split('/').join(''),10)=== movie.index && movie.present===false){
                    movie.present=true;
                    return (<div className="title-btn"><Button variant="outline-secondary"  key={movie.index} onClick={() =>filmFilter(movie.index)} >
                      {movie.title}
                    </Button></div>)
                  }
                })

            })})}
            
          </div>
          <div className='list' >
            {filteredShips.map(ship =>{
              return(
                <div className='list-item'>
                    <RiSpaceShipLine/>
                    <Link href={`/ships/${ship.url.substring(ship.url.lastIndexOf('/') -2 ).split('/').join('')}/`}>
                      {ship.name}
                    </Link>
                </div>
              )
            })}
          </div>
        </Layout>
      </div>
    );
}

export async function getStaticProps() {
  const res = await fetch(`https://swapi.dev/api/starships/`)
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {props: data}
}

export default Index;