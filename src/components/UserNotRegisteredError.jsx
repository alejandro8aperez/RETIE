import React from 'react';

export default function UserNotRegisteredError({ onLogin, onRetry }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
          <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
          </svg>
        </div>
        <h1 className="text-lg font-semibold text-slate-900">Cuenta no registrada</h1>
        <p className="mt-2 text-sm text-slate-600">
          Tu cuenta no está registrada para acceder a esta aplicación. Contacta al administrador
          para solicitar acceso.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          {onLogin && (
            <button
              onClick={onLogin}
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Iniciar sesión con otra cuenta
            </button>
          )}
          {onRetry && (
            <button
              onClick={onRetry}
              className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Reintentar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}