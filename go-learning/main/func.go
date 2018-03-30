package main

import (
	"fmt"
	"math"
	"reflect"
	"runtime"
)

func div(a, b int) (int, int) {
	return a / b, a + b
}

func aplly(op func(int, int) int, a, b int) int {
	p := reflect.ValueOf(op).Pointer()
	opName := runtime.FuncForPC(p).Name()
	fmt.Printf("calling function %s with args"+"(%d, %d)\n", opName, a, b)
	return op(a, b)
}

// 可变参数列表
func sumArgs(numbers ...int) int {
	sum := 0
	for i := range numbers {
		sum += numbers[i]
	}
	return sum
}

func func1() {
	fmt.Println(div(4, 3))
	fmt.Println(aplly(func(a, b int) int {
		return int(math.Pow(float64(a), float64(b)))
	}, 3, 4))

	fmt.Println(sumArgs(1, 2, 4, 5, 6, 6))
}
