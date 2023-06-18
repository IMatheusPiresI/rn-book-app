import { IBook } from '../../services/books/types';

export const getBookImageURL = (book: IBook) => {
  let image: string | undefined;
  if (book.volumeInfo.imageLinks?.thumbnail) {
    image = book.volumeInfo.imageLinks.thumbnail;
  }

  if (!image && book.volumeInfo.imageLinks?.smallThumbnail) {
    image = book.volumeInfo.imageLinks.smallThumbnail;
  }
  return image
    ? image.replace('http', 'https')
    : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';
};
