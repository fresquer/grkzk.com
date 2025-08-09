import { createClient } from "@/prismicio";

export default async function AboutMe() {
    const client = createClient();
    const page = await client.getSingle("about_me");

    return (
        <div className="container mx-auto">
            <div className="text-white grid grid-cols-1 md:grid-cols-2">
                <div className="border-r-none md:border-r border-[#2f2f2f] pt-16 pb-0 px-8">
                    <div className="max-w-sm mx-auto space-y-4">
                        <img src="/images/grkzk-avatar.webp" alt="grkzk profile" />
                        <img src="/images/grkzk-dj.jpg" alt="grkzk dj" />

                    </div>
                </div>
                <div className="py-8  md:py-16 px-16">
                    <div className="mx-auto">
                        <h1 className="text-4xl font-bold mb-4">About me</h1>
                        {page.data.text.map((text, index) => (
                            <p className="text-sm mb-4 text-justify" key={index}>
                                {text.text}
                            </p>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
