import './featuredProperties.css'

const FeaturedProperties = () => {
    return (
        <div className='fb'>
            <div className='fbItem'>
                <img className='fbImg' alt='Hotel in Istanbul' src='/assets/IstanbulHotel.jpg' />
                <span className='fbName'>Istanbul Bosphorus Hotel</span>
                <span className='fbCity'>Istanbul</span>
                <span className='fbPrice'>Starting from 140$</span>
                <div className='fbRating'>
                    <button>9.1</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className='fbItem'>
                <img className='fbImg' alt='Hotel in Antalya' src='/assets/AntalyaResort.jpg' />
                <span className='fbName'>Antalya Beach Resort</span>
                <span className='fbCity'>Antalya</span>
                <span className='fbPrice'>Starting from 130$</span>
                <div className='fbRating'>
                    <button>8.8</button>
                    <span>Very Good</span>
                </div>
            </div>

            <div className='fbItem'>
                <img className='fbImg' alt='Hotel in Trabzon' src='/assets/TrabzonViewHotel.jpg' />
                <span className='fbName'>Trabzon View Hotel</span>
                <span className='fbCity'>Trabzon</span>
                <span className='fbPrice'>Starting from 110$</span>
                <div className='fbRating'>
                    <button>8.6</button>
                    <span>Very Good</span>
                </div>
            </div>

            <div className='fbItem'>
                <img className='fbImg' alt='Hotel in Ankara' src='/assets/AnkaraPalace.jpg' />
                <span className='fbName'>Ankara Palace Hotel</span>
                <span className='fbCity'>Ankara</span>
                <span className='fbPrice'>Starting from 115$</span>
                <div className='fbRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className='fbItem'>
                <img className='fbImg' alt='Hotel in Izmir' src='/assets/IzmirSeaHotel.jpg' />
                <span className='fbName'>Izmir Sea View Hotel</span>
                <span className='fbCity'>Izmir</span>
                <span className='fbPrice'>Starting from 125$</span>
                <div className='fbRating'>
                    <button>9.0</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>


    )
}

export default FeaturedProperties