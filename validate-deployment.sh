#!/bin/bash

# Script de validación para Conga Pacifico deployment

echo "🔍 Verificando configuración de Conga Pacifico..."
echo ""

# Verificar que next.config.ts existe y tiene la configuración correcta
echo "1️⃣  Verificando next.config.ts..."
if grep -q "unoptimized: true" next.config.ts; then
    echo "   ✅ Optimización de imágenes deshabilitada"
else
    echo "   ❌ Falta la configuración de imágenes"
    exit 1
fi

if grep -q "d2ldmbozza14uy.cloudfront.net" next.config.ts; then
    echo "   ✅ CloudFront configurado en remotePatterns"
else
    echo "   ⚠️  CloudFront no está en remotePatterns"
fi

# Verificar que las imágenes existen
echo ""
echo "2️⃣  Verificando imágenes en public/images/..."
IMAGE_COUNT=$(ls -1 public/images/ | wc -l)
if [ $IMAGE_COUNT -gt 0 ]; then
    echo "   ✅ Encontradas $IMAGE_COUNT imágenes"
else
    echo "   ❌ No hay imágenes en public/images/"
    exit 1
fi

# Listar imágenes críticas
CRITICAL_IMAGES=("hero3.png" "dashboard-georeferenciacion.png" "logo-conga-dark.png")
for img in "${CRITICAL_IMAGES[@]}"; do
    if [ -f "public/images/$img" ]; then
        SIZE=$(du -h "public/images/$img" | cut -f1)
        echo "   ✅ $img ($SIZE)"
    else
        echo "   ❌ $img no encontrada"
    fi
done

# Verificar build
echo ""
echo "3️⃣  Compilando proyecto..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "   ✅ Build exitoso"
else
    echo "   ❌ Error en el build"
    exit 1
fi

# Verificar archivos estáticos generados
echo ""
echo "4️⃣  Verificando archivos estáticos..."
if [ -d ".next/static" ]; then
    STATIC_COUNT=$(find .next/static -type f | wc -l)
    echo "   ✅ $STATIC_COUNT archivos estáticos generados"
else
    echo "   ❌ Carpeta .next/static no encontrada"
    exit 1
fi

# Verificar GitHub workflow
echo ""
echo "5️⃣  Verificando GitHub Actions workflow..."
if [ -f ".github/workflows/deploy-to-cloudfront.yml" ]; then
    echo "   ✅ Workflow de deployment configurado"
else
    echo "   ❌ Workflow no encontrado"
    exit 1
fi

# Verificar documentación
echo ""
echo "6️⃣  Verificando documentación..."
if [ -f "DEPLOYMENT_CLOUDFRONT.md" ]; then
    echo "   ✅ Documentación disponible"
else
    echo "   ❌ Falta documentación"
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ VALIDACIÓN COMPLETA - Todo está configurado correctamente"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Próximos pasos:"
echo "   1. Configura los secretos en GitHub (Settings → Secrets)"
echo "   2. Haz push a main/master para iniciar deployment"
echo "   3. Verifica en https://d2ldmbozza14uy.cloudfront.net"
echo ""
echo "🔗 Referencias:"
echo "   - Docs: ./DEPLOYMENT_CLOUDFRONT.md"
echo "   - Workflow: ./.github/workflows/deploy-to-cloudfront.yml"
echo ""
