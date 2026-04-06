import ProjectLayout from "../components/ProjectLayout";

export default function ProjectMyWay({ darkMode, language }) {
  const project = {
    title: "MyWay Flats",

    subtitle:
      language === "pt" ? (
        <span>
          Plataforma completa de gestão de apartamentos de temporada com
          reservas, pagamentos e sync automático com Airbnb e Booking.{" "}
          <a
            href="https://www.mywayflats.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline font-medium"
          >
            www.mywayflats.com.br
          </a>
        </span>
      ) : (
        <span>
          Complete vacation rental management platform with booking, payments
          and automatic sync with Airbnb and Booking.{" "}
          <a
            href="https://www.mywayflats.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline font-medium"
          >
            www.mywayflats.com.br
          </a>
        </span>
      ),

    heroImage:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070",
    live: "https://www.mywayflats.com.br",
    github: null,
    tags: ["FullStack", "SaaS", "Produção", "Pagamentos"],

    stats:
      language === "pt"
        ? [
            {
              label: "Tipo",
              value: "Web App + Admin",
              color: "text-orange-500",
            },
            {
              label: "Deploy",
              value: "Render (produção)",
              color: "text-green-400",
            },
            {
              label: "Pagamentos",
              value: "Stripe + PIX",
              color: "text-blue-400",
            },
          ]
        : [
            {
              label: "Type",
              value: "Web App + Admin",
              color: "text-orange-500",
            },
            {
              label: "Deploy",
              value: "Render (production)",
              color: "text-green-400",
            },
            {
              label: "Payments",
              value: "Stripe + PIX",
              color: "text-blue-400",
            },
          ],

    features: [
      {
        title:
          language === "pt"
            ? "Site Público de Reservas"
            : "Public Booking Website",
        desc:
          language === "pt"
            ? "Página de busca e reserva com calendário de disponibilidade em tempo real, galeria de fotos por apartamento e fluxo completo de checkout."
            : "Search and booking page with real-time availability calendar, apartment photo gallery and full checkout flow.",
      },
      {
        title:
          language === "pt"
            ? "Pagamento Online — Cartão e PIX"
            : "Online Payments — Card and PIX",
        desc:
          language === "pt"
            ? "Integração com Stripe para pagamento via cartão de crédito e geração de QR Code PIX. Confirmação automática via webhook."
            : "Stripe integration for credit card payments and PIX QR Code generation. Automatic confirmation via webhook.",
      },
      {
        title:
          language === "pt"
            ? "Sync com Airbnb e Booking via iCal"
            : "Sync with Airbnb and Booking via iCal",
        desc:
          language === "pt"
            ? "Sincronização bidirecional de disponibilidade com Airbnb e Booking.com via protocolo iCal. Datas bloqueadas em uma plataforma refletem automaticamente nas outras."
            : "Bidirectional availability sync with Airbnb and Booking.com via iCal protocol. Blocked dates on one platform automatically reflect on others.",
      },
      {
        title: language === "pt" ? "Painel Administrativo" : "Admin Dashboard",
        desc:
          language === "pt"
            ? "Gestão completa de apartamentos, reservas e hóspedes. Controle de disponibilidade por calendário com bloqueio manual de datas."
            : "Full management of apartments, reservations and guests. Availability control via calendar with manual date blocking.",
      },
      {
        title: language === "pt" ? "Gestão Financeira" : "Financial Management",
        desc:
          language === "pt"
            ? "Visão consolidada de receitas por período, status de pagamentos pendentes e histórico de transações."
            : "Consolidated view of revenue by period, pending payment status and transaction history.",
      },
      {
        title:
          language === "pt"
            ? "Relatórios em PDF e Excel"
            : "PDF and Excel Reports",
        desc:
          language === "pt"
            ? "Exportação de relatórios financeiros e de ocupação em PDF e Excel para uso contábil e gerencial."
            : "Export of financial and occupancy reports in PDF and Excel for accounting and management use.",
      },
      {
        title:
          language === "pt" ? "E-mails Transacionais" : "Transactional Emails",
        desc:
          language === "pt"
            ? "Confirmações de reserva, lembretes de check-in e notificações de pagamento enviados automaticamente via Resend."
            : "Booking confirmations, check-in reminders and payment notifications sent automatically via Resend.",
      },
      {
        title: language === "pt" ? "Multi-propriedade" : "Multi-property",
        desc:
          language === "pt"
            ? "Suporte a múltiplos apartamentos com configurações independentes de preço, disponibilidade, fotos e regras de reserva."
            : "Support for multiple apartments with independent configuration for pricing, availability, photos and booking rules.",
      },
    ],

    gallery: [
      {
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
        caption:
          language === "pt"
            ? "Site público — listagem de apartamentos"
            : "Public website — apartment listings",
      },
      {
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070",
        caption:
          language === "pt"
            ? "Página do apartamento — galeria e disponibilidade"
            : "Apartment page — gallery and availability",
      },
      {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070",
        caption:
          language === "pt"
            ? "Painel admin — gestão financeira"
            : "Admin panel — financial management",
      },
      {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070",
        caption:
          language === "pt"
            ? "Relatórios — exportação em PDF e Excel"
            : "Reports — PDF and Excel export",
      },
    ],

    codeBlocks: [
      {
        title:
          language === "pt"
            ? "Sincronização iCal com Airbnb e Booking"
            : "iCal Sync with Airbnb and Booking",
        filename: "src/services/icalSync.ts",
        explanation:
          language === "pt"
            ? "O protocolo iCal é um padrão aberto suportado por todas as OTAs. A sincronização busca o feed .ics de cada plataforma, parseia os eventos VEVENT e bloqueia as datas correspondentes no banco de dados local."
            : "iCal is an open standard supported by OTAs. Sync fetches each platform .ics feed, parses VEVENT entries and blocks corresponding dates in the local database.",
        code: `import ical from "node-ical";

export async function syncExternalCalendar(
  apartmentId: string,
  icalUrl: string,
  source: "airbnb" | "booking"
) {
  const events = await ical.fromURL(icalUrl);

  const blockedDates = Object.values(events)
    .filter((e) => e.type === "VEVENT")
    .map((e) => ({
      apartment_id: apartmentId,
      start: new Date(e.start),
      end: new Date(e.end),
      source,
      external_uid: e.uid,
    }));

  await prisma.blockedDate.createMany({
    data: blockedDates,
    skipDuplicates: true,
  });
}`,
      },
      {
        title:
          language === "pt"
            ? "Geração de QR Code PIX"
            : "PIX QR Code Generation",
        filename: "src/api/payments/pix.ts",
        explanation:
          language === "pt"
            ? "O PIX é gerado via Stripe e o QR Code é retornado na resposta do checkout para exibição imediata."
            : "PIX is generated via Stripe and the QR Code is returned in the checkout response for immediate display.",
        code: `const paymentIntent = await stripe.paymentIntents.create({
  amount: totalCents,
  currency: "brl",
  payment_method_types: ["pix"],
  metadata: {
    reservationId,
    apartmentId,
    guestEmail,
  },
});

const pixQrCode =
  paymentIntent.next_action?.pix_display_qr_code;

return {
  clientSecret: paymentIntent.client_secret,
  qrCodeImage: pixQrCode?.image_url_png,
  qrCodeString: pixQrCode?.data,
  expiresAt: pixQrCode?.expires_at,
};`,
      },
    ],

    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma ORM",
      "PostgreSQL",
      "Stripe",
      "Resend",
      "node-ical",
      "Render",
    ],
  };

  return <ProjectLayout project={project} darkMode={darkMode} />;
}
