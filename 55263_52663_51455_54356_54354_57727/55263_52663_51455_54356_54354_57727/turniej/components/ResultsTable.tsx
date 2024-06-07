"use client";

import { ReactNode } from "react";

type Result = {
  name: string;
  date: string;
  category: string;
  winner: string;
  second: string;
  third: string;
};

type ResultsTableProps = {
  results: Result[];
};

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  return (
    <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 mt-8">
              <thead className="bg-gray-100">
              <tr>
                <th scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Turniej
                </th>
                <th scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Data
                </th>
                <th scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Kategoria
                </th>
                <th scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Zwycięzca
                </th>
                <th scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  2nd
                </th>
                <th scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  3rd left
                </th>
                <th scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  3rd right
                </th>
              </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {results.map((result, index) => (
                  <tr key={index}>
                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                      {result.name}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                      {result.date}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                      {result.category}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                      {result.winner}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                      {result.second}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                      {result.third}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  );
};

export default ResultsTable;