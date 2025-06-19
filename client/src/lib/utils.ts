import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Formatage de la monnaie algérienne : 4 chiffres collés puis espace
export function formatAlgerianPrice(amount: number): string {
  const str = amount.toString()
  
  // Si moins de 4 chiffres, retourner tel quel
  if (str.length <= 4) {
    return str
  }
  
  // Grouper par 4 chiffres depuis la droite
  const groups = []
  let remaining = str
  
  while (remaining.length > 4) {
    groups.unshift(remaining.slice(-4))
    remaining = remaining.slice(0, -4)
  }
  
  if (remaining.length > 0) {
    groups.unshift(remaining)
  }
  
  return groups.join(' ')
}
