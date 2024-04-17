import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div className="w-[100%] h-24 bg-black flex justify-center text-white font-mono text-xl">
        <div className="w-[15%] flex items-center justify-center">Ecoyaan</div>
        <div className="w-[65%] flex items-center justify-center gap-10">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="w-[20%] flex items-center justify-center gap-3">
          <Button variant="contained">Login</Button>
          <Button variant="contained">Sign in</Button>
        </div>
    </div>
  );
};

export default Header;
