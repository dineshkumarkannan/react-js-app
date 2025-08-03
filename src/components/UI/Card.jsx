import clsx from "clsx";

const Card = ({ children, className, ...props }) => {
  return (
    <section
      className={clsx(
        "bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700",
        className
      )}
      role="region"
      {...props}
    >
      {children}
    </section>
  );
};

export default Card;
