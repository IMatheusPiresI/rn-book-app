import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  height: ${({ theme }) =>
    theme.metrics.screenHeight * 0.3 + theme.metrics.statusBarHeight}px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const LimitBackgroundImage = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
`;

export const BackgroundImage = styled.ImageBackground`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.5;
`;

export const BoxImage = styled.View`
  width: ${({ theme }) => theme.metrics.screenWidth * 0.32}px;
  height: ${({ theme }) => theme.metrics.screenHeight * 0.22}px;
  border-radius: 12px;
  elevation: 6;
  background-color: ${({ theme }) => theme.colors.gray};
  shadow-color: ${({ theme }) => theme.colors.dark};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
`;

export const BookImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const WrapperGoBack = styled.View`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.shape};
  elevation: 6;
  shadow-color: ${({ theme }) => theme.colors.primary};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  z-index: 99;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 50px;
  left: 20px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.shape};

  align-items: center;
  justify-content: center;
`;

export const Content = styled(Animated.View)`
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
  overflow: hidden;
  align-items: center;
`;

export const ButtonReadBook = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  padding: 0 20px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 200px;
  align-items: center;
  justify-content: center;
`;

export const TitleReadBook = styled.Text`
  font-size: 14px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ScrollContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 24,
    paddingBottom: 90,
  },
})`
  width: 100%;
  flex-grow: 1;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
`;

export const HeaderContent = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const TitleBook = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const TitleSection = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 20px;
  margin-bottom: 16px;
`;

export const AuthorName = styled.Text`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const WrapperBookInfo = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.background};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 200px;
  flex-direction: row;
  margin-top: 20px;
`;

export const BoxInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

export const BoxInfoWithBorder = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const BoxInfoWithBorderRight = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const TitleInfo = styled.Text`
  font-size: 12px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const Info = styled.Text`
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ContentBook = styled.View`
  width: 100%;
  margin-top: 24px;
  padding: 0 16px;
`;

export const Descbook = styled.Text`
  font-size: 14px;
  font-weight: 400;
  text-align: justify;
  color: ${({ theme }) => theme.colors.text};
`;
