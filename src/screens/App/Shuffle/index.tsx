import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { Button } from '../../../components/Button';
import { CardBookSearch } from '../../../components/CardBookSearch';
import { InputText } from '../../../components/Form/InputText';
import { IconBase } from '../../../components/IconBase';
import { KeyboardDismiss } from '../../../components/KeyboardDismiss';
import { ListBooks } from '../../../components/ListBooks';
import { OptionShuffle } from '../../../components/OptionShuffle';
import { toastError } from '../../../components/Toast/config';
import theme from '../../../resources/styles/theme';
import { getBooksByQuery } from '../../../services/books';
import { IBook } from '../../../services/books/types';

import * as S from './styles';
import { IShuffleOptions } from './types';

const Shuffle: React.FC = () => {
  const optionsShuffle: IShuffleOptions[] = [
    'Title',
    'Author',
    'Categorie',
    'Text',
    'ISBN',
  ];
  const navigation = useNavigation();
  const [optionsSelected, setOptionsSelected] = useState<IShuffleOptions[]>([]);
  const [allBooks, setAllBooks] = useState<IBook[]>([]);
  const [shuffleBook, setShuffleBook] = useState<IBook | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const initialValues = useMemo(() => {
    const values: Record<string, string> = {};

    optionsSelected.forEach((option) => {
      values[option] = '';
    });
    return values;
  }, [optionsSelected]);

  const getSchemaValidation = useCallback(() => {
    const objectValidation: Record<
      string,
      Yup.StringSchema<string, Yup.AnyObject, undefined, ''>
    > = {};

    optionsSelected.forEach((option) => {
      objectValidation[option] = Yup.string().required('Required Field.');
    });

    const validationSchema = Yup.object().shape(objectValidation);
    return validationSchema;
  }, [optionsSelected]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: getSchemaValidation(),
    validateOnMount: true,
    onSubmit: (values) => handleShuffle(values),
  });

  const getQuery = (values: Record<string, string>) => {
    let query = '';

    if (values?.Text) {
      query += values.Text;
    }
    if (values?.Title) {
      query += `+intitle:${values.Title}`;
    }
    if (values?.Author) {
      query += `+inauthor:${values.Author}`;
    }
    if (values?.Categorie) {
      query += `+subject:${values.Categorie}`;
    }
    if (values?.ISBN) {
      query += `+isbn:${values.ISBN}`;
    }

    return query;
  };

  const shuffleOneBook = (books: IBook[]) => {
    const numBooks = books.length;
    const randomNum = Math.floor(Math.random() * numBooks) + 1;
    setShuffleBook(books[randomNum - 1]);
  };

  const handleShuffle = async (values: Record<string, string>) => {
    setAllBooks([]);
    setShuffleBook(null);
    setLoading(true);
    const query = getQuery(values);

    try {
      const result = await getBooksByQuery(query);
      setAllBooks(result.items);
      shuffleOneBook(result.items);
    } catch (err) {
      toastError('Shuffle search values not found');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectOptionShuffle = (option: IShuffleOptions) => {
    setShuffleBook(null);
    setAllBooks([]);
    const optionExists = optionsSelected.includes(option);

    if (optionExists) {
      setOptionsSelected((prevState) =>
        prevState.filter((opt) => opt !== option),
      );
      return;
    }
    setOptionsSelected((prevState) => [...prevState, option]);
  };

  const handleNavigateToBookDetail = useCallback(() => {
    if (!shuffleBook) return;
    navigation.navigate('BookDetails', {
      book: shuffleBook,
    });
  }, [navigation, shuffleBook]);

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
            <S.TitleSearch>Shuffle</S.TitleSearch>
          </S.Header>
          <S.ContentScroll showsVerticalScrollIndicator={false}>
            <S.Message>
              Set up your filters to search and raffle books that are more
              likely to find books that you might like.
            </S.Message>
            <S.Label>Shuffle by:</S.Label>
            <S.WrapperOptions>
              {optionsShuffle.map((optionTitle) => (
                <S.BoxOption key={optionTitle}>
                  <OptionShuffle
                    title={optionTitle}
                    isSelected={optionsSelected.includes(optionTitle)}
                    onPress={() => handleSelectOptionShuffle(optionTitle)}
                  />
                </S.BoxOption>
              ))}
            </S.WrapperOptions>
            <S.WrapperForm>
              {optionsSelected.map((option) => (
                <S.BoxInput key={option}>
                  <InputText
                    label={option}
                    placeholder={`Inform ${option}`}
                    value={formik.values[option]}
                    onChangeText={formik.handleChange(option)}
                  />
                </S.BoxInput>
              ))}
              {optionsSelected.length > 0 && (
                <S.BoxButtonShuffle>
                  <Button
                    label="SHUFFLE"
                    onPress={formik.handleSubmit}
                    disabled={!formik.isValid || loading}
                    loading={loading}
                  />
                </S.BoxButtonShuffle>
              )}
            </S.WrapperForm>
            {shuffleBook && (
              <S.WrapperShuffleBook>
                <S.Label>Shuffled Book</S.Label>
                <S.BoxCardShuffle>
                  <CardBookSearch
                    book={shuffleBook}
                    onPress={handleNavigateToBookDetail}
                  />
                </S.BoxCardShuffle>
              </S.WrapperShuffleBook>
            )}
            {allBooks && allBooks.length > 0 && (
              <S.WrapperBooks>
                <ListBooks books={allBooks} title="All books found" />
              </S.WrapperBooks>
            )}
          </S.ContentScroll>
        </>
      </KeyboardDismiss>
    </S.Container>
  );
};

export default Shuffle;

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
