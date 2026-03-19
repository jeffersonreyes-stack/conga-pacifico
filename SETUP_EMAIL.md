# Configuración del Sistema de Envío de Emails

## ✅ Cambios Implementados

Se ha implementado un sistema de envío de emails automático que permite que los datos del formulario de contacto se envíen a **proyectos@congapacifico.com**.

### Archivos Creados/Modificados:

1. **`app/api/contact/route.ts`** - Endpoint API que maneja el envío de correos
2. **`components/ContactForm.tsx`** - Componente actualizado con lógica de envío
3. **`.env.local`** - Archivo de configuración (necesita tu API key)

---

## 🔧 Configuración Requerida

### Paso 1: Crear Cuenta en Resend

1. Ve a https://resend.com
2. Crea una cuenta gratuita (o inicia sesión si ya tienes una)
3. Ve a la sección **API Keys**
4. Copia tu clave API

### Paso 2: Configurar Variable de Entorno

Abre `.env.local` en la raíz del proyecto y reemplaza `tu_clave_api_aqui` con tu clave API:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

### Paso 3: Verificar Dominio (Importante para Producción)

En desarrollo local, Resend permite enviar desde cualquier dominio. Para producción:

1. Ve a tu dashboard de Resend
2. Ve a **Domains**
3. Agrega `congapacifico.com` como dominio
4. Sigue las instrucciones para verificar DNS
5. Una vez verificado, podrás usar `noreply@congapacifico.com` como remitente

---

## 📧 Cómo Funciona

### Flujo del Formulario:

1. Usuario completa el formulario en `/contacto`
2. Al hacer clic en "Enviar Solicitud", los datos se envían a `/api/contact`
3. La API valida los datos
4. El servidor envía un email a `proyectos@congapacifico.com` usando Resend
5. Se muestra un mensaje de éxito o error al usuario

### Email Enviado Contiene:

- Nombre del cliente
- Empresa/Organización
- Correo de contacto
- Teléfono (si lo proporcionó)
- Mensaje/Detalles del requerimiento
- Hora y fecha del envío

---

## 🧪 Probar Localmente

```bash
# 1. Asegúrate de tener configurada la clave API en .env.local
# 2. Inicia el servidor de desarrollo
npm run dev

# 3. Ve a http://localhost:3000/contacto
# 4. Completa y envía el formulario
# 5. Deberías ver un mensaje de éxito
# 6. Verifica tu email en proyectos@congapacifico.com
```

---

## 📦 Dependencias Instaladas

```json
"resend": "^3.x.x"
```

Resend es una librería moderna para envío de emails en Node.js/Next.js que:
- ✅ Es fácil de usar
- ✅ Tiene plan gratuito
- ✅ Incluye estadísticas de envío
- ✅ Es confiable y rápido

---

## ⚠️ Solución de Problemas

### El formulario no envía correos

**Problema:** `RESEND_API_KEY is not defined`

**Solución:**
- Verifica que `.env.local` existe en la raíz del proyecto
- Verifica que contiene `RESEND_API_KEY=tu_clave_aqui`
- Reinicia el servidor dev (`npm run dev`)

### No recibo los correos

**Problema:** El correo llega pero se ve como spam

**Solución:**
- Verifica que hayas confirmado el dominio en Resend (ver Paso 3 arriba)
- En desarrollo, usa direcciones de email reales para probar

**Problema:** No llega ningún correo

**Solución:**
- Verifica que la API key sea válida en Resend dashboard
- Revisa los logs en `https://resend.com/emails` para ver si hay errores
- Asegúrate de que el formulario está completo (campos requeridos)

---

## 🚀 Deploy a Producción

### Con Vercel (recomendado):

1. Push los cambios a GitHub
2. En Vercel dashboard, agrega la variable de entorno:
   - Nombre: `RESEND_API_KEY`
   - Valor: Tu clave API de Resend
3. Redeploy

### Con CloudFront (AWS S3):

Para que esto funcione en CloudFront, necesitarías una función Lambda que maneje el endpoint `/api/contact`.

Alternativa: Usa Vercel + CloudFront para servir solo los static files.

---

## 📝 Notas

- Los datos del formulario **no se guardan** en base de datos, solo se envían por email
- Si deseas guardar los datos, necesitarías integrar una base de datos (MongoDB, PostgreSQL, etc.)
- El email HTML tiene un diseño profesional pero puedes personalizarlo en `app/api/contact/route.ts`

---

**¿Necesitas ayuda con la configuración? Pregunta en cualquier momento.**
