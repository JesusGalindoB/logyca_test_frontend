const BASE = 'http://localhost:8000'
const PRIME = '/prime_numbers/'
const TWIN = '/twin_primes/'
const PRIME_DB = '/prime_numbers_db/'
const TWIN_DB = '/twin_primes_db/'

/**
 * getPrimeNumbers - retrieves the prime numbers of the provided number calculated by the endpoint
 * @param {Number}
 * @return {Object}
 */

function getPrimeNumbers(number, endpoint) {
  const url = `${BASE}${endpoint}${number}`;
  return fetch(url).then((data) => data.json());
}

// Selectors
const numberPrime = document.getElementById('number-prime');
const btnNumberPrime = document.getElementById('btn-number-prime');

const numberPrimeTwin = document.getElementById('twin-prime');
const btnTwinPrime = document.getElementById('btn-twin-prime');

const numberPrimeBD = document.getElementById('number-prime-bd');
const btnNumberPrimeBD = document.getElementById('btn-number-prime-bd');

const numberPrimeTwinBD = document.getElementById('twin-prime-db');
const btnTwinPrimeBD = document.getElementById('btn-twin-prime-bd');

// 

const pNumber = document.getElementById('prime')
const pTwin = document.getElementById('twin')
const pNumberDB = document.getElementById('prime-db')
const pTwinDB = document.getElementById('twin-db')


// Events

btnNumberPrime.addEventListener('click', event => {
  const number = numberPrime.value
  if (number) {
    getPrimeNumbers(number, PRIME).then(data => {
      const result = data.results.join(" ")
      pNumber.innerHTML = result;
    });
  }
  
});

btnTwinPrime.addEventListener('click', event => {
  const number = numberPrimeTwin.value.trim()
  if (number) {
    getPrimeNumbers(number, TWIN).then(data => {
      const result = JSON.stringify(data.results)
      pTwin.innerHTML = result;
    });
  }
});

// BTN BD

btnNumberPrimeBD.addEventListener('click', event => {
  const number = numberPrimeBD.value.trim()
  if (number) {
    getPrimeNumbers(number, PRIME_DB).then(data => {
      const result = data.results.join(" ")
      pNumberDB.innerHTML = result;
    });
  }
});

btnTwinPrimeBD.addEventListener('click', event => {
  const number = numberPrimeTwinBD.value.trim()
  if (number) {
    getPrimeNumbers(number, TWIN_DB).then(data => {
      const result = JSON.stringify(data.results)
      pTwinDB.innerHTML = result;
    });
  }
});