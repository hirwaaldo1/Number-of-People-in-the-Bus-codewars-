var number = function(busStops){
  let peopleOnBus = 0;
  let peopleOff = 0 
  busStops.forEach((v)=>{
    peopleOnBus += v[0]
    peopleOff += v[1]
  })
  return peopleOnBus -peopleOff
}
