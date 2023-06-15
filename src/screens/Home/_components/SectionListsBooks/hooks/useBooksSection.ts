import { useCallback, useEffect, useState } from 'react';

import { getBooksBySubject } from '../../../../../services/books';
import { IBook } from '../../../../../services/books/types';

type ISectionBooks = {
  fiction: IBook[];
  history: IBook[];
  novel: IBook[];
  romance: IBook[];
  education: IBook[];
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
      const [
        booksFiction,
        booksHistory,
        booksNovel,
        booksRomance,
        booksEducation,
      ] = await Promise.all([
        await getBooksBySubject('Fiction'),
        await getBooksBySubject('History'),
        await getBooksBySubject('Novel'),
        await getBooksBySubject('Romance'),
        await getBooksBySubject('education'),
      ]);

      setBooksSection({
        fiction: booksFiction.items,
        history: booksHistory.items,
        novel: booksNovel.items,
        romance: booksRomance.items,
        education: booksEducation.items,
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
