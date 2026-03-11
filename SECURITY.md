# Seguridad del Portafolio

Este proyecto es un frontend estatico (React + Vite).  
La proteccion real contra DDoS, bots y abuso se aplica principalmente en la capa de dominio/hosting.

## Lo que ya se implemento en el codigo

- Validacion estricta del formulario de contacto.
- Honeypot anti-bot (`website`) para bloquear bots simples.
- Cooldown entre envios para reducir spam automatizado.
- Tiempo minimo en pagina antes de enviar el formulario.
- Longitudes maximas y sanitizacion basica de entradas.
- Politicas de seguridad en `index.html`:
  - Content Security Policy (CSP)
  - Referrer Policy
  - X-Content-Type-Options
  - X-Frame-Options
  - Permissions-Policy
- Security headers en entorno de servidor/preview de Vite.

## Checklist obligatorio antes de pasar a dominio

## 1) DNS/CDN/WAF (muy importante)

- Poner el dominio detras de Cloudflare (proxy activo).
- Activar:
  - WAF Managed Rules
  - Bot Fight Mode / Super Bot Fight Mode
  - DDoS protection (activado por defecto en Cloudflare)
- Crear Rate Limiting:
  - Limitar POST frecuentes a rutas de formulario.
  - Bloquear bursts de trafico anormal por IP/ASN.
- Bloquear paises/ASNs si detectas trafico malicioso recurrente.

## 2) SSL/TLS

- HTTPS obligatorio.
- Redireccion 301 de HTTP a HTTPS.
- TLS moderno (1.2+).

## 3) Correo (evitar suplantacion)

- Configurar SPF, DKIM y DMARC en tu dominio.
- Usar cuenta exclusiva para formularios (no mezclar con correo personal principal).
- Crear filtros anti-spam por asunto/remitente/frecuencia.

## 4) WhatsApp y enlaces

- Usar enlace oficial `wa.me` (ya esta aplicado).
- Revisar periodicamente que no existan cambios no autorizados en los links del sitio.

## 5) Monitoreo

- Cloudflare Analytics + alertas de picos de trafico.
- Log de envios de formulario y alertas por volumen.
- Backup del sitio y revision de integridad tras cambios.

## 6) Futuro recomendado (nivel mas alto)

- Mover formulario a backend propio (Node/Express o serverless) con:
  - Rate limit por IP y fingerprint
  - CAPTCHA (Cloudflare Turnstile o hCaptcha)
  - Bloqueo por reputacion/IP y ASN
  - Validacion/sanitizacion server-side
  - Colas y alertas de abuso

---

Si quieres, el siguiente paso es que te deje un endpoint backend seguro para reemplazar FormSubmit y tener control total anti-spam.
