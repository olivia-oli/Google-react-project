
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <nav>
        {/* Link component creates a link to the 'account' route.
            The 'to' prop specifies the relative path to the target route. */}
        <Link to='account'>Account Settings</Link> |{' '}
        {/* Link component creates a link to the 'privacy' route.
            The 'to' prop specifies the relative path to the target route. */}
        <Link to='privacy'>Privacy Settings</Link>
      </nav>
      {/* Outlet component renders the matching child route's element.
          This is where the nested routes' content will be displayed. */}
      <Outlet />
    </div>
  );
};

export default Settings;
