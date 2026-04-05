import Button from '../../components/ui/Button';

export default function GlobalErrorFallback({error, resetErrorBoundary}) {
  return(
    <div className="min-h-screen flex items-center justify-center bg-app-bg p-6 text-center">
      <div className="max-w-md w-full space-y-6 border border-red-900/30 bg-red-950/10 p-8 rounded-xl">
        <div className="space-y-2">
          <h2 className="text-red-500 font-mono text-sm uppercase tracking-widest"> Critical System Error </h2>
          <p className="text-zinc-100 text-lg font-medium">
            The lab has encountered an unhandled exception.
          </p>
          <pre className="mt-4 p-3 bg-black/50 rounded border border-white/5 text-xs text-zinc-500 overflow-auto text-left">
            {error.message}
          </pre>
        </div>

        <Button variant="danger" className="w-full" onClick={resetErrorBoundary}>
          Reset Laboratory Session
        </Button>
      </div>
    </div>
  )
}