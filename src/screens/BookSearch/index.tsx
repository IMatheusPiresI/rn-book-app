import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import { CardBookSearch } from '../../components/CardBookSearch';
import { ErrorSearchBooks } from '../../components/ErrorSearchBooks';
import { IconBase } from '../../components/IconBase';
import { InputSearch } from '../../components/InputSearch';
import { KeyboardDismiss } from '../../components/KeyboardDismiss';
import { LoadingBooks } from '../../components/LoadingBooks';
import theme from '../../resources/styles/theme';
import { getBooksByQuery } from '../../services/books';
import { IBook } from '../../services/books/types';

import * as S from './styles';

export const BookSearch: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [books, setBooks] = useState<IBook[]>([]);
  const [search, setSearch] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigateToBookDetail = useCallback(
    (book: IBook) => {
      navigation.navigate('BookDetails', {
        book,
      });
    },
    [navigation],
  );

  const getAllBooksWithQuery = useCallback(async () => {
    if (search === query || search === '') return;
    setLoading(true);
    try {
      const result = await getBooksByQuery(search);

      setQuery(search);
      setBooks(result.items);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [search, query]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IBook>) => (
      <CardBookSearch
        book={item}
        onPress={() => handleNavigateToBookDetail(item)}
      />
    ),
    [handleNavigateToBookDetail],
  );

  return (
    <KeyboardDismiss>
      <S.Container>
        <S.Header>
          <S.ButtonGoBack onPress={handleGoBack}>
            <IconBase
              name="arrow-back"
              color={theme.colors.primary}
              size={32}
            />
          </S.ButtonGoBack>
          <S.TitleSearch>Search Your Book</S.TitleSearch>
        </S.Header>
        <S.WrapperSearch>
          <SharedElement id="item.search.input">
            <InputSearch
              focusOnMount
              value={search}
              onChangeText={setSearch}
              onBlur={getAllBooksWithQuery}
            />
          </SharedElement>
        </S.WrapperSearch>
        <S.Content>
          {loading ? (
            <LoadingBooks />
          ) : error ? (
            <ErrorSearchBooks />
          ) : (
            <S.ListBooksSearch
              data={books}
              numColumns={2}
              contentContainerStyle={styles.contentList}
              columnWrapperStyle={styles.columWrapper}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
          )}
        </S.Content>
      </S.Container>
    </KeyboardDismiss>
  );
};

export const styles = StyleSheet.create({
  columWrapper: {
    justifyContent: 'center',
    columnGap: 20,
  },
  contentList: {
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
});
