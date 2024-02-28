import { HeartSvg } from "../components/ui/Icons/HeartSvg"

enum EnumIconTypes {
  HEART = 'heart'
}

const ICONS = {
  [EnumIconTypes.HEART]: HeartSvg,
}

export { EnumIconTypes, ICONS }