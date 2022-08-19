function prefixSums(A) {
    const length = A.length + 1;
    const P = Array(length).fill(0);
    for (let i = 1; i < length; i++) {
      P[i] = P[i - 1] + A[i - 1];
    }
    return P;
  }
  
  function countTotal(P, x, y) {
    return P[y + 1] - P[x];
  }
  
  function mushrooms(A, k, m) {
    const n = A.length;
    const pref = prefixSums(A);
    let result = 0;
    for (let p = 1; p < Math.min(k, m) + 1; p++) {
      const leftPos = k - p;
      const rightPos = Math.min(n - 1, Math.max(k, k + m - 2 * p));
      result = Math.max(result, countTotal(pref, leftPos, rightPos));
    }
    for (let p = 1; p < Math.min(m + 1, n - k); p++) {
      const rightPos = k + p;
      const leftPos = Math.max(0, Math.min(k, k - (m - 2 * p)));
      result = Math.max(result, countTotal(pref, leftPos, rightPos));
    }
    return result;
  }
  
  console.log(
    'mushrooms([2,3,7,5,1,3,9], 4,6) :>> ',
    mushrooms([2, 3, 7, 5, 1, 3, 9], 4, 6)
  );
  