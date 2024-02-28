import { Card } from "./components/Card"
import { Text } from "./components/ui/Text"

import { EnumColorTypes, EnumTextTypes } from "./constants/ui"

import styles from './App.module.sass'

const LABLES = {
  TITLE: 'Select your future cat ^_^',
}

function App() {
  return (
    <div className={ styles.wrapper }>
      <Text
        type={ EnumTextTypes.MEDIUM }
        color={ EnumColorTypes.BLACK }
        classname={ styles.title }
      >
          { LABLES.TITLE }
      </Text>
      <Card />
    </div>
  )
}

export default App
