export const isNullOrEmptyString = (
  value: string | null
) => {
  return value === null || value === ''
}

export const isNullOrEmptyList = (
  value: any[] | null
) => {
  return value === null || value.length === 0
}