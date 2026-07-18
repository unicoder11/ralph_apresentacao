import type { Metadata } from "next";
import Deck from "@/components/deck/Deck";
import { campaignosSlides } from "@/components/deck/campaignos-slides";

export const metadata: Metadata = {
  title: "CampaignOS — The Operating System for Political Campaigns",
  description:
    "O que é o CampaignOS: um sistema operacional de IA que centraliza conhecimento, estratégia, comunicação e operação de campanhas políticas.",
};

export default function CampaignOsPage() {
  return (
    <Deck slides={campaignosSlides} footerLabel="CampaignOS · O que é" />
  );
}
