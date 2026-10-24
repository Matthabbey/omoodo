"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { SERVICE_PAGES } from "../../constants/services";
import { Button } from "../ui";

export function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isHydrated = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
        triggerRef.current?.focus();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <Button
        aria-controls="mobile-navigation-drawer"
        aria-expanded={isOpen}
        aria-label="Open navigation menu"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        ref={triggerRef}
        size="icon"
        type="button"
        variant="outline"
      >
        <Menu aria-hidden="true" className="h-5 w-5" />
      </Button>

      {isHydrated && createPortal(
        <div
          aria-hidden={!isOpen}
          className={`fixed inset-0 z-[120] md:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          <Button
            aria-label="Close navigation menu"
            className={`absolute inset-0 h-full w-full rounded-none bg-deep/55 p-0 transition-opacity hover:bg-deep/55 ${isOpen ? "opacity-100" : "opacity-0"}`}
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            type="button"
            variant="ghost"
          />
          <aside
            aria-label="Mobile navigation"
            aria-modal="true"
            className={`absolute inset-y-0 right-0 flex w-[min(22rem,calc(100%-3rem))] flex-col bg-surface shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            id="mobile-navigation-drawer"
            role="dialog"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="text-xl font-black tracking-tight text-brand">
                Omoodo<span className="text-accent">.</span>
              </span>
              <Button
                aria-label="Close navigation menu"
                onClick={closeMenu}
                ref={closeRef}
                size="icon"
                type="button"
                variant="ghost"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </Button>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto p-4">
              <Link className={linkClass(pathname === "/")} href="/" onClick={closeMenu}>Home</Link>
              <Link className={linkClass(pathname === "/how-it-works")} href="/how-it-works" onClick={closeMenu}>How it works</Link>
              <Link className={linkClass(pathname === "/contact")} href="/contact" onClick={closeMenu}>Contact</Link>
              <p className="px-3 pb-2 pt-5 text-xs font-bold uppercase tracking-wider text-muted">Our services</p>
              {SERVICE_PAGES.map((service) => (
                <Link
                  className={linkClass(pathname === `/${service.slug}`)}
                  href={`/${service.slug}`}
                  key={service.slug}
                  onClick={closeMenu}
                >
                  <span>{service.name}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              ))}
            </nav>

            <div className="border-t border-border p-4">
              <Link className="flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-on-brand" href="/contact" onClick={closeMenu}>
                Request support <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>,
        document.body,
      )}
    </>
  );
}

function linkClass(isActive: boolean) {
  return `flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition ${
    isActive ? "bg-brand-soft text-brand" : "text-foreground hover:bg-brand-soft hover:text-brand"
  }`;
}

function subscribe() {
  return () => undefined;
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}
