export interface Drug {
  id: number;
  name: string;
  smiles: string;
  label: number;
}

export interface PredictionResult {
  drug: Drug;
  prediction: number;
  risk: 'HIGH' | 'LOW';
  confidence: number;
}
