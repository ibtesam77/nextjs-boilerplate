"use client";

import { useEffect, useState, useCallback } from "react";

interface FetchRequestOptions {
  skip?: boolean;
}

const DEFAULT_OPTIONS: FetchRequestOptions = {
  skip: false,
};

function useFetchRequest<SuccessResponse = unknown, ErrorResponse = unknown>(
  fetcher: () => Promise<Response>,
  options: FetchRequestOptions = DEFAULT_OPTIONS
) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<SuccessResponse | undefined>(undefined);
  const [error, setError] = useState<ErrorResponse | undefined>(undefined);

  /* ========== Options ============ */
  const skip = options.skip || DEFAULT_OPTIONS.skip;

  const callFetcher = useCallback(async (): Promise<SuccessResponse> => {
    const response = await fetcher();
    {
      /* The clone() method of the Response interface creates a clone of a response object, 
      identical in every way, but stored in a different variable. The main reason clone() 
      exists is to allow multiple uses of Body objects (when they are one-use only.) */
    }
    const jsonResponse = await response.clone().json();
    return jsonResponse;
  }, [fetcher]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    callFetcher()
      .then((res) => {
        setData(res);
        setError(undefined);
      })
      .catch((err) => {
        setData(undefined);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetcher]);

  useEffect(() => {
    if (!skip) fetchData();
  }, []);

  return {
    isLoading,
    data: data || undefined,
    error,
    refetch: fetchData,
  };
}

export default useFetchRequest;
