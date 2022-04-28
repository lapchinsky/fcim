import { DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface HeaderLinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    children: string;
    href: string;
}