import ProjectLayout from "../components/ProjectLayout";
import sneakpeek1 from "../assets/sneakpeek1.png";
import sneakpeek2 from "../assets/sneakpeek2.png";
import sneakpeek3 from "../assets/sneakpeek3.png";
import sneakpeek4 from "../assets/sneakpeek4.png";
import sneakpeek5 from "../assets/sneakpeek5.png";
import sneakpeek6 from "../assets/sneakpeek6.png";
import sneakpeek7 from "../assets/sneakpeek7.png";
import sneakpeek8 from "../assets/sneakpeek8.jpg";

export default function ProjectSneakPeek({ darkMode, language }) {
  const project = {
    title: "Sneak Peek",
    subtitle:
      language === "pt" ? (
        <span>
          Plataforma de conteúdo exclusivo para criadores brasileiros — assine,
          interaja e monetize.{" "}
          <a
            href="https://www.sneakpeek.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline font-medium"
          >
            www.sneakpeek.com.br
          </a>
        </span>
      ) : (
        <span>
          Exclusive content platform for Brazilian creators — subscribe,
          interact and monetize.{" "}
          <a
            href="https://www.sneakpeek.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline font-medium"
          >
            www.sneakpeek.com.br
          </a>
        </span>
      ),
    heroImage:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
    live: "https://www.sneakpeek.com.br",
    github: null,
    tags: ["PWA", "FullStack", "SaaS", "Produção"],
    stats:
      language === "pt"
        ? [
            {
              label: "Tipo",
              value: "PWA Mobile-First",
              color: "text-pink-500",
            },
            { label: "Status", value: "Em Produção", color: "text-green-400" },
            {
              label: "Stack",
              value: "Next.js + Supabase + Stripe",
              color: "text-orange-400",
            },
          ]
        : [
            {
              label: "Type",
              value: "PWA Mobile-First",
              color: "text-pink-500",
            },
            {
              label: "Status",
              value: "In Production",
              color: "text-green-400",
            },
            {
              label: "Stack",
              value: "Next.js + Supabase + Stripe",
              color: "text-orange-400",
            },
          ],
    features: [
      {
        title:
          language === "pt"
            ? "Feed & Conteúdo Exclusivo"
            : "Feed & Exclusive Content",
        desc:
          language === "pt"
            ? "Posts públicos e pagos com controle de acesso por assinatura. Stories com expiração automática. Upload de fotos e vídeos com processamento via Mux."
            : "Public and paid posts with subscription access control. Stories with automatic expiration. Photo and video upload with Mux processing.",
        image: sneakpeek2,
        caption:
          language === "pt"
            ? "Feed principal — posts públicos"
            : "Main feed — public posts",
      },
      {
        title:
          language === "pt"
            ? "Assinaturas Recorrentes"
            : "Recurring Subscriptions",
        desc:
          language === "pt"
            ? "Planos mensais, trimestrais e semestrais com preços configuráveis por criador. Cancelamento via Stripe Customer Portal. Sincronização de status via webhooks. Suporte a cancel_at para cancelamentos agendados. Status visual claro: ativo, cancelamento agendado, expirado."
            : "Monthly, quarterly and semi-annual plans with prices configurable per creator. Cancellation via Stripe Customer Portal. Status synchronization via webhooks. Support for cancel_at for scheduled cancellations. Clear visual status: active, scheduled cancellation, expired.",
        image: sneakpeek3,
        caption:
          language === "pt"
            ? "Checkout via Stripe — planos de assinatura"
            : "Stripe Checkout — subscription plans",
      },
      {
        title:
          language === "pt" ? "Proteção de Conteúdo" : "Content Protection",
        desc:
          language === "pt"
            ? "Marca d'água com @nick do assinante espalhada por fotos e vídeos privados (para desencorajar vazamentos). Log de visualização de conteúdo privado (conta, horário, aparelho). Mídia protegida via URLs assinadas (signed URLs com expiração). Bloqueio de acesso a conteúdo exclusivo para não-assinantes"
            : "Dynamic watermark with subscriber @nick spread across private photos and videos (to discourage leaks). Private content view log (account, time, device). Media protected via signed URLs (with expiration). Block access to exclusive content for non-subscribers",
        image: sneakpeek4,
        caption:
          language === "pt"
            ? "Marca d'água dinâmica no conteúdo pago"
            : "Dynamic watermark on paid content",
      },
      {
        title: language === "pt" ? "Dashboard do Criador" : "Creator Dashboard",
        desc:
          language === "pt"
            ? "Métricas agregadas: views, curtidas, comentários. Lista de assinantes com status ativo/cancelado. Painel de preço por assinatura. Cadastro de chave pix para recebimento. Ajuda e Suporte, comunicação com a plataforma"
            : "Aggregated metrics: views, likes, comments. List of active/cancelled subscribers. Subscription price panel. Pix key registration for payouts. Help and Support, platform communication",
        image: sneakpeek5,
        caption:
          language === "pt"
            ? "Dashboard do criador — métricas e assinantes"
            : "Creator dashboard — metrics and subscribers",
      },
      {
        title:
          language === "pt" ? "Painel Admin Completo" : "Complete Admin Panel",
        desc:
          language === "pt"
            ? "Login dedicado para administradores. Aprovação de solicitações de criador (selfie + documento). Repasses: visualização dos valores devidos a cada criador, com opção de dar baixa manualmente — criador recebe notificação de pagamento. Denúncias: usuários podem denunciar posts (bullying, nudez, violência etc.) — admin revisa e pode deletar o post com um clique. Broadcast: envio de mensagens para todos os usuários ou para um em específico. Seção de suporte: visualização e resposta aos chamados abertos"
            : "Dedicated login for administrators. Approval of creator requests (selfie + document). Payouts: view amounts due to each creator, with manual settlement option — creator receives payment notification. Reports: users can report posts (bullying, nudity, violence etc.) — admin reviews and can delete the post with one click. Broadcast: send messages to all users or specific one. Support section: view and respond to open tickets",
        image: sneakpeek6,
        caption:
          language === "pt"
            ? "Painel admin — gestão de criadores e repasses"
            : "Admin panel — creator management and payouts",
      },
      {
        title:
          language === "pt"
            ? "Chat Exclusivo em Tempo Real"
            : "Real-Time Exclusive Chat",
        desc:
          language === "pt"
            ? "Mensagens diretas entre criadores e seus assinantes com atualização em tempo real via Supabase Realtime. Suporte a envio de fotos/vídeos e áudio"
            : "Direct messages between creators and their subscribers with real-time updates via Supabase Realtime. Support for sending photos/videos and audio",
        image: sneakpeek7,
        caption:
          language === "pt"
            ? "Chat direto entre criador e assinante"
            : "Direct chat between creator and subscriber",
      },
      {
        title: language === "pt" ? "PWA Instalável" : "Installable PWA",
        desc:
          language === "pt"
            ? "Funciona como app nativo no iOS (com instruções de instalação) e Android (botão de download). Splash screen, manifest e experiência mobile-first com safe areas."
            : "Works as a native app on iOS (with installation instructions) and Android (native download button). Custom splash screen, manifest and mobile-first experience with safe areas.",
        image: sneakpeek8,
        caption:
          language === "pt"
            ? "PWA instalável — experiência mobile-first"
            : "Installable PWA — mobile-first experience",
      },
    ],
    gallery: [
      {
        url: sneakpeek1,
        caption:
          language === "pt"
            ? "Feed principal — posts públicos e exclusivos"
            : "Main feed — public and exclusive posts",
      },
      {
        url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074",
        caption:
          language === "pt"
            ? "Dashboard do criador — métricas e assinantes"
            : "Creator dashboard — metrics and subscribers",
      },
      {
        url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070",
        caption:
          language === "pt"
            ? "Checkout via Stripe — planos de assinatura"
            : "Stripe Checkout — subscription plans",
      },
      {
        url: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=2074",
        caption:
          language === "pt"
            ? "Painel admin — gestão de criadores e repasses"
            : "Admin panel — creator management and payouts",
      },
    ],
    codeBlocks: [
      {
        title:
          language === "pt"
            ? "Cloudflare R2 — Armazenamento de mídias e URLs públicas vs. assinadas"
            : "Cloudflare R2 — Media storage and public vs. signed URLs",
        filename: "lib/cloudflare/storage.ts",
        explanation:
          language === "pt"
            ? "Além de oferecer um armazenamento para fotos e vídeos no plano free maior que o supabase, conteúdo gratuito usa URL pública estática e conteúdo exclusivo gera uma URL assinada que expira em 1 hora — mesmo que o assinante compartilhe o link, está bloqueado no front e ele para de funcionar."
            : "In addition to offering larger free storage for photos and videos than Supabase, free content uses static public URL and exclusive content generates a signed URL that expires in 1 hour — even if the subscriber shares the link, it is blocked on the front-end and stops working.",
        code: `// Público: acesso direto, sem custo de egress
export function getPublicUrl(key: string) {
  return \`\${R2_PUBLIC_URL}/\${key}\`;
}

// Exclusivo: URL expira em 1h, vinculada ao request
export async function getPrivateSignedUrl(key: string) {
  const command = new GetObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
  });
  return getSignedUrl(r2Client, command, { expiresIn: 3600 });
}`,
      },
      {
        title:
          language === "pt"
            ? "Mux — por que não o S3 direto para vídeo?"
            : "Mux — why not direct S3 for video?",
        filename: "app/api/mux/upload/route.ts",
        explanation:
          language === "pt"
            ? "Vídeo no R2 exigiria transcodagem manual, sem adaptive bitrate nem thumbnail automático. O Mux resolve tudo isso com uma API: recebe o upload, processa, e entrega HLS otimizado para qualquer conexão."
            : "Video on R2 would require manual transcoding, no adaptive bitrate or automatic thumbnail. Mux solves all this with an API: receives the upload, processes it, and delivers optimized HLS for any connection.",
        code: `export async function POST() {
  const upload = await mux.video.uploads.create({
    new_asset_settings: {
      playback_policy: ["signed"], // só assinantes acessam
      mp4_support: "none",
    },
    cors_origin: process.env.NEXT_PUBLIC_APP_URL!,
  });

  return NextResponse.json({
    uploadId: upload.id,
    uploadUrl: upload.url,
  });
}`,
      },
      {
        title:
          language === "pt"
            ? "Watermark dinâmica — rastreamento de vazamentos"
            : "Dynamic Watermark — leak tracking",
        filename: "lib/watermark.ts",
        explanation:
          language === "pt"
            ? "O @nick do assinante é gravado no canvas antes do upload. Se o conteúdo vazar, dá pra identificar quem vazou. A posição e opacidade são sutis o suficiente pra não atrapalhar a experiência."
            : "The subscriber's @nick is embedded in the canvas before upload. If the content leaks, it's possible to identify who leaked it. The position and opacity are subtle enough not to interfere with the experience.",
        code: `const fontSize = 36;
const text = "● Sneak Peek";

// Sobrepõe marca d'água com opacidade baixa
ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
ctx.font = \`bold \${fontSize}px sans-serif\`;
ctx.fillText(text, boxX + boxPad, boxY + boxPad);

// Normaliza para 9:16 independente da orientação do celular
const scale = naturalW > naturalH
  ? Math.min(TARGET_W / naturalW, TARGET_H / naturalH)  // landscape: contain
  : Math.max(TARGET_W / naturalW, TARGET_H / naturalH); // portrait: cover`,
      },
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Cloudflare R2",
      "Mux",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "TanStack Query",
      "Vercel",
    ],
  };

  return <ProjectLayout project={project} darkMode={darkMode} />;
}
