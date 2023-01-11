import { describe, it, expect } from 'vitest'
import { listGifts } from './second'

const carta = 'bici coche balón _playstation bici coche peluche'
const carta2 = 'bici coche balón _playstation bici coche peluche  '

describe('List gifts', () => {
    it('should be a function', () => {
        expect(typeof listGifts).toBe('function')
    })

    it('throw if a string is not provided as parameter', () => {
        expect(() => listGifts()).toThrow()
    })

    it('should return a object with the toys as key', () => {
        expect(listGifts('item1 item2').item1).toBe(1)
    })

    it('should return a object with the toy as key and number of toys as value', () => {
        expect(listGifts('item1 item2 item1').item1).toBe(2)
        expect(listGifts('item1 item2 item1 item3 item3 item3').item3).toBe(3)
        expect(listGifts('item1 item2 item1 item2 item2 item2').item2).toBe(4)
    })

    it('should return a object with the toy as key and number of toys as value and skip if the gift is crossed out', () => {
        expect(JSON.stringify(listGifts(carta))).toBe(
            '{"bici":2,"coche":2,"balón":1,"peluche":1}'
        )
    })

    it('should return a object with the toy as key and number of toys as value and skip if the gift is empty', () => {
        expect(JSON.stringify(listGifts(carta2))).toBe(
            '{"bici":2,"coche":2,"balón":1,"peluche":1}'
        )
    })

})
