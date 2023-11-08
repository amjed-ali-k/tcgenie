import React, { FormEventHandler, forwardRef, useState } from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "./button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { ScrollArea } from "./scroll-area"

export interface ComboboxOption {
  value: string
  label: React.ReactNode
}

type ComboboxProps = {
  options: () => ComboboxOption[]
  emptyText?: string
  clearable?: boolean
  selectPlaceholder?: string
  searchPlaceholder?: string
  value?: string
  searchValue?: string
  onSearchValueChange?: FormEventHandler<HTMLInputElement>
  onValueChange?: (value: string) => void
}

export const handleSingleSelect = (
  props: ComboboxProps,
  option: ComboboxOption
) => {
  if (props.clearable) {
    props.onValueChange?.(option.value === props.value ? "" : option.value)
  } else {
    props.onValueChange?.(option.value)
  }
}

export const Combobox = forwardRef(
  (props: ComboboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const [open, setOpen] = useState(false)

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            variant="outline"
            aria-expanded={open}
            className="w-full justify-between hover:bg-secondary/20 active:scale-100"
          >
            <span className="line-clamp-1 text-left font-normal">
              {props.value && props.value !== "" && props.value}

              {!props.value ||
                (props.value.length === 0 &&
                  (props.selectPlaceholder ?? "Select an option"))}
            </span>
            <ChevronDown
              className={cn(
                "ml-2 h-4 w-4 shrink-0 rotate-0 opacity-50 transition-transform",
                open && "rotate-180"
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="p-0 sm:w-[600px] md:w-[460px] lg:w-[700px] xl:w-[930px]"
        >
          <Command
            value={props.searchValue}
            onChange={props.onSearchValueChange}
            shouldFilter={false}
          >
            <CommandInput
              ref={ref}
              placeholder={props.searchPlaceholder ?? "Search for an option"}
            />
            <CommandEmpty>{props.emptyText ?? "No results found"}</CommandEmpty>
            <CommandGroup>
              <ScrollArea>
                <div className="max-h-60">
                  {props.options().map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value.toLowerCase().trim()}
                      onSelect={(selectedValue) => {
                        const option = props
                          .options()
                          .find(
                            (option) =>
                              option.value.toLowerCase().trim() ===
                              selectedValue
                          )

                        if (!option) return null

                        handleSingleSelect(props, option)

                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4 opacity-0",

                          props.value === option.value && "opacity-100"
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </div>
              </ScrollArea>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
)

Combobox.displayName = "Combobox"
