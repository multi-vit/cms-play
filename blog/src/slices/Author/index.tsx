import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Author`.
 */
export type AuthorProps = SliceComponentProps<Content.AuthorSlice>;

/**
 * Component for "Author" Slices.
 */
const Author = ({ slice }: AuthorProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for author (variation: {slice.variation}) Slices
    </section>
  );
};

export default Author;
