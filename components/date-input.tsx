import { useState } from "react"
import format from "date-fns/format"
import parse from "date-fns/parse"
import { ControllerRenderProps } from "react-hook-form"

import { Input } from "./ui/input"

export const DateInput = ({
  onChange,
  onBlur,
  value,
  ...field
}: ControllerRenderProps) => {
  const [currentValue, setcurrentValue] = useState<string>()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setcurrentValue(e.target.value)
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault()
    const val = e.target.value.replaceAll("/", "-").replaceAll(" ", "-")
    if (val === "") return onBlur()
    if (!val) return onBlur()
    try {
      const date = parse(val, "dd-MM-yyyy", new Date())
      setcurrentValue(format(date, "dd-MM-yyyy"))
      onChange(date)
    } catch (error) {
      setcurrentValue("Invalid Date")
    }
    onBlur()
  }

  return (
    <Input
      autoComplete="on"
      placeholder="31-01-2001"
      onBlur={handleBlur}
      onChange={handleChange}
      value={currentValue}
      {...field}
    />
  )
}
