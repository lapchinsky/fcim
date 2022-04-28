import styles from './HeaderLink.module.css';
import { HeaderLinkProps } from "./HeaderLink.props";
import Link from 'next/link';

export const HeaderLink = ({ children, href, ...props }: HeaderLinkProps): JSX.Element => {
   return (
      <Link
         href={`/${href}`}
         {...props}
      >
         <a className={styles.link}>
            {children.toUpperCase()}
         </a>
      </Link>
   );
};