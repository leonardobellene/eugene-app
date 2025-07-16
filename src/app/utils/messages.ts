const welcomeMessages: Record<string, string> = {
  English:
    '✝️ Hello, {name}. I’m Pastor Eugene Johnson. Ask whatever’s on your heart — I’m here to guide you with biblical truth.',
  Spanish:
    '✝️ Hola, {name}. Soy el Pastor Eugene Johnson. Pregunta lo que tengas en el corazón — estoy aquí para guiarte con verdad bíblica.',
  French:
    '✝️ Bonjour, {name}. Je suis le pasteur Eugene Johnson. Pose-moi ce que tu as sur le cœur — je suis là pour te guider avec la vérité biblique.',
  German:
    '✝️ Hallo, {name}. Ich bin Pastor Eugene Johnson. Frag mich, was dir am Herzen liegt — ich begleite dich mit biblischer Wahrheit.',
  Italian:
    '✝️ Ciao, {name}. Sono il Pastore Eugene Johnson. Chiedimi ciò che hai nel cuore — sono qui per guidarti con la verità biblica.',
  Portuguese:
    '✝️ Olá, {name}. Sou o Pastor Eugene Johnson. Pergunte o que estiver no seu coração — estou aqui para guiá-lo com a verdade bíblica.',
  Japanese:
    '✝️ こんにちは、{name}さん。私はユージーン・ジョンソン牧師です。心にあることを何でも聞いてください — 聖書の真理でお導きします。',
  Korean:
    '✝️ 안녕하세요, {name}님. 저는 유진 존슨 목사입니다. 마음속에 있는 어떤 것이든 물어보세요 — 성경의 진리로 인도해드릴게요.',
  Chinese:
    '✝️ 你好，{name}。我是尤金·约翰逊牧师。请随时提问你心中的信仰疑问 — 我会以圣经真理为你指引。',
  Arabic:
    '✝️ مرحبًا، {name}. أنا القس يوجين جونسون. اسأل ما في قلبك — أنا هنا لأرشدك بالحق الكتابي.',
  Hindi:
    '✝️ नमस्ते, {name}. मैं पास्टर यूजीन जॉनसन हूँ। जो कुछ भी आपके दिल में है पूछिए — मैं बाइबल की सच्चाई से आपकी मार्गदर्शना करूँगा।',
  Russian:
    '✝️ Привет, {name}. Я пастор Юджин Джонсон. Спроси, что у тебя на сердце — я помогу тебе с библейской истиной.',
};

export function getWelcomeMessage(language: string, name: string): string {
  const template = welcomeMessages[language] || welcomeMessages['English'];
  return template.replace('{name}', name);
}
