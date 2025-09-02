import Button from '@/shared/ui/Button';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white flex flex-col p-4">
      <Button variant="primary">Первый</Button>
      <Button variant="second">Первый</Button>
      <h1 className="text-2xl font-bold">IllumPro</h1>
    </header>
  );
};

export default Header;
