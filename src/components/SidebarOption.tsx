import React from "react";
import SidebarOptionContainer from "../styles/components/SidebarOptionContainer";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";

interface SidebarOptionProps extends RouteComponentProps {
  title: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  activeIcon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  to: string;
  activeClassName: string;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({
  title,
  icon: Icon,
  activeIcon: ActiveIcon,
  to,
  activeClassName,
  location: { pathname },
}) => {
  return (
    <SidebarOptionContainer>
      <NavLink to={to} exact activeClassName={activeClassName}>
        {pathname !== to ? <Icon /> : <ActiveIcon />}
        <span>{title}</span>
      </NavLink>
    </SidebarOptionContainer>
  );
};

export default withRouter(SidebarOption);
