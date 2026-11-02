import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Menu,
    X,
    Phone,
    CalendarDays,
    ArrowUpRight,
} from "lucide-react";
import "../style/Header.css";

export default function Header({ brand, navigation }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            <header className="luxury-header">
                <div className="header-inner">

                    {/* Brand from props */}
                    <Link
                        to="/"
                        className="brand-logo"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src="/images/logo/1.png"
                            alt={brand.fullName}
                            style={{
                                width: "220px",
                                height: "auto",
                                display: "block",
                                objectFit: "contain",
                            }}
                        />
                    </Link>

                    <div className="header-actions">

                        <Link to="/contact" className="reservation-link">
                            <CalendarDays size={15} />
                            <span>RESERVATIONS</span>
                        </Link>

                        <a
                            href={`tel:${brand.phone.replace(/\s/g, "")}`}
                            className="phone-link"
                        >
                            <Phone size={15} />
                            <span>{brand.phone}</span>
                        </a>

                        <button
                            className="menu-toggle"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X size={30} /> : <Menu size={34} />}
                        </button>

                    </div>
                </div>
            </header>

            <div
                className={`menu-overlay ${menuOpen ? "show" : ""}`}
                onClick={() => setMenuOpen(false)}
            />

            <aside className={`slide-menu ${menuOpen ? "open" : ""}`}>

                <div className="slide-menu-top">
                    <span>EXPLORE</span>

                    <button onClick={() => setMenuOpen(false)}>
                        <X size={25} />
                    </button>
                </div>

                <nav className="slide-navigation">
                    {navigation.map((link, index) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`slide-nav-link ${location.pathname === link.path ? "current" : ""
                                }`}
                            style={{ "--item-index": index }}
                        >
                            <span className="nav-number">
                                0{index + 1}
                            </span>

                            <span className="nav-name">
                                {link.name}
                            </span>

                            <ArrowUpRight className="nav-arrow" size={22} />
                        </Link>
                    ))}
                </nav>

                <div className="slide-menu-bottom">
                    <p>YOUR WELLNESS JOURNEY STARTS HERE</p>

                    <Link to="/contact" className="menu-book-btn">
                        Book Your Experience
                        <ArrowUpRight size={18} />
                    </Link>
                </div>

            </aside>
        </>
    );
}