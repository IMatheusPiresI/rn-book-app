import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { IProps } from './types';
export const IconBase: React.FC<IProps> = ({ name, color, size = 24 }) => (
  <MaterialIcons name={name} color={color} size={size} />
);
