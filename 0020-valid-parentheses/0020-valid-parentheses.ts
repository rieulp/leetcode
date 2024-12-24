function isValid(s: string): boolean {
    const stack = [];
    const left = ['(', '{', '['];
    const right = [')', '}', ']']

    const brackets = left.reduce((acc, cur, i) => ({ ...acc, [right[i]]: cur }), {});

    for (let i = 0; i < s.length; i++) {
        if (left.includes(s[i])) stack.push(s[i]);
        else if (stack.length && stack[stack.length - 1] === brackets[s[i]]) stack.pop();
        else return false;
    }
    return stack.length === 0
};