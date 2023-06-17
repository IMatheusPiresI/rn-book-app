import React from 'react';

import { ListBooks } from '../../../../../components/ListBooks';
import { LoadingBooks } from '../../../../../components/LoadingBooks';

import * as S from './styles';
import { useBooksSection } from './hooks/useBooksSection';

export const SectionListsBooks: React.FC = () => {
  const { loading, booksSections } = useBooksSection();

  const renderContent = () => {
    if (loading) {
      return <LoadingBooks />;
    }

    return (
      <S.Container>
        <ListBooks title="Fiction" books={booksSections.fiction} />
        <ListBooks title="History" books={booksSections.history} />
        <ListBooks title="Novel" books={booksSections.novel} />
        <ListBooks title="Romance" books={booksSections.romance} />
        <ListBooks title="Education" books={booksSections.education} />
      </S.Container>
    );
  };

  return renderContent();
};
