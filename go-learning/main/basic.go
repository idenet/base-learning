package main

import "fmt"

var (
	aa = 1
	bb = true
	cc = "123"
)

func variable() {
	var a string
	var b int
	var c bool
	var d float32
	var e complex64

	fmt.Printf("%q, %d\n", a, b)
	fmt.Println(c, d, e)
}

func variableShort() {
	a, b, c := 4, true, "avb"
	fmt.Println(a, b, c)
}

func consts() {
	const (
		filename = "abc.txt"
		a, b     = 3, 4
	)
	fmt.Println(filename, a, b)
}

func enums() {
	const (
		b = 1 << (10 * iota)
		kb
		mb
		gb
		tb
		pb
	)
	fmt.Println(b, kb, mb, gb, tb, pb)
}

// 避免报错 测试的时候改回main
func basic() {
	fmt.Println("Hello, 世界")
	variable()
	variableShort()
	enums()
	fmt.Println(aa, bb, cc)
}
