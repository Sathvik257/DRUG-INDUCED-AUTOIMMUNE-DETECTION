import { Activity } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
            <Activity className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Autoimmune Risk Predictor
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              XGBoost-powered molecular risk assessment system
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
