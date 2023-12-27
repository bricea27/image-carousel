import { useCallback, useEffect, useState } from "react";

type Image = {
  url: string;
};

type ImageData = {
  url_overridden_by_dest: string;
};

type ResponseObject = {
  data: ImageData;
};

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif"];

export const useImages = () => {
  const [images, setImages] = useState<Image[]>([]);

  const fetchImages = useCallback(async () => {
    try {
      const data = await fetch("https://www.reddit.com/r/aww/top/.json?t=all");
      const response = await data.json();

      if (!response.data.children.length) {
        setImages([]);
        return;
      }

      setImages(
        response.data.children
          // Only return valid images
          .filter((child: ResponseObject) => {
            return ALLOWED_EXTENSIONS.some((extension) => {
              return child.data.url_overridden_by_dest.includes(extension);
            });
          })
          // Simplify the response
          .map((child: ResponseObject): Image => {
            return {
              url: child.data.url_overridden_by_dest,
            };
          })
      );
    } catch (e) {
      setImages([]);
    }
  }, []);

  useEffect(() => {
    if (!images.length) {
      fetchImages();
    }
  }, [fetchImages, images.length]);

  return { images };
};
