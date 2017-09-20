package main

import "time"
import "fmt"
import "math/rand"

//import "unique"
//import _ "github.com/KyleBanks/go-kit/unique"

func unqInts(input []int) []int {
	u := make([]int, 0, len(input))
	m := make(map[int]bool)

	for _, val := range input {
		if _, ok := m[val]; !ok {
			m[val] = true
			u = append(u, val)
		}
	}

	return u
}
func main() {

	// For example, `rand.Intn` returns a random `int` n,
	// `0 <= n < 100`.
	//fmt.Print(rand.Intn(17), ",")
	//fmt.Print(rand.Intn(17), ",")
	//fmt.Print(rand.Intn(17), ",")
	//fmt.Println(rand.Intn(17))
	//	fmt.Print(rand.Intn(100))
	//fmt.Println()

	// `rand.Float64` returns a `float64` `f`,
	// `0.0 <= f < 1.0`.
	//fmt.Println(rand.Float64())

	// This can be used to generate random floats in
	// other ranges, for example `5.0 <= f' < 10.0`.
	//fmt.Print((rand.Float64()*5)+5, ",")
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	// Call the resulting `rand.Rand` just like the
	// functions on the `rand` package.
	fmt.Print(r1.Intn(17), ",")
	fmt.Print(r1.Intn(17), ",")
	fmt.Print(r1.Intn(17), ",")
	fmt.Print(r1.Intn(17))
	fmt.Println()
	b := make([]int, 30)
	for i := 0; i < 30; {

		fmt.Print(r1.Intn(17), ",")
		b[i] = r1.Intn(17)
		i++

	}
	unique := unqInts(b)
	println(unique)
}
