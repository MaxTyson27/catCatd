import { BASE_URL } from "../constants/api";

import { ICard, IFavoriteResponse } from "./types";

class Service {
  getCard = async (cardId: number): Promise<ICard | null> => {
    try {
      const response = await fetch(BASE_URL(cardId))
      const data: ICard = await response.json()

      return data;
    } catch (err) {
      return null;
    }
  }

  addToFavorite = async (cardId: number): Promise<IFavoriteResponse | null> => {
    try {
      const response = await fetch(BASE_URL(cardId), { method: 'POST' })
      const data: IFavoriteResponse = await response.json()

      return data;
    } catch (err) {
      return null;
    }
  }
}

export const service = new Service();