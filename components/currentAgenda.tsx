import React from 'react'
import { Fragment, StatelessComponent } from 'react'
import Agenda, { AgendaProps } from './agenda'

const CurrentAgenda: StatelessComponent<AgendaProps> = ({ SessionCell }) => <Fragment>todo</Fragment>

export default Agenda(CurrentAgenda, { numTracks: 4 })
