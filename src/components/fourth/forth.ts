export function createXmasTree(height) {
    if (height === undefined) throw new Error('no param provided')
    if (typeof height !== 'number') throw new Error('no number provided')
    if (height < 1 || height > 100) throw new Error('height must be between 1 - 100')
  
    const foo = [1, -1, 0]
    const sum = foo[height] ?? 1
  
    height = height === 1 ? 3 : height
    height = height === 2 ? 3 : height
  
    const tree = []
    let base = ''
    for (let i = 1; i < height + sum; i++) {
      const under = height - i
      tree.push(`${'_'.repeat(under)}${'*'.repeat(i + i - 1)}${'_'.repeat(under)}`)
    }
  
    base = (`\n${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}`).repeat(2)
    return `${tree.join('\n')}${base}`
  }