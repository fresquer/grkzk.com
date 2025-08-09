import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export default async function ClientFeedback() {
    const client = createClient();

    const items = await client.getAllByType("client_feedback_item", {
        // Pedimos campos del documento relacionado (music_item)
        fetchLinks: [
            "music_item.title",
            "music_item.link",
            "music_item.description",
            "music_item.release_date",
            "music_item.uid",
        ],
        orderings: [{ field: "document.first_publication_date", direction: "desc" }],
    });

    return (
        <div className="container mx-auto text-white pt-8">
            <div className="px-8 pb-8">
                <h1 className="text-3xl">client feedback</h1>
            </div>
            <div className="border-b border-[#2f2f2f] " />

            {items.length === 0 ? (
                <p className="px-4 opacity-70 mt-6">No feedback yet</p>
            ) : (
                <div className="text-white divide-y divide-[#2f2f2f]">
                    {items.map((item) => {
                        const related = item?.data?.releated_work; // relación a music_item

                        // Campos traídos vía fetchLinks
                        const relatedTitle = related?.data?.title || related?.uid || "Related work";
                        const relatedExternalURL = related?.data?.link?.url || null;

                        // Si no hay link externo, creamos ruta interna por UID
                        const relatedHref = relatedExternalURL || (related?.uid ? `/work/${related.uid}` : null);

                        return (
                            <section key={item.id} className="grid grid-cols-1 md:grid-cols-2">
                                {/* Izquierda: foto (sin fallback) */}
                                <div className="border-b md:border-b-0 md:border-r border-[#2f2f2f] pt-16 pb-0 px-8">
                                    <div className="max-w-sm mx-auto">
                                        <PrismicNextImage
                                            field={item.data.photo}
                                            alt={item.data.photo?.alt ?? item.data.title ?? "Client photo"}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>

                                {/* Derecha: contenido */}
                                <div className="py-8 md:py-16 px-8 md:px-16">
                                    <div className="mx-auto max-w-2xl">
                                        {item.data.title && (
                                            <h2 className="text-2xl md:text-3xl font-semibold">
                                                {item.data.title}
                                            </h2>
                                        )}
                                        {item.data.subtitle && (
                                            <p className="mt-1 opacity-80">{item.data.subtitle}</p>
                                        )}

                                        <div className="prose prose-invert mt-6 text-sm text-justify">
                                            <PrismicRichText field={item.data.feedback_text} />
                                        </div>

                                        {/* Tarjeta con la obra relacionada */}
                                        {relatedHref && (
                                            <Link
                                                href={relatedHref}
                                                target={relatedExternalURL ? "_blank" : undefined}
                                                rel={relatedExternalURL ? "noopener noreferrer" : undefined}
                                                className="mt-8 block"
                                            >
                                                <div className="border border-[#2f2f2f] p-6 hover:shadow-lg transition-shadow">
                                                    <div className="text-xs opacity-70">Related work</div>
                                                    <div className="font-semibold mt-1">{relatedTitle}</div>

                                                    <div className="mt-1 underline underline-offset-4 break-all">
                                                        <a className="text-sm" href={relatedExternalURL || relatedHref}>listen</a>

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
