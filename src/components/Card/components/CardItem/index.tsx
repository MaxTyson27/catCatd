
import { useState } from 'react'
import { service } from '../../../../service'

import { CardHeader } from '../CardHeader'
import { Text } from '../../../ui/Text'
import { Button } from '../../../ui/Button'
import { IconButton } from '../../../ui/IconButton'

import { EnumColorTypes, EnumTextTypes } from '../../../../constants/ui'
import { EnumIconTypes } from '../../../../constants/icons'
import { IMAGE_URLS } from '../../../../constants/image-urls'

import { ICard } from '../../../../service/types'

import styles from './index.module.sass'

const LABLES = {
  NEXT_BTN: 'Следующий',
}

interface ICardItemProps {
  cardData: ICard
  setNextCard: () => void
}

const CardItem = ({
  cardData: {
    name,
    description,
    breed,
    habit,
    // image, - Какой-то косяк с урлами, которые приходят с бека
    id,
  },
  setNextCard,
}: ICardItemProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToFavorite = () => {
    setIsLoading(true);
    service.addToFavorite(id).then(data => {
      setIsFavorite(!!data?.liked)
      setIsLoading(false)
    })
  }

  const renderFavoriteButton = () => {
    if (isFavorite) return null

    return (
      <IconButton 
        iconColor={ EnumColorTypes.WHITE }
        iconType={ EnumIconTypes.HEART }
        onClick={ handleAddToFavorite }
        disabled={ isLoading }
      />
    )
  }

  return (
    <div className={ styles['card-item'] }>
      <div className={ styles['card-item_header'] }>
        <CardHeader 
          name={ name }
          breed={ breed }
          imageUrl={ IMAGE_URLS[name] }
        />
      </div>
      {/* <img src={ image } alt="cat image" /> */}
      <img className={ styles['card-item_img'] } src={ IMAGE_URLS[name] } alt="cat image" />
      <div className={ styles['card-item_content'] }>
        <Text
          classname={ styles['card-item_name'] }
          type={ EnumTextTypes.MEDIUM }
          color={ EnumColorTypes.BLACK }
        >
          { name }
        </Text>
        <Text
          classname={ styles['card-item_habit'] }
          type={ EnumTextTypes.REGULAR_14 }
          color={ EnumColorTypes.GREY }
        >
          { habit }
        </Text>
        <Text
          classname={ styles['card-item_desc'] }
          type={ EnumTextTypes.REGULAR_14 }
        >
          { description }
        </Text>
        <div className={ styles['card-item_buttons'] }>
          <Button
            onClick={ setNextCard }
          >
            <Text
              color={ EnumColorTypes.GREY }
              type={ EnumTextTypes.REGULAR_12 }
            >
              { LABLES.NEXT_BTN }
            </Text>
          </Button>
          { renderFavoriteButton() }
        </div>
      </div>
    </div>
  )
}

export { CardItem }
