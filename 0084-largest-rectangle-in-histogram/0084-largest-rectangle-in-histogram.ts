function largestRectangleArea(heights: number[]): number {
    const stack = []
    let largestRect = 0;

    heights.push(0)

    for (let i = 0; i < heights.length; i++) {
        const h = heights[i];
        let lastIndex = -1;
        while (stack.length && heights[stack[stack.length - 1]] > h) {
            const index = stack.pop()
            const curHeight = heights[index]
            const size = (i - index) * curHeight;

            largestRect = Math.max(largestRect, size)
            lastIndex = index;
        }

        if(lastIndex >= 0) {
            stack.push(lastIndex)
            heights[lastIndex] = h
        }

        stack.push(i)
    }

    return largestRect;
};