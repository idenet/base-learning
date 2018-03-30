package main

import (
	"fmt"
)

func maps() {
	m1 := map[string]string{
		"name":    "ccmouse",
		"course":  "golang",
		"site":    "mooc",
		"quality": "notbad",
	}

	m2 := make(map[string]int) // empty map
	var m3 map[string]int      // nil

	fmt.Println(m1, m2, m3)

	for k, v := range m1 {
		fmt.Println(k, v)
	}

	courseName := m1["course"]
	fmt.Println(courseName)

	if causeName, ok := m1["couse"]; ok {
		fmt.Println(causeName)
	} else {
		fmt.Println("key does not exist")
	}

	fmt.Println("deleting values")
	delete(m1, "name")
	fmt.Println(m1)
}
