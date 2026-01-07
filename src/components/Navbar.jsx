import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      label: "Stamp Papers",
      submenu: ["Buy e-Stamp", "State-wise e-Stamp", "Stamp Duty Guide"],
    },
    {
      label: "Legal Documents",
      submenu: ["Rental Agreement", "Affidavit", "Power of Attorney"],
    },
    {
      label: "Services",
      submenu: ["Document Drafting", "Notary Support", "Consultation"],
    },
    {
      label: "Resources",
      submenu: ["Blogs", "FAQs", "Legal Guides"],
    },
  ];

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-slate-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-2">
          <p className="opacity-90">
            ✔ Trusted platform for legal & documentation services
          </p>
          <p className="opacity-90">
            Support: <span className="font-medium">+91 98765 43210</span>
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 text-white flex items-center justify-center font-bold">
                L
              </div>
              <span className="text-lg font-semibold text-slate-900">
                LexDraft
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-slate-700 font-medium hover:text-indigo-600 transition">
                    {item.label}
                    <ChevronDown size={16} />
                  </button>

                  {/* Dropdown */}
                  <div
  className={`absolute left-0 mt-3 w-56 rounded-xl bg-white shadow-xl border border-slate-100 z-50
  transition-all duration-300
  ${
    activeDropdown === idx
      ? "opacity-100 translate-y-0 visible"
      : "opacity-0 -translate-y-2 invisible"
  }`}
>
  {item.submenu.map((sub, subIdx) => (
    <a
      key={subIdx}
      href="#"
      className="block px-5 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
    >
      {sub}
    </a>
  ))}
</div>

                </div>
              ))}

              <a
                href="#"
                className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-sm"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-slate-800"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-50 bg-black/40 transition-opacity ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`lg:hidden fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-xl transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-slate-900">
                Menu
              </span>
              <button onClick={() => setMenuOpen(false)}>
                <X size={22} />
              </button>
            </div>

            {navItems.map((item, idx) => (
              <details key={idx} className="group">
                <summary className="flex cursor-pointer items-center justify-between py-2 text-slate-700 font-medium">
                  {item.label}
                  <ChevronDown className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="ml-3 flex flex-col gap-2 pb-2">
                  {item.submenu.map((sub, subIdx) => (
                    <a
                      key={subIdx}
                      href="#"
                      className="text-sm text-slate-600 hover:text-indigo-600 transition"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </details>
            ))}

            <a
              href="#"
              className="mt-4 px-4 py-3 rounded-lg bg-indigo-600 text-white text-center font-medium hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
