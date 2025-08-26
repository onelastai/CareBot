import { CONFIG } from './config'
import { checkVitals } from './services/vitals'
import { offerSupport } from './services/support'

export function startCareBot() {
  console.log(`💖 CareBot v${CONFIG.version} online`)
  const vitals = checkVitals(CONFIG.inputPath)
  const response = offerSupport(vitals)
  console.log('🩺 Response:', response)
}

