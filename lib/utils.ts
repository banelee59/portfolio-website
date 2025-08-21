import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleDownloadCV = () => {
  const cvFile = '/public/documents/Phumlani_Mthembu_CV.pdf'
  const link = document.createElement('a')
  link.href = cvFile
  link.download = 'Phumlani_Sibonelo_Mthembu_CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}