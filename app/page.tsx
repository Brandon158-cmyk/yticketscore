import { HeroBanner } from "@/components/layout/hero-banner";
import { EventFilters } from "@/components/layout/event-filters";
import { Categories } from "@/components/layout/categories";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <EventFilters />
      <Categories />
    </main>
  );
}
