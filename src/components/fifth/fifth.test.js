import { describe, it, expect } from 'vitest'

export function daysToXmas(date) {
    if (!date) throw new Error('No date provided')

    return 0
}

describe('List gifts', () => {
    it('should be a function', () => {
        expect(typeof daysToXmas).toBe('function')
    })

    it('throw an error if no argument is passed', () => {
        expect(() => daysToXmas()).toThrow()
    })

})