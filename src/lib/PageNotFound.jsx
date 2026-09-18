import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="text-center">
        <p className="font-mono text-sm text-indigo-600">404</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">Página no encontrada</h1>
        <p className="mt-2 text-sm text-slate-600">
          El enlace es inválido o el tema que buscas no existe.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Volver al índice
        </Link>
      </div>
    </div>
  );
}