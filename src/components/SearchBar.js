import React from 'react';
import { Input } from '../styles/Input.style.js';
import { Button } from '../styles/Button.style.js';
import SearchIcon from '@mui/icons-material/Search.js';

export default function SearchBar({placeholder}) {
  return (
    <>
      <form className='d-inline-block'>
        <div className='d-flex justify-content-center'>
            <Input type="search" name="search" sty="search" bg="grey" placeholder={placeholder} />
            <Button type="submit" bg="grey" sty="search">
              <SearchIcon.default style={{marginTop: '5px'}} />
            </Button>
        </div>
      </form>
    </>
  )
}
