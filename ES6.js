let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  function getAge(pet) {
    return new Date().getFullYear() - pet.bornOn;
  }
  let pets = petsWithAge.map(function( getAge) {
      return getAge.pet
  })
  console.log(petsWithAge);

  let dogs = pets.map(function (pet){
      return pet.dog 
  })
  console.log(dogs)
  let jasper = pets.map(function (pet){
    return  pet.jasper 
})
console.log("Jasper is " + jasper.age + " years old");