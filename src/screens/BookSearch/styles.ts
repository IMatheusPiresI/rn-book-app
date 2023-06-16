import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${({ theme }) => theme.metrics.statusBarHeight + 20}px;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
`;

export const Header = styled.View`
  margin-top: 10px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TitleSearch = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const WrapperSearch = styled.View`
  width: 100%;
  padding: 0 20px;
  margin-top: 16px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ListBooksSearch = styled(FlatList)`
  flex-grow: 1;
` as unknown as typeof FlatList;
