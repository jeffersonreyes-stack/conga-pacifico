# Despliegue de CloudFront con Terraform

Este directorio contiene la configuración de Terraform para desplegar una distribución de Amazon CloudFront que sirve contenido estático desde un bucket S3 existente, configurado con Origin Access Control (OAC) para seguridad.

## Prerrequisitos

1.  **Terraform**: Asegúrate de tener Terraform instalado (`v1.0+`).
2.  **Credenciales de AWS**: Debes tener configuradas tus credenciales de AWS (e.g., `aws configure` o variables de entorno `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY`).
3.  **Bucket S3 Existente**: El bucket definido en la variable `bucket_name` debe existir.

## Estructura de Archivos

*   `main.tf`: Contiene la lógica principal (Provider, Data Sources, Recursos CloudFront y S3 Policy).
*   `variables.tf`: Define las variables de entrada (`bucket_name`, `region`).
*   `outputs.tf`: Define los valores de salida (URL de CloudFront, ID de Distribución).

## Instrucciones de Despliegue

1.  **Inicializar Terraform**:
    Descarga los proveedores necesarios y prepara el directorio.
    ```bash
    terraform init
    ```

2.  **Revisar el Plan**:
    Verifica los cambios que se realizarán.
    ```bash
    terraform plan
    ```
    *Nota: Si deseas usar un nombre de bucket diferente al predeterminado (`conga-pacifico-web-5487`), puedes pasarlo como variable:*
    ```bash
    terraform plan -var="bucket_name=mi-otro-bucket"
    ```

3.  **Aplicar la Configuración**:
    Crea los recursos en AWS.
    ```bash
    terraform apply
    ```
    Confirma con `yes` cuando se te solicite.

4.  **Verificar**:
    Al finalizar, Terraform mostrará el `cloudfront_domain_name`. Accede a esa URL en tu navegador para ver el sitio desplegado.

## Notas Importantes

*   **Política del Bucket**: Terraform actualizará la política del bucket S3 para permitir acceso **exclusivamente** a esta distribución de CloudFront. Asegúrate de que esto sea lo deseado.
*   **SPA Routing**: Se han configurado respuestas de error personalizadas para códigos 403 y 404, redirigiendo a `/index.html` con un código 200, para soportar el enrutamiento de la aplicación Next.js (Single Page Application).
