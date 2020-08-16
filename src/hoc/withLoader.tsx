import React from "react";
import StyledLoaderContainer, {
  StyledLoader,
} from "../styles/components/StyledLoaderContainer";

interface InjectedProps {
  isLoading: boolean;
}

const withLoader = <BaseProps extends InjectedProps>(
  WrappableComponent: React.ComponentType<BaseProps>
): React.FC<BaseProps & InjectedProps> => ({ isLoading, ...rest }) => {
  return isLoading ? (
    <StyledLoaderContainer>
      <Loader />
    </StyledLoaderContainer>
  ) : (
    <WrappableComponent {...(rest as BaseProps)} />
  );
};

export const Loader = () => {
  return (
    <StyledLoader className='spinner'>
      <div className='bounce1'></div>
      <div className='bounce2'></div>
      <div className='bounce3'></div>
    </StyledLoader>
  );
};

export default withLoader;
