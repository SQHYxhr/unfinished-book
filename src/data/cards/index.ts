import { majorArcanaPrototype } from "./major-arcana";

export type { TarotCard, TarotArcana, TarotSuit } from "./schema";
export { majorArcanaPrototype } from "./major-arcana";

/**
 * Look up a TarotCard by its unique ID.
 * Returns `undefined` if no card matches.
 */
export function getTarotCardById(id: string) {
  return majorArcanaPrototype.find((card) => card.id === id);
}
