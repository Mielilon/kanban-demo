export type DropdownItemType = {
  name: string,
  icon?: {
    type: string,
    color: string
  },
}

export type onChangeDropdownType = {
  target: {
    value: string,
    name: string
  }
}
