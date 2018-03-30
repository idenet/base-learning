package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func convertToBin(n int) string {
	result := ""
	if n == 0 {
		return "0"
	}
	for ; n > 0; n /= 2 {
		lsb := n % 2
		result = strconv.Itoa(lsb) + result
	}
	return result
}

func printFile(filename string) {
	file, err := os.Open(filename)
	if err != nil {
		panic(err)
	}
	scanner := bufio.NewScanner(file)
	// 相当于while
	for scanner.Scan() {
		fmt.Println(scanner.Text())
	}
}

func forever() {
	// 死循环
	for {
		fmt.Println("abc")
	}
}

// 修改
func loop() {
	fmt.Println(
		convertToBin(5),  // 101
		convertToBin(13), // 1011  --> 1101
		convertToBin(0),
		convertToBin(224566),
	)
	printFile("abc.txt")
}
