import { HomeContainer } from "./styles";
import { StartCountDownButton } from "../../components/Button";
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from "react";
import { HandPalm, Play } from "@phosphor-icons/react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

const newCycleFormValidationSchema = zod.object({
   task: zod.string().min(1, 'Informe a tarefa'),
   minutesAmount: zod
      .number()
      .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
      .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

export function Home() {
   const { activeCycle, createNewCycle, interruptCurrentCycle } =
   useContext(CyclesContext)

 const newCycleForm = useForm<NewCycleFormData>({
   resolver: zodResolver(newCycleFormValidationSchema),
   defaultValues: {
     task: '',
     minutesAmount: 0,
   },
 })

 const { handleSubmit, watch, reset } = newCycleForm

 function handleCreateNewCycle(data: NewCycleFormData) {
   createNewCycle(data)
   reset()
 }

 const task = watch('task')
 const isSubmitDisable = !task

   return (
      <HomeContainer>
         <form onSubmit={handleSubmit(handleCreateNewCycle)}>
         <FormProvider {...newCycleForm}>
            <NewCycleForm />
         </FormProvider>
         <Countdown />
            {activeCycle ? (
               <StartCountDownButton
                  label="Interromper"
                  icon={<HandPalm size={24} />}
                  backgroundColor="#AB222E"
                  hoverBackgroundColor="#7A1921"
                  onClick={interruptCurrentCycle}
               />
            ) : (
               <StartCountDownButton
                  disabled={isSubmitDisable}
                  label="Começar"
                  icon={<Play size={24} />}
                  type="submit"
               />
            )}
         </form>
      </HomeContainer>
   )
}
