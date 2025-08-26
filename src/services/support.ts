import { CONFIG } from '../config'

export function offerSupport(vitals: any): string {
  const prompt = `Based on these vitals, offer emotional and medical support:\n${JSON.stringify(vitals)}`
  return `Support using ${CONFIG.llmModel}: [placeholder output]`
}

