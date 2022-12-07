import React from 'react';
import Container from '../Container/Container';
import Search from '../Search/Search';
import OptionsList from '../OptionsList/OptionsList';

function OptionsBar(): React.ReactElement {
  const classWrapper = 'bar bar--options';
  const contentLayout = 'flex flex--align-center flex--justify-between gap1';
  return (
    <Container classWrapper={classWrapper} contentLayout={contentLayout}>
      <Search />
      <OptionsList />
    </Container>
  );
}

export default OptionsBar;
