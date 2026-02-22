"use client";

import * as React from "react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";

/* ------------------------------------------------------------------ */
/*  Zambia Cities Data                                                 */
/* ------------------------------------------------------------------ */
const ZAMBIA_CITIES = [
  "Lusaka",
  "Kitwe",
  "Ndola",
  "Kabwe",
  "Chingola",
  "Mufulira",
  "Livingstone",
  "Luanshya",
  "Kasama",
  "Chipata",
];

export function EventFilters() {
  const [location, setLocation] = React.useState("Lusaka, Zambia");
  const [isLocationOpen, setIsLocationOpen] = React.useState(false);

  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  const [isDateOpen, setIsDateOpen] = React.useState(false);

  return (
    <div className="w-full bg-white pt-10 pb-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <h2 className="text-sm font-semibold text-neutral-500 mb-1">
          Browse Events
        </h2>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-6">
          {location}
        </h1>

        <div className="flex flex-wrap items-center gap-3">
          <Popover open={isLocationOpen} onOpenChange={setIsLocationOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`rounded-full h-10 px-5 transition-colors ${
                  isLocationOpen || location !== "Lusaka, Zambia"
                    ? "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800 hover:text-white"
                    : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                Change Location
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[300px] p-0 rounded-2xl shadow-lg border-neutral-100"
              align="start"
              sideOffset={8}
            >
              <Command>
                <CommandInput
                  placeholder=""
                  className="h-12 border-0 focus:ring-0"
                  autoFocus
                />
                <CommandList>
                  <CommandEmpty>No location found.</CommandEmpty>
                  <CommandGroup>
                    {ZAMBIA_CITIES.map((city) => (
                      <CommandItem
                        key={city}
                        value={city}
                        onSelect={(currentValue) => {
                          const matches = ZAMBIA_CITIES.find(
                            (c) =>
                              c.toLowerCase() === currentValue.toLowerCase(),
                          );
                          setLocation(
                            matches ? `${matches}, Zambia` : currentValue,
                          );
                          setIsLocationOpen(false);
                        }}
                      >
                        {city}, Zambia
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`rounded-full h-10 px-5 transition-colors ${
                  isDateOpen || date?.from
                    ? "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800 hover:text-white"
                    : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "MMM d, yyyy")} -{" "}
                      {format(date.to, "MMM d, yyyy")}
                    </>
                  ) : (
                    format(date.from, "MMM d, yyyy")
                  )
                ) : (
                  "Filter by date"
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-4 rounded-3xl shadow-lg border-neutral-100"
              align="start"
              sideOffset={8}
            >
              <Calendar
                mode="range"
                selected={date}
                onSelect={setDate}
                initialFocus
                numberOfMonths={2}
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return date < today;
                }}
                className="p-0"
              />
              <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4 px-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDate(undefined)}
                  className="text-neutral-500 hover:text-neutral-900 font-semibold"
                >
                  Clear
                </Button>
                <Button
                  size="sm"
                  onClick={() => setIsDateOpen(false)}
                  className={`rounded-lg px-6 font-semibold transition-colors ${
                    date?.from && date?.to
                      ? "bg-neutral-900 text-white hover:bg-neutral-800"
                      : "bg-neutral-100 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-900"
                  }`}
                >
                  Apply
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Bottom separator similar to the 1st screenshot */}
        <div className="mt-10 border-b border-neutral-100" />
      </div>
    </div>
  );
}
