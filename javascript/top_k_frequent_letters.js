function topKFrequent(words, k) {
  let word_count = {};
  let freq_words = [];

  for (let i = 0; i < words.length; i++) {
    if (word_count[words[i]]) {
      word_count[words[i]] += 1;
    } else {
      word_count[words[i]] = 1;
    }
  }

  let sorted = Object.entries(word_count).sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    } else if (a[1] < b[1]) {
      return -1;
    } else {
      if (a[0] < b[0]) {
        return 1;
      } else if (a[0] > b[0]) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  // console.log(sorted);
  for (let i = sorted.length - 1; i >= sorted.length - k; i--) {
    freq_words.push(sorted[i][0]);
  }
  return freq_words;
}

module.exports = { topKFrequent };
