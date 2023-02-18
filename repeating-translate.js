// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here
let repeatingTranslate = function(sentence){
    let words = sentence.split(" ");
    let newWord = [];

    for (let i = 0; i < words.length; i++){

        if (words[i].length < 3) {
            newWord.push(shorterThanThree(words[i]));
        } else if (words[i].length >= 3) {
           newWord.push(wordEndVowel(words[i]));
        }
    }
    return newWord.join(" ");
}


let shorterThanThree = function(word){ // words that are shorter than 3 characters are unchanged
    if (word.length < 3) {
        return word;
    } else {return false}
};

let wordEndVowel = function(word) {
    let vowel = "aeiouAEIOU";
    let newWord = "";

    if (vowel.includes(word[word.length - 1])) {
        newWord += word + word; // if the word ends with a vowel, simply repeat the word twice (example: 'like'->'likelike')
        return newWord;
    } else {
        for (let i = word.length - 1; i => 0; i--){ // non-vowel, repeat all letters that come after the word's last vowel, including the last vowel itself (example: 'trash'->'trashash')
            if (vowel.includes([word[i]])) {
                newWord += word + word.slice(i);
                return newWord;
            }
        }
    }
};



console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
