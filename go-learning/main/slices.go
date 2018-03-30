package main

import (
	"fmt"
)

func updateSlice(s []int) {
	s[0] = 100
}

func slice() {
	arr := [...]int{0, 1, 2, 3, 4, 5, 6, 7}
	s := arr[2:6]
	fmt.Println("arr[2:6] =", s)
	fmt.Println("arr[:6] =", arr[:6])
	fmt.Println("arr[2:] =", arr[2:])
	fmt.Println("arr[:] =", arr[:])

	s2 := arr[:]
	fmt.Println("after updateSlice s2")
	fmt.Println(s2)
	updateSlice(s2)
	fmt.Println(s2)
	fmt.Println(arr)

	arr[0] = 0
	s1 := arr[2:6]
	s2 = s1[3:5]
	fmt.Println("s1 = ", s1)
	fmt.Println("s2 = ", s2)
	fmt.Printf("s2=%v, len(s2)=%d, cap(s2)=%d \n ", s2, len(s2), cap(s2))
	s3 := append(s2, 10)
	s4 := append(s3, 11)
	fmt.Println(s3, s4)
}
