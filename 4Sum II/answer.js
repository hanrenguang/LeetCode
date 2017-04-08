/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let count = 0, hash = {};
    
    // 先计算A[i]+B[j]的所有可能值，并在hash表中相应位计数
    for(let i =0; i < A.length; i++) {
        for(let j =0; j < B.length; j++) {
            let tmp = A[i] + B[j];
            if(hash[tmp]) {
                hash[tmp]++;
            } else {
                hash[tmp] = 1;
            }
        }
    }
    
    //  计算C[i]+D[j]的相反数，与hash表中的值比较，
    //  若相等则找到一组使A[i] + B[j] + C[k] + D[l] = 0
    for(let i =0; i < C.length; i++) {
        for(let j =0; j < D.length; j++) {
            let tmp = -(C[i] + D[j]);
            if(hash[tmp]) {
                count += hash[tmp];
            }
        }
    }
    
    return count;
};