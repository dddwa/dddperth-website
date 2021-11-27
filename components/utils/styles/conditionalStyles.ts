import { CSSObject } from '@emotion/serialize'

export const conditionalStyles = (condition: boolean, styles: CSSObject): CSSObject => (condition ? styles : {})
