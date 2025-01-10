function getWordHash(word: string): Record<string, number> {
    const hash: Record<string, number> = {};
    for (const w of word) hash[w] = (hash[w] ?? 0) + 1;
    return hash;
}

function wordSubsets(words1: string[], words2: string[]): string[] {
    const ans = []

    const maxFreq: Record<string, number> = {}
    for (const word of [...new Set(words2)]) {
        const hash = getWordHash(word)
        for (const [val, cnt] of Object.entries(hash)) {
            maxFreq[val] = Math.max((maxFreq[val] ?? 0) as number, cnt)
        }
    }

    for (const word of words1) {
        const hash = getWordHash(word);
        let isUniversal = true;
        for (const [key, cnt] of Object.entries(maxFreq)) {
            if (!hash[key] || hash[key] < cnt) {
                isUniversal = false;
                break;
            }
        }
        if (isUniversal) ans.push(word);
    }

    return ans;
};