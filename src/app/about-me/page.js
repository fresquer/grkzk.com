'use client'

export default function AboutMe() {
    return (
        <div className="container mx-auto">
            <div className="text-white grid grid-cols-1 md:grid-cols-2">
                <div className="border-r-none md:border-r border-[#2f2f2f] py-16 px-8">
                    <div className="max-w-sm mx-auto">
                        <img src="/images/grkzk-avatar.jpg" alt="" className="" />
                    </div>
                </div>
                <div className="py-16 px-8">
                    <div className="max-w-sm mx-auto">
                        <h1 className="text-4xl font-bold mb-2">About me</h1>
                        <p className="text-sm mb-4">
                            Soy grkzk, un productor de música electrónica con base en Valencia, apasionado por la creación de sonidos que conectan el alma con la pista de baile. En 2023, lancé mi primer álbum, No Place for Fear, un proyecto que refleja mi viaje musical y la constante búsqueda de emociones intensas y auténticas en cada beat. Mi enfoque en la producción abarca desde la creación de atmósferas envolventes hasta la potencia rítmica que define mis composiciones, siempre buscando innovar y desafiar los límites de la música electrónica.
                        </p>
                        <p className="text-sm mb-4">
                            Además de producir, me dedico al mix y master de canciones, ayudando a otros artistas a alcanzar el sonido profesional y pulido que buscan. Recientemente, he comenzado mi carrera como DJ, llevando mis mezclas a los clubes y eventos de Valencia y sus alrededores. En cada set, busco crear una experiencia única, donde el público pueda sumergirse en una narrativa sonora que los transporte a otro mundo.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
