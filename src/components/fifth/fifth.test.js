import { describe, it, expect } from 'vitest'
import { daysToXmas } from './fifth'

describe('List gifts', () => {
    it('should be a function', () => {
        expect(typeof daysToXmas).toBe('function')
    })

    it('throw an error if no argument is given', () => {
        expect(() => daysToXmas()).toThrow()
    })

    it('should return 0 if date is 25th of December', () => {
        expect(daysToXmas('Dec 25, 2021')).toBe(0)
    })

    it('should return 1 if date is 24th of December', () => {
        expect(daysToXmas('Dec 24, 2021')).toBe(1)
    })

    it('should return 2 if date is 23rd of December', () => {
        expect(daysToXmas('Dec 23, 2021')).toBe(2)
    })
})