const modules = import.meta.glob('../assets/banner/*.{jpg,jpeg,png,webp,gif}', {
  eager: true,
}) as Record<string, { default: string }>

const images = Object.values(modules).map((m) => m.default)

export default function BannerCarousel() {
  if (images.length === 0) return null

  const track = [...images, ...images]

  return (
    <section className="py-16" style={{ backgroundColor: '#213F99' }}>
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#E1B0AC' }}>
          Galería
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Momentos que inspiran
        </h2>
      </div>

      <div className="overflow-hidden w-full">
        <div
          className="flex gap-4"
          style={{
            width: 'max-content',
            animation: 'banner-scroll 22s linear infinite',
          }}
        >
          {track.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-2xl overflow-hidden"
              style={{ width: '380px', height: '260px' }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
