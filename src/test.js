var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var ext = [".com", ".net", ".us", ".io"];

  for (let i of pronoun) {
    for (let j of adj) {
      for (let k of noun) {
        for (let l of ext) {
          console.log(i + j + k + l);
        }
      }
    }
  }