function solution(A) {
  var zeroesCount = 0; //keeps track of zeroes
  var pairs = 0; //aka the result

  for (var i = 0; i < A.length; i++) {
    A[i] === 0 ? zeroesCount++ : (pairs += zeroesCount); //count 0s or add to answer when we encounter 1s

    if (pairs > 1000000000) {
      //required by the question
      return -1;
    }
  }

  return pairs;
}

console.log('solution([0,1,0,1,1]) :>> ', solution([0, 1, 0, 1, 1]));

// https://stackoverflow.com/questions/23774985/codility-passing-car-how-to-approach-this-problem
