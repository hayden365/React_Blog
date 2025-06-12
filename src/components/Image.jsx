import { buildSrc, Image as IKImage } from "@imagekit/react";
import { useCallback, useState } from "react";

const Image = ({ src, className, w, h, alt }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const hidePlaceholder = () => setShowPlaceholder(false);

  const imgRef = useCallback((img) => {
    if (!img) return; // unmount

    if (img.complete) {
      hidePlaceholder();
      return;
    }
  }, []);

  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      className={className}
      loading="lazy"
      width={w}
      height={h}
      alt={alt}
      ref={imgRef}
      style={
        showPlaceholder
          ? {
              backgroundImage: `url(${buildSrc({
                urlEndpoint: "https://ik.imagekit.io/ikmedia",
                src: "/default-image.jpg",
                transformation: [
                  // {}, // Any other transformation you want to apply to the placeholder image
                  {
                    quality: 10,
                    blur: 90,
                  },
                ],
              })})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    />
  );
};

export default Image;
