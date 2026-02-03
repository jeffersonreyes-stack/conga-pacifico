# Deployment Configuration para CloudFront

## Problema Resuelto ✅

Las imágenes no se mostraban cuando se cargaba desde `d2ldmbozza14uy.cloudfront.net` porque:
- Next.js optimiza imágenes por defecto, lo que puede causar conflictos con CDN
- Las rutas de imágenes no estaban configuradas correctamente para un dominio diferente
- Faltaba configuración de CORS y remote patterns

## Solución Implementada

### 1. Actualización de `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  // Deshabilita optimización de Next.js (mejor para CloudFront)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2ldmbozza14uy.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

export default nextConfig;
```

### 2. GitHub Actions Workflow

Se ha creado `.github/workflows/deploy-to-cloudfront.yml` que:

- ✅ Construye el proyecto Next.js
- ✅ Sincroniza archivos públicos a S3
- ✅ Sincroniza archivos estáticos de Next.js a S3
- ✅ Invalida el caché de CloudFront
- ✅ Configura cache headers apropiados

### 3. Configuración Requerida en GitHub Secrets

Antes de que el workflow funcione, debes configurar los siguientes secretos en GitHub:

```
AWS_ACCESS_KEY_ID              - Tu clave de acceso AWS
AWS_SECRET_ACCESS_KEY          - Tu clave secreta AWS
S3_BUCKET_NAME                 - Nombre del bucket S3 (ej: conga-pacifico-prod)
CLOUDFRONT_DISTRIBUTION_ID     - ID de la distribución CloudFront
```

### 4. Pasos para Configurar

#### a) En AWS Console:

1. Asegúrate que tu bucket S3 está configurado como origen de CloudFront
2. Obtén el ID de tu distribución CloudFront
3. Crea credenciales IAM con permisos para:
   - S3: `s3:*` en tu bucket específico
   - CloudFront: `cloudfront:CreateInvalidation`

#### b) En GitHub Repository:

1. Ve a Settings → Secrets and variables → Actions
2. Crea los 4 secretos mencionados arriba
3. Haz push a `main` o `master` para iniciar el deployment

### 5. Estructura de Deployment

```
S3 Bucket:
├── public/                    → Archivos estáticos públicos
├── _next/static/              → Archivos estáticos de Next.js (CSS, JS)
└── *.html                      → Páginas HTML generadas
```

CloudFront sirve el contenido con:
- **Cache Headers** para `_next/static/`: 1 año (inmutable)
- **Cache Headers** para HTML: 1 hora (actualizaciones frecuentes)

### 6. Cómo Probar Localmente

```bash
# Build
npm run build

# Simular servidor de producción
npm run start

# Verifica que las imágenes cargan en http://localhost:3000
```

### 7. Troubleshooting

Si aún hay problemas con imágenes:

```bash
# Limpia caché de Next.js
rm -rf .next

# Rebuild
npm run build

# Verifica que las imágenes están en public/images/
ls -la public/images/
```

### 8. Verificación en CloudFront

Después del deployment:

1. Abre https://d2ldmbozza14uy.cloudfront.net
2. Abre DevTools (F12) → Network tab
3. Recarga la página (Ctrl+Shift+R para hard reload)
4. Verifica que las imágenes devuelven status 200 (no 403/404)

## Cambios Realizados

- ✅ Actualizado: `next.config.ts`
- ✅ Creado: `.github/workflows/deploy-to-cloudfront.yml`
- ✅ Creado: Este archivo de documentación

## Próximos Pasos

1. Configura los secretos en GitHub
2. Haz un push para iniciar el workflow
3. Verifica que el deployment fue exitoso
4. Accede a https://d2ldmbozza14uy.cloudfront.net y verifica las imágenes
