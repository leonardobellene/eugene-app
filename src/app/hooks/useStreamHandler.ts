import { useRef, useCallback } from 'react';

export const useStreamHandler = (
  updateLastMessage: (content: string) => void,
  hasStartedStreamingRef: React.MutableRefObject<boolean>
) => {
  const partialRef = useRef('');

  const processStream = useCallback(async (reader: ReadableStreamDefaultReader<string>) => {
    partialRef.current = '';
    hasStartedStreamingRef.current = false;

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      if (!value) continue;

      const lines = value.split('\n').filter(Boolean);

      for (const line of lines) {
        if (line.startsWith('0:')) {
          if (!hasStartedStreamingRef.current) {
            hasStartedStreamingRef.current = true;
          }
          try {
            const token = JSON.parse(line.slice(2));
            partialRef.current += token;
            updateLastMessage(partialRef.current);
          } catch (err) {
            console.error('JSON parse error:', err);
          }
        }
      }
    }
  }, [updateLastMessage, hasStartedStreamingRef]);

  return { processStream };
};
