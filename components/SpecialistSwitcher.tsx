interface SpecialistSwitcherProps {

}

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SpecialistSwitcher({listItems}:{ listItems: string[] }) {
  return (
    <Select>
      <SelectTrigger className="w-2/3">
        <SelectValue placeholder="Selecciona el especialista que necesites" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>          
          {listItems.map((listItem) => <SelectItem key={listItem} value={listItem}>{listItem}</SelectItem> )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

          