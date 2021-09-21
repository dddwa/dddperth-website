import React from 'react'
import { Conference as IConference, Dates } from 'config/types'
import Conference from 'config/conference'
import dateTimeProvider, { CurrentDate } from 'components/utils/dateTimeProvider'
import getConferenceDates from 'config/dates'

interface AppConfig {
  baseUrl: string
  feedbackUrl: string
  getAgendaUrl: string
  getSubmissionsUrl: string
  instrumentationKey: string
  submitVoteUrl: string
  testingMode: boolean
}

interface ConfigState {
  appConfig: AppConfig
  currentDate: CurrentDate
  conference: IConference
  dates: Dates
}

const ConfigContext = React.createContext<ConfigState | undefined>(undefined)

const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentDate, setCurrentDate] = React.useState(dateTimeProvider.now())

  React.useEffect(() => {
    const intervalID = setInterval(() => {
      // console.info('CurrentDate tick')
      setCurrentDate(dateTimeProvider.now())
      // TODO: check for testing mode testing = 1000, conference 60000
    }, 1000)
    return function currentDateCleanup() {
      clearInterval(intervalID)
    }
  }, [])

  return (
    <ConfigContext.Provider
      value={{
        appConfig: {
          baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
          feedbackUrl: process.env.NEXT_PUBLIC_SUBMIT_FEEDBACK_URL,
          getAgendaUrl: process.env.NEXT_PUBLIC_GET_AGENDA_URL,
          getSubmissionsUrl: process.env.NEXT_PUBLIC_GET_SUBMISSIONS_URL,
          instrumentationKey: process.env.NEXT_PUBLIC_APPINSIGHTS_INSTRUMENTATIONKEY,
          submitVoteUrl: process.env.NEXT_PUBLIC_SUBMIT_VOTE_URL,
          testingMode: process.env.NEXT_PUBLIC_TESTING_MODE === 'true',
        },
        currentDate,
        dates: getConferenceDates(Conference, currentDate),
        conference: Conference,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

const useConfig = () => {
  const config = React.useContext(ConfigContext)

  if (!config) {
    throw new Error('useConference needs to be within a ConferenceProvider')
  }

  return config
}

export { ConfigProvider, useConfig }
