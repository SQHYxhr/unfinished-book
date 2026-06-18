export type TarotArcana = "major" | "minor";

export type TarotSuit = "wands" | "cups" | "swords" | "pentacles" | null;

export interface TarotCard {
  /** Unique identifier, e.g. "major-0" */
  id: string;

  /** Chinese name (traditional) */
  nameZh: string;

  /** English name (traditional) */
  nameEn: string;

  /** Major or Minor Arcana */
  arcana: TarotArcana;

  /** Card number within its arcana. Major: 0–21; Minor: 1–14 */
  number: number;

  /** Suit — null for Major Arcana */
  suit: TarotSuit;

  /** Associated classical element */
  element: string;

  /** Associated astrological sign or planet */
  astrology: string;

  /** Numerological significance */
  numerology: string;

  /** Upright keywords */
  uprightKeywords: string[];

  /** Reversed keywords */
  reversedKeywords: string[];

  /** Traditional interpretive framework */
  traditionalMeaning: {
    /** A concise overview of the card in traditional reading */
    overview: string;
    /** The card's luminous or aspirational expression */
    light: string;
    /** The card's shadow or challenging expression */
    shadow: string;
  };

  /** Position within the Fool's Journey (Major Arcana) */
  journeyPosition: {
    /** The stage label */
    stage: string;
    /** A narrative description of this stage */
    description: string;
  };

  /** The Unfinished Book's original artistic identity */
  unfinishedBook: {
    /** Original Chinese title */
    titleZh: string;
    /** Original English title */
    titleEn: string;
    /** Visual concept for future oil-painting art direction */
    imageConcept: string;
    /** Key symbolic objects present in the image (from the project's imagery lexicon) */
    symbols: string[];
    /** A short literary note — not an "answer", but a way of seeing */
    note: string;
    /** Questions for the user to reflect on after viewing */
    reflectionQuestions: string[];
    /** Concrete, grounded suggestions for daily action */
    actionPrompts: string[];
  };

  /** Optional ethical note for cards that require special care */
  ethicsNote?: string;
}
