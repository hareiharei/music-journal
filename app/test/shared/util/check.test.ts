import { isEmptyString, isNullOrEmptyList, isNullOrEmptyString } from "@/shared/util/check"

describe('isNullOrEmptyString', () => {
  it('should return true when value is null', () => {
    const result = isNullOrEmptyString(null)
    expect(result).toBe(true)
  })
  it('should return true when value is an empty string', () => {
    const result = isNullOrEmptyString('')
    expect(result).toBe(true)
  })
  it('should return false when value is a non-empty string', () => {
    const result = isNullOrEmptyString('t')
    expect(result).toBe(false)
  })
})

describe('isEmptyString', () => {
  it('should return true when value is an empty string', () => {
    const result = isEmptyString('')
    expect(result).toBe(true)
  })
  it('shuold return false when value is a non-empty string', () => {
    const result = isEmptyString('t')
    expect(result).toBe(false)
  })
})

describe('isNullOrEmptyList', () => {
  it('should return true when value is null', () => {
    const result = isNullOrEmptyList(null)
    expect(result).toBe(true)
  })
  it('should return true when value is an empty list', () => {
    const result = isNullOrEmptyList([])
    expect(result).toBe(true)
  })
  it('should return false when value is a non-empty list', () => {
    const result = isNullOrEmptyList([{'test': 1}])
    expect(result).toBe(false)
  })
})

// test isEmptyList
// should return true when value is an empty list
// should return false when value is a non-empty list