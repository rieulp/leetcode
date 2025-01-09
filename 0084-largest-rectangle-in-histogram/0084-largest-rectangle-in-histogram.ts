function largestRectangleArea(heights: number[]): number {
    const stack = []
    let largestRect = 0;

    for (let i = 0; i <= heights.length; i++) {
        const h = i === heights.length ? 0 : heights[i];

        while (stack.length && heights[stack[stack.length - 1]] > h) {
            const index = stack.pop()
            const curHeight = heights[index]
            const width = i - (stack.length > 0 ? stack[stack.length - 1] : -1) - 1;
            const size = width * curHeight;
            largestRect = Math.max(largestRect, size)
        }

        stack.push(i)
    }

    return largestRect;
};