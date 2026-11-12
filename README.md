# Azúcar Bajo Control — Landing + Quiz (Next.js)

Site de venda do ebook **Glucosa en Equilibrio** (100 receitas) para o mercado mexicano.

## O que tem
- `app/page.js` — landing de venda completa (espanhol MX)
- `app/quiz/page.js` — quiz de entrada (16 perguntas) em `/quiz`
- `app/globals.css` — design system

## IMPORTANTE: trocar o link de pagamento
Em **dois arquivos** (`app/page.js` e `app/quiz/page.js`) troque:
```js
const CHECKOUT_URL = "https://pago.mundipay.com/TU-LINK-AQUI";
```
pelo link de checkout do seu produto na MundiPay.

## Rodar local
```bash
npm install
npm run dev
```

## Subir no GitHub (no seu Claude Code / terminal)
```bash
git init
git add .
git commit -m "site azucar bajo control"
git branch -M main
git remote add origin https://github.com/dimasricsilva7/Glucosa-en-Equilibrio.git
git push -u origin main
```
Depois é só conectar o repo na Vercel (ou já está no ar pelo deploy direto).
