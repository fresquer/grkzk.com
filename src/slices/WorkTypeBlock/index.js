/**
 * @typedef {import("@prismicio/client").Content.WorkTypeBlockSlice} WorkTypeBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkTypeBlockSlice>} WorkTypeBlockProps
 * @param {WorkTypeBlockProps}
 */
const WorkTypeBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for work_type_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default WorkTypeBlock;
