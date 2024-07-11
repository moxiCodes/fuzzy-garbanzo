type MyFirstComponentProps = {
  message: string;
};

export const MyFirstComponent = ({ message }: MyFirstComponentProps) => (
  <h2>{message}</h2>
);

export function MyFirstComponentFunction({ message }: MyFirstComponentProps) {
  return <h2>{message}</h2>;
}
