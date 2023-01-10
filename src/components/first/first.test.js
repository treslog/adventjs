import { describe, it, expect } from 'vitest'
import { contarOvejas } from './first'

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

describe('Contar ovejas', () => {
  it('should be a function', () => {
    expect(typeof contarOvejas).toBe('function')
  })

  it('should throw if there is not array provided as parameter', () => {
    expect(() => contarOvejas('a')).toThrow()
  })

  it('should throw an specific error if an array of objects is not provided as parameter', () => {
    expect(() => contarOvejas([1, 2, 3])).toThrow('No array of objects provided as parameter')
  })

  it('should return an array of objects', () => {
    expect(contarOvejas(ovejas).every(item => typeof item === 'object')).toBe(true)
  })

  it('should return all sheeps with the red color', () => {
    expect(JSON.stringify(contarOvejas(
      [
        { name: 'b', color: 'azul' },
        { name: 'an', color: 'rojo' }
      ]
    )))
      .toBe('[{"name":"an","color":"rojo"}]')
  })

  it('should return all sheeps with the red color that in addition its name contains both the letters n AND a, regardless of the order, capital letters or spaces.', () => {
    expect(JSON.stringify(contarOvejas(ovejas)))
      .toBe('[{"name":"Navidad","color":"rojo"},{"name":"Ki Na Ma","color":"rojo"}]')
  })

})

