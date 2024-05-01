function FlightRowLock(flightId){
    return `SELECT * FROM flights WHERE flights.id=${flightId}`;
}

module.exports={
    FlightRowLock
}