const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476,
};
const latvia = {
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921,
};
const litva = {
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114,
};

function calculateTaxes(salary) {
    console.log(this.tax)

    const taxAmount = (this.tax * salary).toFixed(2);
    return taxAmount;
    //.log(taxAmount)
  }

//console.log(calculateTaxes.call(ukraine,1000.33));
  //console.log(taxes);
  
  function getMiddleTaxes(){
    const middleTax = (this.tax*this.middleSalary).toFixed(2)
    return middleTax
  }

  //console.log(getMiddleTaxes.call(latvia));


  function getTotalTaxes(){
    const totalTaxes = (this.tax*this.middleSalary*this.vacancies).toFixed(2)
    return totalTaxes
  }

  //console.log(getTotalTaxes.call(latvia));


  function getMySalary(country){
    let salary = (Math.random() * (2000 - 1500) + 1500).toFixed();
    // console.log('salary',salary)
    // console.log('this', this.tax)

    let profit = (salary-this.tax).toFixed(2)
    //console.log('profit', profit)
return profit


  }
 //getMySalary.call(ukraine)
 setInterval(function(){
    const profit = getMySalary.call(ukraine);
    console.log('profit: ', profit);
  }, 10000);
//    console.log()


// function getMyTaxes(country, salary) {
//     let fullSalary = 0
//     if (country==ukraine){
//         console.log(country.tax)
//         fullSalary = salary-(salary*country.tax)
//         console.log(fullSalary)

// } else if (country==latvia) {
//     console.log(country.tax)
//     fullSalary = salary-(salary*country.tax)
//     console.log(fullSalary)
// } else if (country==litva){
//     console.log(country.tax)
//     fullSalary = salary-(salary*country.tax)
//     console.log(fullSalary)
// }

// }

// getMyTaxes.call(ukraine, 3000)






