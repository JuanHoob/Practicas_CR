import PropTypes from "prop-types";

export const BlogElement = (props) => {
  return (
    <section>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </section>
  );
};

BlogElement.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
