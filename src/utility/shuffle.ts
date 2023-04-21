export default function shuffle<T>(xs: T[]) {
  return xs.map(x => ({ x, order: Math.random() }))
    .sort((a, b) => b.order - a.order)
    .map(xo => xo.x)
}
