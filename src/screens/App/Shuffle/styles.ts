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

export const ContentScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: 36,
  },
})`
  flex: 1;
  margin-top: 10px;
`;

export const Message = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0px 20px 20px 20px;
  line-height: 22px;
`;

export const Label = styled.Text`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 20px;
`;

export const BoxCardShuffle = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const WrapperShuffleBook = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const WrapperOptions = styled.View`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const BoxOption = styled.View`
  margin: 4px;
`;

export const WrapperForm = styled.View`
  width: 100%;
  margin-top: 20px;
  padding: 0 20px;
`;

export const BoxInput = styled.View`
  margin-top: 8px;
`;

export const BoxButtonShuffle = styled.View`
  margin-top: 16px;
`;

export const WrapperBooks = styled.View`
  width: 100%;
  margin-top: 20px;
`;
