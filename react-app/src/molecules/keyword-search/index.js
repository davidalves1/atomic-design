import React from 'react';

import Button from '../../atoms/button';
import Input from '../../atoms/input';

export default function KeywordSearch() {
  return (
    <form className="form-inline">
      <Input />
      <Button>Pesquisar</Button>
    </form>
  );
}
