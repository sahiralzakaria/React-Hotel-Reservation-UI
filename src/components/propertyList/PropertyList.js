import React from './propertyList.css'

const PropertyList = () => {
    return (
        <div className='pList'>
            {/* Section 1: Hotels */}
            <div className='pListItem'>
                <img alt='Hotel room interior with bed' className='pListImg' src='/assets/Hotels.jpg' />
                <div className='pListTitles'>
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>

            {/* Section 2: Apartments */}
            <div className='pListItem'>
                <img alt='Modern kitchen and dining area' className='pListImg' src='/assets/Apartments.jpg' />
                <div className='pListTitles'>
                    <h1>Apartments</h1>
                    <h2>512 apartments</h2>
                </div>
            </div>

            {/* Section 3: Resorts */}
            <div className='pListItem'>
                <img alt='Resort bedroom and living space' className='pListImg' src='/assets/Resorts.webp' />
                <div className='pListTitles'>
                    <h1>Resorts</h1>
                    <h2>97 resorts</h2>
                </div>
            </div>

            {/* Section 4: Villas */}
            <div className='pListItem'>
                <img alt='Contemporary house with pool at night' className='pListImg' src='/assets/Villas.jpg' />
                <div className='pListTitles'>
                    <h1>Villas</h1>
                    <h2>135 villas</h2>
                </div>
            </div>

            {/* Section 5: Cabins */}
            <div className='pListItem'>
                <img alt='Wooden cabin covered in snow' className='pListImg' src='/assets/Cabins.webp' />
                <div className='pListTitles'>
                    <h1>Cabins</h1>
                    <h2>72 cabins</h2>
                </div>
            </div>
        </div>

    )
}

export default PropertyList