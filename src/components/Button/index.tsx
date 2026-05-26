import syles from "./styles.module.css";

type ButtonProps = React.ComponentProps<"button"> & {
  title: string;
};

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <button className={syles.button} {...rest}>
      {title}
    </button>
  );
}
