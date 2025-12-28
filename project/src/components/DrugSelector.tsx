import { Search } from 'lucide-react';
import { Drug } from '../types';

interface DrugSelectorProps {
  drugs: Drug[];
  selectedDrug: Drug | null;
  onSelect: (drug: Drug) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function DrugSelector({
  drugs,
  selectedDrug,
  onSelect,
  searchTerm,
  onSearchChange
}: DrugSelectorProps) {
  const filteredDrugs = drugs.filter(drug =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Select Drug</h2>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search drugs..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
        {filteredDrugs.map((drug) => (
          <button
            key={drug.id}
            onClick={() => onSelect(drug)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
              selectedDrug?.id === drug.id
                ? 'bg-blue-50 border-2 border-blue-500 shadow-sm'
                : 'bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
            }`}
          >
            <div className="font-medium text-gray-900">{drug.name}</div>
            <div className="text-xs text-gray-500 mt-1 font-mono truncate">
              {drug.smiles.substring(0, 40)}...
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
