# Site — Dra. Camila Marconi 🦷

Site portfólio (uma página) para a cirurgiã-dentista Dra. Camila Marconi.
Tema escuro e dourado, inspirado na logo, com visual elegante estilo premium.

## Como abrir
Basta abrir o arquivo **`index.html`** no navegador (duplo clique).

## O que você PRECISA personalizar

1. **Logo real** — salve a imagem da logo como `assets/logo.png`.
   Enquanto não fizer isso, o site usa uma logo desenhada (`assets/logo.svg`) automaticamente.

2. **Foto da Dra. Camila** — salve como `assets/dra-camila.jpg` (na seção "Sobre").
   Se não existir, aparece uma foto genérica.

3. **Número do WhatsApp** — troque `5500000000000` pelo número real
   (formato: 55 + DDD + número, ex.: `5511987654321`) em:
   - `js/script.js` (linha `const WHATSAPP`)
   - `index.html` (procure por `wa.me/5500000000000`)

4. **Telefone, endereço e horário** — na seção "Contato" do `index.html`.

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
    ├── logo.svg        → logo desenhada (fallback)
    └── dra-camila.jpg  → (você adiciona) foto da doutora
```

Instagram configurado: [@dracamilamarconi_](https://www.instagram.com/dracamilamarconi_)
