function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sArr = [...s].sort();
    const tArr = [...t].sort();

    while (sArr.length && tArr.length) {
        if (sArr.pop() !== tArr.pop()) return false;
    }

    return true
};