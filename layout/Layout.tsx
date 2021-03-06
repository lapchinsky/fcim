import {LayoutProps} from "./Layout.props";
import styles from './Layout.module.css';
import {Header} from "./Header/Header";
import {FunctionComponent, useState, KeyboardEvent, useRef} from "react";
import {Up} from "../components";
import cn from "classnames";
import { Footer } from "./Footer/Footer";

const Layout = ({children}: LayoutProps): JSX.Element => {
    const bodyRef = useRef<HTMLDivElement>(null);
    const [isDisplayed, setIsDisplayed] = useState<boolean>(false);

    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code == 'Space' || key.code == 'Enter') {
            key.preventDefault();
            bodyRef.current?.focus();
        }
        setIsDisplayed(false);
    };

    return (
        <div className={styles.wrapper}>
            <a
                onFocus={() => setIsDisplayed(true)}
                tabIndex={1}
                className={cn(styles.skipLink, {
                [styles.displayed]: isDisplayed
            })}
                href=""
                onKeyDown={skipContentAction}
            >К содержанию</a>
            <Header className={styles.header}/>
            <div className={styles.body} ref={bodyRef} tabIndex={0}>
                {children}
            </div>
            <Footer className={styles.footer}/>
            <Up />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
                <Layout>
                    <Component {...props} />
                </Layout>
        );
    };
}