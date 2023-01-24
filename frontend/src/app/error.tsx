'use client';

import { useEffect } from 'react';

export default function Error({
  error,
}: {error: Error}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <div>ERROR</div>
      <p>Something went wrong!</p>
      <button>Reset error boundary</button>
    </div>
  );
}
