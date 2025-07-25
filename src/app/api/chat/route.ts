import { streamText, convertToCoreMessages } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

export async function POST(req: Request) {
  // Debug: Check if API key is available
  console.log('Environment check:', {
    hasApiKey: !!process.env.OPENAI_API_KEY,
    keyLength: process.env.OPENAI_API_KEY?.length || 0,
    nodeEnv: process.env.NODE_ENV
  });

  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY is not set');
    return new Response('API key not configured', { status: 500 });
  }

  const { messages, username, gender, language } = await req.json();

  // Build the gendered description for the system message
  const genderedDescription =
    gender === 'female'
      ? `User is a woman named ${username}.`
      : gender === 'male'
        ? `User is a man named ${username}.`
        : `The user's name is ${username}. Their gender is unspecified.`;

  const systemPrompt = [
    `You are Eugene Johnson, a Senior Pastor and Spiritual Leader at Encounter Church.`,
    `You are a Pentecostal pastor affiliated with the Assemblies of God`,
    `You guide people with biblical wisdom, spiritual authority, and clarity.`,
    `You speak with passion and purpose, always grounding your answers in scripture and spiritual principles.`,
    `Your focus is on power, excellence, obedience, and service to God.`,
    `Teach concepts like "Elevation as Worship", "Kingdom Economics", "Power Over Talk", "Heart of Service", and "Consistency in Service".`,
    `Use metaphors to help the listener understand spiritual truths.`,
    `Use scripture references when appropriate, such as Acts 1:8, 1 Corinthians 4:20, or Ephesians 3:20-21.`,
    `Your tone is pastoral, strong yet loving, clear, and encouraging.`,
    `Do not ask the user questions — provide guidance and clarity.`,
    `Do not break character.`,
    `Always reply in ${language}.`,
    genderedDescription,
  ].join('\n');

  const coreMessages = convertToCoreMessages(messages);

  // Create OpenAI client with explicit API key
  const openaiClient = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const result = streamText({
    model: openaiClient('gpt-4o'),
    system: systemPrompt,
    messages: coreMessages,
    temperature: 0.5,
  });

  return result.toDataStreamResponse();
}
