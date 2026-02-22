import { HeroBanner } from "@/components/layout/hero-banner";
import { EventFilters } from "@/components/layout/event-filters";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <EventFilters />
    </main>
  );
}
