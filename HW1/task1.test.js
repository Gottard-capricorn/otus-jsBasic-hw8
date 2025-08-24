import {multiply, sum} from "./task1.js";

describe("test of multiply function", () => {
    it("multiply(2,3) should return 6", () => {
        expect(multiply(2, 3)).toBe(6)
    })
    
        it("multiply(-1,20) should return -20", () => {
        expect(multiply(-1, 20)).toBe(-20)
    }) 

        it("multiply(2.3,3) should return 6.9", () => {
        expect(multiply(2.3, 3)).toBeCloseTo(6.9)
    }) 
    
        it("multiply(0,3) should return 0", () => {
        expect(multiply(0, 3)).toBe(0)
    }) 

})

describe("test of sum function", () => {
    it("sum(2,3) should return 5", () => {
        expect(sum(2, 3)).toBe(5)
    }) 
})