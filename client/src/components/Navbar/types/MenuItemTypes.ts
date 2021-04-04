export type MenuItemOptions = {
  title: string
  navigation: Navigation
  icon?: string
  position?: MenuItemPosition
  menuPosition?: number
  selected?: boolean
  anchoredMenu?: boolean
  enabled: boolean
}

export type Navigation = {
  path: string
}

export type MenuItemPosition = 'first' | 'middle' | 'last' | 'none'
