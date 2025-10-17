
import data from './placeholder-images.json';

/**
 * @file This file exports the placeholder image data and its corresponding TypeScript type.
 */

/**
 * Defines the structure for an image placeholder object.
 */
export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

/**
 * An array of placeholder image data, imported from the JSON file.
 */
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
