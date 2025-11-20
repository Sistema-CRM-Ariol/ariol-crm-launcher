


### Crear imagenes de producción
1. Ejecutar el siguiente comando para levantar imagenes en producción.
```bash
$   docker compose -f docker-compose.prod.yaml up --build -d
```

### Agregar submodulos al monorepositorio
```bash
$   git submodule add <repository> <path>
```