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
  if (isString(str)) {
    const chars = str.toLowerCase().split("");
    let vowelCount = chars.filter((char) => VOWELS.includes(char)).length;
    return vowelCount;
  }
  return 0;
}
console.assert(
  vowels("halló") === 2,
  "vowels: skilar fjölda sérhljóða í streng"
);
console.assert(
  vowels("bcd") === 0,
  "vowels: skilar 0 ef að engir sérhljóðar eru í streng"
);
console.assert(
  vowels(false) === 0,
  "vowels: skilar 0 ef að str er ekki strengur"
);

function consonants(str) {
  if (isString(str)) {
    const chars = str.toLowerCase().split("");
    let consonantsCount = chars.filter((char) =>
      CONSONANTS.includes(char)
    ).length;
    return consonantsCount;
  }
  return 0;
}
console.assert(
  consonants("halló") === 3,
  "consonants: skilar fjölda samhljóða í streng"
);
console.assert(
  consonants("aáo") === 0,
  "consonants: skilar 0 ef að engir samhljóðar eru í streng"
);
console.assert(
  consonants(false) === 0,
  "consonants: skilar 0 ef að str er ekki strengur"
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert(
    "Leiðbeiningar:\nSláðu inn streng til að sjá lengsta og stysta orðið í strengnum, strenginn öfugan, hvort að strengurinn sé samhverfur og fjölda sérhljóða og fjölda samhljóð í strengnum."
  );

 let redo = true;
  while (redo) {
    const input = prompt("Sláðu inn streng:");

    if (input === null || input.trim() === "") {
      console.info("Hætt við eða ekkert inntak veitt.");
      return; 
    }

    try {
      const longestWord = longest(input);
      const shortestWord = shortest(input);
      const reversedStr = reverse(input);
      const vowelCount = vowels(input);
      const consonantCount = consonants(input);
      const isPalindrome = palindrome(input);

      alert(
        `Niðurstöður fyrir "${input}":\n` +
        `Lengsta orðið: ${longestWord}\n` +
        `Stysta orðið: ${shortestWord}\n` +
        `Öfugur: ${reversedStr}\n` +
        `Fjöldi sérhljóða: ${vowelCount}\n` +
        `Fjöldi samhljóða: ${consonantCount}\n` +
        `Er strengur samhverfur: ${isPalindrome}`
      );

      console.info(`Það tókst að reikna niðurstöður fyrir "${input}".`);

    } catch (error) {
      console.error("Villa: ", error);
    }

    redo = confirm("Vilt þú prófa aftur?");
  }

}

