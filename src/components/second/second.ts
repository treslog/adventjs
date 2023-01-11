export function listGifts(letter) {
    if (typeof letter !== 'string')
        throw new Error('not string provided as parameter')

    const validGifts = letter
        .split(' ')
        .map(item => item.trim())
        .filter(item => !item.startsWith('_') && item !== "")

    const toys = {}
    validGifts.forEach(
        toy => (toys[toy] = validGifts.filter(n => n === toy).length)
    )

    return toys
}
