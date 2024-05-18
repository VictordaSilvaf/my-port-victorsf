'use client';
import { useState, useEffect } from 'react';

export default function TitleSection({ title }: { title: string }) {
    const [className, setClassName] = useState<string>("");

    useEffect(() => {
        if (title.trim().split(/\s+/).length === 1) {
            // Se houver apenas uma palavra
            const firstHalf = title.slice(0, Math.ceil(title.length / 2));
            const secondHalf = title.slice(Math.ceil(title.length / 2));
            setClassName("text-blue-500"); // Cor para a primeira metade
            // Renderizando a primeira metade com a cor definida
            setRenderedTitle(
                <>
                    <span className="text-blue-500">{firstHalf}</span>
                    <span className='text-zinc-700'>{secondHalf}</span>
                </>
            );
        } else {
            // Se houver mais de uma palavra
            const words = title.split(/\s+/);
            const firstWord = words[0];
            const restOfTitle = title.slice(firstWord.length);
            setClassName("text-zinc-700"); // Cor para a primeira palavra
            // Renderizando a primeira palavra com a cor definida
            setRenderedTitle(
                <>
                    <span className="text-blue-500">{firstWord}</span>
                    <span className='text-zinc-700'>{restOfTitle}</span>
                </>
            );
        }
    }, [title]);

    const [renderedTitle, setRenderedTitle] = useState<JSX.Element | null>(null);

    return (
        <div className="w-full p-6 text-zinc-700 text-2xl">
            <h2 className={className}>{renderedTitle}</h2>
        </div>
    );
}
