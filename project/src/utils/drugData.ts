import { Drug } from '../types';

export const sampleDrugs: Drug[] = [
  { id: 0, name: "Aspirin", smiles: "CC(=O)Oc1ccccc1C(=O)O", label: 0 },
  { id: 1, name: "Ibuprofen", smiles: "CC(C)Cc1ccc(cc1)C(C)C(=O)O", label: 0 },
  { id: 2, name: "Methotrexate", smiles: "CN(Cc1cnc2nc(N)nc(N)c2n1)c3ccc(cc3)C(=O)NC(CCC(=O)O)C(=O)O", label: 1 },
  { id: 3, name: "Paracetamol", smiles: "CC(=O)Nc1ccc(O)cc1", label: 0 },
  { id: 4, name: "Penicillin", smiles: "CC1(C)SC2C(NC(=O)Cc3ccccc3)C(=O)N2C1C(=O)O", label: 0 },
  { id: 5, name: "Tetracycline", smiles: "CN(C)C1C2CC3C(=C(O)c4c(O)cccc4C3=O)C(=O)C2=C(O)C1(C)O", label: 1 },
  { id: 6, name: "Warfarin", smiles: "CC(=O)CC(c1ccccc1)c2c(O)c3ccccc3oc2=O", label: 0 },
  { id: 7, name: "Digoxin", smiles: "CC1OC(CC(C)O)C(O)C(O)C1OC2CCC3(C)C(CCC4C3CCC5(C)C(C4)CCC5C6=CC(=O)OC6)C2", label: 1 },
  { id: 8, name: "Amoxicillin", smiles: "CC1(C)SC2C(NC(=O)C(N)c3ccc(O)cc3)C(=O)N2C1C(=O)O", label: 0 },
  { id: 9, name: "Cyclosporine", smiles: "CCC(C)C1NC(=O)C(C(C)C)N(C)C(=O)C(CC(C)C)N(C)C(=O)C(C(C)C)N(C)C(=O)C(C)NC(=O)C(C)NC(=O)C(CC(C)C)N(C)C(=O)CN(C)C(=O)C(C)N(C)C(=O)C(CC(C)C)N(C)C(=O)C(CC(C)C)N(C)C1=O", label: 1 },
  { id: 10, name: "Lisinopril", smiles: "NCCCCC(NC(CCc1ccccc1)C(=O)O)C(=O)N2CCCC2C(=O)O", label: 0 },
  { id: 11, name: "Atorvastatin", smiles: "CC(C)c1c(C(=O)Nc2ccccc2)c(-c2ccccc2)c(-c2ccc(F)cc2)n1CCC(O)CC(O)CC(=O)O", label: 0 },
  { id: 12, name: "Azathioprine", smiles: "Cc1nc(SCC2=NCCCN2)c2ncn([nH]2)n1", label: 1 },
  { id: 13, name: "Omeprazole", smiles: "COc1ccc2nc(S(=O)Cc3ncc(C)c(OC)c3C)[nH]c2c1", label: 0 },
  { id: 14, name: "Metformin", smiles: "CN(C)C(=N)NC(=N)N", label: 0 },
  { id: 15, name: "Simvastatin", smiles: "CCC(C)(C)C(=O)OC1CC(C)C=C2C=CC(C)C(CCC3CC(O)CC(=O)O3)C2C1", label: 0 },
  { id: 16, name: "Levothyroxine", smiles: "NC(Cc1cc(I)c(Oc2cc(I)c(O)c(I)c2)c(I)c1)C(=O)O", label: 0 },
  { id: 17, name: "Prednisone", smiles: "CC12CCC(=O)C=C1CCC3C2C(O)CC4(C)C3CCC4(O)C(=O)CO", label: 1 },
  { id: 18, name: "Amlodipine", smiles: "CCOC(=O)C1=C(COCCN)NC(C)=C(C(=O)OC)C1c2ccccc2Cl", label: 0 },
  { id: 19, name: "Losartan", smiles: "CCCCc1nc(Cl)c(CO)n1Cc2ccc(cc2)c3ccccc3c4nn[nH]n4", label: 0 },
  { id: 20, name: "Tacrolimus", smiles: "COC1CC(CC=C(C)C(=O)CC(O)C(OC)C2CCC(C)C(O)(C)O2)OC(=O)C(C)C(=C)C(=O)C(CC=CC=CC(C)(C)CC(C)C1)OC", label: 1 },
  { id: 21, name: "Gabapentin", smiles: "NCC1(CC(=O)O)CCCCC1", label: 0 },
  { id: 22, name: "Clopidogrel", smiles: "COC(=O)C(c1ccccc1Cl)N2CCc3sccc3C2", label: 0 },
  { id: 23, name: "Allopurinol", smiles: "O=c1[nH]cnc2[nH]ncc12", label: 0 },
  { id: 24, name: "Furosemide", smiles: "NS(=O)(=O)c1cc(C(=O)O)c(NCc2ccco2)cc1Cl", label: 0 },
  { id: 25, name: "Rituximab-analog", smiles: "CC(C)C1=CC=CC=C1NC(=O)CN2CCN(CC2)C(=O)C3=CC=CC=C3", label: 1 },
  { id: 26, name: "Hydrochlorothiazide", smiles: "NS(=O)(=O)c1cc2c(cc1Cl)NCNS2(=O)=O", label: 0 },
  { id: 27, name: "Pantoprazole", smiles: "COc1ccnc(CS(=O)c2nc3cc(OC)ccc3[nH]2)c1OC", label: 0 },
  { id: 28, name: "Sertraline", smiles: "CNC1CCC(c2ccc(Cl)c(Cl)c2)c3ccccc13", label: 0 },
  { id: 29, name: "Montelukast", smiles: "CC(C)(O)c1cccc(c1)C(CC(=O)O)SCc2nc3ccccc3c(c2)Cl", label: 0 },
  { id: 30, name: "Escitalopram", smiles: "CN(C)CCCC1(OCc2cc(ccc12)C#N)c3ccc(F)cc3", label: 0 },
  { id: 31, name: "Rosuvastatin", smiles: "CC(C)c1nc(nc(c1C=CC(O)CC(O)CC(=O)O)c2ccc(F)cc2)N(C)S(=O)(=O)C", label: 0 },
  { id: 32, name: "Esomeprazole", smiles: "COc1ccc2nc(S(=O)Cc3ncc(C)c(OC)c3C)[nH]c2c1", label: 0 },
  { id: 33, name: "Aripiprazole", smiles: "O=C1CCc2ccc(OCCCCN3CCN(CC3)c4cccc(Cl)c4Cl)cc2N1", label: 0 },
  { id: 34, name: "Venlafaxine", smiles: "COc1ccc(cc1)C(CN(C)C)C2(O)CCCCC2", label: 0 },
  { id: 35, name: "Duloxetine", smiles: "CNCCC(Oc1cccc2ccccc12)c3cccs3", label: 0 },
  { id: 36, name: "Celecoxib", smiles: "Cc1ccc(cc1)c2cc(nn2c3ccc(cc3)S(=O)(=O)N)C(F)(F)F", label: 0 },
  { id: 37, name: "Infliximab-analog", smiles: "CC(C)CC1NC(=O)C(CC2=CC=CC=C2)NC(=O)C(CC(=O)O)NC(=O)C(C)NC1=O", label: 1 },
  { id: 38, name: "Quetiapine", smiles: "OCCOCCN1CCN(CC1)C2=Nc3ccccc3Sc4ccccc24", label: 0 },
  { id: 39, name: "Trastuzumab-analog", smiles: "CC(C)C1NC(=O)C(CC2=CC=C(O)C=C2)NC(=O)C(CO)NC(=O)C(C)NC1=O", label: 1 }
];

export function mockPredict(drug: Drug): { prediction: number; confidence: number } {
  const hash = drug.smiles.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const baseConfidence = 0.75 + (hash % 20) / 100;

  return {
    prediction: drug.label,
    confidence: Math.min(0.99, baseConfidence)
  };
}
