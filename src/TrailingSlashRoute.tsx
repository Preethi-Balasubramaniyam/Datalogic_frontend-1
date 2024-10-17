import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface TrailingSlashRouteProps {
  path: string;
  element: React.ReactNode;
}

const TrailingSlashRoute: React.FC<TrailingSlashRouteProps> = ({ path, element }) => {
  // Check if the path does not end with a slash and is not the root path
  const shouldRedirect = path !== '/' && !path.endsWith('/');

  return (
    <>
      {shouldRedirect ? (
        <Navigate to={`${path}/`} replace />
      ) : (
        <Route path={path} element={element} />
      )}
    </>
  );
};

export default TrailingSlashRoute;
