export default function Logo({ className = '', invert = false, priority = false }) {
  return (
    <picture>
      <source srcSet="/logo.webp" type="image/webp" />
      <img
        alt="Paul & Greg"
        src="/logo.png"
        className={`${invert ? 'brightness-0 invert' : ''} ${className}`}
        width={1250}
        height={1250}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    </picture>
  );
}
