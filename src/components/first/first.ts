export function contarOvejas (ovejas) {
  if (!Array.isArray(ovejas)) {
    throw new Error()
  }

  const isArrayOfObjects = ovejas.every(oveja => typeof oveja === 'object')

  if (!isArrayOfObjects) {
    throw new Error('No array of objects provided as parameter')
  }

  return ovejas
    .filter(oveja => oveja.color === 'rojo')
    .filter(
      oveja =>
        oveja.name.toLowerCase().includes('a') &&
        oveja.name.toLowerCase().includes('n')
    )
}
