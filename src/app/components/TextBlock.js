"use client";
import React, { useRef, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

export default function TextBlock() {
    const textBlockRef = useRef(null);
    const [hasRun, setHasRun] = useState(false);
    const timePause = 300;
    const scrollWritting = () => { window.scrollBy(0, 48); }

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !hasRun) {
                setHasRun(true);
                var typewriter = new Typewriter(textBlockRef.current, {
                    delay: 75,
                });

                typewriter
                    .pauseFor(2500)
                    .typeString('in a world where you can be anything, be kind')
                    .pauseFor(timePause)
                    .typeString('<br><br>there is so much to live for')
                    .pauseFor(timePause)
                    .callFunction(() => scrollWritting())
                    .typeString('<br><br>there are so many stories to listen')
                    .pauseFor(timePause)
                    .callFunction(() => scrollWritting())
                    .typeString('<br><br>there are so much life to share and enjoy')
                    .pauseFor(timePause)
                    .callFunction(() => scrollWritting())
                    .typeString('<br><br>don’t let them win, don’t let fear take over')
                    .pauseFor(timePause)
                    .callFunction(() => scrollWritting())
                    .typeString('<br><br>there is no place for fear')
                    .pauseFor(timePause)
                    .callFunction(() => scrollWritting())
                    .typeString('<br><br><span style="font-weight: 600">grkzk.</span>')
                    .pauseFor(timePause)
                    .start();
            }
        }, { threshold: 1 });

        observer.observe(textBlockRef.current);

        return () => observer.unobserve(textBlockRef.current);
    }, [hasRun]);

    return (
        <section className="bg-brand-blue rounded-2xl min-h-24 p-14 mx-8 flex justify-center">
            <div ref={textBlockRef} className='text-black text-lg w-max-md'></div>
        </section>
    );
}