import { EnumIconTypes, ICONS } from "../../../constants/icons";

import styles from './index.module.sass';

interface IconButtonProps {
  iconType: EnumIconTypes
  iconColor?: string
  classname?: string
  onClick?: () => void
  disabled?: boolean,
}

const IconButton = ({
  iconType,
  classname = '',
  iconColor,
  onClick = () => {},
  disabled = false
}: IconButtonProps) => {
  const IconComponent = ICONS[iconType];

  return (
    <button
      className={ `${styles.wrap} ${classname}` }
      onClick={ onClick }
      disabled={ disabled }
    >
      <IconComponent fillColor={ iconColor } />
    </button>
  )
}

export { IconButton };
