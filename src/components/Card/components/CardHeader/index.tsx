import { Text } from '../../../ui/Text'

import { EnumColorTypes, EnumTextTypes } from '../../../../constants/ui'

import styles from './index.module.sass'

interface ICardHeaderProps {
  name: string,
  breed: string
  imageUrl: string
}


const CardHeader = ({
  name,
  breed,
  imageUrl, 
}: ICardHeaderProps) => {
  return (
    <div className={ styles['card-header'] }>
      <img src={ imageUrl } alt="avatar" />
      <div>
        <Text
          classname={ styles.name }
          type={ EnumTextTypes.MEDIUM }
          color={ EnumColorTypes.BLACK }
        >
          { name }
        </Text>
        <Text
          type={ EnumTextTypes.REGULAR_14 }
        >
          { breed }
        </Text>
      </div>
    </div>
  )
}

export { CardHeader }
