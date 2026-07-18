import Deck from "@/components/deck/Deck";
import { slides } from "@/components/deck/slides";

export default function Home() {
  return <Deck slides={slides} footerLabel="Ralph Gracie · CampaignOS" />;
}
