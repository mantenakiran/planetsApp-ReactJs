// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="list-container">
      <img className="image" alt={`planet ${name}`} src={imageUrl} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
