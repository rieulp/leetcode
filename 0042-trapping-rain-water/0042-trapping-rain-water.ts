function trap(height: number[]): number {
    let left = 0, right = height.length - 1; // 양쪽 포인터
    let leftMax = 0, rightMax = 0; // 양쪽 최대 높이
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            // 왼쪽 포인터 처리
            if (height[left] >= leftMax) {
                leftMax = height[left]; // 왼쪽 최대 높이 갱신
            } else {
                water += leftMax - height[left]; // 고인 물 계산
            }
            left++;
        } else {
            // 오른쪽 포인터 처리
            if (height[right] >= rightMax) {
                rightMax = height[right]; // 오른쪽 최대 높이 갱신
            } else {
                water += rightMax - height[right]; // 고인 물 계산
            }
            right--;
        }
    }

    return water;
}