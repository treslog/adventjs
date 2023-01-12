import { describe, it, expect } from 'vitest'

function createXmasTree(height) {
    if (height === undefined) throw new Error('no param provided')
    if(typeof height !== 'number') throw new Error('no number provided')
    if(height < 1 || height > 100) throw new Error('height must be between 1 - 100')

    let foo = [1,-1,0]
    let sum = foo[height] ?? 1
    
    height = height === 1 ? 3 : height
    height = height === 2 ? 3 : height
    
    let tree = []
    let base = ''
    for (let i = 1; i < height+sum; i++) {
        const under = height - i
        tree.push(`${'_'.repeat(under)}${'*'.repeat(i+i-1)}${'_'.repeat(under)}`)
    }
    
    base = (`\n${'_'.repeat(height -1)}#${'_'.repeat(height -1)}`).repeat(2)
    return `${tree.join('\n')}${base}`
  }

describe('createXmasTree', () => {
  it('must be a function', () => {
    expect(typeof createXmasTree).toBe('function')
  })

  it('throw specific error if a parameter is not provided', () => {
    expect(() => createXmasTree()).toThrow('no param provided')
  })

  it('throw specific error if a parameter is not a number', () => {
    expect(() => createXmasTree('test')).toThrow('no number provided')
  })

  it('throw specific error if the height of the tree, is not a positive integer from 1 to at most 100', () => {
    expect(() => createXmasTree(0)).toThrow('height must be between 1 - 100')
    expect(() => createXmasTree(101)).toThrow('height must be between 1 - 100')
    expect(() => createXmasTree(0)).toThrow('height must be between 1 - 100')
  })

  it('should return a string', () => {
    expect(typeof createXmasTree(1)).toBe('string')
  })

  it('should include two hash marks and underscores representing the trunk of the tree', () => {
    expect(createXmasTree(1).includes('\n__#__\n__#__')).toBe(true)
  })

  it('should create a tree depending on given height', () => {
    expect(createXmasTree(1)).toBe(`__*__\n__#__\n__#__`)
    expect(createXmasTree(3)).toBe(`__*__\n_***_\n*****\n__#__\n__#__`)
    expect(createXmasTree(2)).toBe(`__*__\n_***_\n__#__\n__#__`)
  })

})

