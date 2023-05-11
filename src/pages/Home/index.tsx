import { Play } from "@phosphor-icons/react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput } from "./styles";
import { StartCountDownButton } from "../../components/Button";

export function Home() {
   return (
      <HomeContainer>
         <form action="">
            <FormContainer>
               <label htmlFor="task">Vou trabalhar em</label>
               <TaskInput
                  id="task"
                  placeholder="De um nome para seu projeto"
               />

               <label htmlFor="minutesAmount">durante</label>
               <MinutesAmountInput
                  type="number"
                  id="minutesAmount"
                  placeholder="00"
               />

               <span>minutos.</span>
            </FormContainer>

            <CountdownContainer>
               <span>0</span>
               <span>0</span>
               <Separator>:</Separator>
               <span>0</span>
               <span>0</span>
            </CountdownContainer>

            <StartCountDownButton
               disabled
            />
         </form>
      </HomeContainer>
   )
}
