import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// TODO: code split
const Entrance = lazy(() => import('../pages/entrance'));
const BlogHome = lazy(() => import('../pages/blog_home'));
// TODO: こいつなんかエラーになる
import Entry from '../pages/entry';
const NotFound = lazy(() => import('../pages/not_found'));

export function Routes() {
  const error = useSelector((state) => state.error.toJS());

  if (error.error !== undefined) {
    return (<Suspense fallback={<div>Loading...</div>}>
          <NotFound />
      <NotFound />
      );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/">
          <Entrance />
        </Route>
        <Route exact path="/:blogId">
          <BlogHome />
        </Route>
        <Route exact path="/:blogId/entry/:entryId">
          <Entry />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}
