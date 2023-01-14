export function isValid(letter) {
    if (!letter) throw new Error('string not provided as parameter')

    const validToy = letter
        .split(' ')
        .filter(toy => toy === '' ||
            toy === '()' ||
            toy.startsWith('(') && !toy.endsWith(')') ||
            !toy.startsWith('(') && toy.endsWith(')') ||
            toy.slice(1).includes('(') ||
            toy.split('').reverse().join('').slice(1).includes(')') ||
            toy.includes(']') ||
            toy.includes('}')
            )

    if (validToy.length !== 0) return false
    return true
}