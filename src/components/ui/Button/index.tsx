import { EnumButtonTypes } from '../../../constants/ui'

import styles from './index.module.sass'

interface IButtonProps {
  children: string | JSX.Element
  classname?: string
  buttonType?: EnumButtonTypes
  onClick?: () => void
  disabled?: boolean
}

const Button = ({
  children,
  classname = '',
  buttonType = EnumButtonTypes.BUTTON,
  onClick = () => {},
  disabled = false
}: IButtonProps) => {
  return (
    <button
      className={ `${styles.wrap} ${classname}` }
      type={ buttonType }
      onClick={ onClick }
      disabled={ disabled }
    >
      { children }
    </button>
  )
}

export { Button };
