import { Play } from "@phosphor-icons/react";
import { Button } from "./styles";

interface ButtonProps {
   disabled?: boolean;
}

export function StartCountDownButton({ disabled }: ButtonProps) {
   return (
      <Button type="submit" disabled={disabled}>
         <Play size={24}/>
         Começar
      </Button>
   )
}

StartCountDownButton.defaultProps = {
   disabled: false,
}
