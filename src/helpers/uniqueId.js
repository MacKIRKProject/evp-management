const chr4 = () => Math.random().toString(16).slice(-4)
export function uniqueId(prefix = '') {
  return `${prefix}${new Array(8)
    .fill()
    .map(() => chr4())
    .join('')}`
}
