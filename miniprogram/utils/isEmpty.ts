export const isEmpty = (obj: any) => {
  for(var key in obj) return false
  return true
} 