import React from 'react';
import { ThemeProvider, useTheme } from '@material-ui/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './component/Layout';
import Result from './component/Result';
import ScrollToTop from './component/ScrollToTop';

function App() {
  const theme = useTheme();
  const matchesDwonSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Layout matchesDwonSm={matchesDwonSm} />}
      />
      <Route path="/result" component={Result} />
    </Switch>
  );
}

const theme = createMuiTheme({ typography: { useNextVariants: true } });

export default function ThemeHelper() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/personal-income-tax-calculator/">
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}
