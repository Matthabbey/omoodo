"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { SERVICE_OPTIONS } from "../../constants/services";
import { getContactHref } from "../../constants/contact";
import { QUICK_FINDER_COPY } from "../../constants/home-copy";
import type { HeroPillarId } from "../../types/hero";
import { Button, Select } from "../ui";

export function HeroQuickInquiry() {
  const router = useRouter();
  const [selectedService, setSelectedService] =
    React.useState<HeroPillarId>("concierge");
  const [selectedLocation, setSelectedLocation] = React.useState("lagos");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(getContactHref(selectedService, selectedLocation));
  };

  return (
    <form
      aria-label={QUICK_FINDER_COPY.formLabel}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 shadow-md [&_label]:text-sm md:flex-row md:items-center md:gap-5 md:p-5 md:[&_button]:h-14 md:[&_button]:text-base"
      onSubmit={handleSubmit}
      suppressHydrationWarning
    >
      <div className="min-w-0 flex-1">
        <Select
          icon={<Briefcase className="h-4 w-4" />}
          label={QUICK_FINDER_COPY.serviceLabel}
          onChange={(val) => {
            const service = SERVICE_OPTIONS.find(
              (option) => option.value === val,
            );
            if (service) setSelectedService(service.value);
          }}
          options={SERVICE_OPTIONS}
          value={selectedService}
        />
      </div>

      <div className="min-w-0 flex-1">
        <Select
          icon={<MapPin className="h-4 w-4" />}
          label={QUICK_FINDER_COPY.locationLabel}
          onChange={(val) => setSelectedLocation(val)}
          options={[
            { value: "lagos", label: "Lagos (Island & Mainland)" },
            { value: "abuja", label: "Abuja (Federal Capital Territory)" },
            { value: "ph", label: "Port Harcourt & Rivers State" },
            { value: "diaspora", label: "Diaspora / International Request" },
            { value: "other", label: "Other States across Nigeria" },
          ]}
          value={selectedLocation}
        />
      </div>

      <div className="shrink-0 md:self-end">
        <Button
          className="h-12 w-full px-6 text-base font-bold shadow-sm md:h-14 md:w-auto lg:px-8"
          type="submit"
          variant="primary"
        >
          <span>{QUICK_FINDER_COPY.submitLabel}</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
