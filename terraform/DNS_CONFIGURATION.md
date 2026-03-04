# Configuración DNS - Conga Pacifico

Este documento detalla la configuración DNS verificada y recomendada para `congapacifico.com`.

## 1. Correo Electrónico (Google Workspace)

**Estado:** ✅ Verificado y Correcto (Método Simplificado)

| Tipo | Host / Nombre | Valor / Destino | Prioridad | Notas |
|:---:|:---:|:---:|:---:|---|
| **MX** | `@` | `smtp.google.com` | `1` | Método moderno recomendado por Google (desde 2023). |
| **TXT** | `@` | `v=spf1 include:_spf.google.com ~all` | N/A | Registro SPF para autorizar envíos desde Google. |

> **Nota:** Ya no es necesario utilizar los 5 registros antiguos (`aspmx.l.google.com`, etc.) a menos que tengas requisitos de legado específicos. La configuración actual es la óptima.

## 2. Seguridad Recomendada (Opcional)

Actualmente **no se detectó** un registro DMARC. Se recomienda agregar uno para proteger el dominio contra suplantación de identidad (spoofing).

### Registro DMARC Recomendado (Básico)

| Tipo | Host / Nombre | Valor | Notas |
|:---:|:---:|:---:|---|
| **TXT** | `_dmarc` | `v=DMARC1; p=none; rua=mailto:admin@congapacifico.com` | Modo "monitoreo" (p=none). No bloquea correos, solo reporta. |

## 3. Sitio Web (CloudFront)

| Tipo | Host / Nombre | Valor / Destino |
|:---:|:---:|:---:|
| **A** | `www` | `d2ldmbozza14uy.cloudfront.net` |
| **A** | `@` | `d2ldmbozza14uy.cloudfront.net` (o Alias) |
