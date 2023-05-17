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
                  list="task-suggestions"
               />

               <datalist id="task-suggestions">
                  <option value="Projeto 1" />
                  <option value="Projeto 2" />
                  <option value="Projeto 3" />
                  <option value="Projeto 4" />
                  <option value="Projeto 5" />
               </datalist>

               <label htmlFor="minutesAmount">durante</label>
               <MinutesAmountInput
                  type="number"
                  id="minutesAmount"
                  placeholder="00"
                  step={5}
                  min={5}
                  max={60}
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
