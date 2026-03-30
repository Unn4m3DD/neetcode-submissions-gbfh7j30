class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        let c = 0;
        let s = 0;

        for (let i = 0; i < 32; i++) {
            const bitA = (a >> i) & 1;
            const bitB = (b >> i) & 1;

            const sumBit = bitA ^ bitB ^ c;
            s |= sumBit << i;

            c = (bitA & bitB) | (bitA & c) | (bitB & c);
        }

        return s;
    }
}
