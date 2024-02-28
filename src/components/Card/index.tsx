import { useEffect, useState } from "react";
import { service } from "../../service";

import { Text } from "../ui/Text";
import { CardItem } from "./components/CardItem";

import { EnumTextTypes } from "../../constants/ui";

import { ICard } from "../../service/types";

import styles from './index.module.sass';

const MAX_CARD_COUNT = 5;

const LABLES = {
  ERROR: "Произошла ошибка...",
  LOADING: "Загрузка..."
}

const Card = () => {
  const [cardData, setCardData] = useState<ICard | null>(null)
  const [cardIdCount, setCardIdCount] = useState(1)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    service.getCard(cardIdCount).then(handleGetData)
  }, [cardIdCount])

  const setNextCard = () => {
    let cardId = cardIdCount + 1;

    if (cardIdCount === MAX_CARD_COUNT) {
      cardId = 1
    }

    setCardIdCount(cardId)
  }

  function handleGetData(data: ICard | null) {
    if (!data) {
      setLoading(false)
      setError(!!data)

      return
    }

    setCardData(data);
    setLoading(false)
  }

  const renderErrorMsg = () => {
    if (!error) return null;

    return (
      <Text
        type={ EnumTextTypes.MEDIUM }
      >
        { LABLES.ERROR }
      </Text>
    )
  }

  const renderLoadingMsg = () => {
    if (!loading) return null;

    return (
      <Text
        classname={ styles.loading }
        type={ EnumTextTypes.MEDIUM }
      >
        { LABLES.LOADING }
      </Text>
    )
  }

  const renderCards = () => {
    if (!cardData || loading || error) return null;

    return <CardItem cardData={ cardData } setNextCard={ setNextCard } />
  }

  return (
    <div className={ styles.wrap }>
      { renderErrorMsg() }
      { renderLoadingMsg() }
      { renderCards() }
    </div>
  )
}

export { Card };
