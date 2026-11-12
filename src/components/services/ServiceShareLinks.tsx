"use client";

import { useState } from "react";
import { Link2, Mail, MessageCircle } from "lucide-react";
import { SERVICE_SHARE_COPY } from "../../constants/service-page";
import { cn } from "../../lib/utils";
import { buildWhatsAppShareHref } from "../../lib/whatsapp";
import type { ServiceShareLinksProps, ServiceShareStatus } from "../../types/service-page";
import { Button, buttonVariants } from "../ui";

/** 44px, the minimum comfortable touch target. */
const SHARE_ICON_CLASS = "h-11 w-11";

export function ServiceShareLinks({ url, title }: ServiceShareLinksProps) {
  const [status, setStatus] = useState<ServiceShareStatus>("idle");
  const message = `${title} ${url}`;
  const emailHref = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(message)}`;
  const linkClass = cn(buttonVariants({ variant: "secondary", size: "icon" }), SHARE_ICON_CLASS);

  function copyLink() {
    navigator.clipboard.writeText(url).then(
      () => setStatus("copied"),
      () => setStatus("failed"),
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 text-xs font-bold uppercase tracking-widest text-white/80">{SERVICE_SHARE_COPY.heading}</span>
      <a aria-label={SERVICE_SHARE_COPY.email} className={linkClass} href={emailHref} title={SERVICE_SHARE_COPY.email}>
        <Mail aria-hidden="true" className="h-4 w-4" />
      </a>
      <a
        aria-label={SERVICE_SHARE_COPY.whatsapp}
        className={linkClass}
        href={buildWhatsAppShareHref(message)}
        rel="noopener noreferrer"
        target="_blank"
        title={SERVICE_SHARE_COPY.whatsapp}
      >
        <MessageCircle aria-hidden="true" className="h-4 w-4" />
      </a>
      <Button
        aria-label={SERVICE_SHARE_COPY.copy}
        className={SHARE_ICON_CLASS}
        onClick={copyLink}
        size="icon"
        title={SERVICE_SHARE_COPY.copy}
        type="button"
        variant="secondary"
      >
        <Link2 aria-hidden="true" className="h-4 w-4" />
      </Button>
      <span aria-live="polite" className="text-xs font-semibold text-accent">
        {status === "copied" ? SERVICE_SHARE_COPY.copied : null}
        {status === "failed" ? SERVICE_SHARE_COPY.copyFailed : null}
      </span>
    </div>
  );
}
