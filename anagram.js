function anagrams(word, words) {


    function word_frequencer(a_word) {
        let frequency_map = {};

        for (let i = 0; i < a_word.length; i++) {
            if (frequency_map.hasOwnProperty(a_word[i])) {
                frequency_map[a_word[i]] += 1;
            }
            else {
                frequency_map[a_word[i]] = 1;
            }
        }

        return frequency_map;

    }

    function isEquivalent(a, b) {
        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }

        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }

    let result = []; // result is an array with the anagrams in it

    const freq_map_of_word = word_frequencer(word);

    words.forEach(word_in_array => {
        if (word.length === word_in_array.length) {
            if (isEquivalent(freq_map_of_word, word_frequencer(word_in_array))) {
                result.push(word_in_array);
            }
        }
    })

    return result;

}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));