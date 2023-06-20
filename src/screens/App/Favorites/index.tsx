import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import LottieViewAnimation from 'lottie-react-native';

import { CardBookSearch } from '../../../components/CardBookSearch';
import { IconBase } from '../../../components/IconBase';
import { InputSearch } from '../../../components/InputSearch';
import { KeyboardDismiss } from '../../../components/KeyboardDismiss';
import theme from '../../../resources/styles/theme';
import { IBook } from '../../../services/books/types';
import { useUserStore } from '../../../store/user';
import EmptyBookAnimation from '../../../assets/animations/book-empty.json';

import * as S from './styles';

const Favorites: React.FC = () => {
  const {
    user: { favorites },
  } = useUserStore();
  const navigation = useNavigation();
  const [search, setSearch] = useState<string>('');
  const filteredBooks = favorites
    ? favorites.filter((b) =>
        b.volumeInfo.title.toLowerCase().includes(search.toLowerCase()),
      )
    : [];

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigateToBookDetail = useCallback(
    (book: IBook) => {
      navigation.navigate('BookDetails', {
        book,
        favoritePage: true,
      });
    },
    [navigation],
  );

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
    <S.Container>
      <KeyboardDismiss>
        <>
          <S.Header>
            <S.ButtonGoBack onPress={handleGoBack}>
              <IconBase
                name="arrow-back"
                color={theme.colors.primary}
                size={32}
              />
            </S.ButtonGoBack>
            <S.TitleSearch>Favorites</S.TitleSearch>
          </S.Header>
          {favorites && favorites.length > 0 ? (
            <>
              <S.WrapperSearch>
                <InputSearch value={search} onChangeText={setSearch} />
              </S.WrapperSearch>
              <S.Content>
                {search && filteredBooks ? (
                  <S.ListBooksSearch
                    data={filteredBooks}
                    numColumns={2}
                    contentContainerStyle={styles.contentList}
                    columnWrapperStyle={styles.columWrapper}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    maxToRenderPerBatch={12}
                    initialNumToRender={12}
                    ListEmptyComponent={() => (
                      <S.EmptyContainer>
                        <S.EmptyMessage>No books found</S.EmptyMessage>
                      </S.EmptyContainer>
                    )}
                  />
                ) : (
                  <S.ListBooksSearch
                    data={favorites}
                    numColumns={2}
                    contentContainerStyle={styles.contentList}
                    columnWrapperStyle={styles.columWrapper}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    maxToRenderPerBatch={12}
                    initialNumToRender={12}
                  />
                )}
              </S.Content>
            </>
          ) : (
            <S.EmptyContainer>
              <S.BoxEmpty>
                <LottieViewAnimation
                  source={EmptyBookAnimation}
                  autoPlay
                  loop
                  style={styles.animateDimensions}
                />
                <S.EmptyMessage>
                  What a silence...{'\n'} Looks like no books have been added
                  yet
                </S.EmptyMessage>
              </S.BoxEmpty>
            </S.EmptyContainer>
          )}
        </>
      </KeyboardDismiss>
    </S.Container>
  );
};

export default Favorites;

export const styles = StyleSheet.create({
  columWrapper: {
    justifyContent: 'space-between',
  },
  contentList: {
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
    gap: 20,
  },
  animateDimensions: {
    width: 300,
    height: 300,
  },
});
