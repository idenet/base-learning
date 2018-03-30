// 寻找最长不含有重复字符的子串

/**
对于每一个字母x
1. lastOccurred[x]不存在，或者<start 无需操作
2. lastOccurred[x]>=start 更新start
3. 更新lastOccurred[x] 更新lengthmax
*/

package main

import (
	"fmt"
)

func lengthOfNonRepeatingSubstr(s string) int {
	lastOccurred := make(map[rune]int)
	start := 0
	maxLength := 0
	for i, ch := range []rune(s) {
		lastI, ok := lastOccurred[ch]
		if ok && lastI >= start {
			start = lastI + 1
		}
		if i-start+1 > maxLength {
			maxLength = i - start + 1
		}
		lastOccurred[ch] = i
	}
	return maxLength
}

func mapquestions() {
	fmt.Println(lengthOfNonRepeatingSubstr("abcabcbb"))
}
