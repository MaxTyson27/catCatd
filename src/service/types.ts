interface ICard {
  id: number,
  name: string,
  breed: string,
  habit: string,
  description: string,
  image: string,
}

interface IFavoriteResponse {
  id: number,
  liked: boolean
}

export type { ICard, IFavoriteResponse };