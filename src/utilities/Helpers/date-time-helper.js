function datetimeHelper(arrivalDate,departureDate){
    const arrival=new Date(arrivalDate);
    const departure=new Date(departureDate);
    return arrival.getTime()>departure.getTime();
}

module.exports=datetimeHelper;