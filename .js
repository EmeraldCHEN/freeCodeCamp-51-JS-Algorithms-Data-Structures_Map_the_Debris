function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let a = 2 * Math.PI;
  let newArr = [];
  let getOrbitalPeriod = function(obj){
    let c = Math.pow(earthRadius + obj.avgAlt, 3);
    let b = Math.sqrt(c / GM);
    let oPeriod = Math.round(a * b);
    delete obj.avgAlt;  //delete the key avgAlt
    obj.orbitalPeriod = oPeriod; // add the new key and its value
    return obj;
  }
  for(let index in arr){
    newArr.push(getOrbitalPeriod(arr[index]));
  }
  return newArr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); // return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
// return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]






// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris/
