# Site — Dra. Camila Marconi 🦷

Site portfólio (uma página) para a cirurgiã-dentista Dra. Camila Marconi.
Tema escuro e dourado, inspirado na logo, com visual elegante estilo premium.

## Como abrir
Basta abrir o arquivo **`index.html`** no navegador (duplo clique).

## O que você PRECISA personalizar

1. **Logo real** — salve a imagem da logo como `assets/logo.png`.
   Enquanto não fizer isso, o site usa uma logo desenhada (`assets/logo.svg`) automaticamente.

2. **Endereço e horário** — na seção "Contato" do `index.html`.

3. **WhatsApp** — hoje está com o número de exemplo `5500000000000`. Troque pelo real
   (formato: 55 + DDD + número, ex.: `5511987654321`) em:
   - `js/script.js` (linha `const WHATSAPP`)
   - `index.html` (procure por `wa.me/5500000000000` e por `(00) 00000-0000`)

4. **Instagram** — hoje está como `@seuperfil`. Em `index.html`, troque
   `instagram.com/seuperfil` e `@seuperfil` pelo perfil real.

5. **Textos e serviços** — ajuste livremente os textos, números da faixa
   de destaques (+8 anos, +2.000 sorrisos…) e a lista de serviços no `index.html`.

6. **Fotos da galeria** — substitua os links das imagens (hoje são fotos de
   exemplo) por fotos reais do consultório/trabalhos.

## Estrutura
```
dentistacamila/
├── index.html          → conteúdo do site
├── css/style.css       → estilos (cores, layout)
├── js/script.js        → menu, animações, formulário WhatsApp
└── assets/
    ├── logo.png        → (você adiciona) logo real
    └── logo.svg        → logo desenhada (fallback)
```
