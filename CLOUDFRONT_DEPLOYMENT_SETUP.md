# 🚀 Configuración de Deployment - Conga Pacifico en CloudFront

## 📋 Resumen del Problema y Solución

### ❌ Problema Identificado
- Las imágenes **no se cargaban** en https://d2ldmbozza14uy.cloudfront.net
- Localmente (localhost:3000) las imágenes funcionaban correctamente
- Esto indica un problema de configuración de ruta o CORS

### ✅ Solución Implementada

#### 1. **Actualización de Next.js Config**
Se modificó `next.config.ts` para:
- Deshabilitar optimización de imágenes (mejor para CDN)
- Agregar CloudFront como dominio permitido
- Configurar remote patterns correctamente

#### 2. **GitHub Actions Workflow**
Se creó `.github/workflows/deploy-to-cloudfront.yml` para:
- Compilar automáticamente el proyecto
- Sincronizar archivos a S3
- Invalidar caché de CloudFront
- Mantener headers de caché apropiados

#### 3. **Documentación y Validación**
- `DEPLOYMENT_CLOUDFRONT.md` - Documentación técnica completa
- `validate-deployment.sh` - Script de validación local
- Políticas IAM y S3 configurables

---

## 🔧 Instalación y Configuración

### Paso 1: Preparar AWS

#### a) Crear o usar Bucket S3 existente
```bash
# Crear nuevo bucket (opcional)
aws s3 mb s3://conga-pacifico-prod --region us-east-1
```

#### b) Configurar Bucket Policy
1. Ve a AWS Console → S3 → Tu bucket → Permissions → Bucket Policy
2. Copia el contenido de `aws-s3-bucket-policy.json`
3. Reemplaza `BUCKET-NAME` con tu nombre de bucket
4. Pega y guarda

#### c) Crear IAM User para GitHub
```bash
# Crear usuario programático
aws iam create-user --user-name conga-pacifico-deployment

# Crear access key
aws iam create-access-key --user-name conga-pacifico-deployment

# Adjuntar política personalizada
aws iam put-user-policy \
  --user-name conga-pacifico-deployment \
  --policy-name CongaPacificoDeployment \
  --policy-document file://aws-iam-policy.json
```

**Nota:** Guarda el `AccessKeyId` y `SecretAccessKey` - los necesitarás pronto

#### d) Obtener ID de CloudFront
```bash
# Listar distribuciones
aws cloudfront list-distributions --query 'DistributionList.Items[*].[Id,DomainName]'

# Busca tu distribución (d2ldmbozza14uy.cloudfront.net)
# El ID está en la primera columna
```

### Paso 2: Configurar GitHub Secrets

1. Ve a GitHub → Tu repositorio
2. Settings → Secrets and variables → Actions
3. Crea estos 4 secretos:

| Secreto | Valor |
|---------|-------|
| `AWS_ACCESS_KEY_ID` | De tu IAM user (paso c) |
| `AWS_SECRET_ACCESS_KEY` | De tu IAM user (paso c) |
| `S3_BUCKET_NAME` | Nombre exacto del bucket (ej: `conga-pacifico-prod`) |
| `CLOUDFRONT_DISTRIBUTION_ID` | De CloudFront (paso d, solo el ID) |

**Ejemplo:**
```
AWS_ACCESS_KEY_ID = AKIA2ABC123...
AWS_SECRET_ACCESS_KEY = wJalrXUt9PKEY6...
S3_BUCKET_NAME = conga-pacifico-prod
CLOUDFRONT_DISTRIBUTION_ID = E3AB12CD34EF5
```

### Paso 3: Verificar Configuración Localmente

```bash
cd /home/jeffer/proyectos/conga-pacifico

# Ejecutar validación
./validate-deployment.sh
```

Deberías ver:
```
✅ VALIDACIÓN COMPLETA - Todo está configurado correctamente
```

### Paso 4: Hacer Deploy

```bash
# Opción A: Hacer push a main/master
git add .
git commit -m "✨ Fix: Configuración de CloudFront para imágenes"
git push origin main

# Opción B: Manualmente (si tienes permisos AWS locales)
npm run build
aws s3 sync ./public s3://conga-pacifico-prod/public --delete
aws s3 sync ./.next/static s3://conga-pacifico-prod/_next/static --delete
aws cloudfront create-invalidation --distribution-id E3AB12CD34EF5 --paths "/*"
```

---

## 🔍 Verificar que Todo Funciona

### 1. Revisar GitHub Actions (si usaste git push)
1. Ve a GitHub → Tu repositorio → Actions
2. Deberías ver un workflow corriendo "Deploy to AWS S3 & CloudFront"
3. Espera a que se complete (verde = éxito, rojo = error)

### 2. Validar en el Navegador
```
https://d2ldmbozza14uy.cloudfront.net
```

Abre DevTools (F12) y verifica:
- ✅ Network tab: todas las imágenes con status 200
- ✅ Hero image visible
- ✅ Logo de Conga Pacifico
- ✅ Dashboard screenshot
- ✅ Logos de CVC, DAGMA, Alcaldía

### 3. Validar Headers de Caché
```bash
curl -I https://d2ldmbozza14uy.cloudfront.net/images/hero3.png | grep -i cache

# Esperado:
# Cache-Control: public, max-age=31536000, immutable
```

### 4. Limpiar Caché de CloudFront (si es necesario)
```bash
aws cloudfront create-invalidation \
  --distribution-id E3AB12CD34EF5 \
  --paths "/*"
```

---

## 🐛 Troubleshooting

### Las imágenes aún no aparecen

**1. Verificar permisos S3:**
```bash
aws s3 ls s3://conga-pacifico-prod/public/images/
```

**2. Verificar origen en CloudFront:**
- CloudFront Console → Tu distribución → Origins
- Origen debe apuntar al bucket S3
- Origin domain: `conga-pacifico-prod.s3.us-east-1.amazonaws.com`

**3. Verificar cache invalidation:**
```bash
aws cloudfront list-invalidations --distribution-id E3AB12CD34EF5
```

**4. Limpiar caché local del navegador:**
- Abre DevTools (F12)
- Right-click en reload → "Empty cache and hard reload"
- O: Ctrl+Shift+Delete → Clear browsing data

### Error 403 en imágenes

**Solución:**
```bash
# Verificar bucket policy
aws s3api get-bucket-policy --bucket conga-pacifico-prod

# Debe tener "Principal": "*" y "Effect": "Allow"
```

### Error 404 en imágenes

**Causa:** Archivos no fueron sincronizados correctamente

**Solución:**
```bash
# Resyncing manual
npm run build
aws s3 sync ./public s3://conga-pacifico-prod/public --delete --acl public-read
aws cloudfront create-invalidation --distribution-id E3AB12CD34EF5 --paths "/*"
```

---

## 📚 Archivos Generados

```
conga-pacifico/
├── .github/workflows/
│   └── deploy-to-cloudfront.yml      ← GitHub Actions workflow
├── DEPLOYMENT_CLOUDFRONT.md          ← Documentación técnica
├── CLOUDFRONT_DEPLOYMENT_SETUP.md    ← Este archivo
├── validate-deployment.sh            ← Script de validación
├── aws-s3-bucket-policy.json         ← Política S3
├── aws-iam-policy.json               ← Política IAM
└── next.config.ts                    ← Configuración Next.js (actualizado)
```

---

## 🔐 Seguridad

### Recomendaciones:

1. **No commitees secretos:**
   - AWS_ACCESS_KEY_ID y AWS_SECRET_ACCESS_KEY van en GitHub Secrets
   - Nunca en archivos `.env` que se commiteen

2. **Rotación de credenciales:**
   ```bash
   # Cada 90 días
   aws iam create-access-key --user-name conga-pacifico-deployment
   # Actualiza en GitHub Secrets
   # Elimina la key anterior
   aws iam delete-access-key --user-name conga-pacifico-deployment --access-key-id AKIA...
   ```

3. **Usar IAM roles en lugar de credenciales** (producción):
   - Más seguro que credenciales de usuario
   - Requiere configuración más avanzada

---

## 📞 Soporte

Si tienes problemas:

1. **Revisa el workflow:** GitHub → Actions → El workflow fallido
2. **Revisa logs AWS:**
   ```bash
   aws cloudfront get-invalidation --distribution-id E3AB12CD34EF5 --id $(aws cloudfront list-invalidations --distribution-id E3AB12CD34EF5 --query 'InvalidationList.Items[0].Id' --output text)
   ```
3. **Verifica bucket S3:**
   ```bash
   aws s3 ls s3://conga-pacifico-prod/ --recursive
   ```

---

## ✨ Próximos Pasos Opcionales

- [ ] Configurar SSL/TLS en CloudFront (ya debería estar)
- [ ] Agregar compresión gzip en CloudFront
- [ ] Configurar alertas de CloudFront
- [ ] Implementar versionamiento de assets
- [ ] Agregar logs de acceso a S3

---

**¡Listo!** 🎉 Tu sitio Conga Pacifico debería estar funcionando correctamente en CloudFront con todas las imágenes cargando.
