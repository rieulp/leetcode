## 시행착오
-  dp를 `n x m` array로 할당했을 때 out of memory 에러 발생
- dp를 객체를 가진 ` n` array로 할당했을 때 `TLE`
- 객체 대신 `Map`을 사용해 `key` 에 접근하는 속도를 개선함
​
## 결과
- Runtime : **1452 ms**
- Memory Usage: **86.3MB**