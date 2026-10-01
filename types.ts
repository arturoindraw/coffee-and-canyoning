
export type Language = 'es' | 'en';

export interface Translation {
  [key: string]: string;
}

export interface ChatResponse {
  texto: string;
  botones: string[];
}

export interface ChatKeywords {
  [key: string]: string[];
}

export interface ChatDictionary {
  keywords: ChatKeywords;
  respuestas: { [key: string]: ChatResponse };
  acciones: { [key: string]: string };
}
