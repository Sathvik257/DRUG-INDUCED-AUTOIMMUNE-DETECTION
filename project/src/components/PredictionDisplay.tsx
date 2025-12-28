import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { PredictionResult } from '../types';

interface PredictionDisplayProps {
  result: PredictionResult | null;
  loading: boolean;
}

export default function PredictionDisplay({ result, loading }: PredictionDisplayProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
          <p className="text-gray-600">Analyzing molecular structure...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-600 text-lg">Select a drug to see prediction</p>
          <p className="text-gray-400 text-sm mt-2">
            Choose from the list to analyze autoimmune risk
          </p>
        </div>
      </div>
    );
  }

  const isHighRisk = result.risk === 'HIGH';
  const riskColor = isHighRisk ? 'red' : 'green';
  const bgColor = isHighRisk ? 'bg-red-50' : 'bg-green-50';
  const borderColor = isHighRisk ? 'border-red-200' : 'border-green-200';
  const textColor = isHighRisk ? 'text-red-700' : 'text-green-700';
  const iconColor = isHighRisk ? 'text-red-600' : 'text-green-600';

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className={`${bgColor} border-b ${borderColor} p-6`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {result.drug.name}
            </h2>
            <p className="text-sm text-gray-600 font-mono break-all">
              {result.drug.smiles}
            </p>
          </div>
          <div className={iconColor}>
            {isHighRisk ? (
              <AlertCircle className="w-8 h-8" />
            ) : (
              <CheckCircle className="w-8 h-8" />
            )}
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Risk Assessment
            </h3>
            <span className={`${textColor} font-semibold text-sm`}>
              {(result.confidence * 100).toFixed(1)}% confidence
            </span>
          </div>

          <div className={`${bgColor} ${borderColor} border-2 rounded-xl p-6 text-center`}>
            <div className={`text-4xl font-bold ${textColor} mb-2`}>
              {result.risk}
            </div>
            <div className="text-gray-600">
              Autoimmune Risk Level
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-sm font-medium text-gray-600 mb-2">Confidence Score</div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  isHighRisk ? 'bg-red-500' : 'bg-green-500'
                }`}
                style={{ width: `${result.confidence * 100}%` }}
              />
            </div>
            <div className="text-right text-xs text-gray-500 mt-1">
              {(result.confidence * 100).toFixed(2)}%
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-sm font-medium text-gray-600 mb-2">Model Prediction</div>
            <div className="text-2xl font-bold text-gray-900">
              {result.prediction === 1 ? 'Positive' : 'Negative'}
            </div>
          </div>

          <div className={`${bgColor} ${borderColor} border rounded-xl p-4`}>
            <div className="text-sm font-medium text-gray-700 mb-2">
              Clinical Interpretation
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {isHighRisk ? (
                <>
                  This compound shows markers associated with higher autoimmune risk.
                  Clinical monitoring and patient assessment are recommended when prescribing.
                </>
              ) : (
                <>
                  This compound shows favorable safety profile with lower autoimmune risk markers.
                  Standard clinical protocols apply.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
