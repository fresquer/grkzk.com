// app/client-feedback/page.js
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";

// GraphQuery: trae la página y expande los items y su obra relacionada
const CLIENT_FEEDBACK_GRAPH_QUERY = `
{
  client_feedback_page {
    feedback_items {
      client_feedback_item {
        ...on client_feedback_item {
          uid
          title
          subtitle
          feedback_text
          photo
          releated_work {
            ...on music_item {
              uid
              title
              link
              description
              release_date
            }
          }
        }
      }
    }
    meta_title
    meta_description
    meta_image
    slices
  }
}
`;

// Función para traer la página + items en el orden definido en Prismic
async function getClientFeedbackPageWithItems() {
    const client = createClient();

    const page = await client.getSingle("client_feedback_page", {
        graphQuery: CLIENT_FEEDBACK_GRAPH_QUERY,
    });

    const rows = page?.data?.feedback_items || [];

    // Ya vienen expandidos gracias al graphQuery
    const items = rows
        .map((row) => row?.client_feedback_item || null)
        .filter(Boolean);

    return { page, items };
}

// SEO dinámico usando los campos de Prismic
export async function generateMetadata() {
    const { page } = await getClientFeedbackPageWithItems();
    const title = page?.data?.meta_title || "Client feedback";
    const description = page?.data?.meta_description || undefined;
    const image = page?.data?.meta_image?.url || undefined;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: image ? [{ url: image, width: 2400, height: 1260 }] : undefined,
        },
        twitter: {
            card: image ? "summary_large_image" : "summary",
            title,
            description,
            images: image ? [image] : undefined,
        },
    };
}

// Página principal
export default async function ClientFeedbackPage() {
    const { items } = await getClientFeedbackPageWithItems();

    return (
        <div className="container mx-auto text-white pt-8">
            <div className="px-8 pb-8">
                <h1 className="text-3xl">client feedback</h1>
            </div>
            <div className="border-b border-[#2f2f2f]" />

            {items.length === 0 ? (
                <p className="px-8 opacity-70 mt-6">No feedback yet</p>
            ) : (
                <div className="divide-y divide-[#2f2f2f]">
                    {items.map((item) => {
                        const rel = item?.data?.releated_work || null;
                        const relatedTitle = rel?.data?.title || rel?.uid || "Related work";

                        // Si el music_item tiene link externo, úsalo; si no, link interno
                        const externalHref =
                            rel?.data?.link && typeof rel.data.link === "object"
                                ? rel.data.link.url || null
                                : null;
                        const href = externalHref || (rel?.uid ? `/work/${rel.uid}` : null);

                        return (
                            <section key={item.id} className="grid grid-cols-1 md:grid-cols-2">
                                {/* Imagen */}
                                <div className="border-b md:border-b-0 md:border-r border-[#2f2f2f] pt-16 pb-0 px-8">
                                    <div className="max-w-sm mx-auto">
                                        {item?.data?.photo?.url ? (
                                            <PrismicNextImage
                                                field={item.data.photo}
                                                alt={item.data.photo?.alt ?? item.data.title ?? "Client photo"}
                                                className="w-full h-auto"
                                            />
                                        ) : (
                                            <div className="aspect-[4/3] w-full bg-[#1f1f1f] grid place-items-center text-sm opacity-60">
                                                No image
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="py-8 md:py-16 px-8 md:px-16">
                                    <div className="mx-auto max-w-2xl">
                                        {item?.data?.title && (
                                            <h2 className="text-2xl md:text-3xl font-semibold">
                                                {item.data.title}
                                            </h2>
                                        )}
                                        {item?.data?.subtitle && (
                                            <p className="mt-1 opacity-80">{item.data.subtitle}</p>
                                        )}

                                        <div className="prose prose-invert mt-6 text-sm text-justify">
                                            <PrismicRichText field={item?.data?.feedback_text} />
                                        </div>

                                        {href && (
                                            <Link
                                                href={href}
                                                target={externalHref ? "_blank" : undefined}
                                                rel={externalHref ? "noopener noreferrer" : undefined}
                                                className="mt-8 block"
                                                aria-label={`Open related work: ${relatedTitle}`}
                                            >
                                                <div className="border border-[#2f2f2f] p-6 hover:shadow-lg transition-shadow">
                                                    <div className="text-xs opacity-70">Related work</div>
                                                    <div className="font-semibold mt-1">{relatedTitle}</div>
                                                    <div className="mt-1 underline underline-offset-4 break-all text-sm">
                                                        listen
                                                    </div>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
