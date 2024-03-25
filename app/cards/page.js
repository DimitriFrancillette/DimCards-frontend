import CardsDisplay from '../components/CardsDisplay';
import FilterMenu from '../components/FilterMenu';

const CardsPage = () => {

  return (
    <div>
      <div className='flex'>
        <CardsDisplay />

        <FilterMenu />
      </div>
    </div>
  )
}

export default CardsPage