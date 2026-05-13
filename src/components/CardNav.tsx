import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./CardNav.css";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: Array<{ label: string; href: string; external?: boolean }>;
}

interface CardNavProps {
  logo?: React.ReactNode;
  items: NavItem[];
  className?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  onCtaClick?: () => void;
  loginHref?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  items,
  className = "",
  buttonBgColor = "#9BC621",
  buttonTextColor = "#101828",
  onCtaClick,
  loginHref = "https://admin.contentsyndicate.net/signin",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1080 && isExpanded) {
        setIsExpanded(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

  return (
    <div className={`nav-container ${className}`}>
      <nav className={`main-nav ${isExpanded ? "is-open" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo">{logo}</div>

          <div className="nav-links-desktop">
            {items.map((item, idx) =>
              item.children ? (
                <div
                  key={idx}
                  className="nav-dropdown"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                  {openDropdown === item.label && (
                    <div className="nav-dropdown-menu">
                      {item.children.map((child, childIdx) =>
                        child.external ? (
                          <a
                            key={childIdx}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-dropdown-link"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link key={childIdx} to={child.href} className="nav-dropdown-link">
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : item.external ? (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="nav-actions">
            <a href={loginHref} className="nav-login-link">
              Log In
            </a>
            <button
              type="button"
              className="nav-cta-button"
              onClick={onCtaClick}
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            >
              Get Started
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? "Close menu" : "Open menu"}
            >
              {isExpanded ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${isExpanded ? "active" : ""}`}>
          <div className="mobile-menu-links">
            {items.map((item, idx) =>
              item.children ? (
                <div key={idx} className="mobile-nav-dropdown">
                  <Link
                    to={item.href}
                    className={`mobile-nav-link ${isActive(item.href) ? "active" : ""}`}
                    onClick={() => {
                      setIsExpanded(false);
                      setOpenDropdown(openDropdown === item.label ? null : item.label);
                    }}
                  >
                    {item.label}
                  </Link>
                  {openDropdown === item.label && (
                    <div className="mobile-dropdown-menu">
                      {item.children.map((child, childIdx) =>
                        child.external ? (
                          <a
                            key={childIdx}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mobile-dropdown-link"
                            onClick={() => setIsExpanded(false)}
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={childIdx}
                            to={child.href}
                            className="mobile-dropdown-link"
                            onClick={() => setIsExpanded(false)}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : item.external ? (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link"
                  onClick={() => setIsExpanded(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={item.href}
                  className={`mobile-nav-link ${isActive(item.href) ? "active" : ""}`}
                  onClick={() => setIsExpanded(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <a href={loginHref} className="mobile-nav-link" onClick={() => setIsExpanded(false)}>
              Log In
            </a>
            <button
              type="button"
              className="mobile-cta-button"
              onClick={() => {
                setIsExpanded(false);
                onCtaClick?.();
              }}
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
