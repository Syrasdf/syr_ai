import { useTheme } from '../../hooks/useTheme';
import { Child } from 'react';

const Page = () => {
  const theme = useTheme();
  return (
    <>
      {theme}
      <Child />
    </>
  )
};







