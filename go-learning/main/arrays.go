package main

import (
	"fmt"
)

func printArray(arr [5]int) {
	for _, v := range arr {
		fmt.Println(v)
	}
}

func arrays() {
	var arr1 [5]int
	arr2 := [3]int{1, 2, 3}
	arr3 := [...]int{2, 4, 5, 6, 7}
	var grid [4][5]int

	fmt.Println(arr1, arr2, arr3)
	fmt.Println(grid)

	// for i := 0; i < len(arr3); i++ {
	// 	fmt.Println(arr3[i])
	// }

	// for i := range arr3 {
	// 	fmt.Println(arr3[i])
	// }
	// for _, v := range arr3 {
	// 	fmt.Println(v)
	// }

	printArray(arr3)
}
