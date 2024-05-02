import { isPalindrome } from "../utils"

describe('isPalindrome', ()=>{
    it('it should return true for "racecar"', ()=>{
         expect(isPalindrome("racecar")).toBe(true)
    })
    it('it should return false for "car"', ()=>{
         expect(isPalindrome("car")).toBe(false)
    })
    it('it should return true for "raceCar"', ()=>{
        expect(isPalindrome("raceCar")).toBe(true)
    })
    it('it should return false for empty string', ()=>{
        expect(isPalindrome("")).toBe(false)
    })
    it("it should throw an error for Numbers", ()=>{
        expect(() => isPalindrome("racec1r")).toThrow('Contains Numbers');
    })
})