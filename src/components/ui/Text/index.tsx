import { EnumColorTypes, EnumTextTypes, TEXT_SIZING } from '../../../constants/ui'

interface ITextProps {
  type?: EnumTextTypes
  classname?: string
  children: string
  color?: EnumColorTypes
}

const Text = ({
  type = EnumTextTypes.REGULAR_14,
  classname = '',
  children,
  color = EnumColorTypes.LIGNT_GREY
}: ITextProps) => {
  return (
    <p
      style={{
        ...TEXT_SIZING[type],
        color
      }}
      className={ classname }
    >
      { children }
    </p>
  )
}

export { Text }
