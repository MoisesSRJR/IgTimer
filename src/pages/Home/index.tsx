import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput } from "./styles";
import { StartCountDownButton } from "../../components/Button";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState, useEffect } from "react";
import { differenceInSeconds } from 'date-fns'
import { HandPalm, Play } from "@phosphor-icons/react";

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

const newCycleFormValidationSchema = zod.object({
   task: zod.string().min(1, 'Informe a tarefa'),
   minutesAmount: zod
      .number()
      .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
      .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

interface Cycle {
   id: string
   task: string
   minutesAmount: number
   startDate: Date
   interruptedDate?: Date
 }

export function Home() {
   const [cycles, setCycles] = useState<Cycle[]>([])
   const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
   const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

   const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
         task: '',
         minutesAmount: 0,
      },
   })

   function handleCreateNewCycle(data: NewCycleFormData) {
      const id = String(new Date().getTime())

      const newCycle: Cycle = {
        id,
        task: data.task,
        minutesAmount: data.minutesAmount,
        startDate: new Date(),
      }

      setCycles((state) => [...state, newCycle])
      setActiveCycleId(id)
      setAmountSecondsPassed(0)
      reset()
   }

   function handleInterruptCycle() {
      setCycles(
        cycles.map((cycle) => {
          if (cycle.id === activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          } else {
            return cycle
          }
        }),
      )
      setActiveCycleId(null)
    }

   const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

   const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
   const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

   const minutesAmount = Math.floor(currentSeconds / 60)
   const secondsAmount = currentSeconds % 60

   const minutes = String(minutesAmount).padStart(2, '0')
   const seconds = String(secondsAmount).padStart(2, '0')

   const task = watch('task')
   const isSubmitDisable = !task

   useEffect(() => {
      let interval: NodeJS.Timer

      if (activeCycle) {
        interval = setInterval(() => {
          setAmountSecondsPassed(
            differenceInSeconds(new Date(), activeCycle.startDate),
          )
        }, 1000)
      }

      return () => {
        clearInterval(interval)
      }
    }, [activeCycle])

    useEffect(() => {
      if (activeCycle) {
        document.title = `${minutes}:${seconds}`
      }
    }, [minutes, seconds, activeCycle])

   return (
      <HomeContainer>
         <form onSubmit={handleSubmit(handleCreateNewCycle)}>
            <FormContainer>
               <label htmlFor="task">Vou trabalhar em</label>
               <TaskInput
                  id="task"
                  placeholder="De um nome para seu projeto"
                  list="task-suggestions"
                  {...register('task')}
                  disabled={!!activeCycle} //!! Significa boolean
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
                  {...register('minutesAmount', { valueAsNumber: true })}
                  disabled={!!activeCycle}
               />
               <span>minutos.</span>
            </FormContainer>

            <CountdownContainer>
               <span>{minutes[0]}</span>
               <span>{minutes[1]}</span>
               <Separator>:</Separator>
               <span>{seconds[0]}</span>
               <span>{seconds[1]}</span>
            </CountdownContainer>

            {activeCycle ? (
               <StartCountDownButton
                  label="Interromper"
                  icon={<HandPalm size={24}/>}
                  backgroundColor="#AB222E"
                  hoverBackgroundColor="#7A1921"
                  onClick={handleInterruptCycle}
               />
            ) : (
               <StartCountDownButton
                  disabled={isSubmitDisable}
                  label="Começar"
                  icon={<Play size={24}/>}
                  type="submit"
               />
            )}
         </form>
      </HomeContainer>
   )
}
