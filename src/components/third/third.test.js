import { describe, it, expect } from 'vitest'

import { isValid } from './third'

describe('isValid', () => {
    it('should be a function', () => {
        expect(typeof isValid).toBe('function')
    })

    it('should throw specific error if a string is not provided as parameter', () => {
        expect(() => isValid()).toThrowError('string not provided as parameter')
    })

    it('should return a boolean', () => {
        expect(typeof isValid("(muñeca) consola bici")).toBe('boolean')
    })

    it('should check if a list of toys is valid and has not empty toys', () => {
        expect(isValid('item1 item2 item3')).toBe(true)
        expect(isValid('(item1 item2   item3')).toBe(false)
        expect(isValid('item1  item2 (item3)')).toBe(false)
    })

    it('should check if the parentheses are closed correctly for each toy', () => {
        expect(isValid('item1 (item2 item3')).toBe(false)
        expect(isValid('item1 (item2) item3)')).toBe(false)
        expect(isValid('(muñeca) consola bici')).toBe(true)
    })

    it('should check that the gifts in parentheses do not have braces or brackets', () => {
        expect(isValid('item1 (ite}m2) item3')).toBe(false)
        expect(isValid('item1 (ite}m2) (item[3)')).toBe(false)
    })

    it('should check that the gifts in empty parentheses are not valid', () => {
        expect(isValid('(()) bici')).toBe(false)
    })
})