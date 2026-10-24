"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { SERVICE_OPTIONS, SERVICE_PATHS } from "../../constants/services";
import type { HeroPillarId } from "../../types/hero";
import { Button, Select } from "../ui";

export function HeroQuickInquiry() {
  const router = useRouter();
  const [selectedService, setSelectedService] =
    React.useState<HeroPillarId>("concierge");
  const [selectedLocation, setSelectedLocation] = React.useState("lagos");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(SERVICE_PATHS[selectedService]);
  };

  return (
    <form
      aria-label="Omoodo Quick Service Finder"
      className="mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4 shadow-md lg:flex-row lg:items-center lg:gap-4 lg:p-3"
      onSubmit={handleSubmit}
    >
      <div className="min-w-0 flex-1">
        <Select
          icon={<Briefcase className="h-4 w-4" />}
          label="What service do you need?"
          onChange={(val) => {
            const service = SERVICE_OPTIONS.find((option) => option.value === val);
            if (service) setSelectedService(service.value);
          }}
          options={SERVICE_OPTIONS}
          value={selectedService}
        />
      </div>

      <div className="min-w-0 flex-1">
        <Select
          icon={<MapPin className="h-4 w-4" />}
          label="Location on ground"
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

      <div className="lg:self-end">
        <Button
          className="h-11 w-full px-6 font-bold shadow-sm lg:w-auto"
          type="submit"
          variant="primary"
        >
          <span>Get Started</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
