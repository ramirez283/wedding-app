# 📋 CONTEXTO COMPLETO - My Invitia

## Inicio del Proyecto

### Requerimiento Original del Usuario
"Necesito hacer un proyecto para mostrar una invitación de boda digital. La página principal es para mostrar nuestro servicio en una SaaS con React, y después tener varias páginas para la invitación que se requiera."

---

## DECISIONES TOMADAS EN LA CONVERSACIÓN

### 1️⃣ Dirección del Proyecto
- **Inicialmente:** Plan full-stack SaaS (React + Node.js + MongoDB + autenticación)
- **Decisión Usuario:** Simplificar a MVP estático primero
- **FINAL:** Solo React estático sin backend (agregar backend después si es necesario)

### 2️⃣ Nombre del Proyecto
**My Invitia** ✅

### 3️⃣ Funcionalidades Prioritarias
El usuario seleccionó:
- ✅ Crear invitaciones personalizadas
- ✅ Gestión de asistentes (RSVP)
- ✅ Temas/templates predefinidos
- ✅ Galería de fotos de la boda
- ✅ Información de ubicación
- ❌ Planes/pricing (agregado después)

### 4️⃣ Información en cada Invitación
- ✅ Nombres de novios
- ✅ Fecha y hora
- ✅ Ubicación/Dirección
- ✅ Foto de pareja
- ✅ Galería de fotos
- ✅ Código de vestimenta
- ✅ **Mesa de regalos**
- ✅ **Itinerario**
- ✅ **Cuenta regresiva**
- ✅ **Canción de la pareja**

### 5️⃣ Secciones de Landing Page
- ✅ Hero section (título + CTA)
- ✅ ¿Cómo funciona? (3-4 pasos)
- ✅ Ejemplos de invitaciones
- ✅ Características principales
- ❌ Planes/Pricing (MVP v1)
- ❌ Testimonios (MVP v1)

### 6️⃣ Diseño
**Moderno con animaciones** ✅

### 7️⃣ Ejemplos de Invitaciones
**3-5 ejemplos con diferentes templates/estilos** ✅

---

## TECH STACK FINAL

| Componente | Tecnología |
|-----------|-----------|
| **Framework** | React 18 |
| **Bundler** | Vite (super rápido) |
| **Lenguaje** | TypeScript |
| **Estilos** | Tailwind CSS |
| **Animaciones** | Framer Motion |
| **Navegación** | React Router v6 |
| **Fechas** | dayjs |
| **Backend** | ❌ Ninguno (MVP estático) |
| **BD** | ❌ Ninguna (JSON hardcodeado) |
| **Deploy** | Vercel |

---

## ARQUITECTURA DEL PROYECTO

### Estructura de Carpetas
```
wedding-app/
├── src/
│   ├── pages/
│   │   ├── Landing.tsx           # ← Página principal
│   │   └── Invitation.tsx        # ← Invitación dinámica /invitation/:id
│   ├── components/
│   │   ├── Hero.tsx              # Landing: Hero section
│   │   ├── HowItWorks.tsx        # Landing: Pasos
│   │   ├── Features.tsx          # Landing: Características
│   │   ├── ExamplesShowcase.tsx  # Landing: Galería de ejemplos
│   │   ├── InvitationTemplate.tsx # Invitación: Template
│   │   ├── Gallery.tsx           # Invitación: Carrusel fotos
│   │   ├── CountdownTimer.tsx    # Invitación: Cuenta regresiva
│   │   ├── Itinerary.tsx         # Invitación: Timeline
│   │   ├── VenueInfo.tsx         # Invitación: Ubicación
│   │   ├── GiftRegistry.tsx      # Invitación: Regalos
│   │   └── SongPlaylist.tsx      # Invitación: Canción
│   ├── data/
│   │   └── invitations.ts        # ← Datos de 5 invitaciones (JSON)
│   ├── types/
│   │   └── invitation.ts         # ← Interfaces TypeScript
│   ├── styles/
│   │   └── globals.css           # ← CSS global
│   ├── App.tsx                   # ← Router principal
│   └── main.tsx
├── public/
├── tailwind.config.js
├── vite.config.ts
├── package.json
└── .gitignore
```

### Rutas de la Aplicación
- `GET /` → Landing page (home)
- `GET /invitation/:id` → Página de invitación (ej: /invitation/1)

---

## ESTRUCTURA DE DATOS - Invitación

Cada invitación en `src/data/invitations.ts` tendrá esta estructura:

```typescript
interface Invitation {
  id: string;
  couple: {
    bride: string;      // "María"
    groom: string;      // "Juan"
  };
  date: string;         // "2024-06-15"
  time: string;         // "18:00"
  location: {
    name: string;       // "Hacienda Los Robles"
    address: string;    // "Calle Principal 123, Ciudad"
    coordinates: [number, number];
  };
  couplePhoto: string;  // URL de foto
  photos: string[];     // URLs de galería
  dressCode: string;    // "Formal elegante"
  giftRegistry: string; // Link a Amazon/registry
  itinerary: Array<{
    time: string;       // "18:00"
    event: string;      // "Recepción"
  }>;
  song: {
    title: string;
    artist: string;
    spotifyUrl?: string;
  };
  message: string;      // Mensaje personalizado
  theme: "elegant" | "minimal" | "bohemian" | "floral" | "playful";
}
```

---

## PLAN DE IMPLEMENTACIÓN (6 FASES)

### Fase 1: Setup Vite + Tailwind (30 min) ← 🎯 PRÓXIMA
**Comandos a ejecutar:**
```bash
npm create vite@latest . -- --template react-ts
npm install
npm install react-router-dom framer-motion dayjs
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```

**Salida esperada:** Vite corriendo en http://localhost:5173/

---

### Fase 2: Landing Page (2-3 horas)
Crear:
- `src/pages/Landing.tsx`
- `src/components/Hero.tsx`
- `src/components/HowItWorks.tsx`
- `src/components/Features.tsx`
- `src/components/ExamplesShowcase.tsx`

**Secciones:**
1. Hero section atractiva
2. Cómo funciona (3-4 pasos)
3. Características principales
4. Galería de 5 invitaciones con previews

---

### Fase 3: Datos y Modelos (1 hora)
Crear:
- `src/data/invitations.ts` - Array con 5 parejas
- `src/types/invitation.ts` - Interfaces TypeScript

**Contenido:** 5 invitaciones de ejemplo hardcodeadas

---

### Fase 4: Página de Invitación (3-4 horas)
Crear:
- `src/pages/Invitation.tsx`
- `src/components/InvitationTemplate.tsx`
- `src/components/Gallery.tsx`
- `src/components/CountdownTimer.tsx`
- `src/components/Itinerary.tsx`
- `src/components/VenueInfo.tsx`
- `src/components/GiftRegistry.tsx`
- `src/components/SongPlaylist.tsx`

**Features:**
- Foto de pareja
- Nombres + fecha/hora
- Cuenta regresiva animada
- Galería con carrusel
- Timeline del día
- Información ubicación
- Link regalos
- Canción favorita

---

### Fase 5: 5 Ejemplos con Temas Diferentes (2-3 horas)
**5 temas visuales:**
1. **Elegante clásico** - Dorado/blanco
2. **Moderno minimalista** - Gris/negro
3. **Bohemio** - Terracota/verde
4. **Floral** - Colores pastel
5. **Playful** - Colores vibrantes

**Acciones:**
- Agregar campo `theme` a cada invitación
- Hook `useInvitationTheme()` para aplicar colores
- 4 invitaciones adicionales en datos

---

### Fase 6: Polish + Animaciones (2 horas)
- Responsive design (mobile, tablet, desktop)
- Animaciones con Framer Motion
- Fade-in, slide-in, scroll triggers
- Optimizaciones de performance

---

## TIMELINE TOTAL

| Fase | Duración | Estado |
|------|----------|--------|
| 1. Setup | 30 min | ⏭️ PRÓXIMA |
| 2. Landing | 2-3 h | ⏹️ Pendiente |
| 3. Datos | 1 h | ⏹️ Pendiente |
| 4. Invitación | 3-4 h | ⏹️ Pendiente |
| 5. 5 Ejemplos | 2-3 h | ⏹️ Pendiente |
| 6. Polish | 2 h | ⏹️ Pendiente |
| **TOTAL** | **11-17 h** | 📊 En progreso |

---

## ARCHIVOS CLAVE A CREAR

1. **Configuración:**
   - `tailwind.config.js` - Temas y colores
   - `vite.config.ts` - Config bundler

2. **Tipos:**
   - `src/types/invitation.ts` - Interfaces TS

3. **Datos:**
   - `src/data/invitations.ts` - 5 invitaciones

4. **Páginas:**
   - `src/pages/Landing.tsx` - Homepage
   - `src/pages/Invitation.tsx` - Invitación dinámica

5. **Componentes Landing:**
   - `src/components/Hero.tsx`
   - `src/components/HowItWorks.tsx`
   - `src/components/Features.tsx`
   - `src/components/ExamplesShowcase.tsx`

6. **Componentes Invitación:**
   - `src/components/InvitationTemplate.tsx`
   - `src/components/Gallery.tsx`
   - `src/components/CountdownTimer.tsx`
   - `src/components/Itinerary.tsx`
   - `src/components/VenueInfo.tsx`
   - `src/components/GiftRegistry.tsx`
   - `src/components/SongPlaylist.tsx`

7. **Router:**
   - `src/App.tsx` - Configuración rutas

---

## DECISIONES ARQUITECTÓNICAS

✅ **MVP Estático:** Evita complejidad innecesaria de backend
✅ **React Router v6:** Navegación simple y limpia
✅ **Tailwind CSS:** Desarrollo rápido sin escribir CSS
✅ **Framer Motion:** Animaciones profesionales sin esfuerzo
✅ **Vite:** 3x más rápido que Create React App
✅ **TypeScript:** Type safety desde el principio
✅ **Datos hardcodeados:** Fácil de migrar a backend después
✅ **Vercel Deploy:** Hosting gratuito y automático

---

## DIFERENCIAS vs. PLAN ORIGINAL

| Aspecto | Plan Original | MVP Actual |
|--------|---------------|-----------|
| **Backend** | Node.js + Express | ❌ Ninguno |
| **Base de datos** | MongoDB | ❌ JSON local |
| **Autenticación** | JWT + Login | ❌ Todo público |
| **Admin panel** | Crear/editar invitaciones | ❌ Sin edición |
| **RSVP** | Respuestas guardadas | ❌ Solo demo |
| **Deploy** | Monorepo | ✅ Frontend simple |
| **Tiempo** | 14 días | ✅ 1-2 días |
| **Complejidad** | Alta | ✅ Baja |

---

## PRÓXIMOS PASOS INMEDIATOS

### Hoy (Fase 1):
1. Abre terminal en `d:\Aplicacion\wedding-app`
2. Ejecuta los comandos de setup de Vite
3. Verifica que `npm run dev` funciona en http://localhost:5173/

### Después (Fases 2-6):
1. Crear Landing page
2. Agregar datos de invitaciones
3. Crear página de invitación completa
4. Agregar 5 ejemplos con diferentes temas
5. Polish final con animaciones

---

## PREGUNTAS FRECUENTES

**P: ¿Y si quiero agregar backend después?**
R: Es fácil. Puedes migrar los datos a MongoDB y agregar una API Express en paralelo.

**P: ¿Puedo agregar más invitaciones después?**
R: Sí, solo agrega más objetos al array en `src/data/invitations.ts`

**P: ¿Y si quiero monetizar?**
R: Fase 7 podría ser agregar Stripe + planes, pero es opcional.

**P: ¿Dónde hosteo?**
R: Vercel (gratis, integración con GitHub, deploys automáticos)

**P: ¿Puedo modificar los temas?**
R: Sí, los colores están en `tailwind.config.js` y props del componente.

---

## COMANDOS QUICK REFERENCE

```bash
# Instalar todo
npm create vite@latest . -- --template react-ts && npm install && npm install react-router-dom framer-motion dayjs && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```
