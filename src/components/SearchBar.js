import React from 'react';
import { Input } from '../styles/Input.style.js';
import { Button } from '../styles/Button.style.js';
import Search from '@mui/icons-material/Search.js';

const SearchIcon = Search.default; 

export default function SearchBar({placeholder}) {
  return (
    <>
      <form className='d-inline-block'>
        <div className='d-flex justify-content-center'>
            <Input type="search" name="search" sty="search" bg="grey" placeholder={placeholder} />
            <Button type="submit" bg="grey" sty="search">
              <SearchIcon style={{marginTop: '5px'}} />
            </Button>
        </div>
      </form>
    </>
  )
}
