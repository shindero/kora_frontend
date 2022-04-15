import { Login } from 'pages/user/Login';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import { ROUTES } from 'constants/routes';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { DashBoard } from 'pages/tracking/dashboard/Dashboard';
import { Projects } from 'pages/tracking/project/Projects';
import { Timer } from 'pages/tracking/timer/Timer';
import { Project } from 'pages/tracking/project/components/Project';
import { MailVerification } from 'pages/user/verify-email/MailVerification';
import { AdminRoute } from 'routes/AdminRoute';
import { Team } from 'pages/team/Team';
import { Profile } from 'pages/user/profile/Profile';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={ROUTES.LOGIN} element={(
        <PublicRoute>
          <Login />
        </PublicRoute>
      )} />
      <Route path={ROUTES.DASHBOARD} element={(
        <PrivateRoute>
          <DashBoard />
        </PrivateRoute>
      )} />
      <Route path={ROUTES.PROJECTS} element={(
        <AdminRoute>
          <Projects />
        </AdminRoute>
      )} >
      </Route>
      <Route path={ROUTES.PROJECT} element={(
        <PrivateRoute>
          <Project />
        </PrivateRoute>
      )} />
      <Route path={ROUTES.TIMER} element={(
        <PrivateRoute>
          <Timer />
        </PrivateRoute>
      )} />
      <Route path={ROUTES.PROFILE} element={(
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      )} />
      <Route path={ROUTES.MAIL_CONFIRM} element={(
        <PublicRoute>
          <MailVerification />
        </PublicRoute>
      )} />
      <Route path={ROUTES.TEAM} element={(
        <AdminRoute>
          <Team />
        </AdminRoute>
      )} />
    </Switch>
  )
}

const MainRouter = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default MainRouter;