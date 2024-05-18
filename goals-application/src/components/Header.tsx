import { type ReactNode } from 'react';

type HeaderProps = {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode;
};

const Header = ({ image, children }: HeaderProps) => {
    return (
        <div className="flex flex-col items-center gap-6 mb-4">
            <div className="rounded-full max-w-20 overflow-hidden">
                <img {...image} className="w-full" />
            </div>
            {children}
        </div>
    );
};

export default Header;
