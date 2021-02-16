import Layout from '../../components/layout'
import {Row,Col} from 'react-bootstrap'
import { RiSpaceShipLine } from 'react-icons/ri'
const Ship = ({...props}) => {
  const films = [
    {index:1, title:'A New Hope'},
    {index:2, title:'The Empire Strikes Back'},
    {index:3, title:'Return of the Jedi'},
    {index:4, title:'The Phantom Menace'},
    {index:5, title:'Attack of the Clones'},
    {index:6, title:'Revenge of the Sith'}
  ]
  return (
    <Layout>
      <h2><RiSpaceShipLine/>{props.name}</h2>
      <div className="list">
        <Row>
          <Col sm><strong>Cargo capacity</strong></Col>
          <Col sm>{props.cargo_capacity}</Col>
        </Row>
        <Row>
          <Col sm><strong>Consumables</strong></Col>
          <Col sm>{props.consumables}</Col>
        </Row>
        <Row>
          <Col sm><strong>Cost in credits</strong></Col>
          <Col sm>{props.cost_in_credits}</Col>
        </Row>
        <Row>
          <Col sm><strong>Manufacturer</strong></Col>
          <Col sm>{props.manufacturer}</Col>
        </Row>
        <Row>
          <Col sm><strong>Passengers</strong></Col>
          <Col sm>{props.passengers}</Col>
        </Row>
        <Row>
          <Col sm><strong>Films</strong></Col>
          <Col sm>{props.films.map(film=>{
            return <div>
              {films.map(movie => {
              if(parseInt(film.substring(film.lastIndexOf('/') -2 ).split('/').join(''),10)=== movie.index){return movie.title}
            })}
            </div>
          })}</Col>
        </Row>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`https://swapi.dev/api/starships/`)
  const data = await res.json()
  const paths =[]

  data.results.forEach(ship =>{
    paths.push( 
      {
        params: 
          {
            pid: ship.url.substring(ship.url.lastIndexOf('/') -2 ).split('/').join('')
          }
      }
    )
  })
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  const pid = context.params.pid
  const res = await fetch(`https://swapi.dev/api/starships/${pid}/`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return  {
    props: data
  }
}
export default Ship;