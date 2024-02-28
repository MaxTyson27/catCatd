enum EnumTextTypes {
  REGULAR_14, REGULAR_12 = '400',
  MEDIUM = '500',
}

enum EnumColorTypes {
  BLACK = '#000000',
  LIGNT_GREY = '#666666',
  GREY = '#3C3C43',
  WHITE = '#ffffff'
}

const TEXT_SIZING = {
  [EnumTextTypes.REGULAR_14]: {
    fontSize: '14px',
    lineHeight: '17.6px',
  },
  [EnumTextTypes.REGULAR_12]: {
    fontSize: '12px',
    lineHeight: '15.08px',
  },
  [EnumTextTypes.MEDIUM]: {
    fontSize: '18px',
    lineHeight: '22.63px',
  }
}

enum EnumButtonTypes {
  BUTTON = 'button',
  SUBMIT = 'submit'
}

export {
  EnumTextTypes,
  TEXT_SIZING,
  EnumButtonTypes,
  EnumColorTypes,
};