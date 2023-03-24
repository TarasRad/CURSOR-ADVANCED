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

function calculateTaxes(country, salary) {
    const taxAmount = country.tax * salary;

    return taxAmount;
  }

  const taxes = calculateTaxes(latvia, 2000);
  console.log(taxes);
  
//   function getMiddleTaxes(country){
//     const middletax = 
//   }








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






