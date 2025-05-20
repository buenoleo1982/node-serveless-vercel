import type { YogaInitialContext } from 'graphql-yoga'

// Define um tipo de contexto específico em vez de usar um objeto vazio
export interface Context {
  // Adicionando uma propriedade para evitar o objeto vazio
  yogaContext: YogaInitialContext;
  // Você pode adicionar mais propriedades aqui que deseja disponibilizar nos seus resolvers
}

export function createContext(initialContext: YogaInitialContext): Context {
  return {
    yogaContext: initialContext,
    // Inicialize seu contexto aqui
  }
}
