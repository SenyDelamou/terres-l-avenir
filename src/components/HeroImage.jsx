function HeroImage({ src, alt }) {
  return (
    <div className="responsive-media reveal">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export default HeroImage;
