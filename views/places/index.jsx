// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

function Index (data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className="col-sm-6">
                <h2>
                    <a href={`/places/${index}`}>
                        {place.name}
                    </a>
                </h2>
                <p className="text-left">
                    {place.cuisines}
                </p>
                <img className="img-fluid" src={place.pic} alt={place.name}/>
                <p className="text-left">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        );
    });

    return (
        <Default>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Default>
    );
};

module.exports = Index;