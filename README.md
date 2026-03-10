# WhatsApp Bot Landing - SaaS B2B Chile

Landing page de alta conversión para SaaS de WhatsApp Bot B2B. Construida con Astro, React, Tailwind CSS y Framer Motion.

## Estructura del Proyecto

```
saga/
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.astro        # Sección Hero completa
│   │   │   └── Typewriter.tsx    # Componente React con efecto typewriter
│   │   ├── Problem.astro          # Sección 2: Agitación del problema
│   │   ├── Comparison.astro       # Sección 3: Tabla comparativa de costos
│   │   ├── Features.astro        # Sección 4: Grid de funcionalidades
│   │   ├── Pricing.astro         # Sección 5: Plan de precios
│   │   └── Footer.astro          # Sección 6: CTA final
│   ├── layouts/
│   │   └── Layout.astro          # Layout base con meta tags SEO/Open Graph
│   ├── pages/
│   │   └── index.astro           # Página principal
│   └── styles/
│       └── global.css            # Import de Tailwind
├── public/
│   └── favicon.*                 # Favicon
├── astro.config.mjs              # Configuración de Astro
├── tailwind.config.*             # Configuración de Tailwind
└── package.json
```

## Secciones Implementadas

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **Hero** | Typewriter con Framer Motion en azul eléctrico + CTA WhatsApp |
| 2 | **Problem** | Agitación del problema (tono agresivo B2B) |
| 3 | **Comparison** | Tabla comparativa de costos Empleado vs WhatsApp Bot |
| 4 | **Features** | Grid de 3 funcionalidades (RAG, Seguimiento 48h, Filtrado) |
| 5 | **Pricing** | Plan Operativo Único (18.5 UF setup + 8 UF/mes) |
| 6 | **Footer** | CTA final con enlace a WhatsApp |

---

## Cómo Ejecutar el Proyecto

### 1. Instalación de Dependencias

```bash
cd saga
npm install
```

### 2. Ejecutar Servidor de Desarrollo

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:4321`

### 3. Build de Producción (Estático)

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `dist/`.

### 4. Previsualizar Build

```bash
npm run preview
```

---

### Configurar Open Graph

El archivo de configuración de meta tags está en `src/layouts/Layout.astro`.

**Para cambiar el título y descripción por defecto:**

```astro
const { 
  title = "Tu título personalizado",
  description = "Tu descripción personalizada"
} = Astro.props;
```

**Para cambiar la imagen de Open Graph:**

1. Coloca tu imagen en `public/og-image.png` (o el nombre que prefieras)
2. Actualiza la línea 7 en `src/layouts/Layout.astro`:

```astro
ogImage = "/og-image.png"
```

**Para usar una URL externa:**

```astro
ogImage = "https://tudominio.com/images/og-image.jpg"
```

---

## Tecnologías Utilizadas

- **Astro** - Framework de renderizado estático
- **React** - Interactividad (Islands architecture)
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones del Typewriter

---

