// Add this to your page component
const handleDownloadCV = async () => {
  try {
    const response = await fetch('/api/download-cv')
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Phumlani_Sibonelo_Mthembu_CV.pdf'
    link.click()
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Download failed:', error)
    window.open('/documents/Phumlani_Mthembu_CV.pdf', '_blank')
  }
}




// pages/api/download-cv.js
// import fs from 'fs'
// import path from 'path'

// export default function handler(req, res) {
//   const filePath = path.join(process.cwd(), 'public', 'documents', 'Phumlani_Mthembu_CV.pdf')
//   const fileContents = fs.readFileSync(filePath)
  
//   res.setHeader('Content-Type', 'application/pdf')
//   res.setHeader('Content-Disposition', 'attachment; filename=Phumlani_Sibonelo_Mthembu_CV.pdf')
//   res.send(fileContents)
// }