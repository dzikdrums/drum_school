import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks: navLinksType[] = [
    { id: 0, path: '/', label: 'Blog' },
    { id: 1, path: '/about', label: 'About ' },
    { id: 2, path: '/contact', label: 'Contact ' },
];

type navLinksType = { path: string; label: string; id: number };

const Navigation = () => {
    return (
        <nav className="bg-blue-400 p-5 flex justify-center">
            {navLinks.map(({ id, path, label }) => (
                <Link
                    className="shadow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-200 cursor-pointer"
                    key={id}
                    href={path}>
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;
