interface ISetButton {
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}
const SetButton = ({ value, setValue }: ISetButton) => {
  return <button onClick={setValue}>Set to {value}</button>;
};

export default SetButton;
