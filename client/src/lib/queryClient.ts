// Configuration simple pour frontend-only
// Plus besoin de QueryClient, les données sont statiques

export const queryClient = {
  // Méthodes vides pour maintenir la compatibilité
  invalidateQueries: () => {},
  setQueryData: () => {},
  getQueryData: () => null,
};

// Helper pour les données statiques
export function getStaticData<T>(data: T): T {
  return data;
}