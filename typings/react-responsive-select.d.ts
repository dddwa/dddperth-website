declare module 'react-responsive-select/dist/ReactResponsiveSelect' {
  import React from 'react'

  export interface ReactResponsiveSelectProps {
    name: string
    options: ReactResponsiveSelectOption[]
    onSubmit?: () => void
    onChange?: (changes: OnChangeArgs) => void
    caretIcon?: JSX.Element
    selectedValue?: string
    prefix?: string
    disabled?: boolean
    customLabelRenderer?: (selected: ReactResponsiveSelectOption) => JSX.Element
    multiselect?: boolean
    selectedValues?: any[]
  }

  export interface OnChangeArgs {
    altered: boolean
    options: ReactResponsiveSelectOption[]
  }

  export interface ReactResponsiveSelectOption {
    text: string
    value: string
    markup?: JSX.Element
  }

  export default class ReactResponsiveSelect extends React.Component<ReactResponsiveSelectProps> {}
}
