import fs from 'fs'

export function checkVitals(path: string): any {
  console.log(`📥 Checking vitals from ${path}`)
  const raw = fs.readFileSync(path, 'utf-8')
  return JSON.parse(raw)
}

