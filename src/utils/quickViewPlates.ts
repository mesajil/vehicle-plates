export interface Plate {
  text: string
  color?: string
}

export const colors = ['red', 'yellow', 'green', 'blue', 'white', 'gray']

const plates: Plate[] = [
  {text: '1234 ABC', color: colors[Math.floor(Math.random() * colors.length)]},
  {text: ' 5678 DEF', color: colors[Math.floor(Math.random() * colors.length)]},
  {text: ' 9012 GHI', color: colors[Math.floor(Math.random() * colors.length)]},
  {text: ' 3456 JKL', color: colors[Math.floor(Math.random() * colors.length)]},
  {text: ' 7890 MNO', color: colors[Math.floor(Math.random() * colors.length)]},
  {
    text: ' 2345 PQRS',
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {text: ' 6789 TUV', color: colors[Math.floor(Math.random() * colors.length)]},
  {
    text: ' 0123 WXYZ',
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    text: ' 4567 ABCD',
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    text: ' 8901 EFGH',
    color: colors[Math.floor(Math.random() * colors.length)],
  },
]

export default plates
