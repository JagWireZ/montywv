"use client";

import { useRouter } from 'next/navigation';
import { useMemo, useEffect, useState, useRef } from 'react';
import debounce from 'lodash/debounce';

const SearchInput = () => {
  const router = useRouter();
  const modalRef = useRef<HTMLDialogElement>(null);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  // Debounced search logic
  const debouncedSearch = useMemo(() => {
    return debounce((newQuery: string) => {
      const params = new URLSearchParams(window.location.search);

      if (newQuery.trim() === '') {
        params.delete('query');
        router.replace(`?${params.toString()}`);
        setQuery('');
        setResults([]);
        if (modalRef.current?.open) {
          modalRef.current.close();
        }
      } else {
        params.set('query', newQuery);
        router.replace(`?${params.toString()}`);
        setQuery(newQuery);

        // Simulated search results
        const mockResults = ['Apple', 'Banana', 'Cherry'].filter(item =>
          item.toLowerCase().includes(newQuery.toLowerCase())
        );
        setResults(mockResults);

        if (!modalRef.current?.open) {
          modalRef.current?.showModal();
        }
      }
    }, 300);
  }, [router]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const handleClose = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete('query');
    router.replace(`?${params.toString()}`);
    setQuery('');
    setResults([]);
    modalRef.current?.close();
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        className="input input-bordered w-24 md:w-auto ml-1 mr-1"
      />

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Search Results for "{query}"</h3>
          <div className="py-4">
            {results.length > 0 ? (
              <ul className="space-y-2">
                {results.map((item, index) => (
                  <li key={index} className="border-b pb-2">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={handleClose}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SearchInput;
