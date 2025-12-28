import { useState, useEffect } from 'react';
import Header from './components/Header';
import DrugSelector from './components/DrugSelector';
import PredictionDisplay from './components/PredictionDisplay';
import { Drug, PredictionResult } from './types';
import { sampleDrugs, mockPredict } from './utils/drugData';

function App() {
  const [drugs] = useState<Drug[]>(sampleDrugs);
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedDrug) {
      setLoading(true);

      setTimeout(() => {
        const { prediction, confidence } = mockPredict(selectedDrug);

        setPredictionResult({
          drug: selectedDrug,
          prediction,
          risk: prediction === 1 ? 'HIGH' : 'LOW',
          confidence
        });
        setLoading(false);
      }, 800);
    }
  }, [selectedDrug]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DrugSelector
            drugs={drugs}
            selectedDrug={selectedDrug}
            onSelect={setSelectedDrug}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <PredictionDisplay
            result={predictionResult}
            loading={loading}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
