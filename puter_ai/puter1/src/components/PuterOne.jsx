import { useState } from "react";

export default function PuterOne() {
    const [query, setQuery] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAsk = async () => {
        setLoading(true)
        console.log("hello");
        try {
            let res = await puter.ai.chat(`answer in 5 bullet points/${query}`, {
                model: 'gpt-5-nano',
            })
            console.log(res);
            let answer = res.message.content.split('-')
            console.log(answer);
            setAnswer(res?.message?.content)

        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    };

    console.log(answer);

    return (
        <div className="p-4 max-w-md mx-auto space-y-4">
            <h1 className="text-xl font-bold">Ask GPT-5 with Puter</h1>

            <input
                type="text"
                placeholder="Type your question..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border rounded w-full p-2"
            />

            <button
                onClick={handleAsk}
                disabled={loading}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                {loading ? "Thinking..." : "Ask"}
            </button>

            {answer && (
                <div className="p-3 border rounded bg-gray-50">
                    <ul className="list-disc pl-5 space-y-1">
                        {answer
                            .split("\n")
                            .filter((line) => line.trim() !== "")
                            .map((line, idx) => (
                                <li key={idx}>{line.replace(/^- /, "")}</li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
