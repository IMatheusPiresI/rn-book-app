import { useCallback, useEffect, useState } from 'react';

import { getBooksBySubject } from '../../../../../services/books';
import { IBook } from '../../../../../services/books/types';

type ISectionBooks = {
  fiction: IBook[];
  biography: IBook[];
  novel: IBook[];
};
export const useBooksSection = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [booksSections, setBooksSection] = useState<ISectionBooks>(
    {} as ISectionBooks,
  );
  const [error, setError] = useState<boolean>(false);

  const getAllSectionsBooks = useCallback(async () => {
    setLoading(true);

    try {
      const [booksFiction, booksBiography, booksNovel] = await Promise.all([
        await getBooksBySubject('Fiction'),
        await getBooksBySubject('Biography'),
        await getBooksBySubject('Novel'),
        await getBooksBySubject('Biography'),
      ]);

      setBooksSection({
        fiction: booksFiction.items,
        biography: booksBiography.items,
        novel: booksNovel.items,
      });

      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllSectionsBooks();
  }, [getAllSectionsBooks]);

  return {
    loading,
    error,
    booksSections,
  };
};
