import logoLight from '../../../public/assets/images/logo-light.webp';
import logoDark from '../../../public/assets/images/logo-dark.webp';

import styles from './Logo.module.scss';

interface LogoProps {
  variant: 'light' | 'dark';
}

const Logo = ({ variant }: LogoProps) => {
  return (
    <>
      {variant === 'dark' && <img src={logoDark} />}
      {variant === 'light' && <img src={logoLight} />}
    </>
  );
};

export default Logo;
