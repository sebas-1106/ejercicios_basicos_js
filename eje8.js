const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
    let longestWord = "";
    for (let i = 0; i < stringList.length; i++) {
        if (stringList[i].length > longestWord.length) {
            longestWord= stringList[i];
        }
}
console.log(longestWord);
}
findLongestWord(avengers);