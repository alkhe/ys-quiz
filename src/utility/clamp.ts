export default function clamp<T>(min: T, max: T, value: T) {
  if (value <= min) return min
  if (value >= max) return max
  return value
}
