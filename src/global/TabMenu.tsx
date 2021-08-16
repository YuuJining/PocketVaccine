import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

const MenuTabs = withRouter(({ location: { pathname } }) => {
  const [value, setValue] = React.useState(0);
  useEffect((): void => {
    switch (pathname) {
      case "/":
        setValue(0);
        break;
      case "/observe":
        setValue(1);
        break;

      case "/situation":
        setValue(2);
        break;

      case "/my":
        setValue(3);
        break;
    }
  });
  //TODO: 새로고침 했을 때, 컴포넌트 create때 경로에 맞는 tab이 표시되어야 함.

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="커뮤니티" component={Link} to="/"></Tab>

        <Tab label="살펴보기" component={Link} to="/observe" />

        <Tab label="접종현황" component={Link} to="/situation" />

        <Tab label="마이" component={Link} to="/my" />

        {/* <Tab label="Disabled" disabled /> */}
      </Tabs>
    </Paper>
  );
});

export default MenuTabs;
