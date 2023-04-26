const mapArrTostrings = require('./mapArrTostrings')

describe('validateValue', () => {
    test('Корректное значение', () => {
        expect(mapArrTostrings([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('Мешанина', () => {
        expect(mapArrTostrings([1, 2, 3, null, undefined, 'asad'])).toEqual(['1', '2', '3'])
    })
    test('Пустой массив', () => {
        expect(mapArrTostrings([])).toEqual([])
    })
    test('Корректное значение', () => {
        expect(mapArrTostrings([1, 2, 3])).not.toEqual([1, 2, 3])
    })
})