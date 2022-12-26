import React, { useState } from "react"
import TerminCard from "./TerminCard"
import termineJson from "../data/homepage-termine.json"
const termine: Termin[] = termineJson.termine.map((item) => {
  return { ...item, key: uuidv4() }
})
import {
  format,
  compareAsc,
  addMonths,
  startOfToday,
  endOfToday,
  isWithinInterval,
} from "date-fns"
import { v4 as uuidv4 } from "uuid"

type Termin = {
  title: string
  image: string
  date: {
    allDay: boolean
    start: string
    end?: string
  }
  location: string
  link?: string
  externalLink?: boolean
  key: string
}

const nextMonthsFilterMax = 12
const nextMonthMinTermine = 3

type Props = {}

const TerminList = ({}: Props) => {
  const [showMin, setShowMin] = useState(true)

  const getDateString = (allDay: boolean, start: string, end: string) => {
    if (end) {
      if (allDay) {
        const from = format(new Date(start), "dd.MM.yyyy")
        const to = format(new Date(end), "dd.MM.yyyy")
        return from + " - " + to
      } else {
        const from = format(new Date(start), "dd.MM.yyyy HH:mm")
        const to = format(new Date(end), "dd.MM.yyyy HH:mm")
        return from + " Uhr - " + to + " Uhr"
      }
    } else {
      if (allDay) {
        const from = format(new Date(start), "dd.MM.yyyy")
        return from
      } else {
        const from = format(new Date(start), "dd.MM.yyyy HH:mm")
        return from + " Uhr"
      }
    }
  }

  const handleShowMoreButton = () => {
    setShowMin((prev) => !prev)
  }

  const getFilteredTermineTo = (to: number) => {
    return termine
      .filter((termin) =>
        isWithinInterval(new Date(termin.date.start), {
          start: startOfToday(),
          end: addMonths(endOfToday(), to),
        })
      )
      .sort((a, b) =>
        compareAsc(new Date(a.date.start), new Date(b.date.start))
      )
  }

  const filteredTermineMin = termine.slice(0, nextMonthMinTermine)

  const filteredTermineMax = getFilteredTermineTo(nextMonthsFilterMax)

  const filteredTermine = showMin ? filteredTermineMin : filteredTermineMax

  return (
    <>
      <ul className="grid mt-4 gap-6 place-items-start">
        {filteredTermine.map((termin) => (
          <TerminCard
            title={termin.title}
            image={termin.image}
            date={getDateString(
              termin.date.allDay,
              termin.date.start,
              termin.date.end
            )}
            location={termin.location}
            link={termin.link}
            externalLink={termin.externalLink}
            key={termin.key}
          />
        ))}
      </ul>

      {filteredTermineMax.length > filteredTermineMin.length && (
        <button
          className="mt-4 hover:underline self-start text-gray-600 text-xl"
          onClick={handleShowMoreButton}
        >
          {showMin ? "Mehr anzeigen" : "Weniger anzeigen"}
        </button>
      )}
    </>
  )
}

export default TerminList
