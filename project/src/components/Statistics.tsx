import { BarChart3, Database, TrendingUp } from 'lucide-react';

interface StatisticsProps {
  totalDrugs: number;
  highRiskCount: number;
  lowRiskCount: number;
}

export default function Statistics({ totalDrugs, highRiskCount, lowRiskCount }: StatisticsProps) {
  const highRiskPercent = ((highRiskCount / totalDrugs) * 100).toFixed(1);
  const lowRiskPercent = ((lowRiskCount / totalDrugs) * 100).toFixed(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-blue-600" />
          </div>
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-1">{totalDrugs}</div>
        <div className="text-sm text-gray-600">Total Compounds</div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-red-600" />
          </div>
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-1">{highRiskCount}</div>
        <div className="text-sm text-gray-600">High Risk ({highRiskPercent}%)</div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-green-600" />
          </div>
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-1">{lowRiskCount}</div>
        <div className="text-sm text-gray-600">Low Risk ({lowRiskPercent}%)</div>
      </div>
    </div>
  );
}
