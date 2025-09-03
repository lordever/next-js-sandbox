'use client';

import { useState, useEffect } from 'react';

export default function TestApiPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testApi = async (endpoint: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Тестирование API проксирования
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <button
          onClick={() => testApi('features')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          Test /api/features
        </button>

        <button
          onClick={() => testApi('contacts')}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          Test /api/contacts
        </button>

        <button
          onClick={() => testApi('values')}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          Test /api/values
        </button>

        <button
          onClick={() => testApi('highlights')}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          Test /api/highlights
        </button>

        <button
          onClick={() => testApi('faqs')}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          Test /api/faqs
        </button>
      </div>

      {loading && (
        <div className="text-center py-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="mt-2">Загрузка...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Ошибка:</strong> {error}
        </div>
      )}

      {data && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Ответ от API:</h2>
          <pre className="bg-white p-4 rounded overflow-auto max-h-96">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded">
        <h3 className="font-semibold mb-2">Как это работает:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            Запросы к <code>/api/*</code> автоматически перенаправляются на{' '}
            <code>localhost:8080/api/*</code>
          </li>
          <li>Spring Boot сервер обрабатывает запросы и возвращает данные</li>
          <li>Next.js проксирует ответ обратно к клиенту</li>
        </ul>
      </div>
    </div>
  );
}
