function isValid(s: string): boolean {
    const regexp = /(\(\)|\{\}|\[\])/g;

    while (s.length > 0) {
        let result = s.replace(regexp, '');
        if (result === s) return false;
        s = result;
    }
    
    return true;
};