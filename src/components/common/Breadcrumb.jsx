import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = ({className=''}) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);
    const generatePath = (index) => `/${pathnames.slice(0, index + 1).join('/')}`;
    const EventsPage = location.pathname === '/events';


    console.log(generatePath)
    return (
        <div className={`text-sm py-2  ${className}`}>
            <Link to="/" className={`font-poppins font-normal text-base text-[#666666] opacity-70 ${EventsPage ? 'text-white' : 'text-[#666666]'} `}>Home</Link>
            {pathnames.map((_, index) => {
                const path = generatePath(index);

                const matchKey = Object.keys(Breadcrumb).find((key) =>
                    matchPath({ path: key, end: true }, path)
                );

                const name = Breadcrumb[matchKey] || pathnames[index];

                return (
                    <span key={path}>
                        <span className={`${EventsPage ? 'text-white' : 'text-[#666666]'} opacity-70 font-poppins font-normal text-base text-[#666666]`}>{' >  '}</span>
                        {index !== pathnames.length - 1 ? (
                            <Link to={path} className="text-black">
                                {name}
                            </Link>
                        ) : (
                                <span className={`font-poppins font-normal text-base capitalize opacity-100  ${EventsPage ? 'text-white' : 'text-[#666666] '}`}>{name}</span>
                        )}
                    </span>
                );
            })}
        </div>
    );
}

export default Breadcrumb