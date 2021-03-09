import React from 'react';

const AppBar = ({ children, getTheme }) => {
  return (
    <>
      {getTheme() &&
        <div className="appbar-dark">
          {children}
        </div>
      }

      {!getTheme() &&
        <div className="appbar-light">
          {children}
        </div>
      }
    </>
  )
}

export default AppBar;