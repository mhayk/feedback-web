import { useState } from "react";

import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {
                feedbackSent ? (
                    <FeedbackTypeSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
                ) : (
                    <>
                        {!feedbackType ? (
                            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                        ) : (
                            <FeedbackContentStep
                                feedbackType={feedbackType}
                                onFeedbackRestartRequested={handleRestartFeedback}
                                onFeedbackSent={() => setFeedbackSent(true)}
                            />
                        )}
                    </>
                )
            }

            <footer className="text-xs text-neutral-400">
                Created with love ♥ by <a className="underline underline-offset-2" href="https://mhayk.com">Mhayk</a>
            </footer>
        </div >
    )
}