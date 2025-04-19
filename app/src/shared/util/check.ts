export const isNullOrEmptyString = (
  value: string | null
) => {
  return value === null || value === ''
}

export const isEmptyString = (
  value: string
) => {
  return value === ''
}

export const isNullOrEmptyList = (
  value: any[] | null
) => {
  return value === null || value.length === 0
}

export const isEmptyList = (
  value: any[]
) => {
  return value.length === 0
}