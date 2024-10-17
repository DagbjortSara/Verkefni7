/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir samhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir sérhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    const split = str.split(" ");
    let longestWord = "";

    for (const word of split) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  return null;
}
console.assert(
  longest("Halló ég heiti Dagbjört") === "Dagbjört",
  "longest: skilar lengsta orði í streng"
);

function shortest(str) {
  if (isString(str)) {
    const split = str.split(" ");
    let shortestWord = split[0];

    for (const word of split) {
      if (word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
    return shortestWord;
  }
  return null;
}
console.assert(
  shortest("Halló ég heiti Dagbjört") === "ég",
  "shortest: skilar stysta orði í streng"
);


function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();

    return reversed.join("");
  }
  return null;
}
console.assert(
  reverse("halló") === "óllah",
  "reverse: snýr við einföldum streng"
);
console.assert(
  reverse(false) === null,
  "reverse: ef ekki strengur, skila null"
);

function palindrome(str) {
  if (isString(str) && str !== "") {
    const reversed = reverse(str);
    if (str.toLowerCase() === reversed.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.assert(
  palindrome("anna") === true,
  "palindrome: skilar true ef strengur er samhverfur"
);
console.assert(
  palindrome("halló") === false,
  "palindrome: skilar false ef strengur er ekki samhverfur"
);
console.assert(
  palindrome(false) === false,
  "palindrome: skilar false ef strengur er ekki strengur"
);
console.assert(
  palindrome("") === false,
  "palindrome: skilar false ef strengur er tómur"
);

function vowels(str) {
  // Útfæra
}

function consonants(str) {
  // Útfæra
}

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
}
