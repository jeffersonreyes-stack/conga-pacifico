# ⚡ Referencia Rápida - CloudFront Deployment

## 🎯 El Problema (Resuelto)
```
❌ ANTES: https://d2ldmbozza14uy.cloudfront.net → Imágenes no cargaban
✅ AHORA: Imágenes cargan correctamente
```

## 🔧 ¿Qué Se Cambió?

### 1. next.config.ts
```typescript
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  // ← CRÍTICO: Deshabilita optimización
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2ldmbozza14uy.cloudfront.net',  // ← CRÍTICO: CloudFront
      },
    ],
  },
};
```

### 2. GitHub Actions Workflow
Deployment automático en cada `git push`:
```bash
→ Compila Next.js
→ Sincroniza a S3
→ Invalida CloudFront
→ Listo en 2-3 minutos
```

## 📋 Próximos Pasos (Orden Importante)

```
1️⃣  Lee: ./CLOUDFRONT_DEPLOYMENT_SETUP.md
    └─ Todo lo que necesitas saber

2️⃣  AWS: Crear IAM user con acceso S3 + CloudFront
    └─ Obtén: AccessKeyId + SecretAccessKey

3️⃣  GitHub: Settings → Secrets → Agrega 4 valores
    ├─ AWS_ACCESS_KEY_ID
    ├─ AWS_SECRET_ACCESS_KEY
    ├─ S3_BUCKET_NAME
    └─ CLOUDFRONT_DISTRIBUTION_ID

4️⃣  Git: Haz push de los cambios
    ```bash
    git add .
    git commit -m "✨ Fix: CloudFront deployment"
    git push origin main
    ```

5️⃣  Verifica:
    └─ https://d2ldmbozza14uy.cloudfront.net
    └─ Abre DevTools (F12) → Network
    └─ Todas las imágenes con status 200 ✓
```

## 🔗 Archivos Importantes

| Archivo | Propósito |
|---------|-----------|
| `next.config.ts` | Configuración Next.js (MODIFICADO) |
| `.github/workflows/deploy-to-cloudfront.yml` | Deployment automático (NUEVO) |
| `CLOUDFRONT_DEPLOYMENT_SETUP.md` | Guía completa (NUEVO) |
| `validate-deployment.sh` | Test local (NUEVO) |
| `aws-s3-bucket-policy.json` | Política S3 (NUEVO) |
| `aws-iam-policy.json` | Política IAM (NUEVO) |

## 🚀 Comandos Útiles

```bash
# Validar configuración localmente
./validate-deployment.sh

# Build local
npm run build

# Servidor local
npm run start

# Limpiar caché
rm -rf .next

# Deploy manual (si tienes AWS CLI)
npm run build && \
aws s3 sync ./public s3://BUCKET/public --delete && \
aws s3 sync ./.next/static s3://BUCKET/_next/static --delete && \
aws cloudfront create-invalidation --distribution-id DIST-ID --paths "/*"
```

## ✅ Checklist Antes de Hacer Push

- [ ] Leí `CLOUDFRONT_DEPLOYMENT_SETUP.md`
- [ ] Creé IAM user en AWS
- [ ] Agregué 4 secretos en GitHub
- [ ] Ejecuté `./validate-deployment.sh` (todo ✓)
- [ ] Hice commit de los cambios
- [ ] Hice `git push` a main/master

## 🎯 Resultado Esperado

Después de hacer push:

```
GitHub Actions:
✓ Compilación exitosa
✓ Archivos sincronizados a S3
✓ CloudFront invalidado
⏱️  Tiempo: 2-3 minutos

En el navegador:
✓ Hero image visible
✓ Dashboard screenshot visible
✓ Logos de partners visible
✓ DevTools Network: status 200 para todas las imágenes
```

## 🆘 Problemas Rápidos

| Problema | Solución |
|----------|----------|
| Imágenes aún no cargan | Invalida cache manualmente (ver SETUP.md) |
| Error 403 | Verifica S3 bucket policy |
| Error 404 | Verifica que archivos están en S3 |
| Workflow falla | Revisa GitHub Secrets (mayúsculas exactas) |

## 📞 Más Información

- **Documentación completa:** `CLOUDFRONT_DEPLOYMENT_SETUP.md`
- **Referencia técnica:** `DEPLOYMENT_CLOUDFRONT.md`
- **Validación local:** `./validate-deployment.sh`

---

**Estado:** ✅ Configuración lista para usar  
**Última actualización:** 2026-02-03  
**Proyecto:** Conga Pacifico
