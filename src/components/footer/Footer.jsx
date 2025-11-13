import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem"><strong>Popular Destinations</strong></li>
                    <li className="fListItem">Istanbul</li>
                    <li className="fListItem">Antalya</li>
                    <li className="fListItem">Cappadocia</li>
                    <li className="fListItem">Izmir</li>
                    <li className="fListItem">Bodrum</li>
                </ul>

                <ul className="fList">
                    <li className="fListItem"><strong>Regions</strong></li>
                    <li className="fListItem">Aegean Region</li>
                    <li className="fListItem">Mediterranean Region</li>
                    <li className="fListItem">Marmara Region</li>
                    <li className="fListItem">Central Anatolia</li>
                    <li className="fListItem">Black Sea Region</li>
                </ul>

                <ul className="fList">
                    <li className="fListItem"><strong>Airports</strong></li>
                    <li className="fListItem">Istanbul Airport (IST)</li>
                    <li className="fListItem">Sabiha Gökçen (SAW)</li>
                    <li className="fListItem">Antalya Airport (AYT)</li>
                    <li className="fListItem">Izmir Airport (ADB)</li>
                    <li className="fListItem">Ankara Esenboğa (ESB)</li>
                </ul>

                <ul className="fList">
                    <li className="fListItem"><strong>Travel Types</strong></li>
                    <li className="fListItem">Hotels</li>
                    <li className="fListItem">Resorts</li>
                    <li className="fListItem">Villas</li>
                    <li className="fListItem">Hostels</li>
                    <li className="fListItem">Apartments</li>
                </ul>

                <ul className="fList">
                    <li className="fListItem"><strong>Support</strong></li>
                    <li className="fListItem">About Us</li>
                    <li className="fListItem">Contact</li>
                    <li className="fListItem">Help Center</li>
                    <li className="fListItem">Terms & Conditions</li>
                    <li className="fListItem">Privacy Policy</li>
                </ul>
            </div>
            <div className="fText">© 2025 SahirBooking — All rights reserved
                <br />
                <span>Designed and developed by <strong>Sahir ALZAKARIA</strong></span>

            </div>
        </div>

    )
}

export default Footer