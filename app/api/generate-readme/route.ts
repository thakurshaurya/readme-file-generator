import { NextRequest, NextResponse } from "next/server";
import {
    buildFallbackReadme,
    buildReadmePrompt,
    normalizeReadmePayload,
    type ReadmeGenerationPayload,
} from "../apiMain";

export async function POST(request: NextRequest) {
    try {
        const payload = (await request.json()) as Partial<ReadmeGenerationPayload> | undefined;
        const safePayload = normalizeReadmePayload(payload);
        const prompt = buildReadmePrompt(safePayload);

        const apiKey = process.env.GROK_API_KEY?.trim();

        if (!apiKey) {
            return NextResponse.json(
                {
                    success: true,
                    markdown: buildFallbackReadme(safePayload),
                    source: "fallback",
                },
                { status: 200 },
            );
        }

        const response = await fetch(process.env.GROK_API_URL || "https://api.x.ai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: process.env.GROK_MODEL || "grok-3-mini",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            throw new Error(`Grok API request failed with status ${response.status}`);
        }

        const data = (await response.json()) as {
            choices?: Array<{ message?: { content?: string } }>;
        };

        const markdown = data.choices?.[0]?.message?.content?.trim() || buildFallbackReadme(safePayload);

        return NextResponse.json(
            {
                success: true,
                markdown,
                source: "grok",
            },
            { status: 200 },
        );
    } catch (error) {
        const fallbackMessage = error instanceof Error ? error.message : "Unknown error";

        return NextResponse.json(
            {
                success: true,
                markdown: buildFallbackReadme(normalizeReadmePayload(undefined)),
                source: "fallback",
                error: fallbackMessage,
            },
            { status: 200 },
        );
    }
}
