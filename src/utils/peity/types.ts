export type PeityType = 'line' | 'bar' | 'pie' | 'donut'

export interface PeityOptions {
  type: PeityType
  min?: number
  max?: number
  radius?: number
  innerRadius?: number
  height?: number
  width?: number
  padding?: number
  stroke?: string
  strokeWidth?: number
  fill: (idx: number) => string
}
