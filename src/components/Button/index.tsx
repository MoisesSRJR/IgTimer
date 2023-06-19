import { Button } from "./styles";
import { ReactElement } from "react";

interface ButtonProps {
   disabled?: boolean;
   label: string;
   backgroundColor?: string;
   hoverBackgroundColor?: string;
   icon: ReactElement;
   type?: "button" | "submit" | "reset"
   onClick?: () => void;
}

export function StartCountDownButton({ disabled, label, backgroundColor, hoverBackgroundColor, icon, type, onClick }: ButtonProps) {
   return (
      <Button type={type} disabled={disabled} backgroundColor={backgroundColor} onClick={onClick} hoverBackgroundColor={hoverBackgroundColor}>
         {icon}
         {label}
      </Button>
   )
}

StartCountDownButton.defaultProps = {
   disabled: false,
   type: 'button'
}
