import { useState } from "react";

import { CloseButton } from "./CloseButton";
import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'

const feedbackTypes = {
    BUG: {
        title: 'Issue',
        image: {
            source: bugImageUrl,
            alt: 'Image of a bug'
        }
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'Image of a lamp'
        }
    },
    OTHER: {
        title: 'Other',
        image: {
            source: thoughtImageUrl,
            alt: 'Image of a ballon of thought'
        }
    },
}

// Object.entries(feedbackTypes) =>
/**
 * [
 *   ['BUG', { title: 'Issue', image: { source: bugImageUrl, alt: 'Image of a bug' } }],
 *   ['IDEA', { title: 'Idea', image: { source: ideaImageUrl, alt: 'Image of a lamp' } }],
 *   ['OTHER', { title: 'Other', image: { source: thoughtImageUrl, alt: 'Image of a ballon of thought' } }]
 * ]
 */

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Give us your feedback</span>

                <CloseButton />
            </header>

            {!feedbackType ? (
                <div className="flex py-8 gap-2 w-full">
                    {Object.entries(feedbackTypes).map(([key, value]) => {
                        return (
                            <button
                                key={key}
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                onClick={() => setFeedbackType(key as FeedbackType)}
                                type="button"
                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{value.title}</span>
                            </button>
                        )
                    })}
                </div>
            ) : (
                <p>{feedbackType}</p>
            )}

            <footer className="text-xs text-neutral-400">
                Created with love ♥ by <a className="underline underline-offset-2" href="https://mhayk.com">Mhayk</a>
            </footer>
        </div>
    )
}